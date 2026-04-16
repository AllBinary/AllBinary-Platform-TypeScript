
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
        



import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../../../java/util/Vector.js";

    
import { StoreFrontInterface } from "../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { ItemInterface } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js";

    
import { MoneyException } from "../../../../../../../../org/allbinary/business/user/commerce/money/MoneyException.js";

    
import { BasicDataTableInterface } from "../../../../../../../../org/allbinary/data/tables/BasicDataTableInterface.js";

    

export interface InventoryEntityInterface extends BasicDataTableInterface {
        

                //@Throws(MoneyException::class)
            
    public getItem(id: string): ItemInterface

                //@Throws(Error::class)
            
    public getItems(storeFrontInterface: StoreFrontInterface): Vector

    public getWeight(id: string): string

    public deleteWhere(key: string, value: string)

    public insert(values: Vector)

    public update(updatedValues: HashMap<any, any>)

}
                
            

