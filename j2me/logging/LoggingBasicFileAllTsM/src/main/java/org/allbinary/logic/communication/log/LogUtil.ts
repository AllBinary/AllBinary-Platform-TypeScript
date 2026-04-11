
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
        



import { FileLog } from "../../../../../org/allbinary/log/FileLog.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    

/*actual*/ export class LogUtil
            extends Object
         {
        

    private static readonly instance: LogUtil = new LogUtil();
        
        

    /*actual*/ public static getInstance(): LogUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    /*actual*/ public put(log: Log){
var log = log

    var specialMessage: string = log.getSpecialMessage()!;
        
        
;
    

    var anyType: any = {} = log.getObject()!;
        
        
;
    

    var functionName: string = log.getFunctionName()!;
        
        
;
    

    var exception: any = {} = log.getThrowable()!;
        
        
;
    
put(specialMessage, anyType, functionName, exception);
    
}


    /*actual*/ public put(specialMessage: string, anyType: any = {}, functionName: string){
var specialMessage = specialMessage
var anyType = anyType
var functionName = functionName
FileLog.put(specialMessage, anyType, functionName);
    
}


    /*actual*/ public put(specialMessage: string, anyType: any = {}, functionName: string, exception: any = {}){
var specialMessage = specialMessage
var anyType = anyType
var functionName = functionName
var exception = exception
FileLog.put(specialMessage, anyType, functionName, exception as Error);
    
}


}
                
            

