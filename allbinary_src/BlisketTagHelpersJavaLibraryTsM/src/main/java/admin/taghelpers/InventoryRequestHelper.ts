
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
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext

import { AbTagData } from '../../admin/tags/AbTagData.js';
//not GWT import const AbTagData

import { BasicItemData } from '../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
//not GWT import const BasicItemData

import { ItemInterface } from '../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js';
//not GWT import const ItemInterface

import { TableMappingInterface } from '../../org/allbinary/data/tables/TableMappingInterface.js';
//not GWT import const TableMappingInterface

import { InventoryEntityFactory } from '../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js';
//not GWT import const InventoryEntityFactory

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { HelperTag } from '../../tags/HelperTag.js';
//not GWT import const HelperTag

import { InventoryItemView } from '../../views/admin/inventory/InventoryItemView.js';
//not GWT import const InventoryItemView

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ModifyTable } from './ModifyTable.js';
//sameFolderImports - not GWT import - same folder const ModifyTable
import { InventoryItemViewParentTagHelper } from './InventoryItemViewParentTagHelper.js';
//sameFolderImports - not GWT import - same folder const InventoryItemViewParentTagHelper

export class InventoryRequestHelper extends ModifyTable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly basicItemData: BasicItemData = BasicItemData.getInstance()!;

    private readonly itemInterface: ItemInterface;

public constructor (propertiesHashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        
    let inventoryTag: HelperTag = propertiesHashMap!.get(AbTagData.PARENT) as HelperTag;;
    

    let itemView: InventoryItemView = InventoryItemViewParentTagHelper.getInstance()!.getInventoryItemView(inventoryTag)!;;
    
this.itemInterface= itemView!.getItemInterface();
    
}


                //@Throws(Exception.constructor)
            
    public insert(): string{

 try { 
    let dataMappingInterface: TableMappingInterface = this.getItemInterface() as TableMappingInterface;;
    

    let values: BasicArrayList = dataMappingInterface!.toVector()!;;
    
InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!.insert(values);
    

    let success: string = "Successfully Added Product";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "insert()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to add item to Inventory";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "insert()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


    public delete(): string{

 try { 
    let dataMappingInterface: TableMappingInterface = this.getItemInterface() as TableMappingInterface;;
    

    let id: string = dataMappingInterface!.getKey() as string;;
    
InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!.deleteWhere(this.basicItemData!.ID, id);
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Successfully Removed the item with ");
    
stringBuffer!.append(this.basicItemData!.ID);
    
stringBuffer!.append("=");
    
stringBuffer!.append(id);
    
stringBuffer!.append(" from to the Inventory table");
    

    let success: string = stringBuffer!.toString()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, tagStrings!.DO_START_TAG);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to remove item with from Inventory";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, tagStrings!.DO_START_TAG, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


    public update(): string{

 try { this.delete();
    
this.insert();
    

    let success: string = "Item Successfully Updated";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "update()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed To Update Item";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "update()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


    public getItemInterface(): ItemInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.itemInterface;
    
}


}

