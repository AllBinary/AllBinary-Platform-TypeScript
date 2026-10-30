
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
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

import { GPoint } from '../../../../../../../org/allbinary/graphics/GPoint.js';
//not GWT import const GPoint

import { PointFactory } from '../../../../../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const PointFactory

import { BasicGeographicMap } from '../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
//not GWT import const BasicGeographicMap

import { GeographicMapCellPosition } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
//not GWT import const GeographicMapCellPosition

import { PathFindingInfo } from '../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js';
//not GWT import const PathFindingInfo

import { PathFindingNode } from '../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNode.js';
//not GWT import const PathFindingNode

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RaceTrackStartPointUtil
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static get(geographicMapInterface: BasicGeographicMap, pathFindingInfo: PathFindingInfo, index: number): GPoint{

    let list: BasicArrayList = pathFindingInfo!.getStartPathFindingNodeList()!;;
    

    let startPathFindingNode: PathFindingNode = list.get(index) as PathFindingNode;;
    

    let geographicMapCellPosition: GeographicMapCellPosition = startPathFindingNode!.geographicMapCellPosition;;
    

    let point: GPoint = geographicMapCellPosition!.getPoint()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PointFactory.getInstance()!.createXY(point.getX(), point.getY() +geographicMapInterface!.getAllBinaryTiledLayer()!.getHalfCellHeight());;
    
}


}

