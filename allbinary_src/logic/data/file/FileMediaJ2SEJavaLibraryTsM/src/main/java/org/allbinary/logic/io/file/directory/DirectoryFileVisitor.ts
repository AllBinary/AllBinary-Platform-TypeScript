
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2002 AllBinary 
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
        



import { File } from "../../../../../../java/io/File.js";

    
import { FileFilter } from "../../../../../../java/io/FileFilter.js";

    
import { VisitorInterface } from "../../../../../../org/allbinary/logic/util/visitor/VisitorInterface.js";

    

export class DirectoryFileVisitor
            extends Object
        
                , VisitorInterface
                , FileFilter {
        
public constructor (){

            super();
            }


    public accept(arg0: java.io.File): boolean{
var arg0 = arg0



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return visit = this.visit(arg0 as Object)visit as Boolean
visit.
                    ;
    
}


    public visit(anyType: any = {}): any = {}{
var anyType = anyType

    var file: File = anyType as File;
        
        


    var index: number = 1;
        
        


    var aFile: File = file.getParentFile()!;
        
        


        while((aFile= aFile!.getParentFile()) != 
                                    null
                                )
        {
index++
}


                        if(file.isDirectory() && index < 5)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}


}
                
            

