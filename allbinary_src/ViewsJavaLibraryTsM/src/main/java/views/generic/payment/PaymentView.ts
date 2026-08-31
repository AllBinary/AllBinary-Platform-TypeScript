
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
        
import { Vector } from '../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { Payment } from '../../../org/allbinary/business/user/commerce/money/payment/Payment.js';
      //not GWT import const Payment = globalThis.org.allbinary.business.user.commerce.money.payment.Payment;

      
import { PaymentData } from '../../../org/allbinary/business/user/commerce/money/payment/PaymentData.js';
      //not GWT import const PaymentData = globalThis.org.allbinary.business.user.commerce.money.payment.PaymentData;

      
import { PaymentEntityFactory } from '../../../org/allbinary/data/tables/user/commerce/money/payment/PaymentEntityFactory.js';
      //not GWT import const PaymentEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.money.payment.PaymentEntityFactory;

      
import { DomNodeInterface } from '../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { TransformInfoInterface } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { Document } from '../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { HttpStoreComponentView } from '../../../views/business/context/modules/storefront/HttpStoreComponentView.js';
      //not GWT import const HttpStoreComponentView = globalThis.views.business.context.modules.storefront.HttpStoreComponentView;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PaymentView extends HttpStoreComponentView implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

        try {
            
    var paymentNode: Node = document.createElement(PaymentData.PAYMENT)!;;
    
document.appendChild(paymentNode);
    

    var paymentVector: Vector = PaymentEntityFactory.getInstance()!.getPaymentEntityInstance()!.get(this.getWeblisketSession()!.getUserName())!;;
    

    var size: number = paymentVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var payment: Payment = paymentVector!.get(index) as Payment;;
    
paymentNode!.appendChild(payment.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentNode;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "toXmlNode", e);
    

                                    }
                                



                            throw e;
                    
}

}


    public addDomNodeInterfaces(){
this.addDomNodeInterface(this as DomNodeInterface);
    
}


    public view(): string{

        try {
            this.addDomNodeInterfaces();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.view();;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to view Payment";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}



