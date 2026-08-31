
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
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { GL10 } from '../../../../../javax/microedition/khronos/opengles/GL10.js';
      //not GWT import const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;

      
import { OpenGLProcessor } from '../../../../../org/allbinary/graphics/opengles/OpenGLProcessor.js';
      //not GWT import const OpenGLProcessor = globalThis.org.allbinary.graphics.opengles.OpenGLProcessor;

      
import { NullOpenGLProcessorFactory } from '../../../../../org/allbinary/graphics/opengles/NullOpenGLProcessorFactory.js';
      //not GWT import const NullOpenGLProcessorFactory = globalThis.org.allbinary.graphics.opengles.NullOpenGLProcessorFactory;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Shader } from './Shader.js';
//not GWT import const Shader = globalThis.org.allbinary.graphics.opengles.shader.Shader;

                import { ShaderInitializer } from './ShaderInitializer.js';
//not GWT import const ShaderInitializer = globalThis.org.allbinary.graphics.opengles.shader.ShaderInitializer;

                import { CompositeShaderUpdater } from './CompositeShaderUpdater.js';
//not GWT import const CompositeShaderUpdater = globalThis.org.allbinary.graphics.opengles.shader.CompositeShaderUpdater;

                import { ModelViewProjection } from './ModelViewProjection.js';
//not GWT import const ModelViewProjection = globalThis.org.allbinary.graphics.opengles.shader.ModelViewProjection;

                import { NullOpenGLTextureProcessor } from './NullOpenGLTextureProcessor.js';
//not GWT import const NullOpenGLTextureProcessor = globalThis.org.allbinary.graphics.opengles.shader.NullOpenGLTextureProcessor;

                import { OpenGLObject3dProcessor } from './OpenGLObject3dProcessor.js';
//not GWT import const OpenGLObject3dProcessor = globalThis.org.allbinary.graphics.opengles.shader.OpenGLObject3dProcessor;

                
export class ShaderComposite
            extends Object
         {
        

    public readonly disableProgramShaderOpenGLProcessor: OpenGLProcessor;

    public readonly requiresOpenGLVersion: string;

    public readonly shaderArray: Shader[];

    public readonly shaderInitializer: ShaderInitializer;

    public readonly compositeShaderUpdater: CompositeShaderUpdater;

    public readonly modelViewProjection: ModelViewProjection;

    public readonly colorOpenGLProcessor: OpenGLProcessor;

    public readonly vertexOpenGLProcessor: OpenGLProcessor;

    public useProgramShaderOpenGLProcessor: OpenGLProcessor = 
                null
            ;

    public shaderMatrixOpenGLProcessor: OpenGLProcessor = NullOpenGLProcessorFactory.getInstance()!;

    public colorEnableVertexAttribArrayOpenGLProcessor: OpenGLProcessor = NullOpenGLProcessorFactory.getInstance()!;

    public normalEnableVertexAttribArrayOpenGLProcessor: OpenGLProcessor = NullOpenGLProcessorFactory.getInstance()!;

    public vertexEnableVertexAttribArrayOpenGLProcessor: OpenGLProcessor = NullOpenGLProcessorFactory.getInstance()!;

    public textureEnableVertexAttribArrayOpenGLProcessor: OpenGLProcessor = NullOpenGLProcessorFactory.getInstance()!;

    public colorDisableVertexAttribArrayOpenGLProcessor: OpenGLProcessor = NullOpenGLProcessorFactory.getInstance()!;

    public normalDisableVertexAttribArrayOpenGLProcessor: OpenGLProcessor = NullOpenGLProcessorFactory.getInstance()!;

    public vertexDisableVertexAttribArrayOpenGLProcessor: OpenGLProcessor = NullOpenGLProcessorFactory.getInstance()!;

    public textureDisableVertexAttribArrayOpenGLProcessor: OpenGLProcessor = NullOpenGLProcessorFactory.getInstance()!;

    public uniformLightPositionOpenGLProcessor: OpenGLObject3dProcessor = NullOpenGLTextureProcessor.getInstance()!;

    public uniformLightColorOpenGLProcessor: OpenGLObject3dProcessor = NullOpenGLTextureProcessor.getInstance()!;

    public uniformCameraPositionOpenGLProcessor: OpenGLObject3dProcessor = NullOpenGLTextureProcessor.getInstance()!;

    public uniformTextureUnitOpenGLProcessor: OpenGLObject3dProcessor = NullOpenGLTextureProcessor.getInstance()!;

    public programHandle: number= 0;

public constructor (requiresOpenGLVersion: string, shaderArray: Shader[], compositeShaderUpdater: CompositeShaderUpdater, shaderInitializer: ShaderInitializer, modelViewProjection: ModelViewProjection, colorOpenGLProcessor: OpenGLProcessor, vertexOpenGLProcessor: OpenGLProcessor, disableProgramShaderOpenGLProcessor: OpenGLProcessor){

            super();
        this.requiresOpenGLVersion= requiresOpenGLVersion;
    
this.shaderArray= shaderArray;
    
this.shaderInitializer= shaderInitializer;
    
this.compositeShaderUpdater= compositeShaderUpdater;
    
this.modelViewProjection= modelViewProjection;
    
this.colorOpenGLProcessor= colorOpenGLProcessor;
    
this.vertexOpenGLProcessor= vertexOpenGLProcessor;
    
this.disableProgramShaderOpenGLProcessor= disableProgramShaderOpenGLProcessor;
    
}


    public init(gl: GL10){
this.programHandle= this.shaderInitializer!.init(gl, this.shaderArray, this.compositeShaderUpdater!.attributeArray);
    
}


}



