
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

    

export class StoreFrontsEntity extends AbSqlBean
                , StoreFrontsEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly tableName: string = "storefronts";
        
        
public constructor ()                        

                            : super(UserDbInitInfo()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(tableName)
}


    public insert(values: Vector){
var values = values

        try {
            insert(values)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.SUCCESS, this, INSERT)

                                    }
                                
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, INSERT, e)

                                    }
                                
}

}


    public delete(value: string){
var value = value

        try {
            deleteWhere(StoreFrontData.getInstance()!.NAME, value)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.SUCCESS, this, commonStrings!.delete)

                                    }
                                
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, commonStrings!.delete, e)

                                    }
                                
}

}


                @Throws(Exception::class)
            
    public getStoreFrontInterface(name: string): StoreFront{
var name = name

    var keysAndValues: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(StoreFrontData.getInstance()!.NAME, name)

    var storeHashMap: HashMap<Any, Any> = super.getRow(keysAndValues)!;
        
        


    
                        if(storeHashMap != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StoreFront(storeHashMap);
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StoreFront();
    

                        }
                            
}


    public getStoreFrontNames(): Vector{

    var storeFrontNames: Vector = super.getColumn(StoreFrontData.getInstance()!.NAME)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return storeFrontNames;
    
}


    public update(updatedValues: HashMap<Any, Any>){
var updatedValues = updatedValues
updateWhere(StoreFrontData.getInstance()!.NAME, updatedValues!.get(StoreFrontData.getInstance()!.NAME) as String, updatedValues)
}


    public createTableStatement(): string{

    var storeFrontData: StoreFrontData = StoreFrontData.getInstance()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

append(this.sqlStrings!.CREATE_TABLE)
append(tableName)
append(this.sqlStrings!.START)
append(storeFrontData!.NAME)
append(this.sqlTypeStrings!.SIXTY_CHAR_COLUMN_NOT_NULL)
append(storeFrontData!.HOMEHOSTNAME)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(storeFrontData!.HOMEHOSTNAMEPATH)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(storeFrontData!.HOSTNAME)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(storeFrontData!.HOSTNAMEPATH)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(storeFrontData!.TESTHOMEHOSTNAME)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(storeFrontData!.TESTHOMEHOSTNAMEPATH)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(storeFrontData!.TESTHOSTNAME)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(storeFrontData!.TESTHOSTNAMEPATH)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(storeFrontData!.IMAGEPATH)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(storeFrontData!.STATICPATH)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(storeFrontData!.CATEGORYPATH)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(storeFrontData!.INVENTORYCONTROL)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(storeFrontData!.CONFIGURATION)
append(this.sqlTypeStrings!.BLOB_NOT_NULL)
append(storeFrontData!.SUBSTORES)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(storeFrontData!.TAGLOCATION)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(storeFrontData!.PACKAGELOCATION)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(storeFrontData!.FTP)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(storeFrontData!.FTPPATH)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(storeFrontData!.FTPUSERNAME)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(storeFrontData!.FTPPASSWORD)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(storeFrontData!.TESTFTP)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(storeFrontData!.TESTFTPPATH)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(storeFrontData!.TESTFTPUSERNAME)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(storeFrontData!.TESTFTPPASSWORD)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(EntryData.getInstance()!.TIMECREATED)
append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)
append(EntryData.getInstance()!.getInstance()!.LASTMODIFIED)
append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)
append(this.sqlStrings!.PRIMARY_KEY)
append(storeFrontData!.NAME)
append(this.sqlStrings!.END)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());
    
}


    public dropTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();
    
}


}
                
            

