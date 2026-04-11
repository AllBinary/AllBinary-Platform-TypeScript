
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
        



import { BufferedReader } from "../../../../java/io/BufferedReader.js";

    
import { FileReader } from "../../../../java/io/FileReader.js";

    
import { AbFile } from "../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { AbFileNativeUtil } from "../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js";

    

export class BufferedLineReader
            extends Object
         {
        

    private readonly tmpIn: BufferedReader
public constructor (file: AbFile){

            super();
            var file = file
this.tmpIn= BufferedReader(FileReader(AbFileNativeUtil.get(file)));
    
}


    public readUpToLines(readAheadIndex: number){
var readAheadIndex = readAheadIndex
}


                //@Throws(Error::class)
            
    public readLine(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tmpIn!.readLine();

                        ;
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public getCurrent(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


}
                
            

