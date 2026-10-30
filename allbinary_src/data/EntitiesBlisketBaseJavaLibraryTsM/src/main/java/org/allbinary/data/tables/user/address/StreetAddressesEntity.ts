
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
        
            import { Integer } from '../../../../../../java/lang/Integer.js';
        
            import { Long } from '../../../../../../java/lang/Long.js';
        
import { Calendar } from '../../../../../../java/util/Calendar.js';
//not GWT import const Calendar

import { HashMap } from '../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { EntryData } from '../../../../../../org/allbinary/business/entry/EntryData.js';
//not GWT import const EntryData

import { UserDbInitInfo } from '../../../../../../org/allbinary/business/init/db/UserDbInitInfo.js';
//not GWT import const UserDbInitInfo

import { UserData } from '../../../../../../org/allbinary/business/user/UserData.js';
//not GWT import const UserData

import { StreetAddress } from '../../../../../../org/allbinary/business/user/address/StreetAddress.js';
//not GWT import const StreetAddress

import { StreetAddressData } from '../../../../../../org/allbinary/business/user/address/StreetAddressData.js';
//not GWT import const StreetAddressData

import { TableDataFactory } from '../../../../../../org/allbinary/data/tables/TableDataFactory.js';
//not GWT import const TableDataFactory

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

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StreetAddressesEntityInterface } from './StreetAddressesEntityInterface.js';
//sameFolderImports - not GWT import - same folder const StreetAddressesEntityInterface

export class StreetAddressesEntity extends AbSqlBean implements StreetAddressesEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private userName: string;

public constructor (){
            super(new UserDbInitInfo());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


public constructor (userName: string){
            super(new UserDbInitInfo());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.userName= userName;
    
}


    public remove(index: Integer){

 try { 
    let whereHashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
whereHashMap!.put(UserData.USERNAME, this.userName);
    
whereHashMap!.put(StreetAddressData.ID, index.toString() as string);
    
super.deleteWhere(whereHashMap);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, "remove");
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "remove", e);
    

                                    }
                                

 }
   }
 
}

add(...args: any[]): any {
   
    if (args.length === 1) return this.add$overload1(args[0]);
   
    if (args.length === 2 && typeof args[1] === 'string') return this.add$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: add'); }
  
    public add$overload1(address: StreetAddress){
this.add(address, TableDataFactory.getInstance()!.INTEGER_MAX_VALUE_STRING);
    
}


    add$overload2(address: StreetAddress, index: string){

 try { 
    let values: BasicArrayList = new BasicArrayListD();;
    
values.add(index);
    
values.add(this.userName);
    
values.add(StringUtil.getInstance()!.EMPTY_STRING);
    
values.add(address.getName());
    
values.add(address.getStreet());
    
values.add(address.getCity());
    
values.add(address.getState());
    
values.add(address.getCode());
    
values.add(address.getCountry());
    

    let calendar: Calendar = Calendar.getInstance()!;;
    

    let time: string = new Long(calendar.getTimeInMillis()).toString();;
    
values.add(time);
    
super.insert(values);
    
this.setDefault(getLastId());
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, "add");
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "add", e);
    

                                    }
                                

 }
   }
 
}


    public update(address: StreetAddress){

 try { 
    let addressHashMap: HashMap<any, any> = address.toHashMap()!;;
    

    let whereKeyValuePairs: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
whereKeyValuePairs!.put(StreetAddressData.ID, address.getId());
    
whereKeyValuePairs!.put(UserData.USERNAME, this.userName);
    
super.updateWhere(whereKeyValuePairs, addressHashMap);
    
this.setDefault(address.getId());
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, "update");
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "add", e);
    

                                    }
                                

 }
   }
 
}


    public getLastId(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getLargestIntegerInColumnWhere(StreetAddressData.ID, UserData.USERNAME, userName);;
    
}

get(...args: any[]): any {
   
    if (args.length === 0) return this.get$overload1();
   
    if (args.length === 1) return this.get$overload2(args[0]);
   
   throw new TypeError('No matching overload: get'); }
  
    public get$overload1(): BasicArrayList{

 try { 
    let streetAddressVector: BasicArrayList = new BasicArrayListD();;
    

    let keyAndValue: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
keyAndValue!.put(UserData.USERNAME, this.userName);
    

    let addressList: BasicArrayList = super.getRows(keyAndValue)!;;
    

    let size: number = addressList!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let addressHashMap: HashMap<any, any> = addressList!.get(index) as HashMap<any, any>;;
    

    let streetAddress: StreetAddress = new StreetAddress(addressHashMap);;
    

                        if(streetAddress != 
                                    null
                                )
                        
                                    {
                                    streetAddressVector!.add(streetAddress);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return streetAddressVector;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, this.commonStrings!.GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public get$overload2(index: Integer): StreetAddress{

 try { 
    let keyAndValue: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
keyAndValue!.put(UserData.USERNAME, this.userName);
    
keyAndValue!.put(StreetAddressData.ID, index.toString());
    

    let addressHashMap: HashMap<any, any> = super.getRow(keyAndValue)!;;
    

                        if(addressHashMap != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StreetAddress(addressHashMap);
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, this.commonStrings!.GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public getDefault(): StreetAddress{

 try { 
    let addressHashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    

    let updateKeyAndValue: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
updateKeyAndValue!.put(StreetAddressData.DEFAULT, StreetAddressData.DEFAULT);
    
updateKeyAndValue!.put(UserData.USERNAME, this.userName);
    
addressHashMap= super.getRow(updateKeyAndValue);
    

                        if(addressHashMap != 
                                    null
                                )
                        
                                    {
                                    
    let streetAddress: StreetAddress = new StreetAddress(addressHashMap);;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, "getDefault");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return streetAddress;
    

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF("No Default Address Found", this, "getDefault");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "getDefault", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public setDefault(value: string){

 try { 
    let updateKeyAndValue: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    

    let whereKeyAndValue: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
whereKeyAndValue!.put(UserData.USERNAME, this.userName);
    

    let streetAddress: StreetAddress = this.getDefault()!;;
    

                        if(streetAddress != 
                                    null
                                )
                        
                                    {
                                    updateKeyAndValue!.put(StreetAddressData.DEFAULT, StringUtil.getInstance()!.EMPTY_STRING);
    
whereKeyAndValue!.put(StreetAddressData.ID, streetAddress!.getId());
    
super.updateWhere(whereKeyAndValue, updateKeyAndValue);
    

                                    }
                                
whereKeyAndValue!.put(StreetAddressData.ID, value);
    
updateKeyAndValue!.put(StreetAddressData.DEFAULT, StreetAddressData.DEFAULT);
    
super.updateWhere(whereKeyAndValue, updateKeyAndValue);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, "setDefault");
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "setShippingAddress", e);
    

                                    }
                                

 }
   }
 
}


    getUserName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userName;
    
}


    public createTableStatement(): string{

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.CREATE_TABLE)!.append(this.getTableName())!.append(this.sqlStrings!.START)!.append(StreetAddressData.ID)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_AUTO_INCREMENT_NOT_NULL)!.append(UserData.USERNAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(StreetAddressData.DEFAULT)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(StreetAddressData.NAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(StreetAddressData.STREET)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(StreetAddressData.CITY)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(StreetAddressData.STATE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(StreetAddressData.CODE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(StreetAddressData.COUNTRY)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(EntryData.getInstance()!.TIMECREATED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(this.sqlStrings!.PRIMARY_KEY)!.append(StreetAddressData.ID)!.append(this.sqlStrings!.END);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());;
    
}


    public drop(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();;
    
}


}

