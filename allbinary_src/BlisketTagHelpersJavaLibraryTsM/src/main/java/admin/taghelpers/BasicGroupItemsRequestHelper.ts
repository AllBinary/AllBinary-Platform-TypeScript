
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

    
import { EntryData } from "../../org/allbinary/business/entry/EntryData.js";

    
import { BasicItemData } from "../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js";

    
import { BasicGroupItemData } from "../../org/allbinary/business/user/commerce/inventory/item/group/BasicGroupItemData.js";

    
import { BasicGroupItemsEntityFactory } from "../../org/allbinary/data/tables/user/commerce/inventory/item/groups/BasicGroupItemsEntityFactory.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../org/allbinary/string/CommonSeps.js";

    

export class BasicGroupItemsRequestHelper extends ModifyTable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private request: HttpServletRequest

    private id: string

    private itemOne: string

    private itemTwo: string

    private itemThree: string

    private itemFour: string

    private itemFive: string

    private itemSix: string

    private itemSeven: string

    private itemEight: string

    private itemNine: string

    private itemTen: string

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
    
this.itemOne= request.getParameter(BasicGroupItemData.ITEM_ONE);
    
this.itemTwo= request.getParameter(BasicGroupItemData.ITEM_TWO);
    
this.itemThree= request.getParameter(BasicGroupItemData.ITEM_THREE);
    
this.itemFour= request.getParameter(BasicGroupItemData.ITEM_FOUR);
    
this.itemFive= request.getParameter(BasicGroupItemData.ITEM_FIVE);
    
this.itemSix= request.getParameter(BasicGroupItemData.ITEM_SIX);
    
this.itemSeven= request.getParameter(BasicGroupItemData.ITEM_SEVEN);
    
this.itemEight= request.getParameter(BasicGroupItemData.ITEM_EIGHT);
    
this.itemNine= request.getParameter(BasicGroupItemData.ITEM_NINE);
    
this.itemTen= request.getParameter(BasicGroupItemData.ITEM_TEN);
    
this.timeEntered= request.getParameter(EntryData.getInstance()!.TIMECREATED);
    
this.lastModified= request.getParameter(EntryData.getInstance()!.LASTMODIFIED);
    
}


    getHashMap(): HashMap<any, any>{

    var values: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
values.put(BasicItemData.ID, id);
    
values.put(BasicGroupItemData.ITEM_ONE, this.itemOne);
    
values.put(BasicGroupItemData.ITEM_TWO, this.itemTwo);
    
values.put(BasicGroupItemData.ITEM_THREE, this.itemThree);
    
values.put(BasicGroupItemData.ITEM_FOUR, this.itemFour);
    
values.put(BasicGroupItemData.ITEM_FIVE, this.itemFive);
    
values.put(BasicGroupItemData.ITEM_SIX, this.itemSix);
    
values.put(BasicGroupItemData.ITEM_SEVEN, this.itemSeven);
    
values.put(BasicGroupItemData.ITEM_EIGHT, this.itemEight);
    
values.put(BasicGroupItemData.ITEM_NINE, this.itemNine);
    
values.put(BasicGroupItemData.ITEM_TEN, this.itemTen);
    

    var calendar: Calendar = Calendar.getInstance()!;
        
        
;
    

    var time: string = calendar.getTimeInMillis() as Long.
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
    

    var time: string = calendar.getTimeInMillis() as Long.
                            toString();
        
        
;
    

    var values: Vector = new Vector();
        
        
;
    
values.add(this.id);
    
values.add(this.itemOne);
    
values.add(this.itemTwo);
    
values.add(this.itemThree);
    
values.add(this.itemFour);
    
values.add(this.itemFive);
    
values.add(this.itemSix);
    
values.add(this.itemSeven);
    
values.add(this.itemEight);
    
values.add(this.itemNine);
    
values.add(this.itemTen);
    
values.add(time);
    
values.add(time);
    
BasicGroupItemsEntityFactory.getInstance()!.getBasicGroupItemsEntityInstance()!.insert(values);
    

    var success: string = "Successfully inserted " +id +" into items table";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "insert()");
    

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
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "inserts()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public delete(): string{

        try {
            BasicGroupItemsEntityFactory.getInstance()!.getBasicGroupItemsEntityInstance()!.delete(id);
    

    var success: string = "Successfully deleted";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "delete()");
    

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
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "delete()", e);
    

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
    
BasicGroupItemsEntityFactory.getInstance()!.getBasicGroupItemsEntityInstance()!.update(values);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(new StringMaker().
                            append(id)!.append(CommonSeps.getInstance()!.SPACE)!.append(success)!.toString(), this, "update()");
    

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
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "update()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}
                
            

