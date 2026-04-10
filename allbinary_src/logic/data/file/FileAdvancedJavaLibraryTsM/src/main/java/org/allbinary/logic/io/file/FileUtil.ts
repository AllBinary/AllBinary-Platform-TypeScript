
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


                @Throws(Exception::class)
            
    public write(inputStream: InputStream, file: AbFile){
var inputStream = inputStream
var file = file

    var dataOutputStream: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstance(file)!;
        
        

this.write(inputStream, dataOutputStream)
}


                @Throws(Exception::class)
            
    public write(inputStream: InputStream, dataOutputStream: AbDataOutputStream){
var inputStream = inputStream
var dataOutputStream = dataOutputStream

        try {
            dataOutputStream= StreamUtil.getInstance()!.get(inputStream, dataOutputStream, ByteArray(16384)) as AbDataOutputStream
flush()

         finally {
            close(dataOutputStream)

         }
        
}


                @Throws(Exception::class)
            
    public write(inputStream: InputStream, dataOutputStream: AbDataOutputStream, buffer: ByteArray){
var inputStream = inputStream
var dataOutputStream = dataOutputStream
var buffer = buffer

        try {
            dataOutputStream= StreamUtil.getInstance()!.get(inputStream, dataOutputStream, buffer) as AbDataOutputStream
flush()

         finally {
            close(dataOutputStream)

         }
        
}


                @Throws(Exception::class)
            
    copy(dataInputStream: AbFileInputStream, dataOutputStream: AbDataOutputStream){
var dataInputStream = dataInputStream
var dataOutputStream = dataOutputStream

        try {
            dataOutputStream= StreamUtil.getInstance()!.get(dataInputStream, dataOutputStream, ByteArray(16384)) as AbDataOutputStream
flush()

         finally {
            close(dataOutputStream)
close(dataInputStream)

         }
        
}


                @Throws(Exception::class)
            
    fixPath(file: AbFile, path: AbPath, realPath: AbPath, cloud: string): AbPath{
var file = file
var path = path
var realPath = realPath
var cloud = cloud

    var beginIndex: number = file.getPath()!.indexOf(cloud) +cloud.length;
        
        


    var endIndex: number = file.getPath()!.indexOf(file.getName())!;
        
        


    var fixedPathString: string = realPath!.toFileSystemString() +file.getPath()!.substring(beginIndex, endIndex);
        
        


    var fixedPath: AbPath = new AbPath(fixedPathString);
        
        

create(fixedPath)

    var string: string = fixedPath!.toFileSystemString()!;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    put(string, getInstance(), "fixPath")

                                    }
                                

    var outPath: AbPath = new AbPath(string, file.getName());
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return outPath;
    
}


                @Throws(Exception::class)
            
    public copyToCloud(file: AbFile, path: AbPath, realPath: AbPath, cloud: string){
var file = file
var path = path
var realPath = realPath
var cloud = cloud
this.copyToCloud(file, path, realPath, cloud, false, false)
}


                @Throws(Exception::class)
            
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
        
        

append("Out File: ")
append(outFile!.getPath())
append(" In File: ")
append(file.getPath())
append(" to cloud.")
put(stringBuffer!.toString(), getInstance(), "copyToCloud")

                                    }
                                

                        }
                            

    var dataOutputStream: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstance(outFile)!;
        
        


    var fileInputStream: AbFileInputStream = new AbFileLocalInputStream(file);
        
        

this.copy(fileInputStream, dataOutputStream)
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILEERROR))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Error Copying File File: ")
append(file.toString())
append(" to cloud.")
put(stringBuffer!.toString(), getInstance(), "copyToCloud", e)

                                    }
                                



                            throw e
}

}


                @Throws(Exception::class)
            
    public copyToCloud(file: AbFile, outFile: AbFile){
var file = file
var outFile = outFile
this.copyToCloud(file, outFile, false, false)
}


                @Throws(Exception::class)
            
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
                                    delete(0, stringBuffer!.length())
append("Out File: ")
append(outFile!.getPath())
append(" In File: ")
append(file.getPath())
append(" to cloud.")
put(stringBuffer!.toString(), getInstance(), "copyToCloud")

                                    }
                                

                        }
                            

    var dataOutputStream: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstance(outFile)!;
        
        


    var fileInputStream: AbFileInputStream = new AbFileLocalInputStream(file);
        
        

this.copy(fileInputStream, dataOutputStream)
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILEERROR))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Error Copying File File: ")
append(file.toString())
append(" to cloud.")
put(stringBuffer!.toString(), getInstance(), "copyToCloud", e)

                                    }
                                



                            throw e
}

}


                @Throws(Exception::class)
            
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
                                    delete(0, stringBuffer!.length())
