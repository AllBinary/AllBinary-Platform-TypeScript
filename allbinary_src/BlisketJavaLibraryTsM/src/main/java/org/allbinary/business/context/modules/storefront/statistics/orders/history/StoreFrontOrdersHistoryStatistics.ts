
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
        



import { HashMap } from "../../../../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../../../../java/util/Vector.js";

    
import { StoreFrontInterface } from "../../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { OrderHistoryInterface } from "../../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistoryInterface.js";

    
import { Money } from "../../../../../../../../../org/allbinary/business/user/commerce/money/Money.js";

    
import { OrderHistoryEntityFactory } from "../../../../../../../../../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntityFactory.js";

    
import { OrderHistoryEntityInterface } from "../../../../../../../../../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntityInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { StoreFrontOrdersHistoryStatisticsInterface } from "./StoreFrontOrdersHistoryStatisticsInterface.js";

import { StoreFrontOrdersHistoryStatisticsData } from "./StoreFrontOrdersHistoryStatisticsData.js";

export class StoreFrontOrdersHistoryStatistics
            extends Object
         implements StoreFrontOrdersHistoryStatisticsInterface {
        

    private numberOfOrdersLong: Long

    private subTotalMoney: Money

    private shippingCostMoney: Money

    private taxesMoney: Money

    private totalMoney: Money
public constructor (storeFrontInterface: StoreFrontInterface){

            super();
        var storeFrontInterface = storeFrontInterface
this.subTotalMoney= new Money();
    
this.shippingCostMoney= new Money();
    
this.taxesMoney= new Money();
    
this.totalMoney= new Money();
    

    var orderHistoryEntityInterface: OrderHistoryEntityInterface = OrderHistoryEntityFactory.getInstance()!;
        
        
;
    

    var orderHistoryInterfaceVector: Vector = orderHistoryEntityInterface!.getStoreOrders(storeFrontInterface)!;
        
        
;
    

    var numberOfOrders: number = 0;
        
        
;
    

    var orderHistoryInterface: OrderHistoryInterface
;
    

    var size: number = orderHistoryInterfaceVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
orderHistoryInterface= orderHistoryInterfaceVector!.get(index); as OrderHistoryInterface;
    
numberOfOrders= numberOfOrders +1;
    
this.subTotalMoney!.add(orderHistoryInterface!.getSubTotal());
    
this.shippingCostMoney!.add(orderHistoryInterface!.getShippingCost());
    
this.taxesMoney!.add(orderHistoryInterface!.getTaxes());
    
this.totalMoney!.add(orderHistoryInterface!.getTotal());
    
}

this.numberOfOrdersLong= numberOfOrders as Long;
    
}


    public getNumberOfOrders(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.numberOfOrdersLong;
    
}


    public getSubTotal(): Money{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.subTotalMoney;
    
}


    public getShippingCost(): Money{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.shippingCostMoney;
    
}


    public getTaxes(): Money{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.taxesMoney;
    
}


    public getTotal(): Money{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.totalMoney;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    

    var storeFrontOrdersHistoryStatisticsData: StoreFrontOrdersHistoryStatisticsData = StoreFrontOrdersHistoryStatisticsData.getInstance()!;
        
        
;
    
hashMap!.put(storeFrontOrdersHistoryStatisticsData!.NUMBEROFORDERS, this.getNumberOfOrders()!.toString());
    
hashMap!.put(storeFrontOrdersHistoryStatisticsData!.SUBTOTAL, this.getSubTotal()!.toString());
    
hashMap!.put(storeFrontOrdersHistoryStatisticsData!.SHIPPINGCOST, this.getShippingCost()!.toString());
    
hashMap!.put(storeFrontOrdersHistoryStatisticsData!.TAXES, this.getTaxes()!.toString());
    
hashMap!.put(storeFrontOrdersHistoryStatisticsData!.TOTAL, this.getTotal()!.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    public toVector(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

