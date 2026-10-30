
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
        
import { Level } from '../../../../../java/util/logging/Level.js';
//not GWT import const Level

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { Logger } from '../../../../../java/util/logging/Logger.js';
//not GWT import const Logger

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //not plain js - same folder import { LogFormatUtil } 
const LogFormatUtil = globalThis.org.allbinary.logic.communication.log.LogFormatUtil;
//not plain js - same folder import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
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


    private readonly logger: Logger = Logger.getLogger(LogUtil.toString()!)!;

    private readonly logFormatUtil: LogFormatUtil = LogFormatUtil.getInstance()!;

private constructor (){

            super();
        }


    /*actual*/ public init(){
PreLogUtil.put("Loggin Initialized", this, "init()");
    
}


    /*actual*/ public putL(log: Log){

    let exception: any = log.getThrowable()!;;
    

 try { 
                        if(exception != 
                                    null
                                )
                        
                                    {
                                    
    let specialMessage: string = log.getSpecialMessage()!;;
    

    let anyType: any = log.getObject()!;;
    

    let functionName: string = log.getFunctionName()!;;
    

    let className: string = CommonStrings.getInstance()!.EMPTY;;
    

    let clazz: Function = anyType!.constructor!;;
    

                        if(clazz.toString()! != 
                                    null
                                )
                        
                                    {
                                    className= clazz.toString()!;
    

                                    }
                                

    let message: string = this.logFormatUtil!.get(className, functionName, specialMessage, exception)!;;
    
this.logger.log(Level.INFO, message);
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

 }
   }
 
}


    /*actual*/ public put(specialMessage: string, anyType: any, functionName: string, exception: any){

 try { 
    let className: string = CommonStrings.getInstance()!.EMPTY;;
    

    let clazz: Function = anyType!.constructor!;;
    

                        if(clazz.toString()! != 
                                    null
                                )
                        
                                    {
                                    className= clazz.toString()!;
    

                                    }
                                

    let message: string = this.logFormatUtil!.getS(className, functionName, specialMessage)!;;
    

                        if(exception != 
                                    null
                                )
                        
                                    {
                                    this.logger.log(Level.SEVERE, message, exception);
    

                                    }
                                
                        else {
                            this.logger.log(Level.INFO, message);
    

                        }
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  

 }
   }
 
}


}

