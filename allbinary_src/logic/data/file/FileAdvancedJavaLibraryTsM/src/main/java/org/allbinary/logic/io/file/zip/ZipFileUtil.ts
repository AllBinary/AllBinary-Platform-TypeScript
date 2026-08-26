
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
        



            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not game specific package import { ZipEntry } from '../../../../../../java/util/zip/ZipEntry.js';
      const ZipEntry = globalThis.java.util.zip.ZipEntry;

      
//not game specific package import { ZipInputStream } from '../../../../../../java/util/zip/ZipInputStream.js';
      const ZipInputStream = globalThis.java.util.zip.ZipInputStream;

      
//not game specific package import { ZipOutputStream } from '../../../../../../java/util/zip/ZipOutputStream.js';
      const ZipOutputStream = globalThis.java.util.zip.ZipOutputStream;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AbDataOutputStream } from '../../../../../../org/allbinary/logic/io/AbDataOutputStream.js';
      const AbDataOutputStream = globalThis.org.allbinary.logic.io.AbDataOutputStream;

      
//not game specific package import { AbFileInputStream } from '../../../../../../org/allbinary/logic/io/AbFileInputStream.js';
      const AbFileInputStream = globalThis.org.allbinary.logic.io.AbFileInputStream;

      
//not game specific package import { AbFileOutputStream } from '../../../../../../org/allbinary/logic/io/AbFileOutputStream.js';
      const AbFileOutputStream = globalThis.org.allbinary.logic.io.AbFileOutputStream;

      
//not game specific package import { DataOutputStreamFactory } from '../../../../../../org/allbinary/logic/io/DataOutputStreamFactory.js';
      const DataOutputStreamFactory = globalThis.org.allbinary.logic.io.DataOutputStreamFactory;

      
//not game specific package import { StreamUtil } from '../../../../../../org/allbinary/logic/io/StreamUtil.js';
      const StreamUtil = globalThis.org.allbinary.logic.io.StreamUtil;

      
//not game specific package import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { FileUtil } from '../../../../../../org/allbinary/logic/io/file/FileUtil.js';
      const FileUtil = globalThis.org.allbinary.logic.io.file.FileUtil;

      
//not game specific package import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ZipFileUtil
            extends Object
         {
        

    private static readonly instance: ZipFileUtil = new ZipFileUtil();

    public static getInstance(): ZipFileUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ZipFileUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    public create(outFilename: string, fileBasicArrayList: BasicArrayList){

        try {
            
    var zipFile: AbFile = AbFile.createAbFile(outFilename)!;;
    

                        if(zipFile!.exists())
                        
                                    {
                                    zipFile!.delete();
    

                                    }
                                
zipFile!.createNewFile();
    

    var outputStream: ZipOutputStream = new ZipOutputStream(AbFileOutputStream.createFromAbFile(zipFile));;
    

    var streamUtil: StreamUtil = StreamUtil.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    

    var byteArray: number[] = new Array(16384);;
    

    var fileInputStream: AbFileInputStream;;
    

    var size: number = fileBasicArrayList!.size()!;;
    

    var current: number = 0;;
    




                        for (
    var i: number = 0;i < size; i++)
        {

    var file: AbFile = fileBasicArrayList!.get(i) as AbFile;;
    

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


                //@Throws(Exception.constructor)
            
    public unzip(path: string, zipFile: AbFile, fileName: string){

    var buffer: number[] = new Array(16384);;
    

    var inputStream: ZipInputStream = 
                null
            ;;
    

        try {
            inputStream= new ZipInputStream(new AbFileInputStream(zipFile));
    

    var zipEntry: ZipEntry;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    

    var fileUtil: FileUtil = FileUtil.getInstance()!;;
    

        while((zipEntry= inputStream!.getNextEntry()) != 
                                    null
                                )
        {

    var entryName: string = zipEntry!.getName()!;;
    

                        if(zipEntry!.isDirectory())
                        
                                    {
                                    
                                    }
                                
                        else {
                            
    var entryFile: AbFile = AbFile.createAbFile(path +entryName)!;;
    
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
    

    var dataOutputStream: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstanceForAbFile(entryFile)!;;
    
fileUtil!.write(inputStream, dataOutputStream, buffer);
    

                        }
                            
inputStream!.closeEntry();
    
}


         finally {
            StreamUtil.getInstance()!.close(inputStream);
    

         }
        
}


}
                
            

