
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
        



import { HashMap } from "../../java/util/HashMap.js";

    
import { Vector } from "../../java/util/Vector.js";

    
import { HttpServletRequest } from "../../javax/servlet/http/HttpServletRequest.js";

    
import { PageContext } from "../../javax/servlet/jsp/PageContext.js";

    
import { UserData } from "../../org/allbinary/business/user/UserData.js";

    
import { UserInterface } from "../../org/allbinary/business/user/UserInterface.js";

    
import { Password } from "../../org/allbinary/business/user/password/Password.js";

    
import { BasicUserRole } from "../../org/allbinary/business/user/role/BasicUserRole.js";

    
import { UserEntityFactory } from "../../org/allbinary/data/tables/user/UserEntityFactory.js";

    
import { UserEntityInterface } from "../../org/allbinary/data/tables/user/UserEntityInterface.js";

    
import { GLOBALS2 } from "../../org/allbinary/globals/GLOBALS2.js";

    
import { WeblisketSession } from "../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js";

    
import { WeblisketSessionData } from "../../org/allbinary/logic/communication/http/request/session/WeblisketSessionData.js";

    
import { WeblisketSessionInterface } from "../../org/allbinary/logic/communication/http/request/session/WeblisketSessionInterface.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { NewPasswordEmail } from "../../org/allbinary/logic/communication/smtp/email/NewPasswordEmail.js";

    
import { StringMaker } from "../../org/allbinary/logic/string/StringMaker.js";

    
import { AbeClientInformationInterface } from "../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { ServiceClientInformationInterfaceFactory } from "../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js";

    

export class AuthenticationRequestHelper extends TagHelper {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;
        
        

    private weblisketSession: WeblisketSession

    private request: HttpServletRequest
public constructor (hashMap: HashMap<Any, Any>, pageContext: PageContext){

            super();
            var hashMap = hashMap
var pageContext = pageContext
this.weblisketSession= WeblisketSession(hashMap, pageContext)
this.request= pageContext!.getRequest() as HttpServletRequest
}

public constructor (hashMap: HashMap<Any, Any>, httpServletRequest: HttpServletRequest){

            super();
            var hashMap = hashMap
var httpServletRequest = httpServletRequest
this.weblisketSession= WeblisketSession(hashMap, httpServletRequest)
this.request= httpServletRequest
}


                @Throws(Exception::class)
            
    generateNewPassword(): string{

    
                        if(this.weblisketSession != 
                                    null
                                 && this.weblisketSession!.getId() != 
                                    null
                                )
                        
                                    {
                                    
    var startIndex: number = this.weblisketSession!.getId()!.length()!;
        
        


    
                        if(startIndex >= 8)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.weblisketSession!.getId()!.substring(startIndex -8);
    

                                    }
                                
                        else {
                            


                            throw Exception("Error Generating New Password")

                        }
                            

                                    }
                                
                        else {
                            


                            throw Exception("No Session Available For Generating New Password")

                        }
                            
}


    public newPassword(): Boolean{

        try {
            
    var userName: string = request.getParameter(WeblisketSessionData.REMOVABLEUSERNAME)!;
        
        


    var email: string = request.getParameter(UserData.MAINEMAIL)!;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    put("Generating New Password For: " +userName, this, "newPassword()")

                                    }
                                

    var userEntityInterface: UserEntityInterface = UserEntityFactory.getInstance()!;
        
        


    var userInterface: UserInterface = userEntityInterface!.getUser(userName)!;
        
        


    
                        if(userInterface!.getMainEmail()!.compareTo(email) != 0)
                        
                                    {
                                    
    
                        if(userInterface!.getSecondaryEmail() != 
                                    null
                                 && userInterface!.getSecondaryEmail()!.compareTo(email) != 0)
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    put("Requested Email Is Not In User Profile", this, "newPassword()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                                    }
                                

    var newPassword: string = this.generateNewPassword()!;
        
        

setPassword(newPassword)

    var newPasswordHashMap: HashMap<Any, Any> = userInterface!.toPasswordHashMap()!;
        
        

update(userName, newPasswordHashMap)
process()

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    put("Generated New Password For: " +userName, this, "newPassword()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "newPassword()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public changePassword(): Boolean{

        try {
            
    var userName: string = request.getParameter(WeblisketSessionData.REMOVABLEUSERNAME)!;
        
        


    var passwordString: string = request.getParameter(WeblisketSessionData.REMOVABLEPASSWORD)!;
        
        


    var newPassword: string = request.getParameter(WeblisketSessionData.REMOVABLENEWPASSWORD)!;
        
        


    var newReenteredPassword: string = request.getParameter(WeblisketSessionData.REMOVABLEREENTERNEWPASSWORD)!;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    put("Changing Password For User: " +userName, this, "changePassword()")

                                    }
                                

    var password: Password = new Password(newPassword);
        
        


    
                        if(!password.isValid())
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    put("New Password Is Not Valid", this, "changePassword()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    
                        if(newPassword!.compareTo(newReenteredPassword) != 0)
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    put("New Password Fields Do Not Match", this, "changePassword()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var sessionPassword: string = this.weblisketSession!.getPassword()!;
        
        


    var userEntityInterface: UserEntityInterface = UserEntityFactory.getInstance()!;
        
        


    var userInterface: UserInterface = userEntityInterface!.getUser(userName)!;
        
        


    var login: string = userEntityInterface!.login(userName, passwordString)!;
        
        


    
                        if(login.compareTo(GLOBALS2.LOGINSUCCESS) == 0)
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    put("Authentication Successful", this, "changePassword()")

                                    }
                                

    var newPasswordHashMap: HashMap<Any, Any> = password.toHashMap(
                            null)!;
        
        

update(userName, newPasswordHashMap)
process()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                                    }
                                

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    put("Authentication Failed", this, "changePassword()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    put("Authentication Failed", this, "changePassword()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public isRoleValid(userName: string, password: string, roles: Vector): Boolean{
var userName = userName
var password = password
var roles = roles

        try {
            
    var userEntityInterface: UserEntityInterface = UserEntityFactory.getInstance()!;
        
        


    var userInterface: UserInterface = userEntityInterface!.getUser(userName)!;
        
        


    
                        if(userInterface!.getRole() == 
                                    null
                                )
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    put("Role is null: " +userInterface!.getRole() +" Valid Roles: " +roles.toString(), this, "isRoleValid()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var basicUserRoleArray: any = {}[] = roles.toArray()!;
        
        


    var size: number = basicUserRoleArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var nextRole: BasicUserRole = basicUserRoleArray[index]! as BasicUserRole;
        
        


    
                        if(userInterface!.getRole()!.getBasicUserRole()!.equals(nextRole))
                        
                                    {
                                    validateSession(weblisketSession as WeblisketSessionInterface)
removeAttribute(WeblisketSessionData.REMOVABLEUSERNAME)
removeAttribute(WeblisketSessionData.REMOVABLEPASSWORD)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                                    }
                                
}


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Role is not valid: ")
append(userInterface!.getRole()!.toString())
append(" Valid Roles: ")
append(roles.toString())
put(stringBuffer!.toString(), this, "isRoleValid()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "isRoleValid()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


}
                
            

