
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
        
            import { Integer } from '../../../java/lang/Integer.js';
        
            import { Thread } from '../../../java/lang/Thread.js';
        
import { InputStream } from '../../../java/io/InputStream.js';
//not GWT import const InputStream

import { Image } from '../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image

import { NullImage } from '../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const NullImage

import { TsUtil } from '../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { ResourceUtil } 
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;
type ResourceUtil<T = any, U = any> = typeof ResourceUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ResourceUtil;

import { GDResources } from '../../../org/allbinary/game/gd/resource/GDResources.js';
//not GWT import const GDResources

//not plain js import { ABSystemWrapper } 
const ABSystemWrapper = globalThis.org.allbinary.logic.ABSystemWrapper;
type ABSystemWrapper<T = any, U = any> = typeof ABSystemWrapper extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABSystemWrapper;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { Memory } from '../../../org/allbinary/system/Memory.js';
//not GWT import const Memory

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageCacheBase } from './ImageCacheBase.js';
//not GWT import - same folder const ImageCacheBase

export class ImageCache extends ImageCacheBase {
        

    public static readonly NULL_IMAGE_CACHE: ImageCache = new ImageCache();

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly systemWrapper: ABSystemWrapper = ABSystemWrapper.getInstance()!;

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
    

                        if(foundIndex ==  -1)
                        
                                    {
                                    foundIndex= this.nextIndex;
    
this.widths[this.nextIndex]= width;
    
this.heights[this.nextIndex]= height;
    
this.nextIndex++;
    

                                    }
                                
this.listOfList[foundIndex]!.add(image);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


                //@Throws(Exception.constructor)
            
    public getWithKey(key: any): Image{

    let resourceUtil: ResourceUtil = ResourceUtil.getInstance()!;;
    

    let resourceId: Integer = resourceUtil!.getResourceId(key as string)!;;
    

    let image: Image = this.getImage(resourceId)!;;
    

                        if(image == NullImage.NULL_IMAGE)
                        
                                    {
                                    
    let inputStream: InputStream = resourceUtil!.getResourceAsStream(key as string)!;;
    

 try { this.logUtil!.putF(Memory.getInfo(), this, this.commonStrings!.GET);
    
image= this.createImageFromInputStream(key, inputStream);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put("Exception: Trying Again After GC", this, this.commonStrings!.GET, e);
    
this.logUtil!.putF(new StringMaker().append("InputStream: ")!.append(StringUtil.getInstance()!.toString(inputStream))!.toString(), this, this.commonStrings!.GET);
    
this.tsUtil!.gc();
    
this.tsUtil!.gc();
    
this.logUtil!.putF(Memory.getInfo(), this, this.commonStrings!.GET);
    
Thread.sleep(100);
    
image= this.createImageFromInputStream(key, inputStream);
    

 }
   }
 
inputStream!.close();
    
this.hashtable.put(resourceId, image);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


    public runTask(){
}


    public isLazy(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}

