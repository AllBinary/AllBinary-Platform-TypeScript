
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { ResultSet } from '../../../../../java/sql/ResultSet.js';
//not GWT import const ResultSet

import { ResultSetMetaData } from '../../../../../java/sql/ResultSetMetaData.js';
//not GWT import const ResultSetMetaData

import { HashMap } from '../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { Set } from '../../../../../java/util/Set.js';
//not GWT import const Set

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { DbConnectionInfo } from '../../../../../org/allbinary/business/init/db/DbConnectionInfo.js';
//not GWT import const DbConnectionInfo

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { StringValidationUtil } from '../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

import { Replace } from '../../../../../org/allbinary/logic/string/regex/replace/Replace.js';
//not GWT import const Replace

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbSqlColumn } from './AbSqlColumn.js';
//sameFolderImports - not GWT import - same folder const AbSqlColumn

export class AbSqlRow extends AbSqlColumn {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly EQUAL_QUOTE: string = "=\"";

    private readonly ESCAPE_QUOTES: string = "\\\"";

    private readonly GET_ROW: string = "Row Value: ";

    private readonly METHOD_GET_ROW: string = "getRow()";

    private readonly METHOD_GET_ROWS: string = "getRows()";

    private readonly METHOD_GET_ALL_ROWS: string = "getAllRows()";

    private readonly METHOD_UPDATE_WHERE: string = "updateWhere()";

    private readonly METHOD_GET_ROWS_WHERE_BETWEEN: string = "getRowsWhereBetween()";

    private readonly METHOD_DELETE_WHERE: string = "deleteWhere()";

    private readonly ROW_VALUE_LABEL: string = "Row Value: ";

    private readonly ROW_VALUES_LABEL: string = "Row Values: ";

    private readonly NO_RESULTS_IN_RESULT_SET: string = "No Results in ResultSet";

    private readonly COLUMN_NAME_LABEL: string = "columnName: ";

    private readonly INSERT_END: string = "')";

public constructor (databaseConnectionInfoInterface: DbConnectionInfo){
            super(databaseConnectionInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    getValue(value: string): string{

                        if(StringValidationUtil.getInstance()!.isEmpty(value))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.stringUtil!.EMPTY_STRING;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return value;
    

                        }
                            
}

updateWhere(...args: any[]): any {
   
    if (args.length === 3 && typeof args[0] === 'string' && typeof args[1] === 'string') return this.updateWhere$overload1(args[0], args[1], args[2]);
   
    if (args.length === 2) return this.updateWhere$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: updateWhere'); }
  //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public updateWhere$overload1(key: string, value: string, updatedKeyValuePairs: HashMap<any, any>){

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.UPDATE);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(this.sqlStrings!.SET);
    

 try { 
    let keyArray: any[] = updatedKeyValuePairs!.keySet()!.()!;;
    

    let size: number = keyArray!.length
                ;;
    




                        for (
    let i: number = 0;i < size; i++)
        {

    let columnName: string = keyArray[i]!.toString()!;;
    
stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(columnName);
    
stringBuffer!.append(this.EQUAL_QUOTE);
    

    let columnValue: string = updatedKeyValuePairs!.get(columnName) as string;;
    

                        if(columnValue == 
                                    null
                                )
                        
                                    {
                                    columnValue= this.stringUtil!.EMPTY_STRING;
    

                                    }
                                
                        else {
                            columnValue= new Replace(this.sqlStrings!.CLOSE_QUOTE, this.ESCAPE_QUOTES).all(columnValue);
    

                        }
                            
stringBuffer!.append(this.getValue(columnValue));
    
stringBuffer!.append(this.sqlStrings!.CLOSE_QUOTE);
    

                        if(i < size -1)
                        
                                    {
                                    stringBuffer!.append(this.commonSeps!.COMMA);
    

                                    }
                                
}

stringBuffer!.append(this.sqlStrings!.WHERE);
    
stringBuffer!.append(key);
    
stringBuffer!.append(this.sqlStrings!.EQUAL_QUOTE);
    
stringBuffer!.append(this.getValue(value));
    
stringBuffer!.append(this.sqlStrings!.CLOSE_QUOTE);
    

    let sqlStatement: string = stringBuffer!.toString()!;;
    
this.executeSQLStatement(sqlStatement);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.SUCCESS_SQL_STATEMENT +sqlStatement, this, this.METHOD_UPDATE_WHERE);
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.FAILED_SQL_STATEMENT +stringBuffer, this, METHOD_UPDATE_WHERE, e);
    

                                    }
                                

 }
   }
 
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public updateWhere$overload2(whereKeyValuePairs: HashMap<any, any>, updatedKeyValuePairs: HashMap<any, any>){

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.UPDATE);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(this.sqlStrings!.SET);
    

 try { 
    let keyArray: any[] = updatedKeyValuePairs!.keySet()!.()!;;
    

    let size: number = keyArray!.length
                ;;
    




                        for (
    let i: number = 0;i < size; i++)
        {

    let columnName: string = keyArray[i]!.toString()!;;
    
stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(columnName);
    
stringBuffer!.append(this.EQUAL_QUOTE);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.COLUMN_NAME_LABEL +columnName, this, this.METHOD_UPDATE_WHERE);
    

                                    }
                                

    let columnValue: string = updatedKeyValuePairs!.get(columnName) as string;;
    

                        if(columnValue == 
                                    null
                                )
                        
                                    {
                                    columnValue= this.stringUtil!.EMPTY_STRING;
    

                                    }
                                
                        else {
                            columnValue= new Replace(this.sqlStrings!.CLOSE_QUOTE, this.ESCAPE_QUOTES).all(columnValue);
    

                        }
                            
