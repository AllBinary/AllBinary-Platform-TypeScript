
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

    
import { StoreFrontData } from "../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { StaticPagesDbInitInfo } from "../../../../../org/allbinary/business/init/db/StaticPagesDbInitInfo.js";

    
import { BasicItemData } from "../../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlBean } from "../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js";

    
import { SearchData } from "../../../../../org/allbinary/logic/control/search/SearchData.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    

export class StaticPagesEntity extends AbSqlBean
                , StaticPagesEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly TABLENAME: string = "staticpages";
        
        
public constructor ()                        

                            : super(StaticPagesDbInitInfo()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(TABLENAME)
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


    public getFile(store: string, keywords: string): string{
var store = store
var keywords = keywords

    var whereHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(StoreFrontData.getInstance()!.NAME, store)
put(BasicItemData.KEYWORDS, keywords)

    var file: string = super.getField(whereHashMap, SearchData.PAGE)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return file;
    
}


    public delete(keywords: string){
var keywords = keywords
deleteWhere(BasicItemData.KEYWORDS, keywords)
}


    public dropTable(): string{

    var returnStr: string = super.dropTable()!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return returnStr;
    
}


    public update(updatedValues: HashMap<Any, Any>){
var updatedValues = updatedValues
updateWhere(BasicItemData.KEYWORDS, updatedValues!.get(BasicItemData.KEYWORDS) as String, updatedValues)
}


    public createTableStatement(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

append(this.sqlStrings!.END)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());
    
}


}
                
            

