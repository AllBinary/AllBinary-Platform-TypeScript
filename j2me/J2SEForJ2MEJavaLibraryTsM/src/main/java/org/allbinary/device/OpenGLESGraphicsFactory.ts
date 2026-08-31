
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../java/lang/Object.js';
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OpenGLESNullGraphicsFactory } from './OpenGLESNullGraphicsFactory.js';
//not GWT import const  = globalThis.org.allbinary.device.OpenGLESNullGraphicsFactory;

                import { OpenGLESGraphics } from './OpenGLESGraphics.js';
//not GWT import const  = globalThis.org.allbinary.device.OpenGLESGraphics;

                
export class OpenGLESGraphicsFactory
            extends Object
         {
        

    public getOpenGLESGraphicsInstance(): OpenGLESGraphics{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return OpenGLESNullGraphicsFactory.getInstance();;
    
}


}



