
        /* Generated Code Do Not Modify */
        



import { ByteArrayOutputStream } from "../../../../java/io/ByteArrayOutputStream.js";

    
import { InputStream } from "../../../../java/io/InputStream.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StreamUtil } from "../../../../org/allbinary/logic/io/StreamUtil.js";

    
import { AbFile } from "../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { AbFileNativeUtil } from "../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    

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
        
        

                @Throws(Exception::class)
            
    public getString(byteArray: ByteArray): string{
var byteArray = byteArray



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return byteArray.decodeToString();
    
}


                @Throws(Exception::class)
            
    public getString(fileItem: FileItemStream): string{
var fileItem = fileItem



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getBytes.toCharArray()
                                        .slice(0, ).join('')
                                    ;
    
}


                @Throws(Exception::class)
            
    public getBytes(fileItem: FileItemStream): ByteArray{
var fileItem = fileItem

    var streamUtil: StreamUtil = StreamUtil.getInstance()!;
        
        


    var inputStream: InputStream = 
                null
            ;
        
        


    var outputStream: ByteArrayOutputStream = 
                null
            ;
        
        


        try {
            inputStream= fileItem!.openStream()
outputStream= ByteArrayOutputStream()

    
                        if(fileItem!.isFormField())
                        
                                    {
                                    put("FileItemStream FieldName: " +fileItem!.getFieldName(), this, "write()")

                                    }
                                
                        else {
                            
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Uploaded File FieldName: ")
append(fileItem!.getFieldName())
append(" name = ")
append(fileItem!.getName())
put(stringBuffer!.toString(), this, "write()")

                        }
                            
outputStream= streamUtil!.get(inputStream, outputStream, ByteArray(16384)) as ByteArrayOutputStream



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return outputStream!.toByteArray();
    

         finally {
            close(outputStream)
close(inputStream)

         }
        
}


                @Throws(Exception::class)
            
    public write(fileItem: FileItem, file: AbFile){
var fileItem = fileItem
var file = file
write(AbFileNativeUtil.get(file))
}


}
                
            

