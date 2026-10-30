
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
        
import { ZipEntry } from '../../../../../../java/util/zip/ZipEntry.js';
//not GWT import const ZipEntry

import { ZipInputStream } from '../../../../../../java/util/zip/ZipInputStream.js';
//not GWT import const ZipInputStream

import { ZipOutputStream } from '../../../../../../java/util/zip/ZipOutputStream.js';
//not GWT import const ZipOutputStream

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbDataOutputStream } from '../../../../../../org/allbinary/logic/io/AbDataOutputStream.js';
//not GWT import const AbDataOutputStream

import { AbFileInputStream } from '../../../../../../org/allbinary/logic/io/AbFileInputStream.js';
//not GWT import const AbFileInputStream

import { AbFileOutputStream } from '../../../../../../org/allbinary/logic/io/AbFileOutputStream.js';
//not GWT import const AbFileOutputStream

import { DataOutputStreamFactory } from '../../../../../../org/allbinary/logic/io/DataOutputStreamFactory.js';
//not GWT import const DataOutputStreamFactory

import { StreamUtil } from '../../../../../../org/allbinary/logic/io/StreamUtil.js';
//not GWT import const StreamUtil

import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

import { FileUtil } from '../../../../../../org/allbinary/logic/io/file/FileUtil.js';
//not GWT import const FileUtil

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

















                                        
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
    let zipFile: AbFile = AbFile.createAbFile(outFilename)!;;
    

                        if(zipFile!.exists())
                        
                                    {
                                    zipFile!.delete();
    

                                    }
                                
zipFile!.createNewFile();
    

    let outputStream: ZipOutputStream = new ZipOutputStream(AbFileOutputStream.createFromAbFile(zipFile));;
    

    let streamUtil: StreamUtil = StreamUtil.getInstance()!;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    

    let byteArray: number[] = new Array(16384);;
    

    let fileInputStream: AbFileInputStream;;
    

    let size: number = fileBasicArrayList!.size()!;;
    

    let current: number = 0;;
    




                        for (
    let i: number = 0;i < size; i++)
        {

    let file: AbFile = fileBasicArrayList!.get(i) as AbFile;;
    

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
    

 try { fileInputStream= new AbFileInputStream(file);
    
outputStream!.putNextEntry(new ZipEntry(file.getPath()));
    
streamUtil!.get(fileInputStream, outputStream, byteArray);
    
outputStream!.closeEntry();
    
streamUtil!.close(fileInputStream);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.putF("Skipping File (Probably Local): " +file.getPath(), this, "create()");
    

 }
   }
 

                                    }
                                
current++;
    
}

streamUtil!.close(outputStream);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "create", e);
    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public unzip(path: string, zipFile: AbFile, fileName: string){

    let buffer: number[] = new Array(16384);;
    

    let inputStream: ZipInputStream = 
                null
            ;;
    

 try { inputStream= new ZipInputStream(new AbFileInputStream(zipFile));
    

    let zipEntry: ZipEntry;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    

    let fileUtil: FileUtil = FileUtil.getInstance()!;;
    

        while((zipEntry= inputStream!.getNextEntry()) != 
                                    null
                                )
        {

    let entryName: string = zipEntry!.getName()!;;
    

                        if(zipEntry!.isDirectory())
                        
                                    {
                                    
                                    }
                                
                        else {
                            
    let entryFile: AbFile = AbFile.createAbFile(path +entryName)!;;
    
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
    

    let dataOutputStream: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstanceForAbFile(entryFile)!;;
    
fileUtil!.write(inputStream, dataOutputStream, buffer);
    

                        }
                            
inputStream!.closeEntry();
    
}

 }
 finally { StreamUtil.getInstance()!.close(inputStream);
    
 }
}


}