stringBuffer!.append(this.getValue(columnValue));
    
stringBuffer!.append(this.sqlStrings!.CLOSE_QUOTE);
    

                        if(i < size -1)
                        
                                    {
                                    stringBuffer!.append(this.commonSeps!.COMMA);
    

                                    }
                                
}

stringBuffer!.append(this.sqlStrings!.WHERE);
    

    let set: Set = whereKeyValuePairs!.keySet()!;;
    

    let keyArray2: any[] = set.toArray()!;;
    

    let size2: number = keyArray2!.length
                ;;
    




                        for (
    let i: number = 0;i < size2; i++)
        {

    let key: string = keyArray2[i]! as string;;
    

    let value: string = whereKeyValuePairs!.get(key) as string;;
    


                            {
                            stringBuffer!.append(key);
    
stringBuffer!.append(this.sqlStrings!.EQUAL_QUOTE);
    
stringBuffer!.append(this.getValue(value));
    
stringBuffer!.append(this.sqlStrings!.CLOSE_QUOTE);
    

                        if(i < size2 -1)
                        
                                    {
                                    stringBuffer!.append(this.sqlStrings!.AND);
    

                                    }
                                

                            }
                    
}


    let sqlStatement: string = stringBuffer!.toString()!;;
    
this.executeSQLStatement(sqlStatement);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.SUCCESS_SQL_STATEMENT +sqlStatement, this, this.METHOD_UPDATE_WHERE);
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.FAILED_SQL_STATEMENT +stringBuffer, this, METHOD_UPDATE_WHERE, e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}

deleteWhere(...args: any[]): any {
   
    if (args.length === 2 && typeof args[0] === 'string' && typeof args[1] === 'string') return this.deleteWhere$overload1(args[0], args[1]);
   
    if (args.length === 1) return this.deleteWhere$overload2(args[0]);
   
   throw new TypeError('No matching overload: deleteWhere'); }
  //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public deleteWhere$overload1(key: string, value: string){

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.DELETE);
    
stringBuffer!.append(this.sqlStrings!.FROM);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(this.sqlStrings!.WHERE);
    
stringBuffer!.append(key);
    
stringBuffer!.append(this.sqlStrings!.EQUAL_QUOTE);
    
stringBuffer!.append(value);
    
stringBuffer!.append(this.sqlStrings!.CLOSE_QUOTE);
    

 try { 
    let sqlStatement: string = stringBuffer!.toString()!;;
    
this.executeSQLStatement(sqlStatement);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.SUCCESS_SQL_STATEMENT +sqlStatement, this, this.METHOD_DELETE_WHERE);
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.FAILED_SQL_STATEMENT +stringBuffer!.toString(), this, this.METHOD_DELETE_WHERE, e);
    

                                    }
                                

 }
   }
 
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public deleteWhere$overload2(keysAndValues: HashMap<any, any>){

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.DELETE);
    
