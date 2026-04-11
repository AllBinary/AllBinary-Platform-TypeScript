
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
        



import { IOException } from "../../../../../../java/io/IOException.js";

    
import { InputStream } from "../../../../../../java/io/InputStream.js";

    
import { OutputStream } from "../../../../../../java/io/OutputStream.js";

    
import { LicenseInitInfoUtil } from "../../../../../../org/allbinary/business/init/LicenseInitInfoUtil.js";

    
import { ResourceUtil } from "../../../../../../org/allbinary/data/resource/ResourceUtil.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { FileStreamFactory } from "../../../../../../org/allbinary/logic/io/FileStreamFactory.js";

    
import { StreamUtil } from "../../../../../../org/allbinary/logic/io/StreamUtil.js";

    
import { FileFactory } from "../../../../../../org/allbinary/logic/io/file/FileFactory.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class LicenseServerInitFileUtil
            extends Object
         {
        

    public static nullOutputStream(): OutputStream{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return object: OutputStream()
                                {
                                
                //@Throws(IOException::class)
            
    public write(b: number){
var b = b
}

                //@Throws(IOException::class)
            
    public write(b: number[], off: number, len: number){
var b = b
var off = off
var len = len
}

    public close(){
}

                                }
                            ;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly NULL_OUTPUT_STREAM: OutputStream = nullOutputStream()!;
        
        

    public init(){

        try {
            
    var filePath: string = LicenseInitInfoUtil.getInstance()!.INITFILENAME;
        
        
;
    
LicenseInitInfoUtil.getInstance()!.setFilePath(StringUtil.getInstance()!.EMPTY_STRING);
    

                        if(FileFactory.getInstance()!.isFile(filePath))
                        
                                    {
                                    logUtil!.put("Using Existing License File", this, commonStrings!.INIT);
    

                                    }
                                
                        else {
                            write();
    

                        }
                            

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.INIT, e);
    
}

}


    write(){

    var fileOutputStream: OutputStream = NULL_OUTPUT_STREAM;
        
        
;
    

        try {
            
    var resourceUtil: ResourceUtil = ResourceUtil.getInstance()!;
        
        
;
    

    var filePath: string = LicenseInitInfoUtil.getInstance()!.INITFILENAME;
        
        
;
    

    var inputStream: InputStream = resourceUtil!.getResourceAsStream(filePath)!;
        
        
;
    
logUtil!.put("Writing Default License File", this, commonStrings!.INIT);
    

    var fileStreamFactory: FileStreamFactory = FileStreamFactory.getInstance()!;
        
        
;
    
fileOutputStream= fileStreamFactory!.getFileOutputStreamInstance(StringUtil.getInstance()!.EMPTY_STRING, filePath);
    

    var b: number= 0
;
    

    var index: number = 0;
        
        
;
    

        while(true)
        {
b= inputStream!.read();
    

                        if(b ==  -1)
                        
                                    {
                                    break;

                    

                                    }
                                
fileOutputStream!.write(b);
    
index++;
    
}

logUtil!.put("Wrote Bytes: " +index, this, commonStrings!.INIT);
    
fileOutputStream!.flush();
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.INIT, e);
    
}

         finally {
            StreamUtil.getInstance()!.close(fileOutputStream);
    

         }
        
}


}
                
            

