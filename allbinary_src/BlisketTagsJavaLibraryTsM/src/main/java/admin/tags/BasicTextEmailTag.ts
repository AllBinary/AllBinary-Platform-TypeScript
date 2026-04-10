
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

    
import { BasicTextEmailHelperFactory } from "../../admin/taghelpers/BasicTextEmailHelperFactory.js";

    
import { AbResponseHandler } from "../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CustomTagSupport } from "../../tags/CustomTagSupport.js";

    

export class BasicTextEmailTag extends CustomTagSupport {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private subject: string

    private body: string
public constructor (){

            super();
            }


    public setSubject(value: string){
var value = value
this.subject= value
}


    public setBody(value: string){
var value = value
this.body= value
}


    public send(): string{

        try {
            
    var propertiesHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

propertiesHashMap!.put("Subject", this.subject)
propertiesHashMap!.put("Body", this.body)

    var anyType: any = {} = BasicTextEmailHelperFactory().
                            getInstance(propertiesHashMap, this.pageContext)!;
        
        


    var method: Method = anyType!::class.getMethod("send", 
                            null)!;
        
        

method.invoke(anyType, 
                            null)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Email Sent";
    
} catch(e: Exception)
            {

    var error: string = "Failed to Send Email.";
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "send()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(JspTagException::class)
            
    public doStartTag(): number{

        try {
            this.pageContext!.getOut()!.print(this.send())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
} catch(e: Exception)
            {
AbResponseHandler.sendJspTagRedirect(this.pageContext, e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}

}


}
                
            

