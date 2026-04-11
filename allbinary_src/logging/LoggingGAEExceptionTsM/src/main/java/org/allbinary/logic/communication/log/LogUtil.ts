
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
        



import { Level } from "../../../../../java/util/logging/Level.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { Logger } from "../../../../../java/util/logging/Logger.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

/*actual*/ export class LogUtil
            extends Object
         {
        

    private static readonly instance: LogUtil = new LogUtil();
        
        

    /*actual*/ public static getInstance(): LogUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly logger: Logger = Logger.getLogger(LogUtil::class.toString()!)!;
        
        

    private readonly logFormatUtil: LogFormatUtil = LogFormatUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


    /*actual*/ public init(){
PreLogUtil.put("Loggin Initialized", "LogUtil", "init()");
    
}


    /*actual*/ public put(log: Log){
var log = log

    var exception: any = log.getThrowable()!;
        
        
;
    

        try {
            
                        if(exception != 
                                    null
                                )
                        
                                    {
                                    
    var specialMessage: string = log.getSpecialMessage()!;
        
        
;
    

    var anyType: any = log.getObject()!;
        
        
;
    

    var functionName: string = log.getFunctionName()!;
        
        
;
    

    var className: string = CommonStrings.getInstance()!.EMPTY;
        
        
;
    

    var clazz: Function = anyType!constructor!;
        
        
;
    

                        if(clazz.toString()! != 
                                    null
                                )
                        
                                    {
                                    className= clazz.toString()!;
    

                                    }
                                

    var message: string = logFormatUtil!.get(className, functionName, specialMessage, exception)!;
        
        
;
    
logger.log(Level.INFO, message);
    

                                    }
                                

                //: 
} catch(e) 
            {
}

}


    /*actual*/ public put(specialMessage: string, anyType: any = {}, functionName: string, exception: any = {}){
    //var specialMessage = specialMessage
    //var anyType = anyType
    //var functionName = functionName
    //var exception = exception

        try {
            
    var className: string = CommonStrings.getInstance()!.EMPTY;
        
        
;
    

    var clazz: Function = anyType!constructor!;
        
        
;
    

                        if(clazz.toString()! != 
                                    null
                                )
                        
                                    {
                                    className= clazz.toString()!;
    

                                    }
                                

    var message: string = logFormatUtil!.getS(className, functionName, specialMessage)!;
        
        
;
    

                        if(exception != 
                                    null
                                )
                        
                                    {
                                    logger.log(Level.SEVERE, message, exception);
    

                                    }
                                
                        else {
                            logger.log(Level.INFO, message);
    

                        }
                            

                //: 
} catch(e) 
            {
}

}


}
                
            

