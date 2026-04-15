
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
        



            import hilog from '@ohos.hilog';
        
            import { Integer } from "../../../../../java/lang/Integer.js";
        
import { NullUtil } from "../../../../../org/allbinary/logic/NullUtil.js";

    
import { TsUtil } from "../../../../../org/allbinary/logic/TsUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { Log } from "../../../../../org/allbinary/logic/communication/log/Log.js";

    
import { LogFormatUtil } from "../../../../../org/allbinary/logic/communication/log/LogFormatUtil.js";

    

/*actual*/ export class LogUtil
            extends Object
         {
        

            static readonly PUBLIC: string = '%{public}s';
            

    private static readonly instance: LogUtil = new LogUtil();
        
        

    /*actual*/ public static getInstance(): LogUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LogUtil.instance;
    
}


    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

    private readonly logFormatUtil: LogFormatUtil = LogFormatUtil.getInstance()!;
        
        

    private readonly LABEL: string = "org.allbinary";
        
        
private constructor (){

            super();
            }


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
var functionName = functionName
this.put(specialMessage, anyType, functionName, NullUtil.getInstance()!.NULL_OBJECT);
    
}


    /*actual*/ public put(specialMessage: string, anyType: any = {}, functionName: string, exception: any = {}){
    //var specialMessage = specialMessage
    //var anyType = anyType
var functionName = functionName
var exception = exception

    var className: string = this.LABEL;
        
        
;
    
className= new StringMaker().
                            append(anyType!.constructor.name.toString()!)!.append(this.commonSeps!.COLON)!.append(Integer.toHexString(TsUtil.getInstance()!.hashCode(anyType)))!.toString();
    

    var message: string = this.logFormatUtil!.get(className, functionName, specialMessage, exception)!;
        
        
;
    
hilog.info(0x0000, className, LogUtil.PUBLIC, message);
    
}


}
                
            

