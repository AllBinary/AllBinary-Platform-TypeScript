
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
        



import { File } from "../../../../../java/io/File.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class FilePathData
            extends Object
         {
        

    private static readonly instance: FilePathData = new FilePathData();
        
        

    public static getInstance(): FilePathData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly SEPARATORCHAR: string = File.separatorChar;
        
        

    public SEPARATOR: string = File.separator;
        
        
private constructor (){

            super();
        
                        if(File.separatorChar == '\\')
                        
                                    {
                                    this.SEPARATOR= File.separator +File.separator;
    

                                    }
                                
}


}
                
            

