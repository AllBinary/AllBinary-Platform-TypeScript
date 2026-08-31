
        /* Generated Code Do Not Modify */

        


            import { RuntimeException } from '../../../java/lang/RuntimeException.js';
        
import { GL10 } from '../../../javax/microedition/khronos/opengles/GL10.js';
      //not GWT import const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;

      
//not plain js import { Image } from '../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
import { PlatformTextureBaseFactory } from '../../../org/allbinary/platform/opengles/PlatformTextureBaseFactory.js';
      //not GWT import const PlatformTextureBaseFactory = globalThis.org.allbinary.platform.opengles.PlatformTextureBaseFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OpenGLGLUUtils } from './OpenGLGLUUtils.js';
//not GWT import const OpenGLGLUUtils = globalThis.org.platform.opengl.OpenGLGLUUtils;

                
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



