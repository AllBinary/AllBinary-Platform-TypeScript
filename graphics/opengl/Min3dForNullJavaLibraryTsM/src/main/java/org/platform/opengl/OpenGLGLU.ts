
        /* Generated Code Do Not Modify */
        



import { GL10 } from "../../../javax/microedition/khronos/opengles/GL10.js";

    

export class OpenGLGLU
            extends Object
         {
        

    private static readonly instance: OpenGLGLU = new OpenGLGLU();
        
        

    public static getInstance(): OpenGLGLU{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public gluLookAt(gl: GL10, eyeX: number, eyeY: number, eyeZ: number, centerX: number, centerY: number, centerZ: number, upX: number, upY: number, upZ: number){
    //var gl = gl
    //var eyeX = eyeX
    //var eyeY = eyeY
    //var eyeZ = eyeZ
    //var centerX = centerX
    //var centerY = centerY
    //var centerZ = centerZ
    //var upX = upX
    //var upY = upY
    //var upZ = upZ



                            throw RuntimeException()
}


    public gluProject(gl: GL10, objX: number, objY: number, objZ: number, model: FloatArray, modelOffset: number, project: FloatArray, projectOffset: number, view: IntArray, viewOffset: number, win: FloatArray, winOffset: number): number{
    //var gl = gl
var objX = objX
var objY = objY
var objZ = objZ
var model = model
var modelOffset = modelOffset
var project = project
var projectOffset = projectOffset
var view = view
var viewOffset = viewOffset
var win = win
var winOffset = winOffset



                            throw RuntimeException()
}


    public gluUnProject(gl: GL10, winX: number, winY: number, winZ: number, model: FloatArray, modelOffset: number, project: FloatArray, projectOffset: number, view: IntArray, viewOffset: number, obj: FloatArray, objOffset: number): number{
    //var gl = gl
    //var winX = winX
    //var winY = winY
    //var winZ = winZ
    //var model = model
    //var modelOffset = modelOffset
    //var project = project
    //var projectOffset = projectOffset
    //var view = view
    //var viewOffset = viewOffset
var obj = obj
    //var objOffset = objOffset



                            throw RuntimeException()
}


    public glFrustumf(gl: GL10, lt: number, rt: number, btm: number, top: number, zNear: number, zFar: number){
    //var gl = gl
    //var lt = lt
    //var rt = rt
    //var btm = btm
    //var top = top
    //var zNear = zNear
    //var zFar = zFar



                            throw RuntimeException()
}


}
                
            

