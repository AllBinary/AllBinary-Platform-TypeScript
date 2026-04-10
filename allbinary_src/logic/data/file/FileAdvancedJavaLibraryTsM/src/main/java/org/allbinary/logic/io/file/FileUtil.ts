
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
        



import { FileInputStream } from "../../../../../java/io/FileInputStream.js";

    
import { InputStream } from "../../../../../java/io/InputStream.js";

    
import { OutputStream } from "../../../../../java/io/OutputStream.js";

    
import { URLGLOBALS } from "../../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { LogConfigTypeFactory } from "../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js";

    
import { AbDataOutputStream } from "../../../../../org/allbinary/logic/io/AbDataOutputStream.js";

    
import { AbFileInputStream } from "../../../../../org/allbinary/logic/io/AbFileInputStream.js";

    
import { AbFileLocalInputStream } from "../../../../../org/allbinary/logic/io/AbFileLocalInputStream.js";

    
import { AbFileSystem } from "../../../../../org/allbinary/logic/io/AbFileSystem.js";

    
import { DataOutputStreamFactory } from "../../../../../org/allbinary/logic/io/DataOutputStreamFactory.js";

    
import { FileStreamFactory } from "../../../../../org/allbinary/logic/io/FileStreamFactory.js";

    
import { StreamUtil } from "../../../../../org/allbinary/logic/io/StreamUtil.js";

    
import { Directory } from "../../../../../org/allbinary/logic/io/file/directory/Directory.js";

    
import { AbPath } from "../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { AbPathData } from "../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonLabels } from "../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class FileUtil
            extends Object
         {
        

    private static readonly instance: FileUtil = new FileUtil();
        
        

    public static getInstance(): FileUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    static getNewDirectory(fromFile: AbFile): string{
var fromFile = fromFile

    var newDirectory: string = fromFile!.getPath()!;
        
        


    var separatorChar: string = java.io.File.separator;
        
        


                        if(AbFileSystem.getInstance()!.isType("com.vobject.appengine.java.io"))
                        
                                    {
                                    separatorChar= AbPathData.getInstance()!.SEPARATOR

                                    }
                                

    var lastIndex: number = newDirectory!.lastIndexOf(separatorChar)!;
        
        


                        if(lastIndex >= newDirectory!.length)
                        
                                    {
                                    newDirectory= newDirectory!.substring(0, newDirectory!.length -1)
lastIndex= newDirectory!.lastIndexOf(separatorChar)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newDirectory!.substring(lastIndex, newDirectory!.length);
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly directory: Directory = Directory.getInstance()!;
        
        

    private readonly logConfigTypeFactory: LogConfigTypeFactory = LogConfigTypeFactory.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly streamUtil: StreamUtil = StreamUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public write(inputStream: InputStream, file: AbFile){
var inputStream = inputStream
var file = file

    var dataOutputStream: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstance(file)!;
        
        

this.this.write(inputStream, dataOutputStream)
}


                //@Throws(Error::class)
            
    public write(inputStream: InputStream, dataOutputStream: AbDataOutputStream){
var inputStream = inputStream
var dataOutputStream = dataOutputStream

        try {
            dataOutputStream= StreamUtil.getInstance()!.get(inputStream, dataOutputStream, ByteArray(16384)) as AbDataOutputStream
dataOutputStream!.flush()

         finally {
            StreamUtil.getInstance()!.close(dataOutputStream)

         }
        
}


                //@Throws(Error::class)
            
    public write(inputStream: InputStream, dataOutputStream: AbDataOutputStream, buffer: ByteArray){
var inputStream = inputStream
var dataOutputStream = dataOutputStream
var buffer = buffer

        try {
            dataOutputStream= StreamUtil.getInstance()!.get(inputStream, dataOutputStream, buffer) as AbDataOutputStream
dataOutputStream!.flush()

         finally {
            StreamUtil.getInstance()!.close(dataOutputStream)

         }
        
}


                //@Throws(Error::class)
            
    copy(dataInputStream: AbFileInputStream, dataOutputStream: AbDataOutputStream){
var dataInputStream = dataInputStream
var dataOutputStream = dataOutputStream

        try {
            dataOutputStream= StreamUtil.getInstance()!.get(dataInputStream, dataOutputStream, ByteArray(16384)) as AbDataOutputStream
dataOutputStream!.flush()

         finally {
            StreamUtil.getInstance()!.close(dataOutputStream)
StreamUtil.getInstance()!.close(dataInputStream)

         }
        
}


                //@Throws(Error::class)
            
    fixPath(file: AbFile, path: AbPath, realPath: AbPath, cloud: string): AbPath{
var file = file
var path = path
var realPath = realPath
var cloud = cloud

    var beginIndex: number = file.getPath()!.indexOf(cloud) +cloud.length;
        
        


    var endIndex: number = file.getPath()!.indexOf(file.getName())!;
        
        


    var fixedPathString: string = realPath!.toFileSystemString() +file.getPath()!.substring(beginIndex, endIndex);
        
        


    var fixedPath: AbPath = new AbPath(fixedPathString);
        
        

this.directory.create(fixedPath)

    var string: string = fixedPath!.toFileSystemString()!;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    logUtil!.put(string, getInstance(), "fixPath")

                                    }
                                

    var outPath: AbPath = new AbPath(string, file.getName());
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return outPath;
    
}


                //@Throws(Error::class)
            
    public copyToCloud(file: AbFile, path: AbPath, realPath: AbPath, cloud: string){
var file = file
var path = path
var realPath = realPath
var cloud = cloud
this.this.copyToCloud(file, path, realPath, cloud, false, false)
}


                //@Throws(Error::class)
            
    public copyToCloud(file: AbFile, path: AbPath, realPath: AbPath, cloud: string, overwriteNewer: boolean, overwriteAll: boolean){
var file = file
var path = path
var realPath = realPath
var cloud = cloud
var overwriteNewer = overwriteNewer
var overwriteAll = overwriteAll

        try {
            
    var outPath: AbPath = fixPath(file, path, realPath, cloud)!;
        
        


    var outFile: AbFile = new AbFile(outPath);
        
        


                        if(!this.copyPrepare(file, outFile, overwriteNewer, overwriteAll))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Out File: ")
stringBuffer!.append(outFile!.getPath())
stringBuffer!.append(" In File: ")
stringBuffer!.append(file.getPath())
stringBuffer!.append(" to cloud.")
logUtil!.put(stringBuffer!.toString(), getInstance(), "copyToCloud")

                                    }
                                

                        }
                            

    var dataOutputStream: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstance(outFile)!;
        
        


    var fileInputStream: AbFileInputStream = new AbFileLocalInputStream(file);
        
        

this.this.copy(fileInputStream, dataOutputStream)
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILEERROR))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Error Copying File File: ")
stringBuffer!.append(file.toString())
stringBuffer!.append(" to cloud.")
logUtil!.put(stringBuffer!.toString(), getInstance(), "copyToCloud", e)

                                    }
                                



                            throw e
}

}


                //@Throws(Error::class)
            
    public copyToCloud(file: AbFile, outFile: AbFile){
var file = file
var outFile = outFile
this.this.copyToCloud(file, outFile, false, false)
}


                //@Throws(Error::class)
            
    public copyToCloud(file: AbFile, outFile: AbFile, overwriteNewer: boolean, overwriteAll: boolean){
var file = file
var outFile = outFile
var overwriteNewer = overwriteNewer
var overwriteAll = overwriteAll

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        


                        if(!this.copyPrepare(file, outFile, overwriteNewer, overwriteAll))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length())
