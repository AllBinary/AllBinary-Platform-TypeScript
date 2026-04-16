
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
        



import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { PlayN } from "../../../../../playn/core/PlayN.js";

    

import { LogFormatUtil } from "./LogFormatUtil.js";

import { LogFormatUtil } from "./LogFormatUtil.js";

import { LogFormatUtil } from "./LogFormatUtil.js";

import { LogFormatUtil } from "./LogFormatUtil.js";

/*actual*/ export class PreLogUtil
            extends Object
         {
        

    /*actual*/ public static put(specialMessage: string, anyType: any = {}, functionName: string){
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
                                
className= new StringMaker().
                            append(className)!.append(CommonSeps.getInstance()!.FORWARD_SLASH)!.append(StringUtil.getInstance()!.toString(anyType))!.toString();
    

    var message: string = LogFormatUtil.getInstance()!.getS(className, functionName, specialMessage)!;
        
        
;
    
PlayN.log()!.debug(LOG_SUCCESS +message);
    
}


    private static readonly LOG_SUCCESS: string = "org.allbinary: ";
        
        

    /*actual*/ public static putOE(specialMessage: string, anyType: any = {}, functionName: string, exception: any = {}){
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
                                
className= new StringMaker().
                            append(className)!.append(CommonSeps.getInstance()!.FORWARD_SLASH)!.append(StringUtil.getInstance()!.toString(anyType))!.toString();
    

    var message: string = LogFormatUtil.getInstance()!.get(className, functionName, specialMessage, exception)!;
        
        
;
    
PlayN.log()!.error(LOG_SUCCESS +message, exception as Error);
    
}


    /*actual*/ public static putS(specialMessage: string, className: string, functionName: string){
    //var specialMessage = specialMessage
    //var className = className
    //var functionName = functionName

    var message: string = LogFormatUtil.getInstance()!.getS(className, functionName, specialMessage)!;
        
        
;
    
PlayN.log()!.debug(LOG_SUCCESS +message);
    
}


    /*actual*/ public static putSE(specialMessage: string, className: string, functionName: string, exception: any = {}){
    //var specialMessage = specialMessage
    //var className = className
    //var functionName = functionName
    //var exception = exception

    var message: string = LogFormatUtil.getInstance()!.get(className, functionName, specialMessage, exception)!;
        
        
;
    
PlayN.log()!.error(LOG_SUCCESS +message, exception as Error);
    
}


    /*actual*/ public static getClassName(anyType: any = {}): string
                //native - START
                {
                    
                }



                //native - END
                
public constructor (){

            super();
            }


}
                
            

