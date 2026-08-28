
        /* Generated Code Do Not Modify */
        



//not game specific package import { GL10 } from '../../../../javax/microedition/khronos/opengles/GL10.js';
      const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;

      
//not game specific package import { ObjectThreedOpenGLProcessor } from '../../../../org/allbinary/graphics/threed/min3d/renderer/processor/ObjectThreedOpenGLProcessor.js';
      const ObjectThreedOpenGLProcessor = globalThis.org.allbinary.graphics.threed.min3d.renderer.processor.ObjectThreedOpenGLProcessor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class EnableFacesShaderOpenGLProcessor extends ObjectThreedOpenGLProcessor {
        

    private static readonly instance: EnableFacesShaderOpenGLProcessor = new EnableFacesShaderOpenGLProcessor();

    public static getInstance(): EnableFacesShaderOpenGLProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return EnableFacesShaderOpenGLProcessor.instance;
    
}


public constructor (){

            super();
        }


    public process(gl: GL10, anyType: any = {}){
}


}



