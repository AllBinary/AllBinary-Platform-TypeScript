
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

    
import { StoreFrontData } from "../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { StoreFrontFactory } from "../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { OrderInterface } from "../../org/allbinary/business/user/commerce/inventory/order/OrderInterface.js";

    
import { ShippingMethodData } from "../../org/allbinary/business/user/commerce/shipping/ShippingMethodData.js";

    
import { WeblisketSession } from "../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TagHelper } from "./TagHelper.js";

export class ShippingHelper extends TagHelper {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private weblisketSession: WeblisketSession

    private storeFrontInterface: StoreFrontInterface

    private propertiesHashMap: HashMap<any, any>

    private pageContext: PageContext

    private request: HttpServletRequest

    private shippingType: string
public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
            var hashMap = hashMap
var pageContext = pageContext
this.propertiesHashMap= propertiesHashMap;
    
this.pageContext= pageContext;
    
this.request= pageContext!.getRequest();

                         as HttpServletRequest;
    

    var storeName: string = hashMap!.get(StoreFrontData.getInstance()!.NAME);

                         as String;
        
        
;
    

                        if(storeName != 
                                    null
                                )
                        
                                    {
                                    this.storeFrontInterface= StoreFrontFactory.getInstance(storeName);
    

                                    }
                                
this.weblisketSession= new WeblisketSession(hashMap, pageContext);
    
this.getFormData();
    
}


    getFormData(){
this.shippingType= request.getParameter(ShippingMethodData.NAME);
    
}


    public setShippingType(): string{

        try {
            
    var success: string = "Successfully Set Shipping Type";
        
        
;
    

    var order: OrderInterface = this.weblisketSession!.getOrder()!;
        
        
;
    
order.setShippingMethod(shippingType);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "setShippingType()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to view Shipping Type";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "setShippingType()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}
                
            

