
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
import { GL10 } from '../../../../javax/microedition/khronos/opengles/GL10.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OpenGLESImageProcessor } from './OpenGLESImageProcessor.js';

export class ModifierOpenGLESImageProcessor extends OpenGLESImageProcessor {
        

    private static readonly instanceC: ModifierOpenGLESImageProcessor = new ModifierOpenGLESImageProcessor();

    public static getInstance(): ModifierOpenGLESImageProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModifierOpenGLESImageProcessor.instanceC;
    
}


    public colorMask(gl: GL10, red: number, green: number, blue: number, alpha: number){
gl.glColor4f(red, green, blue, alpha);
    
}


}
                
            