stringBuffer!.append("Out File: ")
stringBuffer!.append(outFile!.getPath())
stringBuffer!.append(" In File: ")
stringBuffer!.append(file.getPath())
stringBuffer!.append(" to cloud.")
logUtil!.put(stringBuffer!.toString(), getInstance(), "copyToCloud")

                                    }
                                

                        }
                            

    var dataOutputStream: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstance(outFile)!;
        
        


    var fileInputStream: AbFileInputStream = new AbFileLocalInputStream(file);
        
        

this.this.copy(fileInputStream, dataOutputStream)
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILEERROR))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Error Copying File File: ")
stringBuffer!.append(file.toString())
stringBuffer!.append(" to cloud.")
logUtil!.put(stringBuffer!.toString(), getInstance(), "copyToCloud", e)

                                    }
                                



                            throw e
}

}


                //@Throws(Error::class)
            
    copyPrepare(fromFile: AbFile, toFile: AbFile, overwriteNewer: boolean, overwriteAll: boolean): boolean{
var fromFile = fromFile
var toFile = toFile
var overwriteNewer = overwriteNewer
var overwriteAll = overwriteAll

                        if(toFile!.exists())
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        


                        if(overwriteAll)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length())
stringBuffer!.append("Overwriting File: ")
stringBuffer!.append(toFile!.getPath())
logUtil!.put(stringBuffer!.toString(), getInstance(), "copyFile")

                                    }
                                
