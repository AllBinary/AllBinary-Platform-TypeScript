
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
        



import { EGLConfig } from "../../javax/microedition/khronos/egl/EGLConfig.js";

    
import { GL10 } from "../../javax/microedition/khronos/opengles/GL10.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface Renderer {
        

    onSurfaceCreated(gl: GL10, config: EGLConfig)

    onSurfaceChanged(gl: GL10, width: number, height: number)

    onDrawFrame(gl: GL10)

}
                
            

