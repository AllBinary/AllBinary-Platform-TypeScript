
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
        



import { Connection } from "../../../../java/sql/Connection.js";

    
import { DriverManager } from "../../../../java/sql/DriverManager.js";

    
import { ResultSet } from "../../../../java/sql/ResultSet.js";

    
import { ResultSetMetaData } from "../../../../java/sql/ResultSetMetaData.js";

    
import { SQLException } from "../../../../java/sql/SQLException.js";

    
import { Statement } from "../../../../java/sql/Statement.js";

    
import { HashMap } from "../../../../java/util/HashMap.js";

    
import { Set } from "../../../../java/util/Set.js";

    
import { Vector } from "../../../../java/util/Vector.js";

    
import { DatabaseConnectionInfoInterface } from "../../../../org/allbinary/business/init/db/DatabaseConnectionInfoInterface.js";

    
import { DbConnectionInfo } from "../../../../org/allbinary/business/init/db/DbConnectionInfo.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { LogConfigTypeFactory } from "../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js";

    
import { LogConfigTypes } from "../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js";

    
import { SqlStrings } from "../../../../org/allbinary/logic/communication/sql/SqlStrings.js";

    
import { SqlTypeStrings } from "../../../../org/allbinary/logic/communication/sql/SqlTypeStrings.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class InitSql
            extends Object
         {
        

    readonly stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

    readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

    readonly sqlTypeStrings: SqlTypeStrings = SqlTypeStrings.getInstance()!;
        
        

    readonly sqlStrings: SqlStrings = SqlStrings.getInstance()!;
        
        

    readonly INSERT: string = "insert";
        
        

    readonly UPDATE: string = "update";
        
        

    private databaseConnectionInfoInterface: DbConnectionInfo

    private userid: string

    private password: string

    private tableName: string

    private conn: Connection

    private useridAndPassword: boolean= false

    readonly SUCCESS_SQL_STATEMENT: string = "Success\nSQL Statement: ";
        
        

    readonly FAILED_SQL_STATEMENT: string = "Failed\nSQL Statement: ";
        
        

    private readonly INIT_SQL: string = "InitSql";
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly EQUAL_QUOTE: string = "=\"";
        
        

    private readonly METHOD_GET_ROW: string = "getRow()";
        
        

    private readonly METHOD_UPDATE_WHERE: string = "updateWhere()";
        
        

    private readonly ROW_VALUE_LABEL: string = "Row Value: ";
        
        

    private readonly NO_RESULTS_IN_RESULT_SET: string = "No Results in ResultSet";
        
        

    private readonly INSERT_END: string = "')";
        
        
public constructor (databaseConnectionInfoInterface: DbConnectionInfo){

            super();
            var databaseConnectionInfoInterface = databaseConnectionInfoInterface
this.setDatabaseConnectionInfoInterface(databaseConnectionInfoInterface)
}


    public setTable(tableName: string){
var tableName = tableName
this.tableName= tableName
}


    public setDatabaseConnectionInfoInterface(databaseConnectionInfoInterface: DbConnectionInfo){
var databaseConnectionInfoInterface = databaseConnectionInfoInterface
this.databaseConnectionInfoInterface= databaseConnectionInfoInterface
}


    public createTable(tableData: string): boolean{
var tableData = tableData

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Creating Table: ")
append(tableData)
put(stringBuffer!.toString(), INIT_SQL, "createTable()")
this.executeSQLStatement(tableData)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
} catch(e: Exception)
            {

    
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    put(this.commonStrings!.EXCEPTION, INIT_SQL, "createTable()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    public dropTable(): boolean{

    var sqlStatement: string = sqlStrings!.DROP_TABLE +tableName;
        
        


        try {
            this.executeSQLStatement(sqlStatement)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
} catch(e: Exception)
            {

    
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    put(this.commonStrings!.EXCEPTION, INIT_SQL, "dropTables()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    public getRow(keysAndValues: HashMap<Any, Any>): HashMap<Any, Any>{
var keysAndValues = keysAndValues

    var stringBuffer: StringMaker = new StringMaker();
        
        

append(this.sqlStrings!.SELECT_ALL_FROM)
append(this.tableName)
append(sqlStrings!.WHERE)

        try {
            
    var result: HashMap<Any, Any> = 
                null
            ;
        
        


    var set: Set = keysAndValues!.keySet()!;
        
        


    var keyArray: any = {}[] = set.toArray()!;
        
        


    var size: number = keyArray!.length
                ;
        
        





                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var key: string = keyArray[i]! as String;
        
        


    var value: string = new .toCharArray();
        
        

append(key)
append(sqlStrings!.EQUAL_QUOTE)
append(this.getValue(value))
append(sqlStrings!.CLOSE_QUOTE)

    
                        if(i < size -1)
                        
                                    {
                                    append(sqlStrings!.AND)

                                    }
                                
}


    var sqlStatement: string = stringBuffer!.toString()!;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(sqlStrings!.SQL_STATEMENT_LABEL +sqlStatement, this.INIT_SQL, this.METHOD_GET_ROW)

                                    }
                                

    var rset: ResultSet = this.executeSQLStatement(sqlStatement)!;
        
        


    var resultSetMetaData: ResultSetMetaData = rset.getMetaData()!;
        
        


        while(rset.next())
        {
result= HashMap<Any, Any>()

    var columnCount: number = resultSetMetaData!.getColumnCount()!;
        
        





                        for (
    var index: number = 1;
        
        
index <= columnCount; index++)
        {

    var columnName: string = resultSetMetaData!.getColumnName(index)!;
        
        


    var field: string = rset.getString(columnName)!;
        
        

put(columnName, field)
}


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(ROW_VALUE_LABEL +result.toString(), this.INIT_SQL, this.METHOD_GET_ROW)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    put(NO_RESULTS_IN_RESULT_SET, this.INIT_SQL, this.METHOD_GET_ROW)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    put(this.FAILED_SQL_STATEMENT +stringBuffer, this.INIT_SQL, this.METHOD_GET_ROW, e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public updateWhere(key: string, value: string, updatedKeyValuePairs: HashMap<Any, Any>){
var key = key
var value = value
var updatedKeyValuePairs = updatedKeyValuePairs

    var stringBuffer: StringMaker = new StringMaker();
        
        

append(this.sqlStrings!.UPDATE)
append(this.tableName)
append(this.sqlStrings!.SET)

        try {
            
    var columnArray: any = {}[] = updatedKeyValuePairs!.keySet()!.toTypedArray()!;
        
        


    var size: number = columnArray!.length
                ;
        
        





                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var columnName: string = columnArray[i]!.toString()!;
        
        

append(this.commonSeps!.SPACE)
append(columnName)
append(EQUAL_QUOTE)

    var columnValue: string = updatedKeyValuePairs!.get(columnName) as String;
        
        


    
                        if(columnValue == 
                                    null
                                )
                        
                                    {
                                    columnValue= this.stringUtil!.EMPTY_STRING

                                    }
                                
                        else {
                            
                        }
                            
append(this.getValue(columnValue))
append(sqlStrings!.CLOSE_QUOTE)

    
                        if(i < size -1)
                        
                                    {
                                    append(this.commonSeps!.COMMA)

                                    }
                                
}

append(sqlStrings!.WHERE)
append(key)
append(sqlStrings!.EQUAL_QUOTE)
append(this.getValue(value))
append(sqlStrings!.CLOSE_QUOTE)

    var sqlStatement: string = stringBuffer!.toString()!;
        
        

this.executeSQLStatement(sqlStatement)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.SUCCESS_SQL_STATEMENT +sqlStatement, this.INIT_SQL, METHOD_UPDATE_WHERE)

                                    }
                                
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    put(this.FAILED_SQL_STATEMENT +stringBuffer, this.INIT_SQL, METHOD_UPDATE_WHERE, e)

                                    }
                                
}

}


    public insert(values: Vector){
var values = values

    var stringBuffer: StringMaker = new StringMaker();
        
        

append(this.sqlStrings!.INSERT_INTO)
append(this.tableName)
append(this.sqlStrings!.VALUES)

        try {
            
    var size: number = values.length!;
        
        





                        for (
    var i: number = 0;
        
        
i < size -1; i++)
        {

    var value: string = this.getValue(values.get(i) as String)!;
        
        

append(value)
append(this.sqlStrings!.SINGLE_QUOTE_COMMA_SEP)
}


    var value: string = this.getValue(values.lastElement() as String)!;
        
        

append(value)
append(INSERT_END)

    var sqlStatement: string = stringBuffer!.toString()!;
        
        

this.executeSQLStatement(sqlStatement)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.SUCCESS_SQL_STATEMENT +sqlStatement, this.INIT_SQL, INSERT)

                                    }
                                
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    put(this.FAILED_SQL_STATEMENT +stringBuffer!.toString(), this.INIT_SQL, INSERT, e)

                                    }
                                
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    getValue(value: string): string{
var value = value

    
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


                @Throws(Exception::class, SQLException::class)
            
    public executeSQLStatement(statement: string): ResultSet{
var statement = statement

        try {
            
    
                        if(conn == 
                                    null
                                )
                        
                                    {
                                    initialize()

                                    }
                                

    var stmt: Statement = conn.createStatement()!;
        
        

execute(statement)

    var rset: ResultSet = stmt.getResultSet()!;
        
        

close()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rset;
    
} catch(e: SQLException)
            {

    
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    put(this.commonStrings!.EXCEPTION, INIT_SQL, "executeSQLStatement()", e)

                                    }
                                



                            throw e
}
 catch(e: Exception)
            {

    
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    put(this.commonStrings!.EXCEPTION, INIT_SQL, "executeSQLStatement()", e)

                                    }
                                



                            throw e
}

}


                @Throws(SQLException::class)
            
    createConnection(){

        try {
            
    
                        if(useridAndPassword == true)
                        
                                    {
                                    conn= DriverManager.getConnection(this.databaseConnectionInfoInterface!.getUrl(), userid, password)

                                    }
                                
                        else {
                            conn= DriverManager.getConnection(this.databaseConnectionInfoInterface!.getUrl())

                        }
                            
} catch(se: SQLException)
            {
put(this.commonStrings!.EXCEPTION, INIT_SQL, "createConnection()", se)



                            throw se
}

}


                @Throws(Exception::class)
            
    initialize(){

        try {
            
        try {
            
    var jdbcDriver: string = this.databaseConnectionInfoInterface!.getJdbcDriver()!;
        
        

put(StringBuilder().
                            append("Loading DbConnnectionInfo: ")!.append(this.databaseConnectionInfoInterface!.::class.toString()!)!.append(" Driver: ")!.append(jdbcDriver)!.toString(), INIT_SQL, "initialize()")
newInstance()
} catch(e: Exception)
            {

    
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    put("LoadDriver Failed: " +this.databaseConnectionInfoInterface!.getJdbcDriver(), INIT_SQL, "initialize()", e)

                                    }
                                



                            throw e
}


    
                        if(userid == 
                                    null
                                 && password == 
                                    null
                                )
                        
                                    {
                                    useridAndPassword= true

                                    }
                                
this.createConnection()
} catch(se: Exception)
            {

    
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    put(this.commonStrings!.EXCEPTION, INIT_SQL, "initialize()", se)

                                    }
                                



                            throw se
}

}


    public getDatabaseConnectionInfoInterface(): DatabaseConnectionInfoInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return databaseConnectionInfoInterface;
    
}


}
                
            

