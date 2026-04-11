
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
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
        



import { BasicArrayList } from "../../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { GPoint } from "../../../../../../../org/allbinary/graphics/GPoint.js";

    
import { PointFactory } from "../../../../../../../org/allbinary/graphics/PointFactory.js";

    
import { BasicGeographicMap } from "../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCellPosition } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { PathFindingInfo } from "../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js";

    
import { PathFindingNode } from "../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNode.js";

    

export class RaceTrackStartPointUtil
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static get(geographicMapInterface: BasicGeographicMap, pathFindingInfo: PathFindingInfo, index: number): GPoint{
    //var geographicMapInterface = geographicMapInterface
    //var pathFindingInfo = pathFindingInfo
    //var index = index

    var list: BasicArrayList = pathFindingInfo!.getStartPathFindingNodeList()!;
        
        
;
    

    var startPathFindingNode: PathFindingNode = list.get(index);

                         as PathFindingNode;
        
        
;
    

    var geographicMapCellPosition: GeographicMapCellPosition = startPathFindingNode!.geographicMapCellPosition;
        
        
;
    

    var point: GPoint = geographicMapCellPosition!.getPoint()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PointFactory.getInstance()!.getInstance(point.getX(), point.getY() +geographicMapInterface!.getAllBinaryTiledLayer()!.getHalfCellHeight());

                        ;
    
}


}
                
            

