
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

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { HttpServletRequest } from '../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest

import { JspTagException } from '../../javax/servlet/jsp/JspTagException.js';
//not GWT import const JspTagException

import { TagSupport } from '../../javax/servlet/jsp/tagext/TagSupport.js';
//not GWT import const TagSupport

import { InstallerInfo } from '../../org/allbinary/business/init/InstallerInfo.js';
//not GWT import const InstallerInfo

import { BasicUserRole } from '../../org/allbinary/business/user/role/BasicUserRole.js';
//not GWT import const BasicUserRole

import { BasicUserRoleFactory } from '../../org/allbinary/business/user/role/BasicUserRoleFactory.js';
//not GWT import const BasicUserRoleFactory

import { AbResponseHandler } from '../../org/allbinary/logic/communication/http/request/AbResponseHandler.js';
//not GWT import const AbResponseHandler

import { BasicWeblisketSession } from '../../org/allbinary/logic/communication/http/request/session/BasicWeblisketSession.js';
//not GWT import const BasicWeblisketSession

import { WeblisketSessionData } from '../../org/allbinary/logic/communication/http/request/session/WeblisketSessionData.js';
//not GWT import const WeblisketSessionData

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

import { LicensingException } from '../../org/allbinary/logic/system/security/licensing/LicensingException.js';
//not GWT import const LicensingException

