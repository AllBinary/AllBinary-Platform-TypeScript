
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


        
import { GL } from '../../../com/jogamp/opengl/GL.js';
      
import { GL2 } from '../../../com/jogamp/opengl/GL2.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GL11 } from './GL11.js';
import { Buffer } from './Buffer.js';
import { FloatBuffer } from './FloatBuffer.js';
import { IntBuffer } from './IntBuffer.js';
//JOGLEToKhronosGL11
export class JOGL11 extends JOGL10 implements javax.microedition.khronos.opengles.GL11 {
        

    private readonly gl11: GL2
public constructor (gl: GL){
            this(gl, gl as com.jogamp.opengl.GL2);
                    

                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (gl: GL, gl2: com.jogamp.opengl.GL2){
            super(gl, gl2);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.gl11= getJOGLGL();
    
}


    public glBindBuffer(target: number, buffer: number){
this.gl11.glBindBuffer(target, buffer);
    
}


    public glBufferData(target: number, size: number, data: java.nio.Buffer, usage: number){
this.gl11.glBufferData(target, size, data, usage);
    
}


    public glBufferSubData(target: number, offset: number, size: number, data: java.nio.Buffer){
this.gl11.glBufferSubData(target, offset, size, data);
    
}


    public glClipPlanef(plane: number, equation: number[], offset: number){
this.gl11.glClipPlanef(plane, equation, offset);
    
}


    public glClipPlanef(plane: number, equation: java.nio.FloatBuffer){
this.gl11.glClipPlanef(plane, equation);
    
}


    public glColor4ub(red: number, green: number, blue: number, alpha: number){
this.gl11.glColor4ub(red, green, blue, alpha);
    
}


    public glColorPointer(size: number, type: number, stride: number, offset: number){
this.gl11.glColorPointer(size, type, stride, offset);
    
}


    public glDeleteBuffers(n: number, buffers: number[], offset: number){
this.gl11.glDeleteBuffers(n, buffers, offset);
    
}


    public glDeleteBuffers(n: number, buffers: java.nio.IntBuffer){
this.gl11.glDeleteBuffers(n, buffers);
    
}


    public glDrawElements(mode: number, count: number, type: number, offset: number){
this.gl11.glDrawElements(mode, count, type, offset);
    
}


    public glGenBuffers(n: number, buffers: number[], offset: number){
this.gl11.glGenBuffers(n, buffers, offset);
    
}


    public glGenBuffers(n: number, buffers: java.nio.IntBuffer){
this.gl11.glGenBuffers(n, buffers);
    
}


    public glGetBufferParameteriv(target: number, pname: number, params: number[], offset: number){
this.gl11.glGetBufferParameteriv(target, pname, params, offset);
    
}


    public glGetBufferParameteriv(target: number, pname: number, params: java.nio.IntBuffer){
this.gl11.glGetBufferParameteriv(target, pname, params);
    
}


    public glGetClipPlanef(pname: number, eqn: number[], offset: number){
this.gl11.glGetClipPlanef(pname, eqn, offset);
    
}


    public glGetClipPlanef(pname: number, eqn: java.nio.FloatBuffer){
this.gl11.glGetClipPlanef(pname, eqn);
    
}


    public glGetFloatv(pname: number, params: number[], offset: number){
this.gl11.glGetFloatv(pname, params, offset);
    
}


    public glGetFloatv(pname: number, params: java.nio.FloatBuffer){
this.gl11.glGetFloatv(pname, params);
    
}


    public glGetLightfv(light: number, pname: number, params: number[], offset: number){
this.gl11.glGetLightfv(light, pname, params, offset);
    
}


    public glGetLightfv(light: number, pname: number, params: java.nio.FloatBuffer){
this.gl11.glGetLightfv(light, pname, params);
    
}


    public glGetMaterialfv(face: number, pname: number, params: number[], offset: number){
this.gl11.glGetMaterialfv(face, pname, params, offset);
    
}


    public glGetMaterialfv(face: number, pname: number, params: java.nio.FloatBuffer){
this.gl11.glGetMaterialfv(face, pname, params);
    
}


    public glGetTexEnviv(env: number, pname: number, params: number[], offset: number){
this.gl11.glGetTexEnviv(env, pname, params, offset);
    
}


    public glGetTexEnviv(env: number, pname: number, params: java.nio.IntBuffer){
this.gl11.glGetTexEnviv(env, pname, params);
    
}


    public glGetTexParameterfv(target: number, pname: number, params: number[], offset: number){
this.gl11.glGetTexParameterfv(target, pname, params, offset);
    
}


    public glGetTexParameterfv(target: number, pname: number, params: java.nio.FloatBuffer){
this.gl11.glGetTexParameterfv(target, pname, params);
    
}


    public glGetTexParameteriv(target: number, pname: number, params: number[], offset: number){
this.gl11.glGetTexParameteriv(target, pname, params, offset);
    
}


    public glGetTexParameteriv(target: number, pname: number, params: java.nio.IntBuffer){
this.gl11.glGetTexParameteriv(target, pname, params);
    
}


    public glIsBuffer(buffer: number): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gl11.glIsBuffer(buffer);;
    
}


    public glIsEnabled(cap: number): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gl11.glIsEnabled(cap);;
    
}


    public glIsTexture(texture: number): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gl11.glIsTexture(texture);;
    
}


    public glNormalPointer(type: number, stride: number, offset: number){
this.gl11.glNormalPointer(type, stride, offset);
    
}


    public glPointParameterf(pname: number, param: number){
this.gl11.glPointParameterf(pname, param);
    
}


    public glPointParameterfv(pname: number, params: number[], offset: number){
this.gl11.glPointParameterfv(pname, params, offset);
    
}


    public glPointParameterfv(pname: number, params: java.nio.FloatBuffer){
this.gl11.glPointParameterfv(pname, params);
    
}


    public glTexCoordPointer(size: number, type: number, stride: number, offset: number){
this.gl11.glTexCoordPointer(size, type, stride, offset);
    
}


    public glTexEnvi(target: number, pname: number, param: number){
this.gl11.glTexEnvi(target, pname, param);
    
}


    public glTexEnviv(target: number, pname: number, params: number[], offset: number){
this.gl11.glTexEnviv(target, pname, params, offset);
    
}


    public glTexEnviv(target: number, pname: number, params: java.nio.IntBuffer){
this.gl11.glTexEnviv(target, pname, params);
    
}


    public glTexParameterfv(target: number, pname: number, params: number[], offset: number){
this.gl11.glTexParameterfv(target, pname, params, offset);
    
}


    public glTexParameterfv(target: number, pname: number, params: java.nio.FloatBuffer){
this.gl11.glTexParameterfv(target, pname, params);
    
}


    public glTexParameteri(target: number, pname: number, param: number){
this.gl11.glTexParameteri(target, pname, param);
    
}


    public glTexParameteriv(target: number, pname: number, params: number[], offset: number){
this.gl11.glTexParameteriv(target, pname, params, offset);
    
}


    public glTexParameteriv(target: number, pname: number, params: java.nio.IntBuffer){
this.gl11.glTexParameteriv(target, pname, params);
    
}


    public glTexParameterxv(target: number, pname: number, params: number[], offset: number){
this.gl11.glTexParameteriv(target, pname, params, offset);
    
}


    public glVertexPointer(size: number, type: number, stride: number, offset: number){
this.gl11.glVertexPointer(size, type, stride, offset);
    
}


}
                
            

