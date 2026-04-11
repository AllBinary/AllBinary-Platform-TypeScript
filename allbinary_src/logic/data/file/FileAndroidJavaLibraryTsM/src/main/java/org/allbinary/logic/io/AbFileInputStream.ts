
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
        



import { FileInputStream } from "../../../../java/io/FileInputStream.js";

    
import { FileNotFoundException } from "../../../../java/io/FileNotFoundException.js";

    
import { IOException } from "../../../../java/io/IOException.js";

    
import { InputStream } from "../../../../java/io/InputStream.js";

    
import { FileChannel } from "../../../../java/nio/channels/FileChannel.js";

    

export class AbFileInputStream extends InputStream {
        

    private fileInputStream: FileInputStream
public constructor (fileInputStream: FileInputStream){

            super();
            var fileInputStream = fileInputStream
this.fileInputStream= fileInputStream;
    
}


    public mark(readlimit: number){
var readlimit = readlimit
this.fileInputStream!.mark(readlimit);
    
}


    public markSupported(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fileInputStream!.markSupported();

                        ;
    
}


                //@Throws(IOException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public reset(){
this.fileInputStream!.reset();
    
}


                //@Throws(IOException::class)
            
    public available(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fileInputStream!.available();

                        ;
    
}


    public close(){
this.fileInputStream!.close();
    
}


    public getChannel(): FileChannel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fileInputStream!.getChannel();

                        ;
    
}


                //@Throws(IOException::class)
            
    public read(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fileInputStream!.read();

                        ;
    
}


                //@Throws(IOException::class)
            
    public read(b: number[]): number{
var b = b



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fileInputStream!.read(b);

                        ;
    
}


                //@Throws(IOException::class)
            
    public read(buffer: number[], offset: number, count: number): number{
var buffer = buffer
var offset = offset
var count = count



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fileInputStream!.read(buffer, offset, count);

                        ;
    
}


                //@Throws(IOException::class)
            
    public skip(n: number): number{
var n = n



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fileInputStream!.skip(n);

                        ;
    
}


}
                
            

