
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
        




















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ShaderUpdater } from "./ShaderUpdater.js";

export class AppRendererShaderUpdaterFactory extends ShaderUpdater {
        

    private static readonly instance: AppRendererShaderUpdaterFactory = new AppRendererShaderUpdaterFactory();
        
        

    public static getInstance(): AppRendererShaderUpdaterFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly NULL_SHADER_COMPOSITE_ARRAY: ShaderComposite[] = [];
        
        

    public readonly shaderCompositeArray: ShaderComposite[] = NULL_SHADER_COMPOSITE_ARRAY;
        
        

    private readonly shaderOpenGLProcessorArray: ShaderOpenGLProcessor[] = [];
        
        

    public getTestShaders(): ShaderOpenGLProcessor[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return shaderOpenGLProcessorArray;
    
}


    public setShaderComposite(object3d: any = {}){
    //var object3d = object3d
}


}
                
            

