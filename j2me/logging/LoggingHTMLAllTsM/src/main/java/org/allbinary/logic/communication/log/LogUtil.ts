
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
        



import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { PlayN } from "../../../../../playn/core/PlayN.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { LogFormatUtil } from "./LogFormatUtil.js";

import { Log } from "./Log.js";

import { PreLogUtil } from "./PreLogUtil.js";

/*actual*/ export class LogUtil
            extends Object
         {
        

    private static readonly instance: LogUtil = new LogUtil();
        
        

    /*actual*/ public static getInstance(): LogUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LogUtil.instance;
    
}


    private readonly LOG_SUCCESS: string = "org.allbinary: ";
        
        
private constructor (){

            super();
            }


    private readonly logFormatUtil: LogFormatUtil = LogFormatUtil.getInstance()!;
        
        

    /*actual*/ public putL(log: Log){
    //var log = log

    var specialMessage: string = log.getSpecialMessage()!;
        
        
;
    

    var anyType: any = log.getObject()!;
        
        
;
    

    var functionName: string = log.getFunctionName()!;
        
        
;
    

    var exception: any = log.getThrowable()!;
        
        
;
    
this.put(specialMessage, anyType, functionName, exception);
    
}


    /*actual*/ public putF(specialMessage: string, anyType: any = {}, functionName: string){
    //var specialMessage = specialMessage
    //var anyType = anyType
    //var functionName = functionName

    var className: string = PreLogUtil.getClassName(anyType)!;
        
        
;
    

                        if(className == 
                                    null
                                )
                        
                                    {
                                    className= CommonStrings.getInstance()!.EMPTY;
    

                                    }
                                

    var message: string = this.logFormatUtil!.getS(className, functionName, specialMessage)!;
        
        
;
    
PlayN.log()!.debug(this.LOG_SUCCESS +message);
    
}


    /*actual*/ public put(specialMessage: string, anyType: any = {}, functionName: string, exception: any = {}){
    //var specialMessage = specialMessage
    //var anyType = anyType
    //var functionName = functionName
    //var exception = exception

    var className: string = PreLogUtil.getClassName(anyType)!;
        
        
;
    

                        if(className == 
                                    null
                                )
                        
                                    {
                                    className= CommonStrings.getInstance()!.EMPTY;
    

                                    }
                                

    var message: string = this.logFormatUtil!.get(className, functionName, specialMessage, exception)!;
        
        
;
    

                        if(exception != 
                                    null
                                )
                        
                                    {
                                    PlayN.log()!.error(this.LOG_SUCCESS +message, exception as Error);
    

                                    }
                                
                        else {
                            PlayN.log()!.debug(this.LOG_SUCCESS +message);
    

                        }
                            
}


}
                
            

