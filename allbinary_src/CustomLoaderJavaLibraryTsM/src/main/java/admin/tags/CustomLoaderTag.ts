
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

    
import { CustomLoaderHelperFactory } from "../../admin/taghelpers/CustomLoaderHelperFactory.js";

    
import { AbResponseHandler } from "../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LicensingException } from "../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { CustomTagSupport } from "../../tags/CustomTagSupport.js";

    

export class CustomLoaderTag extends CustomTagSupport {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private command: string

    private webappPath: string

    private propertiesHashMap: HashMap<Any, Any>
public constructor (){

            super();
            }


    public setCommand(command: string){
var command = command
this.command= command
}


    public setWebappPath(value: string){
var value = value
this.webappPath= value
}


                //@Throws(LicensingException::class)
            
    setCustomLoaderWebappPath(){

        try {
            
    var anyType: any = {} = CustomLoaderHelperFactory().
                            getInstance(this.propertiesHashMap, pageContext)!;
        
        


    var helperClass: KClass<*> = anyType!::class!;
        
        


    var methodParams: KClass<*>[] = 
                                                        [
                                                            this.webappPath!.::class
                                                        ];
        
        


    var methodArgs: any = {}[] = 
                                                        [
                                                            this.webappPath
                                                        ];
        
        


    var setMethod: Method = helperClass!.getMethod("setWebappPath", methodParams)!;
        
        

setMethod!.invoke(anyType, methodArgs)
} catch(e: LicensingException)
            {



                            throw e
}
 catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "setCustomLoaderWebappPath()", e)

                                    }
                                
}

}


                //@Throws(JspTagException::class)
            
    public doStartTag(): number{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.START, this, "doStartTag()")

                                    }
                                

                        if(command != 
                                    null
                                )
                        
                                    {
                                    this.propertiesHashMap= HashMap<Any, Any>()

                        if(command.compareTo(org.allbinary.globals.GLOBALS2.SET) == 0)
                        
                                    {
                                    this.setCustomLoaderWebappPath()

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
                
            

