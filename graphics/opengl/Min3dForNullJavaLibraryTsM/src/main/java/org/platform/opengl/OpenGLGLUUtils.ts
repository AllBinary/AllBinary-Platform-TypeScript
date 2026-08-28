
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../java/lang/Object.js';
        
            import { RuntimeException } from '../../../java/lang/RuntimeException.js';
        
//not game specific package import { ByteBuffer } from '../../../java/nio/ByteBuffer.js';
      const ByteBuffer = globalThis.java.nio.ByteBuffer;

      
//not game specific package import { GL10 } from '../../../javax/microedition/khronos/opengles/GL10.js';
      const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;

      
//not game specific package import { OpenGLBitmap } from '../../../org/allbinary/graphics/OpenGLBitmap.js';
      const OpenGLBitmap = globalThis.org.allbinary.graphics.OpenGLBitmap;

      
//not game specific package import { OpenGLESImage } from '../../../org/allbinary/image/opengles/OpenGLESImage.js';
      const OpenGLESImage = globalThis.org.allbinary.image.opengles.OpenGLESImage;

      
















                                        
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



