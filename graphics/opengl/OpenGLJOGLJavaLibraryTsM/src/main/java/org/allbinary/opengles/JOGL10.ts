
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
        



import { GLU } from "../../../com/jogamp/opengl/glu/GLU.js";

    

export class JOGL10
            extends Object
        
                , javax.microedition.khronos.opengles.GL10 {
        

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
        
        

    private readonly gl10: com.jogamp.opengl.GL2

    public readonly glu: GLU

    public readonly GL_LINE: number

    public readonly GL_QUAD_STRIP: number
public constructor (gl: com.jogamp.opengl.GL, gl2: com.jogamp.opengl.GL2){

            super();
                //var gl = gl
    //var gl2 = gl2
this.gl10= gl2
this.glu= GLU.createGLU(this.gl10)
this.GL_LINE= com.jogamp.opengl.GL2.GL_LINE
this.GL_QUAD_STRIP= com.jogamp.opengl.GL2.GL_QUAD_STRIP
}


    public getJOGLGL(): com.jogamp.opengl.GL2{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gl10;
    
}


    public glActiveTexture(texture: number){
var texture = texture
glActiveTexture(texture)
}


    public glAlphaFunc(func: number, ref: number){
var func = func
var ref = ref
glAlphaFunc(func, ref)
}


    public glBindTexture(target: number, texture: number){
var target = target
var texture = texture
glBindTexture(target, texture)
}


    public glBlendFunc(sfactor: number, dfactor: number){
var sfactor = sfactor
var dfactor = dfactor
glBlendFunc(sfactor, dfactor)
}


    public glClear(mask: number){
var mask = mask
glClear(mask)
}


    public glClearColor(red: number, green: number, blue: number, alpha: number){
var red = red
var green = green
var blue = blue
var alpha = alpha
glClearColor(red, green, blue, alpha)
}


    public glClearDepthf(depth: number){
var depth = depth
glClearDepthf(depth)
}


    public glClearStencil(s: number){
var s = s
glClearStencil(s)
}


    public glClientActiveTexture(texture: number){
var texture = texture
glClientActiveTexture(texture)
}


    public glColor4f(red: number, green: number, blue: number, alpha: number){
var red = red
var green = green
var blue = blue
var alpha = alpha
glColor4f(red, green, blue, alpha)
}


    public glColorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean){
var red = red
var green = green
var blue = blue
var alpha = alpha
glColorMask(red, green, blue, alpha)
}


    public glColorPointer(size: number, type: number, stride: number, pointer: java.nio.Buffer){
var size = size
var type = type
var stride = stride
var pointer = pointer
glColorPointer(size, type, stride, pointer)
}


    public glCompressedTexImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, imageSize: number, data: java.nio.Buffer){
var target = target
var level = level
var internalformat = internalformat
var width = width
var height = height
var border = border
var imageSize = imageSize
var data = data
glCompressedTexImage2D(target, level, internalformat, width, height, border, imageSize, data)
}


    public glCompressedTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, imageSize: number, data: java.nio.Buffer){
var target = target
var level = level
var xoffset = xoffset
var yoffset = yoffset
var width = width
var height = height
var format = format
var imageSize = imageSize
var data = data
glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, data)
}


    public glCopyTexImage2D(target: number, level: number, internalformat: number, x: number, y: number, width: number, height: number, border: number){
var target = target
var level = level
var internalformat = internalformat
var x = x
var y = y
var width = width
var height = height
var border = border
glCopyTexImage2D(target, level, internalformat, x, y, width, height, border)
}


    public glCopyTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, x: number, y: number, width: number, height: number){
var target = target
var level = level
var xoffset = xoffset
var yoffset = yoffset
var x = x
var y = y
var width = width
var height = height
glCopyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height)
}


    public glCullFace(mode: number){
var mode = mode
glCullFace(mode)
}


    public glDeleteTextures(n: number, textures: IntArray, offset: number){
var n = n
var textures = textures
var offset = offset
glDeleteTextures(n, textures, offset)
}


    public glDeleteTextures(n: number, textures: java.nio.IntBuffer){
var n = n
var textures = textures
glDeleteTextures(n, textures)
}


    public glDepthFunc(func: number){
var func = func
glDepthFunc(func)
}


    public glDepthMask(flag: boolean){
var flag = flag
glDepthMask(flag)
}


    public glDepthRangef(zNear: number, zFar: number){
var zNear = zNear
var zFar = zFar
glDepthRangef(zNear, zFar)
}


    public glDisable(cap: number){
var cap = cap
glDisable(cap)
}


    public glDisableClientState(array: number){
var array = array
glDisableClientState(array)
}


    public glDrawArrays(mode: number, first: number, count: number){
var mode = mode
var first = first
var count = count
glDrawArrays(mode, first, count)
}


    public glDrawElements(mode: number, count: number, type: number, indices: java.nio.Buffer){
var mode = mode
var count = count
var type = type
var indices = indices
glDrawElements(mode, count, type, indices)
}


    public glEnable(cap: number){
var cap = cap
glEnable(cap)
}


    public glEnableClientState(array: number){
var array = array
glEnableClientState(array)
}


    public glFinish(){
glFinish()
}


    public glFlush(){
glFlush()
}


    public glFogf(pname: number, param: number){
var pname = pname
var param = param
glFogf(pname, param)
}


    public glFogfv(pname: number, params: FloatArray, offset: number){
var pname = pname
var params = params
var offset = offset
glFogfv(pname, params, offset)
}


    public glFogfv(pname: number, params: java.nio.FloatBuffer){
var pname = pname
var params = params
glFogfv(pname, params)
}


    public glFrontFace(mode: number){
var mode = mode
glFrontFace(mode)
}


    public glFrustumf(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number){
var left = left
var right = right
var bottom = bottom
var top = top
var zNear = zNear
var zFar = zFar
glFrustumf(left, right, bottom, top, zNear, zFar)
}


    public glGenTextures(n: number, textures: IntArray, offset: number){
var n = n
var textures = textures
var offset = offset
glGenTextures(n, textures, offset)
}


    public glGenTextures(n: number, textures: java.nio.IntBuffer){
var n = n
var textures = textures
glGenTextures(n, textures)
}


    public glGetError(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gl10.glGetError();
    
}


    public glGetIntegerv(pname: number, params: IntArray, offset: number){
var pname = pname
var params = params
var offset = offset
glGetIntegerv(pname, params, offset)
}


    public glGetIntegerv(pname: number, params: java.nio.IntBuffer){
var pname = pname
var params = params
glGetIntegerv(pname, params)
}


    public glGetString(name: number): string{
var name = name



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gl10.glGetString(name);
    
}


    public glHint(target: number, mode: number){
var target = target
var mode = mode
glHint(target, mode)
}


    public glLightModelf(pname: number, param: number){
var pname = pname
var param = param
glLightModelf(pname, param)
}


    public glLightModelfv(pname: number, params: FloatArray, offset: number){
var pname = pname
var params = params
var offset = offset
glLightModelfv(pname, params, offset)
}


    public glLightModelfv(pname: number, params: java.nio.FloatBuffer){
var pname = pname
var params = params
glLightModelfv(pname, params)
}


    public glLightf(light: number, pname: number, param: number){
var light = light
var pname = pname
var param = param
glLightf(light, pname, param)
}


    public glLightfv(light: number, pname: number, params: FloatArray, offset: number){
var light = light
var pname = pname
var params = params
var offset = offset
glLightfv(light, pname, params, offset)
}


    public glLightfv(light: number, pname: number, params: java.nio.FloatBuffer){
var light = light
var pname = pname
var params = params
glLightfv(light, pname, params)
}


    public glLineWidth(width: number){
var width = width
glLineWidth(width)
}


    public glLoadIdentity(){
glLoadIdentity()
}


    public glLoadMatrixf(m: FloatArray, offset: number){
var m = m
var offset = offset
glLoadMatrixf(m, offset)
}


    public glLoadMatrixf(m: java.nio.FloatBuffer){
var m = m
glLoadMatrixf(m)
}


    public glLogicOp(opcode: number){
var opcode = opcode
glLogicOp(opcode)
}


    public glMaterialf(face: number, pname: number, param: number){
var face = face
var pname = pname
var param = param
glMaterialf(face, pname, param)
}


    public glMaterialfv(face: number, pname: number, params: FloatArray, offset: number){
var face = face
var pname = pname
var params = params
var offset = offset
glMaterialfv(face, pname, params, offset)
}


    public glMaterialfv(face: number, pname: number, params: java.nio.FloatBuffer){
var face = face
var pname = pname
var params = params
glMaterialfv(face, pname, params)
}


    public glMatrixMode(mode: number){
var mode = mode
glMatrixMode(mode)
}


    public glMultMatrixf(m: FloatArray, offset: number){
var m = m
var offset = offset
glMultMatrixf(m, offset)
}


    public glMultMatrixf(m: java.nio.FloatBuffer){
var m = m
glMultMatrixf(m)
}


    public glMultiTexCoord4f(target: number, s: number, t: number, r: number, q: number){
var target = target
var s = s
var t = t
var r = r
var q = q
glMultiTexCoord4f(target, s, t, r, q)
}


    public glNormal3f(nx: number, ny: number, nz: number){
var nx = nx
var ny = ny
var nz = nz
glNormal3f(nx, ny, nz)
}


    public glNormalPointer(type: number, stride: number, pointer: java.nio.Buffer){
var type = type
var stride = stride
var pointer = pointer
glNormalPointer(type, stride, pointer)
}


    public glOrthof(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number){
var left = left
var right = right
var bottom = bottom
var top = top
var zNear = zNear
var zFar = zFar
glOrthof(left, right, bottom, top, zNear, zFar)
}


    public glPixelStorei(pname: number, param: number){
var pname = pname
var param = param
glPixelStorei(pname, param)
}


    public glPointSize(size: number){
var size = size
glPointSize(size)
}


    public glPolygonOffset(factor: number, units: number){
var factor = factor
var units = units
glPolygonOffset(factor, units)
}


    public glPopMatrix(){
glPopMatrix()
}


    public glPushMatrix(){
glPushMatrix()
}


    public glReadPixels(x: number, y: number, width: number, height: number, format: number, type: number, pixels: java.nio.Buffer){
var x = x
var y = y
var width = width
var height = height
var format = format
var type = type
var pixels = pixels
glReadPixels(x, y, width, height, format, type, pixels)
}


    public glRotatef(angle: number, x: number, y: number, z: number){
var angle = angle
var x = x
var y = y
var z = z
glRotatef(angle, x, y, z)
}


    public glRotatex(angle: number, x: number, y: number, z: number){
var angle = angle
var x = x
var y = y
var z = z
glRotatef(angle, x, y, z)
}


    public glSampleCoverage(value: number, invert: boolean){
var value = value
var invert = invert
glSampleCoverage(value, invert)
}


    public glScalef(x: number, y: number, z: number){
var x = x
var y = y
var z = z
glScalef(x, y, z)
}


    public glScalex(x: number, y: number, z: number){
var x = x
var y = y
var z = z
glScalef(x, y, z)
}


    public glScissor(x: number, y: number, width: number, height: number){
var x = x
var y = y
var width = width
var height = height
glScissor(x, y, width, height)
}


    public glShadeModel(mode: number){
var mode = mode
glShadeModel(mode)
}


    public glStencilFunc(func: number, ref: number, mask: number){
var func = func
var ref = ref
var mask = mask
glStencilFunc(func, ref, mask)
}


    public glStencilMask(mask: number){
var mask = mask
glStencilMask(mask)
}


    public glStencilOp(fail: number, zfail: number, zpass: number){
var fail = fail
var zfail = zfail
var zpass = zpass
glStencilOp(fail, zfail, zpass)
}


    public glTexCoordPointer(size: number, type: number, stride: number, pointer: java.nio.Buffer){
var size = size
var type = type
var stride = stride
var pointer = pointer
glTexCoordPointer(size, type, stride, pointer)
}


    public glTexEnvf(target: number, pname: number, param: number){
var target = target
var pname = pname
var param = param
glTexEnvf(target, pname, param)
}


    public glTexEnvfv(target: number, pname: number, params: FloatArray, offset: number){
var target = target
var pname = pname
var params = params
var offset = offset
glTexEnvfv(target, pname, params, offset)
}


    public glTexEnvfv(target: number, pname: number, params: java.nio.FloatBuffer){
var target = target
var pname = pname
var params = params
glTexEnvfv(target, pname, params)
}


    public glTexImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, format: number, type: number, pixels: java.nio.Buffer){
var target = target
var level = level
var internalformat = internalformat
var width = width
var height = height
var border = border
var format = format
var type = type
var pixels = pixels
glTexImage2D(target, level, internalformat, width, height, border, format, type, pixels)
}


    public glTexParameterf(target: number, pname: number, param: number){
var target = target
var pname = pname
var param = param
glTexParameterf(target, pname, param)
}


    public glTexParameteri(target: number, pname: number, param: number){
var target = target
var pname = pname
var param = param
glTexParameteri(target, pname, param)
}


    public glTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, type: number, pixels: java.nio.Buffer){
var target = target
var level = level
var xoffset = xoffset
var yoffset = yoffset
var width = width
var height = height
var format = format
var type = type
var pixels = pixels
glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels)
}


    public glTranslatef(x: number, y: number, z: number){
var x = x
var y = y
var z = z
glTranslatef(x, y, z)
}


    public glVertexPointer(size: number, type: number, stride: number, pointer: java.nio.Buffer){
var size = size
var type = type
var stride = stride
var pointer = pointer
glVertexPointer(size, type, stride, pointer)
}


    public glViewport(x: number, y: number, width: number, height: number){
var x = x
var y = y
var width = width
var height = height
glViewport(x, y, width, height)
}


    public glBegin(i: number){
var i = i
glBegin(i)
}


    public glEnd(){
glEnd()
}


    public glVertex3f(f: number, f2: number, f3: number){
var f = f
var f2 = f2
var f3 = f3
glVertex3f(f, f2, f3)
}


    public glPolygonMode(i: number, i1: number){
var i = i
var i1 = i1
glPolygonMode(i, i1)
}


}
                
            

