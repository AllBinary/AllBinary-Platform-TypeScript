
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


        
import { GLU } from '../../../com/jogamp/opengl/glu/GLU.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GL10 } from './GL10.js';
import { GL2 } from './GL2.js';
import { GL } from './GL.js';
import { Buffer } from './Buffer.js';
import { IntBuffer } from './IntBuffer.js';
import { FloatBuffer } from './FloatBuffer.js';
//JOGLEToKhronosGL10
export class JOGL10
            extends Object
         implements javax.microedition.khronos.opengles.GL10 {
        

    readonly RED: string = "red: ";

    readonly GREEN: string = " green: ";

    readonly BLUE: string = " blue: ";

    readonly ALPHA: string = " alpha: ";

    readonly PNAME: string = "pname: ";

    readonly _PNAME: string = " pname: ";

    readonly PARAM: string = " param: ";

    readonly PARAMS: string = " params: ";

    readonly LIGHT: string = "light: ";

    readonly FACE: string = "face: ";

    readonly TARGET: string = "target: ";

    private readonly gl10: com.jogamp.opengl.GL2;

    public readonly glu: GLU;

    public readonly GL_LINE: number;

    public readonly GL_QUAD_STRIP: number;

public constructor (gl: com.jogamp.opengl.GL, gl2: com.jogamp.opengl.GL2){

            super();
        this.gl10= gl2;
    
this.glu= GLU.createGLU(this.gl10);
    
this.GL_LINE= com.jogamp.opengl.GL2.GL_LINE;
    
this.GL_QUAD_STRIP= com.jogamp.opengl.GL2.GL_QUAD_STRIP;
    
}


    public getJOGLGL(): com.jogamp.opengl.GL2{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gl10;
    
}


    public glActiveTexture(texture: number){
this.gl10.glActiveTexture(texture);
    
}


    public glAlphaFunc(func: number, ref: number){
this.gl10.glAlphaFunc(func, ref);
    
}


    public glBindTexture(target: number, texture: number){
this.gl10.glBindTexture(target, texture);
    
}


    public glBlendFunc(sfactor: number, dfactor: number){
this.gl10.glBlendFunc(sfactor, dfactor);
    
}


    public glClear(mask: number){
this.gl10.glClear(mask);
    
}


    public glClearColor(red: number, green: number, blue: number, alpha: number){
this.gl10.glClearColor(red, green, blue, alpha);
    
}


    public glClearDepthf(depth: number){
this.gl10.glClearDepthf(depth);
    
}


    public glClearStencil(s: number){
this.gl10.glClearStencil(s);
    
}


    public glClientActiveTexture(texture: number){
this.gl10.glClientActiveTexture(texture);
    
}


    public glColor4f(red: number, green: number, blue: number, alpha: number){
this.gl10.glColor4f(red, green, blue, alpha);
    
}


    public glColorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean){
this.gl10.glColorMask(red, green, blue, alpha);
    
}


    public glColorPointer(size: number, type: number, stride: number, pointer: java.nio.Buffer){
this.gl10.glColorPointer(size, type, stride, pointer);
    
}


    public glCompressedTexImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, imageSize: number, data: java.nio.Buffer){
this.gl10.glCompressedTexImage2D(target, level, internalformat, width, height, border, imageSize, data);
    
}


    public glCompressedTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, imageSize: number, data: java.nio.Buffer){
this.gl10.glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, data);
    
}


    public glCopyTexImage2D(target: number, level: number, internalformat: number, x: number, y: number, width: number, height: number, border: number){
this.gl10.glCopyTexImage2D(target, level, internalformat, x, y, width, height, border);
    
}


    public glCopyTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, x: number, y: number, width: number, height: number){
this.gl10.glCopyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height);
    
}


    public glCullFace(mode: number){
this.gl10.glCullFace(mode);
    
}


    public glDeleteTextures(n: number, textures: number[], offset: number){
this.gl10.glDeleteTextures(n, textures, offset);
    
}


    public glDeleteTextures(n: number, textures: java.nio.IntBuffer){
this.gl10.glDeleteTextures(n, textures);
    
}


    public glDepthFunc(func: number){
this.gl10.glDepthFunc(func);
    
}


    public glDepthMask(flag: boolean){
this.gl10.glDepthMask(flag);
    
}


    public glDepthRangef(zNear: number, zFar: number){
this.gl10.glDepthRangef(zNear, zFar);
    
}


    public glDisable(cap: number){
this.gl10.glDisable(cap);
    
}


    public glDisableClientState(array: number){
this.gl10.glDisableClientState(array);
    
}


    public glDrawArrays(mode: number, first: number, count: number){
this.gl10.glDrawArrays(mode, first, count);
    
}


    public glDrawElements(mode: number, count: number, type: number, indices: java.nio.Buffer){
this.gl10.glDrawElements(mode, count, type, indices);
    
}


    public glEnable(cap: number){
this.gl10.glEnable(cap);
    
}


    public glEnableClientState(array: number){
this.gl10.glEnableClientState(array);
    
}


    public glFinish(){
this.gl10.glFinish();
    
}


    public glFlush(){
this.gl10.glFlush();
    
}


    public glFogf(pname: number, param: number){
this.gl10.glFogf(pname, param);
    
}


    public glFogfv(pname: number, params: number[], offset: number){
this.gl10.glFogfv(pname, params, offset);
    
}


    public glFogfv(pname: number, params: java.nio.FloatBuffer){
this.gl10.glFogfv(pname, params);
    
}


    public glFrontFace(mode: number){
this.gl10.glFrontFace(mode);
    
}


    public glFrustumf(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number){
this.gl10.glFrustumf(left, right, bottom, top, zNear, zFar);
    
}


    public glGenTextures(n: number, textures: number[], offset: number){
this.gl10.glGenTextures(n, textures, offset);
    
}


    public glGenTextures(n: number, textures: java.nio.IntBuffer){
this.gl10.glGenTextures(n, textures);
    
}


    public glGetError(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gl10.glGetError();;
    
}


    public glGetIntegerv(pname: number, params: number[], offset: number){
this.gl10.glGetIntegerv(pname, params, offset);
    
}


    public glGetIntegerv(pname: number, params: java.nio.IntBuffer){
this.gl10.glGetIntegerv(pname, params);
    
}


    public glGetString(name: number): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gl10.glGetString(name);;
    
}


    public glHint(target: number, mode: number){
this.gl10.glHint(target, mode);
    
}


    public glLightModelf(pname: number, param: number){
this.gl10.glLightModelf(pname, param);
    
}


    public glLightModelfv(pname: number, params: number[], offset: number){
this.gl10.glLightModelfv(pname, params, offset);
    
}


    public glLightModelfv(pname: number, params: java.nio.FloatBuffer){
this.gl10.glLightModelfv(pname, params);
    
}


    public glLightf(light: number, pname: number, param: number){
this.gl10.glLightf(light, pname, param);
    
}


    public glLightfv(light: number, pname: number, params: number[], offset: number){
this.gl10.glLightfv(light, pname, params, offset);
    
}


    public glLightfv(light: number, pname: number, params: java.nio.FloatBuffer){
this.gl10.glLightfv(light, pname, params);
    
}


    public glLineWidth(width: number){
this.gl10.glLineWidth(width);
    
}


    public glLoadIdentity(){
this.gl10.glLoadIdentity();
    
}


    public glLoadMatrixf(m: number[], offset: number){
this.gl10.glLoadMatrixf(m, offset);
    
}


    public glLoadMatrixf(m: java.nio.FloatBuffer){
this.gl10.glLoadMatrixf(m);
    
}


    public glLogicOp(opcode: number){
this.gl10.glLogicOp(opcode);
    
}


    public glMaterialf(face: number, pname: number, param: number){
this.gl10.glMaterialf(face, pname, param);
    
}


    public glMaterialfv(face: number, pname: number, params: number[], offset: number){
this.gl10.glMaterialfv(face, pname, params, offset);
    
}


    public glMaterialfv(face: number, pname: number, params: java.nio.FloatBuffer){
this.gl10.glMaterialfv(face, pname, params);
    
}


    public glMatrixMode(mode: number){
this.gl10.glMatrixMode(mode);
    
}


    public glMultMatrixf(m: number[], offset: number){
this.gl10.glMultMatrixf(m, offset);
    
}


    public glMultMatrixf(m: java.nio.FloatBuffer){
this.gl10.glMultMatrixf(m);
    
}


    public glMultiTexCoord4f(target: number, s: number, t: number, r: number, q: number){
this.gl10.glMultiTexCoord4f(target, s, t, r, q);
    
}


    public glNormal3f(nx: number, ny: number, nz: number){
this.gl10.glNormal3f(nx, ny, nz);
    
}


    public glNormalPointer(type: number, stride: number, pointer: java.nio.Buffer){
this.gl10.glNormalPointer(type, stride, pointer);
    
}


    public glOrthof(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number){
this.gl10.glOrthof(left, right, bottom, top, zNear, zFar);
    
}


    public glPixelStorei(pname: number, param: number){
this.gl10.glPixelStorei(pname, param);
    
}


    public glPointSize(size: number){
this.gl10.glPointSize(size);
    
}


    public glPolygonOffset(factor: number, units: number){
this.gl10.glPolygonOffset(factor, units);
    
}


    public glPopMatrix(){
this.gl10.glPopMatrix();
    
}


    public glPushMatrix(){
this.gl10.glPushMatrix();
    
}


    public glReadPixels(x: number, y: number, width: number, height: number, format: number, type: number, pixels: java.nio.Buffer){
this.gl10.glReadPixels(x, y, width, height, format, type, pixels);
    
}


    public glRotatef(angle: number, x: number, y: number, z: number){
this.gl10.glRotatef(angle, x, y, z);
    
}


    public glRotatex(angle: number, x: number, y: number, z: number){
this.gl10.glRotatef(angle, x, y, z);
    
}


    public glSampleCoverage(value: number, invert: boolean){
this.gl10.glSampleCoverage(value, invert);
    
}


    public glScalef(x: number, y: number, z: number){
this.gl10.glScalef(x, y, z);
    
}


    public glScalex(x: number, y: number, z: number){
this.gl10.glScalef(x, y, z);
    
}


    public glScissor(x: number, y: number, width: number, height: number){
this.gl10.glScissor(x, y, width, height);
    
}


    public glShadeModel(mode: number){
this.gl10.glShadeModel(mode);
    
}


    public glStencilFunc(func: number, ref: number, mask: number){
this.gl10.glStencilFunc(func, ref, mask);
    
}


    public glStencilMask(mask: number){
this.gl10.glStencilMask(mask);
    
}


    public glStencilOp(fail: number, zfail: number, zpass: number){
this.gl10.glStencilOp(fail, zfail, zpass);
    
}


    public glTexCoordPointer(size: number, type: number, stride: number, pointer: java.nio.Buffer){
this.gl10.glTexCoordPointer(size, type, stride, pointer);
    
}


    public glTexEnvf(target: number, pname: number, param: number){
this.gl10.glTexEnvf(target, pname, param);
    
}


    public glTexEnvfv(target: number, pname: number, params: number[], offset: number){
this.gl10.glTexEnvfv(target, pname, params, offset);
    
}


    public glTexEnvfv(target: number, pname: number, params: java.nio.FloatBuffer){
this.gl10.glTexEnvfv(target, pname, params);
    
}


    public glTexImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, format: number, type: number, pixels: java.nio.Buffer){
this.gl10.glTexImage2D(target, level, internalformat, width, height, border, format, type, pixels);
    
}


    public glTexParameterf(target: number, pname: number, param: number){
this.gl10.glTexParameterf(target, pname, param);
    
}


    public glTexParameteri(target: number, pname: number, param: number){
this.gl10.glTexParameteri(target, pname, param);
    
}


    public glTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, type: number, pixels: java.nio.Buffer){
this.gl10.glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels);
    
}


    public glTranslatef(x: number, y: number, z: number){
this.gl10.glTranslatef(x, y, z);
    
}


    public glVertexPointer(size: number, type: number, stride: number, pointer: java.nio.Buffer){
this.gl10.glVertexPointer(size, type, stride, pointer);
    
}


    public glViewport(x: number, y: number, width: number, height: number){
this.gl10.glViewport(x, y, width, height);
    
}


    public glBegin(i: number){
this.gl10.glBegin(i);
    
}


    public glEnd(){
this.gl10.glEnd();
    
}


    public glVertex3f(f: number, f2: number, f3: number){
this.gl10.glVertex3f(f, f2, f3);
    
}


    public glPolygonMode(i: number, i1: number){
this.gl10.glPolygonMode(i, i1);
    
}


}
                
            

