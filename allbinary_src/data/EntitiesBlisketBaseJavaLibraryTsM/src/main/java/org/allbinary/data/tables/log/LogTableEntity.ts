
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
        



import { EntryData } from "../../../../../org/allbinary/business/entry/EntryData.js";

    
import { LogDbInitInfo } from "../../../../../org/allbinary/business/init/db/LogDbInitInfo.js";

    
import { AbeHttpRequestInfoData } from "../../../../../org/allbinary/logic/communication/http/request/AbeHttpRequestInfoData.js";

    
import { AbSqlBean } from "../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    

export class LogTableEntity extends AbSqlBean
                , LogTableEntityInterface {
        

    private readonly tableName: string = "log";
        
        
public constructor ()                        

                            : super(LogDbInitInfo()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(tableName)
}


    public createTableStatement(): string{

    var abeHttpRequestInfoData: AbeHttpRequestInfoData = AbeHttpRequestInfoData.getInstance()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

append(this.sqlStrings!.END)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());
    
}


}
                
            

