
        /* Generated Code Do Not Modify */
        



import { ByteArrayOutputStream } from "../../../../java/io/ByteArrayOutputStream.js";

    
import { InputStream } from "../../../../java/io/InputStream.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StreamUtil } from "../../../../org/allbinary/logic/io/StreamUtil.js";

    
import { AbFile } from "../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { AbFileNativeUtil } from "../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { FileItemStream } from "./FileItemStream.js";

import { FileItem } from "./FileItem.js";

export class FileItemUtil
            extends Object
         {
        

    private static readonly instance: FileItemUtil = new FileItemUtil();
        
        

    public static getInstance(): FileItemUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public readonly DEFAULT_CHARSET: string = "ISO-8859-1";
        
        

                //@Throws(Error::class)
            
    public getString(byteArray: number[]): string{
var byteArray = byteArray



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return byteArray.decodeToString();
    
}


                //@Throws(Error::class)
            
    public getString(fileItem: FileItemStream): string{
var fileItem = fileItem



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getBytes.toCharArray()
                                        .slice(0, ).join('')
                                    ;
    
}


                //@Throws(Error::class)
            
    public getBytes(fileItem: FileItemStream): number[]{
var fileItem = fileItem

    var streamUtil: StreamUtil = StreamUtil.getInstance()!;
        
        
;
    

    var inputStream: InputStream = 
                null
            ;
        
        
;
    

    var outputStream: ByteArrayOutputStream = 
                null
            ;
        
        
;
    

        try {
            inputStream= fileItem!.openStream();
    
outputStream= new ByteArrayOutputStream();
    

                        if(fileItem!.isFormField())
                        
                                    {
                                    this.logUtil!.putF("FileItemStream FieldName: " +fileItem!.getFieldName(), this, "write()");
    

                                    }
                                
                        else {
                            
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Uploaded File FieldName: ");
    
stringBuffer!.append(fileItem!.getFieldName());
    
stringBuffer!.append(" name = ");
    
stringBuffer!.append(fileItem!.getName());
    
this.logUtil!.putF(stringBuffer!.toString(), this, "write()");
    

                        }
                            
outputStream= streamUtil!.get(inputStream, outputStream, new Array(16384));

                         as ByteArrayOutputStream;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return outputStream!.toByteArray();

                        ;
    

         finally {
            streamUtil!.close(outputStream);
    
streamUtil!.close(inputStream);
    

         }
        
}


                //@Throws(Error::class)
            
    public write(fileItem: FileItem, file: AbFile){
var fileItem = fileItem
var file = file
fileItem!.write(AbFileNativeUtil.get(file));
    
}


}
                
            

