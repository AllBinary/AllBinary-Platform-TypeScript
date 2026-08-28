
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
        
//not game specific package import { InputStream } from '../../../java/io/InputStream.js';
      const InputStream = globalThis.java.io.InputStream;

      
//not game specific package import { Image } from '../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { NullImage } from '../../../javax/microedition/lcdui/NullImage.js';
      const NullImage = globalThis.javax.microedition.lcdui.NullImage;

      
//not game specific package import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { ResourceUtil } from '../../../org/allbinary/data/resource/ResourceUtil.js';
      const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;

      
//not game specific package import { GDResources } from '../../../org/allbinary/game/gd/resource/GDResources.js';
      const GDResources = globalThis.org.allbinary.game.gd.resource.GDResources;

      
//not game specific package import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { Memory } from '../../../org/allbinary/system/Memory.js';
      const Memory = globalThis.org.allbinary.system.Memory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageCacheBase } from './ImageCacheBase.js';

export class ImageCache extends ImageCacheBase {
        

    public static readonly NULL_IMAGE_CACHE: ImageCache = new ImageCache();

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

public constructor (){

            super();
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
            
    public get(key: any = {}): Image{

    var resourceUtil: ResourceUtil = ResourceUtil.getInstance()!;;
    

    var resourceId: Integer = resourceUtil!.getResourceId(key as string)!;;
    

    var image: Image = this.getImage(resourceId)!;;
    

                        if(image == NullImage.NULL_IMAGE)
                        
                                    {
                                    
    var inputStream: InputStream = 
                null
            ;;
    

        try {
            this.logUtil!.putF(Memory.getInfo(), this, this.commonStrings!.GET);
    
image= this.createImage(key, inputStream);
    

                //: 
} catch(e) 
            {
this.logUtil!.put("Exception: Trying Again After GC", this, this.commonStrings!.GET, e);
    
this.logUtil!.putF(new StringMaker().append("InputStream: ")!.append(inputStream!.toString())!.toString(), this, this.commonStrings!.GET);
    
System.gc();
    
System.gc();
    
this.logUtil!.putF(Memory.getInfo(), this, this.commonStrings!.GET);
    
Thread.sleep(100);
    
image= this.createImage(key, inputStream);
    
}

this.hashtable.put(resourceId, image);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
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
            
    createImage(key: any = {}, inputStream: InputStream): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Image.createImageLater(key as string,  -1,  -1);;
    
}


    public isLazy(): boolean{



                            throw new RuntimeException();
                    
}


}



