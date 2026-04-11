
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
        
import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    

//import { Vector } from "../../../../../../../../java/util/Vector.js";

    
import { StoreFrontInterface } from "../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { ItemInterface } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js";

    
import { Money } from "../../../../../../../../org/allbinary/business/user/commerce/money/Money.js";

    
import { InventoryEntityFactory } from "../../../../../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js";

    
import { InventoryEntityInterface } from "../../../../../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityInterface.js";

    

export class StoreFrontInventoryStatistics
            extends Object
        
                , StoreFrontInventoryStatisticsInterface {
        

    private totalNumberOfItems: number= 0

    private totalInventorySaleValueMoney: Money
public constructor (storeFrontInterface: StoreFrontInterface){

            super();
            var storeFrontInterface = storeFrontInterface
this.totalInventorySaleValueMoney= new Money();
    

    var inventoryEntityInterface: InventoryEntityInterface = InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!;
        
        
;
    

    var itemVector: Vector = inventoryEntityInterface!.getItems(storeFrontInterface)!;
        
        
;
    

    var size: number = itemVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var itemInterface: ItemInterface = itemVector!.get(index);

                         as ItemInterface;
        
        
;
    

    var numberInStock: number = Integer.valueOf(itemInterface!.getNumber())!.toInt()!;
        
        
;
    
this.totalNumberOfItems= this.totalNumberOfItems +numberInStock;
    

    var itemPriceMoney: Money = itemInterface!.getPrice()!;
        
        
;
    
itemPriceMoney!.multiply(numberInStock);
    
this.totalInventorySaleValueMoney!.add(itemPriceMoney!.toString());
    
}

}


    public getNumber(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.totalNumberOfItems as Long;
    
}


    public getTotal(): Money{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.totalInventorySaleValueMoney;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
hashMap!.put(StoreFrontInventoryStatisticsData.getInstance()!.NUMBEROFITEMS, this.getNumber()!.toString());
    
hashMap!.put(StoreFrontInventoryStatisticsData.getInstance()!.TOTALVALUE, this.getTotal()!.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    public toVector(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

