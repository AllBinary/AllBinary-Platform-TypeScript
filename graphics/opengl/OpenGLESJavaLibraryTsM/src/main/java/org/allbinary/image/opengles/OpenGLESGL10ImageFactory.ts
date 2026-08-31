
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

        


//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
import { PlatformBitmapBaseFactory } from '../../../../org/allbinary/platform/graphics/PlatformBitmapBaseFactory.js';
      //not GWT import const PlatformBitmapBaseFactory = globalThis.org.allbinary.platform.graphics.PlatformBitmapBaseFactory;

      
import { PlatformTextureBaseFactory } from '../../../../org/allbinary/platform/opengles/PlatformTextureBaseFactory.js';
      //not GWT import const PlatformTextureBaseFactory = globalThis.org.allbinary.platform.opengles.PlatformTextureBaseFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OpenGLImageFactory } from './OpenGLImageFactory.js';
//not GWT import const  = globalThis.org.allbinary.image.opengles.OpenGLImageFactory;

                import { OpenGLESGL10Image } from './OpenGLESGL10Image.js';
//not GWT import const  = globalThis.org.allbinary.image.opengles.OpenGLESGL10Image;

                
export class OpenGLESGL10ImageFactory extends OpenGLImageFactory {
        

    public getInstance(image: Image, bitmapFactory: PlatformBitmapBaseFactory, textureFactory: PlatformTextureBaseFactory): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new OpenGLESGL10Image(image, bitmapFactory, textureFactory);
    
}


}



