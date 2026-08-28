
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
        



//not game specific package import { TransactionResultInterface } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/transaction/TransactionResultInterface.js';
      const TransactionResultInterface = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.transaction.TransactionResultInterface;

      
//not game specific package import { BasicDataTableInterface } from '../../../../../../../../../org/allbinary/data/tables/BasicDataTableInterface.js';
      const BasicDataTableInterface = globalThis.org.allbinary.data.tables.BasicDataTableInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface TransactionResultEntityInterface extends BasicDataTableInterface {
        

    getTransactionResultInterface(orderNumber: string): TransactionResultInterface

    remove(userName: string, orderNumber: string)

    add(userName: string, orderNumber: string, resultInterface: TransactionResultInterface)

}



