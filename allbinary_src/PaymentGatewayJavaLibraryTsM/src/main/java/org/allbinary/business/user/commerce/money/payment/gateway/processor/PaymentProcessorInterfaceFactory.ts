
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

    
import { PaymentTransactionInterfaceRequestFactory } from "../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/transaction/PaymentTransactionInterfaceRequestFactory.js";

    
import { PaymentType } from "../../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/PaymentType.js";

    
import { PaymentTypeUtil } from "../../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/PaymentTypeUtil.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringValidationUtil } from "../../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { TransformInfoInterface } from "../../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { CommonStrings } from "../../../../../../../../../org/allbinary/string/CommonStrings.js";

    

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

export class PaymentProcessorInterfaceFactory
            extends Object
         {
        

    private static readonly instance: PaymentProcessorInterfaceFactory = new PaymentProcessorInterfaceFactory();
        
        

    public static getInstance(): PaymentProcessorInterfaceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public getInstance(transformInfoInterface: TransformInfoInterface): PaymentProcessorInterface{
var transformInfoInterface = transformInfoInterface

        try {
            
    var paymentTransactionInterface: PaymentTransactionInterface = PaymentTransactionInterfaceRequestFactory.getInstance()!.getInstance(transformInfoInterface)!;
        
        
;
    

    var gatewayName: string = paymentTransactionInterface!.getOrderHistory()!.getPaymentMethod()!;
        
        
;
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(gatewayName);

                        )
                        
                                    {
                                    
    var paymentType: PaymentType = PaymentTypeUtil.getInstance()!.get(gatewayName)!;
        
        
;
    

    var paymentProcessorInterfaceFactoryInterface: PaymentProcessorInterfaceFactoryInterface = paymentType!.getPaymentProcessorInterfaceFactoryInterface()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentProcessorInterfaceFactoryInterface!.getInstance(transformInfoInterface, paymentTransactionInterface);

                         as PaymentProcessorInterface;
    

                                    }
                                



                            throw new Error("Error Getting PaymentProcessorInterface")

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENTERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e
}

}


}
                
            

