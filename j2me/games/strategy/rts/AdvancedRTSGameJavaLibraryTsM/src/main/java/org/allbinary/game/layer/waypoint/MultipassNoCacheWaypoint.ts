
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
        



import { AllBinaryGameLayerManager } from "../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { PathFindingLayerInterface } from "../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js";

    
import { RTSLayerEvent } from "../../../../../org/allbinary/game/layer/RTSLayerEvent.js";

    
import { BuildingEventListenerInterface } from "../../../../../org/allbinary/game/layer/building/event/BuildingEventListenerInterface.js";

    
import { CollidableDestroyableDamageableLayer } from "../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js";

    
import { UnitWaypointBehavior } from "../../../../../org/allbinary/game/layer/unit/UnitWaypointBehavior.js";

    
import { PathFindingInfoFactory } from "../../../../../org/allbinary/game/media/graphics/geography/map/racetrack/PathFindingInfoFactory.js";

    
import { ForcedLogUtil } from "../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { AllBinaryEventObject } from "../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { Sound } from "../../../../../org/allbinary/media/audio/Sound.js";

    
import { BasicGeographicMap } from "../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCellPosition } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCellTypeFactory } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js";

    
import { GeographicMapCompositeInterface } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js";

    
import { CustomMapGenerator } from "../../../../../org/allbinary/media/graphics/geography/map/racetrack/CustomMapGenerator.js";

    
import { RaceTrackGeographicMap } from "../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMap.js";

    
import { MultipassState } from "../../../../../org/allbinary/media/graphics/geography/pathfinding/MultipassState.js";

    
import { PathFindingInfo } from "../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js";

    
import { PathGenerator } from "../../../../../org/allbinary/media/graphics/geography/pathfinding/PathGenerator.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../../org/allbinary/util/BasicArrayListUtil.js";

    

export class MultipassNoCacheWaypoint extends WaypointBase
                , BuildingEventListenerInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly ownerLayer: PathFindingLayerInterface
public constructor (ownerLayer: PathFindingLayerInterface, sound: Sound)                        

                            : super(sound){

            super();
                //var ownerLayer = ownerLayer
    //var sound = sound


                            //For kotlin this is before the body of the constructor.
                    
this.ownerLayer= ownerLayer;
    
}


                //@Throws(Error::class)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
    //var allBinaryGameLayerManager = allBinaryGameLayerManager
super.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
    
}


    public releaseCachedPaths(){
}


                //@Throws(Error::class)
            
    public getPathFindingInfo(geographicMapCellPosition: GeographicMapCellPosition): PathFindingInfo{
    //var geographicMapCellPosition = geographicMapCellPosition

    var startGeographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPosition;
        
        
;
    

    var endGeographicMapCellPosition: GeographicMapCellPosition = this.getEndGeographicMapCellPosition(startGeographicMapCellPosition)!;
        
        
;
    

                        if(endGeographicMapCellPosition == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PathFindingInfo.NULL_PATH_FINDING_INFO;
    

                                    }
                                

                        if(startGeographicMapCellPosition == endGeographicMapCellPosition)
                        
                                    {
                                    
                        if(this.ownerLayer!.shouldHandleStartSameAsEnd())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PathFindingInfo.NULL_PATH_FINDING_INFO;
    

                                    }
                                
                        else {
                            


                            throw new Error("Start should not be End: " +endGeographicMapCellPosition)

                        }
                            

                                    }
                                

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = this.allBinaryGameLayerManagerP as GeographicMapCompositeInterface;
        
        
;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        
;
    

    var raceTrackGeographicMap: RaceTrackGeographicMap = geographicMapInterface as RaceTrackGeographicMap;
        
        
;
    

    var raceTrackGeographicMapCellTypeFactory: GeographicMapCellTypeFactory = raceTrackGeographicMap!.getGeographicMapCellTypeFactory()!;
        
        
;
    

    var customMapGenerator: CustomMapGenerator = raceTrackGeographicMap!.getCustomMapGenerator();

                         as CustomMapGenerator;
        
        
;
    
customMapGenerator!.copyMapIntoCustomMap();
    

    var customMapArray: number[][] = customMapGenerator!.getCustomMapArray()!;
        
        
