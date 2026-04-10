
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
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
        




export class AuthorizationTypeFactory
            extends Object
         {
        

    private static readonly instance: AuthorizationTypeFactory = new AuthorizationTypeFactory();
        
        

    public static getInstance(): AuthorizationTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly NONE: AuthorizationType = new AuthorizationType("None");
        
        

    public readonly VOICE: AuthorizationType = new AuthorizationType("Voice");
        
        

    public readonly RETINAL: AuthorizationType = new AuthorizationType("Retinal");
        
        

    public readonly IMAGE: AuthorizationType = new AuthorizationType("Image");
        
        

    public readonly DNA: AuthorizationType = new AuthorizationType("DNA");
        
        

    public readonly PRINT: AuthorizationType = new AuthorizationType("Print");
        
        

    public readonly CHIP: AuthorizationType = new AuthorizationType("Chip");
        
        

}
                
            

