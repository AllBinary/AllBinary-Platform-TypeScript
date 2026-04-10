
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
        



import { Calendar } from "../../java/util/Calendar.js";

    
import { Vector } from "../../java/util/Vector.js";

    
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
this.command= command
}


    public setUserName(userName: string){
var userName = userName
this.userName= userName
}


    public setPassword(value: string){
var value = value
this.password= value
}


    public setNewPassword(value: string){
var value = value
this.newPassword= value
}


    public setRoles(values: Vector){
var values = values
this.roles= values
}


    makeSessionValid(storedRole: BasicUserRole, userName: string){
var storedRole = storedRole
var userName = userName
setAuthenticated()
setRole(storedRole)
setUserName(userName)
removeAttribute(WeblisketSessionData.REMOVABLEUSERNAME)
removeAttribute(WeblisketSessionData.REMOVABLEPASSWORD)
}


    getFormData(){
this.authenticated= this.weblisketSession!.getAuthentication()
this.sessionUserName= this.weblisketSession!.getUserName()
this.role= this.weblisketSession!.getRole()
this.attemptsInteger= this.weblisketSession!.getAttempts()
this.timeout= this.weblisketSession!.getTimeout()
}


    public nextAttempt(){

    
                        if(attemptsInteger != 
                                    null
                                 && attemptsInteger!.toInt() > 0)
                        
                                    {
                                    setAttempts(Integer(attemptsInteger!.toInt() +1))

                                    }
                                
                        else {
                            setAttempts(Integer(1))

                        }
                            
}


                @Throws(LicensingException::class)
            
    changePassword(): boolean{

        try {
            
    var userName: string = request.getParameter(WeblisketSessionData.REMOVABLEUSERNAME)!;
        
        


    var password: string = request.getParameter(WeblisketSessionData.REMOVABLEPASSWORD)!;
        
        


    var newPassword: string = request.getParameter(WeblisketSessionData.REMOVABLENEWPASSWORD)!;
        
        


    var newReenteredPassword: string = request.getParameter(WeblisketSessionData.REMOVABLEREENTERNEWPASSWORD)!;
        
        


    
                        if(newPassword!.compareTo(newReenteredPassword) != 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    var installerInfo: InstallerInfo = new InstallerInfo();
        
        


    
                        if(installerInfo!.isValid(userName, password))
                        
                                    {
                                    setPassword(newPassword)
write()
setUserName(userName)
setPassword(newPassword)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
} catch(e: LicensingException)
            {



                            throw e
}
 catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "invalidateSession()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    invalidateSession(): number{

        try {
            clear()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Integer(TagSupport.EVAL_BODY_INCLUDE).
                            toInt();
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "invalidateSession()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TagSupport.SKIP_BODY;
    
}

}


                @Throws(LicensingException::class)
            
    isSessionOld(): boolean{

        try {
            
    
                        if(this.role != 
                                    null
                                )
                        
                                    {
                                    
    var timeCreated: number = this.weblisketSession!.getCreationTime()!;
        
        


    var sessionTimout: number = this.role.getSessionTimeout()!;
        
        


    var calendar: Calendar = Calendar.getInstance()!;
        
        


    var timeFirst: number = calendar.getTimeInMillis() -sessionTimout;
        
        


    
                        if(timeFirst > timeCreated)
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATION))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Session Is Old - Timeout: ")
appendlong(sessionTimout)
append(" Eval: ")
appendlong(timeFirst)
append(" > ")
appendlong(timeCreated)
put(stringBuffer!.toString(), this, "isSessionOld()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE.;
    

                                    }
                                

                                    }
                                
                        else {
                            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATION))
                        
                                    {
                                    put("Role Is Not In Session", this, "isSessionOld()")

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isRarelyUsedSession();
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "isSessionOld()", e)

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
        
        


    var lastAccess: number = this.weblisketSession!.getLastAccessedTime()!;
        
        


    var timePassed: number = role.getSessionInactivityTimeout()!;
        
        


    var calendar: Calendar = Calendar.getInstance()!;
        
        


    var timeFirst: number = calendar.getTimeInMillis() -lastAccess;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATION))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Session Is Rarely Used - Timeout: ")
