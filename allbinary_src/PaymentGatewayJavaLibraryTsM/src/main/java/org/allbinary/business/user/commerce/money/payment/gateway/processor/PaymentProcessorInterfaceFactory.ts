
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
        



            import { Object } from '../../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
import { PaymentTransactionInterface } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/transaction/PaymentTransactionInterface.js';
      //not GWT import const PaymentTransactionInterface = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.transaction.PaymentTransactionInterface;

      
import { PaymentTransactionInterfaceRequestFactory } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/transaction/PaymentTransactionInterfaceRequestFactory.js';
      //not GWT import const PaymentTransactionInterfaceRequestFactory = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.transaction.PaymentTransactionInterfaceRequestFactory;

      
import { PaymentType } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/PaymentType.js';
      //not GWT import const PaymentType = globalThis.org.allbinary.business.user.commerce.money.payment.types.PaymentType;

      
import { PaymentTypeUtil } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/PaymentTypeUtil.js';
      //not GWT import const PaymentTypeUtil = globalThis.org.allbinary.business.user.commerce.money.payment.types.PaymentTypeUtil;

      
//not plain js import { LogUtil } from '../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { StringValidationUtil } from '../../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      //not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
import { TransformInfoInterface } from '../../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not plain js import { CommonStrings } from '../../../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PaymentProcessorInterfaceFactoryInterface } from './PaymentProcessorInterfaceFactoryInterface.js';
import { PaymentProcessorInterface } from './PaymentProcessorInterface.js';

export class PaymentProcessorInterfaceFactory
            extends Object
         {
        

    private static readonly instance: PaymentProcessorInterfaceFactory = new PaymentProcessorInterfaceFactory();

    public static getInstance(): PaymentProcessorInterfaceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PaymentProcessorInterfaceFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public getInstance(transformInfoInterface: TransformInfoInterface): PaymentProcessorInterface{

        try {
            
    var paymentTransactionInterface: PaymentTransactionInterface = PaymentTransactionInterfaceRequestFactory.getInstance()!.getInstance(transformInfoInterface)!;;
    

    var gatewayName: string = paymentTransactionInterface!.getOrderHistory()!.getPaymentMethod()!;;
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(gatewayName))
                        
                                    {
                                    
    var paymentType: PaymentType = PaymentTypeUtil.getInstance()!.get(gatewayName)!;;
    

    var paymentProcessorInterfaceFactoryInterface: PaymentProcessorInterfaceFactoryInterface = paymentType!.getPaymentProcessorInterfaceFactoryInterface()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentProcessorInterfaceFactoryInterface!.getInstance(transformInfoInterface, paymentTransactionInterface) as PaymentProcessorInterface;
    

                                    }
                                



                            throw new Exception("Error Getting PaymentProcessorInterface");
                    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENTERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    
}

}


}



