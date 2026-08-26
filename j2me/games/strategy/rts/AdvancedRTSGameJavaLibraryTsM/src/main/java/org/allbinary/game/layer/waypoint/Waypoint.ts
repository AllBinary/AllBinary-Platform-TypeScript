
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2006 AllBinary 
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
        
            import { RuntimeException } from '../../../../../java/lang/RuntimeException.js';
        
//not game specific package import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
//not game specific package import { AllBinaryTiledLayer } from '../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
//not game specific package import { PathFindingLayerInterface } from '../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js';
      const PathFindingLayerInterface = globalThis.org.allbinary.game.layer.PathFindingLayerInterface;

      
//not game specific package import { RTSLayerEvent } from '../../../../../org/allbinary/game/layer/RTSLayerEvent.js';
      const RTSLayerEvent = globalThis.org.allbinary.game.layer.RTSLayerEvent;

      
//not game specific package import { BuildingEventListenerInterface } from '../../../../../org/allbinary/game/layer/building/event/BuildingEventListenerInterface.js';
      const BuildingEventListenerInterface = globalThis.org.allbinary.game.layer.building.event.BuildingEventListenerInterface;

      
//not game specific package import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
      const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;

      
//not game specific package import { UnitWaypointBehavior } from '../../../../../org/allbinary/game/layer/unit/UnitWaypointBehavior.js';
      const UnitWaypointBehavior = globalThis.org.allbinary.game.layer.unit.UnitWaypointBehavior;

      
//not game specific package import { PathFindingInfoFactory } from '../../../../../org/allbinary/game/media/graphics/geography/map/racetrack/PathFindingInfoFactory.js';
      const PathFindingInfoFactory = globalThis.org.allbinary.game.media.graphics.geography.map.racetrack.PathFindingInfoFactory;

      
//not game specific package import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
      const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
//not game specific package import { Sound } from '../../../../../org/allbinary/media/audio/Sound.js';
      const Sound = globalThis.org.allbinary.media.audio.Sound;

      
//not game specific package import { BasicGeographicMap } from '../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
//not game specific package import { GeographicMapCellPosition } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
//not game specific package import { GeographicMapCellTypeFactory } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js';
      const GeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellTypeFactory;

      
//not game specific package import { GeographicMapCompositeInterface } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js';
      const GeographicMapCompositeInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCompositeInterface;

      
//not game specific package import { CustomMapGenerator } from '../../../../../org/allbinary/media/graphics/geography/map/racetrack/CustomMapGenerator.js';
      const CustomMapGenerator = globalThis.org.allbinary.media.graphics.geography.map.racetrack.CustomMapGenerator;

      
//not game specific package import { RaceTrackGeographicMap } from '../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMap.js';
      const RaceTrackGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMap;

      
//not game specific package import { BasicGeographicMapExtractedPathsCacheFactory } from '../../../../../org/allbinary/media/graphics/geography/pathfinding/BasicGeographicMapExtractedPathsCacheFactory.js';
      const BasicGeographicMapExtractedPathsCacheFactory = globalThis.org.allbinary.media.graphics.geography.pathfinding.BasicGeographicMapExtractedPathsCacheFactory;

      
//not game specific package import { PathFindingInfo } from '../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js';
      const PathFindingInfo = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingInfo;

      
//not game specific package import { PathGenerator } from '../../../../../org/allbinary/media/graphics/geography/pathfinding/PathGenerator.js';
      const PathGenerator = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathGenerator;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListUtil } from '../../../../../org/allbinary/util/BasicArrayListUtil.js';
      const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WaypointBase } from './WaypointBase.js';

export class Waypoint extends WaypointBase implements BuildingEventListenerInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;

    readonly ownerLayer: PathFindingLayerInterface;

    private endList: BasicArrayList = this.basicArrayListUtil!.getImmutableInstance()!;

    private paths: BasicArrayList[][] = this.basicArrayListUtil!.NULL_ARRAY_OF_ARRAY;

public constructor (ownerLayer: PathFindingLayerInterface, sound: Sound){
            super(sound);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.ownerLayer= ownerLayer;
    
}


                //@Throws(Exception.constructor)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
super.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
    

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = allBinaryGameLayerManager as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    

    var tiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;;
    

                        if(this.paths != this.basicArrayListUtil!.NULL_ARRAY_OF_ARRAY)
                        
                                    {
                                    


                            throw new RuntimeException();
                    

                                    }
                                
this.endList= this.ownerLayer!.getEndGeographicMapCellPositionList();
    
this.paths= new Array(tiledLayer!.getColumns()).fill(null).map(() => new Array(tiledLayer!.getRows()).fill(0))
                                                            ;
    
