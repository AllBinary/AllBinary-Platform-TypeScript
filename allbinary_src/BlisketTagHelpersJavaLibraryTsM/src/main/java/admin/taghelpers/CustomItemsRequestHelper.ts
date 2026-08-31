
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

      
import { Vector } from '../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { HttpServletRequest } from '../../javax/servlet/http/HttpServletRequest.js';
      //not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
      //not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { DynamicObjectData } from '../../org/allbinary/business/DynamicObjectData.js';
      //not GWT import const DynamicObjectData = globalThis.org.allbinary.business.DynamicObjectData;

      
import { EntryData } from '../../org/allbinary/business/entry/EntryData.js';
      //not GWT import const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
import { BasicItemData } from '../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
      //not GWT import const BasicItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemData;

      
import { CustomItemData } from '../../org/allbinary/business/user/commerce/inventory/item/custom/CustomItemData.js';
      //not GWT import const CustomItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.custom.CustomItemData;

      
import { CustomItemsEntityFactory } from '../../org/allbinary/data/tables/user/commerce/inventory/item/customs/CustomItemsEntityFactory.js';
      //not GWT import const CustomItemsEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.customs.CustomItemsEntityFactory;

      
//not plain js import { LogUtil } from '../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonSeps } from '../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ModifyTable } from './ModifyTable.js';
//not GWT import const  = globalThis.admin.taghelpers.ModifyTable;

                
export class CustomItemsRequestHelper extends ModifyTable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

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
this.id= this.request.getParameter(BasicItemData.ID);
    
this.className= this.request.getParameter(DynamicObjectData.NAME);
    
this.packageName= this.request.getParameter(CustomItemData.PACKAGE);
    
this.timeEntered= this.request.getParameter(EntryData.getInstance()!.TIMECREATED);
    
this.lastModified= this.request.getParameter(EntryData.getInstance()!.LASTMODIFIED);
    
}


    getHashMap(): HashMap<any, any>{

    var values: HashMap<any, any> = new HashMap<any, any>();;
    
values.put(BasicItemData.ID, this.id);
    
values.put(DynamicObjectData.NAME, this.className);
    
values.put(CustomItemData.PACKAGE, this.packageName);
    

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
    

    var values: Vector = new Vector();;
    
values.add(this.id);
    
values.add(this.className);
    
values.add(this.packageName);
    
values.add(time);
    
values.add(time);
    
CustomItemsEntityFactory.getInstance()!.getCustomItemsEntityInstance()!.insert(values);
    

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
            CustomItemsEntityFactory.getInstance()!.getCustomItemsEntityInstance()!.delete(this.id);
    

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
            
    var success: string = "Update Pricing Successful";;
    

    var values: HashMap<any, any> = this.getHashMap()!;;
    
CustomItemsEntityFactory.getInstance()!.getCustomItemsEntityInstance()!.update(values);
    

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



