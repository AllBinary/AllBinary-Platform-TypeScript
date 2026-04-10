
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

    
import { AllBinaryTiledLayer } from "../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { PathFindingLayerInterface } from "../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js";

    
import { RTSLayerEvent } from "../../../../../org/allbinary/game/layer/RTSLayerEvent.js";

    
import { BuildingEventListenerInterface } from "../../../../../org/allbinary/game/layer/building/event/BuildingEventListenerInterface.js";

    
import { CollidableDestroyableDamageableLayer } from "../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js";

    
import { UnitWaypointBehavior } from "../../../../../org/allbinary/game/layer/unit/UnitWaypointBehavior.js";

    
import { PathFindingInfoFactory } from "../../../../../org/allbinary/game/media/graphics/geography/map/racetrack/PathFindingInfoFactory.js";

    
import { ForcedLogUtil } from "../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AllBinaryEventObject } from "../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { Sound } from "../../../../../org/allbinary/media/audio/Sound.js";

    
import { BasicGeographicMap } from "../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCellPosition } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCellTypeFactory } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js";

    
import { GeographicMapCompositeInterface } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js";

    
import { CustomMapGenerator } from "../../../../../org/allbinary/media/graphics/geography/map/racetrack/CustomMapGenerator.js";

    
import { RaceTrackGeographicMap } from "../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMap.js";

    
import { BasicGeographicMapExtractedPathsCacheFactory } from "../../../../../org/allbinary/media/graphics/geography/pathfinding/BasicGeographicMapExtractedPathsCacheFactory.js";

    
import { PathFindingInfo } from "../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js";

    
import { PathGenerator } from "../../../../../org/allbinary/media/graphics/geography/pathfinding/PathGenerator.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../../org/allbinary/util/BasicArrayListUtil.js";

    

export class Waypoint extends WaypointBase
                , BuildingEventListenerInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;
        
        

    readonly ownerLayer: PathFindingLayerInterface

    private endList: BasicArrayList = basicArrayListUtil!.getImmutableInstance()!;
        
        

    private paths: BasicArrayList[][] = basicArrayListUtil!.NULL_ARRAY_OF_ARRAY;
        
        
public constructor (ownerLayer: PathFindingLayerInterface, sound: Sound)                        

                            : super(sound){

            super();
                //var ownerLayer = ownerLayer
    //var sound = sound


                            //For kotlin this is before the body of the constructor.
                    
this.ownerLayer= ownerLayer
}


                //@Throws(Error::class)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
    //var allBinaryGameLayerManager = allBinaryGameLayerManager
super.setAllBinaryGameLayerManager(allBinaryGameLayerManager)

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = allBinaryGameLayerManager as GeographicMapCompositeInterface;
        
        


    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        


    var tiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        


                        if(paths != basicArrayListUtil!.NULL_ARRAY_OF_ARRAY)
                        
                                    {
                                    


                            throw RuntimeException()

                                    }
                                
