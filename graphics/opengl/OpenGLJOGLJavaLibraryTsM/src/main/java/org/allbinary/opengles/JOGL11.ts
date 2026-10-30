
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

        


import { GL } from '../../../com/jogamp/opengl/GL.js';
//not GWT import const GL

import { GL2 } from '../../../com/jogamp/opengl/GL2.js';
//not GWT import const GL2

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GL11 } from './GL11.js';
//sameFolderImports - not GWT import - same folder const GL11
import { Buffer } from './Buffer.js';
//sameFolderImports - not GWT import - same folder const Buffer
import { FloatBuffer } from './FloatBuffer.js';
//sameFolderImports - not GWT import - same folder const FloatBuffer
import { IntBuffer } from './IntBuffer.js';
//sameFolderImports - not GWT import - same folder const IntBuffer
//JOGLEToKhronosGL11
export class JOGL11 extends JOGL10 implements javax.microedition.khronos.opengles.GL11 {
        

    private readonly gl11: GL2;

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

glClipPlanef(...args: any[]): any {
   
    if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number') return this.glClipPlanef$overload1(args[0], args[1], args[2]);
   
    if (args.length === 2 && typeof args[0] === 'number') return this.glClipPlanef$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: glClipPlanef'); }
  
    public glClipPlanef$overload1(plane: number, equation: number[], offset: number){
this.gl11.glClipPlanef(plane, equation, offset);
    
}


    public glClipPlanef$overload2(plane: number, equation: java.nio.FloatBuffer){
this.gl11.glClipPlanef(plane, equation);
    
}


    public glColor4ub(red: number, green: number, blue: number, alpha: number){
this.gl11.glColor4ub(red, green, blue, alpha);
    
}


    public glColorPointer(size: number, type: number, stride: number, offset: number){
this.gl11.glColorPointer(size, type, stride, offset);
    
}

glDeleteBuffers(...args: any[]): any {
   
    if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number') return this.glDeleteBuffers$overload1(args[0], args[1], args[2]);
   
    if (args.length === 2 && typeof args[0] === 'number') return this.glDeleteBuffers$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: glDeleteBuffers'); }
  
    public glDeleteBuffers$overload1(n: number, buffers: number[], offset: number){
this.gl11.glDeleteBuffers(n, buffers, offset);
    
}


    public glDeleteBuffers$overload2(n: number, buffers: java.nio.IntBuffer){
this.gl11.glDeleteBuffers(n, buffers);
    
}


    public glDrawElements(mode: number, count: number, type: number, offset: number){
this.gl11.glDrawElements(mode, count, type, offset);
    
}

glGenBuffers(...args: any[]): any {
   
    if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number') return this.glGenBuffers$overload1(args[0], args[1], args[2]);
   
    if (args.length === 2 && typeof args[0] === 'number') return this.glGenBuffers$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: glGenBuffers'); }
  
    public glGenBuffers$overload1(n: number, buffers: number[], offset: number){
this.gl11.glGenBuffers(n, buffers, offset);
    
}


    public glGenBuffers$overload2(n: number, buffers: java.nio.IntBuffer){
this.gl11.glGenBuffers(n, buffers);
    
}

glGetBufferParameteriv(...args: any[]): any {
   
    if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number') return this.glGetBufferParameteriv$overload1(args[0], args[1], args[2], args[3]);
   
    if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number') return this.glGetBufferParameteriv$overload2(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: glGetBufferParameteriv'); }
  
    public glGetBufferParameteriv$overload1(target: number, pname: number, params: number[], offset: number){
this.gl11.glGetBufferParameteriv(target, pname, params, offset);
    
}


    public glGetBufferParameteriv$overload2(target: number, pname: number, params: java.nio.IntBuffer){
this.gl11.glGetBufferParameteriv(target, pname, params);
    
}

glGetClipPlanef(...args: any[]): any {
   
    if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number') return this.glGetClipPlanef$overload1(args[0], args[1], args[2]);
   
    if (args.length === 2 && typeof args[0] === 'number') return this.glGetClipPlanef$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: glGetClipPlanef'); }
  
    public glGetClipPlanef$overload1(pname: number, eqn: number[], offset: number){
this.gl11.glGetClipPlanef(pname, eqn, offset);
    
}


    public glGetClipPlanef$overload2(pname: number, eqn: java.nio.FloatBuffer){
this.gl11.glGetClipPlanef(pname, eqn);
    
}

glGetFloatv(...args: any[]): any {
   
    if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number') return this.glGetFloatv$overload1(args[0], args[1], args[2]);
   
    if (args.length === 2 && typeof args[0] === 'number') return this.glGetFloatv$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: glGetFloatv'); }
  
    public glGetFloatv$overload1(pname: number, params: number[], offset: number){
this.gl11.glGetFloatv(pname, params, offset);
    
}


    public glGetFloatv$overload2(pname: number, params: java.nio.FloatBuffer){
this.gl11.glGetFloatv(pname, params);
    
}

glGetLightfv(...args: any[]): any {
   
    if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number') return this.glGetLightfv$overload1(args[0], args[1], args[2], args[3]);
   
    if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number') return this.glGetLightfv$overload2(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: glGetLightfv'); }
  
    public glGetLightfv$overload1(light: number, pname: number, params: number[], offset: number){
this.gl11.glGetLightfv(light, pname, params, offset);
    
}


    public glGetLightfv$overload2(light: number, pname: number, params: java.nio.FloatBuffer){
this.gl11.glGetLightfv(light, pname, params);
    
}

glGetMaterialfv(...args: any[]): any {
   
    if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number') return this.glGetMaterialfv$overload1(args[0], args[1], args[2], args[3]);
   
    if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number') return this.glGetMaterialfv$overload2(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: glGetMaterialfv'); }
  
    public glGetMaterialfv$overload1(face: number, pname: number, params: number[], offset: number){
this.gl11.glGetMaterialfv(face, pname, params, offset);
    
}


    public glGetMaterialfv$overload2(face: number, pname: number, params: java.nio.FloatBuffer){
this.gl11.glGetMaterialfv(face, pname, params);
    
}

glGetTexEnviv(...args: any[]): any {
   
    if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number') return this.glGetTexEnviv$overload1(args[0], args[1], args[2], args[3]);
   
    if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number') return this.glGetTexEnviv$overload2(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: glGetTexEnviv'); }
  
    public glGetTexEnviv$overload1(env: number, pname: number, params: number[], offset: number){
this.gl11.glGetTexEnviv(env, pname, params, offset);
    
}


    public glGetTexEnviv$overload2(env: number, pname: number, params: java.nio.IntBuffer){
this.gl11.glGetTexEnviv(env, pname, params);
    
}

glGetTexParameterfv(...args: any[]): any {
   
    if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number') return this.glGetTexParameterfv$overload1(args[0], args[1], args[2], args[3]);
   
    if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number') return this.glGetTexParameterfv$overload2(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: glGetTexParameterfv'); }
  
