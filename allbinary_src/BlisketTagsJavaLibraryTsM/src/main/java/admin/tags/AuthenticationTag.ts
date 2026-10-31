
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

        


            //import { Class } from '../../java/lang/Class.js';
            const Class = (globalThis.java?.lang?.Class ?? class {}) as typeof globalThis.java.lang.Class;
            type Class<T = any, U = any> = typeof Class extends abstract new (...args: any[]) => infer Instance ? Instance : typeof Class;
        
            import { Exception } from '../../java/lang/Exception.js';
        
            import { Integer } from '../../java/lang/Integer.js';
        
import { Method } from '../../java/lang/reflect/Method.js';
//not GWT import const Method

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

import { JspTagException } from '../../javax/servlet/jsp/JspTagException.js';
//not GWT import const JspTagException

import { TagSupport } from '../../javax/servlet/jsp/tagext/TagSupport.js';
//not GWT import const TagSupport

import { AuthenticationHelperFactory } from '../../admin/taghelpers/AuthenticationHelperFactory.js';
//not GWT import const AuthenticationHelperFactory

import { AuthenticationRequestHelperFactory } from '../../admin/taghelpers/AuthenticationRequestHelperFactory.js';
//not GWT import const AuthenticationRequestHelperFactory

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

import { AbResponseHandler } from '../../org/allbinary/logic/communication/http/request/AbResponseHandler.js';
//not GWT import const AbResponseHandler

import { WeblisketSessionData } from '../../org/allbinary/logic/communication/http/request/session/WeblisketSessionData.js';
//not GWT import const WeblisketSessionData

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

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
        
export class AuthenticationTag extends CustomTagSupport {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private command: string;

    private userName: string;

    private password: string;

    private newPassword: string;

    private roles: BasicArrayList;

