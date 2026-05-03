
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
        



            import { Object } from "../../../../../../../../java/lang/Object.js";


        
            import { Exception } from "../../../../../../../../java/lang/Exception.js";
        
import { BasicArrayList } from "../../../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicGeographicMap } from "../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasePathFinderGraphVisitor } from "./BasePathFinderGraphVisitor.js";

export class PathFinderGraphHackVisitor extends BasePathFinderGraphVisitor {
        
public constructor (geographicMapInterface: BasicGeographicMap, edgeMinimum: number, minPathWeight: number, maxPathWeight: number){
            super(geographicMapInterface, edgeMinimum, minPathWeight, maxPathWeight);
                        //var geographicMapInterface = geographicMapInterface
var edgeMinimum = edgeMinimum
var minPathWeight = minPathWeight
var maxPathWeight = maxPathWeight


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public visit(graph: any = {}, startPathFindingNodeList: BasicArrayList, endPathFindingNodeList: BasicArrayList){
var graph = graph
var startPathFindingNodeList = startPathFindingNodeList
var endPathFindingNodeList = endPathFindingNodeList
this.fixStart(graph, startPathFindingNodeList);
    
this.fixEnd(graph, endPathFindingNodeList);
    
this.fixOverPassEdges(graph);
    
}


                //@Throws(Exception.constructor)
            
    fixStart(graph: any = {}, startPathFindingNodeList: BasicArrayList){
var graph = graph
var startPathFindingNodeList = startPathFindingNodeList
}


                //@Throws(Exception.constructor)
            
    fixEnd(graph: any = {}, endPathFindingNodeList: BasicArrayList){
var graph = graph
var endPathFindingNodeList = endPathFindingNodeList
}


                //@Throws(Exception.constructor)
            
    fixOverPassEdges(graph: any = {}){
var graph = graph
}


                //@Throws(Exception.constructor)
            
    public fixPath(startPathFindingNodeList: BasicArrayList, endPathFindingNodeList: BasicArrayList, pathList: BasicArrayList){
var startPathFindingNodeList = startPathFindingNodeList
var endPathFindingNodeList = endPathFindingNodeList
var pathList = pathList
}


                //@Throws(Exception.constructor)
            
    removeOverPassEdges(pathList: BasicArrayList){
var pathList = pathList
}


    public isValid(graphPath: any = {}): boolean{
var graphPath = graphPath



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

