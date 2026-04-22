
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
        



import { IOException } from "../../../../../java/io/IOException.js";

    
import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { XmlRpcException } from "../../../../../org/apache/xmlrpc/XmlRpcException.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { SpecialMessageUtil } from "../../../../../org/allbinary/canvas/SpecialMessageUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { TimeDelayHelper } from "../../../../../org/allbinary/time/TimeDelayHelper.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Log } from "./Log.js";

import { LogFormatUtil } from "./LogFormatUtil.js";

/*actual*/ export class LogUtil
            extends Object
         {
        

    private static readonly instance: LogUtil = new LogUtil();
        
        

    /*actual*/ public static getInstance(): LogUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LogUtil.instance;
    
}


    private readonly MESSAGE: string = "message";
        
        

    private isFirstException: boolean = true;
        
        

    private timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(200000);
        
        

    public abeClientInformation: AbeClientInformationInterface
private constructor (){

            super();
        }


    private readonly stringBuffer: StringMaker = new StringMaker();
        
        

    /*actual*/ public putL(log: Log){
var log = log

                        if(log == 
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
    

    var exception: any = log.getThrowable()!;
        
        
;
    
this.put(specialMessage, anyType, functionName, exception);
    
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

                        if(exception != 
                                    null
                                )
                        
                                    {
                                    
                        if(exception.constructor.name.toString()!.compareTo(XmlRpcException::class.toString()!) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                        if(exception.constructor.name.toString()!.compareTo(IOException::class.toString()!) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                        if(this.isFirstException || this.timeDelayHelper!.isTime())
                        
                                    {
                                    
    var className: string = CommonStrings.getInstance()!.EMPTY;
        
        
;
    
this.isFirstException= false;
    

                        if(anyType != 
                                    null
                                 && anyType!.constructor.name.toString()! != 
                                    null
                                )
                        
                                    {
                                    className= anyType!.constructor.name.toString()!;
    

                                    }
                                

    var message: string = LogFormatUtil.getInstance()!.get(className, functionName, specialMessage, exception)!;
        
        
;
    

        try {
            console.log("Eeeek");
    

                        if(this.abeClientInformation == 
                                    null
                                )
                        
                                    {
                                    


                            throw new RuntimeException()

                                    }
                                

    var hashtable: Hashtable<any, any> = this.abeClientInformation!.toHashtable()!;
        
        
;
    
this.stringBuffer!.delete(0, this.stringBuffer!.length());
    
this.stringBuffer!.append(message);
    
this.stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
this.stringBuffer!.append(SpecialMessageUtil.getInstance()!.get());
    
hashtable.put(this.MESSAGE, this.stringBuffer!.toString());
    
new XmlRpcRemoteLogClient(this.abeClientInformation).
                            get(hashtable);
    

                //: 
} catch(e) 
            {
console.log("Exception");
    
e.printStackTrace();
    
}


                                    }
                                

                                    }
                                
}


}
                
            

