
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
        
import { InputStream } from '../../../../java/io/InputStream.js';
      //not GWT import const InputStream = globalThis.java.io.InputStream;

      
import { GL10 } from '../../../../javax/microedition/khronos/opengles/GL10.js';
      //not GWT import const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;

      
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      //not GWT import const Image = globalThis.javax.microedition.lcdui.Image;

      
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
      //not GWT import const NullImage = globalThis.javax.microedition.lcdui.NullImage;

      
import { NullGL10 } from '../../../../org/allbinary/device/NullGL10.js';
      //not GWT import const NullGL10 = globalThis.org.allbinary.device.NullGL10;

      
import { AllBinaryRendererBase3 } from '../../../../org/allbinary/graphics/opengles/renderer/AllBinaryRendererBase3.js';
      //not GWT import const AllBinaryRendererBase3 = globalThis.org.allbinary.graphics.opengles.renderer.AllBinaryRendererBase3;

      
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { ImageCache } from '../../../../org/allbinary/image/ImageCache.js';
      //not GWT import const ImageCache = globalThis.org.allbinary.image.ImageCache;

      
import { ImageCacheFactory } from '../../../../org/allbinary/image/ImageCacheFactory.js';
      //not GWT import const ImageCacheFactory = globalThis.org.allbinary.image.ImageCacheFactory;

      
import { PreResourceImageUtil } from '../../../../org/allbinary/image/PreResourceImageUtil.js';
      //not GWT import const PreResourceImageUtil = globalThis.org.allbinary.image.PreResourceImageUtil;

      
import { SynchObject } from '../../../../org/allbinary/thread/SynchObject.js';
      //not GWT import const SynchObject = globalThis.org.allbinary.thread.SynchObject;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OpenGLESImage } from './OpenGLESImage.js';
//ImageCacheOpenGLESJavaLibrary
export class OpenGLImageCache extends ImageCache {
        

    private readonly imageCache: ImageCache = ImageCacheFactory.getInstance()!;

    private readonly preResourceImageUtil: PreResourceImageUtil = PreResourceImageUtil.getInstance()!;

    private gl: GL10 = NullGL10.NULL_GL10;

    private readonly lock: SynchObject = new SynchObject();

    private readonly list: BasicArrayList = new BasicArrayListD();

    private renderer: AllBinaryRendererBase3 = new AllBinaryRendererBase3();

public constructor (){

            super();
        }


    public addListener(renderer: any = {}){
this.renderer= renderer as AllBinaryRendererBase3;
    
}


                //@Throws(Exception.constructor)
            
    public update(gl: GL10){
this.gl= gl;
    

        
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.lock) 

        //mutex.withLock
        




                        for (
    var index: number = this.list.size() -1;index >= 0; index--)
        {

    var openGLESImage: OpenGLESImage = (this.list.objectArray[index]! as OpenGLESImage);;
    

                        if(openGLESImage != OpenGLESImage.NULL_OPENGL_IMAGE)
                        
                                    {
                                    openGLESImage!.set(gl);
    

                                    }
                                
}



}


                //@Throws(Exception.constructor)
            
    createImage(caller: string, width: number, height: number): Image{

    var textureSize: number = width;;
    

                        if(height > width)
                        
                                    {
                                    textureSize= height;
    

                                    }
                                

        while((textureSize % 4) != 0)
        {
textureSize++;
    
}

width= textureSize;
    
height= textureSize;
    

    var image2: Image = this.imageCache!.get(caller, width, height)!;;
    

    var image: Image = this.preResourceImageUtil!.encapsulate(image2)!;;
    

        
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.lock) 

        //mutex.withLock
        

                        if(image != NullImage.NULL_IMAGE)
                        
                                    {
                                    this.list.add(image);
    

                                    }
                                





                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


                //@Throws(Exception.constructor)
            
    createImageFromInputStream(key: any = {}, inputStream: InputStream): Image{

    var cachedImage: Image = this.imageCache!.getWithKey(key)!;;
    

    var image: Image = this.preResourceImageUtil!.encapsulate(cachedImage)!;;
    

        
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.lock) 

        //mutex.withLock
        

                        if(image != NullImage.NULL_IMAGE)
                        
                                    {
                                    this.list.add(image);
    

                                    }
                                





                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


    public getGlP(): GL10{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gl;
    
}


    public init(image: Image){

        try {
            
        
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.lock) 

        //mutex.withLock
        

                        if(this.list.contains(image))
                        
                                    {
                                    


                            throw new RuntimeException();
                    

                                    }
                                
this.list.add(image);
    


this.renderer.add(image);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.INIT, e);
    
}

}


}



