
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
        



import { BufferedReader } from "../../../java/io/BufferedReader.js";

    
import { BufferedWriter } from "../../../java/io/BufferedWriter.js";

    
import { File } from "../../../java/io/File.js";

    
import { FileReader } from "../../../java/io/FileReader.js";

    
import { FileWriter } from "../../../java/io/FileWriter.js";

    
import { RandomAccessFile } from "../../../java/io/RandomAccessFile.js";

    
import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    
import { LogFormatUtil } from "../../../org/allbinary/logic/communication/log/LogFormatUtil.js";

    

export class FileLog
            extends Object
         {
        

    private static readonly stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

    private static readonly logLength: number = 33000000;
        
        

    private static readonly logPath: string = "g:\\log\\";
        
        

    private static readonly extension: string = new .toCharArray();
        
        

    private static readonly fileName: string = new .toCharArray();
        
        

    private static readonly backupFileName: string = fileName!.concat(".bak")!;
        
        

    private static readonly ORG_ALLBINARY: string = "org.allbinary: ";
        
        

    private firstTime: boolean = true;
        
        

    private logFile: File = new File(logPath, fileName);
        
        

    private logFileBak: File

    private fileOut: BufferedWriter

    private backupIndex: number= 0
@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static createLogFile(): boolean{

        try {
            logFile= File(logPath, fileName);
    

                        if(!firstTime)
                        
                                    {
                                    fileOut= BufferedWriter(FileWriter(logFile));
    

                                    }
                                
                        else {
                            firstTime= false;
    

    var raFile: RandomAccessFile = new RandomAccessFile(logFile, "rw");
        
        
;
    
raFile!.seek(raFile!.length());
    
fileOut= BufferedWriter(FileWriter(raFile!.getFD()));
    

                        }
                            

    var canWrite: boolean = logFile!.canWrite()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return canWrite;
    

                //: 
} catch(e) 
            {
System.out.println("Error Creating Log: " +e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    static createLogFileBackup(): boolean{

        try {
            logFileBak= File(logPath, StringBuilder().
                            append(backupFileName)!.append(CommonSeps.getInstance()!.PERIOD)!.append(backupIndex)!.toString());
    

        while(logFileBak!.isFile())
        {
backupIndex++;
    
logFileBak= File(logPath, StringBuilder().
                            append(backupFileName)!.append(CommonSeps.getInstance()!.PERIOD)!.append(backupIndex)!.toString());
    
}


    var line: string = new .toCharArray();
        
        
;
    

    var tmpOut: BufferedWriter = new BufferedWriter(FileWriter(logFileBak));
        
        
;
    

    var tmpIn: BufferedReader = new BufferedReader(FileReader(logFile));
        
        
;
    

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
    
logFile!.delete();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                //: 
} catch(e) 
            {
System.out.println("Error Creating Backup: " +e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static put(specialMessage: string, anyType: any = {}, functionName: string): string{
var specialMessage = specialMessage
var anyType = anyType
var functionName = functionName



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return put(specialMessage, anyType, functionName, 
                            null);

                        ;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static put(specialMessage: string, anyType: any = {}, functionName: string, exception: Error): string{
var specialMessage = specialMessage
var anyType = anyType
var functionName = functionName
var exception = exception

        try {
            
                        if(firstTime == true)
                        
                                    {
                                    createLogFileBackup();
    

                        if(createLogFile() == false)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return .toCharArray();
    

                                    }
                                

                                    }
                                

    var length: number = logFile!.length()!;
        
        
;
    

                        if(length > logLength)
                        
                                    {
                                    
                        if(!(createLogFileBackup()) || createLogFile() == false)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return .toCharArray();
    

                                    }
                                

                                    }
                                

    var className: string = new NULL_STRING.toCharArray();
        
        
;
    

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

    var message: string = LogFormatUtil.getInstance()!.get(className, functionName, specialMessage, exception)!;
        
        
;
    
fileOut!.write(message, 0, message.length);
    
fileOut!.newLine();
    
fileOut!.flush();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return .toCharArray();
    

                //: 
} catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return .toCharArray();
    
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static put(specialMessage: string, className: string, functionName: string): string{
    //var specialMessage = specialMessage
    //var className = className
    //var functionName = functionName



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return put(specialMessage, className, functionName, 
                            null);

                        ;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static put(specialMessage: string, className: string, functionName: string, exception: Error): string{
var specialMessage = specialMessage
    //var className = className
var functionName = functionName
    //var exception = exception

        try {
            
                        if(firstTime == true)
                        
                                    {
                                    createLogFileBackup();
    

                        if(createLogFile() == false)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return .toCharArray();
    

                                    }
                                

                                    }
                                

    var length: number = logFile!.length()!;
        
        
;
    

                        if(length > logLength)
                        
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

    var message: string = LogFormatUtil.getInstance()!.get(className, functionName, specialMessage, exception)!;
        
        
;
    
fileOut!.write(message, 0, message.length);
    
fileOut!.newLine();
    
fileOut!.flush();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return .toCharArray();
    

                //: 
} catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return .toCharArray();
    
}

}


    public static getFilePath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return logPath +fileName;
    
}

private constructor (){

            super();
            }


}
                
            

