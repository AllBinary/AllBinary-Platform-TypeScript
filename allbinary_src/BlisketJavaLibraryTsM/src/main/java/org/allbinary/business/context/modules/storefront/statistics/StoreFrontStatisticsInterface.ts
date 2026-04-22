
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
        



import { StoreFrontAdvertisementsStatisticsInterface } from "../../../../../../../org/allbinary/business/context/modules/storefront/statistics/advertisements/StoreFrontAdvertisementsStatisticsInterface.js";

    
import { StoreFrontInventoryStatisticsInterface } from "../../../../../../../org/allbinary/business/context/modules/storefront/statistics/inventory/StoreFrontInventoryStatisticsInterface.js";

    
import { StoreFrontOrdersHistoryStatisticsInterface } from "../../../../../../../org/allbinary/business/context/modules/storefront/statistics/orders/history/StoreFrontOrdersHistoryStatisticsInterface.js";

    
import { StoreFrontUsersStatisticsInterface } from "../../../../../../../org/allbinary/business/context/modules/storefront/statistics/users/StoreFrontUsersStatisticsInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface StoreFrontStatisticsInterface {
        

    public getAdvertisements(): StoreFrontAdvertisementsStatisticsInterface

    public getUsers(): StoreFrontUsersStatisticsInterface

    public getInventory(): StoreFrontInventoryStatisticsInterface

    public getOrders(): StoreFrontOrdersHistoryStatisticsInterface

}
                
            

