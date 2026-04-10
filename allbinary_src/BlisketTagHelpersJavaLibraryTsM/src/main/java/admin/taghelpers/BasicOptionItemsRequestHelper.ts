
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

    
import { BasicOptionItemData } from "../../org/allbinary/business/user/commerce/inventory/item/option/BasicOptionItemData.js";

    
import { BasicOptionItemsEntityFactory } from "../../org/allbinary/data/tables/user/commerce/inventory/item/options/BasicOptionItemsEntityFactory.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class BasicOptionItemsRequestHelper extends ModifyTable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private request: HttpServletRequest

    private id: string

    private optionOneTitle: string

    private defaultOptionItem: string

    private defaultOptionValue: string

    private optionItem: Vector

    private optionValue: Vector

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
this.optionItem= Vector()
this.optionValue= Vector()
this.id= request.getParameter(BasicItemData.ID)
this.optionOneTitle= request.getParameter(BasicOptionItemData.OPTION_ONE_TITLE)
this.defaultOptionItem= request.getParameter(BasicOptionItemData.DEFAULT_OPTION_ITEM)
this.defaultOptionValue= request.getParameter(BasicOptionItemData.DEFAULT_OPTION_VALUE)
add(request.getParameter(BasicOptionItemData.OPTION_ONE_ONE_ITEM))
add(request.getParameter(BasicOptionItemData.OPTION_ONE_ONE_VALUE))
add(request.getParameter(BasicOptionItemData.OPTION_ONE_TWO_ITEM))
add(request.getParameter(BasicOptionItemData.OPTION_ONE_TWO_VALUE))
add(request.getParameter(BasicOptionItemData.OPTION_ONE_THREE_ITEM))
add(request.getParameter(BasicOptionItemData.OPTION_ONE_THREE_VALUE))
add(request.getParameter(BasicOptionItemData.OPTION_ONE_FOUR_ITEM))
add(request.getParameter(BasicOptionItemData.OPTION_ONE_FOUR_VALUE))
add(request.getParameter(BasicOptionItemData.OPTION_ONE_FIVE_ITEM))
add(request.getParameter(BasicOptionItemData.OPTION_ONE_FIVE_VALUE))
add(request.getParameter(BasicOptionItemData.OPTION_ONE_SIX_ITEM))
add(request.getParameter(BasicOptionItemData.OPTION_ONE_SIX_VALUE))
add(request.getParameter(BasicOptionItemData.OPTION_ONE_SEVEN_ITEM))
add(request.getParameter(BasicOptionItemData.OPTION_ONE_SEVEN_VALUE))
add(request.getParameter(BasicOptionItemData.OPTION_ONE_EIGHT_ITEM))
add(request.getParameter(BasicOptionItemData.OPTION_ONE_EIGHT_VALUE))
add(request.getParameter(BasicOptionItemData.OPTION_ONE_NINE_ITEM))
add(request.getParameter(BasicOptionItemData.OPTION_ONE_NINE_VALUE))
this.timeEntered= request.getParameter(EntryData.getInstance()!.TIMECREATED)
this.lastModified= request.getParameter(EntryData.getInstance()!.LASTMODIFIED)
}


    getHashMap(): HashMap<Any, Any>{

    var values: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(BasicItemData.ID, id)
put(BasicOptionItemData.OPTION_ONE_ONE_ITEM, this.optionItem!.get(0))
put(BasicOptionItemData.OPTION_ONE_ONE_VALUE, this.optionValue!.get(0))
put(BasicOptionItemData.OPTION_ONE_TWO_ITEM, this.optionItem!.get(1))
put(BasicOptionItemData.OPTION_ONE_TWO_VALUE, this.optionValue!.get(1))
put(BasicOptionItemData.OPTION_ONE_THREE_ITEM, this.optionItem!.get(2))
put(BasicOptionItemData.OPTION_ONE_THREE_VALUE, this.optionValue!.get(2))
put(BasicOptionItemData.OPTION_ONE_FOUR_ITEM, this.optionItem!.get(3))
put(BasicOptionItemData.OPTION_ONE_FOUR_VALUE, this.optionValue!.get(3))
put(BasicOptionItemData.OPTION_ONE_FIVE_ITEM, this.optionItem!.get(4))
put(BasicOptionItemData.OPTION_ONE_FIVE_VALUE, this.optionValue!.get(4))
put(BasicOptionItemData.OPTION_ONE_SIX_ITEM, this.optionItem!.get(5))
put(BasicOptionItemData.OPTION_ONE_SIX_VALUE, this.optionValue!.get(5))
put(BasicOptionItemData.OPTION_ONE_SEVEN_ITEM, this.optionItem!.get(6))
put(BasicOptionItemData.OPTION_ONE_SEVEN_VALUE, this.optionValue!.get(6))
put(BasicOptionItemData.OPTION_ONE_EIGHT_ITEM, this.optionItem!.get(7))
put(BasicOptionItemData.OPTION_ONE_EIGHT_VALUE, this.optionValue!.get(7))
put(BasicOptionItemData.OPTION_ONE_NINE_ITEM, this.optionItem!.get(8))
put(BasicOptionItemData.OPTION_ONE_NINE_VALUE, this.optionValue!.get(8))

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
        
        

add(id)

    var size: number = this.optionValue!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
add(this.optionValue!.get(index))
add(this.optionItem!.get(index))
}

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
                
            

