
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

      
import { HashMap } from '../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { JspTagException } from '../../javax/servlet/jsp/JspTagException.js';
      //not GWT import const JspTagException = globalThis.javax.servlet.jsp.JspTagException;

      
import { TagSupport } from '../../javax/servlet/jsp/tagext/TagSupport.js';
      //not GWT import const TagSupport = globalThis.javax.servlet.jsp.tagext.TagSupport;

      
import { OrderHelperFactory } from '../../admin/taghelpers/OrderHelperFactory.js';
      //not GWT import const OrderHelperFactory = globalThis.admin.taghelpers.OrderHelperFactory;

      
import { StoreFrontData } from '../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      //not GWT import const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
import { PaymentGatewayData } from '../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayData.js';
      //not GWT import const PaymentGatewayData = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.PaymentGatewayData;

      
import { AbResponseHandler } from '../../org/allbinary/logic/communication/http/request/AbResponseHandler.js';
      //not GWT import const AbResponseHandler = globalThis.org.allbinary.logic.communication.http.request.AbResponseHandler;

      
//not plain js import { LogUtil } from '../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { LicensingException } from '../../org/allbinary/logic/system/security/licensing/LicensingException.js';
      //not GWT import const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;

      
import { CustomTagSupport } from '../../tags/CustomTagSupport.js';
      //not GWT import const CustomTagSupport = globalThis.tags.CustomTagSupport;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OrderTag extends CustomTagSupport {
        

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
            
    process(): string{

        try {
            
    var anyType: any = new OrderHelperFactory().getInstance(this.propertiesHashMap, this.pageContext)!;;
    

    var helperClass: Function = anyType!.constructor!;;
    

    var method: Method = helperClass!.getMethod(commonStrings!.PROCESS, 
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

    var error: string = "Failed to Process Order: ";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.PROCESS, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}
*/
}


                //@Throws(LicensingException.constructor)
            
    setPaymentGateway(): Boolean{

        try {
            
    var anyType: any = new OrderHelperFactory().getInstance(this.propertiesHashMap, this.pageContext)!;;
    

    var addressHelperClass: Function = anyType!.constructor!;;
    

    var method: Method = addressHelperClass!.getMethod("setPaymentGateway", 
                            null)!;;
    

    var result: Boolean = method.invoke(anyType, 
                            null) as Boolean;;
    



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

    var error: string = "Failed to setPaymentGateway for Order";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "setPaymentGateway()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
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
    

                        if(this.command.compareTo(org.allbinary.globals.GLOBALS2.PROCESS) == 0)
                        
                                    {
                                    this.process();
    

                                    }
                                
                             else 
                        if(this.command.compareTo(PaymentGatewayData.NAME.toString()) == 0)
                        
                                    {
                                    
                        if(this.setPaymentGateway() == Boolean.TRUE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TagSupport.EVAL_BODY_INCLUDE;
    

                                    }
                                

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TagSupport.SKIP_BODY;
    

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



