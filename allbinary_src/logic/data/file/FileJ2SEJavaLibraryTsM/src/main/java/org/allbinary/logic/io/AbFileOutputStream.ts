
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
        



//not game specific package import { FileNotFoundException } from '../../../../java/io/FileNotFoundException.js';
      const FileNotFoundException = globalThis.java.io.FileNotFoundException;

      
//not game specific package import { FileOutputStream } from '../../../../java/io/FileOutputStream.js';
      const FileOutputStream = globalThis.java.io.FileOutputStream;

      
//not game specific package import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { AbFileNativeUtil } from '../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
      const AbFileNativeUtil = globalThis.org.allbinary.logic.io.file.AbFileNativeUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AbFileOutputStream extends FileOutputStream {
        

                //@Throws(FileNotFoundException.constructor)
            
    public static createFromAbFile(file: AbFile): AbFileOutputStream{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbFileOutputStream(file.getPath(), false);
    
}


                //@Throws(FileNotFoundException.constructor)
            
    public static createFromAbFileAppend(file: AbFile, append: boolean): AbFileOutputStream{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbFileOutputStream(file.getPath(), append);
    
}


                //@Throws(FileNotFoundException.constructor)
            
    public static createFromFilePath(name: string): AbFileOutputStream{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbFileOutputStream(name, false);
    
}


                //@Throws(FileNotFoundException.constructor)
            
    public static createFromFilePathAppend(name: string, append: boolean): AbFileOutputStream{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbFileOutputStream(name, append);
    
}


public constructor (name: string, append: boolean){
            super(name, append);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


}
                
            

