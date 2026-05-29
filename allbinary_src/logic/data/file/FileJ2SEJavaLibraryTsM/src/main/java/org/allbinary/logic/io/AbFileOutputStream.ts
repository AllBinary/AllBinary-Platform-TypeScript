
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
import { FileNotFoundException } from '../../../../java/io/FileNotFoundException.js';
      
import { FileOutputStream } from '../../../../java/io/FileOutputStream.js';
      
import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
      
import { AbFileNativeUtil } from '../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
      
















                                        
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
                
            

