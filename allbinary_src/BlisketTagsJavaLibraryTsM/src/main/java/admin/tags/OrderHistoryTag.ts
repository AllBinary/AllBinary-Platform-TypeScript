
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

      
import { HttpServletRequest } from '../../javax/servlet/http/HttpServletRequest.js';
      //not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { JspTagException } from '../../javax/servlet/jsp/JspTagException.js';
      //not GWT import const JspTagException = globalThis.javax.servlet.jsp.JspTagException;

      
import { OrderHistoryHelperFactory } from '../../admin/taghelpers/OrderHistoryHelperFactory.js';
      //not GWT import const OrderHistoryHelperFactory = globalThis.admin.taghelpers.OrderHistoryHelperFactory;

      
import { OrderHistoryRequestHelperFactory } from '../../admin/taghelpers/OrderHistoryRequestHelperFactory.js';
      //not GWT import const OrderHistoryRequestHelperFactory = globalThis.admin.taghelpers.OrderHistoryRequestHelperFactory;

      
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

                
export class OrderHistoryTag extends TableTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private status: string;

public constructor (){

            super();
        this.setTagHelperFactory(new OrderHistoryHelperFactory());
    
this.setTagRequestHelperFactory(new OrderHistoryRequestHelperFactory());
    
}


    public setStatus(value: string){
this.status= value;
    
}


                //@Throws(LicensingException.constructor)
            
    setOrderStatus(): string{

        try {
            
    var request: HttpServletRequest = this.pageContext!.getRequest() as HttpServletRequest;;
    

    var anyType: any = new OrderHistoryRequestHelperFactory().getInstance(this.getPropertiesHashMap(), pageContext)!;;
    

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

    var error: string = "Failed to set Order Status";;
    

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
                                    this.setOrderStatus();
    

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



