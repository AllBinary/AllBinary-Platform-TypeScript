
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
        
//not game specific package import { FileLog } from '../../../../../org/allbinary/log/FileLog.js';
      const FileLog = globalThis.org.allbinary.log.FileLog;

      
//not game specific package import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Log } from './Log.js';
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

    var specialMessage: string = log.getSpecialMessage()!;;
    

    var anyType: any = log.getObject()!;;
    

    var functionName: string = log.getFunctionName()!;;
    

    var exception: any = log.getThrowable()!;;
    
this.put(specialMessage, anyType, functionName, exception);
    
}


    /*actual*/ public putF(specialMessage: string, anyType: any = {}, functionName: string){
FileLog.put(specialMessage, anyType, functionName);
    
}


    /*actual*/ public putFS(specialMessage: string, className: string, functionName: string){
FileLog.put(specialMessage, className, functionName);
    
}


    /*actual*/ public put(specialMessage: string, anyType: any = {}, functionName: string, exception: any = {}){
FileLog.put(specialMessage, anyType, functionName, exception as Throwable);
    
}


}



