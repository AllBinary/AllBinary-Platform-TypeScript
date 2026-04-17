
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
        



import { BasicGeographicMap } from "../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCellPosition } from "../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PathFindingNodeCostInfoFactoryBase } from "./PathFindingNodeCostInfoFactoryBase.js";

import { PathFindingNodeCostInfo } from "./PathFindingNodeCostInfo.js";

export class PathFindingNodeCostInfoFactory extends PathFindingNodeCostInfoFactoryBase {
        

    private readonly pathFindingNodeCostInfoAdjacencyList: PathFindingNodeCostInfo[][]
public constructor (max: number){

            super();
            var max = max
this.pathFindingNodeCostInfoAdjacencyList= Array(max) { arrayOfNulls<PathFindingNodeCostInfo?>(max) }
                                                            ;
    
}


                //@Throws(Error::class)
            
    public create(geographicMapInterface: BasicGeographicMap, goingToGeographicMapCellPosition: GeographicMapCellPosition, geographicMapCellPosition: GeographicMapCellPosition, costFromStart: number, costToEnd: number){
    //var geographicMapInterface = geographicMapInterface
    //var goingToGeographicMapCellPosition = goingToGeographicMapCellPosition
    //var geographicMapCellPosition = geographicMapCellPosition
    //var costFromStart = costFromStart
    //var costToEnd = costToEnd
this.getInstance(goingToGeographicMapCellPosition, geographicMapCellPosition, costFromStart, costToEnd);
    
}


                //@Throws(Error::class)
            
    public getInstance(goingToGeographicMapCellPosition: GeographicMapCellPosition, geographicMapCellPosition: GeographicMapCellPosition, costFromStart: number, costToEnd: number): PathFindingNodeCostInfo{
    //var goingToGeographicMapCellPosition = goingToGeographicMapCellPosition
    //var geographicMapCellPosition = geographicMapCellPosition
    //var costFromStart = costFromStart
    //var costToEnd = costToEnd

    var pathFindingNodeCostInfo: PathFindingNodeCostInfo = this.getInstance(goingToGeographicMapCellPosition, geographicMapCellPosition)!;
        
        
;
    

                        if(pathFindingNodeCostInfo == 
                                    null
                                )
                        
                                    {
                                    pathFindingNodeCostInfo= new PathFindingNodeCostInfo(costFromStart, costToEnd);
    
pathFindingNodeCostInfo!.setTotalCost();
    
this.pathFindingNodeCostInfoAdjacencyList[geographicMapCellPosition!.getId()]![goingToGeographicMapCellPosition!.getId()]= pathFindingNodeCostInfo;
    

                                    }
                                
                        else {
                            pathFindingNodeCostInfo!.setCostFromStart(costFromStart);
    
pathFindingNodeCostInfo!.setCostToEnd(costToEnd);
    
pathFindingNodeCostInfo!.setTotalCost();
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pathFindingNodeCostInfo;
    
}


    public getInstance(goingToFromGeographicMapCellPosition: GeographicMapCellPosition, geographicMapCellPosition: GeographicMapCellPosition): PathFindingNodeCostInfo{
    //var goingToFromGeographicMapCellPosition = goingToFromGeographicMapCellPosition
    //var geographicMapCellPosition = geographicMapCellPosition



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.pathFindingNodeCostInfoAdjacencyList[geographicMapCellPosition!.getId()]![goingToFromGeographicMapCellPosition!.getId()]!;
    
}


    public getTotalCost(geographicMapInterface: BasicGeographicMap, comingFromGeographicMapCellPosition: GeographicMapCellPosition, geographicMapCellPosition: GeographicMapCellPosition): number{
    //var geographicMapInterface = geographicMapInterface
    //var comingFromGeographicMapCellPosition = comingFromGeographicMapCellPosition
    //var geographicMapCellPosition = geographicMapCellPosition



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(comingFromGeographicMapCellPosition, geographicMapCellPosition)!.totalCostP;
    
}


}
                
            

