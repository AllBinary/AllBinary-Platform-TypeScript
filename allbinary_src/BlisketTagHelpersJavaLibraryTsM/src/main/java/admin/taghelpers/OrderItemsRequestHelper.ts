
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

    
import { OrderHistoryData } from "../../org/allbinary/business/user/commerce/inventory/order/OrderHistoryData.js";

    
import { ShippingMethodData } from "../../org/allbinary/business/user/commerce/shipping/ShippingMethodData.js";

    
import { OrderItemsEntityFactory } from "../../org/allbinary/data/tables/user/commerce/inventory/order/OrderItemsEntityFactory.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class OrderItemsRequestHelper extends TagHelper {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private request: HttpServletRequest

    private id: string

    private groupId: string

    private status: string
public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
            var hashMap = hashMap
var pageContext = pageContext
this.request= pageContext!.getRequest();

                         as HttpServletRequest;
    
this.getFormData();
    
}


    getFormData(){
this.id= request.getParameter(OrderData.ID);
    
this.groupId= request.getParameter(ShippingMethodData.GROUP);
    
this.status= request.getParameter(OrderHistoryData.STATUS);
    
}


    public setOrderStatus(newStatus: string): string{
var newStatus = newStatus

        try {
            
                        if(newStatus == 
                                    null
                                )
                        newStatus= this.status

    var success: string = "Status successfully set to: " +newStatus;
        
        
;
    
OrderItemsEntityFactory.getInstance()!.setStatus(id, groupId, newStatus);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "setOrderStatus(newStatus)");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to view order table";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "setOrderStatus(newStatus)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public setOrderStatus(): string{

        try {
            
    var success: string = "Status successfully set to: " +this.status;
        
        
;
    
OrderItemsEntityFactory.getInstance()!.setStatus(id, groupId, this.status);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "setOrderStatus(newStatus)");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to view order table";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "setOrderStatus(newStatus)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}
                
            

