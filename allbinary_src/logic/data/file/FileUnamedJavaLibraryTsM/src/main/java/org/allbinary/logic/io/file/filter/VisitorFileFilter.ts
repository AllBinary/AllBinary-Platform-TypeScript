
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
        



            import { Object } from '../../../../../../java/lang/Object.js';
        
//not game specific package import { File } from '../../../../../../java/io/File.js';
      const File = globalThis.java.io.File;

      
//not game specific package import { FileFilter } from '../../../../../../java/io/FileFilter.js';
      const FileFilter = globalThis.java.io.FileFilter;

      
//not game specific package import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { FileWrapperUtil } from '../../../../../../org/allbinary/logic/io/file/FileWrapperUtil.js';
      const FileWrapperUtil = globalThis.org.allbinary.logic.io.file.FileWrapperUtil;

      
//not game specific package import { VisitorInterface } from '../../../../../../org/allbinary/logic/util/visitor/VisitorInterface.js';
      const VisitorInterface = globalThis.org.allbinary.logic.util.visitor.VisitorInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class VisitorFileFilter
            extends Object
         implements FileFilter {
        

    private booleanVisitorInterface: VisitorInterface;

public constructor (booleanVisitorInterface: VisitorInterface){

            super();
        this.booleanVisitorInterface= booleanVisitorInterface;
    
}


    public accept(file: File): boolean{

    var abFile: AbFile = FileWrapperUtil.wrapFile(file)!;;
    

    var isFileAcceptable: boolean = visit = this.booleanVisitorInterface!.visit(abFile)visit as Boolean
visit.
                    .valueOf()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isFileAcceptable || file.isDirectory();
    
}


    public accept(file: AbFile): boolean{

    var isFileAcceptable: boolean = visit = this.booleanVisitorInterface!.visit(file)visit as Boolean
visit.
                    .valueOf()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isFileAcceptable || file.isDirectory();
    
}


}
                
            

