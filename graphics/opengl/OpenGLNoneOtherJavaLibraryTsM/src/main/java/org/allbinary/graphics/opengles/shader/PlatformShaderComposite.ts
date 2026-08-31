
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

        


import { NullOpenGLProcessorFactory } from '../../../../../org/allbinary/graphics/opengles/NullOpenGLProcessorFactory.js';
      //not GWT import const NullOpenGLProcessorFactory = globalThis.org.allbinary.graphics.opengles.NullOpenGLProcessorFactory;

      
import { OpenGLProcessor } from '../../../../../org/allbinary/graphics/opengles/OpenGLProcessor.js';
      //not GWT import const OpenGLProcessor = globalThis.org.allbinary.graphics.opengles.OpenGLProcessor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ShaderComposite } from './ShaderComposite.js';
//not GWT import const ShaderComposite = globalThis.org.allbinary.graphics.opengles.shader.ShaderComposite;

                import { Shader } from './Shader.js';
//not GWT import const Shader = globalThis.org.allbinary.graphics.opengles.shader.Shader;

                import { CompositeShaderUpdater } from './CompositeShaderUpdater.js';
//not GWT import const CompositeShaderUpdater = globalThis.org.allbinary.graphics.opengles.shader.CompositeShaderUpdater;

                import { ShaderInitializer } from './ShaderInitializer.js';
//not GWT import const ShaderInitializer = globalThis.org.allbinary.graphics.opengles.shader.ShaderInitializer;

                import { ModelViewProjection } from './ModelViewProjection.js';
//not GWT import const ModelViewProjection = globalThis.org.allbinary.graphics.opengles.shader.ModelViewProjection;

                
export class PlatformShaderComposite extends ShaderComposite {
        

public constructor (requiresOpenGLVersion: string, shaderArray: Shader[], compositeShaderUpdater: CompositeShaderUpdater, shaderInitializer: ShaderInitializer, modelViewProjection: ModelViewProjection, colorOpenGLProcessor: OpenGLProcessor, vertexOpenGLProcessor: OpenGLProcessor){
            super(requiresOpenGLVersion, shaderArray, compositeShaderUpdater, shaderInitializer, modelViewProjection, colorOpenGLProcessor, vertexOpenGLProcessor, NullOpenGLProcessorFactory.getInstance());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


}



