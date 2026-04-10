
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
        



import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../../../java/util/Vector.js";

    
import { StoreFrontInterface } from "../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { EntryData } from "../../../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { InventoryDbInitInfo } from "../../../../../../../../org/allbinary/business/init/db/InventoryDbInitInfo.js";

    
import { BasicItem } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/item/BasicItem.js";

    
import { BasicItemData } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js";

    
import { ItemInterface } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js";

    
import { MoneyException } from "../../../../../../../../org/allbinary/business/user/commerce/money/MoneyException.js";

    
import { LogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlBean } from "../../../../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js";

    
import { StringMaker } from "../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringValidationUtil } from "../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    

export class InventoryEntity extends AbSqlBean
                , InventoryEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly tableName: string = "basicinventory";
        
        
public constructor ()                        

                            : super(InventoryDbInitInfo()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(tableName)
}


    public insert(values: Vector){
var values = values

        try {
            super.insert(values)

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.SUCCESS, this, INSERT)

                                    }
                                
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.FAILURE, this, INSERT, e)

                                    }
                                
}

}


    public delete(value: string){
var value = value

        try {
            super.deleteWhere(BasicItemData.ID, value)

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.SUCCESS, this, commonStrings!.delete)

                                    }
                                
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.FAILURE, this, commonStrings!.delete, e)

                                    }
                                
}

}


                //@Throws(Error::class)
            
    public getItems(storeFrontInterface: StoreFrontInterface): Vector{
var storeFrontInterface = storeFrontInterface

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put("Getting Items For: " +storeFrontInterface!.getName(), this, "getItems")

                                    }
                                

    var itemVector: Vector = new Vector();
        
        


    var keysAndValues: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        


    var itemHashMapVector: Vector = super.getRows(keysAndValues)!;
        
        


    var size: number = itemHashMapVector!.length!;
        
        





                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var itemHashMap: HashMap<Any, Any> = itemHashMapVector!.get(i as Object) as HashMap<Any, Any>;
        
        


                        if(itemHashMap != 
                                    null
                                )
                        
                                    {
                                    
    var category: string = itemHashMap!.get(BasicItemData.CATEGORY) as String;
        
        


                        if(!StringValidationUtil.getInstance()!.isEmpty(category) && category.startsWith(storeFrontInterface!.getCategoryPath()))
                        
                                    {
                                    itemVector!.add(BasicItem(itemHashMap))

                                    }
                                

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return itemVector;
    
}


                //@Throws(MoneyException::class)
            
    public getItem(id: string): ItemInterface{
var id = id

    var keysAndValues: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

keysAndValues!.put(BasicItemData.ID, id)

    var itemHashMap: HashMap<Any, Any> = super.getRow(keysAndValues)!;
        
        


                        if(itemHashMap != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicItem(itemHashMap);
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


    public getWeight(id: string): string{
var id = id



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getField(BasicItemData.ID, id, BasicItemData.WEIGHT);
    
}


    public createTableStatement(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(this.sqlStrings!.CREATE_TABLE)
stringBuffer!.append(tableName)
stringBuffer!.append(this.sqlStrings!.START)
stringBuffer!.append(BasicItemData.ID)
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)
stringBuffer!.append(BasicItemData.NUMBER)
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)
stringBuffer!.append(BasicItemData.INBASKETS)
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)
stringBuffer!.append(BasicItemData.WEIGHT)
stringBuffer!.append(" VARCHAR(20) NOT NULL,")
stringBuffer!.append(EntryData.getInstance()!.ENABLE)
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
stringBuffer!.append(BasicItemData.NEWORUSED)
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
stringBuffer!.append(BasicItemData.SUMMARY)
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
stringBuffer!.append(BasicItemData.DISTRIBUTOR)
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
stringBuffer!.append(BasicItemData.IDUSEDBYDISTRIBUTOR)
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
stringBuffer!.append(BasicItemData.PRODUCEDBY)
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
stringBuffer!.append(BasicItemData.PRODUCTIONDATE)
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
stringBuffer!.append(BasicItemData.STARTPRODUCTIONDATE)
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
stringBuffer!.append(BasicItemData.DESCRIPTION)
stringBuffer!.append(this.sqlTypeStrings!.BLOB_NOT_NULL)
stringBuffer!.append(BasicItemData.KEYWORDS)
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
stringBuffer!.append(BasicItemData.CATEGORY)
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
stringBuffer!.append(BasicItemData.TYPE)
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
stringBuffer!.append(BasicItemData.SMALLIMAGE)
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
stringBuffer!.append(BasicItemData.MEDIUMIMAGE)
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
stringBuffer!.append(BasicItemData.LARGEIMAGE)
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
stringBuffer!.append(EntryData.getInstance()!.LASTMODIFIED)
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)
stringBuffer!.append(EntryData.getInstance()!.TIMECREATED)
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)
stringBuffer!.append(BasicItemData.PRICE)
stringBuffer!.append(" VARCHAR(20) NOT NULL,")
stringBuffer!.append(BasicItemData.COMMENT)
stringBuffer!.append(this.sqlTypeStrings!.BLOB_NOT_NULL)
stringBuffer!.append(BasicItemData.CUSTOMS)
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)
stringBuffer!.append(BasicItemData.DOWNLOADS)
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)
stringBuffer!.append(BasicItemData.GROUPS)
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)
stringBuffer!.append(BasicItemData.OPTIONS)
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)
stringBuffer!.append(BasicItemData.PERMISSIONS)
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)
stringBuffer!.append(BasicItemData.SPECIALS)
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)
stringBuffer!.append(this.sqlStrings!.PRIMARY_KEY)
stringBuffer!.append(BasicItemData.ID)
stringBuffer!.append(this.sqlStrings!.END)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());
    
}


    public update(updatedValues: HashMap<Any, Any>){
var updatedValues = updatedValues
super.updateWhere(BasicItemData.ID, updatedValues!.get(BasicItemData.ID) as String, updatedValues)
}


    public dropTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();
    
}


}
                
            

