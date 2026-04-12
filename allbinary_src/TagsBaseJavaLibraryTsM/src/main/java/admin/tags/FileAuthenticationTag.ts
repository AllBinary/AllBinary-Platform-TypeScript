
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
        
import { Calendar } from "../../java/util/Calendar.js";

    

//import { Vector } from "../../java/util/Vector.js";

    
import { HttpServletRequest } from "../../javax/servlet/http/HttpServletRequest.js";

    
import { JspTagException } from "../../javax/servlet/jsp/JspTagException.js";

    
import { TagSupport } from "../../javax/servlet/jsp/tagext/TagSupport.js";

    
import { InstallerInfo } from "../../org/allbinary/business/init/InstallerInfo.js";

    
import { BasicUserRole } from "../../org/allbinary/business/user/role/BasicUserRole.js";

    
import { BasicUserRoleFactory } from "../../org/allbinary/business/user/role/BasicUserRoleFactory.js";

    
import { AbResponseHandler } from "../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { BasicWeblisketSession } from "../../org/allbinary/logic/communication/http/request/session/BasicWeblisketSession.js";

    
import { WeblisketSessionData } from "../../org/allbinary/logic/communication/http/request/session/WeblisketSessionData.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BooleanFactory } from "../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { BooleanUtil } from "../../org/allbinary/logic/java/bool/BooleanUtil.js";

    
import { StringMaker } from "../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../org/allbinary/logic/string/StringUtil.js";

    
import { LicensingException } from "../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { CustomTagSupport } from "../../tags/CustomTagSupport.js";

    

export class FileAuthenticationTag extends CustomTagSupport {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private attemptsInteger: Integer

    private weblisketSession: BasicWeblisketSession

    private request: HttpServletRequest

    private command: string

    private userName: string

    private password: string

    private newPassword: string

    private authenticated: string

    private sessionUserName: string

    private role: BasicUserRole

    private timeout: string

