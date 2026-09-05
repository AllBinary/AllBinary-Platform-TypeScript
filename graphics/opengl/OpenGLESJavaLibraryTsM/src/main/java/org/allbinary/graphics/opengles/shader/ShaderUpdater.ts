
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

      
import { EGLConfig } from '../../../../../javax/microedition/khronos/egl/EGLConfig.js';
//not GWT import const EGLConfig = globalThis.javax.microedition.khronos.egl.EGLConfig;

      
import { GL10 } from '../../../../../javax/microedition/khronos/opengles/GL10.js';
//not GWT import const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;

      
import { RendererStrings } from '../../../../../org/allbinary/graphics/opengles/renderer/RendererStrings.js';
//not GWT import const RendererStrings = globalThis.org.allbinary.graphics.opengles.renderer.RendererStrings;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
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



