
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { InputStream } from '../../../../../java/io/InputStream.js';
//not GWT import const InputStream

import { OutputStream } from '../../../../../java/io/OutputStream.js';
//not GWT import const OutputStream

import { URLGLOBALS } from '../../../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

import { LogConfigTypeFactory } from '../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
//not GWT import const LogConfigTypeFactory

import { AbDataOutputStream } from '../../../../../org/allbinary/logic/io/AbDataOutputStream.js';
//not GWT import const AbDataOutputStream

import { AbFileInputStream } from '../../../../../org/allbinary/logic/io/AbFileInputStream.js';
//not GWT import const AbFileInputStream

import { AbFileLocalInputStream } from '../../../../../org/allbinary/logic/io/AbFileLocalInputStream.js';
//not GWT import const AbFileLocalInputStream

import { AbIOSystem } from '../../../../../org/allbinary/logic/io/AbIOSystem.js';
//not GWT import const AbIOSystem

import { DataOutputStreamFactory } from '../../../../../org/allbinary/logic/io/DataOutputStreamFactory.js';
//not GWT import const DataOutputStreamFactory

import { FileStreamFactory } from '../../../../../org/allbinary/logic/io/FileStreamFactory.js';
//not GWT import const FileStreamFactory

import { StreamUtil } from '../../../../../org/allbinary/logic/io/StreamUtil.js';
//not GWT import const StreamUtil

import { Directory } from '../../../../../org/allbinary/logic/io/file/directory/Directory.js';
//not GWT import const Directory

