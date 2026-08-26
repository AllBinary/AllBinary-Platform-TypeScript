
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
        



            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
//not game specific package import { BasicArrayList } from '../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { GPoint } from '../../../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
//not game specific package import { PointFactory } from '../../../../../../../org/allbinary/graphics/PointFactory.js';
      const PointFactory = globalThis.org.allbinary.graphics.PointFactory;

      
//not game specific package import { BasicGeographicMap } from '../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
//not game specific package import { GeographicMapCellPosition } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
//not game specific package import { PathFindingInfo } from '../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js';
      const PathFindingInfo = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingInfo;

      
//not game specific package import { PathFindingNode } from '../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNode.js';
      const PathFindingNode = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingNode;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RaceTrackStartPointUtil
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static get(geographicMapInterface: BasicGeographicMap, pathFindingInfo: PathFindingInfo, index: number): GPoint{

    var list: BasicArrayList = pathFindingInfo!.getStartPathFindingNodeList()!;;
    

    var startPathFindingNode: PathFindingNode = list.get(index) as PathFindingNode;;
    

    var geographicMapCellPosition: GeographicMapCellPosition = startPathFindingNode!.geographicMapCellPosition;;
    

    var point: GPoint = geographicMapCellPosition!.getPoint()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PointFactory.getInstance()!.createXY(point.getX(), point.getY() +geographicMapInterface!.getAllBinaryTiledLayer()!.getHalfCellHeight());;
    
}


}
                
            

