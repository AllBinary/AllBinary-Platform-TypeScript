
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { CaptionAnimationHelperBase } from '../../../../../org/allbinary/animation/caption/CaptionAnimationHelperBase.js';
      //not GWT import const CaptionAnimationHelperBase = globalThis.org.allbinary.animation.caption.CaptionAnimationHelperBase;

      
import { WaypointBehaviorBase } from '../../../../../org/allbinary/game/layer/WaypointBehaviorBase.js';
      //not GWT import const WaypointBehaviorBase = globalThis.org.allbinary.game.layer.WaypointBehaviorBase;

      
import { TrackingEvent } from '../../../../../org/allbinary/game/tracking/TrackingEvent.js';
      //not GWT import const TrackingEvent = globalThis.org.allbinary.game.tracking.TrackingEvent;

      
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { GeographicMapCellHistory } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js';
      //not GWT import const GeographicMapCellHistory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellHistory;

      
import { GeographicMapCellPosition } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      //not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WaypointLogHelper } from './WaypointLogHelper.js';
import { Waypoint2LogHelper } from './Waypoint2LogHelper.js';
import { WaypointRunnableLogHelper } from './WaypointRunnableLogHelper.js';

export interface WaypointLayerInterface {
        

                //@Throws(Exception.constructor)
            
    init(geographicMapCellHistory: GeographicMapCellHistory, geographicMapCellPositionBasicArrayList: BasicArrayList)

    getMoveOutOfBuildAreaPath(geographicMapCellPosition: GeographicMapCellPosition): BasicArrayList

                //@Throws(Exception.constructor)
            
    setClosestGeographicMapCellHistory(pathsList: BasicArrayList)

    teleportTo(geographicMapCellPosition: GeographicMapCellPosition)

                //@Throws(Exception.constructor)
            
    setLoad(resource: number)

                //@Throws(Exception.constructor)
            
    getSurroundingGeographicMapCellPositionList(): BasicArrayList

    isSelected(): boolean

    shouldAddWaypointFromBuilding(): boolean

    isShowMoreCaptionStates(): boolean

                //@Throws(Exception.constructor)
            
    trackTo(reason: string)

                //@Throws(Exception.constructor)
            
    trackToDXY(dx: number, dy: number)

                //@Throws(Exception.constructor)
            
    buildingChase(allbinaryLayer: AllBinaryLayer, cellPosition: GeographicMapCellPosition): boolean

    getTrackingEvent(): TrackingEvent

    allStop()

    isWaypointListEmptyOrOnlyTargets(): boolean

                //@Throws(Exception.constructor)
            
    getCurrentGeographicMapCellPosition(): GeographicMapCellPosition

                //@Throws(Exception.constructor)
            
    getTopLeftGeographicMapCellPosition(): GeographicMapCellPosition

    getCaptionAnimationHelper(): CaptionAnimationHelperBase

    getWaypointBehavior(): WaypointBehaviorBase

    getWaypointLogHelper(): WaypointLogHelper

    getWaypoint2LogHelper(): Waypoint2LogHelper

    getWaypointRunnableLogHelper(): WaypointRunnableLogHelper

}



