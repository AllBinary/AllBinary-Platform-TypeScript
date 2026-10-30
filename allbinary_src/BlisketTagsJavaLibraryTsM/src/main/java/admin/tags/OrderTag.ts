
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

        


            import { Class } from '../../java/lang/Class.js';
        
            import { Exception } from '../../java/lang/Exception.js';
        
import { Method } from '../../java/lang/reflect/Method.js';
//not GWT import const Method

import { HashMap } from '../../java/util/HashMap.js';
//not GWT import const HashMap

import { JspTagException } from '../../javax/servlet/jsp/JspTagException.js';
//not GWT import const JspTagException

import { TagSupport } from '../../javax/servlet/jsp/tagext/TagSupport.js';
//not GWT import const TagSupport

import { OrderHelperFactory } from '../../admin/taghelpers/OrderHelperFactory.js';
//not GWT import const OrderHelperFactory

import { StoreFrontData } from '../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
//not GWT import const StoreFrontData

import { PaymentGatewayData } from '../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayData.js';
//not GWT import const PaymentGatewayData

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
        
export class OrderTag extends CustomTagSupport {
        

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
            
    process(): string{

 try { 
    let anyType: any = new OrderHelperFactory().getInstance(this.propertiesHashMap, this.pageContext)!;;
    

    let helperClass: Function = anyType!.constructor!;;
    

    let method: Method = helperClass!.getMethod(commonStrings!.PROCESS, 
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
  

    let error: string = "Failed to Process Order: ";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.PROCESS, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


                //@Throws(LicensingException.constructor)
            
    setPaymentGateway(): Boolean{

 try { 
    let anyType: any = new OrderHelperFactory().getInstance(this.propertiesHashMap, this.pageContext)!;;
    

    let addressHelperClass: Function = anyType!.constructor!;;
    

    let method: Method = addressHelperClass!.getMethod("setPaymentGateway", 
                            null)!;;
    

    let result: Boolean = method.invoke(anyType, 
                            null) as Boolean;;
    



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
  

    let error: string = "Failed to setPaymentGateway for Order";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "setPaymentGateway()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

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
    

                        if(this.command.compareTo(org.allbinary.globals.GLOBALS2.PROCESS) == 0)
                        
                                    {
                                    this.process();
    

                                    }
                                
                             else 
                        if(this.command.compareTo(PaymentGatewayData.NAME.toString()) == 0)
                        
                                    {
                                    
                        if(this.setPaymentGateway() == true)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TagSupport.EVAL_BODY_INCLUDE;
    

                                    }
                                

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TagSupport.SKIP_BODY;
    
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

