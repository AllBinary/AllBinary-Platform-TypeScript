
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

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { Throwable } from '../../../java/lang/Throwable.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
            import { System } from '../../../java/lang/System.js';
        
import { BufferedReader } from '../../../java/io/BufferedReader.js';
//not GWT import const BufferedReader

import { BufferedWriter } from '../../../java/io/BufferedWriter.js';
//not GWT import const BufferedWriter

import { File } from '../../../java/io/File.js';
//not GWT import const File

import { FileReader } from '../../../java/io/FileReader.js';
//not GWT import const FileReader

import { FileWriter } from '../../../java/io/FileWriter.js';
//not GWT import const FileWriter

import { RandomAccessFile } from '../../../java/io/RandomAccessFile.js';
//not GWT import const RandomAccessFile

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { LogFormatUtil } 
const LogFormatUtil = globalThis.org.allbinary.logic.communication.log.LogFormatUtil;
type LogFormatUtil<T = any, U = any> = typeof LogFormatUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogFormatUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class FileLog
            extends Object
         {
        

    private static readonly stringUtil: StringUtil = StringUtil.getInstance()!;

    private static readonly logLength: number = 33000000;

    private static readonly logPath: string = "g:\\log\\";

    private static readonly extension: string = .toCharArray();

    private static readonly fileName: string = .toCharArray();

    private static readonly backupFileName: string = FileLog.fileName!.concat(".bak")!;

    private static readonly ORG_ALLBINARY: string = "org.allbinary: ";

    private static firstTime: boolean = true;

    private static logFile: File = new File(FileLog.logPath, FileLog.fileName);

    private static logFileBak: File;

    private static fileOut: BufferedWriter;

    private static backupIndex: number= 0;
//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static createLogFile(): boolean{

 try { FileLog.logFile= new File(logPath, fileName);
    

                        if(!FileLog.firstTime)
                        
                                    {
                                    FileLog.fileOut= new BufferedWriter(new FileWriter(logFile));
    

                                    }
                                
                        else {
                            FileLog.firstTime= false;
    

    let raFile: RandomAccessFile = new RandomAccessFile(logFile, "rw");;
    
raFile!.seek(raFile!.length());
    
FileLog.fileOut= new BufferedWriter(new FileWriter(raFile!.getFD()));
    

                        }
                            

    let canWrite: boolean = FileLog.logFile!.canWrite()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return canWrite;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
console.log("Error Creating Log: " +e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    static createLogFileBackup(): boolean{

 try { 
    let stringMaker: StringMaker = new StringMaker();;
    
FileLog.logFileBak= new File(logPath, stringMaker!.append(backupFileName)!.append(CommonSeps.getInstance()!.PERIOD)!.appendint(backupIndex)!.toString());
    

        while(FileLog.logFileBak!.isFile())
        {
FileLog.backupIndex++;
    
stringMaker!.delete(0, stringMaker!.length());
    
FileLog.logFileBak= new File(logPath, stringMaker!.append(backupFileName)!.append(CommonSeps.getInstance()!.PERIOD)!.appendint(backupIndex)!.toString());
    
}


    let line: string = .toCharArray();;
    

    let tmpOut: BufferedWriter = new BufferedWriter(new FileWriter(logFileBak));;
    

    let tmpIn: BufferedReader = new BufferedReader(new FileReader(logFile));;
    

        while((line= tmpIn!.readLine()) != 
                                    null
                                )
        {
tmpOut!.write(line, 0, line.length);
    
tmpOut!.newLine();
    
}

tmpOut!.flush();
    
tmpOut!.close();
    
tmpIn!.close();
    
FileLog.logFile!.delete();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
console.log("Error Creating Backup: " +e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}

static put(...args: any[]): any {
   
    if (args.length === 3 && typeof args[0] === 'string' && typeof args[2] === 'string') return this.put$overload1(args[0], args[1], args[2]);
   
    if (args.length === 4 && typeof args[0] === 'string' && typeof args[2] === 'string') return this.put$overload2(args[0], args[1], args[2], args[3]);
   
    if (args.length === 3 && typeof args[0] === 'string' && typeof args[1] === 'string' && typeof args[2] === 'string') return this.put$overload3(args[0], args[1], args[2]);
   
    if (args.length === 4 && typeof args[0] === 'string' && typeof args[1] === 'string' && typeof args[2] === 'string') return this.put$overload4(args[0], args[1], args[2], args[3]);
   
   throw new TypeError('No matching overload: put'); }
  //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static put$overload1(specialMessage: string, anyType: any, functionName: string): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FileLog.put(specialMessage, anyType, functionName, 
                            null);;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static put$overload2(specialMessage: string, anyType: any, functionName: string, exception: Throwable): string{

 try { 
                        if(FileLog.firstTime == true)
                        
                                    {
                                    FileLog.createLogFileBackup();
    

                        if(createLogFile() == false)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return .toCharArray();
    

                                    }
                                

                                    }
                                

    let length: number = FileLog.logFile!.length()!;;
    

                        if(length > FileLog.logLength)
                        
                                    {
                                    
                        if(!(createLogFileBackup()) || createLogFile() == false)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return .toCharArray();
    

                                    }
                                

                                    }
                                

    let className: string = NULL_STRING.toCharArray();;
    

                        if(functionName == 
                                    null
                                )
                        functionName= NULL_STRING.toCharArray()

                        if(specialMessage == 
                                    null
                                )
                        specialMessage= NULL_STRING.toCharArray()

                        if(anyType!.constructor.name.toString()! != 
                                    null
                                )
                        className= anyType!.constructor.name.toString()!

    let message: string = LogFormatUtil.getInstance()!.get(className, functionName, specialMessage, exception)!;;
    
FileLog.fileOut!.write(message, 0, message.length);
    
FileLog.fileOut!.newLine();
    
FileLog.fileOut!.flush();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return .toCharArray();
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return .toCharArray();
    

 }
   }
 
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static put$overload3(specialMessage: string, className: string, functionName: string): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FileLog.put(specialMessage, className, functionName, 
                            null);;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static put$overload4(specialMessage: string, className: string, functionName: string, exception: Exception): string{

 try { 
                        if(FileLog.firstTime == true)
                        
                                    {
                                    FileLog.createLogFileBackup();
    

                        if(createLogFile() == false)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return .toCharArray();
    

                                    }
                                

                                    }
                                

    let length: number = FileLog.logFile!.length()!;;
    

                        if(length > FileLog.logLength)
                        
                                    {
                                    
                        if(!(createLogFileBackup()) || createLogFile() == false)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return .toCharArray();
    

                                    }
                                

                                    }
                                

                        if(functionName == 
                                    null
                                )
                        functionName= NULL_STRING.toCharArray()

                        if(specialMessage == 
                                    null
                                )
                        specialMessage= NULL_STRING.toCharArray()

    let message: string = LogFormatUtil.getInstance()!.get(className, functionName, specialMessage, exception)!;;
    
FileLog.fileOut!.write(message, 0, message.length);
    
FileLog.fileOut!.newLine();
    
FileLog.fileOut!.flush();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return .toCharArray();
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return .toCharArray();
    

 }
   }
 
}


    public static getFilePath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FileLog.logPath +FileLog.fileName;
    
}


private constructor (){

            super();
        }


}

