
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
        



import { HashMap } from "../../java/util/HashMap.js";

    
import { Vector } from "../../java/util/Vector.js";

    
import { HttpServletRequest } from "../../javax/servlet/http/HttpServletRequest.js";

    
import { PageContext } from "../../javax/servlet/jsp/PageContext.js";

    
import { StoreFrontData } from "../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { StoreFrontFactory } from "../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { Order } from "../../org/allbinary/business/user/commerce/inventory/order/Order.js";

    
import { OrderInterface } from "../../org/allbinary/business/user/commerce/inventory/order/OrderInterface.js";

    
import { OrderProcessorUtil } from "../../org/allbinary/business/user/commerce/inventory/order/OrderProcessorUtil.js";

    
import { PaymentGatewayData } from "../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayData.js";

    
import { PaymentGatewayInterface } from "../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayInterface.js";

    
import { BasicPaymentType } from "../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentType.js";

    
import { PaymentGatewayEntity } from "../../org/allbinary/data/tables/user/commerce/money/payment/gateway/PaymentGatewayEntity.js";

    
import { PaymentGatewayEntityFactory } from "../../org/allbinary/data/tables/user/commerce/money/payment/gateway/PaymentGatewayEntityFactory.js";

    
import { WeblisketSession } from "../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../org/allbinary/logic/string/StringMaker.js";

    
import { StringValidationUtil } from "../../org/allbinary/logic/string/StringValidationUtil.js";

    

export class OrderHelper extends TagHelper {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private weblisketSession: WeblisketSession

    private storeFrontInterface: StoreFrontInterface

    private propertiesHashMap: HashMap<Any, Any>

    private pageContext: PageContext

    private request: HttpServletRequest
public constructor (propertiesHashMap: HashMap<Any, Any>, pageContext: PageContext){

            super();
            var propertiesHashMap = propertiesHashMap
var pageContext = pageContext
this.propertiesHashMap= propertiesHashMap
this.pageContext= pageContext
this.request= pageContext!.getRequest() as HttpServletRequest

    var storeName: string = propertiesHashMap!.get(StoreFrontData.getInstance()!.NAME) as String;
        
        


                        if(!StringValidationUtil.getInstance()!.isEmpty(storeName))
                        
                                    {
                                    this.storeFrontInterface= StoreFrontFactory.getInstance(storeName)

                                    }
                                
this.weblisketSession= WeblisketSession(this.propertiesHashMap, this.pageContext)
}


    public setPaymentGateway(): Boolean{

        try {
            
    var paymentGatewayBoolean: Boolean = Boolean.FALSE;
        
        


    var orderInterface: OrderInterface = this.weblisketSession!.getOrder()!;
        
        


    var requestPaymentGateway: string = request.getParameter(PaymentGatewayData.NAME.toString()) as String;
        
        


                        if(!StringValidationUtil.getInstance()!.isEmpty(requestPaymentGateway))
                        
                                    {
                                    this.weblisketSession!.setPaymentMethod(requestPaymentGateway)
orderInterface!.setPaymentMethod(requestPaymentGateway)
paymentGatewayBoolean= Boolean.TRUE

                                    }
                                

    var paymentGatewayEntityInterface: PaymentGatewayEntity = PaymentGatewayEntityFactory.getInstance() as PaymentGatewayEntity;
        
        


    var paymentTypeVector: Vector = paymentGatewayEntityInterface!.findPaymentTypeVectorByStore(this.weblisketSession!.getStoreName())!;
        
        


                        if(paymentTypeVector!.length == 1)
                        
                                    {
                                    
    var paymentType: BasicPaymentType = paymentTypeVector!.get(0) as BasicPaymentType;
        
        


    var paymentGatewayInterface: PaymentGatewayInterface = paymentGatewayEntityInterface!.getPaymentGatewayInterface(this.weblisketSession!.getStoreName(), paymentType) as PaymentGatewayInterface;
        
        


    var paymentGateway: string = paymentGatewayInterface!.getName()!;
        
        

this.weblisketSession!.setPaymentMethod(paymentGateway)
orderInterface!.setPaymentMethod(paymentGateway)
paymentGatewayBoolean= Boolean.TRUE

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Successfully set PaymentGateway Order: ")
stringBuffer!.append(orderInterface!.getId())
stringBuffer!.append(" to: ")
stringBuffer!.append(orderInterface!.getPaymentMethod())
logUtil!.put(stringBuffer!.toString(), this, "setPaymentGateway()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentGatewayBoolean;
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Failed to set PaymentGateway for Order: ")

        try {
            
    var orderInterface: OrderInterface = this.weblisketSession!.getOrder()!;
        
        


                        if(orderInterface != 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append(orderInterface!.getId())
stringBuffer!.append(" to: ")
stringBuffer!.append(orderInterface!.getPaymentMethod())

                                    }
                                
} catch(ex: Exception)
            {
stringBuffer!.append(" Exception Getting")
}

logUtil!.put(stringBuffer!.toString(), this, "setPaymentGateway()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public process(): string{

        try {
            
    var order: OrderInterface = this.weblisketSession!.getOrder()!;
        
        

order.setStoreName(this.storeFrontInterface!.getName())

    var result: string = OrderProcessorUtil.getInstance()!.process(this.weblisketSession!.getUserName(), order as Order)!;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    logUtil!.put("Successfully Processed Order: " +result, this, "processOrder()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
} catch(e: Exception)
            {

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Failed to Process Order: ")

        try {
            stringBuffer!.append(this.weblisketSession!.getOrder()!.getId())
} catch(ex: Exception)
            {
stringBuffer!.append(" Exception Getting Id")
}


    var error: string = stringBuffer!.toString()!;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.PROCESS, e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}
                
            

