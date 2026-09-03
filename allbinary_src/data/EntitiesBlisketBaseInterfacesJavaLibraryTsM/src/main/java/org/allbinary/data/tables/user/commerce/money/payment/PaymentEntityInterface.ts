
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

        


            import { Integer } from '../../../../../../../../java/lang/Integer.js';
        
//not plain js import { BasicArrayList } from '../../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { PaymentInterface } from '../../../../../../../../org/allbinary/business/user/commerce/money/payment/PaymentInterface.js';
      //not GWT import const PaymentInterface = globalThis.org.allbinary.business.user.commerce.money.payment.PaymentInterface;

      
import { BasicDataTableInterface } from '../../../../../../../../org/allbinary/data/tables/BasicDataTableInterface.js';
      //not GWT import const BasicDataTableInterface = globalThis.org.allbinary.data.tables.BasicDataTableInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface PaymentEntityInterface extends BasicDataTableInterface {
        

    getLastId(userName: string): string

    setDefault(userName: string, index: Integer)

    getDefault(userName: string): PaymentInterface

    get(userName: string): BasicArrayList

    add(userName: string, paymentInterface: PaymentInterface)

    remove(userName: string, index: Integer)

    insert(values: BasicArrayList)

}



