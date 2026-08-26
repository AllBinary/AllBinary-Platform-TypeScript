
        /* Generated Code Do Not Modify */
        



            import { RuntimeException } from '../../../java/lang/RuntimeException.js';
        
//not game specific package import { GL10 } from '../../../javax/microedition/khronos/opengles/GL10.js';
      const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;

      
//not game specific package import { Image } from '../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { PlatformTextureBaseFactory } from '../../../org/allbinary/platform/opengles/PlatformTextureBaseFactory.js';
      const PlatformTextureBaseFactory = globalThis.org.allbinary.platform.opengles.PlatformTextureBaseFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OpenGLGLUUtils } from './OpenGLGLUUtils.js';

export class OpenGLTextureFactory extends PlatformTextureBaseFactory {
        

    private static readonly instance: OpenGLTextureFactory = new OpenGLTextureFactory();

    public static getInstance(): OpenGLTextureFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return OpenGLTextureFactory.instance;
    
}


    private readonly gluUtils: OpenGLGLUUtils = OpenGLGLUUtils.getInstance()!;

private constructor (){

            super();
        }


    public load(gl: GL10, target: number, level: number, image: Image, border: number, flip: boolean){



                            throw new RuntimeException();
                    
}


}
                
            

