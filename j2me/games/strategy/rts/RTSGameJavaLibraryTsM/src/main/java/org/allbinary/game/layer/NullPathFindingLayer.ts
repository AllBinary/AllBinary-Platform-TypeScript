
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

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PathFindingLayerInterface } from "./PathFindingLayerInterface.js";

import { RuntimeException } from "./RuntimeException.js";

import { GeographicMapCellPositionAreaBase } from "./GeographicMapCellPositionAreaBase.js";

import { SelectionHudPaintable } from "./SelectionHudPaintable.js";

import { RTSLayer2LogHelper } from "./RTSLayer2LogHelper.js";

import { WaypointBehaviorBase } from "./WaypointBehaviorBase.js";

export class NullPathFindingLayer
            extends Object
         implements PathFindingLayerInterface {
        

    public static readonly NULL_PATH_FINDING_LAYER: NullPathFindingLayer = new NullPathFindingLayer();

    public getName(): string{



                            throw Error();
                    
}


                //@Throws(Error::class)
            
    public getEndGeographicMapCellPositionList(): BasicArrayList{



                            throw Error();
                    
}


    public shouldHandleStartSameAsEnd(): boolean{



                            throw Error();
                    
}


    public getGeographicMapCellPositionArea(): GeographicMapCellPositionAreaBase{



                            throw Error();
                    
}


    public getHudPaintable(): SelectionHudPaintable{



                            throw Error();
                    
}


                //@Throws(Error::class)
            
    public handleCost(ownerLayer: PathFindingLayerInterface){
var ownerLayer = ownerLayer



                            throw Error();
                    
}


    public getParentLayer(): PathFindingLayerInterface{



                            throw Error();
                    
}


    public getRTSLayer2LogHelper(): RTSLayer2LogHelper{



                            throw Error();
                    
}


                //@Throws(Error::class)
            
    public setTarget(targetGameLayer: PathFindingLayerInterface){
    //var targetGameLayer = targetGameLayer



                            throw Error();
                    
}


                //@Throws(Error::class)
            
    public init(geographicMapCellHistory: GeographicMapCellHistory, geographicMapCellPositionBasicArrayList: BasicArrayList){
    //var geographicMapCellHistory = geographicMapCellHistory
    //var geographicMapCellPositionBasicArrayList = geographicMapCellPositionBasicArrayList



                            throw Error();
                    
}


    public getMoveOutOfBuildAreaPath(geographicMapCellPosition: GeographicMapCellPosition): BasicArrayList{
    //var geographicMapCellPosition = geographicMapCellPosition



                            throw Error();
                    
}


                //@Throws(Error::class)
            
    public setClosestGeographicMapCellHistory(pathsList: BasicArrayList){
    //var pathsList = pathsList



                            throw Error();
                    
}


    public teleportTo(geographicMapCellPosition: GeographicMapCellPosition){
    //var geographicMapCellPosition = geographicMapCellPosition



                            throw Error();
                    
}


                //@Throws(Error::class)
            
    public setLoad(resource: number){
var resource = resource



                            throw Error();
                    
}


                //@Throws(Error::class)
            
    public getSurroundingGeographicMapCellPositionList(): BasicArrayList{



                            throw Error();
                    
}


    public isSelected(): boolean{



                            throw Error();
                    
}


    public shouldAddWaypointFromBuilding(): boolean{



                            throw Error();
                    
}


    public isShowMoreCaptionStates(): boolean{



                            throw Error();
                    
}


                //@Throws(Error::class)
            
    public trackTo(reason: string){
    //var reason = reason



                            throw Error();
                    
}


                //@Throws(Error::class)
            
    public trackToDXY(dx: number, dy: number){
    //var dx = dx
    //var dy = dy



                            throw Error();
                    
}


                //@Throws(Error::class)
            
    public buildingChase(allbinaryLayer: AllBinaryLayer, cellPosition: GeographicMapCellPosition): boolean{
    //var allbinaryLayer = allbinaryLayer
    //var cellPosition = cellPosition



                            throw Error();
                    
}


    public getTrackingEvent(): TrackingEvent{



                            throw Error();
                    
}


    public allStop(){



                            throw Error();
                    
}


    public isWaypointListEmptyOrOnlyTargets(): boolean{



                            throw Error();
                    
}


                //@Throws(Error::class)
            
    public getCurrentGeographicMapCellPosition(): GeographicMapCellPosition{



                            throw Error();
                    
}


                //@Throws(Error::class)
            
    public getTopLeftGeographicMapCellPosition(): GeographicMapCellPosition{



                            throw Error();
                    
}


    public getCaptionAnimationHelper(): CaptionAnimationHelperBase{



                            throw Error();
                    
}


    public getWaypointBehavior(): WaypointBehaviorBase{



                            throw Error();
                    
}


    public getWaypointLogHelper(): WaypointLogHelper{



                            throw Error();
                    
}


    public getWaypoint2LogHelper(): Waypoint2LogHelper{



                            throw Error();
                    
}


    public getWaypointRunnableLogHelper(): WaypointRunnableLogHelper{



                            throw Error();
                    
}


    public getGroupInterface(): Group[]{



                            throw Error();
                    
}


                //@Throws(Error::class)
            
    public isDestroyed(): boolean{



                            throw Error();
                    
}


    public getSourceId(): number{



                            throw Error();
                    
}


}
                
            

