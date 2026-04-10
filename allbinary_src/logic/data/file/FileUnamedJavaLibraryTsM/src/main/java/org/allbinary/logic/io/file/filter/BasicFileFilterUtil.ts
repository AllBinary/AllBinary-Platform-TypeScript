
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
        



import { FileFilter } from "../../../../../../java/io/FileFilter.js";

    
import { IncludeFileExtensionsBooleanFileVisitor } from "../../../../../../org/allbinary/logic/io/file/visitor/IncludeFileExtensionsBooleanFileVisitor.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

export class BasicFileFilterUtil
            extends Object
         {
        

    public static getInstance(extension: string): FileFilter{
    //var extension = extension

    var vector: BasicArrayList = new BasicArrayList();
        
        

vector.add(extension)

    var includeFileExtensionsBooleanFileVisitor: IncludeFileExtensionsBooleanFileVisitor = new IncludeFileExtensionsBooleanFileVisitor(vector);
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return VisitorFileFilter(includeFileExtensionsBooleanFileVisitor) as FileFilter;
    
}

private constructor (){

            super();
            }


}
                
            

