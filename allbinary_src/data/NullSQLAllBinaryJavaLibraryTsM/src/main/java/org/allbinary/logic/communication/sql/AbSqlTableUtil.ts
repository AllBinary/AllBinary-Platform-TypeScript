
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
import { Portion } from '../../../../../org/allbinary/business/installer/Portion.js';
      //not GWT import const Portion = globalThis.org.allbinary.business.installer.Portion;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SqlStrings } from './SqlStrings.js';
//not GWT import const  = globalThis.org.allbinary.logic.communication.sql.SqlStrings;

                import { AbSqlTable } from './AbSqlTable.js';
//not GWT import const  = globalThis.org.allbinary.logic.communication.sql.AbSqlTable;

                
export class AbSqlTableUtil
            extends Object
         {
        

    private static readonly instance: AbSqlTableUtil = new AbSqlTableUtil();

    public static getInstance(): AbSqlTableUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbSqlTableUtil.instance;
    
}


    private readonly TABLE_LABEL: string = "Table: ";

    readonly stringUtil: StringUtil = StringUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;

    readonly sqlStrings: SqlStrings = SqlStrings.getInstance()!;
//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public backupTable(abSqlTable: AbSqlTable): string{

    var tableName: string = abSqlTable!.getTableName()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.TABLE_LABEL +tableName +" Backup Failed";
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public restoreTable(abSqlTable: AbSqlTable, portion: Portion): string{

    var tableName: string = abSqlTable!.getTableName()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.TABLE_LABEL);
    
stringBuffer!.append(tableName);
    
stringBuffer!.append(" Restoration Failed");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}



