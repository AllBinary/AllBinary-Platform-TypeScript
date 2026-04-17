
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
        



import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { RotationAnimation } from "../../../../org/allbinary/animation/RotationAnimation.js";

    
import { LayerInterface } from "../../../../org/allbinary/layer/LayerInterface.js";

    
import { BasicDecimal } from "../../../../org/allbinary/logic/math/BasicDecimal.js";

    
import { GeographicMapCellHistory } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js";

    
import { GeographicMapCellPositionTracking } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionTracking.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { VehiclePropertiesCompositeInterface } from "./VehiclePropertiesCompositeInterface.js";

export interface VehicleLayerInterface extends LayerInterface, VehiclePropertiesCompositeInterface {
        

    getGameKeyEventList(): BasicArrayList

    getSpeedBasicDecimal(): BasicDecimal

    isReadyForExplosion(): boolean

    getRotationAnimationInterface(): RotationAnimation

    setRotationAnimationInterface(animationInterface: RotationAnimation)

    isDestroyed(): boolean

    isFinish(): boolean

    getFinalPosition(): number

                //@Throws(Error::class)
            
    handleFinish()

    getGeographicMapCellPositionTracking(): GeographicMapCellPositionTracking

    getGeographicMapCellHistoryArray(): GeographicMapCellHistory[]

    setGeographicMapCellHistoryArray(geographicMapCellHistory: GeographicMapCellHistory[])

}
                
            

