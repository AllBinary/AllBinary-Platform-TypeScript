
        /* Generated Code Do Not Modify */
        



//not game specific package import { IOException } from '../../../java/io/IOException.js';
      const IOException = globalThis.java.io.IOException;

      
//not game specific package import { InputStream } from '../../../java/io/InputStream.js';
      const InputStream = globalThis.java.io.InputStream;

      
//not game specific package import { Image } from '../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { PlatformBitmapBase } from '../../../org/allbinary/platform/graphics/PlatformBitmapBase.js';
      const PlatformBitmapBase = globalThis.org.allbinary.platform.graphics.PlatformBitmapBase;

      
//not game specific package import { PlatformBitmapBaseFactory } from '../../../org/allbinary/platform/graphics/PlatformBitmapBaseFactory.js';
      const PlatformBitmapBaseFactory = globalThis.org.allbinary.platform.graphics.PlatformBitmapBaseFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //import { Config } from './Config.js';
import { OpenGLBitmap } from './OpenGLBitmap.js';

export class OpenGLBitmapFactory extends PlatformBitmapBaseFactory {
        

    private static readonly instance: OpenGLBitmapFactory = new OpenGLBitmapFactory();

    public static getInstance(): OpenGLBitmapFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return OpenGLBitmapFactory.instance;
    
}


//inner= member=true isStatic=
Config = class
            extends Object
         {
        
/*Static stuff is not allowed for TypeScript inner classes*//**/


    public readonly bitmapConfig: any;

public constructor (bitmapConfig: any = {}){

            super();
        this.bitmapConfig= bitmapConfig;
    
}


}


    public readonly ARGB_8888 = new this.Config(NullUtil.getInstance()!.NULL_OBJECT);

    public createBitmap(width: number, height: number, config: OpenGLBitmapFactory.Config): OpenGLBitmap{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new OpenGLBitmap(NullUtil.getInstance()!.NULL_OBJECT);
    
}


                //@Throws(IOException.constructor)
            
    public decodeStream(inputStream: InputStream): OpenGLBitmap{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new OpenGLBitmap(NullUtil.getInstance()!.NULL_OBJECT);
    
}


    public createBitmap(image: Image): PlatformBitmapBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new OpenGLBitmap(NullUtil.getInstance()!.NULL_OBJECT);
    
}


}



