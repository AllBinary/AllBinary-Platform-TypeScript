
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
        



import { GL } from "../../../com/jogamp/opengl/GL.js";

    
import { GL2 } from "../../../com/jogamp/opengl/GL2.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { GL11 } from "./GL11.js";

import { Buffer } from "./Buffer.js";

import { FloatBuffer } from "./FloatBuffer.js";

import { IntBuffer } from "./IntBuffer.js";

export class JOGL11 extends JOGL10 implements javax.microedition.khronos.opengles.GL11 {
        

    private readonly gl11: GL2
public constructor (gl: GL){
            this(gl, gl as com.jogamp.opengl.GL2);
                        //var gl = gl


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (gl: GL, gl2: com.jogamp.opengl.GL2){
            super(gl, gl2);
                        //var gl = gl
    //var gl2 = gl2


                            //For kotlin this is before the body of the constructor.
                    
this.gl11= getJOGLGL();
    
}


    public glBindBuffer(target: number, buffer: number){
var target = target
var buffer = buffer
this.gl11.glBindBuffer(target, buffer);
    
}


    public glBufferData(target: number, size: number, data: java.nio.Buffer, usage: number){
var target = target
var size = size
var data = data
var usage = usage
this.gl11.glBufferData(target, size, data, usage);
    
}


    public glBufferSubData(target: number, offset: number, size: number, data: java.nio.Buffer){
var target = target
var offset = offset
var size = size
var data = data
this.gl11.glBufferSubData(target, offset, size, data);
    
}


    public glClipPlanef(plane: number, equation: number[], offset: number){
var plane = plane
var equation = equation
var offset = offset
this.gl11.glClipPlanef(plane, equation, offset);
    
}


    public glClipPlanef(plane: number, equation: java.nio.FloatBuffer){
var plane = plane
var equation = equation
this.gl11.glClipPlanef(plane, equation);
    
}


    public glColor4ub(red: number, green: number, blue: number, alpha: number){
var red = red
var green = green
var blue = blue
var alpha = alpha
this.gl11.glColor4ub(red, green, blue, alpha);
    
}


    public glColorPointer(size: number, type: number, stride: number, offset: number){
var size = size
var type = type
var stride = stride
var offset = offset
this.gl11.glColorPointer(size, type, stride, offset);
    
}


    public glDeleteBuffers(n: number, buffers: number[], offset: number){
var n = n
var buffers = buffers
var offset = offset
this.gl11.glDeleteBuffers(n, buffers, offset);
    
}


    public glDeleteBuffers(n: number, buffers: java.nio.IntBuffer){
var n = n
var buffers = buffers
this.gl11.glDeleteBuffers(n, buffers);
    
}


    public glDrawElements(mode: number, count: number, type: number, offset: number){
var mode = mode
var count = count
var type = type
var offset = offset
this.gl11.glDrawElements(mode, count, type, offset);
    
}


    public glGenBuffers(n: number, buffers: number[], offset: number){
var n = n
var buffers = buffers
var offset = offset
this.gl11.glGenBuffers(n, buffers, offset);
    
}


    public glGenBuffers(n: number, buffers: java.nio.IntBuffer){
var n = n
var buffers = buffers
this.gl11.glGenBuffers(n, buffers);
    
}


    public glGetBufferParameteriv(target: number, pname: number, params: number[], offset: number){
var target = target
var pname = pname
var params = params
var offset = offset
this.gl11.glGetBufferParameteriv(target, pname, params, offset);
    
}


    public glGetBufferParameteriv(target: number, pname: number, params: java.nio.IntBuffer){
var target = target
var pname = pname
var params = params
this.gl11.glGetBufferParameteriv(target, pname, params);
    
}


    public glGetClipPlanef(pname: number, eqn: number[], offset: number){
var pname = pname
var eqn = eqn
var offset = offset
this.gl11.glGetClipPlanef(pname, eqn, offset);
    
}


    public glGetClipPlanef(pname: number, eqn: java.nio.FloatBuffer){
var pname = pname
var eqn = eqn
this.gl11.glGetClipPlanef(pname, eqn);
    
}


    public glGetFloatv(pname: number, params: number[], offset: number){
var pname = pname
var params = params
var offset = offset
this.gl11.glGetFloatv(pname, params, offset);
    
}


    public glGetFloatv(pname: number, params: java.nio.FloatBuffer){
var pname = pname
var params = params
this.gl11.glGetFloatv(pname, params);
    
}


    public glGetLightfv(light: number, pname: number, params: number[], offset: number){
var light = light
var pname = pname
var params = params
var offset = offset
this.gl11.glGetLightfv(light, pname, params, offset);
    
}


    public glGetLightfv(light: number, pname: number, params: java.nio.FloatBuffer){
var light = light
var pname = pname
var params = params
this.gl11.glGetLightfv(light, pname, params);
    
}


    public glGetMaterialfv(face: number, pname: number, params: number[], offset: number){
var face = face
var pname = pname
var params = params
var offset = offset
this.gl11.glGetMaterialfv(face, pname, params, offset);
    
}


    public glGetMaterialfv(face: number, pname: number, params: java.nio.FloatBuffer){
var face = face
var pname = pname
var params = params
this.gl11.glGetMaterialfv(face, pname, params);
    
}


    public glGetTexEnviv(env: number, pname: number, params: number[], offset: number){
var env = env
var pname = pname
var params = params
var offset = offset
this.gl11.glGetTexEnviv(env, pname, params, offset);
    
}


    public glGetTexEnviv(env: number, pname: number, params: java.nio.IntBuffer){
var env = env
var pname = pname
var params = params
this.gl11.glGetTexEnviv(env, pname, params);
    
}


    public glGetTexParameterfv(target: number, pname: number, params: number[], offset: number){
var target = target
var pname = pname
var params = params
var offset = offset
this.gl11.glGetTexParameterfv(target, pname, params, offset);
    
}


    public glGetTexParameterfv(target: number, pname: number, params: java.nio.FloatBuffer){
var target = target
var pname = pname
var params = params
this.gl11.glGetTexParameterfv(target, pname, params);
    
}


    public glGetTexParameteriv(target: number, pname: number, params: number[], offset: number){
var target = target
var pname = pname
var params = params
var offset = offset
this.gl11.glGetTexParameteriv(target, pname, params, offset);
    
}


    public glGetTexParameteriv(target: number, pname: number, params: java.nio.IntBuffer){
var target = target
var pname = pname
var params = params
this.gl11.glGetTexParameteriv(target, pname, params);
    
}


    public glIsBuffer(buffer: number): boolean{
var buffer = buffer



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gl11.glIsBuffer(buffer);;
    
}


    public glIsEnabled(cap: number): boolean{
var cap = cap



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gl11.glIsEnabled(cap);;
    
}


    public glIsTexture(texture: number): boolean{
var texture = texture



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gl11.glIsTexture(texture);;
    
}


    public glNormalPointer(type: number, stride: number, offset: number){
var type = type
var stride = stride
var offset = offset
this.gl11.glNormalPointer(type, stride, offset);
    
}


    public glPointParameterf(pname: number, param: number){
var pname = pname
var param = param
this.gl11.glPointParameterf(pname, param);
    
}


    public glPointParameterfv(pname: number, params: number[], offset: number){
var pname = pname
var params = params
var offset = offset
this.gl11.glPointParameterfv(pname, params, offset);
    
}


    public glPointParameterfv(pname: number, params: java.nio.FloatBuffer){
var pname = pname
var params = params
this.gl11.glPointParameterfv(pname, params);
    
}


    public glTexCoordPointer(size: number, type: number, stride: number, offset: number){
var size = size
var type = type
var stride = stride
var offset = offset
this.gl11.glTexCoordPointer(size, type, stride, offset);
    
}


    public glTexEnvi(target: number, pname: number, param: number){
var target = target
var pname = pname
var param = param
this.gl11.glTexEnvi(target, pname, param);
    
}


    public glTexEnviv(target: number, pname: number, params: number[], offset: number){
var target = target
var pname = pname
var params = params
var offset = offset
this.gl11.glTexEnviv(target, pname, params, offset);
    
}


    public glTexEnviv(target: number, pname: number, params: java.nio.IntBuffer){
var target = target
var pname = pname
var params = params
this.gl11.glTexEnviv(target, pname, params);
    
}


    public glTexParameterfv(target: number, pname: number, params: number[], offset: number){
var target = target
var pname = pname
var params = params
var offset = offset
this.gl11.glTexParameterfv(target, pname, params, offset);
    
}


    public glTexParameterfv(target: number, pname: number, params: java.nio.FloatBuffer){
var target = target
var pname = pname
var params = params
this.gl11.glTexParameterfv(target, pname, params);
    
}


    public glTexParameteri(target: number, pname: number, param: number){
var target = target
var pname = pname
var param = param
this.gl11.glTexParameteri(target, pname, param);
    
}


    public glTexParameteriv(target: number, pname: number, params: number[], offset: number){
var target = target
var pname = pname
var params = params
var offset = offset
this.gl11.glTexParameteriv(target, pname, params, offset);
    
}


    public glTexParameteriv(target: number, pname: number, params: java.nio.IntBuffer){
var target = target
var pname = pname
var params = params
this.gl11.glTexParameteriv(target, pname, params);
    
}


    public glTexParameterxv(target: number, pname: number, params: number[], offset: number){
var target = target
var pname = pname
var params = params
var offset = offset
this.gl11.glTexParameteriv(target, pname, params, offset);
    
}


    public glVertexPointer(size: number, type: number, stride: number, offset: number){
var size = size
var type = type
var stride = stride
var offset = offset
this.gl11.glVertexPointer(size, type, stride, offset);
    
}


}
                
            

