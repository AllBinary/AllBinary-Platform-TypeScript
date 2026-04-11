
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
        



import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { PreLogUtil } from "../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    

export class ForcedLogUtil
            extends Object
         {
        

    public static log(message: string, anyType: any = {}){
var message = message
var anyType = anyType

        try {
            


                            throw Error(message)

                //: 
} catch(e) 
            {
PreLogUtil.putOE(CommonStrings.getInstance()!.EXCEPTION, anyType, "log", e);
    
}

}


}
                
            

