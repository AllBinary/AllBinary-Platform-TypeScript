
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
        



import { AbFile } from "../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { AbPath } from "../../../../org/allbinary/logic/io/path/AbPath.js";

    

export class FileStreamFactory
            extends Object
         {
        

    private static readonly SINGLETON: FileStreamFactory = new FileStreamFactory();
        
        

    public static getInstance(): FileStreamFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}

private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public getFileInputStreamInstance(path: string, fileName: string): AbFileInputStream{
var path = path
var fileName = fileName

    var FILEABPATH: AbPath = new AbPath(path, fileName);
        
        
;
    

    var file: AbFile = new AbFile(FILEABPATH);
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbFileInputStream(file);
    
}


                //@Throws(Error::class)
            
    public getFileOutputStreamInstance(path: string, fileName: string): AbFileOutputStream{
var path = path
var fileName = fileName

    var FILEABPATH: AbPath = new AbPath(path, fileName);
        
        
;
    

    var file: AbFile = new AbFile(FILEABPATH);
        
        
;
    

                        if(file.exists())
                        
                                    {
                                    file.delete();
    
file.createNewFile();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbFileOutputStream(file);
    
}


                //@Throws(Error::class)
            
    public delete(path: string, fileName: string){
var path = path
var fileName = fileName

    var FILEABPATH: AbPath = new AbPath(path, fileName);
        
        
;
    

    var file: AbFile = new AbFile(FILEABPATH);
        
        
;
    
file.delete();
    
}


}
                
            

