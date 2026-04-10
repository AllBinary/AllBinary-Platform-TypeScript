
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

    
import { HttpServletRequest } from "../../javax/servlet/http/HttpServletRequest.js";

    
import { PageContext } from "../../javax/servlet/jsp/PageContext.js";

    
import { OrderData } from "../../org/allbinary/business/user/commerce/inventory/order/OrderData.js";

    
import { OrderHistory } from "../../org/allbinary/business/user/commerce/inventory/order/OrderHistory.js";

    
import { OrderHistoryData } from "../../org/allbinary/business/user/commerce/inventory/order/OrderHistoryData.js";

    
import { OrderStatusEmail } from "../../org/allbinary/business/user/commerce/inventory/order/status/OrderStatusEmail.js";

    
import { ShippingMethodData } from "../../org/allbinary/business/user/commerce/shipping/ShippingMethodData.js";

    
import { OrderHistoryEntityFactory } from "../../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntityFactory.js";

    
import { OrderItemsEntityFactory } from "../../org/allbinary/data/tables/user/commerce/inventory/order/OrderItemsEntityFactory.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbeClientInformationInterface } from "../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { ServiceClientInformationInterfaceFactory } from "../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js";

    
import { CommonPhoneStrings } from "../../org/allbinary/string/CommonPhoneStrings.js";

    

export class OrderHistoryRequestHelper extends TagHelper {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;
        
        

    private request: HttpServletRequest

    private id: string

    private groupId: string

    private status: string
public constructor (hashMap: HashMap<Any, Any>, pageContext: PageContext){

            super();
            var hashMap = hashMap
var pageContext = pageContext
this.request= pageContext!.getRequest() as HttpServletRequest
this.this.getFormData()
}


    getFormData(){
this.id= request.getParameter(OrderData.ID)
this.groupId= request.getParameter(ShippingMethodData.GROUP)
this.status= request.getParameter(OrderHistoryData.STATUS)
}


    public setOrderStatus(): string{

        try {
            
                        if(this.groupId!.compareTo(CommonPhoneStrings.getInstance()!.ZERO) != 0)
                        
                                    {
                                    
                        if(OrderItemsEntityFactory.getInstance()!.isEverythingShipped(id))
                        
                                    {
                                    this.status= OrderHistoryData.SHIPPED

                                    }
                                
                        else {
                            this.status= OrderHistoryData.PARTIALLYSHIPPED

                        }
                            

                                    }
                                

    var success: string = "Status successfully set to: " +this.status;
        
        

OrderHistoryEntityFactory.getInstance()!.setStatus(id, this.status)

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    logUtil!.put("Success", this, "setOrderStatus()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
} catch(e: Exception)
            {

    var error: string = "Failed to set order status";
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "setOrderStatus()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public setOrderStatus(newStatus: string): string{
var newStatus = newStatus

        try {
            
                        if(newStatus == 
                                    null
                                )
                        newStatus= this.status

    var success: string = "Status successfully set to: " +newStatus;
        
        

OrderHistoryEntityFactory.getInstance()!.setStatus(id, newStatus)

    var orderHistory: OrderHistory = OrderHistoryEntityFactory.getInstance()!.getOrder(id)!;
        
        

OrderStatusEmail(this.abeClientInformation, orderHistory).
                            process()

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    logUtil!.put("Success", this, "setOrderStatus()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
} catch(e: Exception)
            {

    var error: string = "Failed to view order table";
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "setOrderStatus(newStatus)", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}
                
            

