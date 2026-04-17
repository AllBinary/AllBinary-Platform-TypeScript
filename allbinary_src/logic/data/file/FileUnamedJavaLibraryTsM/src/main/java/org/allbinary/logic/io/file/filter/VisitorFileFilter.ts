
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
        



import { File } from "../../../../../../java/io/File.js";

    
import { FileFilter } from "../../../../../../java/io/FileFilter.js";

    
import { AbFile } from "../../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { FileWrapperUtil } from "../../../../../../org/allbinary/logic/io/file/FileWrapperUtil.js";

    
import { VisitorInterface } from "../../../../../../org/allbinary/logic/util/visitor/VisitorInterface.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class VisitorFileFilter
            extends Object
         implements FileFilter {
        

    private booleanVisitorInterface: VisitorInterface
public constructor (booleanVisitorInterface: VisitorInterface){

            super();
            var booleanVisitorInterface = booleanVisitorInterface
this.booleanVisitorInterface= booleanVisitorInterface;
    
}


    public accept(file: File): boolean{
var file = file

    var abFile: AbFile = FileWrapperUtil.wrapFile(file)!;
        
        
;
    

    var isFileAcceptable: boolean = visit = this.booleanVisitorInterface!.visit(abFile);

                        visit as Boolean
visit.
                    !;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isFileAcceptable || file.isDirectory();
    
}


    public accept(file: AbFile): boolean{
var file = file

    var isFileAcceptable: boolean = visit = this.booleanVisitorInterface!.visit(file);

                        visit as Boolean
visit.
                    !;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isFileAcceptable || file.isDirectory();
    
}


}
                
            

