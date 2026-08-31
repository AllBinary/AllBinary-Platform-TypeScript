
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

      
import { StoreFrontData } from '../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      //not GWT import const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
import { StoreFrontFactory } from '../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      //not GWT import const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
import { StoreFrontInterface } from '../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      //not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { OrderInterface } from '../../org/allbinary/business/user/commerce/inventory/order/OrderInterface.js';
      //not GWT import const OrderInterface = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderInterface;

      
import { ShippingMethodData } from '../../org/allbinary/business/user/commerce/shipping/ShippingMethodData.js';
      //not GWT import const ShippingMethodData = globalThis.org.allbinary.business.user.commerce.shipping.ShippingMethodData;

      
import { WeblisketSession } from '../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
      //not GWT import const WeblisketSession = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSession;

      
//not plain js import { LogUtil } from '../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TagHelper } from './TagHelper.js';

export class ShippingHelper extends TagHelper {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private weblisketSession: WeblisketSession;

    private storeFrontInterface: StoreFrontInterface;

    private propertiesHashMap: HashMap<any, any>;

    private pageContext: PageContext;

    private request: HttpServletRequest;

    private shippingType: string;

public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        this.pageContext= pageContext;
    
this.request= pageContext!.getRequest() as HttpServletRequest;
    

    var storeName: string = hashMap!.get(StoreFrontData.getInstance()!.NAME) as string;;
    

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
this.shippingType= this.request.getParameter(ShippingMethodData.NAME);
    
}


    public setShippingType(): string{

        try {
            
    var success: string = "Successfully Set Shipping Type";;
    

    var order: OrderInterface = this.weblisketSession!.getOrder()!;;
    
order.setShippingMethod(this.shippingType);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "setShippingType()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to view Shipping Type";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "setShippingType()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}



