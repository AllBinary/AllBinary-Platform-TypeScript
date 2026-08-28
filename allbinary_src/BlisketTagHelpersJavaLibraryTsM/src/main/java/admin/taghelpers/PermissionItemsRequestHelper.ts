
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
        
//not game specific package import { Calendar } from '../../java/util/Calendar.js';
      const Calendar = globalThis.java.util.Calendar;

      
//not game specific package import { HashMap } from '../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Vector } from '../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { HttpServletRequest } from '../../javax/servlet/http/HttpServletRequest.js';
      const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
//not game specific package import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
      const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
//not game specific package import { EntryData } from '../../org/allbinary/business/entry/EntryData.js';
      const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
//not game specific package import { BasicItemData } from '../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
      const BasicItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemData;

      
//not game specific package import { PermissionItemData } from '../../org/allbinary/business/user/commerce/inventory/item/permission/PermissionItemData.js';
      const PermissionItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.permission.PermissionItemData;

      
//not game specific package import { PermissionItemsEntityFactory } from '../../org/allbinary/data/tables/user/commerce/inventory/item/permissions/PermissionItemsEntityFactory.js';
      const PermissionItemsEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.permissions.PermissionItemsEntityFactory;

      
//not game specific package import { LogUtil } from '../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringMaker } from '../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { CommonSeps } from '../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ModifyTable } from './ModifyTable.js';

export class PermissionItemsRequestHelper extends ModifyTable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private request: HttpServletRequest;

    private id: string;

    private enabled: string;

    private number: string;

    private who: string;

    private what: string;

    private type: string;

    private remoteAddr: string;

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
this.id= this.request.getParameter(BasicItemData.ID);
    
this.number= this.request.getParameter(BasicItemData.NUMBER);
    
this.enabled= this.request.getParameter(EntryData.getInstance()!.ENABLE);
    
this.who= this.request.getParameter(PermissionItemData.WHO);
    
this.what= this.request.getParameter(PermissionItemData.WHAT);
    
this.type= this.request.getParameter(PermissionItemData.TYPE);
    
this.remoteAddr= this.request.getParameter(PermissionItemData.REMOTE_ADDR);
    
this.startTime= this.request.getParameter(PermissionItemData.START_TIME);
    
this.endTime= this.request.getParameter(PermissionItemData.END_TIME);
    
this.price= this.request.getParameter(BasicItemData.PRICE);
    
this.timeEntered= this.request.getParameter(EntryData.getInstance()!.TIMECREATED);
    
this.lastModified= this.request.getParameter(EntryData.getInstance()!.LASTMODIFIED);
    
}


    getHashMap(): HashMap<any, any>{

    var values: HashMap<any, any> = new HashMap<any, any>();;
    
values.put(BasicItemData.ID, this.id);
    
values.put(BasicItemData.NUMBER, this.number);
    
values.put(EntryData.getInstance()!.ENABLE, this.enabled);
    
values.put(PermissionItemData.WHO, this.who);
    
values.put(PermissionItemData.WHAT, this.what);
    
values.put(PermissionItemData.TYPE, this.type);
    
values.put(PermissionItemData.REMOTE_ADDR, this.remoteAddr);
    
values.put(PermissionItemData.START_TIME, this.startTime);
    
values.put(PermissionItemData.END_TIME, this.endTime);
    
values.put(BasicItemData.PRICE, this.price);
    

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
    
values.add(this.number);
    
values.add(this.enabled);
    
values.add(this.who);
    
values.add(this.what);
    
values.add(this.type);
    
values.add(this.remoteAddr);
    
values.add(this.startTime);
    
values.add(this.endTime);
    
values.add(this.price);
    
values.add(time);
    
values.add(time);
    
PermissionItemsEntityFactory.getInstance()!.getPermissionItemsEntityInstance()!.insert(values);
    

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
            PermissionItemsEntityFactory.getInstance()!.getPermissionItemsEntityInstance()!.delete(this.id);
    

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
    
PermissionItemsEntityFactory.getInstance()!.getPermissionItemsEntityInstance()!.update(values);
    

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