import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
type AbPathData<T = any, U = any> = typeof AbPathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof AbPathData;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbFile } from './AbFile.js';
//not GWT import - same folder const AbFile
//not plain js - same folder import { FilePathData } 
const FilePathData = globalThis.org.allbinary.logic.io.file.FilePathData;
import { FileWrapperUtil } from './FileWrapperUtil.js';
//not GWT import - same folder const FileWrapperUtil
import { FileUtil2 } from './FileUtil2.js';
//not GWT import - same folder const FileUtil2
//data/init/views/TestStore/template/type/genericTemplateObjectConfig.xml
export class FileUtil
            extends Object
         {
        

    private static readonly instance: FileUtil = new FileUtil();

    public static getInstance(): FileUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FileUtil.instance;
    
}


    static getNewDirectory(fromFile: AbFile): string{

    let newDirectory: string = fromFile!.getPath()!;;
    

    let separatorChar: string = FilePathData.getInstance()!.PATH_START;;
    

                        if(AbIOSystem.getInstance()!.isType("com.vobject.appengine.java.io"))
                        
                                    {
                                    separatorChar= AbPathData.getInstance()!.SEPARATOR;
    

                                    }
                                

    let lastIndex: number = newDirectory!.lastIndexOf(separatorChar)!;;
    

                        if(lastIndex >= newDirectory!.length)
                        
                                    {
                                    newDirectory= newDirectory!.substring(0, newDirectory!.length -1);
    
lastIndex= newDirectory!.lastIndexOf(separatorChar);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newDirectory!.substring(lastIndex, newDirectory!.length);;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly directory: Directory = Directory.getInstance()!;

    private readonly logConfigTypeFactory: LogConfigTypeFactory = LogConfigTypeFactory.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly streamUtil: StreamUtil = StreamUtil.getInstance()!;

private constructor (){

            super();
        }

write(...args: any[]): any {
   
    if (args.length === 2) return this.write$overload1(args[0], args[1]);
   
    if (args.length === 2) return this.write$overload2(args[0], args[1]);
   
    if (args.length === 3) return this.write$overload3(args[0], args[1], args[2]);
   
    if (args.length === 2 && typeof args[0] === 'string' && typeof args[1] === 'string') return this.write$overload4(args[0], args[1]);
   
   throw new TypeError('No matching overload: write'); }
  
                //@Throws(Exception.constructor)
            
    public write$overload1(inputStream: InputStream, file: AbFile){

    let dataOutputStream: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstanceForAbFile(file)!;;
    
this.write(inputStream, dataOutputStream);
    
}


                //@Throws(Exception.constructor)
            
    public write$overload2(inputStream: InputStream, dataOutputStream: AbDataOutputStream){

 try { dataOutputStream= StreamUtil.getInstance()!.get(inputStream, dataOutputStream, new Array(16384)) as AbDataOutputStream;
    
dataOutputStream!.flush();
    
 }
 finally { StreamUtil.getInstance()!.close(dataOutputStream);
    
 }
}


                //@Throws(Exception.constructor)
            
    public write$overload3(inputStream: InputStream, dataOutputStream: AbDataOutputStream, buffer: number[]){

 try { dataOutputStream= StreamUtil.getInstance()!.get(inputStream, dataOutputStream, buffer) as AbDataOutputStream;
    
dataOutputStream!.flush();
    
 }
 finally { StreamUtil.getInstance()!.close(dataOutputStream);
    
 }
}

copy(...args: any[]): any {
   
    if (args.length === 2) return this.copy$overload1(args[0], args[1]);
   
    if (args.length === 2) return this.copy$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: copy'); }
  
                //@Throws(Exception.constructor)
            
    copy$overload1(dataInputStream: AbFileInputStream, dataOutputStream: AbDataOutputStream){

 try { dataOutputStream= StreamUtil.getInstance()!.get(dataInputStream, dataOutputStream, new Array(16384)) as AbDataOutputStream;
    
dataOutputStream!.flush();
    
 }
 finally { StreamUtil.getInstance()!.close(dataOutputStream);
    
StreamUtil.getInstance()!.close(dataInputStream);
    
 }
}


                //@Throws(Exception.constructor)
            
    fixPath(file: AbFile, path: AbPath, realPath: AbPath, cloud: string): AbPath{

    let beginIndex: number = file.getPath()!.indexOf(cloud) +cloud.length;;
    

    let endIndex: number = file.getPath()!.indexOf(file.getName())!;;
    

    let fixedPathString: string = realPath!.toFileSystemString() +file.getPath()!.substring(beginIndex, endIndex);;
    

    let fixedPath: AbPath = new AbPath(fixedPathString, StringUtil.getInstance()!.EMPTY_STRING);;
    
this.directory.create(fixedPath);
    

    let string: string = fixedPath!.toFileSystemString()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory!.FILE))
                        
                                    {
                                    this.logUtil!.putF(string, this, "fixPath");
    

                                    }
                                

    let outPath: AbPath = new AbPath(string, file.getName());;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return outPath;
    
}

copyToCloud(...args: any[]): any {
   
    if (args.length === 4 && typeof args[3] === 'string') return this.copyToCloud$overload1(args[0], args[1], args[2], args[3]);
   
    if (args.length === 6 && typeof args[3] === 'string' && typeof args[4] === 'boolean' && typeof args[5] === 'boolean') return this.copyToCloud$overload2(args[0], args[1], args[2], args[3], args[4], args[5]);
   
    if (args.length === 2) return this.copyToCloud$overload3(args[0], args[1]);
   
    if (args.length === 4 && typeof args[2] === 'boolean' && typeof args[3] === 'boolean') return this.copyToCloud$overload4(args[0], args[1], args[2], args[3]);
   
   throw new TypeError('No matching overload: copyToCloud'); }
  
                //@Throws(Exception.constructor)
            
    public copyToCloud$overload1(file: AbFile, path: AbPath, realPath: AbPath, cloud: string){
this.copyToCloud(file, path, realPath, cloud, false, false);
    
}


                //@Throws(Exception.constructor)
            
    public copyToCloud$overload2(file: AbFile, path: AbPath, realPath: AbPath, cloud: string, overwriteNewer: boolean, overwriteAll: boolean){

 try { 
    let outPath: AbPath = this.fixPath(file, path, realPath, cloud)!;;
    

    let outFile: AbFile = AbFile.createAbFileFromAbPath(outPath)!;;
    

                        if(!this.copyPrepare(file, outFile, overwriteNewer, overwriteAll))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory!.FILE))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Out File: ");
    
stringBuffer!.append(outFile!.getPath());
    
stringBuffer!.append(" In File: ");
    
stringBuffer!.append(file.getPath());
    
stringBuffer!.append(" to cloud.");
    
this.logUtil!.putF(stringBuffer!.toString(), getInstance(), "copyToCloud");
    

                                    }
                                

                        }
                            

    let dataOutputStream: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstanceForAbFile(outFile)!;;
    

    let fileInputStream: AbFileInputStream = new AbFileLocalInputStream(file);;
    
