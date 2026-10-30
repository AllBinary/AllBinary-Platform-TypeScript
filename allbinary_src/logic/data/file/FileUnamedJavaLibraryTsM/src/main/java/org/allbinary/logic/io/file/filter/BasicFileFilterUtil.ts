
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
        
import { FileFilter } from '../../../../../../java/io/FileFilter.js';
//not GWT import const FileFilter

import { IncludeFileExtensionsBooleanFileVisitor } from '../../../../../../org/allbinary/logic/io/file/visitor/IncludeFileExtensionsBooleanFileVisitor.js';
//not GWT import const IncludeFileExtensionsBooleanFileVisitor

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { VisitorFileFilter } from './VisitorFileFilter.js';
//sameFolderImports - not GWT import - same folder const VisitorFileFilter

export class BasicFileFilterUtil
            extends Object
         {
        

    public static getInstance(extension: string): FileFilter{

    let vector: BasicArrayList = new BasicArrayListD();;
    
vector.add(extension);
    

    let includeFileExtensionsBooleanFileVisitor: IncludeFileExtensionsBooleanFileVisitor = new IncludeFileExtensionsBooleanFileVisitor(vector);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new VisitorFileFilter(includeFileExtensionsBooleanFileVisitor) as FileFilter;
    
}


private constructor (){

            super();
        }


}

