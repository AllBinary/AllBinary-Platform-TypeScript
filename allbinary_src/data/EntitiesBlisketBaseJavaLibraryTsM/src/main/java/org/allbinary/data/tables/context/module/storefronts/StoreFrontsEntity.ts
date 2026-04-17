
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
        



import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { StoreFront } from "../../../../../../../org/allbinary/business/context/modules/storefront/StoreFront.js";

    
import { StoreFrontData } from "../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { EntryData } from "../../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { UserDbInitInfo } from "../../../../../../../org/allbinary/business/init/db/UserDbInitInfo.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlBean } from "../../../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js";

    
import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class StoreFrontsEntity extends AbSqlBean implements StoreFrontsEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly tableName: string = "storefronts";
        
        
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


    public delete(value: string){
var value = value

        try {
            super.deleteWhere(StoreFrontData.getInstance()!.NAME, value);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, commonStrings!.delete);
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, commonStrings!.delete, e);
    

                                    }
                                
}

}


                //@Throws(Error::class)
            
    public getStoreFrontInterface(name: string): StoreFront{
var name = name

    var keysAndValues: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
keysAndValues!.put(StoreFrontData.getInstance()!.NAME, name);
    

    var storeHashMap: HashMap<any, any> = super.getRow(keysAndValues)!;
        
        
;
    

                        if(storeHashMap != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StoreFront(storeHashMap);
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StoreFront();
    

                        }
                            
}


    public getStoreFrontNames(): Vector{

    var storeFrontNames: Vector = super.getColumn(StoreFrontData.getInstance()!.NAME)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return storeFrontNames;
    
}


    public update(updatedValues: HashMap<any, any>){
var updatedValues = updatedValues
super.updateWhere(StoreFrontData.getInstance()!.NAME, updatedValues!.get(StoreFrontData.getInstance()!.NAME);

                         as String, updatedValues);
    
}


    public createTableStatement(): string{

    var storeFrontData: StoreFrontData = StoreFrontData.getInstance()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.sqlStrings!.CREATE_TABLE);
    
stringBuffer!.append(tableName);
    
stringBuffer!.append(this.sqlStrings!.START);
    
stringBuffer!.append(storeFrontData!.NAME);
    
stringBuffer!.append(this.sqlTypeStrings!.SIXTY_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(storeFrontData!.HOMEHOSTNAME);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(storeFrontData!.HOMEHOSTNAMEPATH);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(storeFrontData!.HOSTNAME);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(storeFrontData!.HOSTNAMEPATH);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(storeFrontData!.TESTHOMEHOSTNAME);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(storeFrontData!.TESTHOMEHOSTNAMEPATH);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(storeFrontData!.TESTHOSTNAME);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(storeFrontData!.TESTHOSTNAMEPATH);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(storeFrontData!.IMAGEPATH);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(storeFrontData!.STATICPATH);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(storeFrontData!.CATEGORYPATH);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(storeFrontData!.INVENTORYCONTROL);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(storeFrontData!.CONFIGURATION);
    
stringBuffer!.append(this.sqlTypeStrings!.BLOB_NOT_NULL);
    
stringBuffer!.append(storeFrontData!.SUBSTORES);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(storeFrontData!.TAGLOCATION);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(storeFrontData!.PACKAGELOCATION);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(storeFrontData!.FTP);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(storeFrontData!.FTPPATH);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(storeFrontData!.FTPUSERNAME);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(storeFrontData!.FTPPASSWORD);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(storeFrontData!.TESTFTP);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(storeFrontData!.TESTFTPPATH);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(storeFrontData!.TESTFTPUSERNAME);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(storeFrontData!.TESTFTPPASSWORD);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(EntryData.getInstance()!.TIMECREATED);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL);
    
stringBuffer!.append(EntryData.getInstance()!.getInstance()!.LASTMODIFIED);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL);
    
stringBuffer!.append(this.sqlStrings!.PRIMARY_KEY);
    
stringBuffer!.append(storeFrontData!.NAME);
    
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



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();

                        ;
    
}


}
                
            

