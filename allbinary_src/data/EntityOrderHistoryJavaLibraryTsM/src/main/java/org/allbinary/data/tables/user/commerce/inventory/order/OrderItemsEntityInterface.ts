
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
        



import { Vector } from "../../../../../../../../java/util/Vector.js";

    
import { BasketReview } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/basket/BasketReview.js";

    
import { OrderInterface } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderInterface.js";

    
import { BasicDataTableInterface } from "../../../../../../../../org/allbinary/data/tables/BasicDataTableInterface.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface OrderItemsEntityInterface extends BasicDataTableInterface {
        

    public setStatus(orderId: string, groupId: string, status: string)

    public isEverythingShipped(orderId: string): boolean

    public getBasketReview(orderId: string): BasketReview

    public insert(userName: string, order: OrderInterface)

    public insert(values: Vector)

}
                
            

