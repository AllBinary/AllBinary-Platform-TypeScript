
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
        



import { Method } from "../../../../java/lang/reflect/Method.js";

    
import { JspTagException } from "../../../../javax/servlet/jsp/JspTagException.js";

    
import { OrderHistoryData } from "../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistoryData.js";

    
import { AbResponseHandler } from "../../../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LicensingException } from "../../../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { OrderHistoryHelperFactory } from "../../../../taghelpers/OrderHistoryHelperFactory.js";

    
import { StoreValidationTransformTag } from "../../../../tags/StoreValidationTransformTag.js";

    

export class OrderHistoryTag extends StoreValidationTransformTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private status: string
public constructor (){

            super();
            }


    public setStatus(value: string){
var value = value
this.status= value
}


                //@Throws(LicensingException::class)
            
    setOrderStatus(): string{

        try {
            
    var anyType: any = {} = OrderHistoryHelperFactory().
                            getInstance(this.getPropertiesHashMap(), pageContext)!;
        
        


    var helperClass: KClass<*> = anyType!::class!;
        
        


    var method: Method = helperClass!.getMethod("setOrderStatus", 
                            null)!;
        
        


    var result: string = method.invoke(anyType, 
                            null) as String;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
} catch(e: LicensingException)
            {



                            throw e
}
 catch(e: Exception)
            {

    var error: string = "Failed to view order table";
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "setOrderStatus()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(JspTagException::class)
            
    public doStartTag(): number{

        try {
            this.this.setName("Basic Order History View")
this.this.setObjectFile("views.generic.order.history.ValidationView")

                        if(this.getCommand() != 
                                    null
                                )
                        
                                    {
                                    
                        if(this.getCommand()!.compareTo(OrderHistoryData.SETSTATUS) == 0)
                        
                                    {
                                    this.getPropertiesHashMap()!.put(OrderHistoryData.STATUS, this.status)
pageContext!.getOut()!.print(this.setOrderStatus())

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.VIEW) == 0)
                        
                                    {
                                    
                                    }
                                
                        else {
                            


                            throw Error("No Such View Command: " +this.getCommand())

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.doStartTag();
    

                                    }
                                



                            throw Error("Command Null")
} catch(e: LicensingException)
            {
AbResponseHandler.sendJspTagLicensingRedirect(this.pageContext, e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}
 catch(e: Exception)
            {
AbResponseHandler.sendJspTagRedirect(this.pageContext, e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}

}


}
                
            

