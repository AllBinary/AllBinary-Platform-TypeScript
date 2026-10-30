
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

        


import { StreetAddress } from '../../../../../../../org/allbinary/business/user/address/StreetAddress.js';
//not GWT import const StreetAddress

import { Money } from '../../../../../../../org/allbinary/business/user/commerce/money/Money.js';
//not GWT import const Money

import { Payment } from '../../../../../../../org/allbinary/business/user/commerce/money/payment/Payment.js';
//not GWT import const Payment

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface OrderHistoryInterface {
        

    setUserName(value: string): void;

    setDefaultShippingAddress(shippingAddress: StreetAddress): void;

    setBillingAddress(billingAddress: StreetAddress): void;

    setPaymentInfo(payment: Payment): void;

    setShipDate(value: string): void;

    setOrderDate(value: string): void;

    setTransDate(value: string): void;

    setCancelDate(value: string): void;

    setStatus(value: string): void;

    setSubTotal(value: Money): void;

    setShippingCost(value: Money): void;

    setTaxes(value: Money): void;

    setTotal(value: Money): void;

    getUserName(): string;

    getShippingAddress(): StreetAddress;

    getBillingAddress(): StreetAddress;

    getPaymentInfo(): Payment;

    getShipDate(): string;

    getOrderDate(): string;

    getTransDate(): string;

    getCancelDate(): string;

    getStatus(): string;

    getSubTotal(): Money;

    getShippingCost(): Money;

    getTaxes(): Money;

    getTotal(): Money;

    getPaymentMethod(): string;

}