append("Overwriting File: ")
append(toFile!.getPath())
put(stringBuffer!.toString(), getInstance(), "copyFile")

                                    }
                                
delete()
createNewFile()

                                    }
                                
                             else 
    
                        if(toFile!.lastModified() < fromFile!.lastModified() && overwriteNewer)
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    delete(0, stringBuffer!.length())
append("Newer by: ")
appendlong(fromFile!.lastModified() -toFile!.lastModified())
append("ms ")
append("Copying File: ")
append(toFile!.getPath())
put(stringBuffer!.toString(), getInstance(), "copyFile")

                                    }
                                
delete()
createNewFile()

                                    }
                                
                        else {
                            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    delete(0, stringBuffer!.length())
append("File Already Exists")

    
                        if(overwriteNewer)
                        
                                    {
                                    append(" And Is Not Older")

                                    }
                                
                        else {
                            append(" And Not A In Overwrite Mode")

                        }
                            
append(CommonLabels.getInstance()!.COLON_SEP)
append(toFile!.getPath())
put(stringBuffer!.toString(), getInstance(), "copyFile")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            

                                    }
                                
                        else {
                            createNewFile()

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                @Throws(Exception::class)
            
    copyFile(fromFile: AbFile, toFile: AbFile){
var fromFile = fromFile
var toFile = toFile
this.copyFile(fromFile, toFile, false, false)
}


                @Throws(Exception::class)
            
    copyFile(fromFile: AbFile, toFile: AbFile, overwriteNewer: boolean, overwriteAll: boolean){
var fromFile = fromFile
var toFile = toFile
var overwriteNewer = overwriteNewer
var overwriteAll = overwriteAll

        try {
            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Copying ")
appendlong(fromFile!.length())
append(" bytes from File: ")
append(fromFile!.getPath())
append(" to: ")
append(toFile!.getPath())
put(stringBuffer!.toString(), getInstance(), "copyFile")

                                    }
                                

    
                        if(!this.copyPrepare(fromFile, toFile, overwriteNewer, overwriteAll))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var dataOutputStream: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstance(toFile)!;
        
        


    var fileInputStream: AbFileInputStream = new AbFileInputStream(fromFile);
        
        

this.copy(fileInputStream, dataOutputStream)
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILEERROR))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Error Copying File fromFile: ")
append(fromFile!.toString())
append(" to: ")
append(toFile!.toString())
put(stringBuffer!.toString(), getInstance(), "copyFile", e)

                                    }
                                



                            throw e
}

}


                @Throws(Exception::class)
            
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
                                    


                            throw Exception("Not a directory: " +file.getPath())

                                    }
                                

    var fileList: BasicArrayList = directory.search(file, true)!;
        
        


    var size: number = fileList!.size()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Searched: ")
append(file.getPath())
append(" Total: ")
appendint(size)

    var portion: number = size /total +1;
        
        


    var start: number = portion *current;
        
        


    var end: number = start +portion;
        
        


    
                        if(end > size)
                        
                                    {
                                    end= size

                                    }
                                
append(" Section: ")
appendint(start)
append(" - ")
appendint(end)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    put(stringBuffer!.toString(), getInstance(), "copySomeFilesToDirectory()")

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
        
        

