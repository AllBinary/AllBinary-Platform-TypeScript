
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
      //not GWT import const Calendar = globalThis.java.util.Calendar;

      
import { HashMap } from '../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } from '../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { HttpServletRequest } from '../../javax/servlet/http/HttpServletRequest.js';
      //not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
      //not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { EntryData } from '../../org/allbinary/business/entry/EntryData.js';
      //not GWT import const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
import { BasicItemData } from '../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
      //not GWT import const BasicItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemData;

      
import { SpecialItemData } from '../../org/allbinary/business/user/commerce/inventory/item/special/SpecialItemData.js';
      //not GWT import const SpecialItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.special.SpecialItemData;

      
import { SpecialItemsEntityFactory } from '../../org/allbinary/data/tables/user/commerce/inventory/item/special/SpecialItemsEntityFactory.js';
      //not GWT import const SpecialItemsEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.special.SpecialItemsEntityFactory;

      
//not plain js import { StdUtil } from '../../org/allbinary/logic/StdUtil.js';
      const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } from '../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonSeps } from '../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ModifyTable } from './ModifyTable.js';
//not GWT import const ModifyTable = globalThis.admin.taghelpers.ModifyTable;

                
export class SpecialItemsRequestHelper extends ModifyTable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly basicItemData: BasicItemData = BasicItemData.getInstance()!;

    private request: HttpServletRequest;

    private id: string;

    private enabled: string;

    private number: string;

    private startTime: string;

    private endTime: string;

    private price: string;

    private timeEntered: string;

    private lastModified: string;

public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        this.request= pageContext!.getRequest() as HttpServletRequest;
    
this.getFormData();
    
}


    public getFormData(){
this.id= this.request.getParameter(basicItemData!.ID);
    
this.number= this.request.getParameter(basicItemData!.NUMBER);
    
this.enabled= this.request.getParameter(EntryData.getInstance()!.ENABLE);
    
this.startTime= this.request.getParameter(SpecialItemData.START_TIME);
    
this.endTime= this.request.getParameter(SpecialItemData.END_TIME);
    
this.price= this.request.getParameter(basicItemData!.PRICE);
    
this.timeEntered= this.request.getParameter(EntryData.getInstance()!.TIMECREATED);
    
this.lastModified= this.request.getParameter(EntryData.getInstance()!.LASTMODIFIED);
    
}


    getHashMap(): HashMap<any, any>{

    var values: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
values.put(basicItemData!.ID, this.id);
    
values.put(basicItemData!.NUMBER, this.number);
    
values.put(EntryData.getInstance()!.ENABLE, this.enabled);
    
values.put(SpecialItemData.START_TIME, this.startTime);
    
values.put(SpecialItemData.END_TIME, this.endTime);
    
values.put(basicItemData!.PRICE, this.price);
    

    var calendar: Calendar = Calendar.getInstance()!;;
    

    var time: string = new Long(calendar.getTimeInMillis()).toString();;
    
values.put(EntryData.getInstance()!.LASTMODIFIED, time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


    public insert(): string{

        try {
            
    var calendar: Calendar = Calendar.getInstance()!;;
    

    var time: string = new Long(calendar.getTimeInMillis()).toString();;
    

    var values: BasicArrayList = new BasicArrayListD();;
    
values.add(this.id);
    
values.add(this.number);
    
values.add(this.enabled);
    
values.add(this.startTime);
    
values.add(this.endTime);
    
values.add(this.price);
    
values.add(time);
    
values.add(time);
    
SpecialItemsEntityFactory.getInstance()!.getSpecialItemsEntityInstance()!.insert(values);
    

    var success: string = "Successfully inserted " +this.id +" into items table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "insert()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to insert " +this.id +" into items table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "inserts()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public delete(): string{

        try {
            SpecialItemsEntityFactory.getInstance()!.getSpecialItemsEntityInstance()!.delete(this.id);
    

    var success: string = "Successfully deleted";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "delete()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to delete";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "delete()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public update(): string{

        try {
            
    var success: string = "Update Successful";;
    

    var values: HashMap<any, any> = this.getHashMap()!;;
    
SpecialItemsEntityFactory.getInstance()!.getSpecialItemsEntityInstance()!.update(values);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(new StringMaker().append(this.id)!.append(CommonSeps.getInstance()!.SPACE)!.append(success)!.toString(), this, "update()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to update: " +this.id;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "update()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}



