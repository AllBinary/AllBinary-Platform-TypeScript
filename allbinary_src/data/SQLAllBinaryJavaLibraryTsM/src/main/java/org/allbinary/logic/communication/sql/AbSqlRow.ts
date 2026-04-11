
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
        



            import Vector from "@ohos.util.Vector";
        
import { ResultSet } from "../../../../../java/sql/ResultSet.js";

    
import { ResultSetMetaData } from "../../../../../java/sql/ResultSetMetaData.js";

    
import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { Set } from "../../../../../java/util/Set.js";

    

//import { Vector } from "../../../../../java/util/Vector.js";

    
import { DbConnectionInfo } from "../../../../../org/allbinary/business/init/db/DbConnectionInfo.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { Replace } from "../../../../../org/allbinary/logic/string/regex/replace/Replace.js";

    

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
        
        
public constructor (databaseConnectionInfoInterface: DbConnectionInfo)                        

                            : super(databaseConnectionInfoInterface){

            super();
                //var databaseConnectionInfoInterface = databaseConnectionInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    getValue(value: string): string{
    //var value = value

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

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public updateWhere(key: string, value: string, updatedKeyValuePairs: HashMap<any, any>){
    //var key = key
    //var value = value
    //var updatedKeyValuePairs = updatedKeyValuePairs

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.sqlStrings!.UPDATE);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(this.sqlStrings!.SET);
    

        try {
            
    var keyArray: any[] = updatedKeyValuePairs!.keySet()!.toTypedArray()!;
        
        
;
    

    var size: number = keyArray!.length
                ;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var columnName: string = keyArray[i]!.toString()!;
        
        
;
    
stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(columnName);
    
stringBuffer!.append(EQUAL_QUOTE);
    

    var columnValue: string = updatedKeyValuePairs!.get(columnName);

                         as String;
        
        
;
    

                        if(columnValue == 
                                    null
                                )
                        
                                    {
                                    columnValue= this.stringUtil!.EMPTY_STRING;
    

                                    }
                                
                        else {
                            columnValue= new Replace(sqlStrings!.CLOSE_QUOTE, ESCAPE_QUOTES).
                            all(columnValue);
    

                        }
                            
stringBuffer!.append(this.getValue(columnValue));
    
stringBuffer!.append(sqlStrings!.CLOSE_QUOTE);
    

                        if(i < size -1)
                        
                                    {
                                    stringBuffer!.append(this.commonSeps!.COMMA);
    

                                    }
                                
}

stringBuffer!.append(sqlStrings!.WHERE);
    
stringBuffer!.append(key);
    
stringBuffer!.append(sqlStrings!.EQUAL_QUOTE);
    
stringBuffer!.append(this.getValue(value));
    
stringBuffer!.append(sqlStrings!.CLOSE_QUOTE);
    

    var sqlStatement: string = stringBuffer!.toString()!;
        
        
;
    
this.executeSQLStatement(sqlStatement);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(this.SUCCESS_SQL_STATEMENT +sqlStatement, this, METHOD_UPDATE_WHERE);
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    logUtil!.put(this.FAILED_SQL_STATEMENT +stringBuffer, this, METHOD_UPDATE_WHERE, e);
    

                                    }
                                
}

}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public updateWhere(whereKeyValuePairs: HashMap<any, any>, updatedKeyValuePairs: HashMap<any, any>){
    //var whereKeyValuePairs = whereKeyValuePairs
    //var updatedKeyValuePairs = updatedKeyValuePairs

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.sqlStrings!.UPDATE);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(this.sqlStrings!.SET);
    

        try {
            
    var keyArray: any[] = updatedKeyValuePairs!.keySet()!.toTypedArray()!;
        
        
;
    

    var size: number = keyArray!.length
                ;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var columnName: string = keyArray[i]!.toString()!;
        
        
;
    
stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(columnName);
    
stringBuffer!.append(this.EQUAL_QUOTE);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(COLUMN_NAME_LABEL +columnName, this, METHOD_UPDATE_WHERE);
    

                                    }
                                

    var columnValue: string = updatedKeyValuePairs!.get(columnName);

                         as String;
        
        
