
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

        


import { GL10 } from '../../../../javax/microedition/khronos/opengles/GL10.js';
      //not GWT import const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OpenGLESImageTranslate } from './OpenGLESImageTranslate.js';
//not GWT import const OpenGLESImageTranslate = globalThis.org.allbinary.image.opengles.OpenGLESImageTranslate;

                import { OpenGLESImage } from './OpenGLESImage.js';
//not GWT import const OpenGLESImage = globalThis.org.allbinary.image.opengles.OpenGLESImage;

                
export class OpenGLESDeviceImageTranslate extends OpenGLESImageTranslate {
        

    public translateX: number = 0;

    public translateY: number = 0;

    public translateX2: number = 0;

    public translateY2: number = 0;

    public translate(gl: GL10, openGLESImage: OpenGLESImage, x: number, y: number){
openGLESImage!.imageProcessor!.translate(gl, this.translateX +(openGLESImage!.openGLESImageProperties!.scaleX *x), this.translateY +(openGLESImage!.openGLESImageProperties!.scaleY *y));
    
}


    public translate2(gl: GL10, openGLESImage: OpenGLESImage){
openGLESImage!.imageProcessor!.translate(gl, this.translateX2, this.translateY2);
    
}


}



