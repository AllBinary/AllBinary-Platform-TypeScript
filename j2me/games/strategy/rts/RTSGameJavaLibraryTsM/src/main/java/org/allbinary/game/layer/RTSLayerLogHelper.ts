
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
        



import { AngleInfo } from "../../../../org/allbinary/math/AngleInfo.js";

    
import { NamedAngle } from "../../../../org/allbinary/math/NamedAngle.js";

    
import { GeographicMapCellHistory } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js";

    
import { GeographicMapCellPosition } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PathFindingLayerInterface } from "./PathFindingLayerInterface.js";

export class RTSLayerLogHelper
            extends Object
         {
        

    private static readonly instance: RTSLayerLogHelper = new RTSLayerLogHelper();
        
        

    public static getInstance(): RTSLayerLogHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public setClosestGeographicMapCellHistory(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, pathsList: BasicArrayList){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var pathsList = pathsList
}


    public trackTo(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, nextUnvisitedPathGeographicMapCellPosition: GeographicMapCellPosition, dx: number, dy: number, reason: string){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var nextUnvisitedPathGeographicMapCellPosition = nextUnvisitedPathGeographicMapCellPosition
    //var dx = dx
    //var dy = dy
    //var reason = reason
}


    public turnTo(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, dx: number, dy: number, angleInfo: AngleInfo, angle: number, movementAngle: NamedAngle, evading: boolean, targetAngle: number){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var dx = dx
    //var dy = dy
    //var angleInfo = angleInfo
    //var angle = angle
    //var movementAngle = movementAngle
    //var evading = evading
var targetAngle = targetAngle
}


    public doneMoving(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
}


    public closeEnough(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
}


    public movingLeft(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
}


    public movingRight(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
}


    public movingUp(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
}


    public movingDown(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
}


    public currentMoveEnded(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
}


    public evade(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
}


    public rotateLeft(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
}


    public rotateRight(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
}


    public handle(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, movementAngle: NamedAngle){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var movementAngle = movementAngle
}


    public noRotation(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
}


    public notOnPath(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, geographicMapCellHistory: GeographicMapCellHistory, currentGeographicMapCellPosition: GeographicMapCellPosition, pathList: BasicArrayList){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var geographicMapCellHistory = geographicMapCellHistory
    //var currentGeographicMapCellPosition = currentGeographicMapCellPosition
    //var pathList = pathList
}


}
                
            