;
    

                        if(columnValue == 
                                    null
                                )
                        
                                    {
                                    columnValue= this.stringUtil!.EMPTY_STRING;
    

                                    }
                                
                        else {
                            columnValue= new Replace(sqlStrings!.CLOSE_QUOTE, this.ESCAPE_QUOTES).
                            all(columnValue);
    

                        }
                            
stringBuffer!.append(this.getValue(columnValue));
    
stringBuffer!.append(sqlStrings!.CLOSE_QUOTE);
    

                        if(i < size -1)
                        
                                    {
                                    stringBuffer!.append(this.commonSeps!.COMMA);
    

                                    }
                                
}

stringBuffer!.append(sqlStrings!.WHERE);
    

    var set: Set = whereKeyValuePairs!.keySet()!;
        
        
;
    

    var keyArray2: any[] = set.toArray()!;
        
        
;
    

    var size2: number = keyArray2!.length
                ;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size2; i++)
        {

    var key: string = keyArray2[i]! as String;
        
        
;
    

    var value: string = whereKeyValuePairs!.get(key);

                         as String;
        
        
;
    


                            {
                            stringBuffer!.append(key);
    
stringBuffer!.append(sqlStrings!.EQUAL_QUOTE);
    
stringBuffer!.append(this.getValue(value));
    
stringBuffer!.append(sqlStrings!.CLOSE_QUOTE);
    

                        if(i < size2 -1)
                        
                                    {
                                    stringBuffer!.append(sqlStrings!.AND);
    

                                    }
                                

                            }
                    
}


    var sqlStatement: string = stringBuffer!.toString()!;
        
        
;
    
this.executeSQLStatement(sqlStatement);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(this.SUCCESS_SQL_STATEMENT +sqlStatement, this, METHOD_UPDATE_WHERE);
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    logUtil!.put(this.FAILED_SQL_STATEMENT +stringBuffer, this, METHOD_UPDATE_WHERE, e);
    

                                    }
                                



                            throw e
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public deleteWhere(key: string, value: string){
    //var key = key
    //var value = value

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.sqlStrings!.DELETE);
    
stringBuffer!.append(this.sqlStrings!.FROM);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(sqlStrings!.WHERE);
    
stringBuffer!.append(key);
    
stringBuffer!.append(sqlStrings!.EQUAL_QUOTE);
    
stringBuffer!.append(value);
    
stringBuffer!.append(sqlStrings!.CLOSE_QUOTE);
    

        try {
            
    var sqlStatement: string = stringBuffer!.toString()!;
        
        
;
    
this.executeSQLStatement(sqlStatement);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(this.SUCCESS_SQL_STATEMENT +sqlStatement, this, this.METHOD_DELETE_WHERE);
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    logUtil!.put(this.FAILED_SQL_STATEMENT +stringBuffer!.toString(), this, this.METHOD_DELETE_WHERE, e);
    

                                    }
                                
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public deleteWhere(keysAndValues: HashMap<any, any>){
    //var keysAndValues = keysAndValues

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.sqlStrings!.DELETE);
    
stringBuffer!.append(this.sqlStrings!.FROM);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(this.sqlStrings!.WHERE);
    

        try {
            
    var set: Set = keysAndValues!.keySet()!;
        
        
;
    

    var keyArray: any[] = set.toArray()!;
        
        
;
    

    var size: number = keyArray!.length
                ;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var key: string = keyArray[i]! as String;
        
        
;
    

    var value: string = .toCharArray();
        
        
;
    
stringBuffer!.append(key);
    
stringBuffer!.append(this.sqlStrings!.EQUAL_QUOTE);
    
stringBuffer!.append(this.getValue(value));
    
stringBuffer!.append(this.sqlStrings!.CLOSE_QUOTE);
    

                        if(i < size -1)
                        
                                    {
                                    stringBuffer!.append(this.sqlStrings!.AND);
    

                                    }
                                
}


    var sqlStatement: string = stringBuffer!.toString()!;
        
        
;
    
