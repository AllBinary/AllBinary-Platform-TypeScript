
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

        


            import { Object } from '../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../../../../java/lang/Integer.js';
        
            import { Long } from '../../../../../../../../java/lang/Long.js';
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } from '../../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { StoreFrontInterface } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      //not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { ItemInterface } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js';
      //not GWT import const ItemInterface = globalThis.org.allbinary.business.user.commerce.inventory.item.ItemInterface;

      
import { Money } from '../../../../../../../../org/allbinary/business/user/commerce/money/Money.js';
      //not GWT import const Money = globalThis.org.allbinary.business.user.commerce.money.Money;

      
import { InventoryEntityFactory } from '../../../../../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js';
      //not GWT import const InventoryEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.InventoryEntityFactory;

      
import { InventoryEntityInterface } from '../../../../../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityInterface.js';
      //not GWT import const InventoryEntityInterface = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.InventoryEntityInterface;

      
//not plain js import { StdUtil } from '../../../../../../../../org/allbinary/logic/StdUtil.js';
      const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StoreFrontInventoryStatisticsInterface } from './StoreFrontInventoryStatisticsInterface.js';
//not GWT import const StoreFrontInventoryStatisticsInterface = globalThis.org.allbinary.business.context.modules.storefront.statistics.inventory.StoreFrontInventoryStatisticsInterface;

                import { StoreFrontInventoryStatisticsData } from './StoreFrontInventoryStatisticsData.js';
//not GWT import const StoreFrontInventoryStatisticsData = globalThis.org.allbinary.business.context.modules.storefront.statistics.inventory.StoreFrontInventoryStatisticsData;

                
export class StoreFrontInventoryStatistics
            extends Object
         implements StoreFrontInventoryStatisticsInterface {
        

    private totalNumberOfItems: number= 0;

    private totalInventorySaleValueMoney: Money;

public constructor (storeFrontInterface: StoreFrontInterface){

            super();
        this.totalInventorySaleValueMoney= new Money();
    

    var inventoryEntityInterface: InventoryEntityInterface = InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!;;
    

    var itemVector: BasicArrayList = inventoryEntityInterface!.getItems(storeFrontInterface)!;;
    

    var size: number = itemVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var itemInterface: ItemInterface = itemVector!.get(index) as ItemInterface;;
    

    var numberInStock: number = Integer.valueOf(itemInterface!.getNumber())!.intValue()!;;
    
this.totalNumberOfItems= this.totalNumberOfItems +numberInStock;
    

    var itemPriceMoney: Money = itemInterface!.getPrice()!;;
    
itemPriceMoney!.multiply(numberInStock);
    
this.totalInventorySaleValueMoney!.add(itemPriceMoney!.toString());
    
}

}


    public getNumber(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Long(this.totalNumberOfItems);
    
}


    public getTotal(): Money{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.totalInventorySaleValueMoney;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
hashMap!.put(StoreFrontInventoryStatisticsData.getInstance()!.NUMBEROFITEMS, this.getNumber()!.toString());
    
hashMap!.put(StoreFrontInventoryStatisticsData.getInstance()!.TOTALVALUE, this.getTotal()!.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    public toVector(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}



