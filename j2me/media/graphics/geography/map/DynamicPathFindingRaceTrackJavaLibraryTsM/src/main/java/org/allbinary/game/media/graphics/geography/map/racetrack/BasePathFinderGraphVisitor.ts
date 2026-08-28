
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
        



            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
//not game specific package import { GraphPath } from '../../../../../../../../org/jgrapht/GraphPath.js';
      const GraphPath = globalThis.org.jgrapht.GraphPath;

      
//not game specific package import { SimpleWeightedGraph } from '../../../../../../../../org/jgrapht/graph/SimpleWeightedGraph.js';
      const SimpleWeightedGraph = globalThis.org.jgrapht.graph.SimpleWeightedGraph;

      
//not game specific package import { StringMaker } from '../../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { BasicGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
//not game specific package import { PathFinderGraphVisitorBase } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFinderGraphVisitorBase.js';
      const PathFinderGraphVisitorBase = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFinderGraphVisitorBase;

      
//not game specific package import { PathFindingNode } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNode.js';
      const PathFindingNode = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingNode;

      
//not game specific package import { BasicArrayList } from '../../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasePathFinderGraphVisitor extends PathFinderGraphVisitorBase {
        

    geographicMapInterface: BasicGeographicMap;

    readonly edgeMinimum: number;

    readonly minPathWeight: number;

    readonly maxPathWeight: number;

public constructor (geographicMapInterface: BasicGeographicMap, edgeMinimum: number, minPathWeight: number, maxPathWeight: number){

            super();
        this.geographicMapInterface= geographicMapInterface;
    
this.edgeMinimum= edgeMinimum;
    
this.minPathWeight= minPathWeight;
    
this.maxPathWeight= maxPathWeight;
    
}


                //@Throws(Exception.constructor)
            
    public visit(graph: SimpleWeightedGraph, startPathFindingNodeList: BasicArrayList, endPathFindingNodeList: BasicArrayList){
}


                //@Throws(Exception.constructor)
            
    public fixPath(startPathFindingNodeList: BasicArrayList, endPathFindingNodeList: BasicArrayList, pathList: BasicArrayList){




                        for (
    var index: number = startPathFindingNodeList!.size() -1;index >= 0; index--)
        {

    var startPathFindingNode: PathFindingNode = startPathFindingNodeList!.get(index) as PathFindingNode;;
    
pathList!.remove(startPathFindingNode!.geographicMapCellPosition);
    
pathList!.addAt(0, startPathFindingNode!.geographicMapCellPosition);
    
}

}


    public isValid(graphPath: GraphPath): boolean{

                        if(graphPath!.getEdgeList()!.size() > this.edgeMinimum && graphPath!.getWeight() < this.maxPathWeight && graphPath!.getWeight() > this.minPathWeight)
                        
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

    var stringBuffer: StringMaker = new StringMaker();;
    

                        if(graphPath!.getEdgeList()!.size() < this.edgeMinimum)
                        
                                    {
                                    stringBuffer!.append("Ignoring Small: " +graphPath!.getEdgeList()!.size());
    

                                    }
                                

                        if(graphPath!.getWeight() <= this.minPathWeight)
                        
                                    {
                                    stringBuffer!.append(" Low Weighted Path: " +graphPath!.getWeight());
    

                                    }
                                

                        if(graphPath!.getWeight() >= this.maxPathWeight)
                        
                                    {
                                    stringBuffer!.append(" To High Weighted Path: " +graphPath!.getWeight());
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}