this.executeSQLStatement(sqlStatement);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(this.SUCCESS_SQL_STATEMENT +sqlStatement, this, this.METHOD_DELETE_WHERE);
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    logUtil!.put(this.FAILED_SQL_STATEMENT +stringBuffer!.toString(), this, this.METHOD_DELETE_WHERE, e);
    

                                    }
                                
}

}


    public insert(values: Vector){
    //var values = values

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.sqlStrings!.INSERT_INTO);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(this.sqlStrings!.VALUES);
    

        try {
            



                        for (
    var i: number = 0;
        
        
i < values.length -1; i++)
        {

    var value: string = this.getValue(values.get(i);

                         as String)!;
        
        
;
    
value= new Replace(this.sqlStrings!.ESCAPE, this.sqlStrings!.DOUBLE_ESCAPE).
                            all(value);
    
stringBuffer!.append(value);
    
stringBuffer!.append(this.sqlStrings!.SINGLE_QUOTE_COMMA_SEP);
    
}


    var value: string = this.getValue(values.lastElement();

                         as String)!;
        
        
;
    
value= new Replace(this.sqlStrings!.ESCAPE, this.sqlStrings!.DOUBLE_ESCAPE).
                            all(value);
    
stringBuffer!.append(value);
    
stringBuffer!.append(INSERT_END);
    

    var sqlStatement: string = stringBuffer!.toString()!;
        
        
;
    
this.executeSQLStatement(sqlStatement);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(this.SUCCESS_SQL_STATEMENT +sqlStatement, this, INSERT);
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    logUtil!.put(this.FAILED_SQL_STATEMENT +stringBuffer!.toString(), this, INSERT, e);
    

                                    }
                                
}

}


    public getRow(keysAndValues: HashMap<any, any>): HashMap<any, any>{
    //var keysAndValues = keysAndValues

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.sqlStrings!.SELECT_ALL_FROM);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(sqlStrings!.WHERE);
    

        try {
            
    var result: HashMap<any, any> = 
                null
            ;
        
        
;
    

    var set: Set = keysAndValues!.keySet()!;
        
        
;
    

    var keyArray: any[] = set.toArray()!;
        
        
;
    

    var size: number = keyArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var key: string = keyArray[index]! as String;
        
        
;
    

    var value: string = .toCharArray();
        
        
;
    
stringBuffer!.append(key);
    
stringBuffer!.append(sqlStrings!.EQUAL_QUOTE);
    
stringBuffer!.append(this.getValue(value));
    
stringBuffer!.append(sqlStrings!.CLOSE_QUOTE);
    

                        if(index < size -1)
                        
                                    {
                                    stringBuffer!.append(sqlStrings!.AND);
    

                                    }
                                
}


    var sqlStatement: string = stringBuffer!.toString()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(sqlStrings!.SQL_STATEMENT_LABEL +sqlStatement, this, this.METHOD_GET_ROW);
    

                                    }
                                

    var rset: ResultSet = this.executeSQLStatement(sqlStatement)!;
        
        
;
    

    var resultSetMetaData: ResultSetMetaData = rset.getMetaData()!;
        
        
