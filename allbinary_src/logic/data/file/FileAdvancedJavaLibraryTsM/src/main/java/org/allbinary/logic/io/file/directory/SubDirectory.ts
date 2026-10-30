
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

import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Directory } from './Directory.js';
//sameFolderImports - not GWT import - same folder const Directory

export class SubDirectory
            extends Object
         {
        

    private static readonly instance: SubDirectory = new SubDirectory();

    public static getInstance(): SubDirectory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SubDirectory.instance;
    
}


    public static toString(files: BasicArrayList): string{

    let stringBuffer: StringMaker = new StringMaker();;
    

    let NEW_LINE: string = CommonSeps.getInstance()!.NEW_LINE;;
    

    let size: number = files.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let file: AbFile = files.get(index) as AbFile;;
    
stringBuffer!.append(file.getPath());
    
stringBuffer!.append(NEW_LINE);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    private readonly directory: Directory = Directory.getInstance()!;

private constructor (){

            super();
        }

search(...args: any[]): any {
   
    if (args.length === 2) return this.search$overload1(args[0], args[1]);
   
    if (args.length === 1) return this.search$overload2(args[0]);
   
    if (args.length === 2 && typeof args[0] === 'string') return this.search$overload3(args[0], args[1]);
   
    if (args.length === 2 && typeof args[0] === 'number') return this.search$overload4(args[0], args[1]);
   
   throw new TypeError('No matching overload: search'); }
  
    public search$overload1(fileFilter: FileFilter, file: AbFile): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.directory.search(fileFilter, file, true);;
    
}


    public search$overload2(file: AbFile): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.directory.search(file, true);;
    
}


    public search$overload3(searchValue: string, file: AbFile): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.directory.search(searchValue, file, true);;
    
}


    public search$overload4(level: number, file: AbFile): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.directory.search(level, file, true);;
    
}


}

