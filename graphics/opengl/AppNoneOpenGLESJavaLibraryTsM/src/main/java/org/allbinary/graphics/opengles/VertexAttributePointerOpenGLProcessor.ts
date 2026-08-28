
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
        



            import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
        
//not game specific package import { GL10 } from '../../../../javax/microedition/khronos/opengles/GL10.js';
      const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;

      
//not game specific package import { ObjectThreedOpenGLProcessor } from '../../../../org/allbinary/graphics/threed/min3d/renderer/processor/ObjectThreedOpenGLProcessor.js';
      const ObjectThreedOpenGLProcessor = globalThis.org.allbinary.graphics.threed.min3d.renderer.processor.ObjectThreedOpenGLProcessor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class VertexAttributePointerOpenGLProcessor extends ObjectThreedOpenGLProcessor {
        

    private static readonly instance: VertexAttributePointerOpenGLProcessor = new VertexAttributePointerOpenGLProcessor();

    public static getInstance(): VertexAttributePointerOpenGLProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return VertexAttributePointerOpenGLProcessor.instance;
    
}


public constructor (){

            super();
        }


    public process(gl: GL10, anyType: any = {}){



                            throw new RuntimeException();
                    
}


}



