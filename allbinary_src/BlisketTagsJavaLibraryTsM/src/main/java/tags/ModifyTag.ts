
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

        


            //import { Class } from '../java/lang/Class.js';
            const Class = (globalThis.java?.lang?.Class ?? class {}) as typeof globalThis.java.lang.Class;
            type Class<T = any, U = any> = typeof Class extends abstract new (...args: any[]) => infer Instance ? Instance : typeof Class;
        
            import { Exception } from '../java/lang/Exception.js';
        
import { Method } from '../java/lang/reflect/Method.js';
//not GWT import const Method

import { HttpServletRequest } from '../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest

import { JspTagException } from '../javax/servlet/jsp/JspTagException.js';
//not GWT import const JspTagException

import { TagHelperFactoryInterface } from '../admin/taghelpers/TagHelperFactoryInterface.js';
//not GWT import const TagHelperFactoryInterface

import { AbResponseHandler } from '../org/allbinary/logic/communication/http/request/AbResponseHandler.js';
//not GWT import const AbResponseHandler

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { LicensingException } from '../org/allbinary/logic/system/security/licensing/LicensingException.js';
//not GWT import const LicensingException

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HelperTag } from './HelperTag.js';
//sameFolderImports - not GWT import - same folder const HelperTag

export class ModifyTag extends HelperTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (tagHelperFactoryInterface: TagHelperFactoryInterface){
            super(tagHelperFactoryInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}


                //@Throws(LicensingException.constructor)
            
    public insert(): string{

 try { 
    let helperClass: Function = this.getHelper()!.constructor!;;
    

    let method: Method = helperClass!.getMethod("insert", 
                            null)!;;
    

    let result: string = method.invoke(this.getHelper(), 
                            null) as string;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to insert";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "insert()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


                //@Throws(LicensingException.constructor)
            
    public delete(): string{

 try { 
    let helperClass: Function = this.getHelper()!.constructor!;;
    

    let method: Method = helperClass!.getMethod(commonStrings!.delete, 
                            null)!;;
    

    let result: string = method.invoke(this.getHelper(), 
                            null) as string;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to delete";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "delete()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


                //@Throws(LicensingException.constructor)
            
    public update(): string{

 try { 
    let helperClass: Function = this.getHelper()!.constructor!;;
    

    let method: Method = helperClass!.getMethod("update", 
                            null)!;;
    

    let result: string = method.invoke(this.getHelper(), 
                            null) as string;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to update";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "update()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


                //@Throws(JspTagException.constructor)
            
    public doStartTag(): number{

 try { 
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    
    let request: HttpServletRequest = this.pageContext!.getRequest() as HttpServletRequest;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    
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
    

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

                        if(this.getCommand()!.compareTo(commonStrings!.INSERT) == 0)
                        
                                    {
                                    
    let output: string = this.insert()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGEXTRAOUTPUT))
                        
                                    {
                                    this.pageContext!.getOut()!.print(output +"<br />");
    

                                    }
                                

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(commonStrings!.DELETE) == 0)
                        
                                    {
                                    
    let output: string = this.delete()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGEXTRAOUTPUT))
                        
                                    {
                                    this.pageContext!.getOut()!.print(output +"<br />");
    

                                    }
                                

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(commonStrings!.UPDATE) == 0)
                        
                                    {
                                    
    let output: string = this.update()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGEXTRAOUTPUT))
                        
                                    {
                                    this.pageContext!.getOut()!.print(output +"<br />");
    

                                    }
                                

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.EVAL_BODY_INCLUDE;
    
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

