
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


        
import { NullOpenGLProcessorFactory } from '../../../../../org/allbinary/graphics/opengles/NullOpenGLProcessorFactory.js';
      
import { OpenGLProcessor } from '../../../../../org/allbinary/graphics/opengles/OpenGLProcessor.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ShaderComposite } from './ShaderComposite.js';
import { Shader } from './Shader.js';
import { CompositeShaderUpdater } from './CompositeShaderUpdater.js';
import { ShaderInitializer } from './ShaderInitializer.js';
import { ModelViewProjection } from './ModelViewProjection.js';

export class PlatformShaderComposite extends ShaderComposite {
        
public constructor (requiresOpenGLVersion: string, shaderArray: Shader[], compositeShaderUpdater: CompositeShaderUpdater, shaderInitializer: ShaderInitializer, modelViewProjection: ModelViewProjection, colorOpenGLProcessor: OpenGLProcessor, vertexOpenGLProcessor: OpenGLProcessor){
            super(requiresOpenGLVersion, shaderArray, compositeShaderUpdater, shaderInitializer, modelViewProjection, colorOpenGLProcessor, vertexOpenGLProcessor, NullOpenGLProcessorFactory.getInstance());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


}
                
            

