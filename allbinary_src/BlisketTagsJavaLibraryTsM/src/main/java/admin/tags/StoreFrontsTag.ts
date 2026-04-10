
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

    
import { TagSupport } from "../../javax/servlet/jsp/tagext/TagSupport.js";

    
import { StoreFrontsHelperFactory } from "../../admin/taghelpers/StoreFrontsHelperFactory.js";

    
import { StoreFrontsRequestHelperFactory } from "../../admin/taghelpers/StoreFrontsRequestHelperFactory.js";

    
import { StoreFrontData } from "../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { AbResponseHandler } from "../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LicensingException } from "../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    

export class StoreFrontsTag extends TableTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (){

            super();
            this.setTagHelperFactory(StoreFrontsHelperFactory())
this.setTagRequestHelperFactory(StoreFrontsRequestHelperFactory())
}


                @Throws(LicensingException::class)
            
    generateSelect(): string{

        try {
            
    var anyType: any = {} = this.getTagHelperFactoryInterface()!.getInstance(this.getPropertiesHashMap(), pageContext)!;
        
        


    var method: Method = anyType!::class.getMethod("generateSelect", 
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

    var error: string = "Failed to generate storefronts select";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "generateSelect()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                @Throws(LicensingException::class)
            
    install(): string{

        try {
            
    var anyType: any = {} = this.getTagRequestHelperFactoryInterface()!.getInstance(this.getPropertiesHashMap(), pageContext)!;
        
        


    var method: Method = anyType!::class.getMethod("install", 
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

    var error: string = "Failed to generate storefronts select";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "generateSelect()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                @Throws(LicensingException::class)
            
    sendStoreCreatedEmails(): string{

        try {
            
    var anyType: any = {} = this.getTagRequestHelperFactoryInterface()!.getInstance(this.getPropertiesHashMap(), pageContext)!;
        
        


    var method: Method = anyType!::class.getMethod("sendStoreCreatedEmails", 
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

    var error: string = "Failed to send email";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "sendStoreCreatedEmails()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                @Throws(JspTagException::class)
            
    public doStartTag(): number{

        try {
            
    
                        if(this.isEnabled())
                        
                                    {
                                    
    
                        if(this.getCommand() != 
                                    null
                                )
                        
                                    {
                                    
    var storeFrontData: StoreFrontData = StoreFrontData.getInstance()!;
        
        


    
                        if(this.getCommand()!.compareTo(storeFrontData!.SELECT) == 0)
                        
                                    {
                                    print(this.generateSelect())

                                    }
                                
                             else 
    
                        if(this.getCommand()!.compareTo(storeFrontData!.INSTALL) == 0)
                        
                                    {
                                    put("current", this.getCurrent())
put("total", this.getTotal())

    
                        if(this.getCurrent()!.toInt() == this.getTotal()!.toInt())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TagSupport.EVAL_BODY_INCLUDE;
    

                                    }
                                
this.install()

                                    }
                                
                             else 
    
                        if(this.getCommand()!.compareTo(storeFrontData!.INSTALL_COMPLETE) == 0)
                        
                                    {
                                    this.sendStoreCreatedEmails()

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
sendJspTagLicensingRedirect(this.pageContext, e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}
 catch(e: Exception)
            {
sendJspTagRedirect(this.pageContext, e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}

}


}
                
            

