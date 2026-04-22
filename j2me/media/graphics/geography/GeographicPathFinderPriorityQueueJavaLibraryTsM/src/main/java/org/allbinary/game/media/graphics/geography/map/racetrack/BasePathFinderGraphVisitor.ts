
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
        



import { StringUtil } from "../../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { BasicGeographicMap } from "../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { PathFinderGraphVisitorBase } from "../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFinderGraphVisitorBase.js";

    
import { PathFindingNode } from "../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNode.js";

    
import { BasicArrayList } from "../../../../../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasePathFinderGraphVisitor extends PathFinderGraphVisitorBase {
        

    geographicMapInterface: BasicGeographicMap

    readonly edgeMinimum: number

    readonly minPathWeight: number

    readonly maxPathWeight: number
public constructor (geographicMapInterface: BasicGeographicMap, edgeMinimum: number, minPathWeight: number, maxPathWeight: number){

            super();
            //var geographicMapInterface = geographicMapInterface
    //var edgeMinimum = edgeMinimum
    //var minPathWeight = minPathWeight
    //var maxPathWeight = maxPathWeight
this.geographicMapInterface= geographicMapInterface;
    
this.edgeMinimum= edgeMinimum;
    
this.minPathWeight= minPathWeight;
    
this.maxPathWeight= maxPathWeight;
    
}


                //@Throws(Error::class)
            
    public visit(graph: any = {}, startPathFindingNodeList: BasicArrayList, endPathFindingNodeList: BasicArrayList){
    //var graph = graph
    //var startPathFindingNodeList = startPathFindingNodeList
    //var endPathFindingNodeList = endPathFindingNodeList
}


                //@Throws(Error::class)
            
    public fixPath(startPathFindingNodeList: BasicArrayList, endPathFindingNodeList: BasicArrayList, pathList: BasicArrayList){
    //var startPathFindingNodeList = startPathFindingNodeList
    //var endPathFindingNodeList = endPathFindingNodeList
    //var pathList = pathList

    var startPathFindingNode: PathFindingNode
;
    




                        for (
    var index: number = startPathFindingNodeList!.size() -1;
        
        
index >= 0; index--)
        {
startPathFindingNode= startPathFindingNodeList!.get(index);

                         as PathFindingNode;
    
pathList!.remove(startPathFindingNode!.geographicMapCellPosition);
    
pathList!.add(0, startPathFindingNode!.geographicMapCellPosition);
    
}

}


    public isValid(graphPath: any = {}): boolean{
    //var graphPath = graphPath



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getInvalidReason(graphPath: any = {}): string{
    //var graphPath = graphPath



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


}
                
            

