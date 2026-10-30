
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { BasicGeographicMap } from '../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
//not GWT import const BasicGeographicMap

import { GeographicMapCellPosition } from '../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
//not GWT import const GeographicMapCellPosition

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PathFindingNodeCostInfoFactoryBase } from './PathFindingNodeCostInfoFactoryBase.js';
//not GWT import - same folder const PathFindingNodeCostInfoFactoryBase
import { PathFindingNodeCostInfo } from './PathFindingNodeCostInfo.js';
//not GWT import - same folder const PathFindingNodeCostInfo

export class PathFindingNodeCostInfoFactory extends PathFindingNodeCostInfoFactoryBase {
        

    private readonly pathFindingNodeCostInfoAdjacencyList: PathFindingNodeCostInfo[][];

public constructor (max: number){

            super();
        this.pathFindingNodeCostInfoAdjacencyList= new Array(max).fill(null).map(() => new Array(max).fill(null))
                                                            ;
    
}


                //@Throws(Exception.constructor)
            
    public create(geographicMapInterface: BasicGeographicMap, goingToGeographicMapCellPosition: GeographicMapCellPosition, geographicMapCellPosition: GeographicMapCellPosition, costFromStart: number, costToEnd: number){
this.getInstance(goingToGeographicMapCellPosition, geographicMapCellPosition, costFromStart, costToEnd);
    
}

getInstance(...args: any[]): any {
   
    if (args.length === 4 && typeof args[2] === 'number' && typeof args[3] === 'number') return this.getInstance$overload1(args[0], args[1], args[2], args[3]);
   
    if (args.length === 2) return this.getInstance$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
                //@Throws(Exception.constructor)
            
    public getInstance$overload1(goingToGeographicMapCellPosition: GeographicMapCellPosition, geographicMapCellPosition: GeographicMapCellPosition, costFromStart: number, costToEnd: number): PathFindingNodeCostInfo{

    let pathFindingNodeCostInfo: PathFindingNodeCostInfo = this.getInstance(goingToGeographicMapCellPosition, geographicMapCellPosition)!;;
    

                        if(pathFindingNodeCostInfo == 
                                    null
                                )
                        
                                    {
                                    pathFindingNodeCostInfo= new PathFindingNodeCostInfo(costFromStart, costToEnd);
    
pathFindingNodeCostInfo!.setCalculatedTotalCost();
    
this.pathFindingNodeCostInfoAdjacencyList[geographicMapCellPosition!.getId()]![goingToGeographicMapCellPosition!.getId()]= pathFindingNodeCostInfo;
    

                                    }
                                
                        else {
                            pathFindingNodeCostInfo!.setCostFromStart(costFromStart);
    
pathFindingNodeCostInfo!.setCostToEnd(costToEnd);
    
pathFindingNodeCostInfo!.setCalculatedTotalCost();
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pathFindingNodeCostInfo;
    
}


    public getInstance$overload2(goingToFromGeographicMapCellPosition: GeographicMapCellPosition, geographicMapCellPosition: GeographicMapCellPosition): PathFindingNodeCostInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.pathFindingNodeCostInfoAdjacencyList[geographicMapCellPosition!.getId()]![goingToFromGeographicMapCellPosition!.getId()]!;
    
}


    public getTotalCost(geographicMapInterface: BasicGeographicMap, comingFromGeographicMapCellPosition: GeographicMapCellPosition, geographicMapCellPosition: GeographicMapCellPosition): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(comingFromGeographicMapCellPosition, geographicMapCellPosition)!.totalCostP;
    
}


}

