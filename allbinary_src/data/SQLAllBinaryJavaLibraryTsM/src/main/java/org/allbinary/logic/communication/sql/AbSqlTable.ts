
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
        



import { DbConnectionInfo } from "../../../../../org/allbinary/business/init/db/DbConnectionInfo.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class AbSqlTable extends AbSqlBasic {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private tableName: string

    private readonly METHOD_CREATED_TABLE: string = "createTable()";
        
        

    private readonly METHOD_DROP_TABLE: string = "dropTable()";
        
        

    private readonly TABLE_CREATION_SUCCESS: string = "Table Creation Successful: ";
        
        

    private readonly DROPPED_SUCCESS: string = " Dropped Successfully";
        
        
public constructor (databaseConnectionInfoInterface: DbConnectionInfo)                        

                            : super(databaseConnectionInfoInterface){

            super();
            var databaseConnectionInfoInterface = databaseConnectionInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
}


    public setTableName(tableName: string){
var tableName = tableName
this.tableName= tableName
}


    public getTableName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return tableName;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public createTable(data: string): string{
var data = data

        try {
            this.executeSQLStatement(data)

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(TABLE_CREATION_SUCCESS +this.tableName +" with statement: " +data, this, this.METHOD_CREATED_TABLE)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return tableName +sqlStrings!.CREATE_RETURN;
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    logUtil!.put("Table Creation Failed: " +this.tableName +" with statement: " +data, this, this.METHOD_CREATED_TABLE, e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Failed to Create " +tableName +" table.";
    
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public dropTable(): string{

    var sqlStatement: string = sqlStrings!.DROP_TABLE +tableName;
        
        


        try {
            this.executeSQLStatement(sqlStatement)

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(this.SUCCESS_SQL_STATEMENT +sqlStatement, this, this.METHOD_DROP_TABLE)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return tableName +DROPPED_SUCCESS;
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    logUtil!.put(this.FAILED_SQL_STATEMENT +sqlStatement, this, this.METHOD_DROP_TABLE, e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Failed to Drop " +tableName +" table.";
    
}

}


}
                
            

