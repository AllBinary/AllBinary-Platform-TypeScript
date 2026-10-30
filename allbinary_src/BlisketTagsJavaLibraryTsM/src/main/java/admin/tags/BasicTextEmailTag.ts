
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
        
import { Method } from '../../java/lang/reflect/Method.js';
//not GWT import const Method

import { HashMap } from '../../java/util/HashMap.js';
//not GWT import const HashMap

import { JspTagException } from '../../javax/servlet/jsp/JspTagException.js';
//not GWT import const JspTagException

import { BasicTextEmailHelperFactory } from '../../admin/taghelpers/BasicTextEmailHelperFactory.js';
//not GWT import const BasicTextEmailHelperFactory

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

import { AbResponseHandler } from '../../org/allbinary/logic/communication/http/request/AbResponseHandler.js';
//not GWT import const AbResponseHandler

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { CustomTagSupport } from '../../tags/CustomTagSupport.js';
//not GWT import const CustomTagSupport

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicTextEmailTag extends CustomTagSupport {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private subject: string;

    private body: string;

public constructor (){

            super();
        }


    public setSubject(value: string){
this.subject= value;
    
}


    public setBody(value: string){
this.body= value;
    
}


    public send(): string{

 try { 
    let propertiesHashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
propertiesHashMap!.put("Subject", this.subject);
    
propertiesHashMap!.put("Body", this.body);
    

    let anyType: any = new BasicTextEmailHelperFactory().getInstance(propertiesHashMap, this.pageContext)!;;
    

    let method: Method = anyType!.constructor.name.getMethod("send", 
                            null)!;;
    
method.invoke(anyType, 
                            null);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Email Sent";
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to Send Email.";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "send()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


                //@Throws(JspTagException.constructor)
            
    public doStartTag(): number{

 try { this.pageContext!.getOut()!.print(this.send());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
AbResponseHandler.sendJspTagRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    

 }
   }
 
}


}