this.clearPaths();
    
}


    public releaseCachedPaths(){




                        for (
    var columnIndex: number = this.paths.length
                ;--columnIndex >= 0; )
        {




                        for (
    var rowIndex: number = this.paths.length
                ;--rowIndex >= 0; )
        {

    var pathsList: BasicArrayList = this.paths[columnIndex]![rowIndex]!;;
    

                        if(pathsList != this.basicArrayListUtil!.getImmutableInstance())
                        
                                    {
                                    BasicGeographicMapExtractedPathsCacheFactory.getInstance()!.release(pathsList);
    

                                    }
                                
}

}

}


                //@Throws(Exception.constructor)
            
    public getPathsListFromCacheOnly(geographicMapCellPosition: GeographicMapCellPosition): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paths[geographicMapCellPosition!.getColumn()]![geographicMapCellPosition!.getRow()]!;
    
}


                //@Throws(Exception.constructor)
            
    public getPathsListRunnable(geographicMapCellPosition: GeographicMapCellPosition): BasicArrayList{

    var pathsList: BasicArrayList = this.paths[geographicMapCellPosition!.getColumn()]![geographicMapCellPosition!.getRow()]!;;
    

                        if(pathsList == this.basicArrayListUtil!.getImmutableInstance())
                        
                                    {
                                    pathsList= this.createPaths(geographicMapCellPosition);
    
this.paths[geographicMapCellPosition!.getColumn()]![geographicMapCellPosition!.getRow()]= pathsList;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pathsList;
    
}


    getEndGeographicMapCellPosition(startGeographicMapCellPosition: GeographicMapCellPosition): GeographicMapCellPosition{

    var endGeographicMapCellPosition: GeographicMapCellPosition = this.basicArrayListUtil!.getRandom(this.endList) as GeographicMapCellPosition;;
    

                        if(startGeographicMapCellPosition == endGeographicMapCellPosition)
                        
                                    {
                                    



                        for (
    var index: number = this.endList!.size() -1;index >= 0; index--)
        {
endGeographicMapCellPosition= this.endList!.get(index) as GeographicMapCellPosition;
    

                        if(startGeographicMapCellPosition != endGeographicMapCellPosition)
                        
                                    {
                                    break;

                    

                                    }
                                
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return endGeographicMapCellPosition;
    
}


                //@Throws(Exception.constructor)
            
    createPaths(startGeographicMapCellPosition: GeographicMapCellPosition): BasicArrayList{

                        if(this.endList!.size() == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicArrayListUtil!.getImmutableInstance();;
    

                                    }
                                

    var endGeographicMapCellPosition: GeographicMapCellPosition = this.getEndGeographicMapCellPosition(startGeographicMapCellPosition)!;;
    

                        if(endGeographicMapCellPosition == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicArrayListUtil!.getImmutableInstance();;
    

                                    }
                                

                        if(startGeographicMapCellPosition == endGeographicMapCellPosition)
                        
                                    {
                                    
                        if(this.ownerLayer!.shouldHandleStartSameAsEnd())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicArrayListUtil!.getImmutableInstance();;
    

                                    }
                                
                        else {
                            


                            throw new Exception("Start should not be End: " +this.endList!.size());
                    

                        }
                            

                                    }
                                

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = this.allBinaryGameLayerManagerP as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    

    var raceTrackGeographicMap: RaceTrackGeographicMap = geographicMapInterface as RaceTrackGeographicMap;;
    

    var raceTrackGeographicMapCellTypeFactory: GeographicMapCellTypeFactory = raceTrackGeographicMap!.getGeographicMapCellTypeFactory()!;;
    

    var customMapGenerator: CustomMapGenerator = raceTrackGeographicMap!.getCustomMapGenerator() as CustomMapGenerator;;
    
customMapGenerator!.copyMapIntoCustomMap();
    

    var customMapArray: number[][] = customMapGenerator!.getCustomMapArray()!;;
    
customMapArray[startGeographicMapCellPosition!.getRow()]![startGeographicMapCellPosition!.getColumn()]= raceTrackGeographicMapCellTypeFactory!.getStartType();
    
customMapArray[endGeographicMapCellPosition!.getRow()]![endGeographicMapCellPosition!.getColumn()]= raceTrackGeographicMapCellTypeFactory!.getEndType();
    

    var pathFindingInfo: PathFindingInfo = PathFindingInfoFactory.getInstance()!.getInstancePathFindingInfo(raceTrackGeographicMap, customMapArray)!;;
    

    var list: BasicArrayList = PathGenerator.getInstance()!.getInstanceNoCache(geographicMapInterface, pathFindingInfo, 2)!;;
    

                        if(list.size() < 1)
                        
                                    {
                                    


                            throw new Exception("Path may have been cleared by clearing caching");
                    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


                //@Throws(Exception.constructor)
            
    public onBuildingEvent(event: RTSLayerEvent){
this.clearPaths();
    
}


    clearPaths(){




                        for (
    var columnIndex: number = this.paths.length
                ;--columnIndex >= 0; )
        {




                        for (
    var rowIndex: number = this.paths.length
                ;--rowIndex >= 0; )
        {
this.paths[columnIndex]![rowIndex]= this.basicArrayListUtil!.getImmutableInstance();
    
}

}

}


    public reset(){
this.getConnectedWaypointList()!.clear();
    
this.releaseCachedPaths();
    
}


                //@Throws(Exception.constructor)
            
    public visit(unitLayer: PathFindingLayerInterface){

                        if(unitLayer!.getGroupInterface()[0] != this.ownerLayer!.getGroupInterface()[0])
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var size: number = this.getConnectedWaypointList()!.size()!;;
    

                        if(size > 0)
                        
                                    {
                                    
    var unitWaypointBehavior: UnitWaypointBehavior = unitLayer!.getWaypointBehavior() as UnitWaypointBehavior;;
    

        while(this.getConnectedWaypointList()!.size() > 0)
        {

    var rtsLayer: CollidableDestroyableDamageableLayer = this.getConnectedWaypointList()!.get(0) as CollidableDestroyableDamageableLayer;;
    

                        if(rtsLayer!.isDestroyed())
                        
                                    {
                                    this.getConnectedWaypointList()!.remove(rtsLayer);
    

                                    }
                                
                        else {
                            unitLayer!.handleCost(this.ownerLayer);
    
unitWaypointBehavior!.insertWaypoint(0, rtsLayer);
    
break;

                    

                        }
                            
}


                                    }
                                
}


}
                
            

