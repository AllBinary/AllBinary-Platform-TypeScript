
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

    
import { AdvertisementCampaign } from "../../../../../../../org/allbinary/business/advertisement/campaign/AdvertisementCampaign.js";

    
import { AdvertisementCampaignData } from "../../../../../../../org/allbinary/business/advertisement/campaign/AdvertisementCampaignData.js";

    
import { AdvertisementCampaignInterface } from "../../../../../../../org/allbinary/business/advertisement/campaign/AdvertisementCampaignInterface.js";

    
import { AdvertisementCampaigns } from "../../../../../../../org/allbinary/business/advertisement/campaign/AdvertisementCampaigns.js";

    
import { AdvertisementCampaignsInterface } from "../../../../../../../org/allbinary/business/advertisement/campaign/AdvertisementCampaignsInterface.js";

    
import { StoreFrontData } from "../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { EntryData } from "../../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { UserDbInitInfo } from "../../../../../../../org/allbinary/business/init/db/UserDbInitInfo.js";

    
import { TimeData } from "../../../../../../../org/allbinary/business/time/TimeData.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlBean } from "../../../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js";

    
import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AdvertisementCampaignInternalEntityInterface } from "./AdvertisementCampaignInternalEntityInterface.js";

export class AdvertisementCampaignInternalEntity extends AbSqlBean implements AdvertisementCampaignInternalEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly tableName: string = "adCampaignInternal";
        
        
public constructor (){
            super(new UserDbInitInfo());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(this.tableName);
    
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


    public getCampaignsInStore(storeName: string): AdvertisementCampaignsInterface{
var storeName = storeName

    var keysAndValues: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
keysAndValues!.put(StoreFrontData.getInstance()!.NAME, storeName);
    

    var hashMapVector: Vector = super.getRows(keysAndValues)!;
        
        
;
    

    var vector: Vector = new Vector();
        
        
;
    

    var size: number = hashMapVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var hashMap: HashMap<any, any> = hashMapVector!.get(index as Object); as HashMap<any, any>;
        
        
;
    

                        if(hashMap != 
                                    null
                                )
                        
                                    {
                                    vector.add(new AdvertisementCampaign(hashMap) as AdvertisementCampaignInterface);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AdvertisementCampaigns(vector) as AdvertisementCampaignsInterface;
    
}


    public get(storeName: string, name: string): AdvertisementCampaignInterface{
var storeName = storeName
var name = name

    var keysAndValues: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
keysAndValues!.put(StoreFrontData.getInstance()!.NAME, storeName);
    
keysAndValues!.put(AdvertisementCampaignData.getInstance()!.NAME, name);
    

    var hashMap: HashMap<any, any> = super.getRow(keysAndValues)!;
        
        
;
    

                        if(hashMap != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AdvertisementCampaign(hashMap) as AdvertisementCampaignInterface;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


    public update(updatedValues: HashMap<any, any>){
var updatedValues = updatedValues
super.updateWhere(EntryData.getInstance()!.getInstance()!.ID, updatedValues!.get(EntryData.getInstance()!.getInstance()!.ID) as String, updatedValues);
    
}


    public createTableStatement(): string{

    var entryData: EntryData = EntryData.getInstance()!.getInstance()!;
        
        
;
    

    var advertisementCampaignData: AdvertisementCampaignData = AdvertisementCampaignData.getInstance()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.sqlStrings!.CREATE_TABLE);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(this.sqlStrings!.START);
    
stringBuffer!.append(entryData!.ID)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(StoreFrontData.getInstance()!.NAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(advertisementCampaignData!.NAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(advertisementCampaignData!.DESCRIPTION)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(advertisementCampaignData!.CONFIG)!.append(this.sqlTypeStrings!.BLOB_NOT_NULL)!.append(TimeData.getInstance()!.START)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(TimeData.getInstance()!.END)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(entryData!.TIMECREATED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(entryData!.LASTMODIFIED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(this.sqlStrings!.PRIMARY_KEY)!.append(entryData!.ID)!.append(this.sqlStrings!.END);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public createTable(): string{

    var returnStr: string = super.createTable(this.createTableStatement())!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return returnStr;
    
}


    public dropTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();;
    
}


}
                
            

