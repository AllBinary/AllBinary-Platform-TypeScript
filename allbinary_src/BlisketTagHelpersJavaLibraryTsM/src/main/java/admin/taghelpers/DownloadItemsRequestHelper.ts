
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
        



import { HashMap } from "../../java/util/HashMap.js";

    
import { Vector } from "../../java/util/Vector.js";

    
import { PageContext } from "../../javax/servlet/jsp/PageContext.js";

    
import { AbTagData } from "../../admin/tags/AbTagData.js";

    
import { DownloadableItem } from "../../org/allbinary/business/user/commerce/inventory/item/download/DownloadableItem.js";

    
import { DownloadItemsEntityFactory } from "../../org/allbinary/data/tables/user/commerce/inventory/item/downloads/DownloadItemsEntityFactory.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonSeps } from "../../org/allbinary/string/CommonSeps.js";

    
import { HelperTag } from "../../tags/HelperTag.js";

    
import { DownloadableInventoryItemView } from "../../views/admin/inventory/download/DownloadableInventoryItemView.js";

    

export class DownloadItemsRequestHelper extends ModifyTable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly downloadableItem: DownloadableItem
public constructor (hashMap: HashMap<Any, Any>, pageContext: PageContext){

            super();
            var hashMap = hashMap
var pageContext = pageContext

    var inventoryTag: HelperTag = hashMap!.get(AbTagData.PARENT) as HelperTag;
        
        


    var inventoryItemViewParentTagHelper: InventoryItemViewParentTagHelper = InventoryItemViewParentTagHelper.getInstance()!;
        
        


    var downloadableInventoryItemView: DownloadableInventoryItemView = inventoryItemViewParentTagHelper!.getDownloadableInventoryItemView(inventoryTag)!;
        
        

this.downloadableItem= downloadableInventoryItemView!.getDownloadableItem()
}


    public insert(): string{

        try {
            
    var vector: Vector = this.downloadableItem!.toVector()!;
        
        

DownloadItemsEntityFactory.getInstance()!.getDownloadItemsEntityInstance()!.insert(vector)

    var success: string = "Successfully inserted " +this.downloadableItem!.getId() +" into downloaditems table";
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    logUtil!.put(success, this, "insert()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
} catch(e: Exception)
            {

    var error: string = "Failed to insert " +this.downloadableItem!.getId() +" into downloaditems table";
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "inserts()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public delete(): string{

        try {
            DownloadItemsEntityFactory.getInstance()!.getDownloadItemsEntityInstance()!.delete(this.downloadableItem!.getId())

    var success: string = "Successfully deleted";
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    logUtil!.put(success, this, "delete()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
} catch(e: Exception)
            {

    var error: string = "Failed to delete";
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "delete()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public update(): string{

        try {
            
    var success: string = "Update Successful";
        
        


    var values: HashMap<Any, Any> = this.downloadableItem!.toHashMap()!;
        
        

DownloadItemsEntityFactory.getInstance()!.getDownloadItemsEntityInstance()!.update(values)

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    logUtil!.put(this.downloadableItem!.getId() +CommonSeps.getInstance()!.SPACE +success, this, "update()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
} catch(e: Exception)
            {

    var error: string = "Failed to update: " +this.downloadableItem!.getId();
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "update()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}
                
            

