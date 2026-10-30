
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

        


            import { Exception } from '../../java/lang/Exception.js';
        
            import { Long } from '../../java/lang/Long.js';
        
import { Calendar } from '../../java/util/Calendar.js';
//not GWT import const Calendar

import { HashMap } from '../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { HttpServletRequest } from '../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest

import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext

import { DynamicObjectData } from '../../org/allbinary/business/DynamicObjectData.js';
//not GWT import const DynamicObjectData

import { EntryData } from '../../org/allbinary/business/entry/EntryData.js';
//not GWT import const EntryData

import { BasicItemData } from '../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
//not GWT import const BasicItemData

import { CustomItemData } from '../../org/allbinary/business/user/commerce/inventory/item/custom/CustomItemData.js';
//not GWT import const CustomItemData

import { CustomItemsEntityFactory } from '../../org/allbinary/data/tables/user/commerce/inventory/item/customs/CustomItemsEntityFactory.js';
//not GWT import const CustomItemsEntityFactory

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ModifyTable } from './ModifyTable.js';
//not GWT import - same folder const ModifyTable

export class CustomItemsRequestHelper extends ModifyTable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly basicItemData: BasicItemData = BasicItemData.getInstance()!;

    private request: HttpServletRequest;

    private id: string;

    private className: string;

    private packageName: string;

    private timeEntered: string;

    private lastModified: string;

public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        this.request= pageContext!.getRequest() as HttpServletRequest;
    
this.getFormData();
    
}


    public getFormData(){
this.id= this.request.getParameter(this.basicItemData!.ID);
    
this.className= this.request.getParameter(DynamicObjectData.NAME);
    
this.packageName= this.request.getParameter(CustomItemData.PACKAGE);
    
this.timeEntered= this.request.getParameter(EntryData.getInstance()!.TIMECREATED);
    
this.lastModified= this.request.getParameter(EntryData.getInstance()!.LASTMODIFIED);
    
}


    getHashMap(): HashMap<any, any>{

    let values: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
values.put(this.basicItemData!.ID, this.id);
    
values.put(DynamicObjectData.NAME, this.className);
    
values.put(CustomItemData.PACKAGE, this.packageName);
    

    let calendar: Calendar = Calendar.getInstance()!;;
    

    let time: string = new Long(calendar.getTimeInMillis()).toString();;
    
values.put(EntryData.getInstance()!.LASTMODIFIED, time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


    public insert(): string{

 try { 
    let calendar: Calendar = Calendar.getInstance()!;;
    

    let time: string = new Long(calendar.getTimeInMillis()).toString();;
    

    let values: BasicArrayList = new BasicArrayListD();;
    
values.add(this.id);
    
values.add(this.className);
    
values.add(this.packageName);
    
values.add(time);
    
values.add(time);
    
CustomItemsEntityFactory.getInstance()!.getCustomItemsEntityInstance()!.insert(values);
    

    let success: string = "Successfully inserted " +this.id +" into items table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "insert()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to insert " +this.id +" into items table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "inserts()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


    public delete(): string{

 try { CustomItemsEntityFactory.getInstance()!.getCustomItemsEntityInstance()!.delete(this.id);
    

    let success: string = "Successfully deleted";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "delete()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to delete";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "delete()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


    public update(): string{

 try { 
    let success: string = "Update Pricing Successful";;
    

    let values: HashMap<any, any> = this.getHashMap()!;;
    
CustomItemsEntityFactory.getInstance()!.getCustomItemsEntityInstance()!.update(values);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(new StringMaker().append(this.id)!.append(CommonSeps.getInstance()!.SPACE)!.append(success)!.toString(), this, "update()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to update: " +this.id;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "update()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


}

