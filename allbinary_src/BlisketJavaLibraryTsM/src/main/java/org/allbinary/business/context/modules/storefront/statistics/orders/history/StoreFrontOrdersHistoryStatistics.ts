
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

        


            import { Object } from '../../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../../../../../java/lang/Long.js';
        
import { HashMap } from '../../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { StoreFrontInterface } from '../../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { OrderHistoryInterface } from '../../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistoryInterface.js';
//not GWT import const OrderHistoryInterface = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderHistoryInterface;

      
import { Money } from '../../../../../../../../../org/allbinary/business/user/commerce/money/Money.js';
//not GWT import const Money = globalThis.org.allbinary.business.user.commerce.money.Money;

      
import { OrderHistoryEntityFactory } from '../../../../../../../../../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntityFactory.js';
//not GWT import const OrderHistoryEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.inventory.order.OrderHistoryEntityFactory;

      
import { OrderHistoryEntityInterface } from '../../../../../../../../../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntityInterface.js';
//not GWT import const OrderHistoryEntityInterface = globalThis.org.allbinary.data.tables.user.commerce.inventory.order.OrderHistoryEntityInterface;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StoreFrontOrdersHistoryStatisticsInterface } from './StoreFrontOrdersHistoryStatisticsInterface.js';
//not GWT import - same folder const StoreFrontOrdersHistoryStatisticsInterface = globalThis.org.allbinary.business.context.modules.storefront.statistics.orders.history.StoreFrontOrdersHistoryStatisticsInterface;

                import { StoreFrontOrdersHistoryStatisticsData } from './StoreFrontOrdersHistoryStatisticsData.js';
//not GWT import - same folder const StoreFrontOrdersHistoryStatisticsData = globalThis.org.allbinary.business.context.modules.storefront.statistics.orders.history.StoreFrontOrdersHistoryStatisticsData;

                
export class StoreFrontOrdersHistoryStatistics
            extends Object
         implements StoreFrontOrdersHistoryStatisticsInterface {
        

    private numberOfOrdersLong: Long;

    private subTotalMoney: Money;

    private shippingCostMoney: Money;

    private taxesMoney: Money;

    private totalMoney: Money;

public constructor (storeFrontInterface: StoreFrontInterface){

            super();
        this.subTotalMoney= new Money();
    
this.shippingCostMoney= new Money();
    
this.taxesMoney= new Money();
    
this.totalMoney= new Money();
    

    var orderHistoryEntityInterface: OrderHistoryEntityInterface = OrderHistoryEntityFactory.getInstance()!;;
    

    var orderHistoryInterfaceVector: BasicArrayList = orderHistoryEntityInterface!.getStoreOrders(storeFrontInterface)!;;
    

    var numberOfOrders: number = 0;;
    

    var orderHistoryInterface: OrderHistoryInterface;;
    

    var size: number = orderHistoryInterfaceVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
orderHistoryInterface= orderHistoryInterfaceVector!.get(index) as OrderHistoryInterface;
    
numberOfOrders= numberOfOrders +1;
    
this.subTotalMoney!.add(orderHistoryInterface!.getSubTotal());
    
this.shippingCostMoney!.add(orderHistoryInterface!.getShippingCost());
    
this.taxesMoney!.add(orderHistoryInterface!.getTaxes());
    
this.totalMoney!.add(orderHistoryInterface!.getTotal());
    
}

this.numberOfOrdersLong= new Long(numberOfOrders);
    
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

    var hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    

    var storeFrontOrdersHistoryStatisticsData: StoreFrontOrdersHistoryStatisticsData = StoreFrontOrdersHistoryStatisticsData.getInstance()!;;
    
hashMap!.put(storeFrontOrdersHistoryStatisticsData!.NUMBEROFORDERS, this.getNumberOfOrders()!.toString());
    
hashMap!.put(storeFrontOrdersHistoryStatisticsData!.SUBTOTAL, this.getSubTotal()!.toString());
    
hashMap!.put(storeFrontOrdersHistoryStatisticsData!.SHIPPINGCOST, this.getShippingCost()!.toString());
    
hashMap!.put(storeFrontOrdersHistoryStatisticsData!.TAXES, this.getTaxes()!.toString());
    
hashMap!.put(storeFrontOrdersHistoryStatisticsData!.TOTAL, this.getTotal()!.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    public toVector(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}



