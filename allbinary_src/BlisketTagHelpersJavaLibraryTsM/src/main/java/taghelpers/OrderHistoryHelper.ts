
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
        
//not game specific package import { HashMap } from '../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { HttpServletRequest } from '../javax/servlet/http/HttpServletRequest.js';
      const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
//not game specific package import { PageContext } from '../javax/servlet/jsp/PageContext.js';
      const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
//not game specific package import { TagHelper } from '../admin/taghelpers/TagHelper.js';
      const TagHelper = globalThis.admin.taghelpers.TagHelper;

      
//not game specific package import { StoreFrontData } from '../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
//not game specific package import { StoreFrontFactory } from '../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
//not game specific package import { StoreFrontInterface } from '../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { StreetAddress } from '../org/allbinary/business/user/address/StreetAddress.js';
      const StreetAddress = globalThis.org.allbinary.business.user.address.StreetAddress;

      
//not game specific package import { OrderData } from '../org/allbinary/business/user/commerce/inventory/order/OrderData.js';
      const OrderData = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderData;

      
//not game specific package import { OrderHistoryData } from '../org/allbinary/business/user/commerce/inventory/order/OrderHistoryData.js';
      const OrderHistoryData = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderHistoryData;

      
//not game specific package import { OrderHistoryFactory } from '../org/allbinary/business/user/commerce/inventory/order/OrderHistoryFactory.js';
      const OrderHistoryFactory = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderHistoryFactory;

      
//not game specific package import { OrderHistoryInterface } from '../org/allbinary/business/user/commerce/inventory/order/OrderHistoryInterface.js';
      const OrderHistoryInterface = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderHistoryInterface;

      
//not game specific package import { ShippingMethodData } from '../org/allbinary/business/user/commerce/shipping/ShippingMethodData.js';
      const ShippingMethodData = globalThis.org.allbinary.business.user.commerce.shipping.ShippingMethodData;

      
//not game specific package import { OrderHistoryEntityFactory } from '../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntityFactory.js';
      const OrderHistoryEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.inventory.order.OrderHistoryEntityFactory;

      
//not game specific package import { OrderHistoryEntityInterface } from '../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntityInterface.js';
      const OrderHistoryEntityInterface = globalThis.org.allbinary.data.tables.user.commerce.inventory.order.OrderHistoryEntityInterface;

      
//not game specific package import { WeblisketSession } from '../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
      const WeblisketSession = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSession;

      
//not game specific package import { LogUtil } from '../org/allbinary/logic/communication/log/LogUtil.js';
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



