
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
        



import { GL10 } from "../../../../../javax/microedition/khronos/opengles/GL10.js";

    
import { NullOpenGLProcessorFactory } from "../../../../../org/allbinary/graphics/opengles/NullOpenGLProcessorFactory.js";

    
import { OpenGLCapabilities } from "../../../../../org/allbinary/graphics/opengles/OpenGLCapabilities.js";

    
import { OpenGLProcessor } from "../../../../../org/allbinary/graphics/opengles/OpenGLProcessor.js";

    

import { CompositeShaderUpdater } from "./CompositeShaderUpdater.js";

import { ShaderInitializer } from "./ShaderInitializer.js";

import { ModelViewProjection } from "./ModelViewProjection.js";

export class NullShaderComposite extends ShaderComposite {
        

    private static readonly instance: NullShaderComposite = new object: NullShaderComposite(OpenGLCapabilities.getInstance()!.VERSION_2_0, 
                                                [
                                                    new Shader(),new Shader();
        
        
                                                ], CompositeShaderUpdater.getInstance(), ShaderInitializer.getInstance(), ModelViewProjection.getInstance(), 
                            null, 
                            null, NullOpenGLProcessorFactory.getInstance())
                                {
                                
    public init(gl: GL10){
var gl = gl
}

                                }
                            ;
        
        

    public static getInstance(): ShaderComposite{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

public constructor (requiresOpenGLVersion: string, shaderArray: Shader[], compositeShaderUpdater: CompositeShaderUpdater, shaderInitializer: ShaderInitializer, modelViewProjection: ModelViewProjection, colorOpenGLProcessor: OpenGLProcessor, vertexOpenGLProcessor: OpenGLProcessor, disableProgramShaderOpenGLProcessor: OpenGLProcessor)                        

                            : super(requiresOpenGLVersion, shaderArray, compositeShaderUpdater, shaderInitializer, modelViewProjection, colorOpenGLProcessor, vertexOpenGLProcessor, disableProgramShaderOpenGLProcessor){

            super();
                //var requiresOpenGLVersion = requiresOpenGLVersion
    //var shaderArray = shaderArray
    //var compositeShaderUpdater = compositeShaderUpdater
    //var shaderInitializer = shaderInitializer
    //var modelViewProjection = modelViewProjection
    //var colorOpenGLProcessor = colorOpenGLProcessor
    //var vertexOpenGLProcessor = vertexOpenGLProcessor
    //var disableProgramShaderOpenGLProcessor = disableProgramShaderOpenGLProcessor


                            //For kotlin this is before the body of the constructor.
                    
this.useProgramShaderOpenGLProcessor= NullOpenGLProcessorFactory.getInstance();
    
}


}
                
            

