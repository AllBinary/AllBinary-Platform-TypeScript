
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

        


import { FileNotFoundException } from '../../../../java/io/FileNotFoundException.js';
//not GWT import const FileNotFoundException

import { FileOutputStream } from '../../../../java/io/FileOutputStream.js';
//not GWT import const FileOutputStream

import { IOException } from '../../../../java/io/IOException.js';
//not GWT import const IOException

import { OutputStream } from '../../../../java/io/OutputStream.js';
//not GWT import const OutputStream

import { FileChannel } from '../../../../java/nio/channels/FileChannel.js';
//not GWT import const FileChannel

import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

import { AbFileNativeUtil } from '../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
//not GWT import const AbFileNativeUtil

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AbFileOutputStream extends OutputStream {
        

                //@Throws(FileNotFoundException.constructor)
            
    public static createFromAbFile(file: AbFile): AbFileOutputStream{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbFileOutputStream(new FileOutputStream(AbFileNativeUtil.get(file)));
    
}


                //@Throws(FileNotFoundException.constructor)
            
    public static createFromAbFileAppend(file: AbFile, append: boolean): AbFileOutputStream{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbFileOutputStream(new FileOutputStream(file.getPath()));
    
}


                //@Throws(FileNotFoundException.constructor)
            
    public static createFromFilePath(name: string): AbFileOutputStream{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbFileOutputStream(new FileOutputStream(name));
    
}


                //@Throws(FileNotFoundException.constructor)
            
    public static createFromFilePathAppend(name: string, append: boolean): AbFileOutputStream{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbFileOutputStream(new FileOutputStream(name));
    
}


    private fileOutputStream: FileOutputStream;

public constructor (fileOutputStream: FileOutputStream){

            super();
        this.fileOutputStream= fileOutputStream;
    
}


    public close(){
this.fileOutputStream!.close();
    
}


    public getChannel(): FileChannel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fileOutputStream!.getChannel();;
    
}

write(...args: any[]): any {
   
    if (args.length === 1) return this.write$overload1(args[0]);
   
    if (args.length === 3 && typeof args[1] === 'number' && typeof args[2] === 'number') return this.write$overload2(args[0], args[1], args[2]);
   
    if (args.length === 1 && typeof args[0] === 'number') return this.write$overload3(args[0]);
   
   throw new TypeError('No matching overload: write'); }
  
                //@Throws(IOException.constructor)
            
    public write$overload1(buffer: number[]){
this.fileOutputStream!.write(buffer);
    
}


                //@Throws(IOException.constructor)
            
    public write$overload2(buffer: number[], offset: number, count: number){
this.fileOutputStream!.write(buffer, offset, count);
    
}


                //@Throws(IOException.constructor)
            
    public write$overload3(b: number){
this.fileOutputStream!.write(b);
    
}


}

