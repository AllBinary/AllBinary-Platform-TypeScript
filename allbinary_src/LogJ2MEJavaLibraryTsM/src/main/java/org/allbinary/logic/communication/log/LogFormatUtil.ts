
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

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
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

    var stringBuffer: StringMaker = this.getF(className, functionName)!;
        
        
;
    
stringBuffer!.append(this.getO(exception));
    
stringBuffer!.append(this.SPECIAL_MESSAGE);
    
stringBuffer!.append(specialMessage);
    
stringBuffer!.append(this.commonSeps!.NEW_LINE);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


    /*actual*/ public getS(className: string, functionName: string, specialMessage: string): string{
    //var className = className
    //var functionName = functionName
    //var specialMessage = specialMessage

    var stringBuffer: StringMaker = this.getF(className, functionName)!;
        
        
;
    
stringBuffer!.append(this.SPECIAL_MESSAGE);
    
stringBuffer!.append(specialMessage);
    
stringBuffer!.append(this.commonSeps!.NEW_LINE);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


    getF(className: string, functionName: string): StringMaker{
    //var className = className
var functionName = functionName

                        if(functionName == 
                                    null
                                )
                        
                                    {
                                    functionName= this.NONE;
    

                                    }
                                

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.TIME);
    
stringBuffer!.append(this.timeStampUtil!.getAsString());
    
stringBuffer!.append(this.CLASS_NAME);
    
stringBuffer!.append(className);
    
stringBuffer!.append(this.FUNCTION_CALL);
    
stringBuffer!.append(functionName);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer;
    
}


    private readonly stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

    private readonly exceptionUtil: ExceptionUtil = ExceptionUtil.getInstance()!;
        
        

    private readonly nullUtil: NullUtil = NullUtil.getInstance()!;
        
        

    /*actual*/ public getO(exception: any = {}): string{
    //var exception = exception

                        if(exception != this.nullUtil!.NULL_OBJECT)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.LOG_ERROR);
    

    var exceptionAsString: string = exception.toString()!;
        
        
;
    

                        if(exceptionAsString != 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append(exceptionAsString);
    

                                    }
                                
                        else {
                            stringBuffer!.append(this.EMPTY);
    

                        }
                            
stringBuffer!.append(this.STACK_TRACE);
    

                        if(exception != this.nullUtil!.NULL_OBJECT)
                        
                                    {
                                    stringBuffer!.append(this.exceptionUtil!.getStackTrace(exception as Error));
    

                                    }
                                
                        else {
                            stringBuffer!.append(this.stringUtil!.NULL_STRING);
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    

                        }
                            
}


}
                
            

