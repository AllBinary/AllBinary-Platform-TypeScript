
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
        
//not game specific package import { HashMap } from '../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Set } from '../../../../../../../java/util/Set.js';
      const Set = globalThis.java.util.Set;

      
//not game specific package import { Money } from '../../../../../../../org/allbinary/business/user/commerce/money/Money.js';
      const Money = globalThis.org.allbinary.business.user.commerce.money.Money;

      
//not game specific package import { MoneyException } from '../../../../../../../org/allbinary/business/user/commerce/money/MoneyException.js';
      const MoneyException = globalThis.org.allbinary.business.user.commerce.money.MoneyException;

      
















                                        
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
                
            

