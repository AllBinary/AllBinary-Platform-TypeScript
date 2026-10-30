
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        
import { GL10 } from '../../../javax/microedition/khronos/opengles/GL10.js';
//not GWT import const GL10

import { Buffer } from '../../../java/nio/Buffer.js';
//not GWT import const Buffer

import { FloatBuffer } from '../../../java/nio/FloatBuffer.js';
//not GWT import const FloatBuffer

import { IntBuffer } from '../../../java/nio/IntBuffer.js';
//not GWT import const IntBuffer

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class NullGL10
            extends Object
         implements GL10 {
        

    public static readonly NULL_GL10: NullGL10 = new NullGL10();

    public glActiveTexture(texture: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glAlphaFunc(func: number, ref: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glBindTexture(target: number, texture: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glBlendFunc(sfactor: number, dfactor: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glClear(mask: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glClearColor(red: number, green: number, blue: number, alpha: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glClearDepthf(depth: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glClearStencil(s: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glClientActiveTexture(texture: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glColor4f(red: number, green: number, blue: number, alpha: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glColorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glColorPointer(size: number, type: number, stride: number, pointer: Buffer){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glCompressedTexImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, imageSize: number, data: Buffer){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glCompressedTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, imageSize: number, data: Buffer){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glCopyTexImage2D(target: number, level: number, internalformat: number, x: number, y: number, width: number, height: number, border: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glCopyTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, x: number, y: number, width: number, height: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glCullFace(mode: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}

glDeleteTextures(...args: any[]): any {
   
    if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number') return this.glDeleteTextures$overload1(args[0], args[1], args[2]);
   
    if (args.length === 2 && typeof args[0] === 'number') return this.glDeleteTextures$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: glDeleteTextures'); }
  
    public glDeleteTextures$overload1(n: number, textures: number[], offset: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glDeleteTextures$overload2(n: number, textures: IntBuffer){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glDepthFunc(func: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glDepthMask(flag: boolean){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glDepthRangef(zNear: number, zFar: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glDisable(cap: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glDisableClientState(array: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glDrawArrays(mode: number, first: number, count: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glDrawElements(mode: number, count: number, type: number, indices: Buffer){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glEnable(cap: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glEnableClientState(array: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glFinish(){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glFlush(){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glFogf(pname: number, param: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}

glFogfv(...args: any[]): any {
   
    if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number') return this.glFogfv$overload1(args[0], args[1], args[2]);
   
    if (args.length === 2 && typeof args[0] === 'number') return this.glFogfv$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: glFogfv'); }
  
    public glFogfv$overload1(pname: number, params: number[], offset: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glFogfv$overload2(pname: number, params: FloatBuffer){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glFrontFace(mode: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glFrustumf(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}

glGenTextures(...args: any[]): any {
   
    if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number') return this.glGenTextures$overload1(args[0], args[1], args[2]);
   
    if (args.length === 2 && typeof args[0] === 'number') return this.glGenTextures$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: glGenTextures'); }
  
    public glGenTextures$overload1(n: number, textures: number[], offset: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glGenTextures$overload2(n: number, textures: IntBuffer){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glGetError(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}

glGetIntegerv(...args: any[]): any {
   
    if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number') return this.glGetIntegerv$overload1(args[0], args[1], args[2]);
   
    if (args.length === 2 && typeof args[0] === 'number') return this.glGetIntegerv$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: glGetIntegerv'); }
  
    public glGetIntegerv$overload1(pname: number, params: number[], offset: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glGetIntegerv$overload2(pname: number, params: IntBuffer){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glGetString(name: number): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


    public glHint(target: number, mode: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glLightModelf(pname: number, param: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}

glLightModelfv(...args: any[]): any {
   
    if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number') return this.glLightModelfv$overload1(args[0], args[1], args[2]);
   
    if (args.length === 2 && typeof args[0] === 'number') return this.glLightModelfv$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: glLightModelfv'); }
  
    public glLightModelfv$overload1(pname: number, params: number[], offset: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glLightModelfv$overload2(pname: number, params: FloatBuffer){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glLightf(light: number, pname: number, param: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}

glLightfv(...args: any[]): any {
   
    if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number') return this.glLightfv$overload1(args[0], args[1], args[2], args[3]);
   
    if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number') return this.glLightfv$overload2(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: glLightfv'); }
  
    public glLightfv$overload1(light: number, pname: number, params: number[], offset: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glLightfv$overload2(light: number, pname: number, params: FloatBuffer){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glLineWidth(width: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glLoadIdentity(){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}

glLoadMatrixf(...args: any[]): any {
   
    if (args.length === 2 && typeof args[1] === 'number') return this.glLoadMatrixf$overload1(args[0], args[1]);
   
    if (args.length === 1) return this.glLoadMatrixf$overload2(args[0]);
   
   throw new TypeError('No matching overload: glLoadMatrixf'); }
  
    public glLoadMatrixf$overload1(m: number[], offset: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glLoadMatrixf$overload2(m: FloatBuffer){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glLogicOp(opcode: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glMaterialf(face: number, pname: number, param: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}

glMaterialfv(...args: any[]): any {
   
    if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number') return this.glMaterialfv$overload1(args[0], args[1], args[2], args[3]);
   
    if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number') return this.glMaterialfv$overload2(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: glMaterialfv'); }
  
    public glMaterialfv$overload1(face: number, pname: number, params: number[], offset: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glMaterialfv$overload2(face: number, pname: number, params: FloatBuffer){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glMatrixMode(mode: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}

glMultMatrixf(...args: any[]): any {
   
    if (args.length === 2 && typeof args[1] === 'number') return this.glMultMatrixf$overload1(args[0], args[1]);
   
    if (args.length === 1) return this.glMultMatrixf$overload2(args[0]);
   
   throw new TypeError('No matching overload: glMultMatrixf'); }
  
    public glMultMatrixf$overload1(m: number[], offset: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glMultMatrixf$overload2(m: FloatBuffer){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glMultiTexCoord4f(target: number, s: number, t: number, r: number, q: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glNormal3f(nx: number, ny: number, nz: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glNormalPointer(type: number, stride: number, pointer: Buffer){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glOrthof(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glPixelStorei(pname: number, param: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glPointSize(size: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glPolygonOffset(factor: number, units: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glPopMatrix(){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glPushMatrix(){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glReadPixels(x: number, y: number, width: number, height: number, format: number, type: number, pixels: Buffer){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glRotatef(angle: number, x: number, y: number, z: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glRotatex(angle: number, x: number, y: number, z: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glSampleCoverage(value: number, invert: boolean){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glScalef(x: number, y: number, z: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glScalex(x: number, y: number, z: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glScissor(x: number, y: number, width: number, height: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glShadeModel(mode: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glStencilFunc(func: number, ref: number, mask: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glStencilMask(mask: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glStencilOp(fail: number, zfail: number, zpass: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glTexCoordPointer(size: number, type: number, stride: number, pointer: Buffer){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glTexEnvf(target: number, pname: number, param: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}

glTexEnvfv(...args: any[]): any {
   
    if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number') return this.glTexEnvfv$overload1(args[0], args[1], args[2], args[3]);
   
    if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number') return this.glTexEnvfv$overload2(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: glTexEnvfv'); }
  
    public glTexEnvfv$overload1(target: number, pname: number, params: number[], offset: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glTexEnvfv$overload2(target: number, pname: number, params: FloatBuffer){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glTexImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, format: number, type: number, pixels: Buffer){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glTexParameterf(target: number, pname: number, param: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glTexParameteri(target: number, pname: number, param: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, type: number, pixels: Buffer){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glTranslatef(x: number, y: number, z: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glVertexPointer(size: number, type: number, stride: number, pointer: Buffer){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glViewport(x: number, y: number, width: number, height: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glBegin(i: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glEnd(){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glVertex3f(f: number, f2: number, f3: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


    public glPolygonMode(i: number, i1: number){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


}

