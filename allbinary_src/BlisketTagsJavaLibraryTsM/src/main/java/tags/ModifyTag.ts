
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

    
import { TagHelperFactoryInterface } from "../admin/taghelpers/TagHelperFactoryInterface.js";

    
import { AbResponseHandler } from "../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LogUtil } from "../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../org/allbinary/logic/string/StringMaker.js";

    
import { LicensingException } from "../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { CommonStrings } from "../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { HelperTag } from "./HelperTag.js";

export class ModifyTag extends HelperTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (tagHelperFactoryInterface: TagHelperFactoryInterface){
            super(tagHelperFactoryInterface);
                    var tagHelperFactoryInterface = tagHelperFactoryInterface


                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}


                //@Throws(LicensingException::class)
            
    public insert(): string{

        try {
            
    var helperClass: Function = this.getHelper()!.constructor!;
        
        
;
    

    var method: Method = helperClass!.getMethod("insert", 
                            null)!;
        
        
;
    

    var result: string = method.invoke(this.getHelper(), 
                            null);

                         as String;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to insert";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "insert()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(LicensingException::class)
            
    public delete(): string{

        try {
            
    var helperClass: Function = this.getHelper()!.constructor!;
        
        
;
    

    var method: Method = helperClass!.getMethod(commonStrings!.delete, 
                            null)!;
        
        
;
    

    var result: string = method.invoke(this.getHelper(), 
                            null);

                         as String;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to delete";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "delete()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(LicensingException::class)
            
    public update(): string{

        try {
            
    var helperClass: Function = this.getHelper()!.constructor!;
        
        
;
    

    var method: Method = helperClass!.getMethod("update", 
                            null)!;
        
        
;
    

    var result: string = method.invoke(this.getHelper(), 
                            null);

                         as String;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to update";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "update()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(JspTagException::class)
            
    public doStartTag(): number{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    
    var request: HttpServletRequest = this.pageContext!.getRequest();

                         as HttpServletRequest;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Command: ");
    
stringBuffer!.append(this.getCommand());
    
stringBuffer!.append(" Request URI: ");
    
stringBuffer!.append(request.getRequestURI());
    
this.logUtil!.putF(stringBuffer!.toString(), this, tagStrings!.DO_START_TAG);
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    
                                    }
                                

                        if(this.getCommand() != 
                                    null
                                )
                        
                                    {
                                    this.setHelper();
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

                        if(this.getCommand()!.compareTo(commonStrings!.INSERT) == 0)
                        
                                    {
                                    
    var output: string = this.insert()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGEXTRAOUTPUT))
                        
                                    {
                                    this.pageContext!.getOut()!.print(output +"<br />");
    

                                    }
                                

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(commonStrings!.DELETE) == 0)
                        
                                    {
                                    
    var output: string = this.delete()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGEXTRAOUTPUT))
                        
                                    {
                                    this.pageContext!.getOut()!.print(output +"<br />");
    

                                    }
                                

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(commonStrings!.UPDATE) == 0)
                        
                                    {
                                    
    var output: string = this.update()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGEXTRAOUTPUT))
                        
                                    {
                                    this.pageContext!.getOut()!.print(output +"<br />");
    

                                    }
                                

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.EVAL_BODY_INCLUDE;
    

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
                
            

