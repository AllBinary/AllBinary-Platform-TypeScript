
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
        



import { Money } from "../../../../../../../../org/allbinary/business/user/commerce/money/Money.js";

    
import { TableMappingInterface } from "../../../../../../../../org/allbinary/data/tables/TableMappingInterface.js";

    

export interface StoreFrontInventoryStatisticsInterface extends TableMappingInterface {
        

    public getNumber(): Long

    public getTotal(): Money

}
                
            

