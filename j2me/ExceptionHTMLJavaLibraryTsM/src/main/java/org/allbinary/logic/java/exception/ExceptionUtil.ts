
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
        




/*actual*/ export class ExceptionUtil
            extends Object
         {
        

    private static readonly instance: ExceptionUtil = new ExceptionUtil();
        
        

    /*actual*/ public static getInstance(): ExceptionUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    /*actual*/ public static readonly PRETEND_EXCEPTION: Error = new Error("Not Really An Exception");
        
        
private constructor (){

            super();
            }


    private readonly NONE: string = "No Stack Trace";
        
        

    /*actual*/ public getStackTrace(e: Error): string{
var e = e
e.printStackTrace()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NONE;
    
}


}
                
            

