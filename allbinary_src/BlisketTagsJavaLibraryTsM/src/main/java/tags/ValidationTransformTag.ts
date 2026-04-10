
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
        



import { Method } from "../java/lang/reflect/Method.js";

    
import { HttpServletRequest } from "../javax/servlet/http/HttpServletRequest.js";

    
import { JspTagException } from "../javax/servlet/jsp/JspTagException.js";

    
import { AbResponseHandler } from "../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LogUtil } from "../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../org/allbinary/logic/string/StringMaker.js";

    
import { LicensingException } from "../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { ValidatedViewHelperFactory } from "../taghelpers/ValidatedViewHelperFactory.js";

    

export class ValidationTransformTag extends TransformTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private xslFile: string

    private logic: boolean
public constructor ()                        

                            : super(ValidatedViewHelperFactory()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
this.logic= true
}


    public setXsl(value: string){
var value = value
this.xslFile= value
this.this.setTemplateFile(this.xslFile)
}


    public setLogic(logic: boolean){
var logic = logic
this.logic= logic
}


                //@Throws(Error::class)
            
    isValid(): boolean{

        try {
            
    var helperClass: KClass<*> = this.getHelper()!.::class!;
        
        


    var method: Method = helperClass!.getMethod(commonStrings!.IS_VALID, 
                            null)!;
        
        


    var result: Boolean = method.invoke(this.getHelper(), 
                            null) as Boolean;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.IS_VALID, e)

                                    }
                                



                            throw e
}

}


                //@Throws(Error::class)
            
    validationInfo(): string{

        try {
            
    var addressHelperClass: KClass<*> = this.getHelper()!.::class!;
        
        


    var method: Method = addressHelperClass!.getMethod("validationInfo", 
                            null)!;
        
        


    var result: string = method.invoke(this.getHelper(), 
                            null) as String;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "validationInfo()", e)

                                    }
                                



                            throw e
}

}


                //@Throws(JspTagException::class)
            
    public doStartTag(): number{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        


    var request: HttpServletRequest = this.pageContext!.getRequest() as HttpServletRequest;
        
        

stringBuffer!.append("ValidationViewTag Start For: ")
stringBuffer!.append(this.getName())
stringBuffer!.append("\nView FIle: ")
stringBuffer!.append(this.getObjectFile())
stringBuffer!.append("\nRequest URI: ")
stringBuffer!.append(request.getRequestURI())
logUtil!.put(stringBuffer!.toString(), this, "doStartTag")

                                    }
                                
this.this.setHelper()

                        if(this.isValid())
                        
                                    {
                                    super.doStartTag()

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("View File: ")
stringBuffer!.append(this.getObjectFile())
stringBuffer!.append("\nLogic includes body if true=")
stringBuffer!.appendboolean(this.logic)
logUtil!.put(stringBuffer!.toString(), this, "doStartTag")

                                    }
                                

                        if(this.logic)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return EVAL_BODY_INCLUDE;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    

                        }
                            

                                    }
                                
                        else {
                            pageContext!.getOut()!.print(this.validationInfo())

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("View File: ")
stringBuffer!.append(this.getObjectFile())
stringBuffer!.append("\nisValid()=false")
stringBuffer!.append("\nLogic skips body if true=")
stringBuffer!.appendboolean(this.logic)
logUtil!.put(stringBuffer!.toString(), this, "doStartTag")

                                    }
                                

                        if(this.logic)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return EVAL_BODY_INCLUDE;
    

                        }
                            

                        }
                            
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


    public doEndTag(): number{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    logUtil!.put("Tag Ended", this, "doEndTag")

                                    }
                                
this.logic= true



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.doEndTag();
    
}


}
                
            

