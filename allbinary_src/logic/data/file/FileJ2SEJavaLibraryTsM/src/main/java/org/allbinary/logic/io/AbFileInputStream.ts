
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
        



//not game specific package import { File } from '../../../../java/io/File.js';
      const File = globalThis.java.io.File;

      
//not game specific package import { FileInputStream } from '../../../../java/io/FileInputStream.js';
      const FileInputStream = globalThis.java.io.FileInputStream;

      
//not game specific package import { FileNotFoundException } from '../../../../java/io/FileNotFoundException.js';
      const FileNotFoundException = globalThis.java.io.FileNotFoundException;

      
//not game specific package import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { AbFileNativeUtil } from '../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
      const AbFileNativeUtil = globalThis.org.allbinary.logic.io.file.AbFileNativeUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AbFileInputStream extends FileInputStream {
        

public constructor (name: string){
            super(name);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


public constructor (file: AbFile){
            super(AbFileNativeUtil.get(file));
                    

                            //For kotlin this is before the body of the constructor.
                    
}


protected constructor (file: File){
            super(file);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


}



