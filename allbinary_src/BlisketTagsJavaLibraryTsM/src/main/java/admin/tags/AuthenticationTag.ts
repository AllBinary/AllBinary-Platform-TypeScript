
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
        



            import Vector from "@ohos.util.Vector";
        
import { Method } from "../../java/lang/reflect/Method.js";

    
import { HashMap } from "../../java/util/HashMap.js";

    

//import { Vector } from "../../java/util/Vector.js";

    
import { HttpServletRequest } from "../../javax/servlet/http/HttpServletRequest.js";

    
import { JspTagException } from "../../javax/servlet/jsp/JspTagException.js";

    
import { TagSupport } from "../../javax/servlet/jsp/tagext/TagSupport.js";

    
import { AuthenticationHelperFactory } from "../../admin/taghelpers/AuthenticationHelperFactory.js";

    
import { AuthenticationRequestHelperFactory } from "../../admin/taghelpers/AuthenticationRequestHelperFactory.js";

    
import { AbResponseHandler } from "../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { WeblisketSessionData } from "../../org/allbinary/logic/communication/http/request/session/WeblisketSessionData.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../org/allbinary/logic/string/StringUtil.js";

    
import { LicensingException } from "../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { CustomTagSupport } from "../../tags/CustomTagSupport.js";

    

export class AuthenticationTag extends CustomTagSupport {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private command: string

    private userName: string

    private password: string

    private newPassword: string

    private roles: Vector

    private propertiesHashMap: HashMap<any, any>
public constructor (){

            super();
            
    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    
this.userName= stringUtil!.EMPTY_STRING;
    
this.password= stringUtil!.EMPTY_STRING;
    
}


    public setCommand(command: string){
var command = command
this.command= command;
    
}


    public setUserName(userName: string){
var userName = userName
this.userName= userName;
    
}


    public setPassword(value: string){
var value = value
this.password= value;
    
}


    public setNewPassword(value: string){
var value = value
this.newPassword= value;
    
}


    public setRoles(values: Vector){
var values = values
this.roles= values;
    
}


                //@Throws(LicensingException::class)
            
