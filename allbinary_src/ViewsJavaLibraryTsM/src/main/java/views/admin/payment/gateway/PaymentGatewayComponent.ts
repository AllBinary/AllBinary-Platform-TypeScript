
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
        



import { PaymentGatewayInterface } from "../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayInterface.js";

    
import { PaymentGatewayDomNodeFactoryInterface } from "../../../../org/allbinary/business/user/commerce/money/payment/gateway/modules/gateway/PaymentGatewayDomNodeFactoryInterface.js";

    
import { BasicPaymentType } from "../../../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentType.js";

    
import { BasicPaymentTypeUtil } from "../../../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentTypeUtil.js";

    
import { DomNodeInterface } from "../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { TransformInfoInterface } from "../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { HttpStoreComponentView } from "../../../../views/business/context/modules/storefront/HttpStoreComponentView.js";

    

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

export class PaymentGatewayComponent extends HttpStoreComponentView {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private paymentGatewayInterface: PaymentGatewayInterface
public constructor (transformInfoInterface: TransformInfoInterface, paymentGatewayInterface: PaymentGatewayInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface
var paymentGatewayInterface = paymentGatewayInterface


                            //For kotlin this is before the body of the constructor.
                    
this.paymentGatewayInterface= paymentGatewayInterface;
    
}


                //@Throws(Error::class)
            
    public addDomNodeInterfaces(){

    var paymentType: BasicPaymentType = BasicPaymentTypeUtil.getInstance()!.get(this.paymentGatewayInterface!.getName())!;
        
        
;
    

    var paymentGatewayDomNodeFactoryInterface: PaymentGatewayDomNodeFactoryInterface = paymentType!.getPaymentGatewayDomNodeFactoryInterface()!;
        
        
;
    

    var domNodeInterface: DomNodeInterface = paymentGatewayDomNodeFactoryInterface!.getInstance(this.paymentGatewayInterface);

                         as DomNodeInterface;
        
        
;
    
this.addDomNodeInterface(domNodeInterface);
    
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

    var error: string = "Failed to view payment gateway";
        
        
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
                
            

