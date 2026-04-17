
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
        



import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonPhoneStrings } from "../../../../../org/allbinary/string/CommonPhoneStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { LongData } from "./LongData.js";

export class LongUtil
            extends Object
         {
        

    public static fillIn(end: string): string{
    //var end = end

    var frameStringBuffer: StringMaker = new StringMaker();
        
        
;
    

                        if(frameStringBuffer!.length() < LongData.MAX_LONG_LENGTH)
                        
                                    {
                                    
    var commonPhoneStrings: CommonPhoneStrings = CommonPhoneStrings.getInstance()!;
        
        
;
    

    var size: number = LongData.MAX_LONG_LENGTH -frameStringBuffer!.length();
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
frameStringBuffer!.append(commonPhoneStrings!.ZERO);
    
}


                                    }
                                
frameStringBuffer!.append(end);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return frameStringBuffer!.toString();

                        ;
    
}

private constructor (){

            super();
            }


}
                
            