    changePassword(): boolean{

        try {
            
    var anyType: any = {} = AuthenticationRequestHelperFactory().
                            getInstance(this.propertiesHashMap, this.pageContext)!;
        
        
;
    

    var addressHelperClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = addressHelperClass!.getMethod("changePassword", 
                            null)!;
        
        
;
    

    var result: Boolean = method.invoke(anyType, 
                            null);

                         as Boolean;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;

                        ;
    

                //: 
} catch(e) 
            {



                            throw e
}

                //: 
 catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "changePassword()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


                //@Throws(LicensingException::class)
            
    newPassword(): boolean{

        try {
            
    var anyType: any = {} = AuthenticationRequestHelperFactory().
                            getInstance(this.propertiesHashMap, this.pageContext)!;
        
        
;
    

    var addressHelperClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = addressHelperClass!.getMethod("newPassword", 
                            null)!;
        
        
;
    

    var result: Boolean = method.invoke(anyType, 
                            null);

                         as Boolean;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;

                        ;
    

                //: 
} catch(e) 
            {



                            throw e
}

                //: 
 catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "newPassword()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


                //@Throws(LicensingException::class)
            
    invalidateSession(): number{

        try {
            
    var anyType: any = {} = AuthenticationHelperFactory().
                            getInstance(this.propertiesHashMap, this.pageContext)!;
        
        
;
    

    var addressHelperClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = addressHelperClass!.getMethod("invalidateSession", 
                            null)!;
        
        
;
    

    var resultInteger: Integer = method.invoke(anyType, 
                            null);

                         as Integer;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return resultInteger!.toInt();

                        ;
    

                //: 
} catch(e) 
            {



                            throw e
}

                //: 
 catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "invalidateSession()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TagSupport.SKIP_BODY;
    
}

}


                //@Throws(LicensingException::class)
            
    isSessionOld(): boolean{

        try {
            
    var anyType: any = {} = AuthenticationHelperFactory().
                            getInstance(this.propertiesHashMap, this.pageContext)!;
        
        
;
    

    var helperClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = helperClass!.getMethod("isSessionOld", 
                            null)!;
        
        
;
    

    var resultBoolean: Boolean = method.invoke(anyType, 
                            null);

                         as Boolean;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return resultBoolean;

                        ;
    

                //: 
} catch(e) 
            {



                            throw e
}

                //: 
 catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "isSessionOld()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


                //@Throws(LicensingException::class)
            
    isRoleValid(): boolean{

        try {
            
    var anyType: any = {} = AuthenticationRequestHelperFactory().
                            getInstance(this.propertiesHashMap, this.pageContext)!;
        
        
;
    

    var addressHelperClass: Function = anyType!constructor!;
        
        
;
    

    var methodParams: Function[] = 
                                                        [
                                                            this.userName!.constructor, this.password.constructor, this.roles.constructor
                                                        ];
        
        
;
    

    var method: Method = addressHelperClass!.getMethod("isRoleValid", methodParams)!;
        
        
;
    

    var methodArgs: any[] = 
                                                        [
                                                            this.userName,this.password,this.roles
                                                        ];
        
        
;
    

    var resultBoolean: Boolean = method.invoke(anyType, methodArgs);

                         as Boolean;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return resultBoolean;

                        ;
    

                //: 
} catch(e) 
            {



                            throw e
}

                //: 
 catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "isRoleValid()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


                //@Throws(LicensingException::class)
            
    validRole(): string{

        try {
            
    var anyType: any = {} = AuthenticationHelperFactory().
                            getInstance(this.propertiesHashMap, this.pageContext)!;
        
        
;
    

    var addressHelperClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = addressHelperClass!.getMethod("validRole", 
                            null)!;
        
        
;
    

    var result: string = method.invoke(anyType, 
                            null);

                         as String;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {



                            throw e
}

                //: 
 catch(e) 
            {

    var error: string = "Failed to set valid role";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "validRole()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(LicensingException::class)
            
    invalidRole(): string{

        try {
            
    var anyType: any = {} = AuthenticationHelperFactory().
                            getInstance(this.propertiesHashMap, this.pageContext)!;
        
        
;
    

    var addressHelperClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = addressHelperClass!.getMethod("invalidRole", 
                            null)!;
        
        
;
    

    var result: string = method.invoke(anyType, 
                            null);

                         as String;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {



                            throw e
}

                //: 
 catch(e) 
            {

    var error: string = "Failed to set role invalid";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "invalidRole()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(LicensingException::class)
            
    isAuthenticationSessionValid(): boolean{

        try {
            
    var anyType: any = {} = AuthenticationHelperFactory().
                            getInstance(this.propertiesHashMap, this.pageContext)!;
        
        
;
    

    var addressHelperClass: Function = anyType!constructor!;
        
        
;
    

    var methodParams: Function[] = 
                                                        [
                                                            this.roles.constructor
                                                        ];
        
        
;
    

    var method: Method = addressHelperClass!.getMethod("isAuthenticationSessionValid", methodParams)!;
        
        
;
    

    var methodArgs: any[] = 
                                                        [
                                                            this.roles
                                                        ];
        
        
;
    

    var resultBoolean: Boolean = method.invoke(anyType, methodArgs);

                         as Boolean;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return resultBoolean;

                        ;
    

                //: 
} catch(e) 
            {



                            throw e
}

                //: 
 catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "isAuthenticationSessionValid()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


                //@Throws(LicensingException::class)
            
    processIfNewLogin(): boolean{

        try {
            
    var anyType: any = {} = AuthenticationHelperFactory().
                            getInstance(this.propertiesHashMap, this.pageContext)!;
        
        
;
    

    var helperClass: Function = anyType!constructor!;
        
        
;
    

    var methodParams: Function[] = 
                                                        [
                                                            this.userName!.constructor, this.password.constructor
                                                        ];
        
        
;
    

    var method: Method = helperClass!.getMethod("processIfNewLogin", methodParams)!;
        
        
;
    

    var methodArgs: any[] = 
                                                        [
                                                            this.userName,this.password
                                                        ];
        
        
;
    

    var resultBoolean: Boolean = method.invoke(anyType, methodArgs);

                         as Boolean;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return resultBoolean;

                        ;
    

                //: 
} catch(e) 
            {



                            throw e
}

                //: 
 catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "processIfNewLogin()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


                //@Throws(LicensingException::class)
            
    processInvalidation(): boolean{

        try {
            
    var anyType: any = {} = AuthenticationHelperFactory().
                            getInstance(this.propertiesHashMap, this.pageContext)!;
        
        
;
    

    var addressHelperClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = addressHelperClass!.getMethod("processInvalidation", 
                            null)!;
        
        
;
    

    var resultBoolean: Boolean = method.invoke(anyType, 
                            null);

                         as Boolean;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return resultBoolean;

                        ;
    

                //: 
} catch(e) 
            {



                            throw e
}

                //: 
 catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "isSetToInvalidate()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


                //@Throws(JspTagException::class)
            
    public doStartTag(): number{

        try {
            
    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    
    var request: HttpServletRequest = this.pageContext!.getRequest();

                         as HttpServletRequest;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(" Request URI: ");
    
stringBuffer!.append(request.getRequestURI());
    
logUtil!.put(stringBuffer!.toString(), this, "doStartTag()");
    

                                    }
                                

                        if(command != 
                                    null
                                )
                        
                                    {
                                    this.propertiesHashMap= HashMap<any, any>();
    

                        if(command.compareTo(org.allbinary.globals.GLOBALS2.NEWPASSWORD) == 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    logUtil!.put("New Password", this, "doStartTag()");
    

                                    }
                                

                        if(!this.newPassword();

                        )
                        
                                    {
                                    pageContext!.getOut()!.print("New Password Request Failed.<p/>");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return EVAL_BODY_INCLUDE;
    

                                    }
                                
                        else {
                            pageContext!.getOut()!.print("New Password Was Sent.<p/>");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    

                        }
                            

                                    }
                                
                             else 
                        if(command.compareTo(org.allbinary.globals.GLOBALS2.CHANGEPASSWORD) == 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    logUtil!.put("Change Password", this, "doStartTag()");
    

                                    }
                                

                        if(!this.changePassword();

                        )
                        
                                    {
                                    pageContext!.getOut()!.print("Password Change Attempt Failed.<p/>");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return EVAL_BODY_INCLUDE;
    

                                    }
                                
                        else {
                            pageContext!.getOut()!.print("Password Changed Successfully.<p/>");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    

                        }
                            

                                    }
                                
                             else 
                        if(command.compareTo(WeblisketSessionData.INVALIDATESESSION) == 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    logUtil!.put("INVALIDATESESSION", this, "doStartTag()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.invalidateSession();

                        ;
    

                                    }
                                
                        else {
                            
                        if(this.isSessionOld())
                        
                                    {
                                    
                        if(this.processInvalidation())
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    logUtil!.put("Processing Invalidation", this, "doStartTag()");
    

                                    }
                                
pageContext!.getOut()!.print("Please login again.<p>");
    

                        if(command.compareTo(org.allbinary.globals.GLOBALS2.PROCESSBODYIFAUTHENTICATED) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TagSupport.SKIP_BODY;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TagSupport.EVAL_BODY_INCLUDE;
    

                        }
                            

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    logUtil!.put("Preparing session for invalidation", this, "doStartTag()");
    

                                    }
                                

                        if(command.compareTo(org.allbinary.globals.GLOBALS2.PROCESSBODYIFAUTHENTICATED) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TagSupport.SKIP_BODY;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TagSupport.EVAL_BODY_INCLUDE;
    

                        }
                            

                        }
                            

                                    }
                                

                        if((userName == 
                                    null
                                 || userName!.compareTo(stringUtil!.EMPTY_STRING) == 0) && (password == 
                                    null
                                 || password.compareTo(stringUtil!.EMPTY_STRING) == 0) && this.roles != 
                                    null
                                 && this.isAuthenticationSessionValid())
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    logUtil!.put("Authenticated session is valid", this, "doStartTag()");
    

                                    }
                                

                        if(command.compareTo(org.allbinary.globals.GLOBALS2.PROCESSBODYIFAUTHENTICATED) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TagSupport.EVAL_BODY_INCLUDE;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TagSupport.SKIP_BODY;
    

                        }
                            

                                    }
                                

                        if(this.userName != 
                                    null
                                 && this.password != 
                                    null
                                 && this.processIfNewLogin())
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    logUtil!.put("Processing new login.", this, "doStartTag()");
    

                                    }
                                

                        if(this.isRoleValid())
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    logUtil!.put("Role is valid - Processing new login", this, "doStartTag()");
    

                                    }
                                
pageContext!.getOut()!.print(validRole());
    

                        if(command.compareTo(org.allbinary.globals.GLOBALS2.PROCESSBODYIFAUTHENTICATED) == 0)
                        
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
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    logUtil!.put("Role is not valid - Processing new login", this, "doStartTag()");
    

                                    }
                                
pageContext!.getOut()!.print(invalidRole());
    

                        if(command.compareTo(org.allbinary.globals.GLOBALS2.PROCESSBODYIFAUTHENTICATED) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return EVAL_BODY_INCLUDE;
    

                        }
                            

                        }
                            

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    logUtil!.put("Invalid Login", this, "doStartTag()");
    

                                    }
                                

                        if(userName != 
                                    null
                                 && userName!.compareTo(stringUtil!.EMPTY_STRING) != 0 && password != 
                                    null
                                 && password.compareTo(stringUtil!.EMPTY_STRING) != 0)
                        
                                    {
                                    pageContext!.getOut()!.print("Sorry your username and/or password is invalid.<p/>");
    

                                    }
                                

                        }
                            

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    logUtil!.put("Major authentication error - userName: " +this.userName +" Password: " +this.password +" Command: " +this.command, this, "doStartTag()");
    

                                    }
                                

                        if(command.compareTo(org.allbinary.globals.GLOBALS2.PROCESSBODYIFAUTHENTICATED) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TagSupport.SKIP_BODY;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TagSupport.EVAL_BODY_INCLUDE;
    

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
                
            

