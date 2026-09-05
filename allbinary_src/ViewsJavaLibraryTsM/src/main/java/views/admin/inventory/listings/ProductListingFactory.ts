
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
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { SearchRequest } from '../../../../org/allbinary/logic/control/search/SearchRequest.js';
//not GWT import const SearchRequest = globalThis.org.allbinary.logic.control.search.SearchRequest;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProductListing } from './ProductListing.js';
//not GWT import - same folder const ProductListing = globalThis.views.admin.inventory.listings.ProductListing;

                import { ProductListingInterface } from './ProductListingInterface.js';
//not GWT import - same folder const ProductListingInterface = globalThis.views.admin.inventory.listings.ProductListingInterface;

                
export class ProductListingFactory
            extends Object
         {
        

    public static getInstance(searchRequest: SearchRequest): ProductListingInterface{

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new views.admin.inventory.listings.ProductListing(searchRequest) as ProductListingInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.FACTORYERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.put(commonStrings!.EXCEPTION, "ProductListingFactory", commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


private constructor (){

            super();
        }


}



