
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
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Vector } from '../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
      //not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { AbTagData } from '../../admin/tags/AbTagData.js';
      //not GWT import const AbTagData = globalThis.admin.tags.AbTagData;

      
import { BasicItemData } from '../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
      //not GWT import const BasicItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemData;

      
import { ItemInterface } from '../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js';
      //not GWT import const ItemInterface = globalThis.org.allbinary.business.user.commerce.inventory.item.ItemInterface;

      
import { TableMappingInterface } from '../../org/allbinary/data/tables/TableMappingInterface.js';
      //not GWT import const TableMappingInterface = globalThis.org.allbinary.data.tables.TableMappingInterface;

      
import { InventoryEntityFactory } from '../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js';
      //not GWT import const InventoryEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.InventoryEntityFactory;

      
//not plain js import { LogUtil } from '../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { HelperTag } from '../../tags/HelperTag.js';
      //not GWT import const HelperTag = globalThis.tags.HelperTag;

      
import { InventoryItemView } from '../../views/admin/inventory/InventoryItemView.js';
      //not GWT import const InventoryItemView = globalThis.views.admin.inventory.InventoryItemView;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ModifyTable } from './ModifyTable.js';
//not GWT import const  = globalThis.admin.taghelpers.ModifyTable;

                import { InventoryItemViewParentTagHelper } from './InventoryItemViewParentTagHelper.js';
//not GWT import const  = globalThis.admin.taghelpers.InventoryItemViewParentTagHelper;

                
export class InventoryRequestHelper extends ModifyTable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly itemInterface: ItemInterface;

public constructor (propertiesHashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        
    var inventoryTag: HelperTag = propertiesHashMap!.get(AbTagData.PARENT) as HelperTag;;
    

    var itemView: InventoryItemView = InventoryItemViewParentTagHelper.getInstance()!.getInventoryItemView(inventoryTag)!;;
    
this.itemInterface= itemView!.getItemInterface();
    
}


                //@Throws(Exception.constructor)
            
    public insert(): string{

        try {
            
    var dataMappingInterface: TableMappingInterface = this.getItemInterface() as TableMappingInterface;;
    

    var values: Vector = dataMappingInterface!.toVector()!;;
    
InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!.insert(values);
    

    var success: string = "Successfully Added Product";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "insert()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to add item to Inventory";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "insert()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public delete(): string{

        try {
            
    var dataMappingInterface: TableMappingInterface = this.getItemInterface() as TableMappingInterface;;
    

    var id: string = dataMappingInterface!.getKey() as string;;
    
InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!.deleteWhere(BasicItemData.ID, id);
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Successfully Removed the item with ");
    
stringBuffer!.append(BasicItemData.ID);
    
stringBuffer!.append("=");
    
stringBuffer!.append(id);
    
stringBuffer!.append(" from to the Inventory table");
    

    var success: string = stringBuffer!.toString()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, tagStrings!.DO_START_TAG);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to remove item with from Inventory";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, tagStrings!.DO_START_TAG, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public update(): string{

        try {
            this.delete();
    
this.insert();
    

    var success: string = "Item Successfully Updated";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "update()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed To Update Item";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "update()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public getItemInterface(): ItemInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.itemInterface;
    
}


}



