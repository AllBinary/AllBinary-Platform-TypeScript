
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
        



import { ResultSet } from "../../../../../java/sql/ResultSet.js";

    
import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { Set } from "../../../../../java/util/Set.js";

    
import { DbConnectionInfo } from "../../../../../org/allbinary/business/init/db/DbConnectionInfo.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AbSqlRow } from "./AbSqlRow.js";

export class AbSqlBean extends AbSqlRow {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly METHOD_GET_FIELD: string = "getField";
        
        

    private readonly METHOD_IS_SUBSET_OF_ENTRY: string = "isSubsetOfEntry";
        
        
public constructor (databaseConnectionInfoInterface: DbConnectionInfo){
            super(databaseConnectionInfoInterface);
                        //var databaseConnectionInfoInterface = databaseConnectionInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
}


    public getField(key: string, value: string, requestedField: string): string{
    //var key = key
    //var value = value
    //var requestedField = requestedField

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(sqlStrings!.SELECT);
    
stringBuffer!.append(requestedField);
    
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
            
    var field: string = this.stringUtil!.EMPTY_STRING;
        
        
;
    

    var rset: ResultSet = executeSQLStatement(sqlStatement)!;
        
        
;
    

        while(rset.next())
        {
field= rset.getString(requestedField);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(sqlStrings!.SQL_STATEMENT_LABEL);
    
stringBuffer!.append(sqlStatement);
    
stringBuffer!.append(sqlStrings!.FIELD_VALUE);
    
stringBuffer!.append(field);
    
this.logUtil!.putF(stringBuffer!.toString(), this, METHOD_GET_FIELD);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return field;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.FAILED_SQL_STATEMENT +sqlStatement, this, METHOD_GET_FIELD, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.FAILED_SQL_STATEMENT +sqlStatement;
    
}

}


    public getField(keysAndValues: HashMap<any, any>, requestedField: string): string{
    //var keysAndValues = keysAndValues
    //var requestedField = requestedField

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(sqlStrings!.SELECT);
    
stringBuffer!.append(requestedField);
    
stringBuffer!.append(sqlStrings!.FROM);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(sqlStrings!.WHERE);
    

        try {
            
    var field: string = this.stringUtil!.EMPTY_STRING;
        
        
;
    

    var set: Set = keysAndValues!.keySet()!;
        
        
;
    

    var keyArray: any[] = set.toArray()!;
        
        
;
    

    var size: number = keyArray!.length
                ;
        
        
;
    

    var key: string
;
    

    var value: string
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {
key= keyArray[i]! as String;
    
value= .toCharArray();
    
stringBuffer!.append(key);
    
stringBuffer!.append(sqlStrings!.EQUAL_QUOTE);
    
stringBuffer!.append(value);
    
stringBuffer!.append(sqlStrings!.CLOSE_QUOTE);
    

                        if(i < size -1)
                        
                                    {
                                    stringBuffer!.append(sqlStrings!.AND);
    

                                    }
                                
}


    var sqlStatement: string = stringBuffer!.toString()!;
        
        
;
    

    var rset: ResultSet = executeSQLStatement(sqlStatement)!;
        
        
;
    

        while(rset.next())
        {
field= rset.getString(requestedField);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(sqlStrings!.SQL_STATEMENT_LABEL);
    
stringBuffer!.append(sqlStatement);
    
stringBuffer!.append(sqlStrings!.FIELD_VALUE);
    
stringBuffer!.append(field);
    
this.logUtil!.putF(stringBuffer!.toString(), this, METHOD_GET_FIELD);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return field;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                //: 
} catch(e) 
            {

    var sqlStatement: string = stringBuffer!.toString()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.FAILED_SQL_STATEMENT +sqlStatement, this, METHOD_GET_FIELD, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.FAILED_SQL_STATEMENT +sqlStatement;
    
}

}


    public isSubsetOfEntry(key: string, value: string, columnsAndValues: HashMap<any, any>): string{
    //var key = key
    //var value = value
    //var columnsAndValues = columnsAndValues

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(sqlStrings!.SELECT);
    

        try {
            
    var keyArray: any[] = columnsAndValues!.keySet()!.toTypedArray()!;
        
        
;
    

    var size: number = keyArray!.length
                ;
        
        
;
    
stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(key);
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {
stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(keyArray[i]!.toString());
    
}

stringBuffer!.append(sqlStrings!.FROM);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(sqlStrings!.WHERE);
    
stringBuffer!.append(key);
    
stringBuffer!.append(sqlStrings!.EQUAL_QUOTE);
    
stringBuffer!.append(value);
    
stringBuffer!.append(sqlStrings!.CLOSE_QUOTE);
    

    var sqlStatement: string = stringBuffer!.toString()!;
        
        
;
    

    var rset: ResultSet = executeSQLStatement(sqlStatement)!;
        
        
;
    

    var columnName: string
;
    

    var field: string
;
    

        while(rset.next())
        {

    var keyArray2: any[] = columnsAndValues!.keySet()!.toTypedArray()!;
        
        
;
    

    var size2: number = keyArray2!.length
                ;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size2; i++)
        {
columnName= keyArray2[i]!.toString();
    
field= rset.getObject(columnName)!.toString();
    

                        if(field.compareTo(columnsAndValues!.get(columnName) as String) != 0)
                        
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
                            

                //: 
} catch(e) 
            {

    var sqlStatement: string = stringBuffer!.toString()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.FAILED_SQL_STATEMENT +sqlStatement, this, METHOD_IS_SUBSET_OF_ENTRY, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.FAILED_SQL_STATEMENT +sqlStatement;
    
}

}


}
                
            

