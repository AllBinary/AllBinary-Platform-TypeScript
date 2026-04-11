
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

    

export class OpenGLESDeviceImageTranslate extends OpenGLESImageTranslate {
        

    public translateX: number = 0.0f;
        
        

    public translateY: number = 0.0f;
        
        

    public translateX2: number = 0.0f;
        
        

    public translateY2: number = 0.0f;
        
        

    public translate(gl: GL10, openGLESImage: OpenGLESImage, x: number, y: number){
    //var gl = gl
    //var openGLESImage = openGLESImage
    //var x = x
    //var y = y
openGLESImage!.imageProcessor!.translate(gl, translateX +(openGLESImage!.openGLESImageProperties!.scaleX *x), translateY +(openGLESImage!.openGLESImageProperties!.scaleY *y));
    
}


    public translate2(gl: GL10, openGLESImage: OpenGLESImage){
    //var gl = gl
    //var openGLESImage = openGLESImage
openGLESImage!.imageProcessor!.translate(gl, translateX2, translateY2);
    
}


}
                
            

