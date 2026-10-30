
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

        


            import { Class } from '../../../../../java/lang/Class.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Method } from '../../../../../java/lang/reflect/Method.js';
//not GWT import const Method

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WorkFlowWrapper } from './WorkFlowWrapper.js';
//not GWT import - same folder const WorkFlowWrapper

export class StoreWorkFlowWrapper extends WorkFlowWrapper {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (anyType: any){
            super(anyType);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public getStoreName(): string{

 try { 
    let helperClass: Function = this.getWorkFlowObject()!.constructor!;;
    

    let method: Method = helperClass!.getMethod("getStoreName", 
                            null)!;;
    

    let result: string = method.invoke(this.getWorkFlowObject(), 
                            null) as string;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Reflection Exception";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "getStoreName()", e);
    

                                    }
                                



                            throw new Exception(error);
                    

 }
   }
 
}


}

