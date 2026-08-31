
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

        


            import { Integer } from '../../../../../../../java/lang/Integer.js';
        
import { HashMap } from '../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Set } from '../../../../../../../java/util/Set.js';
      //not GWT import const Set = globalThis.java.util.Set;

      
import { Money } from '../../../../../../../org/allbinary/business/user/commerce/money/Money.js';
      //not GWT import const Money = globalThis.org.allbinary.business.user.commerce.money.Money;

      
import { MoneyException } from '../../../../../../../org/allbinary/business/user/commerce/money/MoneyException.js';
      //not GWT import const MoneyException = globalThis.org.allbinary.business.user.commerce.money.MoneyException;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface BasketInterface {
        

    addItem(id: string, num: string)

    removeItem(id: string)

    adjustItem(id: string, num: string)

    getTotalWeight(): string

    getNumberOfItems(): Integer

    getIds(): Set

    getItems(): HashMap<any, any>

    getNumberOf(product: string): Integer

                //@Throws(MoneyException.constructor)
            
    getSubTotal(): Money

}



