
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
        



            import Vector from "@ohos.util.Vector";
        
import { Calendar } from "../../java/util/Calendar.js";

    
import { HashMap } from "../../java/util/HashMap.js";

    

//import { Vector } from "../../java/util/Vector.js";

    
import { HttpServletRequest } from "../../javax/servlet/http/HttpServletRequest.js";

    
import { PageContext } from "../../javax/servlet/jsp/PageContext.js";

    
import { DynamicObjectData } from "../../org/allbinary/business/DynamicObjectData.js";

    
import { EntryData } from "../../org/allbinary/business/entry/EntryData.js";

    
import { BasicItemData } from "../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js";

    
import { CustomItemData } from "../../org/allbinary/business/user/commerce/inventory/item/custom/CustomItemData.js";

    
import { CustomItemsEntityFactory } from "../../org/allbinary/data/tables/user/commerce/inventory/item/customs/CustomItemsEntityFactory.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class CustomItemsRequestHelper extends ModifyTable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private request: HttpServletRequest

    private id: string

    private className: string

    private packageName: string

    private timeEntered: string

    private lastModified: string
public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
            var hashMap = hashMap
var pageContext = pageContext
this.request= pageContext!.getRequest();

                         as HttpServletRequest;
    
this.getFormData();
    
}


    public getFormData(){
this.id= request.getParameter(BasicItemData.ID);
    
this.className= request.getParameter(DynamicObjectData.NAME);
    
this.packageName= request.getParameter(CustomItemData.PACKAGE);
    
this.timeEntered= request.getParameter(EntryData.getInstance()!.TIMECREATED);
    
this.lastModified= request.getParameter(EntryData.getInstance()!.LASTMODIFIED);
    
}


    getHashMap(): HashMap<any, any>{

    var values: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
values.put(BasicItemData.ID, this.id);
    
values.put(DynamicObjectData.NAME, this.className);
    
values.put(CustomItemData.PACKAGE, this.packageName);
    

    var calendar: Calendar = Calendar.getInstance()!;
        
        
;
    

    var time: string = new calendar.getTimeInMillis() as Long.
                            toString();
        
        
;
    
values.put(EntryData.getInstance()!.LASTMODIFIED, time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


    public insert(): string{

        try {
            
    var calendar: Calendar = Calendar.getInstance()!;
        
        
;
    

    var time: string = new calendar.getTimeInMillis() as Long.
                            toString();
        
        
;
    

    var values: Vector = new Vector();
        
        
;
    
values.add(id);
    
values.add(this.className);
    
values.add(this.packageName);
    
values.add(time);
    
values.add(time);
    
CustomItemsEntityFactory.getInstance()!.getCustomItemsEntityInstance()!.insert(values);
    

    var success: string = "Successfully inserted " +id +" into items table";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    logUtil!.put(success, this, "insert()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to insert " +id +" into items table";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "inserts()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public delete(): string{

        try {
            CustomItemsEntityFactory.getInstance()!.getCustomItemsEntityInstance()!.delete(id);
    

    var success: string = "Successfully deleted";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    logUtil!.put(success, this, "delete()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to delete";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "delete()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public update(): string{

        try {
            
    var success: string = "Update Pricing Successful";
        
        
;
    

    var values: HashMap<any, any> = this.getHashMap()!;
        
        
;
    
CustomItemsEntityFactory.getInstance()!.getCustomItemsEntityInstance()!.update(values);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    logUtil!.put(id +" " +success, this, "update()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to update: " +id;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "update()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}
                
            

