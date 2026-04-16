
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
        



import { Method } from "../../java/lang/reflect/Method.js";

    
import { HashMap } from "../../java/util/HashMap.js";

    
import { JspTagException } from "../../javax/servlet/jsp/JspTagException.js";

    
import { BasketHelperFactory } from "../../admin/taghelpers/BasketHelperFactory.js";

    
import { BasketRequestHelperFactory } from "../../admin/taghelpers/BasketRequestHelperFactory.js";

    
import { StoreFrontData } from "../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { BasketData } from "../../org/allbinary/business/user/commerce/inventory/basket/BasketData.js";

    
import { AbResponseHandler } from "../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LicensingException } from "../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { CustomTagSupport } from "../../tags/CustomTagSupport.js";

    

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

export class BasketTag extends CustomTagSupport {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private command: string

    private storeName: string

    private propertiesHashMap: HashMap<any, any>
public constructor (){

            super();
            }


    public setCommand(command: string){
var command = command
this.command= command;
    
}


    public setStoreName(value: string){
var value = value
this.storeName= value;
    
}


                //@Throws(LicensingException::class)
            
    isBasketEmpty(): boolean{

        try {
            
    var anyType: any = new BasketHelperFactory().
                            getInstance(this.propertiesHashMap, this.pageContext)!;
        
        
;
    

    var method: Method = anyType!.constructor.name.getMethod("isBasketEmpty", 
                            null)!;
        
        
;
    

    var emptyBoolean: Boolean = method.invoke(anyType, 
                            null);

                         as Boolean;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return emptyBoolean;

                        ;
    

                //: 
} catch(e) 
            {



                            throw e
}

                //: 
 catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "isBasketEmpty()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}

}


                //@Throws(LicensingException::class)
            
    addItemToBasket(): boolean{

        try {
            
    var anyType: any = new BasketRequestHelperFactory().
                            getInstance(this.propertiesHashMap, this.pageContext)!;
        
        
;
    

    var method: Method = anyType!.constructor.name.getMethod("addItemToBasket", 
                            null)!;
        
        
;
    

    var emptyBoolean: Boolean = method.invoke(anyType, 
                            null);

                         as Boolean;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return emptyBoolean;

                        ;
    

                //: 
} catch(e) 
            {



                            throw e
}

                //: 
 catch(e) 
            {

    var error: string = "Failed to add item from Basket";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "addItemToBasket()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


                //@Throws(LicensingException::class)
            
    removeItemFromBasket(): boolean{

        try {
            
    var anyType: any = new BasketRequestHelperFactory().
                            getInstance(this.propertiesHashMap, this.pageContext)!;
        
        
;
    

    var method: Method = anyType!.constructor.name.getMethod("removeItemFromBasket", 
                            null)!;
        
        
;
    

    var emptyBoolean: Boolean = method.invoke(anyType, 
                            null);

                         as Boolean;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return emptyBoolean;

                        ;
    

                //: 
} catch(e) 
            {



                            throw e
}

                //: 
 catch(e) 
            {

    var error: string = "Failed to remove item from Basket";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "removeItemFromBasket()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


                //@Throws(LicensingException::class)
            
    adjustBasket(): boolean{

        try {
            
    var anyType: any = new BasketRequestHelperFactory().
                            getInstance(this.propertiesHashMap, this.pageContext)!;
        
        
;
    

    var method: Method = anyType!.constructor.name.getMethod("adjustBasket", 
                            null)!;
        
        
;
    

    var emptyBoolean: Boolean = method.invoke(anyType, 
                            null);

                         as Boolean;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return emptyBoolean;

                        ;
    

                //: 
} catch(e) 
            {



                            throw e
}

                //: 
 catch(e) 
            {

    var error: string = "Failed to Adjust Basket";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "adjustBasket()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


                //@Throws(JspTagException::class)
            
    public doStartTag(): number{

        try {
            
                        if(command != 
                                    null
                                )
                        
                                    {
                                    this.propertiesHashMap= new HashMap<any, any>();
    
this.propertiesHashMap!.put(StoreFrontData.getInstance()!.NAME, this.storeName);
    

                        if(command.compareTo(BasketData.INSERT) == 0)
                        
                                    {
                                    
                        if(!this.addItemToBasket();

                        )
                        
                                    {
                                    this.pageContext!.getOut()!.println("Item is not currently being sold.<p/>");
    

                                    }
                                

                                    }
                                
                             else 
                        if(command.compareTo(BasketData.DELETE) == 0)
                        
                                    {
                                    this.removeItemFromBasket();
    

                                    }
                                
                             else 
                        if(command.compareTo(BasketData.ADJUST) == 0)
                        
                                    {
                                    this.adjustBasket();
    

                                    }
                                
                             else 
                        if(command.compareTo(BasketData.ISEMPTY) == 0)
                        
                                    {
                                    
                        if(this.isBasketEmpty())
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.EVAL_BODY_INCLUDE;
    
                             else 
                        if()
                        

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    

                //: 
} catch(e) 
            {
AbResponseHandler.sendJspTagLicensingRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}

                //: 
 catch(e) 
            {
AbResponseHandler.sendJspTagRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}

}


}
                
            

