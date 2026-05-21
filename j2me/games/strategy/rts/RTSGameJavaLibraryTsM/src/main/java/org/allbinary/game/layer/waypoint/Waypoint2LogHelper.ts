
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
import { PathFindingLayerInterface } from '../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js';
      
import { WaypointBehaviorBase } from '../../../../../org/allbinary/game/layer/WaypointBehaviorBase.js';
      
import { GeographicMapCellPosition } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      
import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class Waypoint2LogHelper
            extends Object
         {
        

    private static readonly instance: Waypoint2LogHelper = new Waypoint2LogHelper();

    public static getInstance(): Waypoint2LogHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Waypoint2LogHelper.instance;
    
}


    public initRange(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, closeRange: number, sensorRange: number){
}


    public processPossibleTarget(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, unitWaypointBehavior2: WaypointBehaviorBase, layerInterface: PathFindingLayerInterface, anotherTargetDistance: number, isShorterThanCurrentTargetDistance: boolean, isCurrentTargetDestroyed: boolean){
}


    public processSetTarget(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, unitWaypointBehavior2: WaypointBehaviorBase, layerInterface: PathFindingLayerInterface, anotherTargetDistance: number){
}


    public processPossibleTargetCloser(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, unitWaypointBehavior2: WaypointBehaviorBase, layerInterface: PathFindingLayerInterface, anotherTargetDistance: number){
}


    public setTarget(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, unitWaypointBehavior2: WaypointBehaviorBase, layerInterface: PathFindingLayerInterface, anotherTargetDistance: number){
}


    public setTargetPath(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
}


    public setTargetPathIgnoreNewPath(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, unitWaypointBehavior2: WaypointBehaviorBase){
}


    public processWaypoint(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, unitWaypointBehavior2: WaypointBehaviorBase, targetLayer: PathFindingLayerInterface, size: number){
}


    public processWaypointTracked(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, unitWaypointBehavior2: WaypointBehaviorBase){
}


    public processWaypointTrackedVisit(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, geographicMapCellPosition: GeographicMapCellPosition){
}


    public processWaypointTrackedWithoutProgress(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, reason: string){
}


    public wander(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
}


    public targetDestroyed(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
}


    public processTargeting(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, dx: number, dy: number){
}


    public processTargetingNonWayPoint(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, dx: number, dy: number){
}


    public removeWaypoint(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, unitWaypointBehavior2: WaypointBehaviorBase, waypointLayer: PathFindingLayerInterface, reason: string){
}


    public removeWaypointList(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, unitWaypointBehavior2: WaypointBehaviorBase, list: BasicArrayList){
}


    public removeWaypointClear(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
}


    public clearTarget(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
}


    public addWaypointFromUser(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, advancedRTSGameLayer: PathFindingLayerInterface){
}


    public targetMovedSoRetarget(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
}


}
                
            

