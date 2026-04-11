
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        




export class OpenGLESGraphicsCompositeFactory
            extends Object
         {
        

    private static readonly instance: OpenGLESGraphicsCompositeFactory = new OpenGLESGraphicsCompositeFactory();
        
        

    public static getInstance(): OpenGLESGraphicsCompositeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private openGLESGraphicsFactory: OpenGLESGraphicsFactory = new OpenGLESGraphicsFactory();
        
        

    public set(openGLESGraphicsFactory: OpenGLESGraphicsFactory){
var openGLESGraphicsFactory = openGLESGraphicsFactory
this.openGLESGraphicsFactory= openGLESGraphicsFactory;
    
}


    public get(): OpenGLESGraphicsFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.openGLESGraphicsFactory;
    
}


}
                
            

