
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
      
import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
      
import { GeographicMapCellPosition } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      
import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class WaypointLogHelper
            extends Object
         {
        

    private static readonly instance: WaypointLogHelper = new WaypointLogHelper();

    public static getInstance(): WaypointLogHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return WaypointLogHelper.instance;
    
}


    public onWaypointEvent(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, advancedRTSGameLayer: PathFindingLayerInterface){
}


    public addWaypointFromBuilding(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, advancedRTSGameLayer: PathFindingLayerInterface){
}


    public addWaypointFromBuildingList(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, advancedRTSGameLayer: PathFindingLayerInterface, list: BasicArrayList){
}


    public insertWaypoint(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, index: number, rtsLayer: CollidableDestroyableDamageableLayer, waypointName: string){
}


    public insertWaypointList(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, index: number, rtsLayer: CollidableDestroyableDamageableLayer, waypointName: string, list: BasicArrayList){
}


    public setRandomGeographicMapCellHistoryList(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, pathsList: BasicArrayList){
}


    public moveAwayFromBuilding(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
}


    public needToMove(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, unitWaypointBehavior: WaypointBehaviorBase){
}


    public setRandomGeographicMapCellHistory(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
}


    public setCurrentPathGeographicMapCellPosition(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, existingCurrentPathGeographicMapCellPosition: GeographicMapCellPosition, currentPathGeographicMapCellPosition: GeographicMapCellPosition){
}


    public setNextUnvisitedPathGeographicMapCellPosition(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, existingNextUnvisitedPathGeographicMapCellPosition: GeographicMapCellPosition, nextUnvisitedPathGeographicMapCellPosition: GeographicMapCellPosition){
}


}
                
            

