
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
        



import { HashMap } from "../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../java/util/Vector.js";

    
import { EntryData } from "../../../../org/allbinary/business/entry/EntryData.js";

    
import { PaymentGatewayData } from "../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayData.js";

    
import { PaymentGatewaysData } from "../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewaysData.js";

    
import { BasicPaymentType } from "../../../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentType.js";

    
import { PaymentTypeUtil } from "../../../../org/allbinary/business/user/commerce/money/payment/types/PaymentTypeUtil.js";

    
import { DomNodeInterface } from "../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { ModDomHelper } from "../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { TransformInfoInterface } from "../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Document } from "../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../org/w3c/dom/Node.js";

    
import { HttpStoreComponentView } from "../../../../views/business/context/modules/storefront/HttpStoreComponentView.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PaymentGatewaysView extends HttpStoreComponentView implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private paymentGatewayVector: Vector
public constructor (transformInfoInterface: TransformInfoInterface, gatewayVector: Vector)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface
var gatewayVector = gatewayVector


                            //For kotlin this is before the body of the constructor.
                    
this.paymentGatewayVector= gatewayVector;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

        try {
            
    var storeName: string = this.getTransformInfoInterface()!.getStoreName()!;
        
        
;
    

    var paymentGatewaysNode: Node = document.createElement(PaymentGatewaysData.NAME)!;
        
        
;
    

    var size: number = this.paymentGatewayVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var paymentType: BasicPaymentType = this.paymentGatewayVector!.get(index);

                         as BasicPaymentType;
        
        
;
    

    var hashMap: HashMap<any, any> = paymentType!.toHashMap()!;
        
        
;
    
hashMap!.put(EntryData.getInstance()!.DEFAULT, PaymentTypeUtil.getInstance()!.getDefault(storeName)!.getBasicPaymentType()!.getName());
    

    var paymentGatewayNode: Node = ModDomHelper.createNodeWithValueNodes(document, PaymentGatewayData.NAME.toString(), hashMap)!;
        
        
;
    
paymentGatewaysNode!.appendChild(paymentGatewayNode);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentGatewaysNode;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.XSLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "toXmlNode", e);
    

                                    }
                                



                            throw e
}

}


    public addDomNodeInterfaces(){
this.addDomNodeInterface(this as DomNodeInterface);
    
}


    public view(): string{

        try {
            this.addDomNodeInterfaces();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.view();

                        ;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to view payment gateways";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}
                
            

