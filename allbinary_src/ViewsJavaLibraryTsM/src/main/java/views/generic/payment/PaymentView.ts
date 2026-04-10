
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
        



import { Vector } from "../../../java/util/Vector.js";

    
import { Payment } from "../../../org/allbinary/business/user/commerce/money/payment/Payment.js";

    
import { PaymentData } from "../../../org/allbinary/business/user/commerce/money/payment/PaymentData.js";

    
import { PaymentEntityFactory } from "../../../org/allbinary/data/tables/user/commerce/money/payment/PaymentEntityFactory.js";

    
import { DomNodeInterface } from "../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { TransformInfoInterface } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Document } from "../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../org/w3c/dom/Node.js";

    
import { HttpStoreComponentView } from "../../../views/business/context/modules/storefront/HttpStoreComponentView.js";

    

export class PaymentView extends HttpStoreComponentView
                , DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
}


                @Throws(Exception::class)
            
    public toXmlNode(document: Document): Node{
var document = document

        try {
            
    var paymentNode: Node = document.createElement(PaymentData.PAYMENT)!;
        
        

appendChild(paymentNode)

    var paymentVector: Vector = PaymentEntityFactory.getInstance()!.getPaymentEntityInstance()!.get(this.getWeblisketSession()!.getUserName())!;
        
        


    var size: number = paymentVector!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var payment: Payment = paymentVector!.get(index) as Payment;
        
        

appendChild(payment.toXmlNode(document))
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentNode;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, "toXmlNode", e)

                                    }
                                



                            throw e
}

}


    public addDomNodeInterfaces(){
this.addDomNodeInterface(this as DomNodeInterface)
}


    public view(): string{

        try {
            this.addDomNodeInterfaces()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.view();
    
} catch(e: Exception)
            {

    var error: string = "Failed to view Payment";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "view()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}
                
            

