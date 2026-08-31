
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

        


import { EntryData } from '../../../../../org/allbinary/business/entry/EntryData.js';
      //not GWT import const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
import { LogDbInitInfo } from '../../../../../org/allbinary/business/init/db/LogDbInitInfo.js';
      //not GWT import const LogDbInitInfo = globalThis.org.allbinary.business.init.db.LogDbInitInfo;

      
import { AbeHttpRequestInfoData } from '../../../../../org/allbinary/logic/communication/http/request/AbeHttpRequestInfoData.js';
      //not GWT import const AbeHttpRequestInfoData = globalThis.org.allbinary.logic.communication.http.request.AbeHttpRequestInfoData;

      
import { AbSqlBean } from '../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js';
      //not GWT import const AbSqlBean = globalThis.org.allbinary.logic.communication.sql.AbSqlBean;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LogTableEntityInterface } from './LogTableEntityInterface.js';
//not GWT import const  = globalThis.org.allbinary.data.tables.log.LogTableEntityInterface;

                
export class LogTableEntity extends AbSqlBean implements LogTableEntityInterface {
        

    private readonly tableName: string = "log";

public constructor (){
            super(new LogDbInitInfo());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(this.tableName);
    
}


    public createTableStatement(): string{

    var abeHttpRequestInfoData: AbeHttpRequestInfoData = AbeHttpRequestInfoData.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.CREATE_TABLE)!.append(tableName)!.append(this.sqlStrings!.START)!.append(this.sqlStrings!.ID)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(abeHttpRequestInfoData!.HTTP_USER_AGENT)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(abeHttpRequestInfoData!.REMOTE_HOST)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(abeHttpRequestInfoData!.REMOTE_ADDRESS)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(abeHttpRequestInfoData!.REQUEST_FILE_PATH)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(abeHttpRequestInfoData!.REMOTE_PORT)!.append(this.sqlTypeStrings!.MAX_INT_UNSIGNED_NOT_NULL)!.append(EntryData.getInstance()!.TIMECREATED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(this.sqlStrings!.PRIMARY_KEY)!.append(this.sqlStrings!.ID)!.append(this.sqlStrings!.END);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());;
    
}


}



