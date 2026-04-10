
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
        



import { HashMap } from "../../../../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../../../../java/util/Vector.js";

    
import { EntryData } from "../../../../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { InventoryDbInitInfo } from "../../../../../../../../../org/allbinary/business/init/db/InventoryDbInitInfo.js";

    
import { BasicItemData } from "../../../../../../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js";

    
import { BasicGroupItemData } from "../../../../../../../../../org/allbinary/business/user/commerce/inventory/item/group/BasicGroupItemData.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlBean } from "../../../../../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js";

    
import { StringMaker } from "../../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    

export class BasicGroupItemsEntity extends AbSqlBean
                , BasicGroupItemsEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly tableName: string = "basicgroupeditems";
        
        
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


    public createTableStatement(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(this.sqlStrings!.CREATE_TABLE)!.append(tableName)!.append(this.sqlStrings!.START)!.append(BasicItemData.ID)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(BasicGroupItemData.ITEM_ONE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(BasicGroupItemData.ITEM_TWO)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(BasicGroupItemData.ITEM_THREE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(BasicGroupItemData.ITEM_FOUR)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(BasicGroupItemData.ITEM_FIVE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(BasicGroupItemData.ITEM_SIX)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(BasicGroupItemData.ITEM_SEVEN)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(BasicGroupItemData.ITEM_EIGHT)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(BasicGroupItemData.ITEM_NINE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(BasicGroupItemData.ITEM_TEN)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(EntryData.getInstance()!.TIMECREATED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(EntryData.getInstance()!.LASTMODIFIED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(this.sqlStrings!.PRIMARY_KEY)!.append(BasicItemData.ID)!.append(this.sqlStrings!.END)



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
                
            

