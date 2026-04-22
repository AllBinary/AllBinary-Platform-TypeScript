
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
        



import { EGLConfig } from "../../../../../javax/microedition/khronos/egl/EGLConfig.js";

    
import { GL10 } from "../../../../../javax/microedition/khronos/opengles/GL10.js";

    
import { RendererStrings } from "../../../../../org/allbinary/graphics/opengles/renderer/RendererStrings.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ShaderUpdater
            extends Object
         {
        

    private static readonly instance: ShaderUpdater = new ShaderUpdater();
        
        

    public static getInstance(): ShaderUpdater{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    readonly rendererStrings: RendererStrings = RendererStrings.getInstance()!;
        
        

    public onSurfaceCreated(gl: GL10, eglConfig: EGLConfig){
    //var gl = gl
    //var eglConfig = eglConfig
}


}
                
            

