
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
        
            import { System } from '../../../java/lang/System.js';
        
            import { Integer } from '../../../java/lang/Integer.js';
        
            import { Thread } from '../../../java/lang/Thread.js';
        
import { InputStream } from '../../../java/io/InputStream.js';
      //not GWT import const InputStream = globalThis.java.io.InputStream;

      
//not plain js import { Image } from '../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
import { NullImage } from '../../../javax/microedition/lcdui/NullImage.js';
      //not GWT import const NullImage = globalThis.javax.microedition.lcdui.NullImage;

      
//not plain js import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { ResourceUtil } from '../../../org/allbinary/data/resource/ResourceUtil.js';
      //not GWT import const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;

      
import { GDResources } from '../../../org/allbinary/game/gd/resource/GDResources.js';
      //not GWT import const GDResources = globalThis.org.allbinary.game.gd.resource.GDResources;

      
//not plain js import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { Memory } from '../../../org/allbinary/system/Memory.js';
      //not GWT import const Memory = globalThis.org.allbinary.system.Memory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageCacheBase } from './ImageCacheBase.js';
//not GWT import const ImageCacheBase = globalThis.org.allbinary.image.ImageCacheBase;

                
export class ImageCache extends ImageCacheBase {
        

    public static readonly NULL_IMAGE_CACHE: ImageCache = new ImageCache();

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

public constructor (){

            super();
        }


    public addListener(renderer: any = {}){
}


    public getIndex(key: any = {}): number{

    var gdResources: GDResources = GDResources.getInstance()!;;
    

    var resourceStringArray: string[] = gdResources!.resourceStringArray;;
    

    var size: number = resourceStringArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
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

    var foundIndex: number = this.getIndexWH(width, height)!;;
    

    var image: Image = this.getFromAvailable(foundIndex, width, height)!;;
    

                        if(image == NullImage.NULL_IMAGE)
                        
                                    {
                                    this.volume += width *height;
    

                        if(this.volume > 32000)
                        
                                    {
                                    System.gc();
    
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
            
    public getWithKey(key: any = {}): Image{

    var resourceUtil: ResourceUtil = ResourceUtil.getInstance()!;;
    

    var resourceId: Integer = resourceUtil!.getResourceId(key as string)!;;
    

    var image: Image = this.getImage(resourceId)!;;
    

                        if(image == NullImage.NULL_IMAGE)
                        
                                    {
                                    
    var inputStream: InputStream = resourceUtil!.getResourceAsStream(key as string)!;;
    

        try {
            this.logUtil!.putF(Memory.getInfo(), this, this.commonStrings!.GET);
    
image= this.createImageFromInputStream(key, inputStream);
    

                //: 
} catch(e) 
            {
this.logUtil!.put("Exception: Trying Again After GC", this, this.commonStrings!.GET, e);
    
this.logUtil!.putF(new StringMaker().append("InputStream: ")!.append(StringUtil.getInstance()!.toString(inputStream))!.toString(), this, this.commonStrings!.GET);
    
System.gc();
    
System.gc();
    
this.logUtil!.putF(Memory.getInfo(), this, this.commonStrings!.GET);
    
Thread.sleep(100);
    
image= this.createImageFromInputStream(key, inputStream);
    
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



