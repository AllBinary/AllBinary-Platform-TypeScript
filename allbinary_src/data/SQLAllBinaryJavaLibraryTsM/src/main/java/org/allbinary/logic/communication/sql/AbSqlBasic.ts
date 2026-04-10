
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
        



import { Connection } from "../../../../../java/sql/Connection.js";

    
import { ResultSet } from "../../../../../java/sql/ResultSet.js";

    
import { SQLException } from "../../../../../java/sql/SQLException.js";

    
import { Statement } from "../../../../../java/sql/Statement.js";

    
import { DatabaseConnectionInfoInterface } from "../../../../../org/allbinary/business/init/db/DatabaseConnectionInfoInterface.js";

    
import { DbConnectionInfo } from "../../../../../org/allbinary/business/init/db/DbConnectionInfo.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { SqlConnectionPool } from "../../../../../org/allbinary/logic/communication/sql/connection/pool/SqlConnectionPool.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class AbSqlBasic
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly sqlConnectionPool: SqlConnectionPool = SqlConnectionPool.getInstance()!;
        
        

    private databaseConnectionInfoInterface: DbConnectionInfo

    private connectAttemptCounter: number

    conn: Connection

    readonly stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

    readonly sqlTypeStrings: SqlTypeStrings = SqlTypeStrings.getInstance()!;
        
        

    readonly sqlStrings: SqlStrings = SqlStrings.getInstance()!;
        
        

    readonly INSERT: string = "insert";
        
        

    readonly UPDATE: string = "update";
        
        

    readonly FAILED_SQL_STATEMENT: string = "Failed\nSQL Statement: ";
        
        

    readonly SUCCESS_SQL_STATEMENT: string = "Success\nSQL Statement: ";
        
        

    private readonly METHOD_EXECUTED_SQL_STATEMENT: string = "executedSQLStatement";
        
        

    private readonly METHOD_CREATE: string = "create";
        
        

    private readonly DATABASE_CREATED_LABEL: string = "Database Created: ";
        
        

    private readonly DATABASE_CREATION_FAILED_LABEL: string = "Database Creation Failed: ";
        
        

    private readonly SQL_CONNECTION_FAILED: string = "SQL Connection Failed";
        
        

    private readonly SQL_CONNECTION_RETRYING: string = "SQL Connection Retrying";
        
        

    private readonly SQL_CONNECTION_RETRY: string = "SQL Connection Retry";
        
        

    private readonly METHOD_CREATE_CONNECTION: string = "createConnection()";
        
        

    private readonly METHOD_INITIALIZE: string = "initialize";
        
        

    private readonly LOAD_JDBC_DRIVER_FAILED_LABEL: string = "Load JDBC Driver Failed: ";
        
        
public constructor (databaseConnectionInfoInterface: DbConnectionInfo){

            super();
                //var databaseConnectionInfoInterface = databaseConnectionInfoInterface
this.databaseConnectionInfoInterface= databaseConnectionInfoInterface
this.connectAttemptCounter= 0
this.conn= 
                                        null
                                    
}


                @Throws(SQLException::class)
            
    public executeSQLStatement(statement: string): ResultSet{
    //var statement = statement

        try {
            initialize()

    var stmt: Statement = conn.createStatement()!;
        
        

execute(statement)

    var rset: ResultSet = stmt.getResultSet()!;
        
        

close()

    var tempConnection: Connection = this.conn;
        
        

this.conn= 
                                        null
                                    
add(this.getDatabaseConnectionInfoInterface()!.getUrl(), tempConnection)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rset;
    
} catch(e: SQLException)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    put(FAILED_SQL_STATEMENT +statement, this, METHOD_EXECUTED_SQL_STATEMENT, e)

                                    }
                                
close()
this.conn= 
                                        null
                                    



                            throw e
}

}


    public create(databaseName: string): string{
    //var databaseName = databaseName

        try {
            this.executeSQLStatement(sqlStrings!.CREATE_DATABASE +databaseName)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.DATABASE_CREATED_LABEL +databaseName, this, METHOD_CREATE)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return databaseName +sqlStrings!.CREATE_RETURN;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    put(DATABASE_CREATION_FAILED_LABEL +databaseName, this, this.METHOD_CREATE, e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DATABASE_CREATION_FAILED_LABEL +databaseName;
    
}

}


    createConnection(){

        try {
            this.conn= sqlConnectionPool!.get(this.getDatabaseConnectionInfoInterface()!.getUrl())
} catch(se: SQLException)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    put(SQL_CONNECTION_RETRYING, this, METHOD_CREATE_CONNECTION, se)

                                    }
                                

        try {
            sleep(2000)

    
                        if(connectAttemptCounter < 10)
                        
                                    {
                                    connectAttemptCounter++
this.initialize()

                                    }
                                
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    put(SQL_CONNECTION_RETRY +se.message, this, this.METHOD_CREATE_CONNECTION, e)

                                    }
                                
}

}

}


    initialize(){

        try {
            

                            {
                            
        try {
            
    var loader: ClassLoader = Thread.currentThread()!.getContextClassLoader()!;
        
        


    var jdbcDriverClass: KClass<*> = loader.loadClass(this.getDatabaseConnectionInfoInterface()!.getJdbcDriver())!;
        
        

newInstance()
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    put(LOAD_JDBC_DRIVER_FAILED_LABEL +this.getDatabaseConnectionInfoInterface()!.getJdbcDriver(), this, METHOD_INITIALIZE, e)

                                    }
                                
}


                            }
                    
this.createConnection()
} catch(se: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    put(SQL_CONNECTION_FAILED, this, this.METHOD_INITIALIZE, se)

                                    }
                                
}

}


    public getDatabaseConnectionInfoInterface(): DatabaseConnectionInfoInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return databaseConnectionInfoInterface;
    
}


    public setDatabaseConnectionInfoInterface(databaseConnectionInfoInterface: DbConnectionInfo){
    //var databaseConnectionInfoInterface = databaseConnectionInfoInterface
this.databaseConnectionInfoInterface= databaseConnectionInfoInterface
}


}
                
            

