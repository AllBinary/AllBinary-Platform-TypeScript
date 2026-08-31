
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
        
import { PaymentGatewayInterface } from '../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayInterface.js';
      //not GWT import const PaymentGatewayInterface = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.PaymentGatewayInterface;

      
import { PaymentGatewayDomNodeFactoryInterface } from '../../../../org/allbinary/business/user/commerce/money/payment/gateway/modules/gateway/PaymentGatewayDomNodeFactoryInterface.js';
      //not GWT import const PaymentGatewayDomNodeFactoryInterface = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.modules.gateway.PaymentGatewayDomNodeFactoryInterface;

      
import { BasicPaymentType } from '../../../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentType.js';
      //not GWT import const BasicPaymentType = globalThis.org.allbinary.business.user.commerce.money.payment.types.BasicPaymentType;

      
import { BasicPaymentTypeUtil } from '../../../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentTypeUtil.js';
      //not GWT import const BasicPaymentTypeUtil = globalThis.org.allbinary.business.user.commerce.money.payment.types.BasicPaymentTypeUtil;

      
import { DomNodeInterface } from '../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { TransformInfoInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { HttpStoreComponentView } from '../../../../views/business/context/modules/storefront/HttpStoreComponentView.js';
      //not GWT import const HttpStoreComponentView = globalThis.views.business.context.modules.storefront.HttpStoreComponentView;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PaymentGatewayComponent extends HttpStoreComponentView {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private paymentGatewayInterface: PaymentGatewayInterface;

public constructor (transformInfoInterface: TransformInfoInterface, paymentGatewayInterface: PaymentGatewayInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.paymentGatewayInterface= paymentGatewayInterface;
    
}


                //@Throws(Exception.constructor)
            
    public addDomNodeInterfaces(){

    var paymentType: BasicPaymentType = BasicPaymentTypeUtil.getInstance()!.get(this.paymentGatewayInterface!.getName())!;;
    

    var paymentGatewayDomNodeFactoryInterface: PaymentGatewayDomNodeFactoryInterface = paymentType!.getPaymentGatewayDomNodeFactoryInterface()!;;
    

    var domNodeInterface: DomNodeInterface = paymentGatewayDomNodeFactoryInterface!.getInstance(this.paymentGatewayInterface) as DomNodeInterface;;
    
this.addDomNodeInterface(domNodeInterface);
    
}


    public view(): string{

        try {
            this.addDomNodeInterfaces();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.view();;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to view payment gateway";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}



