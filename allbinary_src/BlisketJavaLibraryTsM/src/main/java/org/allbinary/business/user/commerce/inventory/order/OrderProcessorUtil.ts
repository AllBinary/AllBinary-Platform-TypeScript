
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
        



import { OrderIdGenerator } from "../../../../../../../org/allbinary/data/generator/OrderIdGenerator.js";

    
import { OrderHistoryEntity } from "../../../../../../../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntity.js";

    
import { OrderItemsEntity } from "../../../../../../../org/allbinary/data/tables/user/commerce/inventory/order/OrderItemsEntity.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Order } from "./Order.js";

export class OrderProcessorUtil
            extends Object
         {
        

    private static readonly instance: OrderProcessorUtil = new OrderProcessorUtil();
        
        

    public static getInstance(): OrderProcessorUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly ORDER_PROCESSED: string = "Order Processed";
        
        

                //@Throws(Error::class)
            
    public process(userName: string, order: Order): string{
var userName = userName
var order = order

    var orderItems: OrderItemsEntity = new OrderItemsEntity();
        
        
;
    

    var orderHistory: OrderHistoryEntity = new OrderHistoryEntity();
        
        
;
    
order.setId(new OrderIdGenerator().
                            getNext());
    
orderItems!.insert(userName, order);
    
orderHistory!.insert(userName, order);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ORDER_PROCESSED;
    
}


}
                
            

