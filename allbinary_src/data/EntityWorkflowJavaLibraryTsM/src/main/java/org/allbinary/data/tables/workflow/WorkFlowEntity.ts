
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

import { DynamicObjectData } from '../../../../../org/allbinary/business/DynamicObjectData.js';
//not GWT import const DynamicObjectData

import { StoreFrontData } from '../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
//not GWT import const StoreFrontData

import { EntryData } from '../../../../../org/allbinary/business/entry/EntryData.js';
//not GWT import const EntryData

import { UserDbInitInfo } from '../../../../../org/allbinary/business/init/db/UserDbInitInfo.js';
//not GWT import const UserDbInitInfo

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbSqlBean } from '../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js';
//not GWT import const AbSqlBean

import { DbWorkFlowFactory } from '../../../../../org/allbinary/logic/control/workflow/DbWorkFlowFactory.js';
//not GWT import const DbWorkFlowFactory

import { WorkFlowData } from '../../../../../org/allbinary/logic/control/workflow/WorkFlowData.js';
//not GWT import const WorkFlowData

import { WorkFlowInterface } from '../../../../../org/allbinary/logic/control/workflow/WorkFlowInterface.js';
//not GWT import const WorkFlowInterface

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { LicensingException } from '../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js';
//not GWT import const LicensingException

import { ServiceClientInformationInterfaceFactory } from '../../../../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
//not GWT import const ServiceClientInformationInterfaceFactory

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WorkFlowEntityInterface } from './WorkFlowEntityInterface.js';
//not GWT import - same folder const WorkFlowEntityInterface

export class WorkFlowEntity extends AbSqlBean implements WorkFlowEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;

    readonly tableName: string = "workflows";

    private readonly METHOD_GET: string = "get()";

    private readonly METHOD_UPDATE: string = "update";

public constructor (){
            super(new UserDbInitInfo());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(this.tableName);
    
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


    public delete(name: string, storeName: string){

 try { 
    let keysAndValues: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
keysAndValues!.put(WorkFlowData.getInstance()!.NAME, name);
    
keysAndValues!.put(StoreFrontData.getInstance()!.NAME, storeName);
    
super.deleteWhere(keysAndValues);
    

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
   
    if (args.length === 2 && typeof args[0] === 'string' && typeof args[1] === 'string') return this.get$overload1(args[0], args[1]);
   
    if (args.length === 1 && typeof args[0] === 'string') return this.get$overload2(args[0]);
   
   throw new TypeError('No matching overload: get'); }
  
                //@Throws(Exception.constructor, LicensingException.constructor)
            
    public get$overload1(name: string, storeName: string): WorkFlowInterface{

 try { 
    let keysAndValues: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
keysAndValues!.put(WorkFlowData.getInstance()!.NAME, name);
    
keysAndValues!.put(StoreFrontData.getInstance()!.NAME, storeName);
    

    let hashMap: HashMap<any, any> = super.getRow(keysAndValues)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DbWorkFlowFactory.getInstance()!.getInstance(this.abeClientInformation, hashMap) as WorkFlowInterface;
    
 }
 catch (caught: any) {
 if (caught instanceof LicensingException) {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, METHOD_GET, e);
    

                                    }
                                



                            throw e;
                    

 }
  else {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, METHOD_GET, e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


    public get$overload2(storeName: string): BasicArrayList{

 try { 
    let workFlowsVector: BasicArrayList = new BasicArrayListD();;
    

    let keysAndValues: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
keysAndValues!.put(StoreFrontData.getInstance()!.NAME, storeName);
    

    let hashMapVector: BasicArrayList = super.getRows(keysAndValues)!;;
    

    let size: number = hashMapVector!.size()!;;
    




                        for (
    let i: number = 0;i < size; i++)
        {

    let workFlowHashMap: HashMap<any, any> = hashMapVector!.get(i) as HashMap<any, any>;;
    

                        if(workFlowHashMap != 
                                    null
                                )
                        
                                    {
                                    workFlowsVector!.add(DbWorkFlowFactory.getInstance()!.getInstance(abeClientInformation, workFlowHashMap));
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return workFlowsVector;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, this.METHOD_GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public update(updatedValues: HashMap<any, any>){

 try { 
    let wherekeysAndValues: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
wherekeysAndValues!.put(WorkFlowData.getInstance()!.NAME, updatedValues!.get(WorkFlowData.getInstance()!.NAME) as string);
    
wherekeysAndValues!.put(StoreFrontData.getInstance()!.NAME, updatedValues!.get(StoreFrontData.getInstance()!.NAME) as string);
    
super.updateWhere(wherekeysAndValues, updatedValues);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, METHOD_UPDATE, e);
    

                                    }
                                

 }
   }
 
}


    public createTableStatement(): string{

    let workFlowData: WorkFlowData = WorkFlowData.getInstance()!;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.CREATE_TABLE)!.append(tableName)!.append(this.sqlStrings!.START)!.append(workFlowData!.NAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(StoreFrontData.getInstance()!.NAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(DynamicObjectData.NAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(workFlowData!.DATA)!.append(this.sqlTypeStrings!.BLOB_NOT_NULL)!.append(EntryData.getInstance()!.TIMECREATED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(EntryData.getInstance()!.LASTMODIFIED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(this.sqlStrings!.PRIMARY_KEY)!.append(workFlowData!.NAME)!.append(this.sqlStrings!.END);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());;
    
}


    public dropTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();;
    
}


}

