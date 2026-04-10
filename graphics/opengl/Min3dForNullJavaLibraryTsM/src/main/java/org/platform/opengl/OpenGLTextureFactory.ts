
        /* Generated Code Do Not Modify */
        



import { GL10 } from "../../../javax/microedition/khronos/opengles/GL10.js";

    
import { Image } from "../../../javax/microedition/lcdui/Image.js";

    
import { PlatformTextureBaseFactory } from "../../../org/allbinary/platform/opengles/PlatformTextureBaseFactory.js";

    

export class OpenGLTextureFactory extends PlatformTextureBaseFactory {
        

    private static readonly instance: OpenGLTextureFactory = new OpenGLTextureFactory();
        
        

    public static getInstance(): OpenGLTextureFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly gluUtils: OpenGLGLUUtils = OpenGLGLUUtils.getInstance()!;
        
        
private constructor (){

            super();
            }


    public load(gl: GL10, target: number, level: number, image: Image, border: number, flip: boolean){
    //var gl = gl
    //var target = target
    //var level = level
    //var image = image
    //var border = border
    //var flip = flip



                            throw RuntimeException()
}


}
                
            

