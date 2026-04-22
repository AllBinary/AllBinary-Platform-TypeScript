
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
        



import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { HttpServletRequest } from "../../../../../../../../javax/servlet/http/HttpServletRequest.js";

    
import { BasicPaymentType } from "../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentType.js";

    
import { BasicPaymentTypeUtil } from "../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentTypeUtil.js";

    
import { RequestParams } from "../../../../../../../../org/allbinary/logic/communication/http/request/RequestParams.js";

    
import { LogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PaymentGatewayInterfaceFactoryInterface } from "./PaymentGatewayInterfaceFactoryInterface.js";

import { PaymentGatewayInterface } from "./PaymentGatewayInterface.js";

import { PaymentGatewayData } from "./PaymentGatewayData.js";

export class PaymentGatewayInterfaceFactory
            extends Object
         implements PaymentGatewayInterfaceFactoryInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (){

            super();
        }


                //@Throws(Error::class)
            
    public getInstance(httpServletRequest: HttpServletRequest): PaymentGatewayInterface{
var httpServletRequest = httpServletRequest

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENT))
                        
                                    {
                                    this.logUtil!.putF("Getting", this, commonStrings!.GET_INSTANCE);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(new RequestParams(httpServletRequest).
                            toHashMap());

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENTERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(HttpServletRequest)", e);
    

                                    }
                                



                            throw e
}

}


                //@Throws(Error::class)
            
    public getInstance(paymentType: BasicPaymentType): PaymentGatewayInterface{
var paymentType = paymentType

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
hashMap!.put(PaymentGatewayData.NAME.toString(), paymentType!.getName());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(hashMap);

                        ;
    
}


                //@Throws(Error::class)
            
    public getInstance(hashMap: HashMap<any, any>): PaymentGatewayInterface{
var hashMap = hashMap

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

        try {
            
    var gatewayName: string = hashMap!.get(PaymentGatewayData.NAME.toString());

                         as String;
        
        
;
    

    var paymentType: BasicPaymentType = BasicPaymentTypeUtil.getInstance()!.get(gatewayName)!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENT))
                        
                                    {
                                    this.logUtil!.putF("Getting PaymentGatewayInterface for PaymentType: " +paymentType!.getName() +" with: " +hashMap, this, commonStrings!.GET_INSTANCE);
    

                                    }
                                

    var paymentGatewayInterfaceFactoryInterface: PaymentGatewayInterfaceFactoryInterface = paymentType!.getPaymentGatewayInterfaceFactoryInterface()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentGatewayInterfaceFactoryInterface!.getInstance(hashMap);

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENTERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e
}

}


}
                
            