;
    
customMapArray[startGeographicMapCellPosition!.getRow()]![startGeographicMapCellPosition!.getColumn()]= raceTrackGeographicMapCellTypeFactory!.getStartType();
    
customMapArray[endGeographicMapCellPosition!.getRow()]![endGeographicMapCellPosition!.getColumn()]= raceTrackGeographicMapCellTypeFactory!.getEndType();
    

    var pathFindingInfo: PathFindingInfo = PathFindingInfoFactory.getInstance()!.getInstance(raceTrackGeographicMap, customMapArray)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pathFindingInfo;
    
}


                //@Throws(Error::class)
            
    public getPathsList(geographicMapCellPosition: GeographicMapCellPosition, pathFindingInfo: PathFindingInfo, multipassState: MultipassState): BasicArrayList{
    //var geographicMapCellPosition = geographicMapCellPosition
    //var pathFindingInfo = pathFindingInfo
    //var multipassState = multipassState

        try {
            
                        if(pathFindingInfo == 
                                    null
                                )
                        
                                    {
                                    logUtil!.put("pathFindingInfo: " +pathFindingInfo, this, "getPathsList");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicArrayListUtil.getInstance()!.getImmutableInstance();

                        ;
    

                                    }
                                

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = this.allBinaryGameLayerManagerP as GeographicMapCompositeInterface;
        
        
;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        
;
    

    var list: BasicArrayList = PathGenerator.getInstance()!.createN(geographicMapInterface, pathFindingInfo, 2, multipassState)!;
        
        
;
    

                        if(list != 
                                    null
                                 && list != BasicArrayListUtil.getInstance()!.getImmutableInstance())
                        
                                    {
                                    
                        if(list.size() < 1)
                        
                                    {
                                    


                            throw new Error("Path may have been cleared by clearing caching")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicArrayListUtil.getInstance()!.getImmutableInstance();

                        ;
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, this, "getPathsList", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicArrayListUtil.getInstance()!.getImmutableInstance();

                        ;
    
}

}


                //@Throws(Error::class)
            
    getEndGeographicMapCellPosition(startGeographicMapCellPosition: GeographicMapCellPosition): GeographicMapCellPosition{
    //var startGeographicMapCellPosition = startGeographicMapCellPosition

    var endList: BasicArrayList = this.ownerLayer!.getEndGeographicMapCellPositionList()!;
        
        
;
    

    var endGeographicMapCellPosition: GeographicMapCellPosition = BasicArrayListUtil.getInstance()!.getRandom(endList);

                         as GeographicMapCellPosition;
        
        
;
    

                        if(startGeographicMapCellPosition == endGeographicMapCellPosition)
                        
                                    {
                                    



                        for (
    var index: number = endList!.size() -1;
        
        
index >= 0; index--)
        {
endGeographicMapCellPosition= endList!.get(index);

                         as GeographicMapCellPosition;
    

                        if(startGeographicMapCellPosition != endGeographicMapCellPosition)
                        
                                    {
                                    break;

                    

                                    }
                                
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return endGeographicMapCellPosition;
    
}


    public onEvent(eventObject: AllBinaryEventObject){
    //var eventObject = eventObject
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


                //@Throws(Error::class)
            
    public onBuildingEvent(event: RTSLayerEvent){
    //var event = event
}


    public reset(){
this.getConnectedWaypointList()!.clear();
    
}


                //@Throws(Error::class)
            
    public visit(unitLayer: PathFindingLayerInterface){
    //var unitLayer = unitLayer

                        if(unitLayer!.getGroupInterface()[0] != this.ownerLayer!.getGroupInterface()[0])
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var size: number = this.getConnectedWaypointList()!.size()!;
        
        
;
    

                        if(size > 0)
                        
                                    {
                                    
    var unitWaypointBehavior: UnitWaypointBehavior = unitLayer!.getWaypointBehavior();

                         as UnitWaypointBehavior;
        
        
;
    

        while(this.getConnectedWaypointList()!.size() > 0)
        {

    var rtsLayer: CollidableDestroyableDamageableLayer = this.getConnectedWaypointList()!.get(0);

                         as CollidableDestroyableDamageableLayer;
        
        
;
    

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
                
            

