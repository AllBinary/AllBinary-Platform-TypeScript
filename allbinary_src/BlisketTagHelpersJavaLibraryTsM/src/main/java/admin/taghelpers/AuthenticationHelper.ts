
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

        


            import { Exception } from '../../java/lang/Exception.js';
        
            import { Integer } from '../../java/lang/Integer.js';
        
import { Calendar } from '../../java/util/Calendar.js';
//not GWT import const Calendar

import { HashMap } from '../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { HttpServletRequest } from '../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest

import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext

import { TagSupport } from '../../javax/servlet/jsp/tagext/TagSupport.js';
//not GWT import const TagSupport

import { UserInterface } from '../../org/allbinary/business/user/UserInterface.js';
//not GWT import const UserInterface

import { BasicUserRole } from '../../org/allbinary/business/user/role/BasicUserRole.js';
//not GWT import const BasicUserRole

import { UserRole } from '../../org/allbinary/business/user/role/UserRole.js';
//not GWT import const UserRole

import { UserRoleFactory } from '../../org/allbinary/business/user/role/UserRoleFactory.js';
//not GWT import const UserRoleFactory

import { UserEntityFactory } from '../../org/allbinary/data/tables/user/UserEntityFactory.js';
//not GWT import const UserEntityFactory

import { UserEntityInterface } from '../../org/allbinary/data/tables/user/UserEntityInterface.js';
//not GWT import const UserEntityInterface

import { GLOBALS2 } from '../../org/allbinary/globals/GLOBALS2.js';
//not GWT import const GLOBALS2

import { WeblisketSession } from '../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
//not GWT import const WeblisketSession

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { BooleanFactory } from '../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory

import { BooleanUtil } from '../../org/allbinary/logic/java/bool/BooleanUtil.js';
//not GWT import const BooleanUtil

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TagHelper } from './TagHelper.js';
//sameFolderImports - not GWT import - same folder const TagHelper

export class AuthenticationHelper extends TagHelper {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private weblisketSession: WeblisketSession;

    private authenticated: string;

    private sessionUserName: string;

    private role: UserRole;

    private timeout: string;

    private attemptsInteger: Integer;

    public constructor(...args: any[]) {
        super();if(args.length === 2 && args[0] instanceof HashMap && args[1] instanceof PageContext) {
            
            this.constructor$0(args[0], args[1]);
            
        }
        else if(args.length === 2) {
            
            this.constructor$1(args[0], args[1]);
            
        }
        
    }
    
    private constructor$0(hashMap: HashMap<any, any>, pageContext: PageContext): void {
        
        this.constructor$1(hashMap, pageContext!.getRequest() as HttpServletRequest);
        

                            //For kotlin this is before the body of the constructor.
                    

    }
    
