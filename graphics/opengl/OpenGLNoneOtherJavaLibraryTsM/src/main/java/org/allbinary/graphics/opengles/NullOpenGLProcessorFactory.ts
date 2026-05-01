
        /* Generated Code Do Not Modify */
        



            import { Object } from "../../../../java/lang/Object.js";


        

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OpenGLProcessor } from "./OpenGLProcessor.js";

export class NullOpenGLProcessorFactory
            extends Object
         {
        

    private static readonly instance: OpenGLProcessor = new OpenGLProcessor();

    public static getInstance(): OpenGLProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullOpenGLProcessorFactory.instance;
    
}


}
                
            

