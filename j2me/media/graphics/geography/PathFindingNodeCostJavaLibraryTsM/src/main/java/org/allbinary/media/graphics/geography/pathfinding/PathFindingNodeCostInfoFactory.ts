
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { BasicGeographicMap } from '../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      
import { GeographicMapCellPosition } from '../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PathFindingNodeCostInfoFactoryBase } from './PathFindingNodeCostInfoFactoryBase.js';
import { PathFindingNodeCostInfo } from './PathFindingNodeCostInfo.js';

export class PathFindingNodeCostInfoFactory extends PathFindingNodeCostInfoFactoryBase {
        

    private readonly pathFindingNodeCostInfoAdjacencyList: PathFindingNodeCostInfo[][];

public constructor (max: number){

            super();
        this.pathFindingNodeCostInfoAdjacencyList= new Array(max).fill(null).map(() => new Array(max).fill(0))
                                                            ;
    
}


                //@Throws(Exception.constructor)
            
    public create(geographicMapInterface: BasicGeographicMap, goingToGeographicMapCellPosition: GeographicMapCellPosition, geographicMapCellPosition: GeographicMapCellPosition, costFromStart: number, costToEnd: number){
this.getInstance(goingToGeographicMapCellPosition, geographicMapCellPosition, costFromStart, costToEnd);
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(goingToGeographicMapCellPosition: GeographicMapCellPosition, geographicMapCellPosition: GeographicMapCellPosition, costFromStart: number, costToEnd: number): PathFindingNodeCostInfo{

    var pathFindingNodeCostInfo: PathFindingNodeCostInfo = this.getInstance(goingToGeographicMapCellPosition, geographicMapCellPosition)!;;
    

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


    public getInstance(goingToFromGeographicMapCellPosition: GeographicMapCellPosition, geographicMapCellPosition: GeographicMapCellPosition): PathFindingNodeCostInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.pathFindingNodeCostInfoAdjacencyList[geographicMapCellPosition!.getId()]![goingToFromGeographicMapCellPosition!.getId()]!;
    
}


    public getTotalCost(geographicMapInterface: BasicGeographicMap, comingFromGeographicMapCellPosition: GeographicMapCellPosition, geographicMapCellPosition: GeographicMapCellPosition): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(comingFromGeographicMapCellPosition, geographicMapCellPosition)!.totalCostP;
    
}


}
                
            

