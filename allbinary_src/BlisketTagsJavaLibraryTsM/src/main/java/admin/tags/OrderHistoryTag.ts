
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

    
import { HttpServletRequest } from "../../javax/servlet/http/HttpServletRequest.js";

    
import { JspTagException } from "../../javax/servlet/jsp/JspTagException.js";

    
import { OrderHistoryHelperFactory } from "../../admin/taghelpers/OrderHistoryHelperFactory.js";

    
import { OrderHistoryRequestHelperFactory } from "../../admin/taghelpers/OrderHistoryRequestHelperFactory.js";

    
import { OrderHistoryData } from "../../org/allbinary/business/user/commerce/inventory/order/OrderHistoryData.js";

    
import { AbResponseHandler } from "../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LicensingException } from "../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    

export class OrderHistoryTag extends TableTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private status: string
public constructor (){

            super();
            this.setTagHelperFactory(new OrderHistoryHelperFactory());
    
this.setTagRequestHelperFactory(new OrderHistoryRequestHelperFactory());
    
}


    public setStatus(value: string){
var value = value
this.status= value;
    
}


                //@Throws(LicensingException::class)
            
    setOrderStatus(): string{

        try {
            
    var request: HttpServletRequest = this.pageContext!.getRequest();

                         as HttpServletRequest;
        
        
;
    

    var anyType: any = new OrderHistoryRequestHelperFactory().
                            getInstance(this.getPropertiesHashMap(), pageContext)!;
        
        
;
    

                        if(this.status == 
                                    null
                                )
                        
                                    {
                                    
    var helperClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = helperClass!.getMethod("setOrderStatus", 
                            null)!;
        
        
;
    

    var result: string = method.invoke(anyType, 
                            null);

                         as String;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                                    }
                                
                        else {
                            
    var helperClass: Function = anyType!constructor!;
        
        
;
    

    var methodParams: Function[] = 
                                                        [
                                                            this.status.constructor
                                                        ];
        
        
;
    

    var method: Method = helperClass!.getMethod("setOrderStatus", methodParams)!;
        
        
;
    

    var methodArgs: any[] = 
                                                        [
                                                            this.status
                                                        ];
        
        
;
    

    var result: string = method.invoke(anyType, methodArgs);

                         as String;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                        }
                            

                //: 
} catch(e) 
            {



                            throw e
}

                //: 
 catch(e) 
            {

    var error: string = "Failed to set Order Status";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "setOrderStatus()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(JspTagException::class)
            
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
                        return super.doStartTag();

                        ;
    

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
 catch(e) 
            {
AbResponseHandler.sendJspTagRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}

}


}
                
            

