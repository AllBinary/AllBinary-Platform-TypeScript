
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

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

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
        import { WorkFlowInterface } from './WorkFlowInterface.js';
//not GWT import - same folder const WorkFlowInterface

export class TagWorkFlowFactory
            extends Object
         {
        

    private static readonly instance: TagWorkFlowFactory = new TagWorkFlowFactory();
static getInstance(...args: any[]): any {
   
    if (args.length === 0) return this.getInstance$overload1();
   
    if (args.length === 3) return this.getInstance$overload2(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
    public static getInstance$overload1(): TagWorkFlowFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TagWorkFlowFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor, LicensingException.constructor)
            
    public getInstance$overload2(abeClientInformation: AbeClientInformationInterface, propertiesHashMap: HashMap<any, any>, pageContext: PageContext): WorkFlowInterface{

 try { 
    let workFlowClassName: string = propertiesHashMap!.get(DynamicObjectData.NAME) as string;;
    

    let params: any[] = new Array(2);;
    

    let classes: Function[] = new Array(2);;
    
classes[0]= propertiesHashMap!.constructor;
    
classes[1]= AbeFactory.getInstance()!.constructor;
    
params[0]= propertiesHashMap;
    
params[1]= pageContext;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbeFactory.getInstance()!.getInstance(abeClientInformation, workFlowClassName, classes, params) as WorkFlowInterface;
    
 }
 catch (caught: any) {
 if (caught instanceof LicensingException) {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    let workFlowClassName: string = propertiesHashMap!.get(DynamicObjectData.NAME) as string;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Failed To Get Instance: ");
    
stringBuffer!.append(workFlowClassName);
    
stringBuffer!.append("->");
    
stringBuffer!.append(TagWorkFlowFactory.instance.constructor.name.toString()!);
    

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(stringBuffer!.toString(), this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    

 }
  else {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    let workFlowClassName: string = propertiesHashMap!.get(DynamicObjectData.NAME) as string;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Failed To Get Instance: ");
    
stringBuffer!.append(workFlowClassName);
    
stringBuffer!.append("->");
    
stringBuffer!.append(TagWorkFlowFactory.instance.constructor.name.toString()!);
    

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(stringBuffer!.toString(), this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


}

