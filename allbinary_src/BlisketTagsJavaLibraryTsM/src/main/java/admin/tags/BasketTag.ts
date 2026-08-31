
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
        
import { Method } from '../../java/lang/reflect/Method.js';
      //not GWT import const Method = globalThis.java.lang.reflect.Method;

      
import { HashMap } from '../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { JspTagException } from '../../javax/servlet/jsp/JspTagException.js';
      //not GWT import const JspTagException = globalThis.javax.servlet.jsp.JspTagException;

      
import { BasketHelperFactory } from '../../admin/taghelpers/BasketHelperFactory.js';
      //not GWT import const BasketHelperFactory = globalThis.admin.taghelpers.BasketHelperFactory;

      
import { BasketRequestHelperFactory } from '../../admin/taghelpers/BasketRequestHelperFactory.js';
      //not GWT import const BasketRequestHelperFactory = globalThis.admin.taghelpers.BasketRequestHelperFactory;

      
import { StoreFrontData } from '../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      //not GWT import const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
import { BasketData } from '../../org/allbinary/business/user/commerce/inventory/basket/BasketData.js';
      //not GWT import const BasketData = globalThis.org.allbinary.business.user.commerce.inventory.basket.BasketData;

      
import { AbResponseHandler } from '../../org/allbinary/logic/communication/http/request/AbResponseHandler.js';
      //not GWT import const AbResponseHandler = globalThis.org.allbinary.logic.communication.http.request.AbResponseHandler;

      
//not plain js import { LogUtil } from '../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { LicensingException } from '../../org/allbinary/logic/system/security/licensing/LicensingException.js';
      //not GWT import const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;

      
import { CustomTagSupport } from '../../tags/CustomTagSupport.js';
      //not GWT import const CustomTagSupport = globalThis.tags.CustomTagSupport;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasketTag extends CustomTagSupport {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private command: string;

    private storeName: string;

    private propertiesHashMap: HashMap<any, any>;

public constructor (){

            super();
        }


    public setCommand(command: string){
this.command= command;
    
}


    public setStoreName(value: string){
this.storeName= value;
    
}


                //@Throws(LicensingException.constructor)
            
    isBasketEmpty(): boolean{

        try {
            
    var anyType: any = new BasketHelperFactory().getInstance(this.propertiesHashMap, this.pageContext)!;;
    

    var method: Method = anyType!.constructor.name.getMethod("isBasketEmpty", 
                            null)!;;
    

    var emptyBoolean: Boolean = method.invoke(anyType, 
                            null) as Boolean;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return emptyBoolean.valueOf();;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

                //: 
/* catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "isBasketEmpty()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}
*/
}


                //@Throws(LicensingException.constructor)
            
    addItemToBasket(): boolean{

        try {
            
    var anyType: any = new BasketRequestHelperFactory().getInstance(this.propertiesHashMap, this.pageContext)!;;
    

    var method: Method = anyType!.constructor.name.getMethod("addItemToBasket", 
                            null)!;;
    

    var emptyBoolean: Boolean = method.invoke(anyType, 
                            null) as Boolean;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return emptyBoolean.valueOf();;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

                //: 
/* catch(e) 
            {

    var error: string = "Failed to add item from Basket";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "addItemToBasket()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}
*/
}


                //@Throws(LicensingException.constructor)
            
    removeItemFromBasket(): boolean{

        try {
            
    var anyType: any = new BasketRequestHelperFactory().getInstance(this.propertiesHashMap, this.pageContext)!;;
    

    var method: Method = anyType!.constructor.name.getMethod("removeItemFromBasket", 
                            null)!;;
    

    var emptyBoolean: Boolean = method.invoke(anyType, 
                            null) as Boolean;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return emptyBoolean.valueOf();;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

                //: 
/* catch(e) 
            {

    var error: string = "Failed to remove item from Basket";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "removeItemFromBasket()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}
*/
}


                //@Throws(LicensingException.constructor)
            
    adjustBasket(): boolean{

        try {
            
    var anyType: any = new BasketRequestHelperFactory().getInstance(this.propertiesHashMap, this.pageContext)!;;
    

    var method: Method = anyType!.constructor.name.getMethod("adjustBasket", 
                            null)!;;
    

    var emptyBoolean: Boolean = method.invoke(anyType, 
                            null) as Boolean;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return emptyBoolean.valueOf();;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

                //: 
/* catch(e) 
            {

    var error: string = "Failed to Adjust Basket";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "adjustBasket()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}
*/
}


                //@Throws(JspTagException.constructor)
            
    public doStartTag(): number{

        try {
            
                        if(this.command != 
                                    null
                                )
                        
                                    {
                                    this.propertiesHashMap= new HashMap<any, any>();
    
this.propertiesHashMap!.put(StoreFrontData.getInstance()!.NAME, this.storeName);
    

                        if(this.command.compareTo(BasketData.INSERT) == 0)
                        
                                    {
                                    
                        if(!this.addItemToBasket())
                        
                                    {
                                    this.pageContext!.getOut()!.println("Item is not currently being sold.<p/>");
    

                                    }
                                

                                    }
                                
                             else 
                        if(this.command.compareTo(BasketData.DELETE) == 0)
                        
                                    {
                                    this.removeItemFromBasket();
    

                                    }
                                
                             else 
                        if(this.command.compareTo(BasketData.ADJUST) == 0)
                        
                                    {
                                    this.adjustBasket();
    

                                    }
                                
                             else 
                        if(this.command.compareTo(BasketData.ISEMPTY) == 0)
                        
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
/* catch(e) 
            {
AbResponseHandler.sendJspTagRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}
*/
}


}