this.copy(fileInputStream, dataOutputStream);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory!.FILEERROR))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Error Copying File File: ");
    
stringBuffer!.append(file.toString());
    
stringBuffer!.append(" to cloud.");
    
this.logUtil!.put(stringBuffer!.toString(), getInstance(), "copyToCloud", e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public copyToCloud$overload3(file: AbFile, outFile: AbFile){
this.copyToCloud(file, outFile, false, false);
    
}


                //@Throws(Exception.constructor)
            
    public copyToCloud$overload4(file: AbFile, outFile: AbFile, overwriteNewer: boolean, overwriteAll: boolean){

 try { 
    let stringBuffer: StringMaker = new StringMaker();;
    

                        if(!this.copyPrepare(file, outFile, overwriteNewer, overwriteAll))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory!.FILE))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("Out File: ");
    
stringBuffer!.append(outFile!.getPath());
    
stringBuffer!.append(" In File: ");
    
stringBuffer!.append(file.getPath());
    
stringBuffer!.append(" to cloud.");
    
this.logUtil!.putF(stringBuffer!.toString(), getInstance(), "copyToCloud");
    

                                    }
                                

                        }
                            

    let dataOutputStream: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstanceForAbFile(outFile)!;;
    

    let fileInputStream: AbFileInputStream = new AbFileLocalInputStream(file);;
    
this.copy(fileInputStream, dataOutputStream);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory!.FILEERROR))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Error Copying File File: ");
    
stringBuffer!.append(file.toString());
    
stringBuffer!.append(" to cloud.");
    
this.logUtil!.put(stringBuffer!.toString(), getInstance(), "copyToCloud", e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    copyPrepare(fromFile: AbFile, toFile: AbFile, overwriteNewer: boolean, overwriteAll: boolean): boolean{

                        if(toFile!.exists())
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    

                        if(overwriteAll)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory!.FILE))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("Overwriting File: ");
    
stringBuffer!.append(toFile!.getPath());
    
this.logUtil!.putF(stringBuffer!.toString(), getInstance(), "copyFile");
    

                                    }
                                
toFile!.delete();
    
toFile!.createNewFile();
    

                                    }
                                
                             else 
                        if(toFile!.lastModified() < fromFile!.lastModified() && overwriteNewer)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory!.FILE))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("Newer by: ");
    
stringBuffer!.appendlong(fromFile!.lastModified() -toFile!.lastModified());
    
stringBuffer!.append("ms ");
    
stringBuffer!.append("Copying File: ");
    
stringBuffer!.append(toFile!.getPath());
    
this.logUtil!.putF(stringBuffer!.toString(), getInstance(), "copyFile");
    

                                    }
                                
toFile!.delete();
    
toFile!.createNewFile();
    

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory!.FILE))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("File Already Exists");
    

                        if(overwriteNewer)
                        
                                    {
                                    stringBuffer!.append(" And Is Not Older");
    

                                    }
                                
                        else {
                            stringBuffer!.append(" And Not A In Overwrite Mode");
    

                        }
                            
stringBuffer!.append(CommonLabels.getInstance()!.COLON_SEP);
    
stringBuffer!.append(toFile!.getPath());
    
this.logUtil!.putF(stringBuffer!.toString(), getInstance(), "copyFile");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            

                                    }
                                
                        else {
                            toFile!.createNewFile();
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}

