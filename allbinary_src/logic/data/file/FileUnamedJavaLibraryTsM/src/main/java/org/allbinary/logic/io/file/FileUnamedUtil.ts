
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        



import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    

export class FileUnamedUtil
            extends Object
         {
        

    private static readonly instance: FileUnamedUtil = new FileUnamedUtil();
        
        

    public static getInstance(): FileUnamedUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

    public process(string: string): string{
var string = string

    var simplifiedString: string = string.lowercase()!;
        
        

simplifiedString= simplifiedString!.replace(commonSeps!.SPACE, commonSeps!.UNDERSCORE)
simplifiedString= simplifiedString!.replace(commonSeps!.DASH, commonSeps!.UNDERSCORE)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return simplifiedString;
    
}


}
                
            

