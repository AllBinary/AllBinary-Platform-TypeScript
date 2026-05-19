
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
      
import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
      
import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      
import { CommonSeps } from '../../../../../../org/allbinary/string/CommonSeps.js';
      
import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Directory } from './Directory.js';

export class SubDirectory
            extends Object
         {
        

    private static readonly instance: SubDirectory = new SubDirectory();

    public static getInstance(): SubDirectory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SubDirectory.instance;
    
}


    public static toString(files: BasicArrayList): string{

    var stringBuffer: StringMaker = new StringMaker();
;
    

    var NEW_LINE: string = CommonSeps.getInstance()!.NEW_LINE;
;
    

    var size: number = files.size()!;
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {

    var file: AbFile = files.get(index) as AbFile;
;
    
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


    public search(fileFilter: FileFilter, file: AbFile): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.directory.search(fileFilter, file, true);;
    
}


    public search(file: AbFile): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.directory.search(file, true);;
    
}


    public search(searchValue: string, file: AbFile): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.directory.search(searchValue, file, true);;
    
}


    public search(level: number, file: AbFile): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.directory.search(level, file, true);;
    
}


}
                
            

