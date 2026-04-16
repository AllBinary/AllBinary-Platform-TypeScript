
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
        



import { TransactionResultInterface } from "../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/transaction/TransactionResultInterface.js";

    
import { BasicDataTableInterface } from "../../../../../../../../../org/allbinary/data/tables/BasicDataTableInterface.js";

    

export interface TransactionResultEntityInterface extends BasicDataTableInterface {
        

    public getTransactionResultInterface(orderNumber: string): TransactionResultInterface

    public remove(userName: string, orderNumber: string)

    public add(userName: string, orderNumber: string, resultInterface: TransactionResultInterface)

}
                
            

