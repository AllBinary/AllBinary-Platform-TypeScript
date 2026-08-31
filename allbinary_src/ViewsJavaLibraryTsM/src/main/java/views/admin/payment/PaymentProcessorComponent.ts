
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

        


            import { Exception } from '../../../java/lang/Exception.js';
        
import { PaymentProcessorInterface } from '../../../org/allbinary/business/user/commerce/money/payment/gateway/processor/PaymentProcessorInterface.js';
      //not GWT import const PaymentProcessorInterface = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.processor.PaymentProcessorInterface;

      
import { PaymentProcessorInterfaceFactory } from '../../../org/allbinary/business/user/commerce/money/payment/gateway/processor/PaymentProcessorInterfaceFactory.js';
      //not GWT import const PaymentProcessorInterfaceFactory = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.processor.PaymentProcessorInterfaceFactory;

      
import { DomNodeInterface } from '../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { TransformInfoHttpInterface } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js';
      //not GWT import const TransformInfoHttpInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpInterface;

      
import { TransformInfoInterface } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { HttpStoreComponentView } from '../../../views/business/context/modules/storefront/HttpStoreComponentView.js';
      //not GWT import const HttpStoreComponentView = globalThis.views.business.context.modules.storefront.HttpStoreComponentView;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PaymentProcessorComponent extends HttpStoreComponentView {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public addDomNodeInterfaces(){

    var paymentProcessorInterface: PaymentProcessorInterface = PaymentProcessorInterfaceFactory.getInstance()!.getInstance(this.getTransformInfoInterface())!;;
    
paymentProcessorInterface!.process();
    

    var httpTransformInfoInterface: TransformInfoHttpInterface = this.getTransformInfoInterface() as TransformInfoHttpInterface;;
    
httpTransformInfoInterface!.getWeblisketSession()!.removeBasket();
    
this.addDomNodeInterface(paymentProcessorInterface as DomNodeInterface);
    
}


                //@Throws(Exception.constructor)
            
    public view(): string{

        try {
            this.addDomNodeInterfaces();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.view();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e;
                    
}

}


}



