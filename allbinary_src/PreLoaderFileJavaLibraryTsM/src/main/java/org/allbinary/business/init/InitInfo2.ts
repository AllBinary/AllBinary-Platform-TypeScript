
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
        



import { Directory } from "../../../../org/allbinary/logic/io/file/directory/Directory.js";

    
import { AbPath } from "../../../../org/allbinary/logic/io/path/AbPath.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InitInfo2
            extends Object
         {
        

    private static readonly instance: InitInfo2 = new InitInfo2();
        
        

    public static getInstance(): InitInfo2{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly directory: Directory = Directory.getInstance()!;
        
        

    public isTestHtmlPathValid(value: AbPath): boolean{
var value = value



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directory.create(value);

                        ;
    
}


    public isMainPathValid(value: AbPath): boolean{
var value = value



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directory.create(value);

                        ;
    
}


}
                
            

