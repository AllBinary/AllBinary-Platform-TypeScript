
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

    
import { CollidableDestroyableDamageableLayer } from "../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js";

    
import { GeographicMapCellPosition } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class WaypointLogHelper
            extends Object
         {
        

    private static readonly instance: WaypointLogHelper = new WaypointLogHelper();
        
        

    public static getInstance(): WaypointLogHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public onWaypointEvent(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, advancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var advancedRTSGameLayer = advancedRTSGameLayer
}


    public addWaypointFromBuilding(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, advancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var advancedRTSGameLayer = advancedRTSGameLayer
}


    public addWaypointFromBuilding(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, advancedRTSGameLayer: PathFindingLayerInterface, list: BasicArrayList){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var advancedRTSGameLayer = advancedRTSGameLayer
    //var list = list
}


    public insertWaypoint(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, index: number, rtsLayer: CollidableDestroyableDamageableLayer, waypointName: string){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var index = index
    //var rtsLayer = rtsLayer
    //var waypointName = waypointName
}


    public insertWaypoint(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, index: number, rtsLayer: CollidableDestroyableDamageableLayer, waypointName: string, list: BasicArrayList){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var index = index
    //var rtsLayer = rtsLayer
    //var waypointName = waypointName
    //var list = list
}


    public setRandomGeographicMapCellHistory(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, pathsList: BasicArrayList){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var pathsList = pathsList
}


    public moveAwayFromBuilding(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
}


    public needToMove(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, unitWaypointBehavior: WaypointBehaviorBase){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var unitWaypointBehavior = unitWaypointBehavior
}


    public setRandomGeographicMapCellHistory(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
}


    public setCurrentPathGeographicMapCellPosition(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, existingCurrentPathGeographicMapCellPosition: GeographicMapCellPosition, currentPathGeographicMapCellPosition: GeographicMapCellPosition){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var existingCurrentPathGeographicMapCellPosition = existingCurrentPathGeographicMapCellPosition
    //var currentPathGeographicMapCellPosition = currentPathGeographicMapCellPosition
}


    public setNextUnvisitedPathGeographicMapCellPosition(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, existingNextUnvisitedPathGeographicMapCellPosition: GeographicMapCellPosition, nextUnvisitedPathGeographicMapCellPosition: GeographicMapCellPosition){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var existingNextUnvisitedPathGeographicMapCellPosition = existingNextUnvisitedPathGeographicMapCellPosition
    //var nextUnvisitedPathGeographicMapCellPosition = nextUnvisitedPathGeographicMapCellPosition
}


}
                
            

