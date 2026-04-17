
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
        



import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { SearchRequest } from "../../../../org/allbinary/logic/control/search/SearchRequest.js";

    
import { LicensingException } from "../../../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { InventorySearch } from "../../../../views/generic/inventory/InventorySearch.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { InventoryViewSearchInterface } from "./InventoryViewSearchInterface.js";

export class InventoryViewFactory
            extends Object
         {
        

                //@Throws(LicensingException::class)
            
    public static getInstance(searchRequest: SearchRequest): InventoryViewSearchInterface{
var searchRequest = searchRequest

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new InventorySearch(searchRequest);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, "InventoryViewFactory", "getInstance(SearchRequest)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}

private constructor (){

            super();
            }


}
                
            

