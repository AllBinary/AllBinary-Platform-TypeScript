
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
import { DestroyableInterface } from '../../../../org/allbinary/game/combat/destroy/DestroyableInterface.js';
      //not GWT import const DestroyableInterface = globalThis.org.allbinary.game.combat.destroy.DestroyableInterface;

      
import { GroupInterfaceCompositeInterface } from '../../../../org/allbinary/game/identification/GroupInterfaceCompositeInterface.js';
      //not GWT import const GroupInterfaceCompositeInterface = globalThis.org.allbinary.game.identification.GroupInterfaceCompositeInterface;

      
import { GameKeyEventSourceInterface } from '../../../../org/allbinary/game/input/GameKeyEventSourceInterface.js';
      //not GWT import const GameKeyEventSourceInterface = globalThis.org.allbinary.game.input.GameKeyEventSourceInterface;

      
import { WaypointLayerInterface } from '../../../../org/allbinary/game/layer/waypoint/WaypointLayerInterface.js';
      //not GWT import const WaypointLayerInterface = globalThis.org.allbinary.game.layer.waypoint.WaypointLayerInterface;

      
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GeographicMapCellPositionAreaBase } from './GeographicMapCellPositionAreaBase.js';
//not GWT import const  = globalThis.org.allbinary.game.layer.GeographicMapCellPositionAreaBase;

                import { SelectionHudPaintable } from './SelectionHudPaintable.js';
//not GWT import const  = globalThis.org.allbinary.game.layer.SelectionHudPaintable;

                import { RTSLayer2LogHelper } from './RTSLayer2LogHelper.js';
//not GWT import const  = globalThis.org.allbinary.game.layer.RTSLayer2LogHelper;

                
export interface PathFindingLayerInterface extends WaypointLayerInterface, GameKeyEventSourceInterface, GroupInterfaceCompositeInterface, DestroyableInterface {
        

                //@Throws(Exception.constructor)
            
    getEndGeographicMapCellPositionList(): BasicArrayList

    shouldHandleStartSameAsEnd(): boolean

    getGeographicMapCellPositionArea(): GeographicMapCellPositionAreaBase

    getHudPaintable(): SelectionHudPaintable

                //@Throws(Exception.constructor)
            
    handleCost(ownerLayer: PathFindingLayerInterface)

    getParentLayer(): PathFindingLayerInterface

    getRTSLayer2LogHelper(): RTSLayer2LogHelper

                //@Throws(Exception.constructor)
            
    setTarget(targetGameLayer: PathFindingLayerInterface)

}