appendlong(lastAccess)
append(" Eval: ")
appendlong(timeFirst)
append(" > ")
appendlong(timePassed)
put(stringBuffer!.toString(), this, "isRarelyUsedSession()")

                                    }
                                

                                    }
                                
                        else {
                            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATION))
                        
                                    {
                                    put("Role Is Not In Session", this, "isRarelyUsedSession()")

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}


                @Throws(LicensingException::class)
            
    isRoleValid(): boolean{

        try {
            this.makeSessionValid(BasicUserRoleFactory.getInstance()!.INSTALLER, userName)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE.;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "isRoleValid()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


                @Throws(LicensingException::class)
            
    validRole(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Trying New login<p>")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
} catch(e: Exception)
            {

    var error: string = "Failed to set valid role";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "validRole()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                @Throws(LicensingException::class)
            
    invalidRole(): string{

        try {
            setAuthenticated(false)

    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Sorry your username and password is invalid on this page.")
append("Trying New login<p>")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
} catch(e: Exception)
            {

    var error: string = "Failed to set role invalid";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "invalidRole()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                @Throws(LicensingException::class)
            
    isAuthenticationSessionValid(): boolean{

        try {
            
    
                        if(BooleanUtil.getInstance()!.getFromString(authenticated))
                        
                                    {
                                    
    var size: number = roles.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var mustBeOfRole: BasicUserRole = roles.get(index) as BasicUserRole;
        
        


    
                        if(sessionUserName != 
                                    null
                                 && role.equals(mustBeOfRole))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE.;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE.;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE.;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "isAuthenticationSessionValid()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


                @Throws(LicensingException::class)
            
    processIfNewLogin(): boolean{

        try {
            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    put("Starting for User: " +this.userName +" Attempt: " +this.weblisketSession!.getAttempts(), this, "processIfNewLogin()")

                                    }
                                

    
                        if(userName != 
                                    null
                                 && userName!.compareTo(StringUtil.getInstance()!.EMPTY_STRING) != 0 && password != 
                                    null
                                 && password.compareTo(StringUtil.getInstance()!.EMPTY_STRING) != 0)
                        
                                    {
                                    
    var login: string


    var installerInfo: InstallerInfo = new InstallerInfo();
        
        


    
                        if(installerInfo!.isValid(userName, password))
                        
                                    {
                                    login= org.allbinary.globals.GLOBALS2.LOGINSUCCESS

                                    }
                                
                        else {
                            login= org.allbinary.globals.GLOBALS2.LOGINFAILED

                        }
                            

    
                        if(login.compareTo(org.allbinary.globals.GLOBALS2.LOGINSUCCESS) == 0)
                        
                                    {
                                    setAttempts(Integer(0))



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE.;
    

                                    }
                                
this.nextAttempt()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE.;
    

                                    }
                                
this.nextAttempt()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE.;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "processIfNewLogin()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


                @Throws(LicensingException::class)
            
    processInvalidation(): boolean{

        try {
            
    
                        if(BooleanUtil.getInstance()!.getFromString(timeout))
                        
                                    {
                                    this.invalidateSession()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE.;
    

                                    }
                                


                            {
                            setTimeout(BooleanFactory.getInstance()!.TRUE_STRING)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE.;
    

                            }
                    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "isSetToInvalidate()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


                @Throws(JspTagException::class)
            
    public doStartTag(): number{

        try {
            
    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

this.request= pageContext!.getRequest() as HttpServletRequest
this.weblisketSession= BasicWeblisketSession(pageContext)
this.getFormData()

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    put("Started", this, "doStartTag()")

                                    }
                                

    
                        if(command != 
                                    null
                                )
                        
                                    {
                                    
    
                        if(command.compareTo(org.allbinary.globals.GLOBALS2.CHANGEPASSWORD) == 0)
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    put("Change Password", this, "doStartTag()")

                                    }
                                

    
                        if(!this.changePassword())
                        
                                    {
                                    print("Password Change Attempt Failed.<p>")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return EVAL_BODY_INCLUDE;
    

                                    }
                                
                        else {
                            print("Password Changed Successfully.<p>")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    

                        }
                            

                                    }
                                
                             else 
    
                        if(command.compareTo(WeblisketSessionData.INVALIDATESESSION) == 0)
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    put("INVALIDATESESSION", this, "doStartTag()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.invalidateSession();
    

                                    }
                                
                        else {
                            
    
                        if(this.isSessionOld())
                        
                                    {
                                    
    
                        if(this.processInvalidation())
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    put("Processing Invalidation", this, "doStartTag()")

                                    }
                                
print("Please login again.<p>")

    
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
                                    put("Preparing session for invalidation", this, "doStartTag()")

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
                                    put("Authenticated session is valid", this, "doStartTag()")

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
                                    put("Processing new login.", this, "doStartTag()")

                                    }
                                

    
                        if(this.isRoleValid())
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    put("Role is valid - Processing new login", this, "doStartTag()")

                                    }
                                
print(validRole())

    
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
                                    put("Role is not valid - Processing new login", this, "doStartTag()")

                                    }
                                
print(invalidRole())

    
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
                                    put("Invalid Login", this, "doStartTag()")

                                    }
                                

    
                        if(userName != 
                                    null
                                 && userName!.compareTo(StringUtil.getInstance()!.EMPTY_STRING) != 0 && password != 
                                    null
                                 && password.compareTo(StringUtil.getInstance()!.EMPTY_STRING) != 0)
                        
                                    {
                                    print("Sorry your username and/or password is invalid.<p>")

                                    }
                                

                        }
                            

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Major authentication error - userName: ")
append(this.userName)
append(" Password: ")
append(this.password)
append(" Command: ")
append(this.command)
put(stringBuffer!.toString(), this, "doStartTag()")

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
                
            

