
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
        



import { AbPathData } from "../../../../../../org/allbinary/logic/io/path/AbPathData.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HttpRequestUtil
            extends Object
         {
        

    private static readonly instance: HttpRequestUtil = new HttpRequestUtil();
        
        

    public static getInstance(): HttpRequestUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
        }


    public getLastSeparatorIndex(requestPath: string): number{
var requestPath = requestPath

    var beginIndex: number = requestPath!.lastIndexOf(AbPathData.getInstance()!.SEPARATOR)!;
        
        
;
    

                        if(beginIndex < 0)
                        
                                    {
                                    beginIndex= requestPath!.lastIndexOf("\\");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return beginIndex;
    
}


                //@Throws(Error::class)
            
    public generateFileName(requestPath: string): string{
var requestPath = requestPath

    var beginIndex: number = this.getLastSeparatorIndex(requestPath)!;
        
        
;
    

                        if(beginIndex < 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return requestPath;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return requestPath!.substring(beginIndex +1);;
    

                        }
                            
}


}
                
            

