
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

    
import { BasicGroupItemData } from "../../org/allbinary/business/user/commerce/inventory/item/group/BasicGroupItemData.js";

    
import { BasicGroupItemsEntityFactory } from "../../org/allbinary/data/tables/user/commerce/inventory/item/groups/BasicGroupItemsEntityFactory.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    

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
public constructor (hashMap: HashMap<Any, Any>, pageContext: PageContext){

            super();
            var hashMap = hashMap
var pageContext = pageContext
this.request= pageContext!.getRequest() as HttpServletRequest
this.getFormData()
}


    public getFormData(){
this.id= request.getParameter(BasicItemData.ID)
this.itemOne= request.getParameter(BasicGroupItemData.ITEM_ONE)
this.itemTwo= request.getParameter(BasicGroupItemData.ITEM_TWO)
this.itemThree= request.getParameter(BasicGroupItemData.ITEM_THREE)
this.itemFour= request.getParameter(BasicGroupItemData.ITEM_FOUR)
this.itemFive= request.getParameter(BasicGroupItemData.ITEM_FIVE)
this.itemSix= request.getParameter(BasicGroupItemData.ITEM_SIX)
this.itemSeven= request.getParameter(BasicGroupItemData.ITEM_SEVEN)
this.itemEight= request.getParameter(BasicGroupItemData.ITEM_EIGHT)
this.itemNine= request.getParameter(BasicGroupItemData.ITEM_NINE)
this.itemTen= request.getParameter(BasicGroupItemData.ITEM_TEN)
this.timeEntered= request.getParameter(EntryData.getInstance()!.TIMECREATED)
this.lastModified= request.getParameter(EntryData.getInstance()!.LASTMODIFIED)
}


    getHashMap(): HashMap<Any, Any>{

    var values: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(BasicItemData.ID, id)
put(BasicGroupItemData.ITEM_ONE, this.itemOne)
put(BasicGroupItemData.ITEM_TWO, this.itemTwo)
put(BasicGroupItemData.ITEM_THREE, this.itemThree)
put(BasicGroupItemData.ITEM_FOUR, this.itemFour)
put(BasicGroupItemData.ITEM_FIVE, this.itemFive)
put(BasicGroupItemData.ITEM_SIX, this.itemSix)
put(BasicGroupItemData.ITEM_SEVEN, this.itemSeven)
put(BasicGroupItemData.ITEM_EIGHT, this.itemEight)
put(BasicGroupItemData.ITEM_NINE, this.itemNine)
put(BasicGroupItemData.ITEM_TEN, this.itemTen)

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
add(this.itemOne)
add(this.itemTwo)
add(this.itemThree)
add(this.itemFour)
add(this.itemFive)
add(this.itemSix)
add(this.itemSeven)
add(this.itemEight)
add(this.itemNine)
add(this.itemTen)
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
                
            

