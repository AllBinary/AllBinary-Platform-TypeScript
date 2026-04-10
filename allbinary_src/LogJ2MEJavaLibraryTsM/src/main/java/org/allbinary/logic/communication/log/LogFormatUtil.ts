
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

    
import { ExceptionUtil } from "../../../../../org/allbinary/logic/java/exception/ExceptionUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonLabels } from "../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { TimeStampUtil } from "../../../../../org/allbinary/time/TimeStampUtil.js";

    

/*actual*/ export class LogFormatUtil
            extends Object
         {
        

    private static readonly instance: LogFormatUtil = new LogFormatUtil();
        
        

    /*actual*/ public static getInstance(): LogFormatUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LogFormatUtil.instance;
    
}


    private readonly timeStampUtil: TimeStampUtil = TimeStampUtil.getInstance()!;
        
        

    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

    private readonly NONE: string = "None";
        
        

    private readonly LOG_ERROR: string = "\nLog-Error: ";
        
        

    private readonly EMPTY: string = "Empty";
        
        

    private readonly STACK_TRACE: string = "\nStack Trace: ";
        
        

    private readonly TIME: string = "Time: ";
        
        

    private readonly CLASS_NAME: string = this.commonSeps!.SPACE;
        
        

    private readonly FUNCTION_CALL: string = CommonLabels.getInstance()!.COLON_SEP;
        
        

    private readonly SPECIAL_MESSAGE: string = "> ";
        
        
private constructor (){

            super();
            }


    /*actual*/ public get(className: string, functionName: string, specialMessage: string, exception: any = {}): string{
    //var className = className
    //var functionName = functionName
    //var specialMessage = specialMessage
    //var exception = exception

    var stringBuffer: StringMaker = get(className, functionName)!;
        
        

append(this.get(exception))
append(this.SPECIAL_MESSAGE)
append(specialMessage)
append(this.commonSeps!.NEW_LINE)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    /*actual*/ public get(className: string, functionName: string, specialMessage: string): string{
    //var className = className
    //var functionName = functionName
    //var specialMessage = specialMessage

    var stringBuffer: StringMaker = get(className, functionName)!;
        
        

append(this.SPECIAL_MESSAGE)
append(specialMessage)
append(this.commonSeps!.NEW_LINE)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    get(className: string, functionName: string): StringMaker{
    //var className = className
var functionName = functionName

                        if(functionName == 
                                    null
                                )
                        
                                    {
                                    functionName= this.NONE

                                    }
                                

    var stringBuffer: StringMaker = new StringMaker();
        
        

append(this.TIME)
append(this.timeStampUtil!.getAsString())
append(this.CLASS_NAME)
append(className)
append(FUNCTION_CALL)
append(functionName)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer;
    
}


    private readonly stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

    private readonly exceptionUtil: ExceptionUtil = ExceptionUtil.getInstance()!;
        
        

    private readonly nullUtil: NullUtil = NullUtil.getInstance()!;
        
        

    /*actual*/ public get(exception: any = {}): string{
    //var exception = exception

                        if(exception != this.nullUtil!.NULL_OBJECT)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append(this.LOG_ERROR)

    var exceptionAsString: string = exception.toString()!;
        
        


                        if(exceptionAsString != 
                                    null
                                )
                        
                                    {
                                    append(exceptionAsString)

                                    }
                                
                        else {
                            append(this.EMPTY)

                        }
                            
append(this.STACK_TRACE)

                        if(exception != this.nullUtil!.NULL_OBJECT)
                        
                                    {
                                    append(exceptionUtil!.getStackTrace(exception as Throwable))

                                    }
                                
                        else {
                            append(this.stringUtil!.NULL_STRING)

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    

                        }
                            
}


}
                
            

