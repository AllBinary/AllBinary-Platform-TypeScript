
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
        



import { OrderHistory } from "../../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistory.js";

    
import { PaymentType } from "../../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/PaymentType.js";

    
import { PaymentTypeUtil } from "../../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/PaymentTypeUtil.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../../../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PaymentTransactionInterface } from "./PaymentTransactionInterface.js";

export class PaymentTransactionInterfaceFactory
            extends Object
         {
        

    private static readonly instance: PaymentTransactionInterfaceFactory = new PaymentTransactionInterfaceFactory();
        
        

    public static getInstance(): PaymentTransactionInterfaceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public getInstance(orderReview: OrderHistory): PaymentTransactionInterface{
var orderReview = orderReview

        try {
            
    var gatewayName: string = orderReview!.getPaymentMethod()!;
        
        
;
    

                        if(gatewayName != 
                                    null
                                )
                        
                                    {
                                    
    var paymentType: PaymentType = PaymentTypeUtil.getInstance()!.get(gatewayName)!;
        
        
;
    

    var paymentTransactionInterfaceFactoryInterface: PaymentTransactionInterfaceFactoryInterface = paymentType!.getPaymentTransactionInterfaceFactoryInterface()!;
        
        
;
    

    var paymentTransactionInterface: PaymentTransactionInterface = paymentTransactionInterfaceFactoryInterface!.getInstance(orderReview)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentTransactionInterface;
    

                                    }
                                



                            throw new Error("Failed to create PaymentTransactionInterface: " +"GatewayName is: " +gatewayName)

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENTERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put("Failed to generate test data", this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e
}

}


}
                
            

