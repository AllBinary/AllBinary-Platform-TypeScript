
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

import { HashMap } from '../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { Set } from '../../../../../java/util/Set.js';
//not GWT import const Set

import { DbConnectionInfo } from '../../../../../org/allbinary/business/init/db/DbConnectionInfo.js';
//not GWT import const DbConnectionInfo

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbSqlRow } from './AbSqlRow.js';
//not GWT import - same folder const AbSqlRow

export class AbSqlBean extends AbSqlRow {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly METHOD_GET_FIELD: string = "getField";

    private readonly METHOD_IS_SUBSET_OF_ENTRY: string = "isSubsetOfEntry";

public constructor (databaseConnectionInfoInterface: DbConnectionInfo){
            super(databaseConnectionInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}

getField(...args: any[]): any {
   
    if (args.length === 3 && typeof args[0] === 'string' && typeof args[1] === 'string' && typeof args[2] === 'string') return this.getField$overload1(args[0], args[1], args[2]);
   
    if (args.length === 2 && typeof args[1] === 'string') return this.getField$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: getField'); }
  
    public getField$overload1(key: string, value: string, requestedField: string): string{

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.SELECT);
    
stringBuffer!.append(requestedField);
    
stringBuffer!.append(this.sqlStrings!.FROM);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(this.sqlStrings!.WHERE);
    
stringBuffer!.append(key);
    
stringBuffer!.append(this.sqlStrings!.EQUAL_QUOTE);
    
stringBuffer!.append(value);
    
stringBuffer!.append(this.sqlStrings!.CLOSE_QUOTE);
    

    let sqlStatement: string = stringBuffer!.toString()!;;
    

 try { 
    let field: string = this.stringUtil!.EMPTY_STRING;;
    

    let rset: ResultSet = executeSQLStatement(sqlStatement)!;;
    

        while(rset.next())
        {
field= rset.getString(requestedField);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(this.sqlStrings!.SQL_STATEMENT_LABEL);
    
stringBuffer!.append(sqlStatement);
    
stringBuffer!.append(this.sqlStrings!.FIELD_VALUE);
    
stringBuffer!.append(field);
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.METHOD_GET_FIELD);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return field;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.FAILED_SQL_STATEMENT +sqlStatement, this, METHOD_GET_FIELD, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.FAILED_SQL_STATEMENT +sqlStatement;
    

 }
   }
 
}


    public getField$overload2(keysAndValues: HashMap<any, any>, requestedField: string): string{

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.SELECT);
    
stringBuffer!.append(requestedField);
    
stringBuffer!.append(this.sqlStrings!.FROM);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(this.sqlStrings!.WHERE);
    

 try { 
    let field: string = this.stringUtil!.EMPTY_STRING;;
    

    let set: Set = keysAndValues!.keySet()!;;
    

    let keyArray: any[] = set.toArray()!;;
    

    let size: number = keyArray!.length
                ;;
    

    let key: string;;
    

    let value: string;;
    




                        for (
    let i: number = 0;i < size; i++)
        {
key= keyArray[i]! as string;
    
value= .toCharArray();
    
stringBuffer!.append(key);
    
stringBuffer!.append(this.sqlStrings!.EQUAL_QUOTE);
    
stringBuffer!.append(value);
    
stringBuffer!.append(this.sqlStrings!.CLOSE_QUOTE);
    

                        if(i < size -1)
                        
                                    {
                                    stringBuffer!.append(this.sqlStrings!.AND);
    

                                    }
                                
}


    let sqlStatement: string = stringBuffer!.toString()!;;
    

    let rset: ResultSet = executeSQLStatement(sqlStatement)!;;
    

        while(rset.next())
        {
field= rset.getString(requestedField);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(this.sqlStrings!.SQL_STATEMENT_LABEL);
    
stringBuffer!.append(sqlStatement);
    
stringBuffer!.append(this.sqlStrings!.FIELD_VALUE);
    
stringBuffer!.append(field);
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.METHOD_GET_FIELD);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return field;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let sqlStatement: string = stringBuffer!.toString()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.FAILED_SQL_STATEMENT +sqlStatement, this, METHOD_GET_FIELD, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.FAILED_SQL_STATEMENT +sqlStatement;
    

 }
   }
 
}


    public isSubsetOfEntry(key: string, value: string, columnsAndValues: HashMap<any, any>): string{

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.SELECT);
    

 try { 
    let keyArray: any[] = columnsAndValues!.keySet()!.()!;;
    

    let size: number = keyArray!.length
                ;;
    
stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(key);
    




                        for (
    let i: number = 0;i < size; i++)
        {
stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(keyArray[i]!.toString());
    
}

stringBuffer!.append(this.sqlStrings!.FROM);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(this.sqlStrings!.WHERE);
    
stringBuffer!.append(key);
    
stringBuffer!.append(this.sqlStrings!.EQUAL_QUOTE);
    
stringBuffer!.append(value);
    
stringBuffer!.append(this.sqlStrings!.CLOSE_QUOTE);
    

    let sqlStatement: string = stringBuffer!.toString()!;;
    

    let rset: ResultSet = executeSQLStatement(sqlStatement)!;;
    

    let columnName: string;;
    

    let field: string;;
    

        while(rset.next())
        {

    let keyArray2: any[] = columnsAndValues!.keySet()!.()!;;
    

    let size2: number = keyArray2!.length
                ;;
    




                        for (
    let i: number = 0;i < size2; i++)
        {
columnName= keyArray2[i]!.toString();
    
field= rset.getObject(columnName)!.toString();
    

                        if(field.compareTo(columnsAndValues!.get(columnName) as string) != 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return org.allbinary.globals.GLOBALS2.NOTASUBSET;
    

                                    }
                                
}

}


                        if(rset.getRow() != 1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return org.allbinary.globals.GLOBALS2.NOTASUBSET;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return org.allbinary.globals.GLOBALS2.ISASUBSET;
    

                        }
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let sqlStatement: string = stringBuffer!.toString()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.FAILED_SQL_STATEMENT +sqlStatement, this, METHOD_IS_SUBSET_OF_ENTRY, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.FAILED_SQL_STATEMENT +sqlStatement;
    

 }
   }
 
}


}

