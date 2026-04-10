
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

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

/*actual*/ export class PreLogUtil
            extends Object
         {
        

    /*actual*/ public static put(specialMessage: string, anyType: any = {}, functionName: string){
    //var specialMessage = specialMessage
    //var anyType = anyType
    //var functionName = functionName
put(specialMessage, anyType, functionName, NullUtil.getInstance()!.NULL_OBJECT)
}


    private static readonly LOG_SUCCESS: string = "org.allbinary: ";
        
        

    /*actual*/ public static put(specialMessage: string, anyType: any = {}, functionName: string, exception: any = {}){
    //var specialMessage = specialMessage
    //var anyType = anyType
    //var functionName = functionName
    //var exception = exception

    var className: string = CommonStrings.getInstance()!.EMPTY;
        
        


                        if(anyType!::class.toString()! != 
                                    null
                                )
                        
                                    {
                                    className= anyType!::class.toString()!.toCharArray().concatToString()
                                

                                    }
                                

    var message: string = LogFormatUtil.getInstance()!.get(className, functionName, specialMessage, exception)!;
        
        

System.out.print(LOG_SUCCESS)
System.out.println(message)
}


    /*actual*/ public static put(specialMessage: string, className: string, functionName: string, exception: any = {}){
var specialMessage = specialMessage
var className = className
var functionName = functionName
var exception = exception

    var message: string = LogFormatUtil.getInstance()!.get(className, functionName, specialMessage, exception)!;
        
        

System.out.print(LOG_SUCCESS)
System.out.println(message)
}

public constructor (){

            super();
            }


}
                
            

