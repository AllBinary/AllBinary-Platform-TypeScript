
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

    
import { Money } from "../../../../../../../org/allbinary/business/user/commerce/money/Money.js";

    
import { Payment } from "../../../../../../../org/allbinary/business/user/commerce/money/payment/Payment.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface OrderHistoryInterface {
        

    setUserName(value: string)

    setDefaultShippingAddress(shippingAddress: StreetAddress)

    setBillingAddress(billingAddress: StreetAddress)

    setPaymentInfo(payment: Payment)

    setShipDate(value: string)

    setOrderDate(value: string)

    setTransDate(value: string)

    setCancelDate(value: string)

    setStatus(value: string)

    setSubTotal(value: Money)

    setShippingCost(value: Money)

    setTaxes(value: Money)

    setTotal(value: Money)

    getUserName(): string

    getShippingAddress(): StreetAddress

    getBillingAddress(): StreetAddress

    getPaymentInfo(): Payment

    getShipDate(): string

    getOrderDate(): string

    getTransDate(): string

    getCancelDate(): string

    getStatus(): string

    getSubTotal(): Money

    getShippingCost(): Money

    getTaxes(): Money

    getTotal(): Money

    getPaymentMethod(): string

}
                
            

