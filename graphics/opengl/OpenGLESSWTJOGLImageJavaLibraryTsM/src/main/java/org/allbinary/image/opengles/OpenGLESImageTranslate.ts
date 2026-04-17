
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
        



import { GL10 } from "../../../../javax/microedition/khronos/opengles/GL10.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { OpenGLESImage } from "./OpenGLESImage.js";

export class OpenGLESImageTranslate
            extends Object
         {
        

    private static readonly instance: OpenGLESImageTranslate = new OpenGLESImageTranslate();
        
        

    public static getInstance(): OpenGLESImageTranslate{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public translate(gl: GL10, openGLESImage: OpenGLESImage, x: number, y: number){
    //var gl = gl
    //var openGLESImage = openGLESImage
    //var x = x
    //var y = y
openGLESImage!.imageProcessor!.translate(gl, x, y);
    
}


    public translate2(gl: GL10, openGLESImage: OpenGLESImage){
    //var gl = gl
    //var openGLESImage = openGLESImage
}


}
                
            