toFile!.delete()
toFile!.createNewFile()

                                    }
                                
                             else 
                        if(toFile!.lastModified() < fromFile!.lastModified() && overwriteNewer)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length())
stringBuffer!.append("Newer by: ")
stringBuffer!.appendlong(fromFile!.lastModified() -toFile!.lastModified())
stringBuffer!.append("ms ")
stringBuffer!.append("Copying File: ")
stringBuffer!.append(toFile!.getPath())
logUtil!.put(stringBuffer!.toString(), getInstance(), "copyFile")

                                    }
                                
toFile!.delete()
toFile!.createNewFile()

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length())
stringBuffer!.append("File Already Exists")

                        if(overwriteNewer)
                        
                                    {
                                    stringBuffer!.append(" And Is Not Older")

                                    }
                                
                        else {
                            stringBuffer!.append(" And Not A In Overwrite Mode")

                        }
                            
stringBuffer!.append(CommonLabels.getInstance()!.COLON_SEP)
stringBuffer!.append(toFile!.getPath())
logUtil!.put(stringBuffer!.toString(), getInstance(), "copyFile")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            

                                    }
                                
                        else {
                            toFile!.createNewFile()

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Error::class)
            
    copyFile(fromFile: AbFile, toFile: AbFile){
var fromFile = fromFile
var toFile = toFile
this.this.copyFile(fromFile, toFile, false, false)
}


                //@Throws(Error::class)
            
    copyFile(fromFile: AbFile, toFile: AbFile, overwriteNewer: boolean, overwriteAll: boolean){
var fromFile = fromFile
var toFile = toFile
var overwriteNewer = overwriteNewer
var overwriteAll = overwriteAll

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Copying ")
stringBuffer!.appendlong(fromFile!.length())
stringBuffer!.append(" bytes from File: ")
stringBuffer!.append(fromFile!.getPath())
stringBuffer!.append(" to: ")
stringBuffer!.append(toFile!.getPath())
logUtil!.put(stringBuffer!.toString(), getInstance(), "copyFile")

                                    }
                                

                        if(!this.copyPrepare(fromFile, toFile, overwriteNewer, overwriteAll))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var dataOutputStream: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstance(toFile)!;
        
        


    var fileInputStream: AbFileInputStream = new AbFileInputStream(fromFile);
        
        

this.this.copy(fileInputStream, dataOutputStream)
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILEERROR))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Error Copying File fromFile: ")
stringBuffer!.append(fromFile!.toString())
stringBuffer!.append(" to: ")
stringBuffer!.append(toFile!.toString())
logUtil!.put(stringBuffer!.toString(), getInstance(), "copyFile", e)

                                    }
                                



                            throw e
}

}


                //@Throws(Error::class)
            
    public copyDirectoryPortion(fromDirectoryAbPath: AbPath, toDirectoryAbPath: AbPath, overwriteNewer: boolean, overwriteAll: boolean, current: number, total: number){
var fromDirectoryAbPath = fromDirectoryAbPath
var toDirectoryAbPath = toDirectoryAbPath
var overwriteNewer = overwriteNewer
var overwriteAll = overwriteAll
var current = current
var total = total

    var file: AbFile = new AbFile(fromDirectoryAbPath);
        
        


                        if(!file.isDirectory())
                        
                                    {
                                    


                            throw Error("Not a directory: " +file.getPath())

                                    }
                                

    var fileList: BasicArrayList = directory.search(file, true)!;
        
        


    var size: number = fileList!.size()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Searched: ")
stringBuffer!.append(file.getPath())
stringBuffer!.append(" Total: ")
stringBuffer!.appendint(size)

    var portion: number = size /total +1;
        
        


    var start: number = portion *current;
        
        


    var end: number = start +portion;
        
        


                        if(end > size)
                        
                                    {
                                    end= size

                                    }
                                
stringBuffer!.append(" Section: ")
stringBuffer!.appendint(start)
stringBuffer!.append(" - ")
stringBuffer!.appendint(end)

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    logUtil!.put(stringBuffer!.toString(), getInstance(), "copySomeFilesToDirectory()")

                                    }
                                




                        for (
    var index: number = start;
        
        
index < end; index++)
        {

    var nextFile: AbFile = fileList!.get(index) as AbFile;
        
        


                        if(nextFile!.isDirectory())
                        
                                    {
                                    
                                    }
                                
                        else {
                            
    var path: string = AbPath(nextFile!.getPath()).
                            getPath()!;
        
        


    var beginIndex: number = fromDirectoryAbPath!.getPath()!.length()!;
        
        


                        if(path.indexOf(URLGLOBALS.getWebappPath()) < 0)
                        
                                    {
                                    beginIndex -= AbPath(URLGLOBALS.getWebappPath()).
                            getPath()!.length()

                                    }
                                

    var newPath: string = toDirectoryAbPath!.toFileSystemString() +path.substring(beginIndex);
        
        


    var toFile: AbFile = new AbFile(AbPath(newPath));
        
        

this.this.copyFile(nextFile, toFile, overwriteNewer, overwriteAll)

                        }
                            
}

}


                //@Throws(Error::class)
            
    copyDirectory(fromFile: AbFile, to: AbFile){
    //var fromFile = fromFile
    //var to = to

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Copying Directory from: ")
stringBuffer!.append(fromFile!.getPath())
stringBuffer!.append(" to: ")
stringBuffer!.append(to.getPath())
logUtil!.put(stringBuffer!.toString(), getInstance(), "copyDirectory")

                                    }
                                

    var newDirectory: string = getNewDirectory(fromFile)!;
        
        


    var newDirectoryAbPath: AbPath = new AbPath(to.getPath() +AbPathData.getInstance()!.SEPARATOR +newDirectory);
        
        


                        if(!this.directory.create(newDirectoryAbPath))
                        
                                    {
                                    


                            throw Error("Failed to create directory: " +newDirectoryAbPath)

                                    }
                                

    var fileArray: AbFile[] = FileWrapperUtil.wrapFiles(fromFile!.listFiles())!;
        
        


    var size: number = fileArray!.length
                ;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Copying ")