stringBuffer!.append(this.sqlStrings!.FROM);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(this.sqlStrings!.WHERE);
    

 try { 
    let set: Set = keysAndValues!.keySet()!;;
    

    let keyArray: any[] = set.toArray()!;;
    

    let size: number = keyArray!.length
                ;;
    




                        for (
    let i: number = 0;i < size; i++)
        {

    let key: string = keyArray[i]! as string;;
    

    let value: string = .toCharArray();;
    
stringBuffer!.append(key);
    
stringBuffer!.append(this.sqlStrings!.EQUAL_QUOTE);
    
stringBuffer!.append(this.getValue(value));
    
stringBuffer!.append(this.sqlStrings!.CLOSE_QUOTE);
    

                        if(i < size -1)
                        
                                    {
                                    stringBuffer!.append(this.sqlStrings!.AND);
    

                                    }
                                
}


    let sqlStatement: string = stringBuffer!.toString()!;;
    
this.executeSQLStatement(sqlStatement);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.SUCCESS_SQL_STATEMENT +sqlStatement, this, this.METHOD_DELETE_WHERE);
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.FAILED_SQL_STATEMENT +stringBuffer!.toString(), this, this.METHOD_DELETE_WHERE, e);
    

                                    }
                                

 }
   }
 
}


    public insert(values: BasicArrayList){

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.INSERT_INTO);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(this.sqlStrings!.VALUES);
    

 try { 



                        for (
    let i: number = 0;i < values.size() -1; i++)
        {

    let value: string = this.getValue(values.get(i) as string)!;;
    
value= new Replace(this.sqlStrings!.ESCAPE, this.sqlStrings!.DOUBLE_ESCAPE).all(value);
    
stringBuffer!.append(value);
    
stringBuffer!.append(this.sqlStrings!.SINGLE_QUOTE_COMMA_SEP);
    
}


    let value: string = this.getValue(values.get(values.size() -1) as string)!;;
    
value= new Replace(this.sqlStrings!.ESCAPE, this.sqlStrings!.DOUBLE_ESCAPE).all(value);
    
stringBuffer!.append(value);
    
stringBuffer!.append(this.INSERT_END);
    

    let sqlStatement: string = stringBuffer!.toString()!;;
    
this.executeSQLStatement(sqlStatement);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.SUCCESS_SQL_STATEMENT +sqlStatement, this, this.INSERT);
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.FAILED_SQL_STATEMENT +stringBuffer!.toString(), this, INSERT, e);
    

                                    }
                                

 }
   }
 
}


    public getRow(keysAndValues: HashMap<any, any>): HashMap<any, any>{

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.SELECT_ALL_FROM);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(this.sqlStrings!.WHERE);
    

 try { 
    let result: HashMap<any, any> = 
                null
            ;;
    

    let set: Set = keysAndValues!.keySet()!;;
    

    let keyArray: any[] = set.toArray()!;;
    

    let size: number = keyArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let key: string = keyArray[index]! as string;;
    

    let value: string = .toCharArray();;
    
stringBuffer!.append(key);
    
stringBuffer!.append(this.sqlStrings!.EQUAL_QUOTE);
    
stringBuffer!.append(this.getValue(value));
    
stringBuffer!.append(this.sqlStrings!.CLOSE_QUOTE);
    

                        if(index < size -1)
                        
                                    {
                                    stringBuffer!.append(this.sqlStrings!.AND);
    

                                    }
                                
}


    let sqlStatement: string = stringBuffer!.toString()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.sqlStrings!.SQL_STATEMENT_LABEL +sqlStatement, this, this.METHOD_GET_ROW);
    

                                    }
                                

    let rset: ResultSet = this.executeSQLStatement(sqlStatement)!;;
    

    let resultSetMetaData: ResultSetMetaData = rset.getMetaData()!;;
    

        while(rset.next())
        {
result= this.stdUtil!.createHashMap();
    

    let columnCount: number = resultSetMetaData!.getColumnCount()!;;
    




                        for (
    let index: number = 1;index <= columnCount; index++)
        {

    let columnName: string = resultSetMetaData!.getColumnName(index)!;;
    

    let field: string = rset.getString(columnName)!;;
    
result.put(columnName, field);
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.ROW_VALUE_LABEL +result.toString(), this, this.METHOD_GET_ROW);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.putF(this.NO_RESULTS_IN_RESULT_SET, this, this.METHOD_GET_ROW);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.FAILED_SQL_STATEMENT +stringBuffer, this, this.METHOD_GET_ROW, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}