copyFile(...args: any[]): any {
   
    if (args.length === 2) return this.copyFile$overload1(args[0], args[1]);
   
    if (args.length === 4 && typeof args[2] === 'boolean' && typeof args[3] === 'boolean') return this.copyFile$overload2(args[0], args[1], args[2], args[3]);
   
   throw new TypeError('No matching overload: copyFile'); }
  
                //@Throws(Exception.constructor)
            
    copyFile$overload1(fromFile: AbFile, toFile: AbFile){
this.copyFile(fromFile, toFile, false, false);
    
}


                //@Throws(Exception.constructor)
            
    copyFile$overload2(fromFile: AbFile, toFile: AbFile, overwriteNewer: boolean, overwriteAll: boolean){

 try { 
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory!.FILE))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Copying ");
    
stringBuffer!.appendlong(fromFile!.length());
    
stringBuffer!.append(" bytes from File: ");
    
stringBuffer!.append(fromFile!.getPath());
    
stringBuffer!.append(" to: ");
    
stringBuffer!.append(toFile!.getPath());
    
this.logUtil!.putF(stringBuffer!.toString(), getInstance(), "copyFile");
    

                                    }
                                

                        if(!this.copyPrepare(fromFile, toFile, overwriteNewer, overwriteAll))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    let dataOutputStream: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstanceForAbFile(toFile)!;;
    

    let fileInputStream: AbFileInputStream = new AbFileInputStream(fromFile);;
    
this.copy(fileInputStream, dataOutputStream);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory!.FILEERROR))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Error Copying File fromFile: ");
    
stringBuffer!.append(fromFile!.toString());
    
stringBuffer!.append(" to: ");
    
stringBuffer!.append(toFile!.toString());
    
this.logUtil!.put(stringBuffer!.toString(), getInstance(), "copyFile", e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public copyDirectoryPortion(fromDirectoryAbPath: AbPath, toDirectoryAbPath: AbPath, overwriteNewer: boolean, overwriteAll: boolean, current: number, total: number){

    let file: AbFile = AbFile.createAbFileFromAbPath(fromDirectoryAbPath)!;;
    

                        if(!file.isDirectory())
                        
                                    {
                                    


                            throw new Exception("Not a directory: " +file.getPath());
                    

                                    }
                                

    let fileList: BasicArrayList = this.directory.search(file, true)!;;
    

    let size: number = fileList!.size()!;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Searched: ");
    
stringBuffer!.append(file.getPath());
    
stringBuffer!.append(" Total: ");
    
stringBuffer!.appendint(size);
    

    let portion: number = globalThis.Math.trunc(size /total) +1;;
    

    let start: number = portion *current;;
    

    let end: number = start +portion;;
    

                        if(end > size)
                        
                                    {
                                    end= size;
    

                                    }
                                
stringBuffer!.append(" Section: ");
    
stringBuffer!.appendint(start);
    
stringBuffer!.append(" - ");
    
stringBuffer!.appendint(end);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory!.FILE))
                        
                                    {
                                    this.logUtil!.putF(stringBuffer!.toString(), getInstance(), "copySomeFilesToDirectory()");
    

                                    }
                                

    let nextFile: AbFile;;
    




                        for (
    let index: number = start;index < end; index++)
        {
nextFile= fileList!.get(index) as AbFile;
    

                        if(nextFile!.isDirectory())
                        
                                    {
                                    
                                    }
                                
                        else {
                            
    let path: string = new AbPath(nextFile!.getPath(), StringUtil.getInstance()!.EMPTY_STRING).getPath()!;;
    

    let beginIndex: number = fromDirectoryAbPath!.getPath()!.length()!;;
    

                        if(path.indexOf(URLGLOBALS.getWebappPath()) < 0)
                        
                                    {
                                    beginIndex -= new AbPath(URLGLOBALS.getWebappPath(), StringUtil.getInstance()!.EMPTY_STRING).getPath()!.length();
    

                                    }
                                

    let newPath: string = toDirectoryAbPath!.toFileSystemString() +path.substring(beginIndex);;
    

    let toFile: AbFile = AbFile.createAbFileFromAbPath(new AbPath(newPath, StringUtil.getInstance()!.EMPTY_STRING))!;;
    
this.copyFile(nextFile, toFile, overwriteNewer, overwriteAll);
    

                        }
                            
}

}


                //@Throws(Exception.constructor)
            
    copyDirectory(fromFile: AbFile, to: AbFile){

 try { 
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory!.FILE))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Copying Directory from: ");
    
