
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
        
import { StoreFrontInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface
import { StoreFrontAdvertisementsStatistics } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/advertisements/StoreFrontAdvertisementsStatistics.js';
//not GWT import const StoreFrontAdvertisementsStatistics
import { StoreFrontAdvertisementsStatisticsInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/advertisements/StoreFrontAdvertisementsStatisticsInterface.js';
//not GWT import const StoreFrontAdvertisementsStatisticsInterface
import { StoreFrontInventoryStatistics } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/inventory/StoreFrontInventoryStatistics.js';
//not GWT import const StoreFrontInventoryStatistics
import { StoreFrontInventoryStatisticsInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/inventory/StoreFrontInventoryStatisticsInterface.js';
//not GWT import const StoreFrontInventoryStatisticsInterface
import { StoreFrontOrdersHistoryStatistics } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/orders/history/StoreFrontOrdersHistoryStatistics.js';
//not GWT import const StoreFrontOrdersHistoryStatistics
import { StoreFrontOrdersHistoryStatisticsInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/orders/history/StoreFrontOrdersHistoryStatisticsInterface.js';
//not GWT import const StoreFrontOrdersHistoryStatisticsInterface
import { StoreFrontUsersStatistics } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/users/StoreFrontUsersStatistics.js';
//not GWT import const StoreFrontUsersStatistics
import { StoreFrontUsersStatisticsInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/users/StoreFrontUsersStatisticsInterface.js';
//not GWT import const StoreFrontUsersStatisticsInterface
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StoreFrontStatisticsInterface } from './StoreFrontStatisticsInterface.js';
//not GWT import - same folder const StoreFrontStatisticsInterface
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



