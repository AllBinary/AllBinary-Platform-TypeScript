
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
        



            import { Integer } from "../../../../../../java/lang/Integer.js";
        
import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../java/util/Vector.js";

    
import { EntryData } from "../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { UserDbInitInfo } from "../../../../../../org/allbinary/business/init/db/UserDbInitInfo.js";

    
import { QuoteRequestData } from "../../../../../../org/allbinary/business/quoterequest/QuoteRequestData.js";

    
import { UserData } from "../../../../../../org/allbinary/business/user/UserData.js";

    
import { QuoteRequest } from "../../../../../../org/allbinary/business/user/quoterequest/QuoteRequest.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlBean } from "../../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

export class QuoteRequestEntity extends AbSqlBean
                , QuoteRequestEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly tableName: string = "quoterequest";
        
        
public constructor ()                        

                            : super(new UserDbInitInfo()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(tableName);
    
}


    public insert(values: Vector){
var values = values

        try {
            super.insert(values);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, INSERT);
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, INSERT, e);
    

                                    }
                                
}

}


                //@Throws(Error::class)
            
    public get(userName: string, id: number): QuoteRequest{
var userName = userName
var id = id

    var row: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
row.put(UserData.USERNAME, userName);
    
row.put(QuoteRequestData.getInstance()!.ID, id.toString());
    

    var quoteRequestHashMap: HashMap<any, any> = super.getRow(row)!;
        
        
;
    

                        if(quoteRequestHashMap != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new org.allbinary.business.user.quoterequest.QuoteRequest(quoteRequestHashMap);
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


    public getIds(userName: string): Vector{
var userName = userName



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getColumnWhere(QuoteRequestData.getInstance()!.ID, UserData.USERNAME, userName);

                        ;
    
}


    public deleteWhere(key: string, value: string){
var key = key
var value = value

        try {
            super.deleteWhere(key, value);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, "deleteWhere");
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "deleteWhere", e);
    

                                    }
                                
}

}


    public createTableStatement(): string{

    var quoteRequestData: QuoteRequestData = QuoteRequestData.getInstance()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.sqlStrings!.CREATE_TABLE)!.append(tableName)!.append(this.sqlStrings!.START);
    
stringBuffer!.append(quoteRequestData!.ID)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL);
    
stringBuffer!.append(UserData.USERNAME);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(quoteRequestData!.PROJECT_INFO);
    
stringBuffer!.append(this.sqlTypeStrings!.BLOB_NOT_NULL);
    
stringBuffer!.append(quoteRequestData!.CUSTOMER_COMMENTS);
    
stringBuffer!.append(this.sqlTypeStrings!.BLOB_NOT_NULL);
    
stringBuffer!.append(quoteRequestData!.BUDGET);
    
stringBuffer!.append(this.sqlTypeStrings!.BLOB_NOT_NULL);
    
stringBuffer!.append(quoteRequestData!.TIMEFRAME);
    
stringBuffer!.append(this.sqlTypeStrings!.BLOB_NOT_NULL);
    
stringBuffer!.append(quoteRequestData!.COMMENTS);
    
stringBuffer!.append(this.sqlTypeStrings!.BLOB_NOT_NULL);
    
stringBuffer!.append(EntryData.getInstance()!.TIMECREATED);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL);
    
stringBuffer!.append(EntryData.getInstance()!.LASTMODIFIED);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL);
    
stringBuffer!.append(this.sqlStrings!.PRIMARY_KEY);
    
stringBuffer!.append(quoteRequestData!.ID);
    
stringBuffer!.append(this.sqlStrings!.END);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());

                        ;
    
}


    public dropTable(): string{

    var result: string = dropTable.toCharArray();
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


    public update(userName: string, updatedValues: HashMap<any, any>){
var userName = userName
var updatedValues = updatedValues
super.updateWhere(UserData.USERNAME, userName, updatedValues);
    
}


}
                
            

