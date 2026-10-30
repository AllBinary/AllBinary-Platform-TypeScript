
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
        
            import { Long } from '../../../../../java/lang/Long.js';
        
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { ResultSet } from '../../../../../java/sql/ResultSet.js';
//not GWT import const ResultSet

import { ResultSetMetaData } from '../../../../../java/sql/ResultSetMetaData.js';
//not GWT import const ResultSetMetaData

import { Calendar } from '../../../../../java/util/Calendar.js';
//not GWT import const Calendar

import { Portion } from '../../../../../org/allbinary/business/installer/Portion.js';
//not GWT import const Portion

import { AbFileOutputStream } from '../../../../../org/allbinary/logic/io/AbFileOutputStream.js';
//not GWT import const AbFileOutputStream

import { BufferedLineReader } from '../../../../../org/allbinary/logic/io/BufferedLineReader.js';
//not GWT import const BufferedLineReader

import { StreamUtil } from '../../../../../org/allbinary/logic/io/StreamUtil.js';
//not GWT import const StreamUtil

import { AbFile } from '../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

import { FileUtil } from '../../../../../org/allbinary/logic/io/file/FileUtil.js';
//not GWT import const FileUtil

import { Directory } from '../../../../../org/allbinary/logic/io/file/directory/Directory.js';
//not GWT import const Directory

import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
type AbPathData<T = any, U = any> = typeof AbPathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof AbPathData;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { PATH_GLOBALS } from '../../../../../org/allbinary/globals/PATH_GLOBALS.js';
//not GWT import const PATH_GLOBALS

import { OutputStream } from '../../../../../java/io/OutputStream.js';
//not GWT import const OutputStream

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SqlStrings } from './SqlStrings.js';
//not GWT import - same folder const SqlStrings
import { StringBuilder } from './StringBuilder.js';
//not GWT import - same folder const StringBuilder
import { AbSqlTable } from './AbSqlTable.js';
//not GWT import - same folder const AbSqlTable

export class AbSqlTableUtil
            extends Object
         {
        

    private static readonly instance: AbSqlTableUtil = new AbSqlTableUtil();

    public static getInstance(): AbSqlTableUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbSqlTableUtil.instance;
    
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

    private readonly specialCharArray: string[] = ['\n','\f','\r'];

    private readonly NEW_LINE: string = "\\n";

    readonly stringUtil: StringUtil = StringUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;

    readonly sqlStrings: SqlStrings = SqlStrings.getInstance()!;
//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    getOutputStream(backupPath: string, tableName: string): OutputStream{

 try { 
    let fileName: string = tableName +this.EXTENSION;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.SAVING +tableName, this, this.METHOD_GET_OUTPUT_STREAM);
    

                                    }
                                

    let backupFilePath: AbPath = new AbPath(backupPath, fileName);;
    

    let backupFile: AbFile = AbFile.createAbFile(backupFilePath)!;;
    

                        if(backupFile!.exists())
                        
                                    {
                                    this.backupFile(backupFilePath, backupPath, tableName);
    
backupFile!.delete();
    

                                    }
                                