    private roles: Vector
public constructor (){

            super();
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


    makeSessionValid(storedRole: BasicUserRole, userName: string){
var storedRole = storedRole
var userName = userName
this.weblisketSession!.setAuthenticated();
    
this.weblisketSession!.setRole(storedRole);
    
this.weblisketSession!.setUserName(userName);
    
this.request.removeAttribute(WeblisketSessionData.REMOVABLEUSERNAME);
    
this.request.removeAttribute(WeblisketSessionData.REMOVABLEPASSWORD);
    
}


    getFormData(){
this.authenticated= this.weblisketSession!.getAuthentication();
    
this.sessionUserName= this.weblisketSession!.getUserName();
    
this.role= this.weblisketSession!.getRole();
    
this.attemptsInteger= this.weblisketSession!.getAttempts();
    
this.timeout= this.weblisketSession!.getTimeout();
    
}


    public nextAttempt(){

                        if(attemptsInteger != 
                                    null
                                 && attemptsInteger!.toInt() > 0)
                        
                                    {
                                    this.weblisketSession!.setAttempts(new Integer(attemptsInteger!.toInt() +1));
    

                                    }
                                
                        else {
                            this.weblisketSession!.setAttempts(new Integer(1));
    

                        }
                            
}


                //@Throws(LicensingException::class)
            
    changePassword(): boolean{

        try {
            
    var userName: string = request.getParameter(WeblisketSessionData.REMOVABLEUSERNAME)!;
        
        
;
    

    var password: string = request.getParameter(WeblisketSessionData.REMOVABLEPASSWORD)!;
        
        
;
    

    var newPassword: string = request.getParameter(WeblisketSessionData.REMOVABLENEWPASSWORD)!;
        
        
;
    

    var newReenteredPassword: string = request.getParameter(WeblisketSessionData.REMOVABLEREENTERNEWPASSWORD)!;
        
        
;
    

                        if(newPassword!.compareTo(newReenteredPassword) != 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    var installerInfo: InstallerInfo = new InstallerInfo();
        
        
;
    

                        if(installerInfo!.isValid(userName, password))
                        
                                    {
                                    installerInfo!.setPassword(newPassword);
    
installerInfo!.write();
    
this.weblisketSession!.setUserName(userName);
    
this.weblisketSession!.setPassword(newPassword);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

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
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "invalidateSession()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    invalidateSession(): number{

        try {
            this.weblisketSession!.clear();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Integer(TagSupport.EVAL_BODY_INCLUDE).
                            toInt();

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "invalidateSession()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TagSupport.SKIP_BODY;
    
}

}


                //@Throws(LicensingException::class)
            
    isSessionOld(): boolean{

        try {
            
                        if(this.role != 
                                    null
                                )
                        
                                    {
                                    
    var timeCreated: number = this.weblisketSession!.getCreationTime()!;
        
        
;
    

    var sessionTimout: number = this.role.getSessionTimeout()!;
        
        
;
    

    var calendar: Calendar = Calendar.getInstance()!;
        
        
;
    

    var timeFirst: number = calendar.getTimeInMillis() -sessionTimout;
        
        
;
    

                        if(timeFirst > timeCreated)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATION))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Session Is Old - Timeout: ");
    
stringBuffer!.appendlong(sessionTimout);
    
stringBuffer!.append(" Eval: ");
    
stringBuffer!.appendlong(timeFirst);
    
stringBuffer!.append(" > ");
    
stringBuffer!.appendlong(timeCreated);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "isSessionOld()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE.;

                        ;
    

                                    }
                                

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATION))
                        
                                    {
                                    this.logUtil!.putF("Role Is Not In Session", this, "isSessionOld()");
    

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isRarelyUsedSession();

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "isSessionOld()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    isRarelyUsedSession(): Boolean{

                        if(this.role != 
                                    null
                                )
                        
                                    {
                                    
    var timeCreated: number = this.weblisketSession!.getCreationTime()!;
        
        
;
    

    var lastAccess: number = this.weblisketSession!.getLastAccessedTime()!;
        
        
;
    

    var timePassed: number = role.getSessionInactivityTimeout()!;
        
        
;
    

    var calendar: Calendar = Calendar.getInstance()!;
        
        
;
    

    var timeFirst: number = calendar.getTimeInMillis() -lastAccess;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATION))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Session Is Rarely Used - Timeout: ");
    
stringBuffer!.appendlong(lastAccess);
    
stringBuffer!.append(" Eval: ");
    
stringBuffer!.appendlong(timeFirst);
    
stringBuffer!.append(" > ");
    
stringBuffer!.appendlong(timePassed);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "isRarelyUsedSession()");
    

                                    }
                                

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATION))
                        
                                    {
                                    this.logUtil!.putF("Role Is Not In Session", this, "isRarelyUsedSession()");
    

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}


                //@Throws(LicensingException::class)
            
    isRoleValid(): boolean{

        try {
            this.makeSessionValid(BasicUserRoleFactory.getInstance()!.INSTALLER, userName);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE.;

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "isRoleValid()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


                //@Throws(LicensingException::class)
            
    validRole(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Trying New login<p>");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to set valid role";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "validRole()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(LicensingException::class)
            
    invalidRole(): string{

        try {
            this.weblisketSession!.setAuthenticated(false);
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Sorry your username and password is invalid on this page.");
    
stringBuffer!.append("Trying New login<p>");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to set role invalid";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "invalidRole()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(LicensingException::class)
            
    isAuthenticationSessionValid(): boolean{

        try {
            
                        if(BooleanUtil.getInstance()!.getFromString(authenticated))
                        
                                    {
                                    
    var size: number = roles.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var mustBeOfRole: BasicUserRole = roles.get(index);

                         as BasicUserRole;
        
        
;
    

                        if(sessionUserName != 
                                    null
                                 && role.equals(mustBeOfRole))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE.;

                        ;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE.;

                        ;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE.;

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "isAuthenticationSessionValid()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


                //@Throws(LicensingException::class)
            
    processIfNewLogin(): boolean{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.putF("Starting for User: " +this.userName +" Attempt: " +this.weblisketSession!.getAttempts(), this, "processIfNewLogin()");
    

                                    }
                                

                        if(userName != 
                                    null
                                 && userName!.compareTo(StringUtil.getInstance()!.EMPTY_STRING) != 0 && password != 
                                    null
                                 && password.compareTo(StringUtil.getInstance()!.EMPTY_STRING) != 0)
                        
                                    {
                                    
    var login: string
;
    

    var installerInfo: InstallerInfo = new InstallerInfo();
        
        
;
    

                        if(installerInfo!.isValid(userName, password))
                        
                                    {
                                    login= org.allbinary.globals.GLOBALS2.LOGINSUCCESS;
    

                                    }
                                
                        else {
                            login= org.allbinary.globals.GLOBALS2.LOGINFAILED;
    

                        }
                            

                        if(login.compareTo(org.allbinary.globals.GLOBALS2.LOGINSUCCESS) == 0)
                        
                                    {
                                    this.weblisketSession!.setAttempts(new Integer(0));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE.;

                        ;
    

                                    }
                                
this.nextAttempt();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE.;

                        ;
    

                                    }
                                
this.nextAttempt();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE.;

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "processIfNewLogin()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


                //@Throws(LicensingException::class)
            
    processInvalidation(): boolean{

        try {
            
                        if(BooleanUtil.getInstance()!.getFromString(timeout))
                        
                                    {
                                    this.invalidateSession();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE.;

                        ;
    

                                    }
                                


                            {
                            this.weblisketSession!.setTimeout(BooleanFactory.getInstance()!.TRUE_STRING);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE.;

                        ;
    

                            }
                    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "isSetToInvalidate()", e);
    

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
    
this.request= pageContext!.getRequest();

                         as HttpServletRequest;
    
this.weblisketSession= new BasicWeblisketSession(pageContext);
    
this.getFormData();
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("Started", this, tagStrings!.DO_START_TAG);
    

                                    }
                                

                        if(command != 
                                    null
                                )
                        
                                    {
                                    
                        if(command.compareTo(org.allbinary.globals.GLOBALS2.CHANGEPASSWORD) == 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("Change Password", this, tagStrings!.DO_START_TAG);
    

                                    }
                                

                        if(!this.changePassword();

                        )
                        
                                    {
                                    pageContext!.getOut()!.print("Password Change Attempt Failed.<p>");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return EVAL_BODY_INCLUDE;
    

                                    }
                                
                        else {
                            pageContext!.getOut()!.print("Password Changed Successfully.<p>");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    

                        }
                            

                                    }
                                
                             else 
                        if(command.compareTo(WeblisketSessionData.INVALIDATESESSION) == 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("INVALIDATESESSION", this, tagStrings!.DO_START_TAG);
    

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
                                    this.logUtil!.putF("Processing Invalidation", this, tagStrings!.DO_START_TAG);
    

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
                                    this.logUtil!.putF("Preparing session for invalidation", this, tagStrings!.DO_START_TAG);
    

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
                                    this.logUtil!.putF("Authenticated session is valid", this, tagStrings!.DO_START_TAG);
    

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
                                    this.logUtil!.putF("Processing new login.", this, tagStrings!.DO_START_TAG);
    

                                    }
                                

                        if(this.isRoleValid())
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("Role is valid - Processing new login", this, tagStrings!.DO_START_TAG);
    

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
                                    this.logUtil!.putF("Role is not valid - Processing new login", this, tagStrings!.DO_START_TAG);
    

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
                                    this.logUtil!.putF("Invalid Login", this, tagStrings!.DO_START_TAG);
    

                                    }
                                

                        if(userName != 
                                    null
                                 && userName!.compareTo(StringUtil.getInstance()!.EMPTY_STRING) != 0 && password != 
                                    null
                                 && password.compareTo(StringUtil.getInstance()!.EMPTY_STRING) != 0)
                        
                                    {
                                    pageContext!.getOut()!.print("Sorry your username and/or password is invalid.<p>");
    

                                    }
                                

                        }
                            

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Major authentication error - userName: ");
    
stringBuffer!.append(this.userName);
    
stringBuffer!.append(" Password: ");
    
stringBuffer!.append(this.password);
    
stringBuffer!.append(" Command: ");
    
stringBuffer!.append(this.command);
    
this.logUtil!.putF(stringBuffer!.toString(), this, tagStrings!.DO_START_TAG);
    

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
                
            

