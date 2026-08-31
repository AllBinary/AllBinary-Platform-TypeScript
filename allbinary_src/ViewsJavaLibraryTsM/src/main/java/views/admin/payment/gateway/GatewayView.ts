
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
import { HttpServletRequest } from '../../../../javax/servlet/http/HttpServletRequest.js';
      //not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { PaymentGatewayInterface } from '../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayInterface.js';
      //not GWT import const PaymentGatewayInterface = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.PaymentGatewayInterface;

      
import { BasicPaymentTypeUtil } from '../../../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentTypeUtil.js';
      //not GWT import const BasicPaymentTypeUtil = globalThis.org.allbinary.business.user.commerce.money.payment.types.BasicPaymentTypeUtil;

      
import { PaymentGatewayEntityFactory } from '../../../../org/allbinary/data/tables/user/commerce/money/payment/gateway/PaymentGatewayEntityFactory.js';
      //not GWT import const PaymentGatewayEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.money.payment.gateway.PaymentGatewayEntityFactory;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { StringValidationUtil } from '../../../../org/allbinary/logic/string/StringValidationUtil.js';
      //not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
import { TransformInfoInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PaymentGatewayViewAbstract } from './PaymentGatewayViewAbstract.js';
//not GWT import const  = globalThis.views.admin.payment.gateway.PaymentGatewayViewAbstract;

                import { PaymentGatewayComponent } from './PaymentGatewayComponent.js';
//not GWT import const  = globalThis.views.admin.payment.gateway.PaymentGatewayComponent;

                
export class GatewayView extends PaymentGatewayViewAbstract {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public getFormData(request: HttpServletRequest){
super.getFormData(request);
    

                        if(StringValidationUtil.getInstance()!.isEmpty(this.getPaymentGatewayPrimaryKey()!.getName()))
                        
                                    {
                                    this.getPaymentGatewayPrimaryKey()!.setName(this.getWeblisketSession()!.getPaymentMethod());
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public view(): string{

        try {
            
    var paymentGatewayInterface: PaymentGatewayInterface = PaymentGatewayEntityFactory.getInstance()!.getPaymentGatewayInterface(this.getPaymentGatewayPrimaryKey()!.getStoreName(), BasicPaymentTypeUtil.getInstance()!.get(this.getPaymentGatewayPrimaryKey()!.getName()))!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new PaymentGatewayComponent(this.getTransformInfoInterface(), paymentGatewayInterface).view();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "edit()", e);
    

                                    }
                                



                            throw e;
                    
}

}


}



