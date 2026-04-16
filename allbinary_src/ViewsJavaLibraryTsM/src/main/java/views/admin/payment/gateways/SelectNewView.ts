
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
        



import { Vector } from "../../../../java/util/Vector.js";

    
import { BasicPaymentTypeUtil } from "../../../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentTypeUtil.js";

    
import { PaymentGatewayEntityFactory } from "../../../../org/allbinary/data/tables/user/commerce/money/payment/gateway/PaymentGatewayEntityFactory.js";

    
import { PaymentGatewayEntityInterface } from "../../../../org/allbinary/data/tables/user/commerce/money/payment/gateway/PaymentGatewayEntityInterface.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { TransformInfoInterface } from "../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { PaymentGatewayViewAbstract } from "../../../../views/admin/payment/gateway/PaymentGatewayViewAbstract.js";

    

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

export class SelectNewView extends PaymentGatewayViewAbstract {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public view(): string{

        try {
            
    var paymentGatewayEntityInterface: PaymentGatewayEntityInterface = PaymentGatewayEntityFactory.getInstance()!;
        
        
;
    

    var existingGateways: Vector = paymentGatewayEntityInterface!.findPaymentTypeVectorByStore(this.getPaymentGatewayPrimaryKey()!.getStoreName())!;
        
        
;
    

    var allGatewaysLessExisting: Vector = BasicPaymentTypeUtil.getInstance()!.difference(existingGateways)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new PaymentGatewaysView(this.getTransformInfoInterface(), allGatewaysLessExisting).
                            view();

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "view", e);
    

                                    }
                                



                            throw e
}

}


}
                
            

