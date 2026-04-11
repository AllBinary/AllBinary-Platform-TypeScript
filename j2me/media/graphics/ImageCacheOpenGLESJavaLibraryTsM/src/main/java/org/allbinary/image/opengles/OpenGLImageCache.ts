
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
        



import { InputStream } from "../../../../java/io/InputStream.js";

    
import { GL10 } from "../../../../javax/microedition/khronos/opengles/GL10.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { NullCanvas } from "../../../../javax/microedition/lcdui/NullCanvas.js";

    
import { NullGL10 } from "../../../../org/allbinary/device/NullGL10.js";

    
import { AllBinaryRendererBase3 } from "../../../../org/allbinary/graphics/opengles/renderer/AllBinaryRendererBase3.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { ImageCache } from "../../../../org/allbinary/image/ImageCache.js";

    
import { ImageCacheFactory } from "../../../../org/allbinary/image/ImageCacheFactory.js";

    
import { PreResourceImageUtil } from "../../../../org/allbinary/image/PreResourceImageUtil.js";

    
import { SynchObject } from "../../../../org/allbinary/thread/SynchObject.js";

    

export class OpenGLImageCache extends ImageCache {
        

    private readonly imageCache: ImageCache = ImageCacheFactory.getInstance()!;
        
        

    private readonly preResourceImageUtil: PreResourceImageUtil = PreResourceImageUtil.getInstance()!;
        
        

    private gl: GL10 = NullGL10.NULL_GL10;
        
        

    private readonly lock: SynchObject = new SynchObject();
        
        

    private readonly list: BasicArrayList = new BasicArrayList();
        
        

    private renderer: AllBinaryRendererBase3 = new AllBinaryRendererBase3();
        
        
public constructor (){

            super();
            }


    public addListener(renderer: any = {}){
var renderer = renderer
this.renderer= renderer as AllBinaryRendererBase3;
    
}


                //@Throws(Error::class)
            
    public update(gl: GL10){
    //var gl = gl
this.gl= gl;
    

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(lock) 

        //mutex.withLock
        {




                        for (
    var index: number = list.size() -1;
        
        
index >= 0; index--)
        {

    var openGLESImage: OpenGLESImage = (list.objectArray[index]! as OpenGLESImage);
        
        
;
    

                        if(openGLESImage != OpenGLESImage.NULL_OPENGL_IMAGE)
                        
                                    {
                                    openGLESImage!.set(gl);
    

                                    }
                                
}

}

}


                //@Throws(Error::class)
            
    createImage(caller: string, width: number, height: number): Image{
    //var caller = caller
var width = width
var height = height

    var textureSize: number = width;
        
        
;
    

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
    

    var image2: Image = this.imageCache!.get(caller, width, height)!;
        
        
;
    

    var image: Image = preResourceImageUtil!.encapsulate(image2)!;
        
        
;
    

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(lock) 

        //mutex.withLock
        {

                        if(image != NullCanvas.NULL_IMAGE)
                        
                                    {
                                    list.add(image);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


                //@Throws(Error::class)
            
    createImage(key: any = {}, inputStream: InputStream): Image{
    //var key = key
    //var inputStream = inputStream

    var cachedImage: Image = this.imageCache!.get(key)!;
        
        
;
    

    var image: Image = preResourceImageUtil!.encapsulate(cachedImage)!;
        
        
;
    

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(lock) 

        //mutex.withLock
        {

                        if(image != NullCanvas.NULL_IMAGE)
                        
                                    {
                                    list.add(image);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


    public getGlP(): GL10{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gl;
    
}


    public init(image: Image){
    //var image = image

        try {
            
        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(lock) 

        //mutex.withLock
        {

                        if(list.contains(image))
                        
                                    {
                                    


                            throw new RuntimeException()

                                    }
                                
list.add(image);
    
}

this.renderer.add(image);
    

                //: 
} catch(e) 
            {
logUtil!.put(this.commonStrings!.EXCEPTION, this, commonStrings!.INIT, e);
    
}

}


}
                
            

