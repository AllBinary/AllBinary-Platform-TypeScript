
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
        



import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    

/*actual*/ export class LogFactory
            extends Object
         {
        

    /*actual*/ public static getInstance(specialMessage: string, anyType: any = {}, exception: any = {}): Log{
var specialMessage = specialMessage
var anyType = anyType
var exception = exception



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Log(specialMessage, anyType, StringUtil.getInstance()!.EMPTY_STRING, exception);
    
}


    /*actual*/ public static getInstance(specialMessage: string, anyType: any = {}, functionName: string, exception: any = {}): Log{
var specialMessage = specialMessage
var anyType = anyType
var functionName = functionName
var exception = exception



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Log(specialMessage, anyType, functionName, exception);
    
}


    /*actual*/ public static getInstance(specialMessage: string, anyType: any = {}, functionName: string): Log{
var specialMessage = specialMessage
var anyType = anyType
var functionName = functionName



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Log(specialMessage, anyType, functionName);
    
}


}
                
            

