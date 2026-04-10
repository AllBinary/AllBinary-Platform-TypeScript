
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

    
import { ShippingHelperFactory } from "../../admin/taghelpers/ShippingHelperFactory.js";

    
import { StoreFrontData } from "../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { AbResponseHandler } from "../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LicensingException } from "../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { CustomTagSupport } from "../../tags/CustomTagSupport.js";

    

export class ShippingTag extends CustomTagSupport {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private command: string

    private storeName: string

    private propertiesHashMap: HashMap<Any, Any>
public constructor (){

            super();
            }


    public setCommand(command: string){
var command = command
this.command= command
}


    public setStoreName(value: string){
var value = value
this.storeName= value
}


                //@Throws(LicensingException::class)
            
    setShippingType(): string{

        try {
            
    var anyType: any = {} = ShippingHelperFactory().
                            getInstance(propertiesHashMap, this.pageContext)!;
        
        


    var addressHelperClass: KClass<*> = anyType!::class!;
        
        


    var method: Method = addressHelperClass!.getMethod("setShippingType", 
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

    var error: string = "Failed to view Shipping Type";
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "setShippingType()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(JspTagException::class)
            
    public doStartTag(): number{

        try {
            
                        if(command != 
                                    null
                                )
                        
                                    {
                                    this.propertiesHashMap= HashMap<Any, Any>()
propertiesHashMap!.put(StoreFrontData.getInstance()!.NAME, this.storeName)

                        if(command.compareTo(org.allbinary.globals.GLOBALS2.SETSHIPPINGTYPE) == 0)
                        
                                    {
                                    this.setShippingType()

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
                
            

