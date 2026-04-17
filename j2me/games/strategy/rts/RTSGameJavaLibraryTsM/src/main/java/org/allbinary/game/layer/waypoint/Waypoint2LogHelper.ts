
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
        



import { PathFindingLayerInterface } from "../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js";

    
import { WaypointBehaviorBase } from "../../../../../org/allbinary/game/layer/WaypointBehaviorBase.js";

    
import { GeographicMapCellPosition } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class Waypoint2LogHelper
            extends Object
         {
        

    private static readonly instance: Waypoint2LogHelper = new Waypoint2LogHelper();
        
        

    public static getInstance(): Waypoint2LogHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public initRange(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, closeRange: number, sensorRange: number){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var closeRange = closeRange
    //var sensorRange = sensorRange
}


    public processPossibleTarget(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, unitWaypointBehavior2: WaypointBehaviorBase, layerInterface: PathFindingLayerInterface, anotherTargetDistance: number, isShorterThanCurrentTargetDistance: boolean, isCurrentTargetDestroyed: boolean){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var unitWaypointBehavior2 = unitWaypointBehavior2
    //var layerInterface = layerInterface
    //var anotherTargetDistance = anotherTargetDistance
    //var isShorterThanCurrentTargetDistance = isShorterThanCurrentTargetDistance
    //var isCurrentTargetDestroyed = isCurrentTargetDestroyed
}


    public processPossibleTarget(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, unitWaypointBehavior2: WaypointBehaviorBase, layerInterface: PathFindingLayerInterface, anotherTargetDistance: number){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var unitWaypointBehavior2 = unitWaypointBehavior2
    //var layerInterface = layerInterface
    //var anotherTargetDistance = anotherTargetDistance
}


    public processPossibleTargetCloser(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, unitWaypointBehavior2: WaypointBehaviorBase, layerInterface: PathFindingLayerInterface, anotherTargetDistance: number){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var unitWaypointBehavior2 = unitWaypointBehavior2
    //var layerInterface = layerInterface
    //var anotherTargetDistance = anotherTargetDistance
}


    public setTarget(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, unitWaypointBehavior2: WaypointBehaviorBase, layerInterface: PathFindingLayerInterface, anotherTargetDistance: number){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var unitWaypointBehavior2 = unitWaypointBehavior2
    //var layerInterface = layerInterface
    //var anotherTargetDistance = anotherTargetDistance
}


    public setTargetPath(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
}


    public setTargetPath(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, unitWaypointBehavior2: WaypointBehaviorBase){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var unitWaypointBehavior2 = unitWaypointBehavior2
}


    public processWaypoint(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, unitWaypointBehavior2: WaypointBehaviorBase, targetLayer: PathFindingLayerInterface, size: number){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var unitWaypointBehavior2 = unitWaypointBehavior2
    //var targetLayer = targetLayer
    //var size = size
}


    public processWaypointTracked(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, unitWaypointBehavior2: WaypointBehaviorBase){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var unitWaypointBehavior2 = unitWaypointBehavior2
}


    public processWaypointTracked(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, geographicMapCellPosition: GeographicMapCellPosition){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var geographicMapCellPosition = geographicMapCellPosition
}


    public processWaypointTrackedWithoutProgress(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, reason: string){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var reason = reason
}


    public wander(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
}


    public targetDestroyed(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
}


    public processTargeting(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, dx: number, dy: number){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var dx = dx
    //var dy = dy
}


    public processTargetingNonWayPoint(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, dx: number, dy: number){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var dx = dx
    //var dy = dy
}


    public removeWaypoint(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, unitWaypointBehavior2: WaypointBehaviorBase, waypointLayer: PathFindingLayerInterface, reason: string){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var unitWaypointBehavior2 = unitWaypointBehavior2
    //var waypointLayer = waypointLayer
    //var reason = reason
}


    public removeWaypoint(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, unitWaypointBehavior2: WaypointBehaviorBase, list: BasicArrayList){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var unitWaypointBehavior2 = unitWaypointBehavior2
    //var list = list
}


    public removeWaypointClear(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
}


    public clearTarget(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
}


    public addWaypointFromUser(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, advancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var advancedRTSGameLayer = advancedRTSGameLayer
}


    public targetMovedSoRetarget(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
}


}
                
            

