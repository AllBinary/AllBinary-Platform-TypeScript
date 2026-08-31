
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
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Vector } from '../../../../../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { StoreFrontInterface } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      //not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { Order } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/order/Order.js';
      //not GWT import const Order = globalThis.org.allbinary.business.user.commerce.inventory.order.Order;

      
import { OrderHistory } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistory.js';
      //not GWT import const OrderHistory = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderHistory;

      
import { BasicDataTableInterface } from '../../../../../../../../org/allbinary/data/tables/BasicDataTableInterface.js';
      //not GWT import const BasicDataTableInterface = globalThis.org.allbinary.data.tables.BasicDataTableInterface;

      
















                                        
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



