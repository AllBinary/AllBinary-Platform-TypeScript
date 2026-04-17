
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
        



import { AllBinaryGameLayerManager } from "../../../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { AllBinaryLayerManager } from "../../../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { BasicGeographicMap } from "../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCellPosition } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface DropCellPositionGeneratorInterface {
        

    getName(): string

                //@Throws(Error::class)
            
    update(allBinaryGameLayerManager: AllBinaryGameLayerManager, geographicMapInterface: BasicGeographicMap)

                //@Throws(Error::class)
            
    processTick(allBinaryLayerManager: AllBinaryLayerManager)

                //@Throws(Error::class)
            
    isDropAllowedAt(geographicMapCellPosition: GeographicMapCellPosition): boolean

}
                
            

