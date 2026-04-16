
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

    

import { LogFormatUtil } from "./LogFormatUtil.js";

import { LogFactory } from "./LogFactory.js";

import { System } from "./System.js";

import { System } from "./System.js";

/*actual*/ export class LogUtil
            extends Object
         {
        

    private static readonly instance: LogUtil = new LogUtil();
        
        

    /*actual*/ public static getInstance(): LogUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LogUtil.instance;
    
}


    private readonly logFormatUtil: LogFormatUtil = LogFormatUtil.getInstance()!;
        
        

    private readonly LOG_SUCCESS: string = "org.allbinary: ";
        
        
private constructor (){

            super();
            }


    /*actual*/ public putL(log: Log){
    //var log = log

                        if(log == LogFactory.LOG)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var exception: any = log.getThrowable()!;
        
        
;
    

                        if(exception == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var specialMessage: string = log.getSpecialMessage()!;
        
        
;
    

    var anyType: any = log.getObject()!;
        
        
;
    

    var functionName: string = log.getFunctionName()!;
        
        
;
    
put(specialMessage, anyType, functionName, exception);
    
}


    /*actual*/ public putF(specialMessage: string, anyType: any = {}, functionName: string){
    //var specialMessage = specialMessage
    //var anyType = anyType
    //var functionName = functionName
}


    /*actual*/ public put(specialMessage: string, anyType: any = {}, functionName: string, exception: any = {}){
    //var specialMessage = specialMessage
    //var anyType = anyType
    //var functionName = functionName
    //var exception = exception

    var className: string = CommonStrings.getInstance()!.EMPTY;
        
        
;
    

                        if(anyType!.constructor.name.toString()! != 
                                    null
                                )
                        
                                    {
                                    className= anyType!.constructor.name.toString()!;
    

                                    }
                                

    var message: string = this.logFormatUtil!.get(className, functionName, specialMessage, exception)!;
        
        
;
    
console.log(this.LOG_SUCCESS + message);
    
}


}
                
            

