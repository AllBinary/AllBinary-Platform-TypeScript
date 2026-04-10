
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
        



import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { ResultSet } from "../../../../../java/sql/ResultSet.js";

    
import { ResultSetMetaData } from "../../../../../java/sql/ResultSetMetaData.js";

    
import { Calendar } from "../../../../../java/util/Calendar.js";

    
import { Portion } from "../../../../../org/allbinary/business/installer/Portion.js";

    
import { AbFileOutputStream } from "../../../../../org/allbinary/logic/io/AbFileOutputStream.js";

    
import { BufferedLineReader } from "../../../../../org/allbinary/logic/io/BufferedLineReader.js";

    
import { StreamUtil } from "../../../../../org/allbinary/logic/io/StreamUtil.js";

    
import { AbFile } from "../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { FileUtil } from "../../../../../org/allbinary/logic/io/file/FileUtil.js";

    
import { Directory } from "../../../../../org/allbinary/logic/io/file/directory/Directory.js";

    
import { AbPath } from "../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { AbPathData } from "../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PATH_GLOBALS } from "../../../../../org/allbinary/globals/PATH_GLOBALS.js";

    
import { OutputStream } from "../../../../../java/io/OutputStream.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    

export class AbSqlTableUtil
            extends Object
         {
        

    private static readonly instance: AbSqlTableUtil = new AbSqlTableUtil();
        
        

    public static getInstance(): AbSqlTableUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private EXTENSION: string = ".adb";
        
        

    private readonly END: string = "')\n";
        
        

    private readonly SAVING_BACKUP_PATH: string = "Saving Backup: Path: ";
        
        

    private readonly FILE_LABEL: string = " File: ";
        
        

    private readonly METHOD_RESTORE_TABLE: string = "restoreTable()";
        
        

    private readonly METHOD_BACKUP_TABLE: string = "backupTable()";
        
        

    private readonly METHOD_BACKUP_FILE: string = "backupFile()";
        
        

    private readonly METHOD_GET_OUTPUT_STREAM: string = "getOutputStream()";
        
        

    private readonly TABLE_CREATION_SUCCESS: string = "Table Creation Successful: ";
        
        

    private readonly DROPPED_SUCCESS: string = " Dropped Successfully";
        
        

    private readonly SAVING: string = "Saving: ";
        
        

    private readonly APPENDING: string = "Appending: ";
        
        

    private readonly TABLE_LABEL: string = "Table: ";
        
        

    private readonly BACKUP_SUCCESS: string = " Backup Success";
        
        

    private readonly ERROR_CREATING: string = "Error Creating: ";
        
        

    private readonly TOTAL_LABEL: string = " Total: ";
        
        

    private readonly SECTION_LABEL: string = " Section: ";
        
        

    private readonly DASH: string = " - ";
        
        

    private readonly PORTION_RESTORED: string = " Portion Restored";
        
        

    private readonly specialCharArray: string[] = charArrayOf('\n','\f','\r');
        
        

    private readonly NEW_LINE: string = "\\n";
        
        

    readonly stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

    readonly sqlStrings: SqlStrings = SqlStrings.getInstance()!;
        
        
@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    getOutputStream(backupPath: string, tableName: string): OutputStream{
var backupPath = backupPath
var tableName = tableName

        try {
            
    var fileName: string = tableName +EXTENSION;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(SAVING +tableName, this, this.METHOD_GET_OUTPUT_STREAM)

                                    }
                                

    var backupFilePath: AbPath = new AbPath(backupPath, fileName);
        
        


    var backupFile: AbFile = new AbFile(backupFilePath);
        
        


    
                        if(backupFile!.exists())
                        
                                    {
                                    backupFile(backupFilePath, backupPath, tableName)
delete()

                                    }
                                
createNewFile()

    var outputStream: OutputStream = new AbFileOutputStream(backupFile);
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return outputStream;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    put("Create File", this, this.METHOD_GET_OUTPUT_STREAM, e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    backupFile(path: AbPath, backupPath: string, tableName: string): boolean{
var path = path
var backupPath = backupPath
var tableName = tableName

        try {
            
    var calendar: Calendar = Calendar.getInstance()!;
        
        


    var timeLong: Long = new calendar.getTimeInMillis() as Long;
        
        


    var time: string = timeLong!.toString()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        


    var fileName: string = tableName +EXTENSION;
        
        

append(backupPath)
append(AbPathData.getInstance()!.SEPARATOR)
append(time)

    var backupAbPath: AbPath = new AbPath(stringBuffer!.toString());
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    delete(0, stringBuffer!.length())
append(SAVING_BACKUP_PATH)
append(backupAbPath!.toFileSystemString())
append(FILE_LABEL)
append(fileName)
put(stringBuffer!.toString(), this, this.METHOD_BACKUP_FILE)

                                    }
                                
create(backupAbPath)

    var backupFileBak: AbFile = new AbFile(backupAbPath!.toFileSystemString());
        
        

createNewFile()
copy(path, backupAbPath)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    put(this.commonStrings!.EXCEPTION, this, this.METHOD_BACKUP_FILE, e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    convertNewLines(value: string): string{
var value = value

    var stringBuffer: StringMaker = new StringMaker();
        
        


    var index: number = 0;
        
        


    var lastIndex: number = 0;
        
        


        while(index < value.length)
        {
index= value.indexOf(specialCharArray[0]!, lastIndex)

    
                        if(index !=  -1)
                        
                                    {
                                    
    var nextLine: string = value.substring(lastIndex, index -1)!;
        
        

append(nextLine)
append(NEW_LINE)
lastIndex= index +1

                                    }
                                
                        else {
                            break;

                    

                        }
                            
}


    
                        if(lastIndex < value.length)
                        
                                    {
                                    append(value.substring(lastIndex, value.length))

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public backupTable(abSqlTable: AbSqlTable): string{
var abSqlTable = abSqlTable

    var tableName: string = abSqlTable!.getTableName()!;
        
        


        try {
            
    var count: number = 0;
        
        


    var sqlStatement: string = this.sqlStrings!.SELECT_ALL_FROM +tableName;
        
        


    var path: string = org.allbinary.globals.URLGLOBALS.getMainPath() +PATH_GLOBALS.getInstance()!.BACKUP_PATH;
        
        


    
                        if(!Directory.create(AbPath(path)))
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(ERROR_CREATING +path, this, this.METHOD_BACKUP_TABLE)

                                    }
                                

                                    }
                                

    var rset: ResultSet = abSqlTable!.executeSQLStatement(sqlStatement)!;
        
        


    var rsmd: ResultSetMetaData = rset.getMetaData()!;
        
        


    var colNum: number = rsmd.getColumnCount()!;
        
        


    var QUERY_START: string = StringBuilder().
                            append(this.sqlStrings!.INSERT_INTO)!.append(tableName)!.append(this.sqlStrings!.VALUES)!.toString()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        


    var outputStream: OutputStream = this.getOutputStream(path, tableName)!;
        
        


        while(rset.next())
        {
delete(0, stringBuffer!.length())
append(QUERY_START)




                        for (
    var i: number = 1;
        
        
i < colNum; i++)
        {

    var value: string = rset.getString(i)!;
        
        

append(this.convertNewLines(value))
append(this.sqlStrings!.SINGLE_QUOTE_COMMA_SEP)
}

append(rset.getString(colNum))
append(END)

    var sqlStatementLine: string = stringBuffer!.toString()!;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(APPENDING +sqlStatementLine, this, this.METHOD_BACKUP_TABLE)

                                    }
                                
write(sqlStatementLine!.encodeToByteArray())
}

close(outputStream)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TABLE_LABEL +tableName +BACKUP_SUCCESS;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    put("Backup Table Failed\nSQL Statement", this, this.METHOD_BACKUP_TABLE, e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TABLE_LABEL +tableName +" Backup Failed";
    
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public restoreTable(abSqlTable: AbSqlTable, portion: Portion): string{
var abSqlTable = abSqlTable
var portion = portion

    var tableName: string = abSqlTable!.getTableName()!;
        
        


        try {
            
    var path: string = org.allbinary.globals.URLGLOBALS.getMainPath() +PATH_GLOBALS.getInstance()!.BACKUP_PATH;
        
        


    var current: number = portion.getCurrent()!.toInt()!;
        
        


    
                        if(current == 0)
                        
                                    {
                                    
    
                        if(Directory.create(AbPath(path)))
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.ERROR_CREATING +path, this, this.METHOD_RESTORE_TABLE)

                                    }
                                

                                    }
                                

                                    }
                                

    var backupFile: AbFile = new AbFile(path, tableName +EXTENSION);
        
        


    var bufferedLineReader: BufferedLineReader = new BufferedLineReader(backupFile);
        
        


    var size: number = bufferedLineReader!.getSize()!;
        
        


    var section: number = size /portion.getTotal()!.toInt() +1;
        
        


    var start: number = section *current;
        
        


    var end: number = start +section;
        
        


    
                        if(end > size)
                        
                                    {
                                    end= size

                                    }
                                

    var stringBuffer: StringMaker = new StringMaker();
        
        

append(TOTAL_LABEL)
append(size)
append(SECTION_LABEL)
append(start)
append(DASH)
append(end)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(stringBuffer!.toString(), this, this.METHOD_RESTORE_TABLE)

                                    }
                                
readUpToLines(start)

    var line: string = this.stringUtil!.EMPTY_STRING;
        
        


        while(bufferedLineReader!.getCurrent() < end && (line= bufferedLineReader!.readLine()) != 
                                    null
                                )
        {

    
                        if(line.length > 1)
                        
                                    {
                                    executeSQLStatement(line)

                                    }
                                
}

append(this.commonSeps!.SPACE)
append(this.TABLE_LABEL)
append(tableName)
append(PORTION_RESTORED)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    put("Restore Table Failed\nSQL Statement", this, this.METHOD_RESTORE_TABLE, e)

                                    }
                                

    var stringBuffer: StringMaker = new StringMaker();
        
        

append(TABLE_LABEL)
append(tableName)
append(" Restoration Failed")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}

}


}
                
            

