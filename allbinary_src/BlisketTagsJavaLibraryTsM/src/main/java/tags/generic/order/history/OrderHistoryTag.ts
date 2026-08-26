
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
        



            import { Class } from '../../../../java/lang/Class.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { Method } from '../../../../java/lang/reflect/Method.js';
      const Method = globalThis.java.lang.reflect.Method;

      
//not game specific package import { JspTagException } from '../../../../javax/servlet/jsp/JspTagException.js';
      const JspTagException = globalThis.javax.servlet.jsp.JspTagException;

      
//not game specific package import { OrderHistoryData } from '../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistoryData.js';
      const OrderHistoryData = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderHistoryData;

      
//not game specific package import { AbResponseHandler } from '../../../../org/allbinary/logic/communication/http/request/AbResponseHandler.js';
      const AbResponseHandler = globalThis.org.allbinary.logic.communication.http.request.AbResponseHandler;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { LicensingException } from '../../../../org/allbinary/logic/system/security/licensing/LicensingException.js';
      const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;

      
//not game specific package import { OrderHistoryHelperFactory } from '../../../../taghelpers/OrderHistoryHelperFactory.js';
      const OrderHistoryHelperFactory = globalThis.taghelpers.OrderHistoryHelperFactory;

      
//not game specific package import { StoreValidationTransformTag } from '../../../../tags/StoreValidationTransformTag.js';
      const StoreValidationTransformTag = globalThis.tags.StoreValidationTransformTag;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OrderHistoryTag extends StoreValidationTransformTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private status: string;

public constructor (){

            super();
        }


    public setStatus(value: string){
this.status= value;
    
}


                //@Throws(LicensingException.constructor)
            
    setOrderStatus(): string{

        try {
            
    var anyType: any = new OrderHistoryHelperFactory().getInstance(this.getPropertiesHashMap(), pageContext)!;;
    

    var helperClass: Function = anyType!.constructor!;;
    

    var method: Method = helperClass!.getMethod("setOrderStatus", 
                            null)!;;
    

    var result: string = method.invoke(anyType, 
                            null) as string;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

                //: 
/* catch(e) 
            {

    var error: string = "Failed to view order table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "setOrderStatus()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}
*/
}


                //@Throws(JspTagException.constructor)
            
    public doStartTag(): number{

        try {
            this.setName("Basic Order History View");
    
this.setObjectFile("views.generic.order.history.ValidationView");
    

                        if(this.getCommand() != 
                                    null
                                )
                        
                                    {
                                    
                        if(this.getCommand()!.compareTo(OrderHistoryData.SETSTATUS) == 0)
                        
                                    {
                                    this.getPropertiesHashMap()!.put(OrderHistoryData.STATUS, this.status);
    
pageContext!.getOut()!.print(this.setOrderStatus());
    

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.VIEW) == 0)
                        
                                    {
                                    
                                    }
                                
                        else {
                            


                            throw new Exception("No Such View Command: " +this.getCommand());
                    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.doStartTag();;
    

                                    }
                                



                            throw new Exception("Command Null");
                    

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
                
            