stringBuffer!.append(fromFile!.getPath());
    
stringBuffer!.append(" to: ");
    
stringBuffer!.append(to.getPath());
    
this.logUtil!.putF(stringBuffer!.toString(), getInstance(), "copyDirectory");
    

                                    }
                                

    let newDirectory: string = FileUtil.getNewDirectory(fromFile)!;;
    

    let newDirectoryAbPath: AbPath = new AbPath(to.getPath() +AbPathData.getInstance()!.SEPARATOR +newDirectory, StringUtil.getInstance()!.EMPTY_STRING);;
    

                        if(!this.directory.create(newDirectoryAbPath))
                        
                                    {
                                    


                            throw new Exception("Failed to create directory: " +newDirectoryAbPath);
                    

                                    }
                                

    let fileArray: AbFile[] = FileWrapperUtil.wrapFiles(fromFile!.listFiles())!;;
    

    let size: number = fileArray!.length
                ;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory!.FILE))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Copying ");
    
stringBuffer!.appendint(size);
    
stringBuffer!.append(" files from: ");
    
stringBuffer!.append(fromFile!.getPath());
    
stringBuffer!.append(" to: ");
    
stringBuffer!.append(to.getPath());
    
this.logUtil!.putF(stringBuffer!.toString(), getInstance(), "copyDirectory");
    

                                    }
                                

    let file: AbFile;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
file= fileArray[index]!;
    

                        if(file.isFile())
                        
                                    {
                                    this.copyFile(file, AbFile.createAbFilePathAndName(newDirectoryAbPath!.toString(), file.getName()));
    

                                    }
                                
                             else 
                        if(file.isDirectory())
                        
                                    {
                                    this.copyDirectory(file, AbFile.createAbFileFromAbPath(newDirectoryAbPath));
    

                                    }
                                
                        else {
                            


                            throw new Exception("File Copy Error");
                    

                        }
                            
}

 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory!.FILEERROR))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Error Copying Directory fromFile: ");
    
stringBuffer!.append(fromFile!.toString());
    
stringBuffer!.append(" to: ");
    
stringBuffer!.append(to.toString());
    
this.logUtil!.put(stringBuffer!.toString(), getInstance(), "copyDirectory", e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public copy$overload2(fromAbPath: AbPath, to: AbPath): boolean{

    let COPY: string = "copy";;
    

 try { 
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory!.FILE))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Copying AbPaths from: ");
    
stringBuffer!.append(fromAbPath!.toString());
    
stringBuffer!.append(" to: ");
    
stringBuffer!.append(to.toString());
    
this.logUtil!.putF(stringBuffer!.toString(), getInstance(), COPY);
    

                                    }
                                

                        if(fromAbPath == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("Cannot Copy From A Null Location");
                    

                                    }
                                

                        if(to == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("Cannot Copy To A Null Location");
                    

                                    }
                                

    let fromLocationFile: AbFile = AbFile.createAbFileFromAbPath(fromAbPath)!;;
    

    let toLocationFile: AbFile = AbFile.createAbFileFromAbPath(to)!;;
    

                        if(fromLocationFile!.isFile())
                        
                                    {
                                    
                        if(toLocationFile!.isDirectory())
                        
                                    {
                                    
    let file: AbFile = AbFile.createAbFileWithChild(toLocationFile, fromLocationFile!.getName())!;;
    
this.copyFile(fromLocationFile, file);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory!.FILE))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Copied file=");
    
stringBuffer!.append(fromLocationFile!.getName());
    
stringBuffer!.append(" from: ");
    
stringBuffer!.append(fromLocationFile!.getPath());
    
stringBuffer!.append(" to: ");
    
stringBuffer!.append(toLocationFile!.getPath());
    
this.logUtil!.putF(stringBuffer!.toString(), getInstance(), COPY);
    

                                    }
                                

                                    }
                                
                        else {
                            this.copyFile(fromLocationFile, toLocationFile);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory!.FILE))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Copied file with new name ");
    
