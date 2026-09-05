
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
        
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { BasicGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
//not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
import { PathFinderGraphVisitorBase } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFinderGraphVisitorBase.js';
//not GWT import const PathFinderGraphVisitorBase = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFinderGraphVisitorBase;

      
import { PathFindingNode } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNode.js';
//not GWT import const PathFindingNode = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingNode;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //1.4.2
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
            
    public visit(graph: any = {}, startPathFindingNodeList: BasicArrayList, endPathFindingNodeList: BasicArrayList){
}


                //@Throws(Exception.constructor)
            
    public fixPath(startPathFindingNodeList: BasicArrayList, endPathFindingNodeList: BasicArrayList, pathList: BasicArrayList){

    var startPathFindingNode: PathFindingNode;;
    




                        for (
    var index: number = startPathFindingNodeList!.size() -1;index >= 0; index--)
        {
startPathFindingNode= startPathFindingNodeList!.get(index) as PathFindingNode;
    
pathList!.remove(startPathFindingNode!.geographicMapCellPosition);
    
pathList!.addAt(0, startPathFindingNode!.geographicMapCellPosition);
    
}

}


    public isValid(graphPath: any = {}): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getInvalidReason(graphPath: any = {}): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


}



