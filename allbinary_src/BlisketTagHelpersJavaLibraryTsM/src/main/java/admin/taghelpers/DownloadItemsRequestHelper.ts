
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
        
import { HashMap } from '../../java/util/HashMap.js';
//not GWT import const HashMap
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext
import { AbTagData } from '../../admin/tags/AbTagData.js';
//not GWT import const AbTagData
import { DownloadableItem } from '../../org/allbinary/business/user/commerce/inventory/item/download/DownloadableItem.js';
//not GWT import const DownloadableItem
import { DownloadItemsEntityFactory } from '../../org/allbinary/data/tables/user/commerce/inventory/item/downloads/DownloadItemsEntityFactory.js';
//not GWT import const DownloadItemsEntityFactory
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
import { HelperTag } from '../../tags/HelperTag.js';
//not GWT import const HelperTag
import { DownloadableInventoryItemView } from '../../views/admin/inventory/download/DownloadableInventoryItemView.js';
//not GWT import const DownloadableInventoryItemView
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ModifyTable } from './ModifyTable.js';
//not GWT import - same folder const ModifyTableimport { InventoryItemViewParentTagHelper } from './InventoryItemViewParentTagHelper.js';
//not GWT import - same folder const InventoryItemViewParentTagHelper
export class DownloadItemsRequestHelper extends ModifyTable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly downloadableItem: DownloadableItem;

public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        
    var inventoryTag: HelperTag = hashMap!.get(AbTagData.PARENT) as HelperTag;;
    

    var inventoryItemViewParentTagHelper: InventoryItemViewParentTagHelper = InventoryItemViewParentTagHelper.getInstance()!;;
    

    var downloadableInventoryItemView: DownloadableInventoryItemView = inventoryItemViewParentTagHelper!.getDownloadableInventoryItemView(inventoryTag)!;;
    
this.downloadableItem= downloadableInventoryItemView!.getDownloadableItem();
    
}


    public insert(): string{

        try {
            
    var vector: BasicArrayList = this.downloadableItem!.toVector()!;;
    
DownloadItemsEntityFactory.getInstance()!.getDownloadItemsEntityInstance()!.insert(vector);
    

    var success: string = "Successfully inserted " +this.downloadableItem!.getId() +" into downloaditems table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "insert()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to insert " +this.downloadableItem!.getId() +" into downloaditems table";;
    

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
            DownloadItemsEntityFactory.getInstance()!.getDownloadItemsEntityInstance()!.delete(this.downloadableItem!.getId());
    

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
    

    var values: HashMap<any, any> = this.downloadableItem!.toHashMap()!;;
    
DownloadItemsEntityFactory.getInstance()!.getDownloadItemsEntityInstance()!.update(values);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(this.downloadableItem!.getId() +CommonSeps.getInstance()!.SPACE +success, this, "update()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to update: " +this.downloadableItem!.getId();;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "update()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}