getRows(...args: any[]): any {
   
    if (args.length === 1) return this.getRows$overload1(args[0]);
   
    if (args.length === 2 && typeof args[1] === 'string') return this.getRows$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: getRows'); }
  
    public getRows$overload1(keysAndValues: HashMap<any, any>): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getRows(keysAndValues, StringUtil.getInstance()!.EMPTY_STRING);;
    
}


    public getRows$overload2(keysAndValues: HashMap<any, any>, more: string): BasicArrayList{

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.SELECT_ALL_FROM);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(this.sqlStrings!.WHERE);
    

 try { 
    let rows: BasicArrayList = new BasicArrayListD();;
    

    let set: Set = keysAndValues!.keySet()!;;
    

    let keyArray: any[] = set.toArray()!;;
    

    let size: number = keyArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let key: string = keyArray[index]! as string;;
    

    let value: string = .toCharArray();;
    
stringBuffer!.append(key);
    
stringBuffer!.append(this.sqlStrings!.EQUAL_QUOTE);
    
stringBuffer!.append(this.getValue(value));
    
stringBuffer!.append(this.sqlStrings!.CLOSE_QUOTE);
    

                        if(index < size -1)
                        
                                    {
                                    stringBuffer!.append(this.sqlStrings!.AND);
    

                                    }
                                
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.sqlStrings!.SQL_STATEMENT_LABEL +stringBuffer, this, this.METHOD_GET_ROWS);
    

                                    }
                                
stringBuffer!.append(more);
    

    let sqlStatement: string = stringBuffer!.toString()!;;
    

    let rset: ResultSet = this.executeSQLStatement(sqlStatement)!;;
    

    let resultSetMetaData: ResultSetMetaData = rset.getMetaData()!;;
    

        while(rset.next())
        {

    let result: HashMap<any, any> = this.stdUtil!.createHashMap()!;;
    

    let columnCount: number = resultSetMetaData!.getColumnCount()!;;
    




                        for (
    let index: number = 1;index <= columnCount; index++)
        {

    let columnName: string = resultSetMetaData!.getColumnName(index)!;;
    

    let field: string = rset.getString(columnName)!;;
    
result.put(columnName, field);
    
}


    let resultAsString: string = result.toString()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.GET_ROW +resultAsString, this, this.METHOD_GET_ROWS);
    

                                    }
                                
rows.add(result);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rows;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.FAILED_SQL_STATEMENT +stringBuffer, this, this.METHOD_GET_ROWS, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public getAllRows(): BasicArrayList{

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.SELECT_ALL_FROM);
    
stringBuffer!.append(this.getTableName());
    

 try { 
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.sqlStrings!.SQL_STATEMENT_LABEL +stringBuffer, this, this.METHOD_GET_ALL_ROWS);
    

                                    }
                                

    let rows: BasicArrayList = new BasicArrayListD();;
    

    let sqlStatement: string = stringBuffer!.toString()!;;
    

    let rset: ResultSet = this.executeSQLStatement(sqlStatement)!;;
    

    let resultSetMetaData: ResultSetMetaData = rset.getMetaData()!;;
    

        while(rset.next())
        {

    let result: HashMap<any, any> = this.stdUtil!.createHashMap()!;;
    

    let columnCount: number = resultSetMetaData!.getColumnCount()!;;
    




                        for (
    let index: number = 1;index <= columnCount; index++)
        {

    let columnName: string = resultSetMetaData!.getColumnName(index)!;;
    

    let field: string = rset.getString(columnName)!;;
    
result.put(columnName, field);
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.ROW_VALUES_LABEL +result.toString(), this, this.METHOD_GET_ALL_ROWS);
    

                                    }
                                
rows.add(result);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rows;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.FAILED_SQL_STATEMENT +stringBuffer, this, this.METHOD_GET_ALL_ROWS, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}

