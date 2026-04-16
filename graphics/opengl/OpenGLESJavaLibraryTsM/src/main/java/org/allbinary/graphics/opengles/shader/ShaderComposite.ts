
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

    
import { OpenGLProcessor } from "../../../../../org/allbinary/graphics/opengles/OpenGLProcessor.js";

    
import { NullOpenGLProcessorFactory } from "../../../../../org/allbinary/graphics/opengles/NullOpenGLProcessorFactory.js";

    

import { NullOpenGLTextureProcessor } from "./NullOpenGLTextureProcessor.js";

import { NullOpenGLTextureProcessor } from "./NullOpenGLTextureProcessor.js";

import { NullOpenGLTextureProcessor } from "./NullOpenGLTextureProcessor.js";

import { NullOpenGLTextureProcessor } from "./NullOpenGLTextureProcessor.js";

export class ShaderComposite
            extends Object
         {
        

    public readonly disableProgramShaderOpenGLProcessor: OpenGLProcessor

    public readonly requiresOpenGLVersion: string

    public readonly shaderArray: Shader[]

    public readonly shaderInitializer: ShaderInitializer

    public readonly compositeShaderUpdater: CompositeShaderUpdater

    public readonly modelViewProjection: ModelViewProjection

    public readonly colorOpenGLProcessor: OpenGLProcessor

    public readonly vertexOpenGLProcessor: OpenGLProcessor

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
        
        

    public programHandle: number= 0
public constructor (requiresOpenGLVersion: string, shaderArray: Shader[], compositeShaderUpdater: CompositeShaderUpdater, shaderInitializer: ShaderInitializer, modelViewProjection: ModelViewProjection, colorOpenGLProcessor: OpenGLProcessor, vertexOpenGLProcessor: OpenGLProcessor, disableProgramShaderOpenGLProcessor: OpenGLProcessor){

            super();
                //var requiresOpenGLVersion = requiresOpenGLVersion
    //var shaderArray = shaderArray
    //var compositeShaderUpdater = compositeShaderUpdater
    //var shaderInitializer = shaderInitializer
    //var modelViewProjection = modelViewProjection
    //var colorOpenGLProcessor = colorOpenGLProcessor
    //var vertexOpenGLProcessor = vertexOpenGLProcessor
    //var disableProgramShaderOpenGLProcessor = disableProgramShaderOpenGLProcessor
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
var gl = gl
this.programHandle= this.shaderInitializer!.init(gl, this.shaderArray, this.compositeShaderUpdater!.attributeArray);
    
}


}
                
            

