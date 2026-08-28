
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
        



//not game specific package import { GL10 } from '../../../../../javax/microedition/khronos/opengles/GL10.js';
      const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;

      
//not game specific package import { NullOpenGLProcessorFactory } from '../../../../../org/allbinary/graphics/opengles/NullOpenGLProcessorFactory.js';
      const NullOpenGLProcessorFactory = globalThis.org.allbinary.graphics.opengles.NullOpenGLProcessorFactory;

      
//not game specific package import { OpenGLCapabilities } from '../../../../../org/allbinary/graphics/opengles/OpenGLCapabilities.js';
      const OpenGLCapabilities = globalThis.org.allbinary.graphics.opengles.OpenGLCapabilities;

      
//not game specific package import { OpenGLProcessor } from '../../../../../org/allbinary/graphics/opengles/OpenGLProcessor.js';
      const OpenGLProcessor = globalThis.org.allbinary.graphics.opengles.OpenGLProcessor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ShaderComposite } from './ShaderComposite.js';
import { Shader } from './Shader.js';
import { CompositeShaderUpdater } from './CompositeShaderUpdater.js';
import { ShaderInitializer } from './ShaderInitializer.js';
import { ModelViewProjection } from './ModelViewProjection.js';

export class NullShaderComposite extends ShaderComposite {
        

    private static readonly instance: NullShaderComposite = new class extends NullShaderComposite
                                {
                                
    public init(gl: GL10){
}

                                }
                            ;

    public static getInstance(): ShaderComposite{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullShaderComposite.instance;
    
}


public constructor (requiresOpenGLVersion: string, shaderArray: Shader[], compositeShaderUpdater: CompositeShaderUpdater, shaderInitializer: ShaderInitializer, modelViewProjection: ModelViewProjection, colorOpenGLProcessor: OpenGLProcessor, vertexOpenGLProcessor: OpenGLProcessor, disableProgramShaderOpenGLProcessor: OpenGLProcessor){
            super(requiresOpenGLVersion, shaderArray, compositeShaderUpdater, shaderInitializer, modelViewProjection, colorOpenGLProcessor, vertexOpenGLProcessor, disableProgramShaderOpenGLProcessor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.useProgramShaderOpenGLProcessor= NullOpenGLProcessorFactory.getInstance();
    
}


}



