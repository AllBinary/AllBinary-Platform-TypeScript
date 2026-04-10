
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
        



import { BufferedWriter } from "../../../../java/io/BufferedWriter.js";

    
import { FileWriter } from "../../../../java/io/FileWriter.js";

    
import { AbFile } from "../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { AbFileNativeUtil } from "../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js";

    

export class BufferedWriterUtil
            extends Object
         {
        

    private static readonly instance: BufferedWriterUtil = new BufferedWriterUtil();
        
        

    public static getInstance(): BufferedWriterUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                @Throws(Exception::class)
            
    public overwrite(path: string, data: string){
    //var path = path
    //var data = data

    var abFile: AbFile = new AbFile(path);
        
        


    
                        if(abFile!.exists())
                        
                                    {
                                    delete()

                                    }
                                
this.write(abFile, data)
}


                @Throws(Exception::class)
            
    public overwrite(abFile: AbFile, data: string){
    //var abFile = abFile
    //var data = data

    
                        if(abFile!.exists())
                        
                                    {
                                    delete()

                                    }
                                
this.write(abFile, data)
}


                @Throws(Exception::class)
            
    public write(abFile: AbFile, data: string){
    //var abFile = abFile
    //var data = data

    var fileOut: BufferedWriter = new BufferedWriter(FileWriter(AbFileNativeUtil.get(abFile)));
        
        

write(data, 0, data.length)
newLine()
flush()
}


}
                
            

