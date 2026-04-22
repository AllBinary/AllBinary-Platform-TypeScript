
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
        




















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BaseTouchInput } from "./BaseTouchInput.js";

export class NoButtonsTouchInputFactory
            extends Object
         {
        

    private static readonly instance: BaseTouchInput = new BaseTouchInput();
        
        

    public static getInstance(): BaseTouchInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


}
                
            