stringBuffer!.append(" from: ");
    
stringBuffer!.append(fromLocationFile!.getPath());
    
stringBuffer!.append(" to: ");
    
stringBuffer!.append(toLocationFile!.getPath());
    
this.logUtil!.putF(stringBuffer!.toString(), getInstance(), COPY);
    

                                    }
                                

                        }
                            

                                    }
                                
                             else 
                        if(fromLocationFile!.isDirectory() && toLocationFile!.isDirectory())
                        
                                    {
                                    
                        if(fromAbPath!.toFileSystemString()[fromAbPath!.toFileSystemString()!.length() -1] == java.io.File.separatorChar)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory!.FILE))
                        
                                    {
                                    this.logUtil!.putF("Copying subdirectories", getInstance(), COPY);
    

                                    }
                                

    let fileArray: AbFile[] = FileWrapperUtil.wrapFiles(fromLocationFile!.listFiles())!;;
    




                        for (
    let index: number = 0;index < fileArray!.length; index++)
        {

    let file: AbFile = fileArray[index]!;;
    

                        if(file.isFile())
                        
                                    {
                                    
    let aFile: AbFile = AbFile.createAbFileWithChild(toLocationFile, file.getName())!;;
    
this.copyFile(file, aFile);
    

                                    }
                                
                             else 
                        if(file.isDirectory())
                        
                                    {
                                    this.copyDirectory(file, toLocationFile);
    

                                    }
                                
                        else {
                            


                            throw new Exception("File Copy Error");
                    

                        }
                            
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory!.FILE))
                        
                                    {
                                    this.logUtil!.putF("Copied subdirectories", getInstance(), COPY);
    

                                    }
                                

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory!.FILE))
                        
                                    {
                                    this.logUtil!.putF("Copyinhg directory", getInstance(), COPY);
    

                                    }
                                
this.copyDirectory(fromLocationFile, toLocationFile);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory!.FILE))
                        
                                    {
                                    this.logUtil!.putF("Copied directory", getInstance(), COPY);
    

                                    }
                                

                        }
                            

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory!.FILEERROR))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Error Copying fromAbPath: ");
    
stringBuffer!.append(fromAbPath!.toString());
    
stringBuffer!.append(" to: ");
    
stringBuffer!.append(to.toString());
    
this.logUtil!.put(stringBuffer!.toString(), getInstance(), COPY, e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


    public shouldSkip(file: AbFile, skipFiles: string[]): boolean{

    let size: number = skipFiles!.length
                ;;
    

    let skipFile: string;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
skipFile= skipFiles[index]!;
    

                        if(file.getPath()!.compareTo(skipFile) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    private readonly WRITE_LABEL: string = "Write file: ";

    private readonly DATA_LABEL: string = " data: ";

    private readonly WRITE_METHOD: string = "write";

                //@Throws(Exception.constructor)
            
    public write$overload4(filePath: string, string: string){

    let dataOutputStream: AbDataOutputStream = 
                null
            ;;
    

 try { PreLogUtil.put(new StringMaker().append(this.WRITE_LABEL)!.append(filePath)!.append(this.DATA_LABEL)!.append(string)!.toString(), this, this.WRITE_METHOD);
    

    let fileInputStreamFactory: FileStreamFactory = FileStreamFactory.getInstance()!;;
    

    let fileOutputStream: OutputStream = fileInputStreamFactory!.getFileOutputStreamInstance(StringUtil.getInstance()!.EMPTY_STRING, filePath)!;;
    
dataOutputStream= new AbDataOutputStream(fileOutputStream);
    
dataOutputStream!.write(string.getBytes(), 0, string.length);
    
dataOutputStream!.flush();
    
 }
 finally { StreamUtil.getInstance()!.close(dataOutputStream);
    
 }
}


    public loadFileAsList(file: AbFile, max: number, byteArray1: number[]): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FileUtil2.getInstance()!.loadFileAsList(file, max, byteArray1);;
    
}


}

