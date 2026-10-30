
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

import { StoreFrontHelperFactory } from '../../admin/taghelpers/StoreFrontHelperFactory.js';
//not GWT import const StoreFrontHelperFactory

import { StoreFrontData } from '../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
//not GWT import const StoreFrontData

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

import { AbResponseHandler } from '../../org/allbinary/logic/communication/http/request/AbResponseHandler.js';
//not GWT import const AbResponseHandler

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { LicensingException } from '../../org/allbinary/logic/system/security/licensing/LicensingException.js';
//not GWT import const LicensingException

import { CustomTagSupport } from '../../tags/CustomTagSupport.js';
//not GWT import const CustomTagSupport

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class StoreFrontTag extends CustomTagSupport {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private command: string;

    private storeName: string;

    private propertiesHashMap: HashMap<any, any>;

public constructor (){

            super();
        }


    public setCommand(command: string){
this.command= command;
    
}


    public setStoreName(value: string){
this.storeName= value;
    
}


                //@Throws(LicensingException.constructor)
            
    getCurrentLocation(): string{

 try { 
    let anyType: any = new StoreFrontHelperFactory().getInstance(this.propertiesHashMap, this.pageContext)!;;
    

    let method: Method = anyType!.constructor.name.getMethod("getCurrentLocation", 
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
  

    let error: string = "Failed to retrieve current location";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getCurrentLocation()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


                //@Throws(LicensingException.constructor)
            
    getCurrentHomeLocation(): string{

 try { 
    let anyType: any = new StoreFrontHelperFactory().getInstance(this.propertiesHashMap, this.pageContext)!;;
    

    let method: Method = anyType!.constructor.name.getMethod("getCurrentHomeLocation", 
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
  

    let error: string = "Failed to retrieve current home location";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getCurrentHomeLocation()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


                //@Throws(JspTagException.constructor)
            
    public doStartTag(): number{

 try { 
                        if(this.command != 
                                    null
                                )
                        
                                    {
                                    this.propertiesHashMap= StdUtil.getInstance()!.createHashMap();
    
this.propertiesHashMap!.put(StoreFrontData.getInstance()!.NAME, this.storeName);
    

                        if(this.command.compareTo(org.allbinary.globals.GLOBALS2.GETCURRENTLOCATION) == 0)
                        
                                    {
                                    pageContext!.getOut()!.print(this.getCurrentLocation());
    

                                    }
                                
                             else 
                        if(this.command.compareTo(org.allbinary.globals.GLOBALS2.GETCURRENTHOMELOCATION) == 0)
                        
                                    {
                                    pageContext!.getOut()!.print(this.getCurrentHomeLocation());
    

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

