
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
        



import { ZipEntry } from "../../../../../../java/util/zip/ZipEntry.js";

    
import { ZipInputStream } from "../../../../../../java/util/zip/ZipInputStream.js";

    
import { ZipOutputStream } from "../../../../../../java/util/zip/ZipOutputStream.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbDataOutputStream } from "../../../../../../org/allbinary/logic/io/AbDataOutputStream.js";

    
import { AbFileInputStream } from "../../../../../../org/allbinary/logic/io/AbFileInputStream.js";

    
import { AbFileOutputStream } from "../../../../../../org/allbinary/logic/io/AbFileOutputStream.js";

    
import { DataOutputStreamFactory } from "../../../../../../org/allbinary/logic/io/DataOutputStreamFactory.js";

    
import { StreamUtil } from "../../../../../../org/allbinary/logic/io/StreamUtil.js";

    
import { AbFile } from "../../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { FileUtil } from "../../../../../../org/allbinary/logic/io/file/FileUtil.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ZipFileUtil
            extends Object
         {
        

    private static readonly instance: ZipFileUtil = new ZipFileUtil();
        
        

    public static getInstance(): ZipFileUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    public create(outFilename: string, fileBasicArrayList: BasicArrayList){
var outFilename = outFilename
var fileBasicArrayList = fileBasicArrayList

        try {
            
    var zipFile: AbFile = new AbFile(outFilename);
        
        
;
    

                        if(zipFile!.exists())
                        
                                    {
                                    zipFile!.delete();
    

                                    }
                                
zipFile!.createNewFile();
    

    var outputStream: ZipOutputStream = new ZipOutputStream(new AbFileOutputStream(zipFile));
        
        
;
    

    var streamUtil: StreamUtil = StreamUtil.getInstance()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var byteArray: number[] = new Array(16384);
        
        
;
    

    var fileInputStream: AbFileInputStream
;
    

    var size: number = fileBasicArrayList!.size()!;
        
        
;
    

    var current: number = 0;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var file: AbFile = fileBasicArrayList!.get(i);

                         as AbFile;
        
        
;
    

                        if(file.isDirectory())
                        
                                    {
                                    
                                    }
                                
                             else 
                        if(file.isFile())
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.appendint(current);
    
stringBuffer!.append(" Creating Zip File Entry: ");
    
stringBuffer!.append(file.getPath());
    
this.logUtil!.putF(stringBuffer!.toString(), this, "create()");
    

        try {
            fileInputStream= new AbFileInputStream(file);
    
outputStream!.putNextEntry(new ZipEntry(file.getPath()));
    
streamUtil!.get(fileInputStream, outputStream, byteArray);
    
outputStream!.closeEntry();
    
streamUtil!.close(fileInputStream);
    

                //: 
} catch(e) 
            {
this.logUtil!.putF("Skipping File (Probably Local): " +file.getPath(), this, "create()");
    
}


                                    }
                                
current++;
    
}

streamUtil!.close(outputStream);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "create", e);
    
}

}


                //@Throws(Error::class)
            
    public unzip(path: string, zipFile: AbFile, fileName: string){
var path = path
var zipFile = zipFile
var fileName = fileName

    var buffer: number[] = new Array(16384);
        
        
;
    

    var inputStream: ZipInputStream = 
                null
            ;
        
        
;
    

        try {
            inputStream= new ZipInputStream(new AbFileInputStream(zipFile));
    

    var zipEntry: ZipEntry
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var fileUtil: FileUtil = FileUtil.getInstance()!;
        
        
;
    

        while((zipEntry= inputStream!.getNextEntry()) != 
                                    null
                                )
        {

    var entryName: string = zipEntry!.getName()!;
        
        
;
    

                        if(zipEntry!.isDirectory())
                        
                                    {
                                    
                                    }
                                
                        else {
                            
    var entryFile: AbFile = new AbFile(path +entryName);
        
        
;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("ZipEntry Name: ");
    
stringBuffer!.append(entryName);
    
stringBuffer!.append(" isFile: ");
    
stringBuffer!.appendboolean(entryFile!.isFile());
    
stringBuffer!.append(" isDirectory: ");
    
stringBuffer!.appendboolean(entryFile!.isDirectory());
    
stringBuffer!.append(" getParent: ");
    
stringBuffer!.append(entryFile!.getParent());
    
this.logUtil!.putF(stringBuffer!.toString(), this, "unzip");
    

    var dataOutputStream: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstance(entryFile)!;
        
        
;
    
fileUtil!.write(inputStream, dataOutputStream, buffer);
    

                        }
                            
inputStream!.closeEntry();
    
}


         finally {
            StreamUtil.getInstance()!.close(inputStream);
    

         }
        
}


}
                
            

