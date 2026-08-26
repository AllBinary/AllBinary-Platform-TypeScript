
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { SearchRequest } from '../../../../org/allbinary/logic/control/search/SearchRequest.js';
      const SearchRequest = globalThis.org.allbinary.logic.control.search.SearchRequest;

      
//not game specific package import { LicensingException } from '../../../../org/allbinary/logic/system/security/licensing/LicensingException.js';
      const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { InventorySearch } from '../../../../views/generic/inventory/InventorySearch.js';
      const InventorySearch = globalThis.views.generic.inventory.InventorySearch;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InventoryViewSearchInterface } from './InventoryViewSearchInterface.js';

export class InventoryViewFactory
            extends Object
         {
        

                //@Throws(LicensingException.constructor)
            
    public static getInstance(searchRequest: SearchRequest): InventoryViewSearchInterface{

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new InventorySearch(searchRequest);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
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
                
            

