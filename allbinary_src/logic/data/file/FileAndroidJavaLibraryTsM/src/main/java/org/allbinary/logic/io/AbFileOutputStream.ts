
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
        



import { FileNotFoundException } from "../../../../java/io/FileNotFoundException.js";

    
import { FileOutputStream } from "../../../../java/io/FileOutputStream.js";

    
import { IOException } from "../../../../java/io/IOException.js";

    
import { OutputStream } from "../../../../java/io/OutputStream.js";

    
import { FileChannel } from "../../../../java/nio/channels/FileChannel.js";

    
import { AbFile } from "../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { AbFileNativeUtil } from "../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js";

    

export class AbFileOutputStream extends OutputStream {
        
public constructor (name: string){

            super();
            var name = name
this.fileOutputStream= FileOutputStream(name);
    
}


    private fileOutputStream: FileOutputStream
public constructor (file: AbFile){

            super();
            var file = file
this.fileOutputStream= FileOutputStream(AbFileNativeUtil.get(file));
    
}

public constructor (fileOutputStream: FileOutputStream){

            super();
            var fileOutputStream = fileOutputStream
this.fileOutputStream= fileOutputStream;
    
}


    public close(){
this.fileOutputStream!.close();
    
}


    public getChannel(): FileChannel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fileOutputStream!.getChannel();

                        ;
    
}


                //@Throws(IOException::class)
            
    public write(buffer: number[]){
var buffer = buffer
this.fileOutputStream!.write(buffer);
    
}


                //@Throws(IOException::class)
            
    public write(buffer: number[], offset: number, count: number){
var buffer = buffer
var offset = offset
var count = count
this.fileOutputStream!.write(buffer, offset, count);
    
}


                //@Throws(IOException::class)
            
    public write(b: number){
var b = b
this.fileOutputStream!.write(b);
    
}


}
                
            

