
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

        


            import { Object } from '../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { HttpServletRequest } from '../../../../../../../../javax/servlet/http/HttpServletRequest.js';
      //not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { BasicPaymentType } from '../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentType.js';
      //not GWT import const BasicPaymentType = globalThis.org.allbinary.business.user.commerce.money.payment.types.BasicPaymentType;

      
import { BasicPaymentTypeUtil } from '../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentTypeUtil.js';
      //not GWT import const BasicPaymentTypeUtil = globalThis.org.allbinary.business.user.commerce.money.payment.types.BasicPaymentTypeUtil;

      
//not plain js import { StdUtil } from '../../../../../../../../org/allbinary/logic/StdUtil.js';
      const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
import { RequestParams } from '../../../../../../../../org/allbinary/logic/communication/http/request/RequestParams.js';
      //not GWT import const RequestParams = globalThis.org.allbinary.logic.communication.http.request.RequestParams;

      
//not plain js import { LogUtil } from '../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } from '../../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PaymentGatewayInterfaceFactoryInterface } from './PaymentGatewayInterfaceFactoryInterface.js';
//not GWT import const PaymentGatewayInterfaceFactoryInterface = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.PaymentGatewayInterfaceFactoryInterface;

                import { PaymentGatewayInterface } from './PaymentGatewayInterface.js';
//not GWT import const PaymentGatewayInterface = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.PaymentGatewayInterface;

                import { PaymentGatewayData } from './PaymentGatewayData.js';
//not GWT import const PaymentGatewayData = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.PaymentGatewayData;

                
export class PaymentGatewayInterfaceFactory
            extends Object
         implements PaymentGatewayInterfaceFactoryInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getInstance(httpServletRequest: HttpServletRequest): PaymentGatewayInterface{

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENT))
                        
                                    {
                                    this.logUtil!.putF("Getting", this, commonStrings!.GET_INSTANCE);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(new RequestParams(httpServletRequest).toHashMap());;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENTERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(HttpServletRequest)", e);
    

                                    }
                                



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    public getInstance(paymentType: BasicPaymentType): PaymentGatewayInterface{

    var hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
hashMap!.put(PaymentGatewayData.NAME.toString(), paymentType!.getName());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(hashMap);;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(hashMap: HashMap<any, any>): PaymentGatewayInterface{

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

        try {
            
    var gatewayName: string = hashMap!.get(PaymentGatewayData.NAME.toString()) as string;;
    

    var paymentType: BasicPaymentType = BasicPaymentTypeUtil.getInstance()!.get(gatewayName)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENT))
                        
                                    {
                                    this.logUtil!.putF("Getting PaymentGatewayInterface for PaymentType: " +paymentType!.getName() +" with: " +hashMap, this, commonStrings!.GET_INSTANCE);
    

                                    }
                                

    var paymentGatewayInterfaceFactoryInterface: PaymentGatewayInterfaceFactoryInterface = paymentType!.getPaymentGatewayInterfaceFactoryInterface()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentGatewayInterfaceFactoryInterface!.getInstance(hashMap);;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENTERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    
}

}


}



