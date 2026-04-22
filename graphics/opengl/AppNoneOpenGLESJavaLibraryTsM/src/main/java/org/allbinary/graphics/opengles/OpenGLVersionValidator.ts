
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
        



import { ShaderComposite } from "../../../../org/allbinary/graphics/opengles/shader/ShaderComposite.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OpenGLVersionValidator
            extends Object
         {
        

    private static readonly instance: OpenGLVersionValidator = new OpenGLVersionValidator();
        
        

    public static getInstance(): OpenGLVersionValidator{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public isGL31OrHigher(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isAvailable(glVersionRequired: string): boolean{
    //var glVersionRequired = glVersionRequired



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public setShaderComposite(shaderComposite: ShaderComposite, anyType: any = {}){
    //var shaderComposite = shaderComposite
    //var anyType = anyType
}


    public EGL_CONTEXT_CLIENT_VERSION_VALUE: number =  -1;
        
        

}
                
            

