
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
        



import { PaymentTransactionInterface } from "../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/transaction/PaymentTransactionInterface.js";

    
import { BasicDataTableInterface } from "../../../../../../../../../org/allbinary/data/tables/BasicDataTableInterface.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface TransactionEntityInterface extends BasicDataTableInterface {
        

    public remove(userName: string, orderNumber: string)

    public add(userName: string, orderNumber: string, paymentTransactionInterface: PaymentTransactionInterface)

}
                
            

