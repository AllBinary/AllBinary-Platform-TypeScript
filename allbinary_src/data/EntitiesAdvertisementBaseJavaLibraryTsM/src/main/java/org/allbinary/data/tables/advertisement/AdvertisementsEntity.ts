
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
        
import { HashMap } from '../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Vector } from '../../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { DynamicObjectData } from '../../../../../org/allbinary/business/DynamicObjectData.js';
      //not GWT import const DynamicObjectData = globalThis.org.allbinary.business.DynamicObjectData;

      
import { AdvertisementData } from '../../../../../org/allbinary/business/advertisement/AdvertisementData.js';
      //not GWT import const AdvertisementData = globalThis.org.allbinary.business.advertisement.AdvertisementData;

      
import { AdvertisementInterface } from '../../../../../org/allbinary/business/advertisement/AdvertisementInterface.js';
      //not GWT import const AdvertisementInterface = globalThis.org.allbinary.business.advertisement.AdvertisementInterface;

      
import { StoreFrontData } from '../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      //not GWT import const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
import { EntryData } from '../../../../../org/allbinary/business/entry/EntryData.js';
      //not GWT import const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
import { UserDbInitInfo } from '../../../../../org/allbinary/business/init/db/UserDbInitInfo.js';
      //not GWT import const UserDbInitInfo = globalThis.org.allbinary.business.init.db.UserDbInitInfo;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbSqlBean } from '../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js';
      //not GWT import const AbSqlBean = globalThis.org.allbinary.logic.communication.sql.AbSqlBean;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AdvertisementsEntityInterface } from './AdvertisementsEntityInterface.js';
//not GWT import const  = globalThis.org.allbinary.data.tables.advertisement.AdvertisementsEntityInterface;

                
export class AdvertisementsEntity extends AbSqlBean implements AdvertisementsEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly tableName: string = "advertisements";

    private readonly _INDEX: string = "_index";

public constructor (){
            super(new UserDbInitInfo());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(this.tableName);
    
}


    public delete(value: string){

        try {
            super.deleteWhere(EntryData.getInstance()!.ID, value);
    

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


    public get(storeName: string): Vector{

    var keysAndValues: HashMap<any, any> = new HashMap<any, any>();;
    
keysAndValues!.put(StoreFrontData.getInstance()!.NAME, storeName);
    

    var hashMapVector: Vector = super.getRows(keysAndValues)!;;
    

    var vector: Vector = new Vector();;
    

    var size: number = hashMapVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var hashMap: HashMap<any, any> = hashMapVector!.get(index) as HashMap<any, any>;;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector as Vector;
    
}


    public get(storeName: string, advertismentName: string): AdvertisementInterface{

    var keysAndValues: HashMap<any, any> = new HashMap<any, any>();;
    
keysAndValues!.put(StoreFrontData.getInstance()!.NAME, storeName);
    
keysAndValues!.put(AdvertisementData.getInstance()!.NAME, advertismentName);
    

    var hashMap: HashMap<any, any> = super.getRow(keysAndValues)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public createTableStatement(): string{

    var advertisementData: AdvertisementData = AdvertisementData.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.CREATE_TABLE);
    
stringBuffer!.append(this.getTableName())!.append(this.sqlStrings!.START)!.append(advertisementData!.NAME)!.append(_INDEX)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(advertisementData!.NAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(StoreFrontData.getInstance()!.NAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(advertisementData!.DESCRIPTION)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(DynamicObjectData.NAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(EntryData.getInstance()!.TIMECREATED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(EntryData.getInstance()!.LASTMODIFIED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(this.sqlStrings!.PRIMARY_KEY)!.append(advertisementData!.NAME)!.append(this.sqlStrings!.END);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public createTable(): string{

    var returnStr: string = super.createTable(this.createTableStatement())!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return returnStr;
    
}


    public update(updatedValues: HashMap<any, any>){
super.updateWhere(EntryData.getInstance()!.ID, updatedValues!.get(EntryData.getInstance()!.ID) as string, updatedValues);
    
}


    public dropTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();;
    
}


}



