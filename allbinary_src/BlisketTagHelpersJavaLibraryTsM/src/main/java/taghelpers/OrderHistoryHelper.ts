
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

        


            import { Exception } from '../java/lang/Exception.js';
        
import { HashMap } from '../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { HttpServletRequest } from '../javax/servlet/http/HttpServletRequest.js';
      //not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { PageContext } from '../javax/servlet/jsp/PageContext.js';
      //not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { TagHelper } from '../admin/taghelpers/TagHelper.js';
      //not GWT import const TagHelper = globalThis.admin.taghelpers.TagHelper;

      
import { StoreFrontData } from '../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      //not GWT import const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
import { StoreFrontFactory } from '../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      //not GWT import const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
import { StoreFrontInterface } from '../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      //not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { StreetAddress } from '../org/allbinary/business/user/address/StreetAddress.js';
      //not GWT import const StreetAddress = globalThis.org.allbinary.business.user.address.StreetAddress;

      
import { OrderData } from '../org/allbinary/business/user/commerce/inventory/order/OrderData.js';
      //not GWT import const OrderData = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderData;

      
import { OrderHistoryData } from '../org/allbinary/business/user/commerce/inventory/order/OrderHistoryData.js';
      //not GWT import const OrderHistoryData = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderHistoryData;

      
import { OrderHistoryFactory } from '../org/allbinary/business/user/commerce/inventory/order/OrderHistoryFactory.js';
      //not GWT import const OrderHistoryFactory = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderHistoryFactory;

      
import { OrderHistoryInterface } from '../org/allbinary/business/user/commerce/inventory/order/OrderHistoryInterface.js';
      //not GWT import const OrderHistoryInterface = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderHistoryInterface;

      
import { ShippingMethodData } from '../org/allbinary/business/user/commerce/shipping/ShippingMethodData.js';
      //not GWT import const ShippingMethodData = globalThis.org.allbinary.business.user.commerce.shipping.ShippingMethodData;

      
import { OrderHistoryEntityFactory } from '../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntityFactory.js';
      //not GWT import const OrderHistoryEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.inventory.order.OrderHistoryEntityFactory;

      
import { OrderHistoryEntityInterface } from '../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntityInterface.js';
      //not GWT import const OrderHistoryEntityInterface = globalThis.org.allbinary.data.tables.user.commerce.inventory.order.OrderHistoryEntityInterface;

      
import { WeblisketSession } from '../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
      //not GWT import const WeblisketSession = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSession;

      
//not plain js import { LogUtil } from '../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OrderHistoryHelper extends TagHelper {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private weblisketSession: WeblisketSession;

    private storeFrontInterface: StoreFrontInterface;

    private readonly propertiesHashMap: HashMap<any, any>;

    private readonly pageContext: PageContext;

    private readonly request: HttpServletRequest;

    private streetAddress: StreetAddress;

    private id: string;

    private groupId: string;

    private status: string;

    private newStatus: string;

public constructor (propertiesHashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        this.propertiesHashMap= propertiesHashMap;
    
this.pageContext= pageContext;
    
this.request= pageContext!.getRequest() as HttpServletRequest;
    

    var storeName: string = propertiesHashMap!.get(StoreFrontData.getInstance()!.NAME) as string;;
    
this.newStatus= propertiesHashMap!.get(OrderHistoryData.STATUS) as string;
    

                        if(storeName != 
                                    null
                                )
                        
                                    {
                                    this.storeFrontInterface= StoreFrontFactory.getInstance(storeName);
    

                                    }
                                
this.getFormData();
    
}


    getFormData(){
this.id= this.request.getParameter(OrderData.ID);
    
this.groupId= this.request.getParameter(ShippingMethodData.GROUP);
    

                        if(this.newStatus == 
                                    null
                                )
                        
                                    {
                                    this.newStatus= this.request.getParameter(OrderHistoryData.STATUS);
    

                                    }
                                
}


    public setOrderStatus(): string{

        try {
            
    var success: string = "Status successfully set to: " +this.status;;
    

    var orderReviewInterface: OrderHistoryInterface = OrderHistoryFactory.getInstance(this.id)!;;
    

    var status: string = orderReviewInterface!.getStatus()!;;
    

                        if(status.compareTo(OrderHistoryData.CANCELLED) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Order " +this.id +" Already Cancelled<br/>";
    

                                    }
                                
                             else 
                        if(status.compareTo(OrderHistoryData.SHIPPED) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Order " +this.id +" Already Shipped. You can't cancel a shipped order.<br/>";
    

                                    }
                                
                             else 
                        if(status.compareTo(OrderHistoryData.PREPROCESSING) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Order " +this.id +" has been cancelled.<br/>";
    

                                    }
                                
                             else 
                        if(status.compareTo(OrderHistoryData.PARTIALLYSHIPPED) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Order " +this.id +" Partially Shipped. You can cancel unshipped items, but not the whole order.<br/>";
    

                                    }
                                
                             else 
                        if(status.compareTo(OrderHistoryData.PROCESSING) == 0)
                        
                                    {
                                    
    var orderHistoryEntityInterface: OrderHistoryEntityInterface = OrderHistoryEntityFactory.getInstance()!;;
    
orderHistoryEntityInterface!.setStatus(this.id, this.newStatus);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Order " +this.id +" has been cancelled.<br/>";
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "setOrderStatus()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Setting Order Status";
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to set order status";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "setOrderStatus()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error +"<br/>" +"Exception: " +e +"<br/>";
    
}

}


}



