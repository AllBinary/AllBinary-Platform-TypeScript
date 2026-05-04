
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../java/lang/Object.js';


        
import { IOException } from '../../../java/io/IOException.js';

    
import { InputStream } from '../../../java/io/InputStream.js';

    
import { Image } from '../../../javax/microedition/lcdui/Image.js';

    
import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';

    
import { PlatformBitmapBase } from '../../../org/allbinary/platform/graphics/PlatformBitmapBase.js';

    
import { PlatformBitmapBaseFactory } from '../../../org/allbinary/platform/graphics/PlatformBitmapBaseFactory.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        //import { Config } from './Config.js';
import { OpenGLBitmap } from './OpenGLBitmap.js';

export class OpenGLBitmapFactory extends PlatformBitmapBaseFactory {
        

    private static readonly instance: OpenGLBitmapFactory = new OpenGLBitmapFactory();

    public static getInstance(): OpenGLBitmapFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return OpenGLBitmapFactory.instance;
    
}


Config = class
            extends Object
         {
        
/*Static stuff is not allowed for Typescript inner classes*//**/


    public readonly bitmapConfig: any
public constructor (bitmapConfig: any = {}){

            super();
            //var bitmapConfig = bitmapConfig
this.bitmapConfig= bitmapConfig;
    
}


}
                
            
    public readonly ARGB_8888: Config = new this.Config(NullUtil.getInstance()!.NULL_OBJECT);

    public createBitmap(width: number, height: number, config: OpenGLBitmapFactory.Config): OpenGLBitmap{
var width = width
var height = height
var config = config



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new OpenGLBitmap(NullUtil.getInstance()!.NULL_OBJECT);
    
}


                //@Throws(IOException.constructor)
            
    public decodeStream(inputStream: InputStream): OpenGLBitmap{
var inputStream = inputStream



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new OpenGLBitmap(NullUtil.getInstance()!.NULL_OBJECT);
    
}


    public createBitmap(image: Image): PlatformBitmapBase{
    //var image = image



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new OpenGLBitmap(NullUtil.getInstance()!.NULL_OBJECT);
    
}


}
                
            

