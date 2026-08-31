
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { CharSequence } from '../../../../../java/lang/CharSequence.js';
        
import { ByteArrayOutputStream } from '../../../../../java/io/ByteArrayOutputStream.js';
      //not GWT import const ByteArrayOutputStream = globalThis.java.io.ByteArrayOutputStream;

      
import { IOException } from '../../../../../java/io/IOException.js';
      //not GWT import const IOException = globalThis.java.io.IOException;

      
import { InputStream } from '../../../../../java/io/InputStream.js';
      //not GWT import const InputStream = globalThis.java.io.InputStream;

      
import { OutputStream } from '../../../../../java/io/OutputStream.js';
      //not GWT import const OutputStream = globalThis.java.io.OutputStream;

      
import { Reader } from '../../../../../java/io/Reader.js';
      //not GWT import const Reader = globalThis.java.io.Reader;

      
import { Writer } from '../../../../../java/io/Writer.js';
      //not GWT import const Writer = globalThis.java.io.Writer;

      
import { CharBuffer } from '../../../../../java/nio/CharBuffer.js';
      //not GWT import const CharBuffer = globalThis.java.nio.CharBuffer;

      
//not plain js import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { StreamUtil } from '../../../../../org/allbinary/logic/io/StreamUtil.js';
      //not GWT import const StreamUtil = globalThis.org.allbinary.logic.io.StreamUtil;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class SimpleFileUtil
            extends Object
         {
        

    private static readonly instance: SimpleFileUtil = new SimpleFileUtil();

    public static getInstance(): SimpleFileUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SimpleFileUtil.instance;
    
}


    public static nullOutputStream(): OutputStream{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new class extends OutputStream
                                {
                                
                //@Throws(IOException.constructor)
            
    public write(b: number){
}

                //@Throws(IOException.constructor)
            
    public write(b: number[], off: number, len: number){
}

    public close(){
}

                                }
                            ;
    
}


    public static nullWriter(): Writer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new class extends Writer
                                {
                                
    private closed: boolean= false;
                //@Throws(IOException.constructor)
            
    public append(c: string): Writer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this;
    
}

                //@Throws(IOException.constructor)
            
    public append(csq: CharSequence): Writer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this;
    
}

                //@Throws(IOException.constructor)
            
    public append(csq: CharSequence, start: number, end: number): Writer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this;
    
}

                //@Throws(IOException.constructor)
            
    public write(c: number){
}

                //@Throws(IOException.constructor)
            
    public write(cbuf: string[], off: number, len: number){
}

                //@Throws(IOException.constructor)
            
    public write(str: string){
}

                //@Throws(IOException.constructor)
            
    public write(str: string, off: number, len: number){
}

                //@Throws(IOException.constructor)
            
    public flush(){
}

    public close(){
}

                                }
                            ;
    
}


    public static nullReader(): Reader{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new class extends Reader
                                {
                                
                //@Throws(IOException.constructor)
            
    public read(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}

                //@Throws(IOException.constructor)
            
    public read(cbuf: string[], off: number, len: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}

                //@Throws(IOException.constructor)
            
    public read(target: CharBuffer): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}

                //@Throws(IOException.constructor)
            
    public ready(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

                //@Throws(IOException.constructor)
            
    public skip(n: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}

    public close(){
}

                                }
                            ;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    public readonly NULL_WRITER: Writer = SimpleFileUtil.nullWriter()!;

    public readonly NULL_READER: Reader = SimpleFileUtil.nullReader()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly nullUtil: NullUtil = NullUtil.getInstance()!;

    private readonly streamUtil: StreamUtil = StreamUtil.getInstance()!;

    public loadFileAsList(inputStream: InputStream, max: number, byteArray1: number[]): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.loadFileAsListReturnLine(inputStream, max, byteArray1, 0);;
    
}


    public loadFileAsListReturnLine(inputStream: InputStream, max: number, byteArray1: number[], includeReturnLine: number): BasicArrayList{

    var stringList: BasicArrayList = new BasicArrayListD();;
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringList;
    

                                    }
                                

    var byteArray: number[] = this.nullUtil!.NULL_BYTE_ARRAY;;
    

        try {
            
    var outputStream2: ByteArrayOutputStream = new ByteArrayOutputStream(max);;
    
byteArray= this.streamUtil!.getByteArray(inputStream, outputStream2, byteArray1);
    
this.streamUtil!.close(inputStream);
    

                //: 
} catch(e) 
            {
this.streamUtil!.close(inputStream);
    
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.ADD, e);
    
}


                        if(byteArray == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringList;
    

                                    }
                                

    var size: number = byteArray!.length
                ;;
    

    var index: number = 0;;
    

    var startIndex: number= 0;;
    

    var returnLine: number = 0;;
    

        while(index < size)
        {
startIndex= index;
    

        while(index < size -1 && byteArray[index] != .code'\n'.code)
        {
index++;
    
}


                        if(includeReturnLine == 0)
                        
                                    {
                                    
                        if(index > 0 && byteArray[index -1] == .code'\r'.code)
                        
                                    {
                                    returnLine= 1;
    

                                    }
                                
                        else {
                            returnLine= 0;
    

                        }
                            

                                    }
                                

    var s: string = String.fromCharCode(...byteArray);;
    
stringList!.add(s);
    
index++;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringList;
    
}


    public createStringFromArrayOfStrings(stringArray: string[]): string{

    var stringMaker: StringMaker = new StringMaker();;
    

    var size: number = stringArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
stringMaker!.append(stringArray[index]!);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringMaker!.toString();;
    
}


}



