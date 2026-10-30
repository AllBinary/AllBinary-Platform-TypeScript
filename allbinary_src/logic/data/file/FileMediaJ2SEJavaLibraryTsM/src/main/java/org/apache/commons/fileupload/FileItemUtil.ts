
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { ByteArrayOutputStream } from '../../../../java/io/ByteArrayOutputStream.js';
//not GWT import const ByteArrayOutputStream

import { InputStream } from '../../../../java/io/InputStream.js';
//not GWT import const InputStream

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { StreamUtil } from '../../../../org/allbinary/logic/io/StreamUtil.js';
//not GWT import const StreamUtil

import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

import { AbFileNativeUtil } from '../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
//not GWT import const AbFileNativeUtil

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { FileItemStream } from './FileItemStream.js';
//not GWT import - same folder const FileItemStream
import { FileItem } from './FileItem.js';
//not GWT import - same folder const FileItem

export class FileItemUtil
            extends Object
         {
        

    private static readonly instance: FileItemUtil = new FileItemUtil();

    public static getInstance(): FileItemUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FileItemUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    public readonly DEFAULT_CHARSET: string = "ISO-8859-1";
getString(...args: any[]): any {
   
    if (args.length === 1) return this.getString$overload1(args[0]);
   
    if (args.length === 1) return this.getString$overload2(args[0]);
   
   throw new TypeError('No matching overload: getString'); }
  
                //@Throws(Exception.constructor)
            
    public getString$overload1(byteArray: number[]): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return byteArray;
    
}


                //@Throws(Exception.constructor)
            
    public getString$overload2(fileItem: FileItemStream): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getBytes.toCharArray().slice(0, ).join('');
    
}


                //@Throws(Exception.constructor)
            
    public getBytes(fileItem: FileItemStream): number[]{

    let streamUtil: StreamUtil = StreamUtil.getInstance()!;;
    

    let inputStream: InputStream = 
                null
            ;;
    

    let outputStream: ByteArrayOutputStream = 
                null
            ;;
    

 try { inputStream= fileItem!.openStream();
    
outputStream= new ByteArrayOutputStream();
    

                        if(fileItem!.isFormField())
                        
                                    {
                                    this.logUtil!.putF("FileItemStream FieldName: " +fileItem!.getFieldName(), this, "write()");
    

                                    }
                                
                        else {
                            
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Uploaded File FieldName: ");
    
stringBuffer!.append(fileItem!.getFieldName());
    
stringBuffer!.append(" name = ");
    
stringBuffer!.append(fileItem!.getName());
    
this.logUtil!.putF(stringBuffer!.toString(), this, "write()");
    

                        }
                            
outputStream= streamUtil!.get(inputStream, outputStream, new Array(16384)) as ByteArrayOutputStream;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return outputStream!.toByteArray();;
    
 }
 finally { streamUtil!.close(outputStream);
    
streamUtil!.close(inputStream);
    
 }
}


                //@Throws(Exception.constructor)
            
    public write(fileItem: FileItem, file: AbFile){
fileItem!.write(AbFileNativeUtil.get(file));
    
}


}