    private constructor$1(hashMap: HashMap<any, any>, httpServletRequest: HttpServletRequest): void {
        this.weblisketSession= new WeblisketSession(hashMap, httpServletRequest);
    
this.getFormData();
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATION))
                        
                                    {
                                    this.logUtil!.putF(this.outputSessionInfo(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                

    }
    
                //@Throws(Exception.constructor)
            
    getFormData(){
this.authenticated= this.weblisketSession!.getAuthentication();
    
this.sessionUserName= this.weblisketSession!.getUserName();
    
this.role= this.weblisketSession!.getRole();
    
this.attemptsInteger= this.weblisketSession!.getAttempts();
    
this.timeout= this.weblisketSession!.getTimeout();
    
}


                //@Throws(Exception.constructor)
            
    public invalidateSession(): Integer{

 try { this.weblisketSession!.clear();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Integer(TagSupport.EVAL_BODY_INCLUDE);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATIONERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "invalidateSession()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public isSessionOld(): Boolean{

                        if(this.role != 
                                    null
                                )
                        
                                    {
                                    
    let timeCreated: number = this.weblisketSession!.getCreationTime()!;;
    

    let sessionTimout: number = this.role.getSessionTimeout()!;;
    

    let calendar: Calendar = Calendar.getInstance()!;;
    

    let timeFirst: number = calendar.getTimeInMillis() -sessionTimout;;
    

                        if(timeFirst > timeCreated)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATION))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Session Is Old - Timeout: ");
    
stringBuffer!.appendlong(sessionTimout);
    
stringBuffer!.append(" Eval: ");
    
stringBuffer!.appendlong(timeFirst);
    
stringBuffer!.append(" > ");
    
stringBuffer!.appendlong(timeCreated);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "isSessionOld()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATION))
                        
                                    {
                                    this.logUtil!.putF("Role Is Not In Session", this, "isSessionOld()");
    

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isRarelyUsedSession();;
    
}


    isRarelyUsedSession(): Boolean{

                        if(this.role != 
                                    null
                                )
                        
                                    {
                                    
    let timeCreated: number = this.weblisketSession!.getCreationTime()!;;
    

    let lastAccess: number = this.weblisketSession!.getLastAccessedTime()!;;
    

    let inactivityAllowed: number = this.role.getSessionInactivityTimeout()!;;
    

    let calendar: Calendar = Calendar.getInstance()!;;
    

    let timeFirst: number = calendar.getTimeInMillis() -lastAccess;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATION))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Session Is Rarely Used - Timeout: ");
    
stringBuffer!.appendlong(lastAccess);
    
stringBuffer!.append(" Eval: ");
    
stringBuffer!.appendlong(timeFirst);
    
stringBuffer!.append(" > ");
    
stringBuffer!.appendlong(inactivityAllowed);
    
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
                        return false;
    
}


    public validRole(): string{

 try { 
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Trying New login<p/>");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to set valid role";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATIONERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "validRole()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


    public invalidRole(): string{

 try { this.weblisketSession!.setAuthenticated(false);
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Sorry your username and password is invalid on this page. ");
    
stringBuffer!.append("Trying New login<p/>");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to set role invalid";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATIONERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "invalidRole()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public isAuthenticated(): boolean{

                        if(BooleanUtil.getInstance()!.getFromString(this.authenticated))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public isAuthenticationSessionValid(roles: BasicArrayList): Boolean{

 try { 
                        if(this.role != 
                                    null
                                )
                        
                                    {
                                    
                        if(this.isAuthenticated())
                        
                                    {
                                    
                        if(this.sessionUserName != 
                                    null
                                )
                        
                                    {
                                    
    let basicUserRole: BasicUserRole = this.role.getBasicUserRole()!;;
    

    let basicUserRoleArray: any[] = roles.toArray()!;;
    

    let size: number = basicUserRoleArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let mustBeOfRole: BasicUserRole = basicUserRoleArray[index]! as BasicUserRole;;
    

                        if((basicUserRole === mustBeOfRole))
                        
                                    {
                                    
                        if((basicUserRole === UserRoleFactory.getInstance()!.CUSTOMER))
                        
                                    {
                                    
    let userEntityInterface: UserEntityInterface = UserEntityFactory.getInstance()!;;
    

    let userInterface: UserInterface = userEntityInterface!.getUser(this.sessionUserName)!;;
    

                        if(!userInterface!.isSessionValid().valueOf())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATION))
                        
                                    {
                                    this.logUtil!.putF("Role Is Not In Session", this, "isAuthenticationSessionValid()");
    

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATIONERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "isAuthenticatedSessionValid()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


    public nextAttempt(){

                        if(this.attemptsInteger != 
                                    null
                                 && this.attemptsInteger!.intValue() > 0)
                        
                                    {
                                    this.weblisketSession!.setAttempts(new Integer(this.attemptsInteger!.intValue() +1));
    

                                    }
                                
                        else {
                            this.weblisketSession!.setAttempts(new Integer(1));
    

                        }
                            
}


    public processIfNewLogin(userName: string, password: string): Boolean{

 try { 
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATIONERROR))
                        
                                    {
                                    this.logUtil!.putF("Starting: " +userName, this, "processIfNewLogin()");
    

                                    }
                                

                        if(userName != 
                                    null
                                 && userName!.compareTo(StringUtil.getInstance()!.EMPTY_STRING) != 0 && password != 
                                    null
                                 && password.compareTo(StringUtil.getInstance()!.EMPTY_STRING) != 0)
                        
                                    {
                                    
    let login: string;;
    

    let userEntityInterface: UserEntityInterface = UserEntityFactory.getInstance()!;;
    
login= userEntityInterface!.login(userName, password);
    

                        if(login.compareTo(GLOBALS2.LOGINSUCCESS) == 0)
                        
                                    {
                                    
    let userInterface: UserInterface = userEntityInterface!.getUser(userName)!;;
    

                        if(userInterface!.isSessionValid().valueOf())
                        
                                    {
                                    this.weblisketSession!.setAttempts(new Integer(0));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                
this.nextAttempt();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
this.nextAttempt();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATIONERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "processIfNewLogin()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


    public processInvalidation(): Boolean{

 try { 
                        if(BooleanUtil.getInstance()!.getFromString(this.timeout))
                        
                                    {
                                    this.invalidateSession();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                


                            {
                            this.weblisketSession!.setTimeout(BooleanFactory.getInstance()!.TRUE_STRING);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                            }
                    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATIONERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "processInvalidation()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


    public outputSessionInfo(): string{

 try { 
    let calendar: Calendar = Calendar.getInstance()!;;
    

    let timeCreated: number = this.weblisketSession!.getCreationTime()!;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    

    let lastAccess: number = this.weblisketSession!.getLastAccessedTime()!;;
    
stringBuffer!.append("Time Since Last Access: " +(calendar.getTimeInMillis() -lastAccess) +"<br/>\n");
    

                        if(this.role != 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append("Auth: ");
    
stringBuffer!.append(this.authenticated);
    
stringBuffer!.append(" UserName: ");
    
stringBuffer!.append(this.sessionUserName);
    
stringBuffer!.append(" Role: ");
    
stringBuffer!.append(this.role.toString());
    
stringBuffer!.append("<br/>\n");
    
stringBuffer!.append("Time Left: ");
    
stringBuffer!.appendlong((this.role.getSessionTimeout() -(calendar.getTimeInMillis() -timeCreated)));
    
stringBuffer!.append("<br/>\n");
    
stringBuffer!.append("Inactivity Time Allowed: ");
    
stringBuffer!.appendlong(this.role.getSessionTimeout());
    
stringBuffer!.append("<br/>\n");
    
stringBuffer!.append("Inactivity Time Allowed: ");
    
stringBuffer!.appendlong(this.role.getSessionInactivityTimeout());
    
stringBuffer!.append("<br/>\n");
    

                                    }
                                
                        else {
                            stringBuffer!.append("Role Is Not Set<br/>\n");
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error";
    

 }
   }
 
}


    public getRole(): UserRole{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.role;
    
}


}