this.endList= this.ownerLayer!.getEndGeographicMapCellPositionList()
this.paths= Array(tiledLayer!.getColumns()) { arrayOfNulls<BasicArrayList?>(tiledLayer!.getRows()) }
                                                            
}


    public releaseCachedPaths(){




                        for (
    var columnIndex: number = paths.length
                ;
        
        
--columnIndex >= 0; )
        {




                        for (
    var rowIndex: number = paths.length
                ;
        
        
--rowIndex >= 0; )
        {

    var pathsList: BasicArrayList = this.paths[columnIndex]![rowIndex]!;
        
        


                        if(pathsList != basicArrayListUtil!.getImmutableInstance())
                        
                                    {
                                    BasicGeographicMapExtractedPathsCacheFactory.getInstance()!.release(pathsList)

                                    }
                                
}

}

}


                //@Throws(Error::class)
            
    public getPathsListFromCacheOnly(geographicMapCellPosition: GeographicMapCellPosition): BasicArrayList{
    //var geographicMapCellPosition = geographicMapCellPosition



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paths[geographicMapCellPosition!.getColumn()]![geographicMapCellPosition!.getRow()]!;
    
}


                //@Throws(Error::class)
            
    public getPathsList(geographicMapCellPosition: GeographicMapCellPosition): BasicArrayList{
    //var geographicMapCellPosition = geographicMapCellPosition

    var pathsList: BasicArrayList = this.paths[geographicMapCellPosition!.getColumn()]![geographicMapCellPosition!.getRow()]!;
        
        


                        if(pathsList == basicArrayListUtil!.getImmutableInstance())
                        
                                    {
                                    pathsList= this.createPaths(geographicMapCellPosition)
this.paths[geographicMapCellPosition!.getColumn()]![geographicMapCellPosition!.getRow()]= pathsList

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pathsList;
    
}


    getEndGeographicMapCellPosition(startGeographicMapCellPosition: GeographicMapCellPosition): GeographicMapCellPosition{
    //var startGeographicMapCellPosition = startGeographicMapCellPosition

    var endGeographicMapCellPosition: GeographicMapCellPosition = basicArrayListUtil!.getRandom(this.endList) as GeographicMapCellPosition;
        
        


                        if(startGeographicMapCellPosition == endGeographicMapCellPosition)
                        
                                    {
                                    



                        for (
    var index: number = this.endList!.size() -1;
        
        
index >= 0; index--)
        {
endGeographicMapCellPosition= this.endList!.get(index) as GeographicMapCellPosition

                        if(startGeographicMapCellPosition != endGeographicMapCellPosition)
                        
                                    {
                                    break;

                    

                                    }
                                
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return endGeographicMapCellPosition;
    
}


                //@Throws(Error::class)
            
    createPaths(startGeographicMapCellPosition: GeographicMapCellPosition): BasicArrayList{
    //var startGeographicMapCellPosition = startGeographicMapCellPosition

                        if(this.endList!.size() == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicArrayListUtil!.getImmutableInstance();
    

                                    }
                                

    var endGeographicMapCellPosition: GeographicMapCellPosition = this.getEndGeographicMapCellPosition(startGeographicMapCellPosition)!;
        
        


                        if(endGeographicMapCellPosition == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicArrayListUtil!.getImmutableInstance();
    

                                    }
                                

                        if(startGeographicMapCellPosition == endGeographicMapCellPosition)
                        
                                    {
                                    
                        if(this.ownerLayer!.shouldHandleStartSameAsEnd())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicArrayListUtil!.getImmutableInstance();
    

                                    }
                                
                        else {
                            


                            throw Error("Start should not be End: " +this.endList!.size())

                        }
                            

                                    }
                                

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = this.allBinaryGameLayerManagerP as GeographicMapCompositeInterface;
        
        


    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        


    var raceTrackGeographicMap: RaceTrackGeographicMap = geographicMapInterface as RaceTrackGeographicMap;
        
        


    var raceTrackGeographicMapCellTypeFactory: GeographicMapCellTypeFactory = raceTrackGeographicMap!.getGeographicMapCellTypeFactory()!;
        
        


    var customMapGenerator: CustomMapGenerator = raceTrackGeographicMap!.getCustomMapGenerator() as CustomMapGenerator;
        
        

customMapGenerator!.copyMapIntoCustomMap()

    var customMapArray: IntArray[] = customMapGenerator!.getCustomMapArray()!;
        
        

customMapArray[startGeographicMapCellPosition!.getRow()]![startGeographicMapCellPosition!.getColumn()]= raceTrackGeographicMapCellTypeFactory!.getStartType()
customMapArray[endGeographicMapCellPosition!.getRow()]![endGeographicMapCellPosition!.getColumn()]= raceTrackGeographicMapCellTypeFactory!.getEndType()

    var pathFindingInfo: PathFindingInfo = PathFindingInfoFactory.getInstance()!.getInstance(raceTrackGeographicMap, customMapArray)!;
        
        


    var list: BasicArrayList = PathGenerator.getInstance()!.getInstanceNoCache(geographicMapInterface, pathFindingInfo, 2)!;
        
        


                        if(list.size() < 1)
                        
                                    {
                                    


                            throw Error("Path may have been cleared by clearing caching")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


    public onEvent(eventObject: AllBinaryEventObject){
    //var eventObject = eventObject
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this)
}


                //@Throws(Error::class)
            
    public onBuildingEvent(event: RTSLayerEvent){
    //var event = event




                        for (
    var columnIndex: number = paths.length
                ;
        
        
--columnIndex >= 0; )
        {




                        for (
    var rowIndex: number = paths.length
                ;
        
        
--rowIndex >= 0; )
        {
this.paths[columnIndex]![rowIndex]= basicArrayListUtil!.getImmutableInstance()
}

}

}


    public reset(){
this.getConnectedWaypointList()!.clear()
this.this.releaseCachedPaths()
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
        
        


                        if(size > 0)
                        
                                    {
                                    
    var unitWaypointBehavior: UnitWaypointBehavior = unitLayer!.getWaypointBehavior() as UnitWaypointBehavior;
        
        


        while(this.getConnectedWaypointList()!.size() > 0)
        {

    var rtsLayer: CollidableDestroyableDamageableLayer = this.getConnectedWaypointList()!.get(0) as CollidableDestroyableDamageableLayer;
        
        


                        if(rtsLayer!.isDestroyed())
                        
                                    {
                                    this.getConnectedWaypointList()!.remove(rtsLayer)

                                    }
                                
                        else {
                            unitLayer!.handleCost(this.ownerLayer)
unitWaypointBehavior!.insertWaypoint(0, rtsLayer)
break;

                    

                        }
                            
}


                                    }
                                
}


}
                
            

