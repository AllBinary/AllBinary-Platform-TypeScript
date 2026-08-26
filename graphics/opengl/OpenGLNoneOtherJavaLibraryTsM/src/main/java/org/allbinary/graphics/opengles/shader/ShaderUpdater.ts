
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
//not game specific package import { EGLConfig } from '../../../../../javax/microedition/khronos/egl/EGLConfig.js';
      const EGLConfig = globalThis.javax.microedition.khronos.egl.EGLConfig;

      
//not game specific package import { GL10 } from '../../../../../javax/microedition/khronos/opengles/GL10.js';
      const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;

      
//not game specific package import { RendererStrings } from '../../../../../org/allbinary/graphics/opengles/renderer/RendererStrings.js';
      const RendererStrings = globalThis.org.allbinary.graphics.opengles.renderer.RendererStrings;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ShaderUpdater
            extends Object
         {
        

    private static readonly instance: ShaderUpdater = new ShaderUpdater();

    public static getInstance(): ShaderUpdater{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ShaderUpdater.instance;
    
}


    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    readonly rendererStrings: RendererStrings = RendererStrings.getInstance()!;

    public onSurfaceCreated(gl: GL10, eglConfig: EGLConfig){
}


}
                
            

