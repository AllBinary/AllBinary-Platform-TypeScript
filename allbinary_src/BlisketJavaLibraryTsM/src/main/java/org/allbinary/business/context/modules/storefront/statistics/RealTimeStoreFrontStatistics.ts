
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
        



import { StoreFrontInterface } from "../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { StoreFrontAdvertisementsStatistics } from "../../../../../../../org/allbinary/business/context/modules/storefront/statistics/advertisements/StoreFrontAdvertisementsStatistics.js";

    
import { StoreFrontAdvertisementsStatisticsInterface } from "../../../../../../../org/allbinary/business/context/modules/storefront/statistics/advertisements/StoreFrontAdvertisementsStatisticsInterface.js";

    
import { StoreFrontInventoryStatistics } from "../../../../../../../org/allbinary/business/context/modules/storefront/statistics/inventory/StoreFrontInventoryStatistics.js";

    
import { StoreFrontInventoryStatisticsInterface } from "../../../../../../../org/allbinary/business/context/modules/storefront/statistics/inventory/StoreFrontInventoryStatisticsInterface.js";

    
import { StoreFrontOrdersHistoryStatistics } from "../../../../../../../org/allbinary/business/context/modules/storefront/statistics/orders/history/StoreFrontOrdersHistoryStatistics.js";

    
import { StoreFrontOrdersHistoryStatisticsInterface } from "../../../../../../../org/allbinary/business/context/modules/storefront/statistics/orders/history/StoreFrontOrdersHistoryStatisticsInterface.js";

    
import { StoreFrontUsersStatistics } from "../../../../../../../org/allbinary/business/context/modules/storefront/statistics/users/StoreFrontUsersStatistics.js";

    
import { StoreFrontUsersStatisticsInterface } from "../../../../../../../org/allbinary/business/context/modules/storefront/statistics/users/StoreFrontUsersStatisticsInterface.js";

    

export class RealTimeStoreFrontStatistics
            extends Object
        
                , StoreFrontStatisticsInterface {
        

    private storeFrontAdvertisementsStatisticsInterface: StoreFrontAdvertisementsStatisticsInterface

    private storeFrontUsersStatisticsInterface: StoreFrontUsersStatisticsInterface

    private storeFrontInventoryStatisticsInterface: StoreFrontInventoryStatisticsInterface

    private storeFrontOrderHistoryStatisticsInterface: StoreFrontOrdersHistoryStatisticsInterface
public constructor (storeFrontInterface: StoreFrontInterface){

            super();
            var storeFrontInterface = storeFrontInterface
this.storeFrontAdvertisementsStatisticsInterface= StoreFrontAdvertisementsStatistics(storeFrontInterface) as StoreFrontAdvertisementsStatisticsInterface;
    
this.storeFrontUsersStatisticsInterface= StoreFrontUsersStatistics(storeFrontInterface) as StoreFrontUsersStatisticsInterface;
    
this.storeFrontInventoryStatisticsInterface= StoreFrontInventoryStatistics(storeFrontInterface) as StoreFrontInventoryStatisticsInterface;
    
this.storeFrontOrderHistoryStatisticsInterface= StoreFrontOrdersHistoryStatistics(storeFrontInterface) as StoreFrontOrdersHistoryStatisticsInterface;
    
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
                
            

