
        /* Generated Code Do Not Modify */

        


import { InputStream } from '../../../java/io/InputStream.js';
//not GWT import const InputStream
import { Image } from '../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image
import { Bitmap } from '../../../android/graphics/Bitmap.js';
//not GWT import const Bitmap
import { BitmapFactory } from '../../../android/graphics/BitmapFactory.js';
//not GWT import const BitmapFactory
import { IOException } from '../../../java/io/IOException.js';
//not GWT import const IOException
import { PlatformBitmapBaseFactory } from '../../../org/allbinary/platform/graphics/PlatformBitmapBaseFactory.js';
//not GWT import const PlatformBitmapBaseFactory
import { PlatformBitmapBase } from '../../../org/allbinary/platform/graphics/PlatformBitmapBase.js';
//not GWT import const PlatformBitmapBase
import { AndroidImageInterface } from '../../../org/microemu/android/device/AndroidImageInterface.js';
//not GWT import const AndroidImageInterface
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //import { Config } from './Config.js';
//not GWT import - same folder const Configimport { OpenGLBitmap } from './OpenGLBitmap.js';
//not GWT import - same folder const OpenGLBitmap
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


    public readonly bitmapConfig;

 constructor (bitmapConfig: Bitmap.Config){

            super();
        this.bitmapConfig= bitmapConfig;
    
}


}


    public readonly ARGB_8888 = new this.Config(Bitmap.Config.ARGB_8888);

    public createBitmap(width: number, height: number, config: OpenGLBitmapFactory.Config): OpenGLBitmap{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new OpenGLBitmap(Bitmap.createBitmap(width, height, config.bitmapConfig));
    
}


                //@Throws(IOException.constructor)
            
    public decodeStream(inputStream: InputStream): OpenGLBitmap{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new OpenGLBitmap(BitmapFactory.decodeStream(inputStream));
    
}


    public createBitmap(image: Image): PlatformBitmapBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new OpenGLBitmap((image as AndroidImageInterface).getBitmap());
    
}


}



