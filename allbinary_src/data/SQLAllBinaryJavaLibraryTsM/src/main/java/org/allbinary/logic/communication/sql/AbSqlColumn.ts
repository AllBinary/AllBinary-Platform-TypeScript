
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
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
import { ResultSet } from '../../../../../java/sql/ResultSet.js';
//not GWT import const ResultSet

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

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbSqlTable } from './AbSqlTable.js';
//not GWT import - same folder const AbSqlTable

export class AbSqlColumn extends AbSqlTable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly LARGEST_INT_VALUE_IN_COLUMN: string = "\nLargest Int Value in column: ";

    private readonly METHOD_GET_LARGETS_INTEGER_IN_COLUMN: string = "getLargestIntegerInColumn";

    private readonly METHOD_GET_COLUMN: string = "getColumn";

    private readonly METHOD_GET_COLUMN_WHERE: string = "getColumnWhere";

    private readonly INVALID_RESULT: string = "-1";

public constructor (databaseConnectionInfoInterface: DbConnectionInfo){
            super(databaseConnectionInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public getLargestIntegerInColumnWhere(columnName: string, key: string, value: string): string{

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.SELECT);
    
stringBuffer!.append(columnName);
    
stringBuffer!.append(this.sqlStrings!.FROM);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(this.sqlStrings!.WHERE);
    
stringBuffer!.append(key);
    
stringBuffer!.append(this.sqlStrings!.EQUAL_QUOTE);
    
stringBuffer!.append(value);
    
stringBuffer!.append(this.sqlStrings!.CLOSE_QUOTE);
    

    let sqlStatement: string = stringBuffer!.toString()!;;
    

 try { 
    let largest: number = 0;;
    

    let rset: ResultSet = executeSQLStatement(sqlStatement)!;;
    

        while(rset.next())
        {

    let intValue: number = rset.getInt(columnName)!;;
    

                        if(intValue > largest)
                        
                                    {
                                    largest= intValue;
    

                                    }
                                
}


    let largestAsString: string = new Integer(largest).toString()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(this.sqlStrings!.SQL_STATEMENT_LABEL);
    
stringBuffer!.append(sqlStatement);
    
stringBuffer!.append(this.LARGEST_INT_VALUE_IN_COLUMN);
    
stringBuffer!.append(largestAsString);
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.METHOD_GET_LARGETS_INTEGER_IN_COLUMN);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return largestAsString;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.FAILED_SQL_STATEMENT +sqlStatement, this, METHOD_GET_LARGETS_INTEGER_IN_COLUMN, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.INVALID_RESULT;
    

 }
   }
 
}


    public getColumn(columnName: string): BasicArrayList{

    let column: BasicArrayList = new BasicArrayListD();;
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.SELECT);
    
stringBuffer!.append(columnName);
    
stringBuffer!.append(this.sqlStrings!.FROM);
    
stringBuffer!.append(this.getTableName());
    

    let sqlStatement: string = stringBuffer!.toString()!;;
    

 try { 
    let rset: ResultSet = executeSQLStatement(sqlStatement)!;;
    

        while(rset.next())
        {

    let field: string = rset.getObject(columnName)!.toString()!;;
    
column.add(field);
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(this.sqlStrings!.SQL_STATEMENT_LABEL);
    
stringBuffer!.append(sqlStatement);
    
stringBuffer!.append(this.sqlStrings!.COLUMN_VALUE);
    
stringBuffer!.append(column.toString());
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.METHOD_GET_COLUMN);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return column;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.FAILED_SQL_STATEMENT +sqlStatement, this, METHOD_GET_COLUMN, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return column;
    

 }
   }
 
}


    public getColumnWhere(columnName: string, key: string, value: string): BasicArrayList{

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.SELECT);
    
stringBuffer!.append(columnName);
    
stringBuffer!.append(this.sqlStrings!.FROM);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(this.sqlStrings!.WHERE);
    
stringBuffer!.append(key);
    
stringBuffer!.append(this.sqlStrings!.EQUAL_QUOTE);
    
stringBuffer!.append(value);
    
stringBuffer!.append(this.sqlStrings!.CLOSE_QUOTE);
    

    let sqlStatement: string = stringBuffer!.toString()!;;
    

    let column: BasicArrayList = new BasicArrayListD();;
    

    let rset: ResultSet;;
    

    let field: string;;
    

 try { rset= executeSQLStatement(sqlStatement);
    

        while(rset.next())
        {
field= rset.getObject(columnName)!.toString();
    
column.add(field);
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(this.sqlStrings!.SQL_STATEMENT_LABEL);
    
stringBuffer!.append(sqlStatement);
    
stringBuffer!.append(this.sqlStrings!.COLUMN_VALUE);
    
stringBuffer!.append(column.toString());
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.METHOD_GET_COLUMN_WHERE);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return column;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.FAILED_SQL_STATEMENT +sqlStatement, this, this.METHOD_GET_COLUMN_WHERE, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return column;
    

 }
   }
 
}


}

