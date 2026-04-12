
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
        



import { HttpServletRequest } from "../../../../javax/servlet/http/HttpServletRequest.js";

    
import { PaymentGatewayInterface } from "../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayInterface.js";

    
import { BasicPaymentTypeUtil } from "../../../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentTypeUtil.js";

    
import { PaymentGatewayEntityFactory } from "../../../../org/allbinary/data/tables/user/commerce/money/payment/gateway/PaymentGatewayEntityFactory.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringValidationUtil } from "../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { TransformInfoInterface } from "../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    

export class GatewayView extends PaymentGatewayViewAbstract {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
}


    public getFormData(request: HttpServletRequest){
var request = request
super.getFormData(request);
    

                        if(StringValidationUtil.getInstance()!.isEmpty(this.getPaymentGatewayPrimaryKey()!.getName()))
                        
                                    {
                                    this.getPaymentGatewayPrimaryKey()!.setName(this.getWeblisketSession()!.getPaymentMethod());
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public view(): string{

        try {
            
    var paymentGatewayInterface: PaymentGatewayInterface = PaymentGatewayEntityFactory.getInstance()!.getPaymentGatewayInterface(this.getPaymentGatewayPrimaryKey()!.getStoreName(), BasicPaymentTypeUtil.getInstance()!.get(this.getPaymentGatewayPrimaryKey()!.getName()))!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new PaymentGatewayComponent(this.getTransformInfoInterface(), paymentGatewayInterface).
                            view();

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "edit()", e);
    

                                    }
                                



                            throw e
}

}


}
                
            

