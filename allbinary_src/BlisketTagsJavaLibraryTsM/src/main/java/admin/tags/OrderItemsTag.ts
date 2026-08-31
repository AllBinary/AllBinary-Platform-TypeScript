
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

        


            import { Class } from '../../java/lang/Class.js';
        
            import { Exception } from '../../java/lang/Exception.js';
        
import { Method } from '../../java/lang/reflect/Method.js';
      //not GWT import const Method = globalThis.java.lang.reflect.Method;

      
import { JspTagException } from '../../javax/servlet/jsp/JspTagException.js';
      //not GWT import const JspTagException = globalThis.javax.servlet.jsp.JspTagException;

      
import { OrderItemsHelperFactory } from '../../admin/taghelpers/OrderItemsHelperFactory.js';
      //not GWT import const OrderItemsHelperFactory = globalThis.admin.taghelpers.OrderItemsHelperFactory;

      
import { OrderItemsRequestHelperFactory } from '../../admin/taghelpers/OrderItemsRequestHelperFactory.js';
      //not GWT import const OrderItemsRequestHelperFactory = globalThis.admin.taghelpers.OrderItemsRequestHelperFactory;

      
import { OrderHistoryData } from '../../org/allbinary/business/user/commerce/inventory/order/OrderHistoryData.js';
      //not GWT import const OrderHistoryData = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderHistoryData;

      
import { AbResponseHandler } from '../../org/allbinary/logic/communication/http/request/AbResponseHandler.js';
      //not GWT import const AbResponseHandler = globalThis.org.allbinary.logic.communication.http.request.AbResponseHandler;

      
//not plain js import { LogUtil } from '../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { LicensingException } from '../../org/allbinary/logic/system/security/licensing/LicensingException.js';
      //not GWT import const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TableTag } from './TableTag.js';
//not GWT import const TableTag = globalThis.admin.tags.TableTag;

                
export class OrderItemsTag extends TableTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private status: string;

public constructor (){

            super();
        this.setTagHelperFactory(new OrderItemsHelperFactory());
    
this.setTagRequestHelperFactory(new OrderItemsRequestHelperFactory());
    
}


    public setStatus(value: string){
this.status= value;
    
}


                //@Throws(LicensingException.constructor)
            
    setOrderStatus(): string{

        try {
            
    var anyType: any = new OrderItemsRequestHelperFactory().getInstance(this.getPropertiesHashMap(), this.pageContext)!;;
    

                        if(this.status == 
                                    null
                                )
                        
                                    {
                                    
    var helperClass: Function = anyType!.constructor!;;
    

    var method: Method = helperClass!.getMethod("setOrderStatus", 
                            null)!;;
    

    var result: string = method.invoke(anyType, 
                            null) as string;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                                    }
                                
                        else {
                            
    var helperClass: Function = anyType!.constructor!;;
    

    var methodParams: Function[] = 
                                                        [
                                                            this.status.constructor
                                                        ];;
    

    var method: Method = helperClass!.getMethod("setOrderStatus", methodParams)!;;
    

    var methodArgs: any[] = 
                                                        [
                                                            this.status
                                                        ];;
    

    var result: string = method.invoke(anyType, methodArgs) as string;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                        }
                            

                //: 
} catch(e) 
            {



                            throw e;
                    
}

                //: 
/* catch(e) 
            {

    var error: string = "Failed to set Order status to: " +this.status;;
    

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
            
                        if(this.isEnabled())
                        
                                    {
                                    
                        if(this.getCommand() != 
                                    null
                                )
                        
                                    {
                                    this.getPropertiesHashMap()!.put(OrderHistoryData.STATUS, this.status);
    

                        if(this.getCommand()!.compareTo(OrderHistoryData.SETSTATUS) == 0)
                        
                                    {
                                    this.pageContext!.getOut()!.print(this.setOrderStatus());
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.doStartTag();;
    

                        }
                            

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



