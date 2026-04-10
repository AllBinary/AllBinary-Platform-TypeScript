
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

    
import { HashMap } from "../../java/util/HashMap.js";

    
import { Vector } from "../../java/util/Vector.js";

    
import { HttpServletRequest } from "../../javax/servlet/http/HttpServletRequest.js";

    
import { PageContext } from "../../javax/servlet/jsp/PageContext.js";

    
import { TagSupport } from "../../javax/servlet/jsp/tagext/TagSupport.js";

    
import { UserInterface } from "../../org/allbinary/business/user/UserInterface.js";

    
import { BasicUserRole } from "../../org/allbinary/business/user/role/BasicUserRole.js";

    
import { UserRole } from "../../org/allbinary/business/user/role/UserRole.js";

    
import { UserRoleFactory } from "../../org/allbinary/business/user/role/UserRoleFactory.js";

    
import { UserEntityFactory } from "../../org/allbinary/data/tables/user/UserEntityFactory.js";

    
import { UserEntityInterface } from "../../org/allbinary/data/tables/user/UserEntityInterface.js";

    
import { GLOBALS2 } from "../../org/allbinary/globals/GLOBALS2.js";

    
import { WeblisketSession } from "../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BooleanFactory } from "../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { BooleanUtil } from "../../org/allbinary/logic/java/bool/BooleanUtil.js";

    
import { StringMaker } from "../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../org/allbinary/logic/string/StringUtil.js";

    

export class AuthenticationHelper extends TagHelper {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private weblisketSession: WeblisketSession

    private authenticated: string

    private sessionUserName: string

    private role: UserRole

    private timeout: string

    private attemptsInteger: Integer
public constructor (hashMap: HashMap<Any, Any>, pageContext: PageContext)                        

                            : this(hashMap, pageContext!.getRequest() as HttpServletRequest){

            super();
            var hashMap = hashMap
var pageContext = pageContext


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (hashMap: HashMap<Any, Any>, httpServletRequest: HttpServletRequest){

            super();
            var hashMap = hashMap
var httpServletRequest = httpServletRequest
this.weblisketSession= WeblisketSession(hashMap, httpServletRequest)
this.getFormData()

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATION))
                        
