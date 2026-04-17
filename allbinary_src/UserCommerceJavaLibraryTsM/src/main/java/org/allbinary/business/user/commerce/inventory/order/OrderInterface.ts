
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
        



import { BasketInterface } from "../../../../../../../org/allbinary/business/user/commerce/inventory/basket/BasketInterface.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface OrderInterface {
        

    public setShippingMethod(shippingType: string)

    public setPaymentMethod(value: string)

    public setSpecial(special: string)

    public setStoreName(value: string)

    public setUserComments(value: string)

    public setUserCancelComments(value: string)

    public setStoreComments(value: string)

    public setStoreCancelComments(value: string)

    public getBasket(): BasketInterface

    public getShippingMethod(): string

    public getPaymentMethod(): string

    public getSpecial(): string

    public getId(): string

    public getStoreName(): string

    public getUserComments(): string

    public getUserCancelComments(): string

    public getStoreComments(): string

    public getStoreCancelComments(): string

}
                
            

