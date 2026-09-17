
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

        


import { StoreFrontAdvertisementsStatisticsInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/advertisements/StoreFrontAdvertisementsStatisticsInterface.js';
//not GWT import const StoreFrontAdvertisementsStatisticsInterface

import { StoreFrontInventoryStatisticsInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/inventory/StoreFrontInventoryStatisticsInterface.js';
//not GWT import const StoreFrontInventoryStatisticsInterface

import { StoreFrontOrdersHistoryStatisticsInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/orders/history/StoreFrontOrdersHistoryStatisticsInterface.js';
//not GWT import const StoreFrontOrdersHistoryStatisticsInterface

import { StoreFrontUsersStatisticsInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/users/StoreFrontUsersStatisticsInterface.js';
//not GWT import const StoreFrontUsersStatisticsInterface

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface StoreFrontStatisticsInterface {
        

    getAdvertisements(): StoreFrontAdvertisementsStatisticsInterface

    getUsers(): StoreFrontUsersStatisticsInterface

    getInventory(): StoreFrontInventoryStatisticsInterface

    getOrders(): StoreFrontOrdersHistoryStatisticsInterface

}