    private propertiesHashMap: HashMap<any, any>;

public constructor (){

            super();
        
    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    
this.userName= stringUtil!.EMPTY_STRING;
    
this.password= stringUtil!.EMPTY_STRING;
    
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


                //@Throws(LicensingException.constructor)
            
    changePassword(): boolean{

 try { 
    let anyType: any = new AuthenticationRequestHelperFactory().getInstance(this.propertiesHashMap, this.pageContext)!;;
    

    let addressHelperClass: Function = anyType!.constructor!;;
    

    let method: Method = addressHelperClass!.getMethod("changePassword", 
                            null)!;;
    

    let result: Boolean = method.invoke(anyType, 
                            null) as Boolean;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result.valueOf();;
    
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
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "changePassword()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


                //@Throws(LicensingException.constructor)
            
    newPassword(): boolean{

 try { 
    let anyType: any = new AuthenticationRequestHelperFactory().getInstance(this.propertiesHashMap, this.pageContext)!;;
    

    let addressHelperClass: Function = anyType!.constructor!;;
    

    let method: Method = addressHelperClass!.getMethod("newPassword", 
                            null)!;;
    

    let result: Boolean = method.invoke(anyType, 
                            null) as Boolean;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result.valueOf();;
    
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
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "newPassword()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


                //@Throws(LicensingException.constructor)
            
    invalidateSession(): number{

 try { 
    let anyType: any = new AuthenticationHelperFactory().getInstance(this.propertiesHashMap, this.pageContext)!;;
    

    let addressHelperClass: Function = anyType!.constructor!;;
    

    let method: Method = addressHelperClass!.getMethod("invalidateSession", 
                            null)!;;
    

    let resultInteger: Integer = method.invoke(anyType, 
                            null) as Integer;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return resultInteger!.intValue();;
    
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
                        return TagSupport.SKIP_BODY;
    

 }
   }
 
}


                //@Throws(LicensingException.constructor)
            
    isSessionOld(): boolean{

 try { 
    let anyType: any = new AuthenticationHelperFactory().getInstance(this.propertiesHashMap, this.pageContext)!;;
    

    let helperClass: Function = anyType!.constructor!;;
    

    let method: Method = helperClass!.getMethod("isSessionOld", 
                            null)!;;
    

    let resultBoolean: Boolean = method.invoke(anyType, 
                            null) as Boolean;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return resultBoolean.valueOf();;
    
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
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "isSessionOld()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


                //@Throws(LicensingException.constructor)
            
    isRoleValid(): boolean{

 try { 
    let anyType: any = new AuthenticationRequestHelperFactory().getInstance(this.propertiesHashMap, this.pageContext)!;;
    

    let addressHelperClass: Function = anyType!.constructor!;;
    

    let methodParams: Function[] = 
                                                        [
                                                            this.userName!.constructor, this.password.constructor, this.roles.constructor
                                                        ];;
    

    let method: Method = addressHelperClass!.getMethod("isRoleValid", methodParams)!;;
    

    let methodArgs: any[] = 
                                                        [
                                                            this.userName,this.password,this.roles
                                                        ];;
    

    let resultBoolean: Boolean = method.invoke(anyType, methodArgs) as Boolean;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return resultBoolean.valueOf();;
    
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
    let anyType: any = new AuthenticationHelperFactory().getInstance(this.propertiesHashMap, this.pageContext)!;;
    

    let addressHelperClass: Function = anyType!.constructor!;;
    

    let method: Method = addressHelperClass!.getMethod("validRole", 
                            null)!;;
    

    let result: string = method.invoke(anyType, 
                            null) as string;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
 }
 catch (caught: any) {
 if (caught instanceof LicensingException) {
  const e = caught;
  



                            throw e;
                    

 }
  else {
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

 try { 
    let anyType: any = new AuthenticationHelperFactory().getInstance(this.propertiesHashMap, this.pageContext)!;;
    

    let addressHelperClass: Function = anyType!.constructor!;;
    

    let method: Method = addressHelperClass!.getMethod("invalidRole", 
                            null)!;;
    

    let result: string = method.invoke(anyType, 
                            null) as string;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
 }
 catch (caught: any) {
 if (caught instanceof LicensingException) {
  const e = caught;
  



                            throw e;
                    

 }
  else {
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
    let anyType: any = new AuthenticationHelperFactory().getInstance(this.propertiesHashMap, this.pageContext)!;;
    

    let addressHelperClass: Function = anyType!.constructor!;;
    

    let methodParams: Function[] = 
                                                        [
                                                            this.roles.constructor
                                                        ];;
    

    let method: Method = addressHelperClass!.getMethod("isAuthenticationSessionValid", methodParams)!;;
    

    let methodArgs: any[] = 
                                                        [
                                                            this.roles
                                                        ];;
    

    let resultBoolean: Boolean = method.invoke(anyType, methodArgs) as Boolean;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return resultBoolean.valueOf();;
    
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
    let anyType: any = new AuthenticationHelperFactory().getInstance(this.propertiesHashMap, this.pageContext)!;;
    

    let helperClass: Function = anyType!.constructor!;;
    

    let methodParams: Function[] = 
                                                        [
                                                            this.userName!.constructor, this.password.constructor
                                                        ];;
    

    let method: Method = helperClass!.getMethod("processIfNewLogin", methodParams)!;;
    

    let methodArgs: any[] = 
                                                        [
                                                            this.userName,this.password
                                                        ];;
    

    let resultBoolean: Boolean = method.invoke(anyType, methodArgs) as Boolean;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return resultBoolean.valueOf();;
    
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
    let anyType: any = new AuthenticationHelperFactory().getInstance(this.propertiesHashMap, this.pageContext)!;;
    

    let addressHelperClass: Function = anyType!.constructor!;;
    

    let method: Method = addressHelperClass!.getMethod("processInvalidation", 
                            null)!;;
    

    let resultBoolean: Boolean = method.invoke(anyType, 
                            null) as Boolean;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return resultBoolean.valueOf();;
    
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
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    
    let request: HttpServletRequest = this.pageContext!.getRequest() as HttpServletRequest;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(" Request URI: ");
    
stringBuffer!.append(request.getRequestURI());
    
this.logUtil!.putF(stringBuffer!.toString(), this, tagStrings!.DO_START_TAG);
    

                                    }
                                

                        if(this.command != 
                                    null
                                )
                        
                                    {
                                    this.propertiesHashMap= StdUtil.getInstance()!.createHashMap();
    

                        if(this.command.compareTo(org.allbinary.globals.GLOBALS2.NEWPASSWORD) == 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("New Password", this, tagStrings!.DO_START_TAG);
    

                                    }
                                

                        if(!this.newPassword())
                        
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
                        if(this.command.compareTo(org.allbinary.globals.GLOBALS2.CHANGEPASSWORD) == 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("Change Password", this, tagStrings!.DO_START_TAG);
    

                                    }
                                

                        if(!this.changePassword())
                        
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
                        if(this.command.compareTo(WeblisketSessionData.INVALIDATESESSION) == 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("INVALIDATESESSION", this, tagStrings!.DO_START_TAG);
    

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
                                    this.logUtil!.putF("Processing Invalidation", this, tagStrings!.DO_START_TAG);
    

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
                                    this.logUtil!.putF("Preparing session for invalidation", this, tagStrings!.DO_START_TAG);
    

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
                                    this.logUtil!.putF("Authenticated session is valid", this, tagStrings!.DO_START_TAG);
    

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
                                    this.logUtil!.putF("Processing new login.", this, tagStrings!.DO_START_TAG);
    

                                    }
                                

                        if(this.isRoleValid())
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("Role is valid - Processing new login", this, tagStrings!.DO_START_TAG);
    

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
                                    this.logUtil!.putF("Role is not valid - Processing new login", this, tagStrings!.DO_START_TAG);
    

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
                                    this.logUtil!.putF("Invalid Login", this, tagStrings!.DO_START_TAG);
    

                                    }
                                

                        if(this.userName != 
                                    null
                                 && this.userName!.compareTo(stringUtil!.EMPTY_STRING) != 0 && this.password != 
                                    null
                                 && this.password.compareTo(stringUtil!.EMPTY_STRING) != 0)
                        
                                    {
                                    pageContext!.getOut()!.print("Sorry your username and/or password is invalid.<p/>");
    

                                    }
                                

                        }
                            

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF(new StringMaker().append("Major authentication error - userName: ")!.append(this.userName)!.append(" Password: ")!.append(this.password)!.append(" Command: ")!.append(this.command)!.toString(), this, tagStrings!.DO_START_TAG);
    

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

