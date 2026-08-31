
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
        



            import { Exception } from '../../java/lang/Exception.js';
        
import { HashMap } from '../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { HttpServletRequest } from '../../javax/servlet/http/HttpServletRequest.js';
      //not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
      //not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { OrderData } from '../../org/allbinary/business/user/commerce/inventory/order/OrderData.js';
      //not GWT import const OrderData = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderData;

      
import { OrderHistory } from '../../org/allbinary/business/user/commerce/inventory/order/OrderHistory.js';
      //not GWT import const OrderHistory = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderHistory;

      
import { OrderHistoryData } from '../../org/allbinary/business/user/commerce/inventory/order/OrderHistoryData.js';
      //not GWT import const OrderHistoryData = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderHistoryData;

      
import { OrderStatusEmail } from '../../org/allbinary/business/user/commerce/inventory/order/status/OrderStatusEmail.js';
      //not GWT import const OrderStatusEmail = globalThis.org.allbinary.business.user.commerce.inventory.order.status.OrderStatusEmail;

      
import { ShippingMethodData } from '../../org/allbinary/business/user/commerce/shipping/ShippingMethodData.js';
      //not GWT import const ShippingMethodData = globalThis.org.allbinary.business.user.commerce.shipping.ShippingMethodData;

      
import { OrderHistoryEntityFactory } from '../../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntityFactory.js';
      //not GWT import const OrderHistoryEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.inventory.order.OrderHistoryEntityFactory;

      
import { OrderItemsEntityFactory } from '../../org/allbinary/data/tables/user/commerce/inventory/order/OrderItemsEntityFactory.js';
      //not GWT import const OrderItemsEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.inventory.order.OrderItemsEntityFactory;

      
//not plain js import { LogUtil } from '../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbeClientInformationInterface } from '../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { ServiceClientInformationInterfaceFactory } from '../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
      //not GWT import const ServiceClientInformationInterfaceFactory = globalThis.org.allbinary.logic.system.security.licensing.ServiceClientInformationInterfaceFactory;

      
//not plain js import { CommonPhoneStrings } from '../../org/allbinary/string/CommonPhoneStrings.js';
      const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TagHelper } from './TagHelper.js';

export class OrderHistoryRequestHelper extends TagHelper {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;

    private request: HttpServletRequest;

    private id: string;

    private groupId: string;

    private status: string;

public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        this.request= pageContext!.getRequest() as HttpServletRequest;
    
this.getFormData();
    
}


    getFormData(){
this.id= this.request.getParameter(OrderData.ID);
    
this.groupId= this.request.getParameter(ShippingMethodData.GROUP);
    
this.status= this.request.getParameter(OrderHistoryData.STATUS);
    
}


    public setOrderStatus(): string{

        try {
            
                        if(this.groupId!.compareTo(CommonPhoneStrings.getInstance()!.ZERO) != 0)
                        
                                    {
                                    
                        if(OrderItemsEntityFactory.getInstance()!.isEverythingShipped(this.id))
                        
                                    {
                                    this.status= OrderHistoryData.SHIPPED;
    

                                    }
                                
                        else {
                            this.status= OrderHistoryData.PARTIALLYSHIPPED;
    

                        }
                            

                                    }
                                

    var success: string = "Status successfully set to: " +this.status;;
    
OrderHistoryEntityFactory.getInstance()!.setStatus(this.id, this.status);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF("Success", this, "setOrderStatus()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to set order status";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "setOrderStatus()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public setOrderStatus(newStatus: string): string{

        try {
            
                        if(newStatus == 
                                    null
                                )
                        newStatus= this.status

    var success: string = "Status successfully set to: " +newStatus;;
    
OrderHistoryEntityFactory.getInstance()!.setStatus(this.id, newStatus);
    

    var orderHistory: OrderHistory = OrderHistoryEntityFactory.getInstance()!.getOrder(this.id)!;;
    
new OrderStatusEmail(this.abeClientInformation, orderHistory).process();
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF("Success", this, "setOrderStatus()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to view order table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "setOrderStatus(newStatus)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}