this.copyFile(nextFile, toFile, overwriteNewer, overwriteAll)

                        }
                            
}

}


                @Throws(Exception::class)
            
    copyDirectory(fromFile: AbFile, to: AbFile){
    //var fromFile = fromFile
    //var to = to

        try {
            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Copying Directory from: ")
append(fromFile!.getPath())
append(" to: ")
append(to.getPath())
put(stringBuffer!.toString(), getInstance(), "copyDirectory")

                                    }
                                

    var newDirectory: string = getNewDirectory(fromFile)!;
        
        


    var newDirectoryAbPath: AbPath = new AbPath(to.getPath() +AbPathData.getInstance()!.SEPARATOR +newDirectory);
        
        


    
                        if(!this.directory.create(newDirectoryAbPath))
                        
                                    {
                                    


                            throw Exception("Failed to create directory: " +newDirectoryAbPath)

                                    }
                                

    var fileArray: AbFile[] = FileWrapperUtil.wrapFiles(fromFile!.listFiles())!;
        
        


    var size: number = fileArray!.length
                ;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Copying ")
appendint(size)
append(" files from: ")
append(fromFile!.getPath())
append(" to: ")
append(to.getPath())
put(stringBuffer!.toString(), getInstance(), "copyDirectory")

                                    }
                                




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var file: AbFile = fileArray[index]!;
        
        


    
                        if(file.isFile())
                        
                                    {
                                    this.copyFile(file, AbFile(newDirectoryAbPath!.toString(), file.getName()))

                                    }
                                
                             else 
    
                        if(file.isDirectory())
                        
                                    {
                                    this.copyDirectory(file, AbFile(newDirectoryAbPath))

                                    }
                                
                        else {
                            


                            throw Exception("File Copy Error")

                        }
                            
}

} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILEERROR))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Error Copying Directory fromFile: ")
append(fromFile!.toString())
append(" to: ")
append(to.toString())
put(stringBuffer!.toString(), getInstance(), "copyDirectory", e)

                                    }
                                



                            throw e
}

}


                @Throws(Exception::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public copy(fromAbPath: AbPath, to: AbPath): boolean{
var fromAbPath = fromAbPath
var to = to

        try {
            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Copying AbPaths from: ")
append(fromAbPath!.toString())
append(" to: ")
append(to.toString())
put(stringBuffer!.toString(), getInstance(), "copy")

                                    }
                                

    
                        if(fromAbPath == 
                                    null
                                )
                        
                                    {
                                    


                            throw Exception("Cannot Copy From A Null Location")

                                    }
                                

    
                        if(to == 
                                    null
                                )
                        
                                    {
                                    


                            throw Exception("Cannot Copy To A Null Location")

                                    }
                                

    var fromLocationFile: AbFile = new AbFile(fromAbPath);
        
        


    var toLocationFile: AbFile = new AbFile(to);
        
        


    
                        if(fromLocationFile!.isFile())
                        
                                    {
                                    
    
                        if(toLocationFile!.isDirectory())
                        
                                    {
                                    
    var file: AbFile = new AbFile(toLocationFile, fromLocationFile!.getName());
        
        

this.copyFile(fromLocationFile, file)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Copied file=")
append(fromLocationFile!.getName())
append(" from: ")
append(fromLocationFile!.getPath())
append(" to: ")
append(toLocationFile!.getPath())
put(stringBuffer!.toString(), getInstance(), "copy")

                                    }
                                

                                    }
                                
                        else {
                            this.copyFile(fromLocationFile, toLocationFile)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Copied file with new name ")
append(" from: ")
append(fromLocationFile!.getPath())
append(" to: ")
append(toLocationFile!.getPath())
put(stringBuffer!.toString(), getInstance(), "copy")

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
                                    put("Copying subdirectories", getInstance(), "copy")

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
        
        

this.copyFile(file, aFile)

                                    }
                                
                             else 
    
                        if(file.isDirectory())
                        
                                    {
                                    copyDirectory(file, toLocationFile)

                                    }
                                
                        else {
                            


                            throw Exception("File Copy Error")

                        }
                            
}


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    put("Copied subdirectories", getInstance(), "copy")

                                    }
                                

                                    }
                                
                        else {
                            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    put("Copyinhg directory", getInstance(), "copy")

                                    }
                                
copyDirectory(fromLocationFile, toLocationFile)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(logConfigTypeFactory!.FILE))
                        
                                    {
                                    put("Copied directory", getInstance(), "copy")

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
        
        

append("Error Copying fromAbPath: ")
append(fromAbPath!.toString())
append(" to: ")
append(to.toString())
put(stringBuffer!.toString(), getInstance(), "copy", e)

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
                                    put(commonStrings!.EXCEPTION, this, "SmallInsert", e)

                                    }
                                
}

         finally {
            close(idFile)

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
        
        

                @Throws(Exception::class)
            
    public write(filePath: string, string: string){
var filePath = filePath
var string = string

    var dataOutputStream: AbDataOutputStream = 
                null
            ;
        
        


        try {
            put(StringBuilder().
                            append(this.WRITE_LABEL)!.append(filePath)!.append(DATA_LABEL)!.append(string)!.toString(), this, this.WRITE_METHOD)

    var fileInputStreamFactory: FileStreamFactory = FileStreamFactory.getInstance()!;
        
        


    var fileOutputStream: OutputStream = fileInputStreamFactory!.getFileOutputStreamInstance(StringUtil.getInstance()!.EMPTY_STRING, filePath)!;
        
        

dataOutputStream= AbDataOutputStream(fileOutputStream)
write(string.encodeToByteArray()0, string.length)
flush()

         finally {
            close(dataOutputStream)

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
                
            

