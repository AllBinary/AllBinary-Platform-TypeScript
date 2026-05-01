
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
        



            import { Object } from "../../../../../../../java/lang/Object.js";


        
import { BasketInterface } from "../../../../../../../org/allbinary/business/user/commerce/inventory/basket/BasketInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface OrderInterface {
        

    setShippingMethod(shippingType: string)

    setPaymentMethod(value: string)

    setSpecial(special: string)

    setStoreName(value: string)

    setUserComments(value: string)

    setUserCancelComments(value: string)

    setStoreComments(value: string)

    setStoreCancelComments(value: string)

    getBasket(): BasketInterface

    getShippingMethod(): string

    getPaymentMethod(): string

    getSpecial(): string

    getId(): string

    getStoreName(): string

    getUserComments(): string

    getUserCancelComments(): string

    getStoreComments(): string

    getStoreCancelComments(): string

}
                
            

