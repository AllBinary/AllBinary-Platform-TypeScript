
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
        
            import { System } from '../../../../../java/lang/System.js';
        
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //not plain js - same folder import { LogFormatUtil } 
const LogFormatUtil = globalThis.org.allbinary.logic.communication.log.LogFormatUtil;

                //not plain js - same folder import { LogFactory } 
const LogFactory = globalThis.org.allbinary.logic.communication.log.LogFactory;

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


    private readonly logFormatUtil: LogFormatUtil = LogFormatUtil.getInstance()!;

    private readonly LOG_SUCCESS: string = "org.allbinary: ";

private constructor (){

            super();
        }


    /*actual*/ public putL(log: Log){

                        if(log == LogFactory.LOG)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var exception: any = log.getThrowable()!;;
    

                        if(exception == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var specialMessage: string = log.getSpecialMessage()!;;
    

    var anyType: any = log.getObject()!;;
    

    var functionName: string = log.getFunctionName()!;;
    
this.put(specialMessage, anyType, functionName, exception);
    
}


    /*actual*/ public putF(specialMessage: string, anyType: any = {}, functionName: string){
}


    /*actual*/ public putF(specialMessage: string, className: string, functionName: string){
}


    /*actual*/ public put(specialMessage: string, anyType: any = {}, functionName: string, exception: any = {}){

    var className: string = CommonStrings.getInstance()!.EMPTY;;
    

                        if(anyType!.constructor.name.toString()! != 
                                    null
                                )
                        
                                    {
                                    className= anyType!.constructor.name.toString()!;
    

                                    }
                                

    var message: string = this.logFormatUtil!.get(className, functionName, specialMessage, exception)!;;
    
console.log(this.LOG_SUCCESS + message);
    
}


}