backupFile!.createNewFile();
    

    let outputStream: OutputStream = new AbFileOutputStream(backupFile);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return outputStream;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put("Create File", this, this.METHOD_GET_OUTPUT_STREAM, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    backupFile(path: AbPath, backupPath: string, tableName: string): boolean{

 try { 
    let calendar: Calendar = Calendar.getInstance()!;;
    

    let timeLong: Long = new Long(calendar.getTimeInMillis());;
    

    let time: string = timeLong!.toString()!;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    

    let fileName: string = tableName +this.EXTENSION;;
    
stringBuffer!.append(backupPath);
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    
stringBuffer!.append(time);
    

    let backupAbPath: AbPath = new AbPath(stringBuffer!.toString());;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(this.SAVING_BACKUP_PATH);
    
stringBuffer!.append(backupAbPath!.toFileSystemString());
    
stringBuffer!.append(this.FILE_LABEL);
    
stringBuffer!.append(fileName);
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.METHOD_BACKUP_FILE);
    

                                    }
                                
Directory.create(backupAbPath);
    

    let backupFileBak: AbFile = AbFile.createAbFile(backupAbPath!.toFileSystemString())!;;
    
backupFileBak!.createNewFile();
    
FileUtil.getInstance()!.copy(path, backupAbPath);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.METHOD_BACKUP_FILE, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


    convertNewLines(value: string): string{

    let stringBuffer: StringMaker = new StringMaker();;
    

    let index: number = 0;;
    

    let lastIndex: number = 0;;
    

        while(index < value.length)
        {
index= value.indexOf(specialCharArray[0]!, lastIndex);
    

                        if(index !=  -1)
                        
                                    {
                                    
    let nextLine: string = value.substring(lastIndex, index -1)!;;
    
stringBuffer!.append(nextLine);
    
stringBuffer!.append(this.NEW_LINE);
    
lastIndex= index +1;
    

                                    }
                                
                        else {
                            break;

                    

                        }
                            
}


                        if(lastIndex < value.length)
                        
                                    {
                                    stringBuffer!.append(value.substring(lastIndex, value.length));
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public backupTable(abSqlTable: AbSqlTable): string{

    let tableName: string = abSqlTable!.getTableName()!;;
    

 try { 
    let count: number = 0;;
    

    let sqlStatement: string = this.sqlStrings!.SELECT_ALL_FROM +tableName;;
    

    let path: string = org.allbinary.globals.URLGLOBALS.getMainPath() +PATH_GLOBALS.getInstance()!.BACKUP_PATH;;
    

                        if(!Directory.create(new AbPath(path)))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(ERROR_CREATING +path, this, this.METHOD_BACKUP_TABLE);
    

                                    }
                                

                                    }
                                

    let rset: ResultSet = abSqlTable!.executeSQLStatement(sqlStatement)!;;
    

    let rsmd: ResultSetMetaData = rset.getMetaData()!;;
    

    let colNum: number = rsmd.getColumnCount()!;;
    

    let QUERY_START: string = new StringBuilder().append(this.sqlStrings!.INSERT_INTO)!.append(tableName)!.append(this.sqlStrings!.VALUES)!.toString()!;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    

    let outputStream: OutputStream = this.getOutputStream(path, tableName)!;;
    

        while(rset.next())
        {
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(QUERY_START);
    




                        for (
    let i: number = 1;i < colNum; i++)
        {

    let value: string = rset.getString(i)!;;
    
stringBuffer!.append(this.convertNewLines(value));
    
stringBuffer!.append(this.sqlStrings!.SINGLE_QUOTE_COMMA_SEP);
    
}

stringBuffer!.append(rset.getString(colNum));
    
stringBuffer!.append(this.END);
    

    let sqlStatementLine: string = stringBuffer!.toString()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.APPENDING +sqlStatementLine, this, this.METHOD_BACKUP_TABLE);
    

                                    }
                                
outputStream!.write(sqlStatementLine!.getBytes());
    
}

StreamUtil.getInstance()!.close(outputStream);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.TABLE_LABEL +tableName +this.BACKUP_SUCCESS;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put("Backup Table Failed\nSQL Statement", this, this.METHOD_BACKUP_TABLE, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.TABLE_LABEL +tableName +" Backup Failed";
    

 }
   }
 
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public restoreTable(abSqlTable: AbSqlTable, portion: Portion): string{

    let tableName: string = abSqlTable!.getTableName()!;;
    

 try { 
    let path: string = org.allbinary.globals.URLGLOBALS.getMainPath() +PATH_GLOBALS.getInstance()!.BACKUP_PATH;;
    

    let current: number = portion.getCurrent()!.intValue()!;;
    

                        if(current == 0)
                        
                                    {
                                    
                        if(Directory.create(new AbPath(path)))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.ERROR_CREATING +path, this, this.METHOD_RESTORE_TABLE);
    

                                    }
                                

                                    }
                                

                                    }
                                

    let backupFile: AbFile = AbFile.createAbFile(path, tableName +this.EXTENSION)!;;
    

    let bufferedLineReader: BufferedLineReader = new BufferedLineReader(backupFile);;
    

    let size: number = bufferedLineReader!.getSize()!;;
    

    let section: number = size /portion.getTotal()!.intValue() +1;;
    

    let start: number = section *current;;
    

    let end: number = start +section;;
    

                        if(end > size)
                        
                                    {
                                    end= size;
    

                                    }
                                

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.TOTAL_LABEL);
    
stringBuffer!.append(size);
    
stringBuffer!.append(this.SECTION_LABEL);
    
stringBuffer!.append(start);
    
stringBuffer!.append(this.DASH);
    
stringBuffer!.append(end);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(stringBuffer!.toString(), this, this.METHOD_RESTORE_TABLE);
    

                                    }
                                
bufferedLineReader!.readUpToLines(start);
    

    let line: string = this.stringUtil!.EMPTY_STRING;;
    

        while(bufferedLineReader!.getCurrent() < end && (line= bufferedLineReader!.readLine()) != 
                                    null
                                )
        {

                        if(line.length > 1)
                        
                                    {
                                    abSqlTable!.executeSQLStatement(line);
    

                                    }
                                
}

stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(this.TABLE_LABEL);
    
stringBuffer!.append(tableName);
    
stringBuffer!.append(this.PORTION_RESTORED);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put("Restore Table Failed\nSQL Statement", this, this.METHOD_RESTORE_TABLE, e);
    

                                    }
                                

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.TABLE_LABEL);
    
stringBuffer!.append(tableName);
    
stringBuffer!.append(" Restoration Failed");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    

 }
   }
 
}


}

