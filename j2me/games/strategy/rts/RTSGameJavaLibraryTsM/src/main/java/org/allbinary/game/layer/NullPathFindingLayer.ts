
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        



import { CaptionAnimationHelperBase } from "../../../../org/allbinary/animation/caption/CaptionAnimationHelperBase.js";

    
import { Group } from "../../../../org/allbinary/game/identification/Group.js";

    
import { Waypoint2LogHelper } from "../../../../org/allbinary/game/layer/waypoint/Waypoint2LogHelper.js";

    
import { WaypointLogHelper } from "../../../../org/allbinary/game/layer/waypoint/WaypointLogHelper.js";

    
import { WaypointRunnableLogHelper } from "../../../../org/allbinary/game/layer/waypoint/WaypointRunnableLogHelper.js";

    
import { TrackingEvent } from "../../../../org/allbinary/game/tracking/TrackingEvent.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { GeographicMapCellHistory } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js";

    
import { GeographicMapCellPosition } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class NullPathFindingLayer
            extends Object
        
                , PathFindingLayerInterface {
        

    public static readonly NULL_PATH_FINDING_LAYER: NullPathFindingLayer = new NullPathFindingLayer();
        
        

    public getName(): string{



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public getEndGeographicMapCellPositionList(): BasicArrayList{



                            throw new RuntimeException()
}


    public shouldHandleStartSameAsEnd(): boolean{



                            throw new RuntimeException()
}


    public getGeographicMapCellPositionArea(): GeographicMapCellPositionAreaBase{



                            throw new RuntimeException()
}


    public getHudPaintable(): SelectionHudPaintable{



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public handleCost(ownerLayer: PathFindingLayerInterface){
var ownerLayer = ownerLayer



                            throw new RuntimeException()
}


    public getParentLayer(): PathFindingLayerInterface{



                            throw new RuntimeException()
}


    public getRTSLayer2LogHelper(): RTSLayer2LogHelper{



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public setTarget(targetGameLayer: PathFindingLayerInterface){
    //var targetGameLayer = targetGameLayer



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public init(geographicMapCellHistory: GeographicMapCellHistory, geographicMapCellPositionBasicArrayList: BasicArrayList){
    //var geographicMapCellHistory = geographicMapCellHistory
    //var geographicMapCellPositionBasicArrayList = geographicMapCellPositionBasicArrayList



                            throw new RuntimeException()
}


    public getMoveOutOfBuildAreaPath(geographicMapCellPosition: GeographicMapCellPosition): BasicArrayList{
    //var geographicMapCellPosition = geographicMapCellPosition



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public setClosestGeographicMapCellHistory(pathsList: BasicArrayList){
    //var pathsList = pathsList



                            throw new RuntimeException()
}


    public teleportTo(geographicMapCellPosition: GeographicMapCellPosition){
    //var geographicMapCellPosition = geographicMapCellPosition



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public setLoad(resource: number){
var resource = resource



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public getSurroundingGeographicMapCellPositionList(): BasicArrayList{



                            throw new RuntimeException()
}


    public isSelected(): boolean{



                            throw new RuntimeException()
}


    public shouldAddWaypointFromBuilding(): boolean{



                            throw new RuntimeException()
}


    public isShowMoreCaptionStates(): boolean{



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public trackTo(reason: string){
    //var reason = reason



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public trackTo(dx: number, dy: number){
    //var dx = dx
    //var dy = dy



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public buildingChase(allbinaryLayer: AllBinaryLayer, cellPosition: GeographicMapCellPosition): boolean{
    //var allbinaryLayer = allbinaryLayer
    //var cellPosition = cellPosition



                            throw new RuntimeException()
}


    public getTrackingEvent(): TrackingEvent{



                            throw new RuntimeException()
}


    public allStop(){



                            throw new RuntimeException()
}


    public isWaypointListEmptyOrOnlyTargets(): boolean{



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public getCurrentGeographicMapCellPosition(): GeographicMapCellPosition{



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public getTopLeftGeographicMapCellPosition(): GeographicMapCellPosition{



                            throw new RuntimeException()
}


    public getCaptionAnimationHelper(): CaptionAnimationHelperBase{



                            throw new RuntimeException()
}


    public getWaypointBehavior(): WaypointBehaviorBase{



                            throw new RuntimeException()
}


    public getWaypointLogHelper(): WaypointLogHelper{



                            throw new RuntimeException()
}


    public getWaypoint2LogHelper(): Waypoint2LogHelper{



                            throw new RuntimeException()
}


    public getWaypointRunnableLogHelper(): WaypointRunnableLogHelper{



                            throw new RuntimeException()
}


    public getGroupInterface(): Group[]{



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public isDestroyed(): boolean{



                            throw new RuntimeException()
}


    public getSourceId(): number{



                            throw new RuntimeException()
}


}
                
            

