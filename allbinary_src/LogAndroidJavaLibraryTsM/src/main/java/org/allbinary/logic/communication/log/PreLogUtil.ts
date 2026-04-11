
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

    

/*actual*/ export class PreLogUtil
            extends Object
         {
        

    /*actual*/ public static put(specialMessage: string, anyType: any = {}, functionName: string){
    //var specialMessage = specialMessage
    //var anyType = anyType
    //var functionName = functionName
putOE(specialMessage, anyType, functionName, NullUtil.getInstance()!.NULL_OBJECT);
    
}


    private static readonly LABEL: string = "org.allbinary";
        
        

    /*actual*/ public static putOE(specialMessage: string, anyType: any = {}, functionName: string, exception: any = {}){
    //var specialMessage = specialMessage
    //var anyType = anyType
    //var functionName = functionName
    //var exception = exception

    var className: string = LABEL;
        
        
;
    

    var actualClassName: string = anyType!.constructor.name.toString()!!;
        
        
;
    

                        if(actualClassName != 
                                    null
                                )
                        
                                    {
                                    className= actualClassName;
    

                                    }
                                

    var message: string = LogFormatUtil.getInstance()!.get(className, functionName, specialMessage, exception)!;
        
        
;
    
android.util.Log.i(LABEL, message);
    
}


    /*actual*/ public static putS(specialMessage: string, className: string, functionName: string){
    //var specialMessage = specialMessage
    //var className = className
    //var functionName = functionName
putSE(specialMessage, className, functionName, NullUtil.getInstance()!.NULL_OBJECT);
    
}


    /*actual*/ public static putSE(specialMessage: string, className: string, functionName: string, exception: any = {}){
    //var specialMessage = specialMessage
    //var className = className
    //var functionName = functionName
    //var exception = exception

    var message: string = LogFormatUtil.getInstance()!.get(className, functionName, specialMessage, exception)!;
        
        
;
    
android.util.Log.i(className, message);
    
}

public constructor (){

            super();
            }


}
                
            

