
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
        
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //not plain js - same folder import { Log } 
const Log = globalThis.org.allbinary.logic.communication.log.Log;
//ActualPlatform
/*actual*/ export class LogFactory
            extends Object
         {
        

    public static readonly LOG: Log = new Log(StringUtil.getInstance()!.EMPTY_STRING, NullUtil.getInstance()!.NULL_OBJECT, StringUtil.getInstance()!.EMPTY_STRING, NullUtil.getInstance()!.NULL_OBJECT);

    /*actual*/ public static getInstanceD(): Log{

    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    

    let nullUtil: NullUtil = NullUtil.getInstance()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Log(stringUtil!.EMPTY_STRING, nullUtil!.NULL_OBJECT, stringUtil!.EMPTY_STRING, nullUtil!.NULL_OBJECT);
    
}


    /*actual*/ public static getInstance(specialMessage: string, anyType: any, functionName: string, exception: any): Log{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LogFactory.LOG;
    
}


    /*actual*/ public static getInstanceF(specialMessage: string, anyType: any, functionName: string): Log{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LogFactory.LOG;
    
}


}

