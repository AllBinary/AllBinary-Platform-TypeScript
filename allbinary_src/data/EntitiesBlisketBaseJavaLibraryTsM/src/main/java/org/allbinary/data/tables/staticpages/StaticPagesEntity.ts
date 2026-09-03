
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

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { StoreFrontData } from '../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      //not GWT import const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
import { StaticPagesDbInitInfo } from '../../../../../org/allbinary/business/init/db/StaticPagesDbInitInfo.js';
      //not GWT import const StaticPagesDbInitInfo = globalThis.org.allbinary.business.init.db.StaticPagesDbInitInfo;

      
import { BasicItemData } from '../../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
      //not GWT import const BasicItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemData;

      
import { StdUtil } from '../../../../../org/allbinary/logic/StdUtil.js';
      //not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbSqlBean } from '../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js';
      //not GWT import const AbSqlBean = globalThis.org.allbinary.logic.communication.sql.AbSqlBean;

      
import { SearchData } from '../../../../../org/allbinary/logic/control/search/SearchData.js';
      //not GWT import const SearchData = globalThis.org.allbinary.logic.control.search.SearchData;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StaticPagesEntityInterface } from './StaticPagesEntityInterface.js';
//not GWT import const StaticPagesEntityInterface = globalThis.org.allbinary.data.tables.staticpages.StaticPagesEntityInterface;

                
export class StaticPagesEntity extends AbSqlBean implements StaticPagesEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly basicItemData: BasicItemData = BasicItemData.getInstance()!;

    private readonly TABLENAME: string = "staticpages";

public constructor (){
            super(new StaticPagesDbInitInfo());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(this.TABLENAME);
    
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


    public getFile(store: string, keywords: string): string{

    var whereHashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
whereHashMap!.put(StoreFrontData.getInstance()!.NAME, store);
    
whereHashMap!.put(basicItemData!.KEYWORDS, keywords);
    

    var file: string = super.getField(whereHashMap, SearchData.PAGE)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return file;
    
}


    public delete(keywords: string){
super.deleteWhere(basicItemData!.KEYWORDS, keywords);
    
}


    public dropTable(): string{

    var returnStr: string = super.dropTable()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return returnStr;
    
}


    public update(updatedValues: HashMap<any, any>){
super.updateWhere(basicItemData!.KEYWORDS, updatedValues!.get(basicItemData!.KEYWORDS) as string, updatedValues);
    
}


    public createTableStatement(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.CREATE_TABLE)!.append(TABLENAME)!.append(this.sqlStrings!.START)!.append(StoreFrontData.getInstance()!.NAME)!.append(this.sqlTypeStrings!.SIXTY_CHAR_COLUMN_NOT_NULL)!.append(basicItemData!.KEYWORDS)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(SearchData.PAGE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(this.sqlStrings!.PRIMARY_KEY)!.append(StoreFrontData.getInstance()!.NAME)!.append(CommonSeps.getInstance()!.COMMA_SEP)!.append(basicItemData!.KEYWORDS)!.append(this.sqlStrings!.END);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());;
    
}


}



