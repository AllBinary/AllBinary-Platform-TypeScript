
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
        



            import { Object } from "../../../../../../../../../java/lang/Object.js";


        
            import { Exception } from "../../../../../../../../../java/lang/Exception.js";
        
import { OrderHistory } from "../../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistory.js";

    
import { TenderType } from "../../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/TenderType.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PaymentTransactionInterface } from "./PaymentTransactionInterface.js";

export interface PaymentTransactionInterfaceFactoryInterface {
        

                //@Throws(Exception.constructor)
            
    getInstance(orderHistory: OrderHistory): PaymentTransactionInterface

                //@Throws(Exception.constructor)
            
    getSaleTransaction(tenderType: TenderType): PaymentTransactionInterface

                //@Throws(Exception.constructor)
            
    getCreditTransaction(tenderType: TenderType): PaymentTransactionInterface

                //@Throws(Exception.constructor)
            
    getAuthorizationTransaction(tenderType: TenderType): PaymentTransactionInterface

                //@Throws(Exception.constructor)
            
    getCaptureDelayedTransaction(tenderType: TenderType): PaymentTransactionInterface

                //@Throws(Exception.constructor)
            
    getVoidTransaction(tenderType: TenderType): PaymentTransactionInterface

                //@Throws(Exception.constructor)
            
    getInquiryTransaction(tenderType: TenderType): PaymentTransactionInterface

}
                
            

