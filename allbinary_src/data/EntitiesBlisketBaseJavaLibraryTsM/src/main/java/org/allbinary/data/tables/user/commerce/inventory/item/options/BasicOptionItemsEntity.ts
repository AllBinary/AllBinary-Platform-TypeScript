
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

      
import { Vector } from '../../../../../../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { EntryData } from '../../../../../../../../../org/allbinary/business/entry/EntryData.js';
      //not GWT import const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
import { InventoryDbInitInfo } from '../../../../../../../../../org/allbinary/business/init/db/InventoryDbInitInfo.js';
      //not GWT import const InventoryDbInitInfo = globalThis.org.allbinary.business.init.db.InventoryDbInitInfo;

      
import { BasicItemData } from '../../../../../../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
      //not GWT import const BasicItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemData;

      
import { BasicOptionItemData } from '../../../../../../../../../org/allbinary/business/user/commerce/inventory/item/option/BasicOptionItemData.js';
      //not GWT import const BasicOptionItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.option.BasicOptionItemData;

      
//not plain js import { LogUtil } from '../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbSqlBean } from '../../../../../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js';
      //not GWT import const AbSqlBean = globalThis.org.allbinary.logic.communication.sql.AbSqlBean;

      
//not plain js import { StringMaker } from '../../../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicOptionItemsEntityInterface } from './BasicOptionItemsEntityInterface.js';

export class BasicOptionItemsEntity extends AbSqlBean implements BasicOptionItemsEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly tableName: string = "basicoptionitems";

public constructor (){
            super(new InventoryDbInitInfo());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(this.tableName);
    
}


    public insert(values: Vector){

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
            super.deleteWhere(BasicItemData.ID, value);
    

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


    public createTableStatement(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.CREATE_TABLE)!.append(tableName)!.append(this.sqlStrings!.START)!.append(BasicItemData.ID)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL);
    
stringBuffer!.append(BasicOptionItemData.OPTION_ONE_TITLE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(BasicOptionItemData.DEFAULT_OPTION_ITEM)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(BasicOptionItemData.DEFAULT_OPTION_VALUE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(BasicOptionItemData.OPTION_ONE_ONE_ITEM)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(BasicOptionItemData.OPTION_ONE_ONE_VALUE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(BasicOptionItemData.OPTION_ONE_TWO_ITEM)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(BasicOptionItemData.OPTION_ONE_TWO_VALUE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(BasicOptionItemData.OPTION_ONE_THREE_ITEM)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(BasicOptionItemData.OPTION_ONE_THREE_VALUE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(BasicOptionItemData.OPTION_ONE_FOUR_ITEM)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(BasicOptionItemData.OPTION_ONE_FOUR_VALUE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(BasicOptionItemData.OPTION_ONE_FIVE_ITEM)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(BasicOptionItemData.OPTION_ONE_FIVE_VALUE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(BasicOptionItemData.OPTION_ONE_SIX_ITEM)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(BasicOptionItemData.OPTION_ONE_SIX_VALUE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(BasicOptionItemData.OPTION_ONE_SEVEN_ITEM)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(BasicOptionItemData.OPTION_ONE_SEVEN_VALUE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(BasicOptionItemData.OPTION_ONE_EIGHT_ITEM)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(BasicOptionItemData.OPTION_ONE_EIGHT_VALUE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(BasicOptionItemData.OPTION_ONE_NINE_ITEM)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(BasicOptionItemData.OPTION_ONE_NINE_VALUE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(EntryData.getInstance()!.TIMECREATED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(EntryData.getInstance()!.LASTMODIFIED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(this.sqlStrings!.PRIMARY_KEY)!.append(BasicItemData.ID)!.append(this.sqlStrings!.END);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());;
    
}


    public update(updatedValues: HashMap<any, any>){
super.updateWhere(BasicItemData.ID, updatedValues!.get(BasicItemData.ID) as string, updatedValues);
    
}


    public dropTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();;
    
}


}



