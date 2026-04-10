
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
        



import { LogUtil } from "../org/allbinary/logic/communication/log/LogUtil.js";

    
import { ValidationComponentInterface } from "../org/allbinary/logic/control/validate/ValidationComponentInterface.js";

    
import { StringUtil } from "../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../org/allbinary/string/CommonStrings.js";

    

export class ValidationOnlyTempUtil
            extends Object
         {
        

    private static readonly instance: ValidationOnlyTempUtil = new ValidationOnlyTempUtil();
        
        

    public static getInstance(): ValidationOnlyTempUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                @Throws(Exception::class)
            
    public view(validationComponentInterface: ValidationComponentInterface): string{
var validationComponentInterface = validationComponentInterface

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        


        try {
            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put("View Name: " +validationComponentInterface!.getTransformInfoInterface()!.getName(), this, "view()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "view()", e)

                                    }
                                



                            throw e
}

}


}
                
            