getRowsWhereBetween(...args: any[]): any {
   
    if (args.length === 4 && typeof args[1] === 'string' && typeof args[2] === 'string' && typeof args[3] === 'string') return this.getRowsWhereBetween$overload1(args[0], args[1], args[2], args[3]);
   
    if (args.length === 3 && typeof args[0] === 'string' && typeof args[1] === 'string' && typeof args[2] === 'string') return this.getRowsWhereBetween$overload2(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: getRowsWhereBetween'); }
  
    public getRowsWhereBetween$overload1(whereKeyValuePairs: HashMap<any, any>, betweenColumn: string, smallest: string, largest: string): BasicArrayList{

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.SELECT_ALL_FROM);
    
stringBuffer!.append(this.getTableName());
    

 try { 
    let rows: BasicArrayList = new BasicArrayListD();;
    
stringBuffer!.append(this.sqlStrings!.WHERE);
    

    let set: Set = whereKeyValuePairs!.keySet()!;;
    

    let key: string;;
    

    let value: string;;
    

    let keyArray: any[] = set.toArray()!;;
    

    let size: number = keyArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
key= keyArray[index]! as string;
    
value= whereKeyValuePairs!.get(key) as string;
    
stringBuffer!.append(key);
    
stringBuffer!.append(this.sqlStrings!.EQUAL_QUOTE);
    
stringBuffer!.append(this.getValue(value));
    
stringBuffer!.append(this.sqlStrings!.CLOSE_QUOTE);
    
stringBuffer!.append(this.sqlStrings!.AND);
    
}

stringBuffer!.append(betweenColumn);
    
stringBuffer!.append(this.sqlStrings!.MORE_THAN_QUOTE);
    
stringBuffer!.append(smallest);
    
stringBuffer!.append(this.sqlStrings!.CLOSE_QUOTE);
    
stringBuffer!.append(this.sqlStrings!.AND);
    
stringBuffer!.append(betweenColumn);
    
stringBuffer!.append(this.sqlStrings!.LESS_THAN_QUOTE);
    
stringBuffer!.append(largest);
    
stringBuffer!.append(this.sqlStrings!.CLOSE_QUOTE);
    

    let sqlStatement: string = stringBuffer!.toString()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.sqlStrings!.SQL_STATEMENT_LABEL +sqlStatement, this, this.METHOD_GET_ROWS_WHERE_BETWEEN);
    

                                    }
                                

    let rset: ResultSet = this.executeSQLStatement(sqlStatement)!;;
    

    let resultSetMetaData: ResultSetMetaData = rset.getMetaData()!;;
    

    let result: HashMap<any, any>;;
    

    let columnNames: BasicArrayList;;
    

    let columnCount: number= 0;;
    

    let columnName: string;;
    

    let field: string;;
    

        while(rset.next())
        {
result= this.stdUtil!.createHashMap();
    
columnNames= new BasicArrayListD();
    
columnCount= resultSetMetaData!.getColumnCount();
    




                        for (
    let index: number = 1;index <= columnCount; index++)
        {
columnName= resultSetMetaData!.getColumnName(index);
    
field= rset.getString(columnName);
    
result.put(columnName, field);
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.ROW_VALUE_LABEL +result.toString(), this, this.METHOD_GET_ROWS_WHERE_BETWEEN);
    

                                    }
                                
rows.add(result);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rows;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.FAILED_SQL_STATEMENT +stringBuffer, this, METHOD_GET_ROWS_WHERE_BETWEEN, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public getRowsWhereBetween$overload2(betweenColumn: string, smallest: string, largest: string): BasicArrayList{

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.SELECT_ALL_FROM);
    
stringBuffer!.append(this.getTableName());
    

 try { 
    let rows: BasicArrayList = new BasicArrayListD();;
    
stringBuffer!.append(this.sqlStrings!.WHERE);
    
stringBuffer!.append(betweenColumn);
    
stringBuffer!.append(this.sqlStrings!.MORE_THAN_QUOTE);
    
stringBuffer!.append(smallest);
    
stringBuffer!.append(this.sqlStrings!.CLOSE_QUOTE);
    
stringBuffer!.append(this.sqlStrings!.AND);
    
stringBuffer!.append(betweenColumn);
    
stringBuffer!.append(this.sqlStrings!.LESS_THAN_QUOTE);
    
stringBuffer!.append(largest);
    
stringBuffer!.append(this.sqlStrings!.CLOSE_QUOTE);
    

    let sqlStatement: string = stringBuffer!.toString()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.sqlStrings!.SQL_STATEMENT_LABEL +sqlStatement, this, this.METHOD_GET_ROWS_WHERE_BETWEEN);
    

                                    }
                                

    let rset: ResultSet = this.executeSQLStatement(sqlStatement)!;;
    

    let resultSetMetaData: ResultSetMetaData = rset.getMetaData()!;;
    

    let columnName: string;;
    

    let field: string;;
    

    let result: HashMap<any, any>;;
    

    let columnNames: BasicArrayList;;
    

    let columnCount: number= 0;;
    

        while(rset.next())
        {
result= this.stdUtil!.createHashMap();
    
columnNames= new BasicArrayListD();
    
columnCount= resultSetMetaData!.getColumnCount();
    




                        for (
    let index: number = 1;index <= columnCount; index++)
        {
columnName= resultSetMetaData!.getColumnName(index);
    
field= rset.getString(columnName);
    
result.put(columnName, field);
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.ROW_VALUE_LABEL +result.toString(), this, this.METHOD_GET_ROWS_WHERE_BETWEEN);
    

                                    }
                                
rows.add(result);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rows;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.FAILED_SQL_STATEMENT +stringBuffer, this, METHOD_GET_ROWS_WHERE_BETWEEN, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


}

