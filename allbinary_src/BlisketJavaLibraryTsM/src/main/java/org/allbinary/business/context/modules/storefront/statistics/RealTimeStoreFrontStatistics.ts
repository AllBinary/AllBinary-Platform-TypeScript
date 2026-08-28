
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
        



            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
//not game specific package import { StoreFrontInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { StoreFrontAdvertisementsStatistics } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/advertisements/StoreFrontAdvertisementsStatistics.js';
      const StoreFrontAdvertisementsStatistics = globalThis.org.allbinary.business.context.modules.storefront.statistics.advertisements.StoreFrontAdvertisementsStatistics;

      
//not game specific package import { StoreFrontAdvertisementsStatisticsInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/advertisements/StoreFrontAdvertisementsStatisticsInterface.js';
      const StoreFrontAdvertisementsStatisticsInterface = globalThis.org.allbinary.business.context.modules.storefront.statistics.advertisements.StoreFrontAdvertisementsStatisticsInterface;

      
//not game specific package import { StoreFrontInventoryStatistics } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/inventory/StoreFrontInventoryStatistics.js';
      const StoreFrontInventoryStatistics = globalThis.org.allbinary.business.context.modules.storefront.statistics.inventory.StoreFrontInventoryStatistics;

      
//not game specific package import { StoreFrontInventoryStatisticsInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/inventory/StoreFrontInventoryStatisticsInterface.js';
      const StoreFrontInventoryStatisticsInterface = globalThis.org.allbinary.business.context.modules.storefront.statistics.inventory.StoreFrontInventoryStatisticsInterface;

      
//not game specific package import { StoreFrontOrdersHistoryStatistics } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/orders/history/StoreFrontOrdersHistoryStatistics.js';
      const StoreFrontOrdersHistoryStatistics = globalThis.org.allbinary.business.context.modules.storefront.statistics.orders.history.StoreFrontOrdersHistoryStatistics;

      
//not game specific package import { StoreFrontOrdersHistoryStatisticsInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/orders/history/StoreFrontOrdersHistoryStatisticsInterface.js';
      const StoreFrontOrdersHistoryStatisticsInterface = globalThis.org.allbinary.business.context.modules.storefront.statistics.orders.history.StoreFrontOrdersHistoryStatisticsInterface;

      
//not game specific package import { StoreFrontUsersStatistics } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/users/StoreFrontUsersStatistics.js';
      const StoreFrontUsersStatistics = globalThis.org.allbinary.business.context.modules.storefront.statistics.users.StoreFrontUsersStatistics;

      
//not game specific package import { StoreFrontUsersStatisticsInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/users/StoreFrontUsersStatisticsInterface.js';
      const StoreFrontUsersStatisticsInterface = globalThis.org.allbinary.business.context.modules.storefront.statistics.users.StoreFrontUsersStatisticsInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StoreFrontStatisticsInterface } from './StoreFrontStatisticsInterface.js';

export class RealTimeStoreFrontStatistics
            extends Object
         implements StoreFrontStatisticsInterface {
        

    private storeFrontAdvertisementsStatisticsInterface: StoreFrontAdvertisementsStatisticsInterface;

    private storeFrontUsersStatisticsInterface: StoreFrontUsersStatisticsInterface;

    private storeFrontInventoryStatisticsInterface: StoreFrontInventoryStatisticsInterface;

    private storeFrontOrderHistoryStatisticsInterface: StoreFrontOrdersHistoryStatisticsInterface;

public constructor (storeFrontInterface: StoreFrontInterface){

            super();
        this.storeFrontAdvertisementsStatisticsInterface= new StoreFrontAdvertisementsStatistics(storeFrontInterface) as StoreFrontAdvertisementsStatisticsInterface;
    
this.storeFrontUsersStatisticsInterface= new StoreFrontUsersStatistics(storeFrontInterface) as StoreFrontUsersStatisticsInterface;
    
this.storeFrontInventoryStatisticsInterface= new StoreFrontInventoryStatistics(storeFrontInterface) as StoreFrontInventoryStatisticsInterface;
    
this.storeFrontOrderHistoryStatisticsInterface= new StoreFrontOrdersHistoryStatistics(storeFrontInterface) as StoreFrontOrdersHistoryStatisticsInterface;
    
}


    public getAdvertisements(): StoreFrontAdvertisementsStatisticsInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.storeFrontAdvertisementsStatisticsInterface;
    
}


    public getUsers(): StoreFrontUsersStatisticsInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.storeFrontUsersStatisticsInterface;
    
}


    public getInventory(): StoreFrontInventoryStatisticsInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.storeFrontInventoryStatisticsInterface;
    
}


    public getOrders(): StoreFrontOrdersHistoryStatisticsInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.storeFrontOrderHistoryStatisticsInterface;
    
}


}



