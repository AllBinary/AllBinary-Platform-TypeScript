
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
        



//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { EGLConfig } from '../../../../../javax/microedition/khronos/egl/EGLConfig.js';
      const EGLConfig = globalThis.javax.microedition.khronos.egl.EGLConfig;

      
//not game specific package import { GL10 } from '../../../../../javax/microedition/khronos/opengles/GL10.js';
      const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;

      
//not game specific package import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ShaderUpdater } from './ShaderUpdater.js';
import { ShaderStrings } from './ShaderStrings.js';

export class CompositeShaderUpdater extends ShaderUpdater {
        

    private static readonly instanceC: CompositeShaderUpdater = new CompositeShaderUpdater(StringUtil.getInstance()!.getArrayInstance(), StringUtil.getInstance()!.getArrayInstance(), StringUtil.getInstance()!.getArrayInstance(), NullUtil.getInstance()!.NULL_INT_ARRAY);

    public static getInstance(): CompositeShaderUpdater{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CompositeShaderUpdater.instanceC;
    
}


    readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;

    readonly shaderStrings: ShaderStrings = ShaderStrings.getInstance()!;

    public readonly uniformBlockHandleArray: number[];

    public readonly uniformBlockArray: string[];

    public readonly uniformHandleArray: number[];

    public readonly uniformArray: string[];

    public readonly attributeHandleArray: number[];

    public readonly attributeArray: string[];

public constructor (uniformBlockArray: string[], uniformArray: string[], attributeArray: string[], attributeHandleArray: number[]){

            super();
        this.uniformBlockArray= uniformBlockArray;
    
this.uniformBlockHandleArray= new Array(this.uniformBlockArray!.length);
    
this.uniformArray= uniformArray;
    
this.uniformHandleArray= new Array(this.uniformArray!.length);
    
this.attributeArray= attributeArray;
    
this.attributeHandleArray= attributeHandleArray;
    
}


    public onSurfaceCreated(gl: GL10, eglConfig: EGLConfig, programHandle: number){
}


    public onSurfaceDestroyed(gl: GL10){
}


}



