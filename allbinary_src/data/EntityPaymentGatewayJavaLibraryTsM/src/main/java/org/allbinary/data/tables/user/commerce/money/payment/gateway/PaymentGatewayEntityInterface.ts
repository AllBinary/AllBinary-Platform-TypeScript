
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
        



import { Vector } from '../../../../../../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { PaymentGatewayInterface } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayInterface.js';
      //not GWT import const PaymentGatewayInterface = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.PaymentGatewayInterface;

      
import { BasicPaymentType } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentType.js';
      //not GWT import const BasicPaymentType = globalThis.org.allbinary.business.user.commerce.money.payment.types.BasicPaymentType;

      
import { BasicDataTableInterface } from '../../../../../../../../../org/allbinary/data/tables/BasicDataTableInterface.js';
      //not GWT import const BasicDataTableInterface = globalThis.org.allbinary.data.tables.BasicDataTableInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface PaymentGatewayEntityInterface extends BasicDataTableInterface {
        

    getPaymentGatewayInterface(storeName: string, paymentType: BasicPaymentType): PaymentGatewayInterface

    findPaymentTypeVectorByStore(storeName: string): Vector

    remove(storeName: string, paymentType: BasicPaymentType)

    add(paymentGatewayInterface: PaymentGatewayInterface)

    update(paymentGatewayInterface: PaymentGatewayInterface)

}