stringBuffer!.appendint(size)
stringBuffer!.append(" files from: ")
stringBuffer!.append(fromFile!.getPath())
stringBuffer!.append(" to: ")
stringBuffer!.append(to.getPath())
logUtil!.put(stringBuffer!.toString(), getInstance(), "copyDirectory")

                                    }
                                




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var file: AbFile = fileArray[index]!;
        
        


                        if(file.isFile())
                        
                                    {
                                    this.this.copyFile(file, AbFile(newDirectoryAbPath!.toString(), file.getName()))

                                    }
                                
                             else 
                        if(file.isDirectory())
                        
                                    {
                                    this.this.copyDirectory(file, AbFile(newDirectoryAbPath))

                                    }
                                
                        else {
                            


                            throw Error("File Copy Error")

                        }
                            
}

} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILEERROR))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Error Copying Directory fromFile: ")
stringBuffer!.append(fromFile!.toString())
stringBuffer!.append(" to: ")
stringBuffer!.append(to.toString())
logUtil!.put(stringBuffer!.toString(), getInstance(), "copyDirectory", e)

                                    }
                                



                            throw e
}

}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public copy(fromAbPath: AbPath, to: AbPath): boolean{
var fromAbPath = fromAbPath
var to = to

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Copying AbPaths from: ")
stringBuffer!.append(fromAbPath!.toString())
stringBuffer!.append(" to: ")
stringBuffer!.append(to.toString())
logUtil!.put(stringBuffer!.toString(), getInstance(), "copy")

                                    }
                                

                        if(fromAbPath == 
                                    null
                                )
                        
                                    {
                                    


                            throw Error("Cannot Copy From A Null Location")

                                    }
                                

                        if(to == 
                                    null
                                )
                        
                                    {
                                    


                            throw Error("Cannot Copy To A Null Location")

                                    }
                                

    var fromLocationFile: AbFile = new AbFile(fromAbPath);
        
        


    var toLocationFile: AbFile = new AbFile(to);
        
        


                        if(fromLocationFile!.isFile())
                        
                                    {
                                    
                        if(toLocationFile!.isDirectory())
                        
                                    {
                                    
    var file: AbFile = new AbFile(toLocationFile, fromLocationFile!.getName());
        
        

this.this.copyFile(fromLocationFile, file)

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Copied file=")
stringBuffer!.append(fromLocationFile!.getName())
stringBuffer!.append(" from: ")
stringBuffer!.append(fromLocationFile!.getPath())
stringBuffer!.append(" to: ")
stringBuffer!.append(toLocationFile!.getPath())
logUtil!.put(stringBuffer!.toString(), getInstance(), "copy")

                                    }
                                

                                    }
                                
                        else {
                            this.this.copyFile(fromLocationFile, toLocationFile)

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Copied file with new name ")
stringBuffer!.append(" from: ")
stringBuffer!.append(fromLocationFile!.getPath())
stringBuffer!.append(" to: ")
stringBuffer!.append(toLocationFile!.getPath())
logUtil!.put(stringBuffer!.toString(), getInstance(), "copy")

                                    }
                                

                        }
                            

                                    }
                                
                             else 
                        if(fromLocationFile!.isDirectory() && toLocationFile!.isDirectory())
                        
                                    {
                                    
                        if(fromAbPath!.toFileSystemString()[fromAbPath!.toFileSystemString()!.length() -1] == java.io.File.separatorChar)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    logUtil!.put("Copying subdirectories", getInstance(), "copy")

                                    }
                                

    var fileArray: AbFile[] = FileWrapperUtil.wrapFiles(fromLocationFile!.listFiles())!;
        
        





                        for (
    var index: number = 0;
        
        
index < fileArray!.length; index++)
        {

    var file: AbFile = fileArray[index]!;
        
        


                        if(file.isFile())
                        
                                    {
                                    
    var aFile: AbFile = new AbFile(toLocationFile, file.getName());
        
        

this.this.copyFile(file, aFile)

                                    }
                                
                             else 
                        if(file.isDirectory())
                        
                                    {
                                    copyDirectory(file, toLocationFile)

                                    }
                                
                        else {
                            


                            throw Error("File Copy Error")

                        }
                            
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    logUtil!.put("Copied subdirectories", getInstance(), "copy")

                                    }
                                

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    logUtil!.put("Copyinhg directory", getInstance(), "copy")

                                    }
                                
