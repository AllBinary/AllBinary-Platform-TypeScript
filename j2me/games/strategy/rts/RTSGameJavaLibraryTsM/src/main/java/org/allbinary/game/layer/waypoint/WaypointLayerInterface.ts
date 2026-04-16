
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
        



import { CaptionAnimationHelperBase } from "../../../../../org/allbinary/animation/caption/CaptionAnimationHelperBase.js";

    
import { WaypointBehaviorBase } from "../../../../../org/allbinary/game/layer/WaypointBehaviorBase.js";

    
import { TrackingEvent } from "../../../../../org/allbinary/game/tracking/TrackingEvent.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { GeographicMapCellHistory } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js";

    
import { GeographicMapCellPosition } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export interface WaypointLayerInterface {
        

                //@Throws(Error::class)
            
    init(geographicMapCellHistory: GeographicMapCellHistory, geographicMapCellPositionBasicArrayList: BasicArrayList)

    getMoveOutOfBuildAreaPath(geographicMapCellPosition: GeographicMapCellPosition): BasicArrayList

                //@Throws(Error::class)
            
    setClosestGeographicMapCellHistory(pathsList: BasicArrayList)

    teleportTo(geographicMapCellPosition: GeographicMapCellPosition)

                //@Throws(Error::class)
            
    setLoad(resource: number)

                //@Throws(Error::class)
            
    getSurroundingGeographicMapCellPositionList(): BasicArrayList

    isSelected(): boolean

    shouldAddWaypointFromBuilding(): boolean

    isShowMoreCaptionStates(): boolean

                //@Throws(Error::class)
            
    trackTo(reason: string)

                //@Throws(Error::class)
            
    trackTo(dx: number, dy: number)

                //@Throws(Error::class)
            
    buildingChase(allbinaryLayer: AllBinaryLayer, cellPosition: GeographicMapCellPosition): boolean

    getTrackingEvent(): TrackingEvent

    allStop()

    isWaypointListEmptyOrOnlyTargets(): boolean

                //@Throws(Error::class)
            
    getCurrentGeographicMapCellPosition(): GeographicMapCellPosition

                //@Throws(Error::class)
            
    getTopLeftGeographicMapCellPosition(): GeographicMapCellPosition

    getCaptionAnimationHelper(): CaptionAnimationHelperBase

    getWaypointBehavior(): WaypointBehaviorBase

    getWaypointLogHelper(): WaypointLogHelper

    getWaypoint2LogHelper(): Waypoint2LogHelper

    getWaypointRunnableLogHelper(): WaypointRunnableLogHelper

}
                
            