    public glGetTexParameterfv$overload1(target: number, pname: number, params: number[], offset: number){
this.gl11.glGetTexParameterfv(target, pname, params, offset);
    
}


    public glGetTexParameterfv$overload2(target: number, pname: number, params: java.nio.FloatBuffer){
this.gl11.glGetTexParameterfv(target, pname, params);
    
}

glGetTexParameteriv(...args: any[]): any {
   
    if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number') return this.glGetTexParameteriv$overload1(args[0], args[1], args[2], args[3]);
   
    if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number') return this.glGetTexParameteriv$overload2(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: glGetTexParameteriv'); }
  
    public glGetTexParameteriv$overload1(target: number, pname: number, params: number[], offset: number){
this.gl11.glGetTexParameteriv(target, pname, params, offset);
    
}


    public glGetTexParameteriv$overload2(target: number, pname: number, params: java.nio.IntBuffer){
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

glPointParameterfv(...args: any[]): any {
   
    if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number') return this.glPointParameterfv$overload1(args[0], args[1], args[2]);
   
    if (args.length === 2 && typeof args[0] === 'number') return this.glPointParameterfv$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: glPointParameterfv'); }
  
    public glPointParameterfv$overload1(pname: number, params: number[], offset: number){
this.gl11.glPointParameterfv(pname, params, offset);
    
}


    public glPointParameterfv$overload2(pname: number, params: java.nio.FloatBuffer){
this.gl11.glPointParameterfv(pname, params);
    
}


    public glTexCoordPointer(size: number, type: number, stride: number, offset: number){
this.gl11.glTexCoordPointer(size, type, stride, offset);
    
}


    public glTexEnvi(target: number, pname: number, param: number){
this.gl11.glTexEnvi(target, pname, param);
    
}

glTexEnviv(...args: any[]): any {
   
    if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number') return this.glTexEnviv$overload1(args[0], args[1], args[2], args[3]);
   
    if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number') return this.glTexEnviv$overload2(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: glTexEnviv'); }
  
    public glTexEnviv$overload1(target: number, pname: number, params: number[], offset: number){
this.gl11.glTexEnviv(target, pname, params, offset);
    
}


    public glTexEnviv$overload2(target: number, pname: number, params: java.nio.IntBuffer){
this.gl11.glTexEnviv(target, pname, params);
    
}

glTexParameterfv(...args: any[]): any {
   
    if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number') return this.glTexParameterfv$overload1(args[0], args[1], args[2], args[3]);
   
    if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number') return this.glTexParameterfv$overload2(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: glTexParameterfv'); }
  
    public glTexParameterfv$overload1(target: number, pname: number, params: number[], offset: number){
this.gl11.glTexParameterfv(target, pname, params, offset);
    
}


    public glTexParameterfv$overload2(target: number, pname: number, params: java.nio.FloatBuffer){
this.gl11.glTexParameterfv(target, pname, params);
    
}


    public glTexParameteri(target: number, pname: number, param: number){
this.gl11.glTexParameteri(target, pname, param);
    
}

glTexParameteriv(...args: any[]): any {
   
    if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number') return this.glTexParameteriv$overload1(args[0], args[1], args[2], args[3]);
   
    if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number') return this.glTexParameteriv$overload2(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: glTexParameteriv'); }
  
    public glTexParameteriv$overload1(target: number, pname: number, params: number[], offset: number){
this.gl11.glTexParameteriv(target, pname, params, offset);
    
}


    public glTexParameteriv$overload2(target: number, pname: number, params: java.nio.IntBuffer){
this.gl11.glTexParameteriv(target, pname, params);
    
}


    public glTexParameterxv(target: number, pname: number, params: number[], offset: number){
this.gl11.glTexParameteriv(target, pname, params, offset);
    
}


    public glVertexPointer(size: number, type: number, stride: number, offset: number){
this.gl11.glVertexPointer(size, type, stride, offset);
    
}


}

