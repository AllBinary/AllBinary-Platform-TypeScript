
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



import { DestroyableInterface } from "../../../../org/allbinary/game/combat/destroy/DestroyableInterface.js";

    
import { GroupInterfaceCompositeInterface } from "../../../../org/allbinary/game/identification/GroupInterfaceCompositeInterface.js";

    
import { GameKeyEventSourceInterface } from "../../../../org/allbinary/game/input/GameKeyEventSourceInterface.js";

    
import { WaypointLayerInterface } from "../../../../org/allbinary/game/layer/waypoint/WaypointLayerInterface.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

interface PathFindingLayerInterface extends WaypointLayerInterface, GameKeyEventSourceInterface, GroupInterfaceCompositeInterface, DestroyableInterface {
        

                @Throws(Exception::class)
            
    getEndGeographicMapCellPositionList(): BasicArrayList

    shouldHandleStartSameAsEnd(): boolean

    getGeographicMapCellPositionArea(): GeographicMapCellPositionAreaBase

    getHudPaintable(): SelectionHudPaintable

                @Throws(Exception::class)
            
    handleCost(ownerLayer: PathFindingLayerInterface)

    getParentLayer(): PathFindingLayerInterface

    getRTSLayer2LogHelper(): RTSLayer2LogHelper

                @Throws(Exception::class)
            
    setTarget(targetGameLayer: PathFindingLayerInterface)

}
                
            

