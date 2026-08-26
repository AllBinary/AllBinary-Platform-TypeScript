
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
        



//not game specific package import { Vector } from '../../../../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { PaymentGatewayInterface } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayInterface.js';
      const PaymentGatewayInterface = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.PaymentGatewayInterface;

      
//not game specific package import { BasicPaymentType } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentType.js';
      const BasicPaymentType = globalThis.org.allbinary.business.user.commerce.money.payment.types.BasicPaymentType;

      
//not game specific package import { BasicDataTableInterface } from '../../../../../../../../../org/allbinary/data/tables/BasicDataTableInterface.js';
      const BasicDataTableInterface = globalThis.org.allbinary.data.tables.BasicDataTableInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface PaymentGatewayEntityInterface extends BasicDataTableInterface {
        

    getPaymentGatewayInterface(storeName: string, paymentType: BasicPaymentType): PaymentGatewayInterface

    findPaymentTypeVectorByStore(storeName: string): Vector

    remove(storeName: string, paymentType: BasicPaymentType)

    add(paymentGatewayInterface: PaymentGatewayInterface)

    update(paymentGatewayInterface: PaymentGatewayInterface)

}
                
            

