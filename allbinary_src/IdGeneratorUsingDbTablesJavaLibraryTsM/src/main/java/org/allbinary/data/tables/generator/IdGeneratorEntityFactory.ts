
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2002 AllBinary 
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
        



import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class IdGeneratorEntityFactory
            extends Object
         {
        

    public static getInstance(): IdGeneratorEntityInterface{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return org.allbinary.data.tables.generator.IdGeneratorEntity() as IdGeneratorEntityInterface;
    
} catch(e: Exception)
            {

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        


    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonStrings!.EXCEPTION, "ServerLicenseRequestEntityFactory", commonStrings!.GET_INSTANCE, e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}

private constructor (){

            super();
            }


}
                
            

