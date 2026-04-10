
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

    

interface PaymentTransactionInterfaceFactoryInterface {
        

                @Throws(Exception::class)
            
    public getInstance(orderHistory: OrderHistory): PaymentTransactionInterface

                @Throws(Exception::class)
            
    public getSaleTransaction(tenderType: TenderType): PaymentTransactionInterface

                @Throws(Exception::class)
            
    public getCreditTransaction(tenderType: TenderType): PaymentTransactionInterface

                @Throws(Exception::class)
            
    public getAuthorizationTransaction(tenderType: TenderType): PaymentTransactionInterface

                @Throws(Exception::class)
            
    public getCaptureDelayedTransaction(tenderType: TenderType): PaymentTransactionInterface

                @Throws(Exception::class)
            
    public getVoidTransaction(tenderType: TenderType): PaymentTransactionInterface

                @Throws(Exception::class)
            
    public getInquiryTransaction(tenderType: TenderType): PaymentTransactionInterface

}
                
            

