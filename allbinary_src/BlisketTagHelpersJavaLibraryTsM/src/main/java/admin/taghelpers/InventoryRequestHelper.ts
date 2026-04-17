
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

    
import { BasicItemData } from "../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js";

    
import { ItemInterface } from "../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js";

    
import { TableMappingInterface } from "../../org/allbinary/data/tables/TableMappingInterface.js";

    
import { InventoryEntityFactory } from "../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../org/allbinary/logic/string/StringMaker.js";

    
import { HelperTag } from "../../tags/HelperTag.js";

    
import { InventoryItemView } from "../../views/admin/inventory/InventoryItemView.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ModifyTable } from "./ModifyTable.js";

import { InventoryItemViewParentTagHelper } from "./InventoryItemViewParentTagHelper.js";

export class InventoryRequestHelper extends ModifyTable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly itemInterface: ItemInterface
public constructor (propertiesHashMap: HashMap<any, any>, pageContext: PageContext){

            super();
            var propertiesHashMap = propertiesHashMap
var pageContext = pageContext

    var inventoryTag: HelperTag = propertiesHashMap!.get(AbTagData.PARENT);

                         as HelperTag;
        
        
;
    

    var itemView: InventoryItemView = InventoryItemViewParentTagHelper.getInstance()!.getInventoryItemView(inventoryTag)!;
        
        
;
    
this.itemInterface= itemView!.getItemInterface();
    
}


                //@Throws(Error::class)
            
    public insert(): string{

        try {
            
    var dataMappingInterface: TableMappingInterface = this.getItemInterface();

                         as TableMappingInterface;
        
        
;
    

    var values: Vector = dataMappingInterface!.toVector()!;
        
        
;
    
InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!.insert(values);
    

    var success: string = "Successfully Added Product";
        
        
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

    var error: string = "Failed to add item to Inventory";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "insert()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public delete(): string{

        try {
            
    var dataMappingInterface: TableMappingInterface = this.getItemInterface();

                         as TableMappingInterface;
        
        
;
    

    var id: string = dataMappingInterface!.getKey();

                         as String;
        
        
;
    
InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!.deleteWhere(BasicItemData.ID, id);
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Successfully Removed the item with ");
    
stringBuffer!.append(BasicItemData.ID);
    
stringBuffer!.append("=");
    
stringBuffer!.append(id);
    
stringBuffer!.append(" from to the Inventory table");
    

    var success: string = stringBuffer!.toString()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, tagStrings!.DO_START_TAG);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to remove item with from Inventory";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, tagStrings!.DO_START_TAG, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public update(): string{

        try {
            this.delete();
    
this.insert();
    

    var success: string = "Item Successfully Updated";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "update()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed To Update Item";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "update()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public getItemInterface(): ItemInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return itemInterface;
    
}


}
                
            

