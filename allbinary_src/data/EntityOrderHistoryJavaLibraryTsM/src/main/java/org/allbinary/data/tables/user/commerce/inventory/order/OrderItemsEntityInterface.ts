
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
        



//not game specific package import { Vector } from '../../../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { BasketReview } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/basket/BasketReview.js';
      const BasketReview = globalThis.org.allbinary.business.user.commerce.inventory.basket.BasketReview;

      
//not game specific package import { OrderInterface } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderInterface.js';
      const OrderInterface = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderInterface;

      
//not game specific package import { BasicDataTableInterface } from '../../../../../../../../org/allbinary/data/tables/BasicDataTableInterface.js';
      const BasicDataTableInterface = globalThis.org.allbinary.data.tables.BasicDataTableInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface OrderItemsEntityInterface extends BasicDataTableInterface {
        

    setStatus(orderId: string, groupId: string, status: string)

    isEverythingShipped(orderId: string): boolean

    getBasketReview(orderId: string): BasketReview

    insert(userName: string, order: OrderInterface)

    insert(values: Vector)

}
                
            

