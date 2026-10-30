
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

        


            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { StoreFrontInterface } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface

import { ItemInterface } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js';
//not GWT import const ItemInterface

import { MoneyException } from '../../../../../../../../org/allbinary/business/user/commerce/money/MoneyException.js';
//not GWT import const MoneyException

import { BasicDataTableInterface } from '../../../../../../../../org/allbinary/data/tables/BasicDataTableInterface.js';
//not GWT import const BasicDataTableInterface

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface InventoryEntityInterface extends BasicDataTableInterface {
        

                //@Throws(MoneyException.constructor)
            
    getItem(id: string): ItemInterface;

                //@Throws(Exception.constructor)
            
    getItems(storeFrontInterface: StoreFrontInterface): BasicArrayList;

    getWeight(id: string): string;

    deleteWhere(key: string, value: string): void;

    insert(values: BasicArrayList): void;

    update(updatedValues: HashMap<any, any>): void;

}

