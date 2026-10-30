
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

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { Math } from '../../../java/lang/Math.js';
        
import { Buffer } from '../../../java/nio/Buffer.js';
//not GWT import const Buffer

import { ByteBuffer } from '../../../java/nio/ByteBuffer.js';
//not GWT import const ByteBuffer

import { ByteOrder } from '../../../java/nio/ByteOrder.js';
//not GWT import const ByteOrder

import { FloatBuffer } from '../../../java/nio/FloatBuffer.js';
//not GWT import const FloatBuffer

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GLUtil
            extends Object
         {
        

    private static readonly instance: GLUtil = new GLUtil();

    public static getInstance(): GLUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GLUtil.instance;
    
}


    private readonly BYTES_PER_FLOAT: number = 4;

    public readonly NULL_FLOAT_BUFFER: FloatBuffer = ByteBuffer.allocateDirect(0)!.asFloatBuffer()!;

    public makeFloatBuffer3(p_a: number, p_b: number, p_c: number): FloatBuffer{

    let b: ByteBuffer = ByteBuffer.allocateDirect(3 *this.BYTES_PER_FLOAT)!;;
    
b.order(ByteOrder.nativeOrder());
    

    let buffer: FloatBuffer = b.asFloatBuffer()!;;
    
buffer.put(p_a);
    
buffer.put(p_b);
    
buffer.put(p_c);
    
this.position(buffer, 0);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return buffer;
    
}


    public makeFloatBuffer4(p_a: number, p_b: number, p_c: number, p_d: number): FloatBuffer{

    let b: ByteBuffer = ByteBuffer.allocateDirect(4 *this.BYTES_PER_FLOAT)!;;
    
b.order(ByteOrder.nativeOrder());
    

    let buffer: FloatBuffer = b.asFloatBuffer()!;;
    
buffer.put(p_a);
    
buffer.put(p_b);
    
buffer.put(p_c);
    
buffer.put(p_d);
    
this.position(buffer, 0);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return buffer;
    
}


    public makeFloatBuffer(byteBuffer: ByteBuffer): FloatBuffer{

    let b: ByteBuffer = ByteBuffer.allocateDirect(byteBuffer!.limit() *this.BYTES_PER_FLOAT)!;;
    
b.order(ByteOrder.nativeOrder());
    

    let buffer: FloatBuffer = b.asFloatBuffer()!;;
    

    let unsigned: number= 0;;
    

    let v: number= 0.0;;
    

        while(byteBuffer!.hasRemaining())
        {
unsigned= (globalThis.Math.trunc(byteBuffer!.get()))&0xFF;
    
v= (unsigned) /255;
    
buffer.put(v);
    
}

this.position(buffer, 0);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return buffer;
    
}


    public position(buffer: Buffer, newPosition: number): Buffer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return buffer.position(newPosition);;
    
}


    public rotateUVs(uvs: number[], angleDegrees: number, pivotU: number, pivotV: number){

    let angleRad: number = Math.toRadians(angleDegrees)!;;
    

    let cosA: number = Math.cos(angleRad)!;;
    

    let sinA: number = Math.sin(angleRad)!;;
    




                        for (
    let i: number = 0;i < uvs.length; )
        {

    let u: number = uvs[i]!;;
    

    let v: number = uvs[i +1]!;;
    

    let du: number = u -pivotU;;
    

    let dv: number = v -pivotV;;
    

    let ru: number = (du *cosA -dv *sinA) +pivotU;;
    

    let rv: number = (du *sinA +dv *cosA) +pivotV;;
    
uvs[i]= ru;
    
uvs[i +1]= rv;
    
}

}


}

