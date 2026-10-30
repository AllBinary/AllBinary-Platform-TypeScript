
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
        
            import { Throwable } from '../../../../../java/lang/Throwable.js';
        
import { FileLog } from '../../../../../org/allbinary/log/FileLog.js';
//not GWT import const FileLog

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //not plain js - same folder import { Log } 
const Log = globalThis.org.allbinary.logic.communication.log.Log;
//ActualPlatform
/*actual*/ export class LogUtil
            extends Object
         {
        

    private static readonly instance: LogUtil = new LogUtil();

    /*actual*/ public static getInstance(): LogUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LogUtil.instance;
    
}


private constructor (){

            super();
        }


    /*actual*/ public putL(log: Log){

    let specialMessage: string = log.getSpecialMessage()!;;
    

    let anyType: any = log.getObject()!;;
    

    let functionName: string = log.getFunctionName()!;;
    

    let exception: any = log.getThrowable()!;;
    
this.put(specialMessage, anyType, functionName, exception);
    
}


    /*actual*/ public putF(specialMessage: string, anyType: any, functionName: string){
FileLog.put(specialMessage, anyType, functionName);
    
}


    /*actual*/ public putFS(specialMessage: string, className: string, functionName: string){
FileLog.put(specialMessage, className, functionName);
    
}


    /*actual*/ public put(specialMessage: string, anyType: any, functionName: string, exception: any){
FileLog.put(specialMessage, anyType, functionName, exception as Throwable);
    
}


}

