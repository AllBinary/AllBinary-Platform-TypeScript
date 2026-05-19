
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../java/lang/Object.js';


        
            import { RuntimeException } from '../../../java/lang/RuntimeException.js';
        
import { ByteBuffer } from '../../../java/nio/ByteBuffer.js';
      
import { GL10 } from '../../../javax/microedition/khronos/opengles/GL10.js';
      
import { OpenGLBitmap } from '../../../org/allbinary/graphics/OpenGLBitmap.js';
      
import { OpenGLESImage } from '../../../org/allbinary/image/opengles/OpenGLESImage.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OpenGLGLUUtils
            extends Object
         {
        

    private static readonly instance: OpenGLGLUUtils = new OpenGLGLUUtils();

    public static getInstance(): OpenGLGLUUtils{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return OpenGLGLUUtils.instance;
    
}


    public makeByteBuffer(bmp: OpenGLBitmap, flip: boolean): ByteBuffer{



                            throw new RuntimeException();
                    
}


    public texImage2D(gl: GL10, glVersion: string, target: number, level: number, generateMipMap: boolean, openGLESImage: OpenGLESImage, border: number, flip: boolean){



                            throw new RuntimeException();
                    
}


    public texImage2D(gl: GL10, glVersion: string, target: number, level: number, generateMipMap: boolean, bitmap: OpenGLBitmap, border: number, flip: boolean){



                            throw new RuntimeException();
                    
}


}
                
            

