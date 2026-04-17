
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
        



import { HashMap } from "../java/util/HashMap.js";

    
import { HttpServletRequest } from "../javax/servlet/http/HttpServletRequest.js";

    
import { PageContext } from "../javax/servlet/jsp/PageContext.js";

    
import { TagHelper } from "../admin/taghelpers/TagHelper.js";

    
import { StoreFrontData } from "../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { StoreFrontFactory } from "../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { StreetAddress } from "../org/allbinary/business/user/address/StreetAddress.js";

    
import { OrderData } from "../org/allbinary/business/user/commerce/inventory/order/OrderData.js";

    
import { OrderHistoryData } from "../org/allbinary/business/user/commerce/inventory/order/OrderHistoryData.js";

    
import { OrderHistoryFactory } from "../org/allbinary/business/user/commerce/inventory/order/OrderHistoryFactory.js";

    
import { OrderHistoryInterface } from "../org/allbinary/business/user/commerce/inventory/order/OrderHistoryInterface.js";

    
import { ShippingMethodData } from "../org/allbinary/business/user/commerce/shipping/ShippingMethodData.js";

    
import { OrderHistoryEntityFactory } from "../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntityFactory.js";

    
import { OrderHistoryEntityInterface } from "../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntityInterface.js";

    
import { WeblisketSession } from "../org/allbinary/logic/communication/http/request/session/WeblisketSession.js";

    
import { LogUtil } from "../org/allbinary/logic/communication/log/LogUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OrderHistoryHelper extends TagHelper {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private weblisketSession: WeblisketSession

    private storeFrontInterface: StoreFrontInterface

    private readonly propertiesHashMap: HashMap<any, any>

    private readonly pageContext: PageContext

    private readonly request: HttpServletRequest

    private streetAddress: StreetAddress

    private id: string

    private groupId: string

    private status: string

    private newStatus: string
public constructor (propertiesHashMap: HashMap<any, any>, pageContext: PageContext){

            super();
            var propertiesHashMap = propertiesHashMap
var pageContext = pageContext
this.propertiesHashMap= propertiesHashMap;
    
this.pageContext= pageContext;
    
this.request= pageContext!.getRequest();

                         as HttpServletRequest;
    

    var storeName: string = propertiesHashMap!.get(StoreFrontData.getInstance()!.NAME);

                         as String;
        
        
;
    
this.newStatus= propertiesHashMap!.get(OrderHistoryData.STATUS);

                         as String;
    

                        if(storeName != 
                                    null
                                )
                        
                                    {
                                    this.storeFrontInterface= StoreFrontFactory.getInstance(storeName);
    

                                    }
                                
this.getFormData();
    
}


    getFormData(){
this.id= request.getParameter(OrderData.ID);
    
this.groupId= request.getParameter(ShippingMethodData.GROUP);
    

                        if(this.newStatus == 
                                    null
                                )
                        
                                    {
                                    this.newStatus= request.getParameter(OrderHistoryData.STATUS);
    

                                    }
                                
}


    public setOrderStatus(): string{

        try {
            
    var success: string = "Status successfully set to: " +this.status;
        
        
;
    

    var orderReviewInterface: OrderHistoryInterface = OrderHistoryFactory.getInstance(id)!;
        
        
;
    

    var status: string = orderReviewInterface!.getStatus()!;
        
        
;
    

                        if(status.compareTo(OrderHistoryData.CANCELLED) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Order " +id +" Already Cancelled<br/>";
    

                                    }
                                
                             else 
                        if(status.compareTo(OrderHistoryData.SHIPPED) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Order " +id +" Already Shipped. You can't cancel a shipped order.<br/>";
    

                                    }
                                
                             else 
                        if(status.compareTo(OrderHistoryData.PREPROCESSING) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Order " +id +" has been cancelled.<br/>";
    

                                    }
                                
                             else 
                        if(status.compareTo(OrderHistoryData.PARTIALLYSHIPPED) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Order " +id +" Partially Shipped. You can cancel unshipped items, but not the whole order.<br/>";
    

                                    }
                                
                             else 
                        if(status.compareTo(OrderHistoryData.PROCESSING) == 0)
                        
                                    {
                                    
    var orderHistoryEntityInterface: OrderHistoryEntityInterface = OrderHistoryEntityFactory.getInstance()!;
        
        
;
    
orderHistoryEntityInterface!.setStatus(id, this.newStatus);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Order " +id +" has been cancelled.<br/>";
    

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

    var error: string = "Failed to set order status";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "setOrderStatus()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error +"<br/>" +"Exception: " +e +"<br/>";
    
}

}


}
                
            

