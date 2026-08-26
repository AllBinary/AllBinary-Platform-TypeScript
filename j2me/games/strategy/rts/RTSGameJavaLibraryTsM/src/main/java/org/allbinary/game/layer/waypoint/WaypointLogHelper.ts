
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
        
//not game specific package import { PathFindingLayerInterface } from '../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js';
      const PathFindingLayerInterface = globalThis.org.allbinary.game.layer.PathFindingLayerInterface;

      
//not game specific package import { WaypointBehaviorBase } from '../../../../../org/allbinary/game/layer/WaypointBehaviorBase.js';
      const WaypointBehaviorBase = globalThis.org.allbinary.game.layer.WaypointBehaviorBase;

      
//not game specific package import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
      const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;

      
//not game specific package import { GeographicMapCellPosition } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
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
                
            

