
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
        
import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
//not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
import { PathFindingLayerInterface } from '../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js';
//not GWT import const PathFindingLayerInterface = globalThis.org.allbinary.game.layer.PathFindingLayerInterface;

      
import { RTSLayerEvent } from '../../../../../org/allbinary/game/layer/RTSLayerEvent.js';
//not GWT import const RTSLayerEvent = globalThis.org.allbinary.game.layer.RTSLayerEvent;

      
import { BuildingEventListenerInterface } from '../../../../../org/allbinary/game/layer/building/event/BuildingEventListenerInterface.js';
//not GWT import const BuildingEventListenerInterface = globalThis.org.allbinary.game.layer.building.event.BuildingEventListenerInterface;

      
import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
//not GWT import const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;

      
import { UnitWaypointBehavior } from '../../../../../org/allbinary/game/layer/unit/UnitWaypointBehavior.js';
//not GWT import const UnitWaypointBehavior = globalThis.org.allbinary.game.layer.unit.UnitWaypointBehavior;

      
import { PathFindingInfoFactory } from '../../../../../org/allbinary/game/media/graphics/geography/map/racetrack/PathFindingInfoFactory.js';
//not GWT import const PathFindingInfoFactory = globalThis.org.allbinary.game.media.graphics.geography.map.racetrack.PathFindingInfoFactory;

      
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
import { Sound } from '../../../../../org/allbinary/media/audio/Sound.js';
//not GWT import const Sound = globalThis.org.allbinary.media.audio.Sound;

      
import { BasicGeographicMap } from '../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
//not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
import { GeographicMapCellPosition } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
import { GeographicMapCellTypeFactory } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js';
//not GWT import const GeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellTypeFactory;

      
import { GeographicMapCompositeInterface } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js';
//not GWT import const GeographicMapCompositeInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCompositeInterface;

      
import { CustomMapGenerator } from '../../../../../org/allbinary/media/graphics/geography/map/racetrack/CustomMapGenerator.js';
//not GWT import const CustomMapGenerator = globalThis.org.allbinary.media.graphics.geography.map.racetrack.CustomMapGenerator;

      
import { RaceTrackGeographicMap } from '../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMap.js';
//not GWT import const RaceTrackGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMap;

      
import { PathFindingInfo } from '../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js';
//not GWT import const PathFindingInfo = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingInfo;

      
import { PathGenerator } from '../../../../../org/allbinary/media/graphics/geography/pathfinding/PathGenerator.js';
//not GWT import const PathGenerator = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathGenerator;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WaypointBase } from './WaypointBase.js';
//not GWT import - same folder const WaypointBase = globalThis.org.allbinary.game.layer.waypoint.WaypointBase;

                
export class NoCacheWaypoint extends WaypointBase implements BuildingEventListenerInterface {
        

    readonly ownerLayer: PathFindingLayerInterface;

public constructor (ownerLayer: PathFindingLayerInterface, sound: Sound){
            super(sound);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.ownerLayer= ownerLayer;
    
}


                //@Throws(Exception.constructor)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
super.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
    
}


    public releaseCachedPaths(){
}


                //@Throws(Exception.constructor)
            
    public getPathsListFromCacheOnly(geographicMapCellPosition: GeographicMapCellPosition): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicArrayListUtil.getInstance()!.getImmutableInstance();;
    
}


                //@Throws(Exception.constructor)
            
    public getPathsListRunnable(geographicMapCellPosition: GeographicMapCellPosition): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createPaths(geographicMapCellPosition);;
    
}


                //@Throws(Exception.constructor)
            
    getEndGeographicMapCellPosition(startGeographicMapCellPosition: GeographicMapCellPosition): GeographicMapCellPosition{

    var endList: BasicArrayList = this.ownerLayer!.getEndGeographicMapCellPositionList()!;;
    

    var endGeographicMapCellPosition: GeographicMapCellPosition = BasicArrayListUtil.getInstance()!.getRandom(endList) as GeographicMapCellPosition;;
    

                        if(startGeographicMapCellPosition == endGeographicMapCellPosition)
                        
                                    {
                                    



                        for (
    var index: number = endList!.size() -1;index >= 0; index--)
        {
endGeographicMapCellPosition= endList!.get(index) as GeographicMapCellPosition;
    

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

    var endGeographicMapCellPosition: GeographicMapCellPosition = this.getEndGeographicMapCellPosition(startGeographicMapCellPosition)!;;
    

                        if(endGeographicMapCellPosition == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicArrayListUtil.getInstance()!.getImmutableInstance();;
    

                                    }
                                

                        if(startGeographicMapCellPosition == endGeographicMapCellPosition)
                        
                                    {
                                    
                        if(this.ownerLayer!.shouldHandleStartSameAsEnd())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicArrayListUtil.getInstance()!.getImmutableInstance();;
    

                                    }
                                
                        else {
                            


                            throw new Exception("Start should not be End: " +endGeographicMapCellPosition);
                    

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
}


    public reset(){
this.getConnectedWaypointList()!.clear();
    
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



