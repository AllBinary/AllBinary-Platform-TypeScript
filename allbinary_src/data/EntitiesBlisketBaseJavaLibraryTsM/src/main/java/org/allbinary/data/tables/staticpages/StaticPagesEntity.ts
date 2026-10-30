
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
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { StoreFrontData } from '../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
//not GWT import const StoreFrontData

import { StaticPagesDbInitInfo } from '../../../../../org/allbinary/business/init/db/StaticPagesDbInitInfo.js';
//not GWT import const StaticPagesDbInitInfo

import { BasicItemData } from '../../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
//not GWT import const BasicItemData

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbSqlBean } from '../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js';
//not GWT import const AbSqlBean

import { SearchData } from '../../../../../org/allbinary/logic/control/search/SearchData.js';
//not GWT import const SearchData

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StaticPagesEntityInterface } from './StaticPagesEntityInterface.js';
//not GWT import - same folder const StaticPagesEntityInterface

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

 try { super.insert(values);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, INSERT);
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, INSERT, e);
    

                                    }
                                

 }
   }
 
}


    public getFile(store: string, keywords: string): string{

    let whereHashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
whereHashMap!.put(StoreFrontData.getInstance()!.NAME, store);
    
whereHashMap!.put(this.basicItemData!.KEYWORDS, keywords);
    

    let file: string = super.getField(whereHashMap, SearchData.PAGE)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return file;
    
}


    public delete(keywords: string){
super.deleteWhere(this.basicItemData!.KEYWORDS, keywords);
    
}


    public dropTable(): string{

    let returnStr: string = super.dropTable()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return returnStr;
    
}


    public update(updatedValues: HashMap<any, any>){
super.updateWhere(this.basicItemData!.KEYWORDS, updatedValues!.get(this.basicItemData!.KEYWORDS) as string, updatedValues);
    
}


    public createTableStatement(): string{

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.CREATE_TABLE)!.append(TABLENAME)!.append(this.sqlStrings!.START)!.append(StoreFrontData.getInstance()!.NAME)!.append(this.sqlTypeStrings!.SIXTY_CHAR_COLUMN_NOT_NULL)!.append(this.basicItemData!.KEYWORDS)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(SearchData.PAGE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(this.sqlStrings!.PRIMARY_KEY)!.append(StoreFrontData.getInstance()!.NAME)!.append(CommonSeps.getInstance()!.COMMA_SEP)!.append(this.basicItemData!.KEYWORDS)!.append(this.sqlStrings!.END);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());;
    
}


}

