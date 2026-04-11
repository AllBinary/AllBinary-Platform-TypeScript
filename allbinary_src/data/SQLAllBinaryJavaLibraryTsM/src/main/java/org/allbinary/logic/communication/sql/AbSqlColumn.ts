
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

    

//import { Vector } from "../../../../../java/util/Vector.js";

    
import { DbConnectionInfo } from "../../../../../org/allbinary/business/init/db/DbConnectionInfo.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    

export class AbSqlColumn extends AbSqlTable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly LARGEST_INT_VALUE_IN_COLUMN: string = "\nLargest Int Value in column: ";
        
        

    private readonly METHOD_GET_LARGETS_INTEGER_IN_COLUMN: string = "getLargestIntegerInColumn";
        
        

    private readonly METHOD_GET_COLUMN: string = "getColumn";
        
        

    private readonly METHOD_GET_COLUMN_WHERE: string = "getColumnWhere";
        
        

    private readonly INVALID_RESULT: string = "-1";
        
        
public constructor (databaseConnectionInfoInterface: DbConnectionInfo)                        

                            : super(databaseConnectionInfoInterface){

            super();
                //var databaseConnectionInfoInterface = databaseConnectionInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
}


    public getLargestIntegerInColumnWhere(columnName: string, key: string, value: string): string{
    //var columnName = columnName
    //var key = key
    //var value = value

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(sqlStrings!.SELECT);
    
stringBuffer!.append(columnName);
    
stringBuffer!.append(sqlStrings!.FROM);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(sqlStrings!.WHERE);
    
stringBuffer!.append(key);
    
stringBuffer!.append(sqlStrings!.EQUAL_QUOTE);
    
stringBuffer!.append(value);
    
stringBuffer!.append(sqlStrings!.CLOSE_QUOTE);
    

    var sqlStatement: string = stringBuffer!.toString()!;
        
        
;
    

        try {
            
    var largest: number = 0;
        
        
;
    

    var rset: ResultSet = executeSQLStatement(sqlStatement)!;
        
        
;
    

        while(rset.next())
        {

    var intValue: number = rset.getInt(columnName)!;
        
        
;
    

                        if(intValue > largest)
                        
                                    {
                                    largest= intValue;
    

                                    }
                                
}


    var largestAsString: string = Integer(largest).
                            toString()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(sqlStrings!.SQL_STATEMENT_LABEL);
    
stringBuffer!.append(sqlStatement);
    
stringBuffer!.append(LARGEST_INT_VALUE_IN_COLUMN);
    
stringBuffer!.append(largestAsString);
    
logUtil!.put(stringBuffer!.toString(), this, METHOD_GET_LARGETS_INTEGER_IN_COLUMN);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return largestAsString;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    logUtil!.put(this.FAILED_SQL_STATEMENT +sqlStatement, this, METHOD_GET_LARGETS_INTEGER_IN_COLUMN, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return INVALID_RESULT;
    
}

}


    public getColumn(columnName: string): Vector{
    //var columnName = columnName

    var column: Vector = new Vector();
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(sqlStrings!.SELECT);
    
stringBuffer!.append(columnName);
    
stringBuffer!.append(sqlStrings!.FROM);
    
stringBuffer!.append(this.getTableName());
    

    var sqlStatement: string = stringBuffer!.toString()!;
        
        
;
    

        try {
            
    var rset: ResultSet = executeSQLStatement(sqlStatement)!;
        
        
;
    

        while(rset.next())
        {

    var field: string = rset.getObject(columnName)!.toString()!;
        
        
;
    
column.add(field);
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(sqlStrings!.SQL_STATEMENT_LABEL);
    
stringBuffer!.append(sqlStatement);
    
stringBuffer!.append(sqlStrings!.COLUMN_VALUE);
    
stringBuffer!.append(column.toString());
    
logUtil!.put(stringBuffer!.toString(), this, METHOD_GET_COLUMN);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return column;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    logUtil!.put(this.FAILED_SQL_STATEMENT +sqlStatement, this, METHOD_GET_COLUMN, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return column;
    
}

}


    public getColumnWhere(columnName: string, key: string, value: string): Vector{
var columnName = columnName
var key = key
var value = value

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(sqlStrings!.SELECT);
    
stringBuffer!.append(columnName);
    
stringBuffer!.append(sqlStrings!.FROM);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(sqlStrings!.WHERE);
    
stringBuffer!.append(key);
    
stringBuffer!.append(sqlStrings!.EQUAL_QUOTE);
    
stringBuffer!.append(value);
    
stringBuffer!.append(sqlStrings!.CLOSE_QUOTE);
    

    var sqlStatement: string = stringBuffer!.toString()!;
        
        
;
    

    var column: Vector = new Vector();
        
        
;
    

    var rset: ResultSet
;
    

    var field: string
;
    

        try {
            rset= executeSQLStatement(sqlStatement);
    

        while(rset.next())
        {
field= rset.getObject(columnName)!.toString();
    
column.add(field);
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(sqlStrings!.SQL_STATEMENT_LABEL);
    
stringBuffer!.append(sqlStatement);
    
stringBuffer!.append(sqlStrings!.COLUMN_VALUE);
    
stringBuffer!.append(column.toString());
    
logUtil!.put(stringBuffer!.toString(), this, METHOD_GET_COLUMN_WHERE);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return column;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    logUtil!.put(this.FAILED_SQL_STATEMENT +sqlStatement, this, this.METHOD_GET_COLUMN_WHERE, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return column;
    
}

}


}
                
            

