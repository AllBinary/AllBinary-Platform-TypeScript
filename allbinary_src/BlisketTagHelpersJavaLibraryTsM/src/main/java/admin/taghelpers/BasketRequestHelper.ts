
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
        



            import HashMap from "@ohos.util.HashMap";
        

//import { HashMap } from "../../java/util/HashMap.js";

    
import { HttpServletRequest } from "../../javax/servlet/http/HttpServletRequest.js";

    
import { PageContext } from "../../javax/servlet/jsp/PageContext.js";

    
import { StoreFront } from "../../org/allbinary/business/context/modules/storefront/StoreFront.js";

    
import { StoreFrontData } from "../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { StoreFrontFactory } from "../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { BasketData } from "../../org/allbinary/business/user/commerce/inventory/basket/BasketData.js";

    
import { BasketInterface } from "../../org/allbinary/business/user/commerce/inventory/basket/BasketInterface.js";

    
import { BasicItemData } from "../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js";

    
import { InventoryEntityFactory } from "../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js";

    
import { WeblisketSession } from "../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class BasketRequestHelper extends TagHelper {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly weblisketSession: WeblisketSession

    private readonly storeFrontInterface: StoreFrontInterface

    private readonly propertiesHashMap: HashMap<any, any>

    private readonly pageContext: PageContext

    private readonly request: HttpServletRequest

    private id: string

    private num: string

    private readonly MAX: number = 200;
        
        
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
    

                        if(storeName != 
                                    null
                                )
                        
                                    {
                                    this.storeFrontInterface= StoreFrontFactory.getInstance(storeName);
    

                                    }
                                
                        else {
                            this.storeFrontInterface= new StoreFront();
    

                        }
                            
this.weblisketSession= new WeblisketSession(propertiesHashMap, pageContext);
    
this.getFormData();
    
}


    getFormData(){
this.id= request.getParameter(BasicItemData.ID);
    
this.num= request.getParameter(BasketData.ITEMTOTALINBASKET);
    
}


    public addItemToBasket(): Boolean{

        try {
            
                        if(id != 
                                    null
                                 && num != 
                                    null
                                )
                        
                                    {
                                    
    var basket: BasketInterface = this.weblisketSession!.getOrder()!.getBasket()!;
        
        
;
    

                        if(InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!.getItem(id) == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                
basket.addItem(id, num);
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF("Successfully added item to Basket", this, "addItemToBasket()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "addItemToBasket()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public removeItemFromBasket(): Boolean{

        try {
            
                        if(id != 
                                    null
                                )
                        
                                    {
                                    
    var basket: BasketInterface = this.weblisketSession!.getOrder()!.getBasket()!;
        
        
;
    
basket.removeItem(id);
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF("Successfully removed item from Basket", this, "removeItemFromBasket()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "removeItemFromBasket()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public adjustBasket(): Boolean{

        try {
            
    var basket: BasketInterface = this.weblisketSession!.getOrder()!.getBasket()!;
        
        
;
    

                        if(id != 
                                    null
                                 && num != 
                                    null
                                )
                        basket.adjustItem(id, num);

                        

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF("Successfull Adjusted Basket", this, "adjustBasket()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "adjustBasket()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


}
                
            

