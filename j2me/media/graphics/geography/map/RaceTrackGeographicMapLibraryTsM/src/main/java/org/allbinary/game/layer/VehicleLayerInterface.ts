
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { RotationAnimation } from '../../../../org/allbinary/animation/RotationAnimation.js';
      const RotationAnimation = globalThis.org.allbinary.animation.RotationAnimation;

      
//not game specific package import { LayerInterface } from '../../../../org/allbinary/layer/LayerInterface.js';
      const LayerInterface = globalThis.org.allbinary.layer.LayerInterface;

      
//not game specific package import { BasicDecimal } from '../../../../org/allbinary/logic/math/BasicDecimal.js';
      const BasicDecimal = globalThis.org.allbinary.logic.math.BasicDecimal;

      
//not game specific package import { GeographicMapCellHistory } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js';
      const GeographicMapCellHistory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellHistory;

      
//not game specific package import { GeographicMapCellPositionTracking } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionTracking.js';
      const GeographicMapCellPositionTracking = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPositionTracking;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { VehiclePropertiesCompositeInterface } from './VehiclePropertiesCompositeInterface.js';

export interface VehicleLayerInterface extends LayerInterface, VehiclePropertiesCompositeInterface {
        

    getGameKeyEventList(): BasicArrayList

    getSpeedBasicDecimal(): BasicDecimal

    isReadyForExplosion(): boolean

    getRotationAnimationInterface(): RotationAnimation

    setRotationAnimationInterface(animationInterface: RotationAnimation)

    isDestroyed(): boolean

    isFinish(): boolean

    getFinalPosition(): number

                //@Throws(Exception.constructor)
            
    handleFinish()

    getGeographicMapCellPositionTracking(): GeographicMapCellPositionTracking

    getGeographicMapCellHistoryArray(): GeographicMapCellHistory[]

    setGeographicMapCellHistoryArray(geographicMapCellHistory: GeographicMapCellHistory[])

}



