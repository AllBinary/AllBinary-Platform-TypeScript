
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

    
import { StoreFrontHelperFactory } from "../../admin/taghelpers/StoreFrontHelperFactory.js";

    
import { StoreFrontData } from "../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { AbResponseHandler } from "../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LicensingException } from "../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { CustomTagSupport } from "../../tags/CustomTagSupport.js";

    

export class StoreFrontTag extends CustomTagSupport {
        

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
            
    getCurrentLocation(): string{

        try {
            
    var anyType: any = {} = StoreFrontHelperFactory().
                            getInstance(this.propertiesHashMap, this.pageContext)!;
        
        


    var method: Method = anyType!::class.getMethod("getCurrentLocation", 
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

    var error: string = "Failed to retrieve current location";
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "getCurrentLocation()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(LicensingException::class)
            
    getCurrentHomeLocation(): string{

        try {
            
    var anyType: any = {} = StoreFrontHelperFactory().
                            getInstance(this.propertiesHashMap, this.pageContext)!;
        
        


    var method: Method = anyType!::class.getMethod("getCurrentHomeLocation", 
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

    var error: string = "Failed to retrieve current home location";
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "getCurrentHomeLocation()", e)

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
this.propertiesHashMap!.put(StoreFrontData.getInstance()!.NAME, this.storeName)

                        if(command.compareTo(org.allbinary.globals.GLOBALS2.GETCURRENTLOCATION) == 0)
                        
                                    {
                                    pageContext!.getOut()!.print(this.getCurrentLocation())

                                    }
                                
                             else 
                        if(command.compareTo(org.allbinary.globals.GLOBALS2.GETCURRENTHOMELOCATION) == 0)
                        
                                    {
                                    pageContext!.getOut()!.print(this.getCurrentHomeLocation())

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
                
            