copyDirectory(fromLocationFile, toLocationFile)

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    logUtil!.put("Copied directory", getInstance(), "copy")

                                    }
                                

                        }
                            

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILEERROR))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Error Copying fromAbPath: ")
stringBuffer!.append(fromAbPath!.toString())
stringBuffer!.append(" to: ")
stringBuffer!.append(to.toString())
logUtil!.put(stringBuffer!.toString(), getInstance(), "copy", e)

                                    }
                                



                            throw e
}

}


    public readAsString(fileName: string): string{
    //var fileName = fileName

    var bytes: ByteArray = ByteArray(1000000);
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.readAsString(fileName, bytes);
    
}


    public readAsString(fileName: string, bytes: ByteArray): string{
    //var fileName = fileName
    //var bytes = bytes

    var idFile: FileInputStream = 
                null
            ;
        
        


        try {
            idFile= FileInputStream(fileName)

    var size: number = idFile!.read(bytes)!;
        
        


                        if(size > 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bytes.decodeToString();
    

                                    }
                                
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.IDLOGGING))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "SmallInsert", e)

                                    }
                                
}

         finally {
            streamUtil!.close(idFile)

         }
        



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


    public shouldSkip(file: AbFile, skipFiles: string[]): boolean{
    //var file = file
    //var skipFiles = skipFiles

    var size: number = skipFiles!.length
                ;
        
        


    var skipFile: string





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
skipFile= skipFiles[index]!

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
        
        

                //@Throws(Error::class)
            
    public write(filePath: string, string: string){
var filePath = filePath
var string = string

    var dataOutputStream: AbDataOutputStream = 
                null
            ;
        
        


        try {
            PreLogUtil.put(StringBuilder().
                            append(this.WRITE_LABEL)!.append(filePath)!.append(DATA_LABEL)!.append(string)!.toString(), this, this.WRITE_METHOD)

    var fileInputStreamFactory: FileStreamFactory = FileStreamFactory.getInstance()!;
        
        


    var fileOutputStream: OutputStream = fileInputStreamFactory!.getFileOutputStreamInstance(StringUtil.getInstance()!.EMPTY_STRING, filePath)!;
        
        

dataOutputStream= AbDataOutputStream(fileOutputStream)
dataOutputStream!.write(string.encodeToByteArray()0, string.length)
dataOutputStream!.flush()

         finally {
            StreamUtil.getInstance()!.close(dataOutputStream)

         }
        
}


    public loadFileAsList(file: AbFile, max: number, byteArray1: ByteArray): BasicArrayList{
    //var file = file
    //var max = max
    //var byteArray1 = byteArray1



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FileUtil2.getInstance()!.loadFileAsList(file, max, byteArray1);
    
}


}
                
            

