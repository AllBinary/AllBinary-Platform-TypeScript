
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

    
import { TagSupport } from "../../javax/servlet/jsp/tagext/TagSupport.js";

    
import { OrderHelperFactory } from "../../admin/taghelpers/OrderHelperFactory.js";

    
import { StoreFrontData } from "../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { PaymentGatewayData } from "../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayData.js";

    
import { AbResponseHandler } from "../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LicensingException } from "../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { CustomTagSupport } from "../../tags/CustomTagSupport.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OrderTag extends CustomTagSupport {
        

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
            
    process(): string{

        try {
            
    var anyType: any = new OrderHelperFactory().
                            getInstance(this.propertiesHashMap, this.pageContext)!;
        
        
;
    

    var helperClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = helperClass!.getMethod(commonStrings!.PROCESS, 
                            null)!;
        
        
;
    

    var result: string = method.invoke(anyType, 
                            null);

                         as String;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {



                            throw e
}

                //: 
 catch(e) 
            {

    var error: string = "Failed to Process Order: ";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.PROCESS, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(LicensingException::class)
            
    setPaymentGateway(): Boolean{

        try {
            
    var anyType: any = new OrderHelperFactory().
                            getInstance(this.propertiesHashMap, this.pageContext)!;
        
        
;
    

    var addressHelperClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = addressHelperClass!.getMethod("setPaymentGateway", 
                            null)!;
        
        
;
    

    var result: Boolean = method.invoke(anyType, 
                            null);

                         as Boolean;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {



                            throw e
}

                //: 
 catch(e) 
            {

    var error: string = "Failed to setPaymentGateway for Order";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "setPaymentGateway()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


                //@Throws(JspTagException::class)
            
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
 catch(e) 
            {
AbResponseHandler.sendJspTagRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}

}


}
                
            

