
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
        



//not game specific package import { HttpServletRequest } from '../../../../javax/servlet/http/HttpServletRequest.js';
      const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
//not game specific package import { PaymentGatewayData } from '../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayData.js';
      const PaymentGatewayData = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.PaymentGatewayData;

      
//not game specific package import { PaymentGatewayPrimaryKey } from '../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayPrimaryKey.js';
      const PaymentGatewayPrimaryKey = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.PaymentGatewayPrimaryKey;

      
//not game specific package import { TransformInfoHttpComposite } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpComposite.js';
      const TransformInfoHttpComposite = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpComposite;

      
//not game specific package import { TransformInfoInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PaymentGatewayViewAbstract extends TransformInfoHttpComposite {
        

    private paymentGatewayPrimaryKey: PaymentGatewayPrimaryKey;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.getFormData(this.getPageContext()!.getRequest() as HttpServletRequest);
    
}


    public getFormData(request: HttpServletRequest){

    var storeName: string = this.getWeblisketSession()!.getStoreName()!;;
    

    var gatewayName: string = request.getParameter(PaymentGatewayData.NAME.toString())!;;
    
this.setPaymentGatewayPrimaryKey(new PaymentGatewayPrimaryKey(storeName, gatewayName));
    
}


    public getPaymentGatewayPrimaryKey(): PaymentGatewayPrimaryKey{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paymentGatewayPrimaryKey;
    
}


    public setPaymentGatewayPrimaryKey(paymentGatewayPrimaryKey: PaymentGatewayPrimaryKey){
this.paymentGatewayPrimaryKey= paymentGatewayPrimaryKey;
    
}


}



