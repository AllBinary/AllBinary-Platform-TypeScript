
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
        



import { Calendar } from "../../java/util/Calendar.js";

    
import { HashMap } from "../../java/util/HashMap.js";

    
import { Vector } from "../../java/util/Vector.js";

    
import { HttpServletRequest } from "../../javax/servlet/http/HttpServletRequest.js";

    
import { PageContext } from "../../javax/servlet/jsp/PageContext.js";

    
import { EntryData } from "../../org/allbinary/business/entry/EntryData.js";

    
import { BasicItemData } from "../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js";

    
import { PermissionItemData } from "../../org/allbinary/business/user/commerce/inventory/item/permission/PermissionItemData.js";

    
import { PermissionItemsEntityFactory } from "../../org/allbinary/data/tables/user/commerce/inventory/item/permissions/PermissionItemsEntityFactory.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class PermissionItemsRequestHelper extends ModifyTable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private request: HttpServletRequest

    private id: string

    private enabled: string

    private number: string

    private who: string

    private what: string

    private type: string

    private remoteAddr: string

    private startTime: string

    private endTime: string

    private price: string

    private timeEntered: string

    private lastModified: string
public constructor (hashMap: HashMap<Any, Any>, pageContext: PageContext){

            super();
            var hashMap = hashMap
var pageContext = pageContext
this.request= pageContext!.getRequest() as HttpServletRequest
this.getFormData()
}


    public getFormData(){
this.id= request.getParameter(BasicItemData.ID)
this.number= request.getParameter(BasicItemData.NUMBER)
this.enabled= request.getParameter(EntryData.getInstance()!.ENABLE)
this.who= request.getParameter(PermissionItemData.WHO)
this.what= request.getParameter(PermissionItemData.WHAT)
this.type= request.getParameter(PermissionItemData.TYPE)
this.remoteAddr= request.getParameter(PermissionItemData.REMOTE_ADDR)
this.startTime= request.getParameter(PermissionItemData.START_TIME)
this.endTime= request.getParameter(PermissionItemData.END_TIME)
this.price= request.getParameter(BasicItemData.PRICE)
this.timeEntered= request.getParameter(EntryData.getInstance()!.TIMECREATED)
this.lastModified= request.getParameter(EntryData.getInstance()!.LASTMODIFIED)
}


    getHashMap(): HashMap<Any, Any>{

    var values: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(BasicItemData.ID, this.id)
put(BasicItemData.NUMBER, this.number)
put(EntryData.getInstance()!.ENABLE, this.enabled)
put(PermissionItemData.WHO, this.who)
put(PermissionItemData.WHAT, this.what)
put(PermissionItemData.TYPE, this.type)
put(PermissionItemData.REMOTE_ADDR, this.remoteAddr)
put(PermissionItemData.START_TIME, this.startTime)
put(PermissionItemData.END_TIME, this.endTime)
put(BasicItemData.PRICE, this.price)

    var calendar: Calendar = Calendar.getInstance()!;
        
        


    var time: string = new calendar.getTimeInMillis() as Long.
                            toString().toCharArray().concatToString()
                                ;
        
        

put(EntryData.getInstance()!.LASTMODIFIED, time)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


    public insert(): string{

        try {
            
    var calendar: Calendar = Calendar.getInstance()!;
        
        


    var time: string = new calendar.getTimeInMillis() as Long.
                            toString().toCharArray().concatToString()
                                ;
        
        


    var values: Vector = new Vector();
        
        

add(this.id)
add(this.number)
add(this.enabled)
add(this.who)
add(this.what)
add(this.type)
add(this.remoteAddr)
add(this.startTime)
add(this.endTime)
add(this.price)
add(time)
add(time)
insert(values)

    var success: string = "Successfully inserted " +id +" into items table";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    put(success, this, "insert()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
} catch(e: Exception)
            {

    var error: string = "Failed to insert " +id +" into items table";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "inserts()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public delete(): string{

        try {
            delete(id)

    var success: string = "Successfully deleted";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    put(success, this, "delete()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
} catch(e: Exception)
            {

    var error: string = "Failed to delete";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "delete()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public update(): string{

        try {
            
    var success: string = "Update Pricing Successful";
        
        


    var values: HashMap<Any, Any> = this.getHashMap()!;
        
        

update(values)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    put(id +" " +success, this, "update()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
} catch(e: Exception)
            {

    var error: string = "Failed to update: " +id;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "update()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}
                
            

