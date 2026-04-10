
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
        



import { ByteArrayOutputStream } from "../../../../../java/io/ByteArrayOutputStream.js";

    
import { PrintStream } from "../../../../../java/io/PrintStream.js";

    

/*actual*/ export class ExceptionUtil
            extends Object
         {
        

    private static readonly instance: ExceptionUtil = new ExceptionUtil();
        
        

    /*actual*/ public static getInstance(): ExceptionUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    /*actual*/ public static readonly PRETEND_EXCEPTION: Exception = new Exception("Not Really An Exception");
        
        
private constructor (){

            super();
            }


    private readonly NONE: string = "No Stack Trace";
        
        

    /*actual*/ public getStackTrace(e: Throwable): string{
    //var e = e

    
                        if(e != 
                                    null
                                )
                        
                                    {
                                    
    var byteArrayOutputStream: ByteArrayOutputStream = new ByteArrayOutputStream();
        
        


    var printStream: PrintStream = new PrintStream(byteArrayOutputStream);
        
        

printStackTrace(printStream)

    var output: string = byteArrayOutputStream!.toString()!;
        
        


    
                        if(output != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return output.toCharArray()
                                        .slice(0, ).join('')
                                    ;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NONE;
    
}


}
                
            

