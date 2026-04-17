
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
        



import { StoreFrontInterface } from "../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { StreetAddress } from "../../../../../../../../org/allbinary/business/user/address/StreetAddress.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface TaxModuleInterface {
        

                //@Throws(Error::class)
            
    public getTaxRate(streetAddress: StreetAddress, storeFrontInterface: StoreFrontInterface): Float

                //@Throws(Error::class)
            
    public isValid(streetAddress: StreetAddress, storeFrontInterface: StoreFrontInterface): Boolean

}
                
            

