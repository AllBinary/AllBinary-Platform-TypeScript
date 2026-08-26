
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
        
//not game specific package import { HashMap } from '../../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Vector } from '../../../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { StoreFrontInterface } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { Order } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/order/Order.js';
      const Order = globalThis.org.allbinary.business.user.commerce.inventory.order.Order;

      
//not game specific package import { OrderHistory } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistory.js';
      const OrderHistory = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderHistory;

      
//not game specific package import { BasicDataTableInterface } from '../../../../../../../../org/allbinary/data/tables/BasicDataTableInterface.js';
      const BasicDataTableInterface = globalThis.org.allbinary.data.tables.BasicDataTableInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface OrderHistoryEntityInterface extends BasicDataTableInterface {
        

    insert(userName: string, order: Order)

    setStatus(orderId: string, status: string)

    setPaymentMethod(orderId: string, status: string)

                //@Throws(Exception.constructor)
            
    getStoreOrders(storeFrontInterface: StoreFrontInterface): Vector

                //@Throws(Exception.constructor)
            
    getOrders(userName: string): Vector

                //@Throws(Exception.constructor)
            
    getOrders(status: string, fromDate: string, toDate: string): Vector

                //@Throws(Exception.constructor)
            
    getOrder(id: string): OrderHistory

                //@Throws(Exception.constructor)
            
    update(whereHashMap: HashMap<any, any>, orderHashMap: HashMap<any, any>)

}
                
            

