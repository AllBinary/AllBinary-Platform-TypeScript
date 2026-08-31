
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { NullOpenGLProcessorFactory } from './NullOpenGLProcessorFactory.js';
//not GWT import const NullOpenGLProcessorFactory = globalThis.org.allbinary.graphics.opengles.NullOpenGLProcessorFactory;

                import { OpenGLProcessor } from './OpenGLProcessor.js';
//not GWT import const OpenGLProcessor = globalThis.org.allbinary.graphics.opengles.OpenGLProcessor;

                
export class OrthogonalLightingOpenGLProcessorFactory
            extends Object
         {
        

    private static readonly instance: OrthogonalLightingOpenGLProcessorFactory = new OrthogonalLightingOpenGLProcessorFactory();

    public static getInstance(): OrthogonalLightingOpenGLProcessorFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return OrthogonalLightingOpenGLProcessorFactory.instance;
    
}


    public sceneLightingOrthogonalModeOpenGLProcessor: OpenGLProcessor = NullOpenGLProcessorFactory.getInstance()!;

    public sceneLightsOrthogonalModeOpenGLProcessor: OpenGLProcessor = NullOpenGLProcessorFactory.getInstance()!;

}



