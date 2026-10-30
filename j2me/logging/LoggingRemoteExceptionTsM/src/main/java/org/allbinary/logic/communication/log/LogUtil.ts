
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
//not GWT import const IOException

import { XmlRpcException } from '../../../../../org/apache/xmlrpc/XmlRpcException.js';
//not GWT import const XmlRpcException

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { SpecialMessageUtil } from '../../../../../org/allbinary/canvas/SpecialMessageUtil.js';
//not GWT import const SpecialMessageUtil

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //not plain js - same folder import { Log } 
const Log = globalThis.org.allbinary.logic.communication.log.Log;
//not plain js - same folder import { LogFormatUtil } 
const LogFormatUtil = globalThis.org.allbinary.logic.communication.log.LogFormatUtil;
import { XmlRpcRemoteLogClient } from './XmlRpcRemoteLogClient.js';
//not GWT import - same folder const XmlRpcRemoteLogClient
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
                                

    let specialMessage: string = log.getSpecialMessage()!;;
    

    let anyType: any = log.getObject()!;;
    

    let functionName: string = log.getFunctionName()!;;
    

    let exception: any = log.getThrowable()!;;
    
this.put(specialMessage, anyType, functionName, exception);
    
}


    /*actual*/ public putF(specialMessage: string, anyType: any, functionName: string){
}


    /*actual*/ public putFS(specialMessage: string, className: string, functionName: string){
}


    /*actual*/ public put(specialMessage: string, anyType: any, functionName: string, exception: any){

                        if(exception != 
                                    null
                                )
                        
                                    {
                                    
                        if(exception.constructor.name.toString()!.compareTo(XmlRpcException.toString()!) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                        if(exception.constructor.name.toString()!.compareTo(IOException.toString()!) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                        if(this.isFirstException || this.timeDelayHelper!.isTimeTNT())
                        
                                    {
                                    
    let className: string = CommonStrings.getInstance()!.EMPTY;;
    
this.isFirstException= false;
    

                        if(anyType != 
                                    null
                                 && anyType!.constructor.name.toString()! != 
                                    null
                                )
                        
                                    {
                                    className= anyType!.constructor.name.toString()!;
    

                                    }
                                

    let message: string = LogFormatUtil.getInstance()!.get(className, functionName, specialMessage, exception)!;;
    

 try { console.log("Eeeek");
    

                        if(this.abeClientInformation == 
                                    null
                                )
                        
                                    {
                                    


                            throw new RuntimeException();
                    

                                    }
                                

    let hashtable: ABHashtable<any, any> = this.abeClientInformation!.toHashtable()!;;
    
this.stringBuffer!.delete(0, this.stringBuffer!.length());
    
this.stringBuffer!.append(message);
    
this.stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
this.stringBuffer!.append(SpecialMessageUtil.getInstance()!.get());
    
hashtable.put(this.MESSAGE, this.stringBuffer!.toString());
    
new XmlRpcRemoteLogClient(this.abeClientInformation).get(hashtable);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
console.log("Exception");
    
e.printStackTrace();
    

 }
   }
 

                                    }
                                

                                    }
                                
}


}

