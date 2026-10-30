
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
                *  
                *  By agreeing to this license you and any business entity you represent are
                *  legally bound to the AllBinary Open License Version 1 legal agreement.
                *  
                *  You may obtain the AllBinary Open License Version 1 legal agreement from
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
                *  
                *  Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */

        


            import { Exception } from '../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../java/lang/RuntimeException.js';
        
            import { Thread } from '../../../java/lang/Thread.js';
        
import { InputStream } from '../../../java/io/InputStream.js';
//not GWT import const InputStream

import { Image } from '../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image

import { NullImage } from '../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const NullImage

import { J2MEUtil } from '../../../org/allbinary/J2MEUtil.js';
//not GWT import const J2MEUtil

import { TsUtil } from '../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil

//not plain js import { ResourceUtil } 
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;
type ResourceUtil<T = any, U = any> = typeof ResourceUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ResourceUtil;

import { GDResources } from '../../../org/allbinary/game/gd/resource/GDResources.js';
//not GWT import const GDResources

//not plain js import { ABSystemWrapper } 
const ABSystemWrapper = globalThis.org.allbinary.logic.ABSystemWrapper;
type ABSystemWrapper<T = any, U = any> = typeof ABSystemWrapper extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABSystemWrapper;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { Memory } from '../../../org/allbinary/system/Memory.js';
//not GWT import const Memory

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageCacheBase } from './ImageCacheBase.js';
//not GWT import - same folder const ImageCacheBase

export class ImageCache extends ImageCacheBase {
        

    public static readonly NULL_IMAGE_CACHE: ImageCache = new ImageCache();

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly tsUtil: TsUtil = TsUtil.getInstance()!;

public constructor (){

            super();
        }


    public addListener(renderer: any){
}


    public getIndex(key: any): number{

    let gdResources: GDResources = GDResources.getInstance()!;;
    

    let resourceStringArray: string[] = gdResources!.resourceStringArray;;
    

    let size: number = resourceStringArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

                        if(resourceStringArray[index] == key)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return index;
    

                                    }
                                
}

this.logUtil!.putF(new StringMaker().append("unable to find key: ")!.append(StringUtil.getInstance()!.toString(key))!.toString(), this, this.commonStrings!.RUN);
    



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public get(caller: string, width: number, height: number): Image{

    let foundIndex: number = this.getIndexWH(width, height)!;;
    

    let image: Image = this.getFromAvailable(foundIndex, width, height)!;;
    

                        if(image == NullImage.NULL_IMAGE)
                        
                                    {
                                    this.volume += width *height;
    

                        if(this.volume > 32000)
                        
                                    {
                                    this.tsUtil!.gc();
    
this.volume= 0;
    

                                    }
                                
image= this.createImage(caller, width, height);
    

    let widths: number[] = this.widths;;
    

                        if(this.nextIndex > widths.length -1)
                        
                                    {
                                    
                        if(foundIndex ==  -1)
                        
                                    {
                                    foundIndex= this.nextIndex;
    
widths[this.nextIndex]= width;
    
this.heights[this.nextIndex]= height;
    
this.nextIndex++;
    

                                    }
                                
this.listOfList[foundIndex]!.add(image);
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


                //@Throws(Exception.constructor)
            
    public getWithKey(key: any): Image{

    let image: Image = this.getImage(key)!;;
    

                        if(image == NullImage.NULL_IMAGE)
                        
                                    {
                                    
    let resourceUtil: ResourceUtil = ResourceUtil.getInstance()!;;
    

    let resourceInputStream: InputStream = resourceUtil!.getResourceAsStream(key as string)!;;
    

                        if(resourceInputStream == 
                                    null
                                )
                        
                                    {
                                    


                            throw new RuntimeException(new StringMaker().append("Image resource is not available for key: ")!.append(StringUtil.getInstance()!.toString(key))!.toString());
                    

                                    }
                                

 try { image= this.createImageFromInputStream(key, resourceInputStream);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put("Exception: Trying Again After GC", this, this.commonStrings!.GET, e);
    
this.logUtil!.putF(new StringMaker().append("InputStream: ")!.append(StringUtil.getInstance()!.toString(resourceInputStream))!.toString(), this, this.commonStrings!.GET);
    
this.tsUtil!.gc();
    
this.tsUtil!.gc();
    
this.logUtil!.putF(Memory.getInfo(), this, this.commonStrings!.GET);
    
Thread.sleep(100);
    
image= this.createImageFromInputStream(key, resourceInputStream);
    

 }
   }
 

                        if(J2MEUtil.isHTML())
                        
                                    {
                                    
                                    }
                                
                        else {
                            resourceInputStream!.close();
    

                        }
                            
this.hashtable.put(key, image);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


                //@Throws(Exception.constructor)
            
    public loadImageForAnimation(){
}


    public progressEnded(){
}


    public runTask(){
}


    public isLazy(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}

