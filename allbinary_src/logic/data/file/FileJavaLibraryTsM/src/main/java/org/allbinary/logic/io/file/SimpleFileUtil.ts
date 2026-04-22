
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        



import { ByteArrayOutputStream } from "../../../../../java/io/ByteArrayOutputStream.js";

    
import { IOException } from "../../../../../java/io/IOException.js";

    
import { InputStream } from "../../../../../java/io/InputStream.js";

    
import { Reader } from "../../../../../java/io/Reader.js";

    
import { Writer } from "../../../../../java/io/Writer.js";

    
import { CharBuffer } from "../../../../../java/nio/CharBuffer.js";

    
import { NullUtil } from "../../../../../org/allbinary/logic/NullUtil.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StreamUtil } from "../../../../../org/allbinary/logic/io/StreamUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class SimpleFileUtil
            extends Object
         {
        

    private static readonly instance: SimpleFileUtil = new SimpleFileUtil();
        
        

    public static getInstance(): SimpleFileUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public static nullWriter(): Writer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new object: Writer()
                                {
                                
    var private closed: boolean= false

                //@Throws(IOException::class)
            
    public append(c: string): Writer{
var c = c



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this;
    
}

                //@Throws(IOException::class)
            
    public append(csq: CharSequence): Writer{
var csq = csq



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this;
    
}

                //@Throws(IOException::class)
            
    public append(csq: CharSequence, start: number, end: number): Writer{
var csq = csq
var start = start
var end = end



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this;
    
}

                //@Throws(IOException::class)
            
    public write(c: number){
var c = c
}

                //@Throws(IOException::class)
            
    public write(cbuf: string[], off: number, len: number){
var cbuf = cbuf
var off = off
var len = len
}

                //@Throws(IOException::class)
            
    public write(str: string){
var str = str
}

                //@Throws(IOException::class)
            
    public write(str: string, off: number, len: number){
var str = str
var off = off
var len = len
}

                //@Throws(IOException::class)
            
    public flush(){
}

    public close(){
}

                                }
                            ;
    
}


    public static nullReader(): Reader{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new object: Reader()
                                {
                                
                //@Throws(IOException::class)
            
    public read(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}

                //@Throws(IOException::class)
            
    public read(cbuf: string[], off: number, len: number): number{
var cbuf = cbuf
var off = off
var len = len



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}

                //@Throws(IOException::class)
            
    public read(target: CharBuffer): number{
var target = target



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}

                //@Throws(IOException::class)
            
    public ready(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

                //@Throws(IOException::class)
            
    public skip(n: number): number{
var n = n



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0L;
    
}

    public close(){
}

                                }
                            ;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public readonly NULL_WRITER: Writer = nullWriter()!;
        
        

    public readonly NULL_READER: Reader = nullReader()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly nullUtil: NullUtil = NullUtil.getInstance()!;
        
        

    private readonly streamUtil: StreamUtil = StreamUtil.getInstance()!;
        
        

    public loadFileAsList(inputStream: InputStream, max: number, byteArray1: number[]): BasicArrayList{
    //var inputStream = inputStream
    //var max = max
    //var byteArray1 = byteArray1



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.loadFileAsList(inputStream, max, byteArray1, 0);

                        ;
    
}


    public loadFileAsList(inputStream: InputStream, max: number, byteArray1: number[], includeReturnLine: number): BasicArrayList{
    //var inputStream = inputStream
    //var max = max
    //var byteArray1 = byteArray1
    //var includeReturnLine = includeReturnLine

    var stringList: BasicArrayList = new BasicArrayList();
        
        
;
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringList;
    

                                    }
                                

    var byteArray: number[] = this.nullUtil!.NULL_BYTE_ARRAY;
        
        
;
    

        try {
            
    var outputStream2: ByteArrayOutputStream = new ByteArrayOutputStream(max);
        
        
;
    
byteArray= this.streamUtil!.getByteArray(inputStream, outputStream2, byteArray1);
    
this.streamUtil!.close(inputStream);
    

                //: 
} catch(e) 
            {
streamUtil!.close(inputStream);
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.ADD, e);
    
}


                        if(byteArray == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringList;
    

                                    }
                                

    var size: number = byteArray!.length
                ;
        
        
;
    

    var index: number = 0;
        
        
;
    

    var startIndex: number= 0
;
    

    var returnLine: number = 0;
        
        
;
    

        while(index < size)
        {
startIndex= index;
    

        while(index < size -1 && byteArray[index] != '\n'.code.toByte())
        {
index++;
    
}


                        if(includeReturnLine == 0)
                        
                                    {
                                    
                        if(index > 0 && byteArray[index -1] == '\r'.code.toByte())
                        
                                    {
                                    returnLine= 1;
    

                                    }
                                
                        else {
                            returnLine= 0;
    

                        }
                            

                                    }
                                

    var s: string = byteArray.decodeToString();
        
        
;
    
stringList!.add(s);
    
index++;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringList;
    
}


    public createStringFromArrayOfStrings(stringArray: string[]): string{
    //var stringArray = stringArray

    var stringMaker: StringMaker = new StringMaker();
        
        
;
    

    var size: number = stringArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
stringMaker!.append(stringArray[index]!);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringMaker!.toString();

                        ;
    
}


}
                
            

