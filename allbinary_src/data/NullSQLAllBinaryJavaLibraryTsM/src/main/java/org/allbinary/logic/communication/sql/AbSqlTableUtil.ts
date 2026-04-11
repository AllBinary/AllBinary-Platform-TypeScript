
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
        



import { Portion } from "../../../../../org/allbinary/business/installer/Portion.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class AbSqlTableUtil
            extends Object
         {
        

    private static readonly instance: AbSqlTableUtil = new AbSqlTableUtil();
        
        

    public static getInstance(): AbSqlTableUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly TABLE_LABEL: string = "Table: ";
        
        

    readonly stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

    readonly sqlStrings: SqlStrings = SqlStrings.getInstance()!;
        
        
@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public backupTable(abSqlTable: AbSqlTable): string{
var abSqlTable = abSqlTable

    var tableName: string = abSqlTable!.getTableName()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TABLE_LABEL +tableName +" Backup Failed";
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public restoreTable(abSqlTable: AbSqlTable, portion: Portion): string{
var abSqlTable = abSqlTable
var portion = portion

    var tableName: string = abSqlTable!.getTableName()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(TABLE_LABEL);
    
stringBuffer!.append(tableName);
    
stringBuffer!.append(" Restoration Failed");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

