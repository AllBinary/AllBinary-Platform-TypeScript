
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

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { StaticPagesEntityInterface } from "./StaticPagesEntityInterface.js";

export class StaticPagesEntity extends AbSqlBean implements StaticPagesEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly TABLENAME: string = "staticpages";
        
        
public constructor (){
            super(new StaticPagesDbInitInfo());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(this.TABLENAME);
    
}


    public insert(values: Vector){
var values = values

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


    public getFile(store: string, keywords: string): string{
var store = store
var keywords = keywords

    var whereHashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
whereHashMap!.put(StoreFrontData.getInstance()!.NAME, store);
    
whereHashMap!.put(BasicItemData.KEYWORDS, keywords);
    

    var file: string = super.getField(whereHashMap, SearchData.PAGE)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return file;
    
}


    public delete(keywords: string){
var keywords = keywords
super.deleteWhere(BasicItemData.KEYWORDS, keywords);
    
}


    public dropTable(): string{

    var returnStr: string = super.dropTable()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return returnStr;
    
}


    public update(updatedValues: HashMap<any, any>){
var updatedValues = updatedValues
super.updateWhere(BasicItemData.KEYWORDS, updatedValues!.get(BasicItemData.KEYWORDS) as String, updatedValues);
    
}


    public createTableStatement(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.sqlStrings!.CREATE_TABLE)!.append(TABLENAME)!.append(this.sqlStrings!.START)!.append(StoreFrontData.getInstance()!.NAME)!.append(this.sqlTypeStrings!.SIXTY_CHAR_COLUMN_NOT_NULL)!.append(BasicItemData.KEYWORDS)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(SearchData.PAGE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(this.sqlStrings!.PRIMARY_KEY)!.append(StoreFrontData.getInstance()!.NAME)!.append(CommonSeps.getInstance()!.COMMA_SEP)!.append(BasicItemData.KEYWORDS)!.append(this.sqlStrings!.END);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());;
    
}


}
                
            

