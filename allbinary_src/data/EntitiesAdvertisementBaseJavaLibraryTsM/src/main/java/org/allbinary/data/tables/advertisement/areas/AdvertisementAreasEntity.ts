
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
        



import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../java/util/Vector.js";

    
import { AdvertisementArea } from "../../../../../../org/allbinary/business/advertisement/area/AdvertisementArea.js";

    
import { AdvertisementAreaData } from "../../../../../../org/allbinary/business/advertisement/area/AdvertisementAreaData.js";

    
import { AdvertisementAreaInterface } from "../../../../../../org/allbinary/business/advertisement/area/AdvertisementAreaInterface.js";

    
import { AdvertisementCampaignData } from "../../../../../../org/allbinary/business/advertisement/campaign/AdvertisementCampaignData.js";

    
import { StoreFrontData } from "../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { EntryData } from "../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { UserDbInitInfo } from "../../../../../../org/allbinary/business/init/db/UserDbInitInfo.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlBean } from "../../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    

export class AdvertisementAreasEntity extends AbSqlBean
                , AdvertisementAreasEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly tableName: string = "advertisements";
        
        
public constructor ()                        

                            : super(UserDbInitInfo()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(tableName)
}


    public delete(value: string){
var value = value

        try {
            deleteWhere(EntryData.getInstance()!.ID, value)

    
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
            
    public get(storeName: string): Vector{
var storeName = storeName

    var keysAndValues: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(StoreFrontData.getInstance()!.NAME, storeName)

    var hashMapVector: Vector = super.getRows(keysAndValues)!;
        
        


    var vector: Vector = new Vector();
        
        


    var size: number = hashMapVector!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var hashMap: HashMap<Any, Any> = hashMapVector!.get(index as Object) as HashMap<Any, Any>;
        
        


    
                        if(hashMap != 
                                    null
                                )
                        
                                    {
                                    add(AdvertisementArea(hashMap) as AdvertisementAreaInterface)

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


                @Throws(Exception::class)
            
    public get(storeName: string, advertisementAreaName: string): AdvertisementAreaInterface{
var storeName = storeName
var advertisementAreaName = advertisementAreaName

    var keysAndValues: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(StoreFrontData.getInstance()!.NAME, storeName)
put(AdvertisementAreaData.getInstance()!.NAME, advertisementAreaName)

    var hashMap: HashMap<Any, Any> = super.getRow(keysAndValues)!;
        
        


    
                        if(hashMap != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AdvertisementArea(hashMap) as AdvertisementAreaInterface;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


    public createTableStatement(): string{

    var advertisementAreaData: AdvertisementAreaData = AdvertisementAreaData.getInstance()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

append(this.sqlStrings!.CREATE_TABLE)
append(this.getTableName())
append(this.sqlStrings!.START)
append(this.sqlStrings!.END)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public createTable(): string{

    var returnStr: string = super.createTable(this.createTableStatement())!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return returnStr;
    
}


    public update(updatedValues: HashMap<Any, Any>){
var updatedValues = updatedValues
updateWhere(AdvertisementAreaData.getInstance()!.NAME, updatedValues!.get(AdvertisementAreaData.getInstance()!.NAME) as String, updatedValues)
}


    public dropTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();
    
}


}
                
            

