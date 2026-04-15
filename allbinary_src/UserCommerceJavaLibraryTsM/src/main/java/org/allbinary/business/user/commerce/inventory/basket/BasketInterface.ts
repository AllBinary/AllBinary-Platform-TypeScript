
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
        



            import HashMap from "@ohos.util.HashMap";
        
            import { Integer } from "../../../../../../../java/lang/Integer.js";
        

//import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { Set } from "../../../../../../../java/util/Set.js";

    
import { Money } from "../../../../../../../org/allbinary/business/user/commerce/money/Money.js";

    
import { MoneyException } from "../../../../../../../org/allbinary/business/user/commerce/money/MoneyException.js";

    

interface BasketInterface {
        

    public addItem(id: string, num: string)

    public removeItem(id: string)

    public adjustItem(id: string, num: string)

    public getTotalWeight(): string

    public getNumberOfItems(): Integer

    public getIds(): Set

    public getItems(): HashMap<any, any>

    public getNumberOf(product: string): Integer

                //@Throws(MoneyException::class)
            
    public getSubTotal(): Money

}
                
            

