
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { RuntimeException } from '../../../java/lang/RuntimeException.js';
        
import { ByteBuffer } from '../../../java/nio/ByteBuffer.js';
//not GWT import const ByteBuffer

import { GL10 } from '../../../javax/microedition/khronos/opengles/GL10.js';
//not GWT import const GL10

import { OpenGLBitmap } from '../../../org/allbinary/graphics/OpenGLBitmap.js';
//not GWT import const OpenGLBitmap

import { OpenGLESImage } from '../../../org/allbinary/image/opengles/OpenGLESImage.js';
//not GWT import const OpenGLESImage

















                                        
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

texImage2D(...args: any[]): any {
   
    if (args.length === 8 && typeof args[1] === 'string' && typeof args[2] === 'number' && typeof args[3] === 'number' && typeof args[4] === 'boolean' && typeof args[6] === 'number' && typeof args[7] === 'boolean') return this.texImage2D$overload1(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
   
    if (args.length === 8 && typeof args[1] === 'string' && typeof args[2] === 'number' && typeof args[3] === 'number' && typeof args[4] === 'boolean' && typeof args[6] === 'number' && typeof args[7] === 'boolean') return this.texImage2D$overload2(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
   
   throw new TypeError('No matching overload: texImage2D'); }
  
    public texImage2D$overload1(gl: GL10, glVersion: string, target: number, level: number, generateMipMap: boolean, openGLESImage: OpenGLESImage, border: number, flip: boolean){



                            throw new RuntimeException();
                    
}


    public texImage2D$overload2(gl: GL10, glVersion: string, target: number, level: number, generateMipMap: boolean, bitmap: OpenGLBitmap, border: number, flip: boolean){



                            throw new RuntimeException();
                    
}


}

