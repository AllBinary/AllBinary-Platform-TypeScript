
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
        
import { HashMap } from "../../../java/util/HashMap.js";

    

//import { Vector } from "../../../java/util/Vector.js";

    
import { BasicItemData } from "../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js";

    
import { InventoryEntity } from "../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntity.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringValidationUtil } from "../../../org/allbinary/logic/string/StringValidationUtil.js";

    

export class InventoryColumnUtil
            extends Object
         {
        

    private static readonly instance: InventoryColumnUtil = new InventoryColumnUtil();
        
        

    public static getInstance(): InventoryColumnUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public getColumnWhereLike(inventoryEntity: InventoryEntity, category: string, column: string): Vector{
var inventoryEntity = inventoryEntity
var category = category
var column = column
logUtil!.put("Start Category: " +category, this, "getKeywords");
    

    var keywords: Vector = new Vector();
        
        
;
    

    var vectorOfHashMaps: Vector = inventoryEntity!.getAllRows()!;
        
        
;
    

    var size: number = vectorOfHashMaps!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var hashMap: HashMap<any, any> = vectorOfHashMaps!.get(index as Object);

                         as HashMap<any, any>;
        
        
;
    

    var categoryName: string = hashMap!.get(BasicItemData.CATEGORY);

                         as String;
        
        
;
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(categoryName);

                         && categoryName!.startsWith(category))
                        
                                    {
                                    keywords.add(hashMap!.get(column as Object));
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keywords;
    
}


}
                
            

