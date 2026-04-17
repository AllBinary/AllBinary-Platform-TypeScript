
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



import { GL10 } from "../../../../javax/microedition/khronos/opengles/GL10.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OpenGLESImageProcessor
            extends Object
         {
        

    private static readonly instance: OpenGLESImageProcessor = new OpenGLESImageProcessor();
        
        

    public static getInstance(): OpenGLESImageProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public translate(gl: GL10, translateX: number, translateY: number){
var gl = gl
var translateX = translateX
var translateY = translateY
gl.glTranslatef(translateX, translateY, 0);
    
}


    public rotate(gl: GL10, angle: number){
var gl = gl
var angle = angle
gl.glRotatef( -angle, 0, 0, 1);
    
}


    public scale(gl: GL10, scaleX: number, scaleY: number){
var gl = gl
var scaleX = scaleX
var scaleY = scaleY
gl.glScalef(scaleX, scaleY, 1);
    
}


    public colorMask(gl: GL10, red: number, green: number, blue: number, alpha: number){
var gl = gl
var red = red
var green = green
var blue = blue
var alpha = alpha
}


}
                
            

