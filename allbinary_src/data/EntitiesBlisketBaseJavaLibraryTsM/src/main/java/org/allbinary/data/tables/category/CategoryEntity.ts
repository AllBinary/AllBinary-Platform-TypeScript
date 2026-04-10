
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
        



import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../java/util/Vector.js";

    
import { Category } from "../../../../../org/allbinary/business/category/Category.js";

    
import { CategoryData } from "../../../../../org/allbinary/business/category/CategoryData.js";

    
import { CategoryFactoryInterface } from "../../../../../org/allbinary/business/category/CategoryFactoryInterface.js";

    
import { InventoryDbInitInfo } from "../../../../../org/allbinary/business/init/db/InventoryDbInitInfo.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlBean } from "../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    

export class CategoryEntity extends AbSqlBean
                , CategoryEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly tableName: string = "categories";
        
        
public constructor (categoryFactoryInterface: CategoryFactoryInterface)                        

                            : super(InventoryDbInitInfo()){

            super();
            var categoryFactoryInterface = categoryFactoryInterface


                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(tableName)
}

public constructor ()                        

                            : super(InventoryDbInitInfo()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(tableName)
}


    public insert(category: Category){
var category = category

        try {
            
    var categoryVector: Vector = category.toVector()!;
        
        


    var values: Vector = new Vector();
        
        

add(categoryVector!.get(0))
add(categoryVector!.get(1))
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
            deleteWhere(CategoryData.getInstance()!.NAME, value)

    
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


    public createTableStatement(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

append(this.sqlStrings!.CREATE_TABLE)
append(tableName)
append(this.sqlStrings!.START)
append(CategoryData.getInstance()!.NAME)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(CategoryData.getInstance()!.LEVEL)
append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)
append(this.sqlStrings!.PRIMARY_KEY)
append(CategoryData.getInstance()!.NAME)
append(this.sqlStrings!.END)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());
    
}


    public update(updatedValues: HashMap<Any, Any>){
var updatedValues = updatedValues
updateWhere(CategoryData.getInstance()!.NAME, updatedValues!.get(CategoryData.getInstance()!.NAME) as String, updatedValues)
}


    public dropTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();
    
}


}
                
            

