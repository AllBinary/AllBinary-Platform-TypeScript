
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
        



//not game specific package import { FileInputStream } from '../../../../java/io/FileInputStream.js';
      const FileInputStream = globalThis.java.io.FileInputStream;

      
//not game specific package import { FileNotFoundException } from '../../../../java/io/FileNotFoundException.js';
      const FileNotFoundException = globalThis.java.io.FileNotFoundException;

      
//not game specific package import { IOException } from '../../../../java/io/IOException.js';
      const IOException = globalThis.java.io.IOException;

      
//not game specific package import { InputStream } from '../../../../java/io/InputStream.js';
      const InputStream = globalThis.java.io.InputStream;

      
//not game specific package import { FileChannel } from '../../../../java/nio/channels/FileChannel.js';
      const FileChannel = globalThis.java.nio.channels.FileChannel;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AbFileInputStream extends InputStream {
        

    private fileInputStream: FileInputStream;

public constructor (fileInputStream: FileInputStream){

            super();
        this.fileInputStream= fileInputStream;
    
}


    public mark(readlimit: number){
this.fileInputStream!.mark(readlimit);
    
}


    public markSupported(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fileInputStream!.markSupported();;
    
}


                //@Throws(IOException.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public reset(){
this.fileInputStream!.reset();
    
}


                //@Throws(IOException.constructor)
            
    public available(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fileInputStream!.available();;
    
}


    public close(){
this.fileInputStream!.close();
    
}


    public getChannel(): FileChannel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fileInputStream!.getChannel();;
    
}


                //@Throws(IOException.constructor)
            
    public read(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fileInputStream!.read();;
    
}


                //@Throws(IOException.constructor)
            
    public read(b: number[]): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fileInputStream!.read(b);;
    
}


                //@Throws(IOException.constructor)
            
    public read(buffer: number[], offset: number, count: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fileInputStream!.read(buffer, offset, count);;
    
}


                //@Throws(IOException.constructor)
            
    public skip(n: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fileInputStream!.skip(n);;
    
}


}
                
            

