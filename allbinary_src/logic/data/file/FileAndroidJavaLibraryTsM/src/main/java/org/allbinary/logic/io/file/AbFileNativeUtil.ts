
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
import { File } from '../../../../../java/io/File.js';
//not GWT import const File = globalThis.java.io.File;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbFile } from './AbFile.js';
//not GWT import - same folder const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

                
export class AbFileNativeUtil
            extends Object
         {
        

    public static get(file: AbFile): File{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return file.getFile();;
    
}


}



