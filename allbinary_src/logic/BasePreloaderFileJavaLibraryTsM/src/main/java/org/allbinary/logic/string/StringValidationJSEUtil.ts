
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
        
import { Character } from "./Character.js";

export class StringValidationJSEUtil
            extends Object
         {
        

    public static isBlank(string: string): boolean{
var string = string

    var len: number = string.length!;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < len; i++)
        {

    var c: string = string[i]!;
        
        
;
    

                        if(Character.isWhitespace(c) == false)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}

private constructor (){

            super();
        }


}
                
            