                                    {
                                    put(this.outputSessionInfo(), this, this.commonStrings!.CONSTRUCTOR)

                                    }
                                
}


                @Throws(Exception::class)
            
    getFormData(){
this.authenticated= this.weblisketSession!.getAuthentication()
this.sessionUserName= this.weblisketSession!.getUserName()
this.role= this.weblisketSession!.getRole()
this.attemptsInteger= this.weblisketSession!.getAttempts()
this.timeout= this.weblisketSession!.getTimeout()
}


                @Throws(Exception::class)
            
    public invalidateSession(): Integer{

        try {
            clear()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Integer(TagSupport.EVAL_BODY_INCLUDE);
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATIONERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "invalidateSession()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public isSessionOld(): Boolean{

    
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
                        return Boolean.TRUE;
    

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
    
}


    isRarelyUsedSession(): Boolean{

    
                        if(this.role != 
                                    null
                                )
                        
                                    {
                                    
    var timeCreated: number = this.weblisketSession!.getCreationTime()!;
        
        


    var lastAccess: number = this.weblisketSession!.getLastAccessedTime()!;
        
        


    var inactivityAllowed: number = role.getSessionInactivityTimeout()!;
        
        


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
appendlong(inactivityAllowed)
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


    public validRole(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Trying New login<p/>")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
} catch(e: Exception)
            {

    var error: string = "Failed to set valid role";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATIONERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "validRole()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public invalidRole(): string{

        try {
            setAuthenticated(false)

    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Sorry your username and password is invalid on this page. ")
append("Trying New login<p/>")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
} catch(e: Exception)
            {

    var error: string = "Failed to set role invalid";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATIONERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "invalidRole()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                @Throws(Exception::class)
            
    public isAuthenticated(): boolean{

    
                        if(BooleanUtil.getInstance()!.getFromString(authenticated))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public isAuthenticationSessionValid(roles: Vector): Boolean{
var roles = roles

        try {
            
    
                        if(this.role != 
                                    null
                                )
                        
                                    {
                                    
    
                        if(this.isAuthenticated())
                        
                                    {
                                    
    
                        if(sessionUserName != 
                                    null
                                )
                        
                                    {
                                    
    var basicUserRole: BasicUserRole = role.getBasicUserRole()!;
        
        


    var basicUserRoleArray: any = {}[] = roles.toArray()!;
        
        


    var size: number = basicUserRoleArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var mustBeOfRole: BasicUserRole = basicUserRoleArray[index]! as BasicUserRole;
        
        


    
                        if(basicUserRole!.equals(mustBeOfRole))
                        
                                    {
                                    
    
                        if(basicUserRole!.equals(UserRoleFactory.getInstance()!.CUSTOMER))
                        
                                    {
                                    
    var userEntityInterface: UserEntityInterface = UserEntityFactory.getInstance()!;
        
        


    var userInterface: UserInterface = userEntityInterface!.getUser(sessionUserName)!;
        
        


    
                        if(!userInterface!.isSessionValid())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                                    }
                                
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                                    }
                                
                        else {
                            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATION))
                        
                                    {
                                    put("Role Is Not In Session", this, "isAuthenticationSessionValid()")

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATIONERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "isAuthenticatedSessionValid()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

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


    public processIfNewLogin(userName: string, password: string): Boolean{
var userName = userName
var password = password

        try {
            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATIONERROR))
                        
                                    {
                                    put("Starting: " +userName, this, "processIfNewLogin()")

                                    }
                                

    
                        if(userName != 
                                    null
                                 && userName!.compareTo(StringUtil.getInstance()!.EMPTY_STRING) != 0 && password != 
                                    null
                                 && password.compareTo(StringUtil.getInstance()!.EMPTY_STRING) != 0)
                        
                                    {
                                    
    var login: string


    var userEntityInterface: UserEntityInterface = UserEntityFactory.getInstance()!;
        
        

login= userEntityInterface!.login(userName, password)

    
                        if(login.compareTo(GLOBALS2.LOGINSUCCESS) == 0)
                        
                                    {
                                    
    var userInterface: UserInterface = userEntityInterface!.getUser(userName)!;
        
        


    
                        if(userInterface!.isSessionValid())
                        
                                    {
                                    setAttempts(Integer(0))



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                                    }
                                

                                    }
                                
this.nextAttempt()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                
this.nextAttempt()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATIONERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "processIfNewLogin()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public processInvalidation(): Boolean{

        try {
            
    
                        if(BooleanUtil.getInstance()!.getFromString(timeout))
                        
                                    {
                                    this.invalidateSession()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                                    }
                                


                            {
                            setTimeout(BooleanFactory.getInstance()!.TRUE_STRING)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                            }
                    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATIONERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "processInvalidation()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public outputSessionInfo(): string{

        try {
            
    var calendar: Calendar = Calendar.getInstance()!;
        
        


    var timeCreated: number = this.weblisketSession!.getCreationTime()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        


    var lastAccess: number = this.weblisketSession!.getLastAccessedTime()!;
        
        

append("Time Since Last Access: " +(calendar.getTimeInMillis() -lastAccess) +"<br/>\n")

    
                        if(this.role != 
                                    null
                                )
                        
                                    {
                                    append("Auth: ")
append(this.authenticated)
append(" UserName: ")
append(this.sessionUserName)
append(" Role: ")
append(this.role.toString())
append("<br/>\n")
append("Time Left: ")
appendlong((role.getSessionTimeout() -(calendar.getTimeInMillis() -timeCreated)))
append("<br/>\n")
append("Inactivity Time Allowed: ")
appendlong(role.getSessionTimeout())
append("<br/>\n")
append("Inactivity Time Allowed: ")
appendlong(role.getSessionInactivityTimeout())
append("<br/>\n")

                                    }
                                
                        else {
                            append("Role Is Not Set<br/>\n")

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
} catch(e: Exception)
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error";
    
}

}


    public getRole(): UserRole{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return role;
    
}


}
                
            

