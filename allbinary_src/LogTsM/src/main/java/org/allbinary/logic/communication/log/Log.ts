
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
        



import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { LogFormatUtil } from "../../../../../org/allbinary/logic/communication/log/LogFormatUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class Log
            extends Object
         {
        

    private readonly logFormatUtil: LogFormatUtil = LogFormatUtil.getInstance()!;
        
        

    private readonly specialMessage: string

    private readonly anyType: any

    private readonly functionName: string

    private readonly exception: any
public constructor (specialMessage: string, anyType: any = {}, functionName: string, exception: any = {}){

            super();
                //var specialMessage = specialMessage
    //var anyType = anyType
    //var functionName = functionName
    //var exception = exception
this.specialMessage= specialMessage;
    
this.anyType= anyType;
    
this.functionName= functionName;
    
this.exception= exception;
    
}


    public getSpecialMessage(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.specialMessage;
    
}


    public getObject(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.anyType;
    
}


    public getFunctionName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.functionName;
    
}


    public getThrowable(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.exception;
    
}


    public toString(): string{

    var className: string = CommonStrings.getInstance()!.EMPTY;
        
        
;
    

    var clazz: Function = this.anyType!.constructor!;
        
        
;
    

                        if(clazz.toString()! != 
                                    null
                                )
                        
                                    {
                                    className= clazz.toString()!;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.logFormatUtil!.get(className, this.functionName, this.specialMessage, this.exception);

                        ;
    
}


}
                
            

