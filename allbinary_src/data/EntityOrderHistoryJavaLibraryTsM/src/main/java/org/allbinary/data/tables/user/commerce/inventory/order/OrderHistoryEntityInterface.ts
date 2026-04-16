
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

    
import { Order } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/order/Order.js";

    
import { OrderHistory } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistory.js";

    
import { BasicDataTableInterface } from "../../../../../../../../org/allbinary/data/tables/BasicDataTableInterface.js";

    

export interface OrderHistoryEntityInterface extends BasicDataTableInterface {
        

    public insert(userName: string, order: Order)

    public setStatus(orderId: string, status: string)

    public setPaymentMethod(orderId: string, status: string)

                //@Throws(Error::class)
            
    public getStoreOrders(storeFrontInterface: StoreFrontInterface): Vector

                //@Throws(Error::class)
            
    public getOrders(userName: string): Vector

                //@Throws(Error::class)
            
    public getOrders(status: string, fromDate: string, toDate: string): Vector

                //@Throws(Error::class)
            
    public getOrder(id: string): OrderHistory

                //@Throws(Error::class)
            
    public update(whereHashMap: HashMap<any, any>, orderHashMap: HashMap<any, any>)

}
                
            

