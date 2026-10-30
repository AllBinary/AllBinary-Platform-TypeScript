
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
        
import { File } from '../../../../../../java/io/File.js';
//not GWT import const File

import { FileFilter } from '../../../../../../java/io/FileFilter.js';
//not GWT import const FileFilter

import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

import { FileWrapperUtil } from '../../../../../../org/allbinary/logic/io/file/FileWrapperUtil.js';
//not GWT import const FileWrapperUtil

import { VisitorInterface } from '../../../../../../org/allbinary/logic/util/visitor/VisitorInterface.js';
//not GWT import const VisitorInterface

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class VisitorFileFilter
            extends Object
         implements FileFilter {
        

    private booleanVisitorInterface: VisitorInterface;

public constructor (booleanVisitorInterface: VisitorInterface){

            super();
        this.booleanVisitorInterface= booleanVisitorInterface;
    
}

accept(...args: any[]): any {
   
    if (args.length === 1) return this.accept$overload1(args[0]);
   
    if (args.length === 1) return this.accept$overload2(args[0]);
   
   throw new TypeError('No matching overload: accept'); }
  
    public accept$overload1(file: File): boolean{

    let abFile: AbFile = FileWrapperUtil.wrapFile(file)!;;
    

    let isFileAcceptable: boolean = visit = this.booleanVisitorInterface!.visit(abFile)visit as Boolean
visit.
                    .valueOf()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isFileAcceptable || file.isDirectory();
    
}


    public accept$overload2(file: AbFile): boolean{

    let isFileAcceptable: boolean = visit = this.booleanVisitorInterface!.visit(file)visit as Boolean
visit.
                    .valueOf()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isFileAcceptable || file.isDirectory();
    
}


}

