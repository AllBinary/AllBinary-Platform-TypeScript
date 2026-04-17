
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
        



import { OrderHistory } from "../../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistory.js";

    
import { TenderType } from "../../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/TenderType.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PaymentTransactionInterface } from "./PaymentTransactionInterface.js";

export interface PaymentTransactionInterfaceFactoryInterface {
        

                //@Throws(Error::class)
            
    public getInstance(orderHistory: OrderHistory): PaymentTransactionInterface

                //@Throws(Error::class)
            
    public getSaleTransaction(tenderType: TenderType): PaymentTransactionInterface

                //@Throws(Error::class)
            
    public getCreditTransaction(tenderType: TenderType): PaymentTransactionInterface

                //@Throws(Error::class)
            
    public getAuthorizationTransaction(tenderType: TenderType): PaymentTransactionInterface

                //@Throws(Error::class)
            
    public getCaptureDelayedTransaction(tenderType: TenderType): PaymentTransactionInterface

                //@Throws(Error::class)
            
    public getVoidTransaction(tenderType: TenderType): PaymentTransactionInterface

                //@Throws(Error::class)
            
    public getInquiryTransaction(tenderType: TenderType): PaymentTransactionInterface

}
                
            

