
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

        


            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } from '../../../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { EntryData } from '../../../../../../../../../org/allbinary/business/entry/EntryData.js';
      //not GWT import const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
import { InventoryDbInitInfo } from '../../../../../../../../../org/allbinary/business/init/db/InventoryDbInitInfo.js';
      //not GWT import const InventoryDbInitInfo = globalThis.org.allbinary.business.init.db.InventoryDbInitInfo;

      
import { BasicItemData } from '../../../../../../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
      //not GWT import const BasicItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemData;

      
import { DownloadItemData } from '../../../../../../../../../org/allbinary/business/user/commerce/inventory/item/download/DownloadItemData.js';
      //not GWT import const DownloadItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.download.DownloadItemData;

      
import { DownloadableItem } from '../../../../../../../../../org/allbinary/business/user/commerce/inventory/item/download/DownloadableItem.js';
      //not GWT import const DownloadableItem = globalThis.org.allbinary.business.user.commerce.inventory.item.download.DownloadableItem;

      
import { StdUtil } from '../../../../../../../../../org/allbinary/logic/StdUtil.js';
      //not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } from '../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbSqlBean } from '../../../../../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js';
      //not GWT import const AbSqlBean = globalThis.org.allbinary.logic.communication.sql.AbSqlBean;

      
//not plain js import { StringMaker } from '../../../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DownloadItemsEntityInterface } from './DownloadItemsEntityInterface.js';
//not GWT import const DownloadItemsEntityInterface = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.downloads.DownloadItemsEntityInterface;

                
export class DownloadItemsEntity extends AbSqlBean implements DownloadItemsEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly basicItemData: BasicItemData = BasicItemData.getInstance()!;

    readonly tableName: string = "downloaditems";

public constructor (){
            super(new InventoryDbInitInfo());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(this.tableName);
    
}


    public insert(values: BasicArrayList){

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

        try {
            super.deleteWhere(DownloadItemData.ID, value);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, this.commonStrings!.delete);
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, this.commonStrings!.delete, e);
    

                                    }
                                
}

}


    public update(updatedValues: HashMap<any, any>){
super.updateWhere(DownloadItemData.ID, updatedValues!.get(DownloadItemData.ID) as string, updatedValues);
    
}


    public getForItem(id: string): BasicArrayList{

    var returnVector: BasicArrayList = new BasicArrayListD();;
    

    var keysAndValues: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
keysAndValues!.put(basicItemData!.ID, id);
    

    var vector: BasicArrayList = super.getRows(keysAndValues)!;;
    

    var size: number = vector.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var hashMap: HashMap<any, any> = vector.get(index) as HashMap<any, any>;;
    
returnVector!.add(new DownloadableItem(hashMap));
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Found: " +size, this, "getForItem");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return returnVector;
    
}


    public getForItem(id: string, downloadItemId: string): BasicArrayList{

    var returnVector: BasicArrayList = new BasicArrayListD();;
    

    var keysAndValues: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
keysAndValues!.put(basicItemData!.ID, id);
    
keysAndValues!.put(DownloadItemData.ID, downloadItemId);
    

    var vector: BasicArrayList = super.getRows(keysAndValues)!;;
    

    var size: number = vector.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var hashMap: HashMap<any, any> = vector.get(index) as HashMap<any, any>;;
    
returnVector!.add(new DownloadableItem(hashMap));
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Found: " +size, this, "getForItem");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return returnVector;
    
}


    public createTableStatement(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.CREATE_TABLE)!.append(tableName)!.append(this.sqlStrings!.START)!.append(DownloadItemData.ID)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(basicItemData!.ID)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(EntryData.getInstance()!.ENABLE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(DownloadItemData.SPECIAL_NAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(DownloadItemData.VERSION)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(DownloadItemData.CHANGES)!.append(this.sqlTypeStrings!.BLOB_NOT_NULL)!.append(DownloadItemData.SYSTEM)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(DownloadItemData.PLATFORM)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(DownloadItemData.LICENSE_FILE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(DownloadItemData.FILE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(DownloadItemData.SIZE)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(DownloadItemData.VALID_TIME)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(DownloadItemData.RETRIES)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(EntryData.getInstance()!.TIMECREATED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(EntryData.getInstance()!.LASTMODIFIED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(this.sqlStrings!.PRIMARY_KEY)!.append(DownloadItemData.ID)!.append(this.sqlStrings!.END);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());;
    
}


    public dropTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();;
    
}


}



