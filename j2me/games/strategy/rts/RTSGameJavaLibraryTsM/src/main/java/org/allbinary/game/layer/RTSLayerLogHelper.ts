
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


        
import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
      
import { NamedAngle } from '../../../../org/allbinary/math/NamedAngle.js';
      
import { GeographicMapCellHistory } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js';
      
import { GeographicMapCellPosition } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      
import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PathFindingLayerInterface } from './PathFindingLayerInterface.js';

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
                
            

