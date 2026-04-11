
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
        



import { GraphPath } from "../../../../../../../../org/jgrapht/GraphPath.js";

    
import { SimpleWeightedGraph } from "../../../../../../../../org/jgrapht/graph/SimpleWeightedGraph.js";

    
import { StringMaker } from "../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { BasicGeographicMap } from "../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { PathFinderGraphVisitorBase } from "../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFinderGraphVisitorBase.js";

    
import { PathFindingNode } from "../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNode.js";

    
import { BasicArrayList } from "../../../../../../../../org/allbinary/util/BasicArrayList.js";

    

export class BasePathFinderGraphVisitor extends PathFinderGraphVisitorBase {
        

    geographicMapInterface: BasicGeographicMap

    readonly edgeMinimum: number

    readonly minPathWeight: number

    readonly maxPathWeight: number
public constructor (geographicMapInterface: BasicGeographicMap, edgeMinimum: number, minPathWeight: number, maxPathWeight: number){

            super();
            var geographicMapInterface = geographicMapInterface
var edgeMinimum = edgeMinimum
var minPathWeight = minPathWeight
var maxPathWeight = maxPathWeight
this.geographicMapInterface= geographicMapInterface;
    
this.edgeMinimum= edgeMinimum;
    
this.minPathWeight= minPathWeight;
    
this.maxPathWeight= maxPathWeight;
    
}


                //@Throws(Error::class)
            
    public visit(graph: SimpleWeightedGraph, startPathFindingNodeList: BasicArrayList, endPathFindingNodeList: BasicArrayList){
var graph = graph
var startPathFindingNodeList = startPathFindingNodeList
var endPathFindingNodeList = endPathFindingNodeList
}


                //@Throws(Error::class)
            
    public fixPath(startPathFindingNodeList: BasicArrayList, endPathFindingNodeList: BasicArrayList, pathList: BasicArrayList){
var startPathFindingNodeList = startPathFindingNodeList
var endPathFindingNodeList = endPathFindingNodeList
var pathList = pathList




                        for (
    var index: number = startPathFindingNodeList!.size() -1;
        
        
index >= 0; index--)
        {

    var startPathFindingNode: PathFindingNode = startPathFindingNodeList!.get(index);

                         as PathFindingNode;
        
        
;
    
pathList!.remove(startPathFindingNode!.geographicMapCellPosition);
    
pathList!.add(0, startPathFindingNode!.geographicMapCellPosition);
    
}

}


    public isValid(graphPath: GraphPath): boolean{
var graphPath = graphPath

                        if(graphPath!.getEdgeList()!.size() > edgeMinimum && graphPath!.getWeight() < maxPathWeight && graphPath!.getWeight() > minPathWeight)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public getInvalidReason(graphPath: GraphPath): string{
var graphPath = graphPath

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

                        if(graphPath!.getEdgeList()!.size() < edgeMinimum)
                        
                                    {
                                    stringBuffer!.append("Ignoring Small: " +graphPath!.getEdgeList()!.size());
    

                                    }
                                

                        if(graphPath!.getWeight() <= minPathWeight)
                        
                                    {
                                    stringBuffer!.append(" Low Weighted Path: " +graphPath!.getWeight());
    

                                    }
                                

                        if(graphPath!.getWeight() >= maxPathWeight)
                        
                                    {
                                    stringBuffer!.append(" To High Weighted Path: " +graphPath!.getWeight());
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

