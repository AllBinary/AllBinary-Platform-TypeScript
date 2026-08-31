
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
        
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
import { RotationAnimation } from '../../../../org/allbinary/animation/RotationAnimation.js';
      //not GWT import const RotationAnimation = globalThis.org.allbinary.animation.RotationAnimation;

      
import { LayerInterface } from '../../../../org/allbinary/layer/LayerInterface.js';
      //not GWT import const LayerInterface = globalThis.org.allbinary.layer.LayerInterface;

      
//not plain js import { BasicDecimal } from '../../../../org/allbinary/logic/math/BasicDecimal.js';
      const BasicDecimal = globalThis.org.allbinary.logic.math.BasicDecimal;

      
import { GeographicMapCellHistory } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js';
      //not GWT import const GeographicMapCellHistory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellHistory;

      
import { GeographicMapCellPositionTracking } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionTracking.js';
      //not GWT import const GeographicMapCellPositionTracking = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPositionTracking;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { VehiclePropertiesCompositeInterface } from './VehiclePropertiesCompositeInterface.js';
//not GWT import const  = globalThis.org.allbinary.game.layer.VehiclePropertiesCompositeInterface;

                
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



