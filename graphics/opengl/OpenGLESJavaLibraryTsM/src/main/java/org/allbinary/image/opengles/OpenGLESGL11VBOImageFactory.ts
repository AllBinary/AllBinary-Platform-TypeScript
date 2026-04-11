
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
        



import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { PlatformBitmapBaseFactory } from "../../../../org/allbinary/platform/graphics/PlatformBitmapBaseFactory.js";

    
import { PlatformTextureBaseFactory } from "../../../../org/allbinary/platform/opengles/PlatformTextureBaseFactory.js";

    

export class OpenGLESGL11VBOImageFactory extends OpenGLImageFactory {
        

    public getInstance(image: Image, bitmapFactory: PlatformBitmapBaseFactory, textureFactory: PlatformTextureBaseFactory): Image{
    //var image = image
    //var bitmapFactory = bitmapFactory
    //var textureFactory = textureFactory



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new OpenGLESGL10Image(image, bitmapFactory, textureFactory);
    
}


}
                
            