;
    

        while(rset.next())
        {
result= new HashMap<any, any>();
    

    var columnCount: number = resultSetMetaData!.getColumnCount()!;
        
        
;
    




                        for (
    var index: number = 1;
        
        
index <= columnCount; index++)
        {

    var columnName: string = resultSetMetaData!.getColumnName(index)!;
        
        
;
    

    var field: string = rset.getString(columnName)!;
        
        
;
    
result.put(columnName, field);
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(ROW_VALUE_LABEL +result.toString(), this, this.METHOD_GET_ROW);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    logUtil!.put(NO_RESULTS_IN_RESULT_SET, this, this.METHOD_GET_ROW);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    logUtil!.put(this.FAILED_SQL_STATEMENT +stringBuffer, this, this.METHOD_GET_ROW, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getRows(keysAndValues: HashMap<any, any>): Vector{
    //var keysAndValues = keysAndValues



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getRows(keysAndValues, StringUtil.getInstance()!.EMPTY_STRING);

                        ;
    
}


    public getRows(keysAndValues: HashMap<any, any>, more: string): Vector{
    //var keysAndValues = keysAndValues
    //var more = more

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.sqlStrings!.SELECT_ALL_FROM);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(sqlStrings!.WHERE);
    

        try {
            
    var rows: Vector = new Vector();
        
        
;
    

    var set: Set = keysAndValues!.keySet()!;
        
        
;
    

    var keyArray: any[] = set.toArray()!;
        
        
;
    

    var size: number = keyArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var key: string = keyArray[index]! as String;
        
        
;
    

    var value: string = .toCharArray();
        
        
;
    
stringBuffer!.append(key);
    
stringBuffer!.append(sqlStrings!.EQUAL_QUOTE);
    
stringBuffer!.append(this.getValue(value));
    
stringBuffer!.append(sqlStrings!.CLOSE_QUOTE);
    

                        if(index < size -1)
                        
                                    {
                                    stringBuffer!.append(sqlStrings!.AND);
    

                                    }
                                
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(sqlStrings!.SQL_STATEMENT_LABEL +stringBuffer, this, this.METHOD_GET_ROWS);
    

                                    }
                                
stringBuffer!.append(more);
    

    var sqlStatement: string = stringBuffer!.toString()!;
        
        
;
    

    var rset: ResultSet = this.executeSQLStatement(sqlStatement)!;
        
        
;
    

    var resultSetMetaData: ResultSetMetaData = rset.getMetaData()!;
        
        
;
    

        while(rset.next())
        {

    var result: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    

    var columnCount: number = resultSetMetaData!.getColumnCount()!;
        
        
;
    




                        for (
    var index: number = 1;
        
        
index <= columnCount; index++)
        {

    var columnName: string = resultSetMetaData!.getColumnName(index)!;
        
        
;
    

    var field: string = rset.getString(columnName)!;
        
        
;
    
result.put(columnName, field);
    
}


    var resultAsString: string = result.toString()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(this.GET_ROW +resultAsString, this, this.METHOD_GET_ROWS);
    

                                    }
                                
rows.add(result);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rows;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    logUtil!.put(this.FAILED_SQL_STATEMENT +stringBuffer, this, this.METHOD_GET_ROWS, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getAllRows(): Vector{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.sqlStrings!.SELECT_ALL_FROM);
    
stringBuffer!.append(this.getTableName());
    

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(sqlStrings!.SQL_STATEMENT_LABEL +stringBuffer, this, this.METHOD_GET_ALL_ROWS);
    

                                    }
                                

    var rows: Vector = new Vector();
        
        
;
    

    var sqlStatement: string = stringBuffer!.toString()!;
        
        
;
    

    var rset: ResultSet = this.executeSQLStatement(sqlStatement)!;
        
        
;
    

    var resultSetMetaData: ResultSetMetaData = rset.getMetaData()!;
        
        
;
    

        while(rset.next())
        {

    var result: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    

    var columnCount: number = resultSetMetaData!.getColumnCount()!;
        
        
;
    




                        for (
    var index: number = 1;
        
        
index <= columnCount; index++)
        {

    var columnName: string = resultSetMetaData!.getColumnName(index)!;
        
        
;
    

    var field: string = rset.getString(columnName)!;
        
        
;
    
result.put(columnName, field);
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(ROW_VALUES_LABEL +result.toString(), this, this.METHOD_GET_ALL_ROWS);
    

                                    }
                                
rows.add(result);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rows;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    logUtil!.put(this.FAILED_SQL_STATEMENT +stringBuffer, this, this.METHOD_GET_ALL_ROWS, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getRowsWhereBetween(whereKeyValuePairs: HashMap<any, any>, betweenColumn: string, smallest: string, largest: string): Vector{
    //var whereKeyValuePairs = whereKeyValuePairs
    //var betweenColumn = betweenColumn
    //var smallest = smallest
    //var largest = largest

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.sqlStrings!.SELECT_ALL_FROM);
    
stringBuffer!.append(this.getTableName());
    

        try {
            
    var rows: Vector = new Vector();
        
        
;
    
stringBuffer!.append(sqlStrings!.WHERE);
    

    var set: Set = whereKeyValuePairs!.keySet()!;
        
        
;
    

    var key: string
;
    

    var value: string
;
    

    var keyArray: any[] = set.toArray()!;
        
        
;
    

    var size: number = keyArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
key= keyArray[index]! as String;
    
value= whereKeyValuePairs!.get(key);

                         as String;
    
stringBuffer!.append(key);
    
stringBuffer!.append(sqlStrings!.EQUAL_QUOTE);
    
stringBuffer!.append(this.getValue(value));
    
stringBuffer!.append(sqlStrings!.CLOSE_QUOTE);
    
stringBuffer!.append(sqlStrings!.AND);
    
}

stringBuffer!.append(betweenColumn);
    
stringBuffer!.append(this.sqlStrings!.MORE_THAN_QUOTE);
    
stringBuffer!.append(smallest);
    
stringBuffer!.append(sqlStrings!.CLOSE_QUOTE);
    
stringBuffer!.append(sqlStrings!.AND);
    
stringBuffer!.append(betweenColumn);
    
stringBuffer!.append(this.sqlStrings!.LESS_THAN_QUOTE);
    
stringBuffer!.append(largest);
    
stringBuffer!.append(sqlStrings!.CLOSE_QUOTE);
    

    var sqlStatement: string = stringBuffer!.toString()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(sqlStrings!.SQL_STATEMENT_LABEL +sqlStatement, this, METHOD_GET_ROWS_WHERE_BETWEEN);
    

                                    }
                                

    var rset: ResultSet = this.executeSQLStatement(sqlStatement)!;
        
        
;
    

    var resultSetMetaData: ResultSetMetaData = rset.getMetaData()!;
        
        
;
    

    var result: HashMap<any, any>
;
    

    var columnNames: Vector
;
    

    var columnCount: number= 0
;
    

    var columnName: string
;
    

    var field: string
;
    

        while(rset.next())
        {
result= new HashMap<any, any>();
    
columnNames= new Vector();
    
columnCount= resultSetMetaData!.getColumnCount();
    




                        for (
    var index: number = 1;
        
        
index <= columnCount; index++)
        {
columnName= resultSetMetaData!.getColumnName(index);
    
field= rset.getString(columnName);
    
result.put(columnName, field);
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(ROW_VALUE_LABEL +result.toString(), this, METHOD_GET_ROWS_WHERE_BETWEEN);
    

                                    }
                                
rows.add(result);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rows;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    logUtil!.put(this.FAILED_SQL_STATEMENT +stringBuffer, this, METHOD_GET_ROWS_WHERE_BETWEEN, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getRowsWhereBetween(betweenColumn: string, smallest: string, largest: string): Vector{
    //var betweenColumn = betweenColumn
    //var smallest = smallest
    //var largest = largest

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.sqlStrings!.SELECT_ALL_FROM);
    
stringBuffer!.append(this.getTableName());
    

        try {
            
    var rows: Vector = new Vector();
        
        
;
    
stringBuffer!.append(sqlStrings!.WHERE);
    
stringBuffer!.append(betweenColumn);
    
stringBuffer!.append(this.sqlStrings!.MORE_THAN_QUOTE);
    
stringBuffer!.append(smallest);
    
stringBuffer!.append(sqlStrings!.CLOSE_QUOTE);
    
stringBuffer!.append(sqlStrings!.AND);
    
stringBuffer!.append(betweenColumn);
    
stringBuffer!.append(this.sqlStrings!.LESS_THAN_QUOTE);
    
stringBuffer!.append(largest);
    
stringBuffer!.append(sqlStrings!.CLOSE_QUOTE);
    

    var sqlStatement: string = stringBuffer!.toString()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(sqlStrings!.SQL_STATEMENT_LABEL +sqlStatement, this, METHOD_GET_ROWS_WHERE_BETWEEN);
    

                                    }
                                

    var rset: ResultSet = this.executeSQLStatement(sqlStatement)!;
        
        
;
    

    var resultSetMetaData: ResultSetMetaData = rset.getMetaData()!;
        
        
;
    

    var columnName: string
;
    

    var field: string
;
    

    var result: HashMap<any, any>
;
    

    var columnNames: Vector
;
    

    var columnCount: number= 0
;
    

        while(rset.next())
        {
result= new HashMap<any, any>();
    
columnNames= new Vector();
    
columnCount= resultSetMetaData!.getColumnCount();
    




                        for (
    var index: number = 1;
        
        
index <= columnCount; index++)
        {
columnName= resultSetMetaData!.getColumnName(index);
    
field= rset.getString(columnName);
    
result.put(columnName, field);
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(ROW_VALUE_LABEL +result.toString(), this, METHOD_GET_ROWS_WHERE_BETWEEN);
    

                                    }
                                
rows.add(result);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rows;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    logUtil!.put(this.FAILED_SQL_STATEMENT +stringBuffer, this, METHOD_GET_ROWS_WHERE_BETWEEN, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


}
                
            

