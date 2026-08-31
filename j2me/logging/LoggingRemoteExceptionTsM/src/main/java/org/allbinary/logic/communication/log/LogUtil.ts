
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
        
            import { RuntimeException } from '../../../../../java/lang/RuntimeException.js';
        
            import { System } from '../../../../../java/lang/System.js';
        
import { IOException } from '../../../../../java/io/IOException.js';
      //not GWT import const IOException = globalThis.java.io.IOException;

      
import { Hashtable } from '../../../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
import { XmlRpcException } from '../../../../../org/apache/xmlrpc/XmlRpcException.js';
      //not GWT import const XmlRpcException = globalThis.org.apache.xmlrpc.XmlRpcException;

      
//not plain js import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { SpecialMessageUtil } from '../../../../../org/allbinary/canvas/SpecialMessageUtil.js';
      //not GWT import const SpecialMessageUtil = globalThis.org.allbinary.canvas.SpecialMessageUtil;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
      //not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //not plain js import { Log } from './Log.js';
const Log = globalThis.org.allbinary.logic.communication.log.Log;

                //not plain js import { LogFormatUtil } from './LogFormatUtil.js';
const LogFormatUtil = globalThis.org.allbinary.logic.communication.log.LogFormatUtil;

                import { XmlRpcRemoteLogClient } from './XmlRpcRemoteLogClient.js';
//not GWT import const XmlRpcRemoteLogClient = globalThis.org.allbinary.logic.communication.log.XmlRpcRemoteLogClient;

                //ActualPlatform
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

    public abeClientInformation: AbeClientInformationInterface;

private constructor (){

            super();
        }


    private readonly stringBuffer: StringMaker = new StringMaker();

    /*actual*/ public putL(log: Log){

                        if(log == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var specialMessage: string = log.getSpecialMessage()!;;
    

    var anyType: any = log.getObject()!;;
    

    var functionName: string = log.getFunctionName()!;;
    

    var exception: any = log.getThrowable()!;;
    
this.put(specialMessage, anyType, functionName, exception);
    
}


    /*actual*/ public putF(specialMessage: string, anyType: any = {}, functionName: string){
}


    /*actual*/ public putF(specialMessage: string, className: string, functionName: string){
}


    /*actual*/ public put(specialMessage: string, anyType: any = {}, functionName: string, exception: any = {}){

                        if(exception != 
                                    null
                                )
                        
                                    {
                                    
                        if(exception.constructor.name.toString()!.compareTo(XmlRpcException.constructor.toString()!) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                        if(exception.constructor.name.toString()!.compareTo(IOException.constructor.toString()!) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                        if(this.isFirstException || this.timeDelayHelper!.isTimeTNT())
                        
                                    {
                                    
    var className: string = CommonStrings.getInstance()!.EMPTY;;
    
this.isFirstException= false;
    

                        if(anyType != 
                                    null
                                 && anyType!.constructor.name.toString()! != 
                                    null
                                )
                        
                                    {
                                    className= anyType!.constructor.name.toString()!;
    

                                    }
                                

    var message: string = LogFormatUtil.getInstance()!.get(className, functionName, specialMessage, exception)!;;
    

        try {
            console.log("Eeeek");
    

                        if(this.abeClientInformation == 
                                    null
                                )
                        
                                    {
                                    


                            throw new RuntimeException();
                    

                                    }
                                

    var hashtable: Hashtable<any, any> = this.abeClientInformation!.toHashtable()!;;
    
this.stringBuffer!.delete(0, this.stringBuffer!.length());
    
this.stringBuffer!.append(message);
    
this.stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
this.stringBuffer!.append(SpecialMessageUtil.getInstance()!.get());
    
hashtable.put(this.MESSAGE, this.stringBuffer!.toString());
    
new XmlRpcRemoteLogClient(this.abeClientInformation).get(hashtable);
    

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