import { CustomTagSupport } from '../../tags/CustomTagSupport.js';
//not GWT import const CustomTagSupport

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class FileAuthenticationTag extends CustomTagSupport {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private attemptsInteger: Integer;

    private weblisketSession: BasicWeblisketSession;

    private request: HttpServletRequest;

    private command: string;

    private userName: string;

    private password: string;

    private newPassword: string;

    private authenticated: string;

    private sessionUserName: string;

    private role: BasicUserRole;

    private timeout: string;

    private roles: BasicArrayList;

public constructor (){

            super();
        }


    public setCommand(command: string){
this.command= command;
    
}


    public setUserName(userName: string){
this.userName= userName;
    
}


    public setPassword(value: string){
this.password= value;
    
}


    public setNewPassword(value: string){
this.newPassword= value;
    
}


    public setRoles(values: BasicArrayList){
this.roles= values;
    
}


    makeSessionValid(storedRole: BasicUserRole, userName: string){
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


                //@Throws(LicensingException.constructor)
            
    changePassword(): boolean{

 try { 
    let userName: string = this.request.getParameter(WeblisketSessionData.REMOVABLEUSERNAME)!;;
    

    let password: string = this.request.getParameter(WeblisketSessionData.REMOVABLEPASSWORD)!;;
    

    let newPassword: string = this.request.getParameter(WeblisketSessionData.REMOVABLENEWPASSWORD)!;;
    

    let newReenteredPassword: string = this.request.getParameter(WeblisketSessionData.REMOVABLEREENTERNEWPASSWORD)!;;
    

                        if(newPassword!.compareTo(newReenteredPassword) != 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    let installerInfo: InstallerInfo = new InstallerInfo();;
    

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
    
 }
 catch (caught: any) {
 if (caught instanceof LicensingException) {
  const e = caught;
  



                            throw e;
                    

 }
  else {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "invalidateSession()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


    invalidateSession(): number{

 try { this.weblisketSession!.clear();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Integer(TagSupport.EVAL_BODY_INCLUDE).intValue();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "invalidateSession()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TagSupport.SKIP_BODY;
    

 }
   }
 
}


                //@Throws(LicensingException.constructor)
            
    isSessionOld(): boolean{

 try { 
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
                        return Boolean.TRUE.valueOf();;
    

                                    }
                                

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.AUTHENTICATION))
                        
                                    {
                                    this.logUtil!.putF("Role Is Not In Session", this, "isSessionOld()");
    

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isRarelyUsedSession().valueOf();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "isSessionOld()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


    isRarelyUsedSession(): Boolean{

                        if(this.role != 
                                    null
                                )
                        
                                    {
                                    
    let timeCreated: number = this.weblisketSession!.getCreationTime()!;;
    

    let lastAccess: number = this.weblisketSession!.getLastAccessedTime()!;;
    

    let timePassed: number = this.role.getSessionInactivityTimeout()!;;
    

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
                        return false;
    
}


                //@Throws(LicensingException.constructor)
            
    isRoleValid(): boolean{

 try { this.makeSessionValid(BasicUserRoleFactory.getInstance()!.INSTALLER, userName);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE.valueOf();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "isRoleValid()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


                //@Throws(LicensingException.constructor)
            
    validRole(): string{

 try { 
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Trying New login<p>");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to set valid role";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "validRole()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


                //@Throws(LicensingException.constructor)
            
    invalidRole(): string{

 try { this.weblisketSession!.setAuthenticated(false);
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Sorry your username and password is invalid on this page.");
    
stringBuffer!.append("Trying New login<p>");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to set role invalid";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "invalidRole()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


                //@Throws(LicensingException.constructor)
            
    isAuthenticationSessionValid(): boolean{

 try { 
                        if(BooleanUtil.getInstance()!.getFromString(this.authenticated))
                        
                                    {
                                    
    let size: number = this.roles.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let mustBeOfRole: BasicUserRole = this.roles.get(index) as BasicUserRole;;
    

                        if(this.sessionUserName != 
                                    null
                                 && (this.role === mustBeOfRole))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE.valueOf();;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE.valueOf();;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE.valueOf();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "isAuthenticationSessionValid()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


                //@Throws(LicensingException.constructor)
            
    processIfNewLogin(): boolean{

 try { 
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.putF("Starting for User: " +this.userName +" Attempt: " +this.weblisketSession!.getAttempts(), this, "processIfNewLogin()");
    

                                    }
                                

                        if(this.userName != 
                                    null
                                 && this.userName!.compareTo(StringUtil.getInstance()!.EMPTY_STRING) != 0 && this.password != 
                                    null
                                 && this.password.compareTo(StringUtil.getInstance()!.EMPTY_STRING) != 0)
                        
                                    {
                                    
    let login: string;;
    

    let installerInfo: InstallerInfo = new InstallerInfo();;
    

                        if(installerInfo!.isValid(this.userName, this.password))
                        
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
                        return Boolean.TRUE.valueOf();;
    

                                    }
                                
this.nextAttempt();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE.valueOf();;
    

                                    }
                                
this.nextAttempt();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE.valueOf();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "processIfNewLogin()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


                //@Throws(LicensingException.constructor)
            
    processInvalidation(): boolean{

 try { 
                        if(BooleanUtil.getInstance()!.getFromString(this.timeout))
                        
                                    {
                                    this.invalidateSession();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE.valueOf();;
    

                                    }
                                


                            {
                            this.weblisketSession!.setTimeout(BooleanFactory.getInstance()!.TRUE_STRING);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE.valueOf();;
    

                            }
                    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "isSetToInvalidate()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


                //@Throws(JspTagException.constructor)
            
    public doStartTag(): number{

 try { 
    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    
this.request= pageContext!.getRequest() as HttpServletRequest;
    
this.weblisketSession= new BasicWeblisketSession(pageContext);
    
this.getFormData();
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("Started", this, this.tagStrings!.DO_START_TAG);
    

                                    }
                                

                        if(this.command != 
                                    null
                                )
                        
                                    {
                                    
                        if(this.command.compareTo(org.allbinary.globals.GLOBALS2.CHANGEPASSWORD) == 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("Change Password", this, this.tagStrings!.DO_START_TAG);
    

                                    }
                                

                        if(!this.changePassword())
                        
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
                        if(this.command.compareTo(WeblisketSessionData.INVALIDATESESSION) == 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("INVALIDATESESSION", this, this.tagStrings!.DO_START_TAG);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.invalidateSession();;
    

                                    }
                                
                        else {
                            
                        if(this.isSessionOld())
                        
                                    {
                                    
                        if(this.processInvalidation())
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("Processing Invalidation", this, this.tagStrings!.DO_START_TAG);
    

                                    }
                                
pageContext!.getOut()!.print("Please login again.<p>");
    

                        if(this.command.compareTo(org.allbinary.globals.GLOBALS2.PROCESSBODYIFAUTHENTICATED) == 0)
                        
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
                                    this.logUtil!.putF("Preparing session for invalidation", this, this.tagStrings!.DO_START_TAG);
    

                                    }
                                

                        if(this.command.compareTo(org.allbinary.globals.GLOBALS2.PROCESSBODYIFAUTHENTICATED) == 0)
                        
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
                                

                        if((this.userName == 
                                    null
                                 || this.userName!.compareTo(stringUtil!.EMPTY_STRING) == 0) && (this.password == 
                                    null
                                 || this.password.compareTo(stringUtil!.EMPTY_STRING) == 0) && this.roles != 
                                    null
                                 && this.isAuthenticationSessionValid())
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("Authenticated session is valid", this, this.tagStrings!.DO_START_TAG);
    

                                    }
                                

                        if(this.command.compareTo(org.allbinary.globals.GLOBALS2.PROCESSBODYIFAUTHENTICATED) == 0)
                        
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
                                    this.logUtil!.putF("Processing new login.", this, this.tagStrings!.DO_START_TAG);
    

                                    }
                                

                        if(this.isRoleValid())
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("Role is valid - Processing new login", this, this.tagStrings!.DO_START_TAG);
    

                                    }
                                
pageContext!.getOut()!.print(validRole());
    

                        if(this.command.compareTo(org.allbinary.globals.GLOBALS2.PROCESSBODYIFAUTHENTICATED) == 0)
                        
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
                                    this.logUtil!.putF("Role is not valid - Processing new login", this, this.tagStrings!.DO_START_TAG);
    

                                    }
                                
pageContext!.getOut()!.print(invalidRole());
    

                        if(this.command.compareTo(org.allbinary.globals.GLOBALS2.PROCESSBODYIFAUTHENTICATED) == 0)
                        
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
                                    this.logUtil!.putF("Invalid Login", this, this.tagStrings!.DO_START_TAG);
    

                                    }
                                

                        if(this.userName != 
                                    null
                                 && this.userName!.compareTo(StringUtil.getInstance()!.EMPTY_STRING) != 0 && this.password != 
                                    null
                                 && this.password.compareTo(StringUtil.getInstance()!.EMPTY_STRING) != 0)
                        
                                    {
                                    pageContext!.getOut()!.print("Sorry your username and/or password is invalid.<p>");
    

                                    }
                                

                        }
                            

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Major authentication error - userName: ");
    
stringBuffer!.append(this.userName);
    
stringBuffer!.append(" Password: ");
    
stringBuffer!.append(this.password);
    
stringBuffer!.append(" Command: ");
    
stringBuffer!.append(this.command);
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.tagStrings!.DO_START_TAG);
    

                                    }
                                

                        if(this.command.compareTo(org.allbinary.globals.GLOBALS2.PROCESSBODYIFAUTHENTICATED) == 0)
                        
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
    
 }
 catch (caught: any) {
 if (caught instanceof LicensingException) {
  const e = caught;
  
AbResponseHandler.sendJspTagLicensingRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    

 }
  else {
  const e = caught;
  
AbResponseHandler.sendJspTagRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    

 }
   }
 
}


}

