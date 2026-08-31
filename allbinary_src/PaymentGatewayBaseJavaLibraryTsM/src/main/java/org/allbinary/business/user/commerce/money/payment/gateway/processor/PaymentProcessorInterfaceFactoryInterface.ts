
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

        


            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
import { PaymentTransactionInterface } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/transaction/PaymentTransactionInterface.js';
      //not GWT import const PaymentTransactionInterface = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.transaction.PaymentTransactionInterface;

      
import { TransformInfoInterface } from '../../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PaymentProcessorInterface } from './PaymentProcessorInterface.js';
//not GWT import const  = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.processor.PaymentProcessorInterface;

                
export interface PaymentProcessorInterfaceFactoryInterface {
        

                //@Throws(Exception.constructor)
            
    getInstance(transformInfoInterface: TransformInfoInterface, paymentTransactionInterface: PaymentTransactionInterface): PaymentProcessorInterface

}



