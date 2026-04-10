
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
        



import { BasicArrayList } from "../../../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicGeographicMap } from "../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    

export class PathFinderGraphHackVisitor extends BasePathFinderGraphVisitor {
        
public constructor (geographicMapInterface: BasicGeographicMap, edgeMinimum: number, minPathWeight: number, maxPathWeight: number)                        

                            : super(geographicMapInterface, edgeMinimum, minPathWeight, maxPathWeight){

            super();
                //var geographicMapInterface = geographicMapInterface
var edgeMinimum = edgeMinimum
var minPathWeight = minPathWeight
var maxPathWeight = maxPathWeight


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public visit(graph: any = {}, startPathFindingNodeList: BasicArrayList, endPathFindingNodeList: BasicArrayList){
var graph = graph
var startPathFindingNodeList = startPathFindingNodeList
var endPathFindingNodeList = endPathFindingNodeList
this.this.fixStart(graph, startPathFindingNodeList)
this.this.fixEnd(graph, endPathFindingNodeList)
this.this.fixOverPassEdges(graph)
}


                //@Throws(Error::class)
            
    fixStart(graph: any = {}, startPathFindingNodeList: BasicArrayList){
var graph = graph
var startPathFindingNodeList = startPathFindingNodeList
}


                //@Throws(Error::class)
            
    fixEnd(graph: any = {}, endPathFindingNodeList: BasicArrayList){
var graph = graph
var endPathFindingNodeList = endPathFindingNodeList
}


                //@Throws(Error::class)
            
    fixOverPassEdges(graph: any = {}){
var graph = graph
}


                //@Throws(Error::class)
            
    public fixPath(startPathFindingNodeList: BasicArrayList, endPathFindingNodeList: BasicArrayList, pathList: BasicArrayList){
var startPathFindingNodeList = startPathFindingNodeList
var endPathFindingNodeList = endPathFindingNodeList
var pathList = pathList
}


                //@Throws(Error::class)
            
    removeOverPassEdges(pathList: BasicArrayList){
var pathList = pathList
}


    public isValid(graphPath: any = {}): boolean{
var graphPath = graphPath



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

