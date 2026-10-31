
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

        


            import { Object } from '../../java/lang/Object.js';
        
            //import { Class } from '../../java/lang/Class.js';
            const Class = (globalThis.java?.lang?.Class ?? class {}) as typeof globalThis.java.lang.Class;
            type Class<T = any, U = any> = typeof Class extends abstract new (...args: any[]) => infer Instance ? Instance : typeof Class;
        
            import { Exception } from '../../java/lang/Exception.js';
        
import { HashMap } from '../../java/util/HashMap.js';
//not GWT import const HashMap

import { HttpServletRequest } from '../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest

import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbeFactory } from '../../org/allbinary/logic/system/loader/AbeFactory.js';
//not GWT import const AbeFactory

import { AbeClientInformationInterface } from '../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { LicensingException } from '../../org/allbinary/logic/system/security/licensing/LicensingException.js';
//not GWT import const LicensingException

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HelperFactory
            extends Object
         {
        
static getInstance(...args: any[]): any {
   
    if (args.length === 5 && typeof args[1] === 'string' && typeof args[2] === 'string') return this.getInstance$overload1(args[0], args[1], args[2], args[3], args[4]);
   
    if (args.length === 5 && typeof args[1] === 'string' && typeof args[2] === 'string') return this.getInstance$overload2(args[0], args[1], args[2], args[3], args[4]);
   
    if (args.length === 6 && typeof args[1] === 'string' && typeof args[2] === 'string') return this.getInstance$overload3(args[0], args[1], args[2], args[3], args[4], args[5]);
   
    if (args.length === 3 && typeof args[1] === 'string' && typeof args[2] === 'string') return this.getInstance$overload4(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
                //@Throws(LicensingException.constructor)
            
    public static getInstance$overload1(abeClientInformation: AbeClientInformationInterface, factoryName: string, className: string, hashMap: HashMap<any, any>, httpServletRequest: HttpServletRequest): any{

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

 try { 
    let params: any[] = new Array(2);;
    

    let classes: Function[] = new Array(2);;
    

    let abeFactory: AbeFactory = AbeFactory.getInstance()!;;
    
classes[0]= hashMap!.constructor;
    
classes[1]= abeFactory!.constructor;
    
params[0]= hashMap;
    
params[1]= httpServletRequest;
    

    let anyType: any = abeFactory!.getInstance(abeClientInformation, className, classes, params)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType;
    
 }
 catch (caught: any) {
 if (caught instanceof LicensingException) {
  const e = caught;
  

    let error: string = "Failed To Get Instance Args: HashMap=" +hashMap!.toString() +" HttpServletRequest=" +httpServletRequest;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    logUtil!.put(error, factoryName +"->HelperFactory", "getInstance(String, String, HashMap, PageContext)", e);
    

                                    }
                                



                            throw e;
                    

 }
  else {
  const e = caught;
  

    let error: string = "Failed To Get Instance";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    logUtil!.put(error, factoryName +"->HelperFactory", "getInstance(String, String, HashMap, PageContext)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


                //@Throws(LicensingException.constructor)
            
    public static getInstance$overload2(abeClientInformation: AbeClientInformationInterface, factoryName: string, className: string, hashMap: HashMap<any, any>, pageContext: PageContext): any{

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

 try { 
    let params: any[] = new Array(2);;
    

    let classes: Function[] = new Array(2);;
    

    let abeFactory: AbeFactory = AbeFactory.getInstance()!;;
    
classes[0]= hashMap!.constructor;
    
classes[1]= abeFactory!.constructor;
    
params[0]= hashMap;
    
params[1]= pageContext;
    

    let anyType: any = abeFactory!.getInstance(abeClientInformation, className, classes, params)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType;
    
 }
 catch (caught: any) {
 if (caught instanceof LicensingException) {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    let error: string = "Failed To Get Instance Args: HashMap=" +hashMap!.toString() +" PageContext=" +pageContext;;
    
logUtil!.put(error, factoryName +"->HelperFactory", "getInstance(String, String, HashMap, PageContext)", e);
    

                                    }
                                



                            throw e;
                    

 }
  else {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.put(commonStrings!.EXCEPTION, factoryName +"->HelperFactory", "getInstance(String, String, HashMap, PageContext)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


                //@Throws(LicensingException.constructor)
            
    public static getInstance$overload3(abeClientInformation: AbeClientInformationInterface, factoryName: string, className: string, hashMap: HashMap<any, any>, specialhashMap: HashMap<any, any>, pageContext: PageContext): any{

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

 try { 
    let params: any[] = new Array(3);;
    

    let classes: Function[] = new Array(3);;
    

    let abeFactory: AbeFactory = AbeFactory.getInstance()!;;
    
classes[0]= hashMap!.constructor;
    
classes[1]= specialhashMap!.constructor;
    
classes[2]= abeFactory!.constructor;
    
params[0]= hashMap;
    
params[1]= specialhashMap;
    
params[2]= pageContext;
    

    let anyType: any = abeFactory!.getInstance(abeClientInformation, className, classes, params)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType;
    
 }
 catch (caught: any) {
 if (caught instanceof LicensingException) {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    let error: string = "Failed To Get Instance Args: HashMap=" +hashMap!.toString() +" PageContext=" +pageContext;;
    
logUtil!.put(error, factoryName +"->HelperFactory", "getInstance(String, String, HashMap, PageContext)", e);
    

                                    }
                                



                            throw e;
                    

 }
  else {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.put(commonStrings!.EXCEPTION, factoryName +"->HelperFactory", "getInstance(String, String, HashMap, PageContext)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


                //@Throws(LicensingException.constructor)
            
    public static getInstance$overload4(abeClientInformation: AbeClientInformationInterface, factoryName: string, className: string): any{

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

 try { 
    let anyType: any = AbeFactory.getInstance()!.getInstance(abeClientInformation, className)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType;
    
 }
 catch (caught: any) {
 if (caught instanceof LicensingException) {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.put(commonStrings!.EXCEPTION, factoryName +"->HelperFactory", "getInstance(String, String, HashMap, PageContext)", e);
    

                                    }
                                



                            throw e;
                    

 }
  else {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.put(commonStrings!.EXCEPTION, factoryName +"->HelperFactory", "getInstance(String, String, HashMap, PageContext)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (){

            super();
        }


}

