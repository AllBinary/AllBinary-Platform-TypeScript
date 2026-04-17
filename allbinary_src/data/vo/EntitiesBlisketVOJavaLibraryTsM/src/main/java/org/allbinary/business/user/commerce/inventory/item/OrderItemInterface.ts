
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
        



import { StreetAddress } from "../../../../../../../org/allbinary/business/user/address/StreetAddress.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ItemInterface } from "./ItemInterface.js";

export interface OrderItemInterface extends ItemInterface {
        

    setGroup(value: string)

    setTax(value: string)

    setShippingType(value: string)

    setShippingCost(value: string)

    setShippingAddress(value: StreetAddress)

    setSpecial(value: string)

    getGroup(): string

    getTax(): string

    getShippingType(): string

    getShippingCost(): string

    getShippingAddress(): StreetAddress

    getSpecial(): string

}
                
            

