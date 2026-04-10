
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

    
import { JspTagException } from "../../javax/servlet/jsp/JspTagException.js";

    
import { BillingAddressHelperFactory } from "../../admin/taghelpers/BillingAddressHelperFactory.js";

    
import { BillingAddressData } from "../../org/allbinary/business/user/address/BillingAddressData.js";

    
import { AbResponseHandler } from "../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LicensingException } from "../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    

export class BillingAddressTag extends TableTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private value: string
public constructor (){

            super();
            this.this.setTagHelperFactory(BillingAddressHelperFactory())
this.this.setTagRequestHelperFactory(BillingAddressHelperFactory())
}


    public setValue(value: string){
var value = value
this.value= value
}


                //@Throws(LicensingException::class)
            
    set(): string{

        try {
            
    var anyType: any = {} = BillingAddressHelperFactory().
                            getInstance(this.getPropertiesHashMap(), this.pageContext)!;
        
        


    var addressHelperClass: KClass<*> = anyType!::class!;
        
        


    var method: Method = addressHelperClass!.getMethod("set", 
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

    var error: string = "Failed to set billing Address";
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "set()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(LicensingException::class)
            
    setToShippingAddress(): string{

        try {
            
    var anyType: any = {} = BillingAddressHelperFactory().
                            getInstance(this.getPropertiesHashMap(), this.pageContext)!;
        
        


    var addressHelperClass: KClass<*> = anyType!::class!;
        
        


    var method: Method = addressHelperClass!.getMethod("setToShippingAddress", 
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

    var error: string = "Failed to Set Billing address to Shipping Address";
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "setToShippingAddress()", e)

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
                                    
                        if(this.getCommand()!.compareTo(BillingAddressData.SELECT) == 0)
                        
                                    {
                                    set()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.EVAL_BODY_INCLUDE;
    

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(BillingAddressData.SETTOSHIPPINGADDRESS) == 0)
                        
                                    {
                                    setToShippingAddress()

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.doStartTag();
    

                        }
                            

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
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
                
            

