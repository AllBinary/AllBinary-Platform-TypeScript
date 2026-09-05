
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
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { BasicPaymentTypeUtil } from '../../../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentTypeUtil.js';
//not GWT import const BasicPaymentTypeUtil = globalThis.org.allbinary.business.user.commerce.money.payment.types.BasicPaymentTypeUtil;

      
import { PaymentGatewayEntityFactory } from '../../../../org/allbinary/data/tables/user/commerce/money/payment/gateway/PaymentGatewayEntityFactory.js';
//not GWT import const PaymentGatewayEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.money.payment.gateway.PaymentGatewayEntityFactory;

      
import { PaymentGatewayEntityInterface } from '../../../../org/allbinary/data/tables/user/commerce/money/payment/gateway/PaymentGatewayEntityInterface.js';
//not GWT import const PaymentGatewayEntityInterface = globalThis.org.allbinary.data.tables.user.commerce.money.payment.gateway.PaymentGatewayEntityInterface;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { TransformInfoInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { PaymentGatewayViewAbstract } from '../../../../views/admin/payment/gateway/PaymentGatewayViewAbstract.js';
//not GWT import const PaymentGatewayViewAbstract = globalThis.views.admin.payment.gateway.PaymentGatewayViewAbstract;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PaymentGatewaysView } from './PaymentGatewaysView.js';
//not GWT import - same folder const PaymentGatewaysView = globalThis.views.admin.payment.gateways.PaymentGatewaysView;

                
export class SelectNewView extends PaymentGatewayViewAbstract {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public view(): string{

        try {
            
    var paymentGatewayEntityInterface: PaymentGatewayEntityInterface = PaymentGatewayEntityFactory.getInstance()!;;
    

    var existingGateways: BasicArrayList = paymentGatewayEntityInterface!.findPaymentTypeVectorByStore(this.getPaymentGatewayPrimaryKey()!.getStoreName())!;;
    

    var allGatewaysLessExisting: BasicArrayList = BasicPaymentTypeUtil.getInstance()!.difference(existingGateways)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new PaymentGatewaysView(this.getTransformInfoInterface(), allGatewaysLessExisting).view();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "view", e);
    

                                    }
                                



                            throw e;
                    
}

}


}



