
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
        
//not game specific package import { InputStream } from '../../../../java/io/InputStream.js';
      const InputStream = globalThis.java.io.InputStream;

      
//not game specific package import { GL10 } from '../../../../javax/microedition/khronos/opengles/GL10.js';
      const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;

      
//not game specific package import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
      const NullImage = globalThis.javax.microedition.lcdui.NullImage;

      
//not game specific package import { NullGL10 } from '../../../../org/allbinary/device/NullGL10.js';
      const NullGL10 = globalThis.org.allbinary.device.NullGL10;

      
//not game specific package import { AllBinaryRendererBase3 } from '../../../../org/allbinary/graphics/opengles/renderer/AllBinaryRendererBase3.js';
      const AllBinaryRendererBase3 = globalThis.org.allbinary.graphics.opengles.renderer.AllBinaryRendererBase3;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { ImageCache } from '../../../../org/allbinary/image/ImageCache.js';
      const ImageCache = globalThis.org.allbinary.image.ImageCache;

      
//not game specific package import { ImageCacheFactory } from '../../../../org/allbinary/image/ImageCacheFactory.js';
      const ImageCacheFactory = globalThis.org.allbinary.image.ImageCacheFactory;

      
//not game specific package import { PreResourceImageUtil } from '../../../../org/allbinary/image/PreResourceImageUtil.js';
      const PreResourceImageUtil = globalThis.org.allbinary.image.PreResourceImageUtil;

      
//not game specific package import { SynchObject } from '../../../../org/allbinary/thread/SynchObject.js';
      const SynchObject = globalThis.org.allbinary.thread.SynchObject;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OpenGLESImage } from './OpenGLESImage.js';

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



