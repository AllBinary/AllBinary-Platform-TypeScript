
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
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { ByteArrayOutputStream } from '../../../../../java/io/ByteArrayOutputStream.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        //ActualPlatform
/*actual*/ export class ExceptionUtil
            extends Object
         {
        

    private static readonly instance: ExceptionUtil = new ExceptionUtil();

    /*actual*/ public static getInstance(): ExceptionUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ExceptionUtil.instance;
    
}

private constructor (){

            super();
        }


    /*actual*/ public readonly PRETEND_EXCEPTION: Exception = new Exception("Not Really An Exception");

    private readonly NONE: string = "No Stack Trace";

    /*actual*/ public getStackTrace(e: Throwable): string{
var e = e

    var bs: ByteArrayOutputStream = new ByteArrayOutputStream();
;
    
e.printStackTrace();
    

    var output: string = bs.toString()!;
;
    

                        if(output != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return output.toCharArray()
                                        .slice(0, ).join('')
                                    ;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.NONE;
    
}


}
                
            

