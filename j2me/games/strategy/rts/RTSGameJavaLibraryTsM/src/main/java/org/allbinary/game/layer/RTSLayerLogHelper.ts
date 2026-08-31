
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
//not plain js import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
      const AngleInfo = globalThis.org.allbinary.math.AngleInfo;

      
//not plain js import { NamedAngle } from '../../../../org/allbinary/math/NamedAngle.js';
      const NamedAngle = globalThis.org.allbinary.math.NamedAngle;

      
import { GeographicMapCellHistory } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js';
      //not GWT import const GeographicMapCellHistory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellHistory;

      
import { GeographicMapCellPosition } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      //not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PathFindingLayerInterface } from './PathFindingLayerInterface.js';
//not GWT import const PathFindingLayerInterface = globalThis.org.allbinary.game.layer.PathFindingLayerInterface;

                
export class RTSLayerLogHelper
            extends Object
         {
        

    private static readonly instance: RTSLayerLogHelper = new RTSLayerLogHelper();

    public static getInstance(): RTSLayerLogHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RTSLayerLogHelper.instance;
    
}


    public setClosestGeographicMapCellHistory(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, pathsList: BasicArrayList){
}


    public trackTo(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, nextUnvisitedPathGeographicMapCellPosition: GeographicMapCellPosition, dx: number, dy: number, reason: string){
}


    public turnTo(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, dx: number, dy: number, angleInfo: AngleInfo, angle: number, movementAngle: NamedAngle, evading: boolean, targetAngle: number){
}


    public doneMoving(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
}


    public closeEnough(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
}


    public movingLeft(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
}


    public movingRight(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
}


    public movingUp(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
}


    public movingDown(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
}


    public currentMoveEnded(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
}


    public evade(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
}


    public rotateLeft(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
}


    public rotateRight(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
}


    public handle(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, movementAngle: NamedAngle){
}


    public noRotation(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
}


    public notOnPath(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, geographicMapCellHistory: GeographicMapCellHistory, currentGeographicMapCellPosition: GeographicMapCellPosition, pathList: BasicArrayList){
}


}



