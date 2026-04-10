
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

    

export class DataOutputStreamFactory
            extends Object
         {
        

    private static readonly instance: DataOutputStreamFactory = new DataOutputStreamFactory();
        
        

    public static getInstance(): DataOutputStreamFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                //@Throws(Error::class)
            
    public getInstance(file: AbFile): AbDataOutputStream{
var file = file

    var idFileOutputStream: AbFileOutputStream = new AbFileOutputStream(file);
        
        


    var idOutData: AbDataOutputStream = new AbDataOutputStream(idFileOutputStream);
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return idOutData;
    
}


                //@Throws(Error::class)
            
    public getInstance(filePath: string, fileName: string): AbDataOutputStream{
var filePath = filePath
var fileName = fileName

    var fileStreamFactory: FileStreamFactory = FileStreamFactory.getInstance()!;
        
        


    var fileOutputStream: AbFileOutputStream = fileStreamFactory!.getFileOutputStreamInstance(filePath, fileName)!;
        
        


    var idOutData: AbDataOutputStream = new AbDataOutputStream(fileOutputStream);
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return idOutData;
    
}


}
                
            

