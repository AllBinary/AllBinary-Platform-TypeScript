
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
        



import { Buffer } from "../../../java/nio/Buffer.js";

    
import { ByteBuffer } from "../../../java/nio/ByteBuffer.js";

    
import { ByteOrder } from "../../../java/nio/ByteOrder.js";

    
import { FloatBuffer } from "../../../java/nio/FloatBuffer.js";

    
import { OpenGLCapabilities } from "../../../org/allbinary/graphics/opengles/OpenGLCapabilities.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Math } from "./Math.js";

export class GLUtil
            extends Object
         {
        

    private static readonly instance: GLUtil = new GLUtil();
        
        

    public static getInstance(): GLUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly BYTES_PER_FLOAT: number = 4;
        
        

    public makeFloatBuffer3(p_a: number, p_b: number, p_c: number): FloatBuffer{
var p_a = p_a
var p_b = p_b
var p_c = p_c

    var b: ByteBuffer = ByteBuffer.allocateDirect(3 *BYTES_PER_FLOAT)!;
        
        
;
    
b.order(ByteOrder.nativeOrder());
    

    var buffer: FloatBuffer = b.asFloatBuffer()!;
        
        
;
    
buffer.put(p_a);
    
buffer.put(p_b);
    
buffer.put(p_c);
    
this.position(buffer, 0);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return buffer;
    
}


    public makeFloatBuffer4(p_a: number, p_b: number, p_c: number, p_d: number): FloatBuffer{
var p_a = p_a
var p_b = p_b
var p_c = p_c
var p_d = p_d

    var b: ByteBuffer = ByteBuffer.allocateDirect(4 *BYTES_PER_FLOAT)!;
        
        
;
    
b.order(ByteOrder.nativeOrder());
    

    var buffer: FloatBuffer = b.asFloatBuffer()!;
        
        
;
    
buffer.put(p_a);
    
buffer.put(p_b);
    
buffer.put(p_c);
    
buffer.put(p_d);
    
this.position(buffer, 0);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return buffer;
    
}


    public makeFloatBuffer(byteBuffer: ByteBuffer): FloatBuffer{
    //var byteBuffer = byteBuffer

    var b: ByteBuffer = ByteBuffer.allocateDirect(byteBuffer!.limit() *BYTES_PER_FLOAT)!;
        
        
;
    
b.order(ByteOrder.nativeOrder());
    

    var buffer: FloatBuffer = b.asFloatBuffer()!;
        
        
;
    

    var unsigned: number= 0
;
    

    var v: number= 0.0f
;
    

        while(byteBuffer!.hasRemaining())
        {
unsigned= byteBuffer!.get()&0xFF;
    
v= (unsigned) /255f;
    
buffer.put(v);
    
}

this.position(buffer, 0);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return buffer;
    
}


    public position(buffer: Buffer, newPosition: number): Buffer{
    //var buffer = buffer
    //var newPosition = newPosition



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return buffer.position(newPosition);

                        ;
    
}


    public rotateUVs(uvs: number[], angleDegrees: number, pivotU: number, pivotV: number){
    //var uvs = uvs
    //var angleDegrees = angleDegrees
    //var pivotU = pivotU
    //var pivotV = pivotV

    var angleRad: number = Math.toRadians(angleDegrees)!;
        
        
;
    

    var cosA: number = Math.cos(angleRad)!;
        
        
;
    

    var sinA: number = Math.sin(angleRad)!;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < uvs.length; )
        {

    var u: number = uvs[i]!;
        
        
;
    

    var v: number = uvs[i +1]!;
        
        
;
    

    var du: number = u -pivotU;
        
        
;
    

    var dv: number = v -pivotV;
        
        
;
    

    var ru: number = (du *cosA -dv *sinA) +pivotU;
        
        
;
    

    var rv: number = (du *sinA +dv *cosA) +pivotV;
        
        
;
    
uvs[i]= ru;
    
uvs[i +1]= rv;
    
}

}


}
                
            

