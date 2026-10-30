
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Class } from '../../../../../java/lang/Class.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { PageContext } from '../../../../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext

import { DynamicObjectData } from '../../../../../org/allbinary/business/DynamicObjectData.js';
//not GWT import const DynamicObjectData

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { AbeFactory } from '../../../../../org/allbinary/logic/system/loader/AbeFactory.js';
//not GWT import const AbeFactory

import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { LicensingException } from '../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js';
//not GWT import const LicensingException

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WorkFlowWrapper } from './WorkFlowWrapper.js';
//sameFolderImports - not GWT import - same folder const WorkFlowWrapper
import { WorkFlowInterface } from './WorkFlowInterface.js';
//sameFolderImports - not GWT import - same folder const WorkFlowInterface

export class NewWorkFlowFactory
            extends Object
         {
        

    private static readonly instance: NewWorkFlowFactory = new NewWorkFlowFactory();
static getInstance(...args: any[]): any {
   
    if (args.length === 0) return this.getInstance$overload1();
   
    if (args.length === 3) return this.getInstance$overload2(args[0], args[1], args[2]);
   
    if (args.length === 2 && typeof args[1] === 'string') return this.getInstance$overload3(args[0], args[1]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
    public static getInstance$overload1(): NewWorkFlowFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NewWorkFlowFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor, LicensingException.constructor)
            
    public getInstance$overload2(abeClientInformation: AbeClientInformationInterface, hashMap: HashMap<any, any>, pageContext: PageContext): WorkFlowInterface{

 try { 
    let className: string = hashMap!.get(DynamicObjectData.NAME) as string;;
    

    let params: any[] = new Array(2);;
    

    let classes: Function[] = new Array(2);;
    
classes[0]= hashMap!.constructor;
    
classes[1]= AbeFactory.getInstance()!.constructor;
    
params[0]= hashMap;
    
params[1]= pageContext;
    

    let anyType: any = AbeFactory.getInstance()!.getInstance(abeClientInformation, className, classes, params)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new WorkFlowWrapper(anyType) as WorkFlowInterface;
    
 }
 catch (caught: any) {
 if (caught instanceof LicensingException) {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(HashMap)", e);
    

                                    }
                                



                            throw e;
                    

 }
  else {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(HashMap)", e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor, LicensingException.constructor)
            
    public getInstance$overload3(abeClientInformation: AbeClientInformationInterface, className: string): WorkFlowInterface{

 try { 
    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    

                        if(className != 
                                    null
                                 && className!.compareTo(stringUtil!.EMPTY_STRING) != 0)
                        
                                    {
                                    
    let anyType: any = AbeFactory.getInstance()!.getInstance(abeClientInformation, className, 
                            null, 
                            null)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new WorkFlowWrapper(anyType) as WorkFlowInterface;
    

                                    }
                                
                             else 
                        if()
                        
 }
 catch (caught: any) {
 if (caught instanceof LicensingException) {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    

 }
  else {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


}

