
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

        


            import { Object } from '../../../java/lang/Object.js';
        
import { HashMap } from '../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } from '../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { BasicItemData } from '../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
      //not GWT import const BasicItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemData;

      
import { InventoryEntity } from '../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntity.js';
      //not GWT import const InventoryEntity = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.InventoryEntity;

      
import { StdUtil } from '../../../org/allbinary/logic/StdUtil.js';
      //not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { StringValidationUtil } from '../../../org/allbinary/logic/string/StringValidationUtil.js';
      //not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InventoryColumnUtil
            extends Object
         {
        

    private static readonly instance: InventoryColumnUtil = new InventoryColumnUtil();

    public static getInstance(): InventoryColumnUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InventoryColumnUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly basicItemData: BasicItemData = BasicItemData.getInstance()!;

    public getColumnWhereLike(inventoryEntity: InventoryEntity, category: string, column: string): BasicArrayList{
this.logUtil!.putF("Start Category: " +category, this, "getKeywords");
    

    var keywords: BasicArrayList = new BasicArrayListD();;
    

    var vectorOfHashMaps: BasicArrayList = inventoryEntity!.getAllRows()!;;
    

    var size: number = vectorOfHashMaps!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var hashMap: HashMap<any, any> = vectorOfHashMaps!.get(index) as HashMap<any, any>;;
    

    var categoryName: string = hashMap!.get(basicItemData!.CATEGORY) as string;;
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(categoryName) && categoryName!.startsWith(category))
                        
                                    {
                                    keywords.add(hashMap!.get(column));
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keywords;
    
}


}



