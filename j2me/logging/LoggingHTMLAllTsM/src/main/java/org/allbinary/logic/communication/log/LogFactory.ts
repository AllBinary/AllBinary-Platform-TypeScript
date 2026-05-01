
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
        



import { NullUtil } from "../../../../../org/allbinary/logic/NullUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Log } from "./Log.js";

export class LogFactory
            extends Object
         {
        

    /*actual*/ public static getInstance(specialMessage: string, anyType: any = {}, functionName: string, exception: any = {}): Log{
var specialMessage = specialMessage
var anyType = anyType
var functionName = functionName
var exception = exception



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Log(specialMessage, anyType, functionName, exception);
    
}


    /*actual*/ public static getInstanceF(specialMessage: string, anyType: any = {}, functionName: string): Log{
var specialMessage = specialMessage
var anyType = anyType
var functionName = functionName



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Log(specialMessage, anyType, functionName, NullUtil.getInstance()!.NULL_OBJECT);
    
}


}
                
            

