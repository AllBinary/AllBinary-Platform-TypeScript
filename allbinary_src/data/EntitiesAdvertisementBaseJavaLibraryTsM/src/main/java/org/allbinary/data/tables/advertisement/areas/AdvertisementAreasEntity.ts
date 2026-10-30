
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { AdvertisementArea } from '../../../../../../org/allbinary/business/advertisement/area/AdvertisementArea.js';
//not GWT import const AdvertisementArea

import { AdvertisementAreaData } from '../../../../../../org/allbinary/business/advertisement/area/AdvertisementAreaData.js';
//not GWT import const AdvertisementAreaData

import { AdvertisementAreaInterface } from '../../../../../../org/allbinary/business/advertisement/area/AdvertisementAreaInterface.js';
//not GWT import const AdvertisementAreaInterface

import { AdvertisementCampaignData } from '../../../../../../org/allbinary/business/advertisement/campaign/AdvertisementCampaignData.js';
//not GWT import const AdvertisementCampaignData

import { StoreFrontData } from '../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
//not GWT import const StoreFrontData

import { EntryData } from '../../../../../../org/allbinary/business/entry/EntryData.js';
//not GWT import const EntryData

import { UserDbInitInfo } from '../../../../../../org/allbinary/business/init/db/UserDbInitInfo.js';
//not GWT import const UserDbInitInfo

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbSqlBean } from '../../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js';
//not GWT import const AbSqlBean

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AdvertisementAreasEntityInterface } from './AdvertisementAreasEntityInterface.js';
//not GWT import - same folder const AdvertisementAreasEntityInterface

export class AdvertisementAreasEntity extends AbSqlBean implements AdvertisementAreasEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly tableName: string = "advertisements";

public constructor (){
            super(new UserDbInitInfo());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(this.tableName);
    
}


    public delete(value: string){

 try { super.deleteWhere(EntryData.getInstance()!.ID, value);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, this.commonStrings!.delete);
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, this.commonStrings!.delete, e);
    

                                    }
                                

 }
   }
 
}

get(...args: any[]): any {
   
    if (args.length === 1 && typeof args[0] === 'string') return this.get$overload1(args[0]);
   
    if (args.length === 2 && typeof args[0] === 'string' && typeof args[1] === 'string') return this.get$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: get'); }
  
                //@Throws(Exception.constructor)
            
    public get$overload1(storeName: string): BasicArrayList{

    let keysAndValues: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
keysAndValues!.put(StoreFrontData.getInstance()!.NAME, storeName);
    

    let hashMapVector: BasicArrayList = super.getRows(keysAndValues)!;;
    

    let vector: BasicArrayList = new BasicArrayListD();;
    

    let size: number = hashMapVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let hashMap: HashMap<any, any> = hashMapVector!.get(index) as HashMap<any, any>;;
    

                        if(hashMap != 
                                    null
                                )
                        
                                    {
                                    vector.add(new AdvertisementArea(hashMap) as AdvertisementAreaInterface);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


                //@Throws(Exception.constructor)
            
    public get$overload2(storeName: string, advertisementAreaName: string): AdvertisementAreaInterface{

    let keysAndValues: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
keysAndValues!.put(StoreFrontData.getInstance()!.NAME, storeName);
    
keysAndValues!.put(AdvertisementAreaData.getInstance()!.NAME, advertisementAreaName);
    

    let hashMap: HashMap<any, any> = super.getRow(keysAndValues)!;;
    

                        if(hashMap != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AdvertisementArea(hashMap) as AdvertisementAreaInterface;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


    public createTableStatement(): string{

    let advertisementAreaData: AdvertisementAreaData = AdvertisementAreaData.getInstance()!;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.CREATE_TABLE);
    
stringBuffer!.append(this.getTableName());
    
stringBuffer!.append(this.sqlStrings!.START);
    
stringBuffer!.append(advertisementAreaData!.NAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(StoreFrontData.getInstance()!.NAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(advertisementAreaData!.DESCRIPTION)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(advertisementAreaData!.CONSTRAINTS)!.append(this.sqlTypeStrings!.BLOB_NOT_NULL)!.append(AdvertisementCampaignData.getInstance()!.NAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(EntryData.getInstance()!.TIMECREATED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(EntryData.getInstance()!.LASTMODIFIED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(this.sqlStrings!.PRIMARY_KEY)!.append(advertisementAreaData!.NAME)!.append(this.sqlStrings!.END);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public createTable(): string{

    let returnStr: string = super.createTable(this.createTableStatement())!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return returnStr;
    
}


    public update(updatedValues: HashMap<any, any>){
super.updateWhere(AdvertisementAreaData.getInstance()!.NAME, updatedValues!.get(AdvertisementAreaData.getInstance()!.NAME) as string, updatedValues);
    
}


    public dropTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();;
    
}


}

