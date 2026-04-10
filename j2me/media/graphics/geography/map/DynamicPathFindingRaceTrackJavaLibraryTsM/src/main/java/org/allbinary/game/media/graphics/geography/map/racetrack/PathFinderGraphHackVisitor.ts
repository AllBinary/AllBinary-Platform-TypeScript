
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

    
import { DefaultWeightedEdge } from "../../../../../../../../org/jgrapht/graph/DefaultWeightedEdge.js";

    
import { SimpleWeightedGraph } from "../../../../../../../../org/jgrapht/graph/SimpleWeightedGraph.js";

    
import { BasicArrayList } from "../../../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { LogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AllBinaryTiledLayer } from "../../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { CellPosition } from "../../../../../../../../org/allbinary/graphics/CellPosition.js";

    
import { BasicGeographicMap } from "../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { BasicGeographicMapCellPositionFactory } from "../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js";

    
import { BasicGeographicMapUtil } from "../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapUtil.js";

    
import { GeographicMapCellPosition } from "../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { RaceTrackGeographicMap } from "../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMap.js";

    
import { PathFindingNode } from "../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNode.js";

    

export class PathFinderGraphHackVisitor extends BasePathFinderGraphVisitor<V, E> {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (geographicMapInterface: BasicGeographicMap, edgeMinimum: number, minPathWeight: number, maxPathWeight: number)                        

                            : super(geographicMapInterface, edgeMinimum, minPathWeight, maxPathWeight){

            super();
                //var geographicMapInterface = geographicMapInterface
var edgeMinimum = edgeMinimum
var minPathWeight = minPathWeight
var maxPathWeight = maxPathWeight


                            //For kotlin this is before the body of the constructor.
                    
}


                @Throws(Exception::class)
            
    public visit(graph: SimpleWeightedGraph, startPathFindingNodeList: BasicArrayList, endPathFindingNodeList: BasicArrayList){
var graph = graph
var startPathFindingNodeList = startPathFindingNodeList
var endPathFindingNodeList = endPathFindingNodeList
this.fixStart(graph, startPathFindingNodeList)
this.fixEnd(graph, endPathFindingNodeList)
this.fixOverPassEdges(graph)
}


                @Throws(Exception::class)
            
    fixStart(graph: SimpleWeightedGraph<CellPosition, DefaultWeightedEdge>, startPathFindingNodeList: BasicArrayList){
var graph = graph
var startPathFindingNodeList = startPathFindingNodeList

    var geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = this.geographicMapInterface!.getGeographicMapCellPositionFactory()!;
        
        


    var tiledLayer: AllBinaryTiledLayer = this.geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        





                        for (
    var index: number = startPathFindingNodeList!.size() -1;
        
        
index >= 0; index--)
        {

    var startPathFindingNode: PathFindingNode = startPathFindingNodeList!.get(index) as PathFindingNode;
        
        


    var geographicMapCellPosition: GeographicMapCellPosition = startPathFindingNode!.geographicMapCellPosition;
        
        


    var column: number = geographicMapCellPosition!.getColumn()!;
        
        


    var row: number = geographicMapCellPosition!.getRow()!;
        
        


    var nextRow: number = row +1;
        
        


    
                        if(tiledLayer!.isOnTileLayer(column, nextRow))
                        
                                    {
                                    
    var geographicMapCellPositionNeighbor: GeographicMapCellPosition = geographicMapCellPositionFactory!.getInstance(column, nextRow)!;
        
        

removeEdge(geographicMapCellPosition, geographicMapCellPositionNeighbor)

                                    }
                                
}

}


                @Throws(Exception::class)
            
    fixEnd(graph: SimpleWeightedGraph<CellPosition, DefaultWeightedEdge>, endPathFindingNodeList: BasicArrayList){
var graph = graph
var endPathFindingNodeList = endPathFindingNodeList

    var geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = this.geographicMapInterface!.getGeographicMapCellPositionFactory()!;
        
        


    var tiledLayer: AllBinaryTiledLayer = this.geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        





                        for (
    var index: number = endPathFindingNodeList!.size() -1;
        
        
index >= 0; index--)
        {

    var endPathFindingNode: PathFindingNode = endPathFindingNodeList!.get(index) as PathFindingNode;
        
        


    var geographicMapCellPosition: GeographicMapCellPosition = endPathFindingNode!.geographicMapCellPosition;
        
        

addVertex(geographicMapCellPosition)

    var column: number = geographicMapCellPosition!.getColumn()!;
        
        


    var row: number = geographicMapCellPosition!.getRow()!;
        
        


    var nextRow: number = row +1;
        
        


    
                        if(tiledLayer!.isOnTileLayer(column, nextRow))
                        
                                    {
                                    
    var geographicMapCellPositionNeighbor: GeographicMapCellPosition = geographicMapCellPositionFactory!.getInstance(column, nextRow)!;
        
        

addEdge(geographicMapCellPosition, geographicMapCellPositionNeighbor)

                                    }
                                
}

}


                @Throws(Exception::class)
            
    fixOverPassEdges(graph: SimpleWeightedGraph<CellPosition, DefaultWeightedEdge>){
var graph = graph

    var geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = this.geographicMapInterface!.getGeographicMapCellPositionFactory()!;
        
        


    var raceTrackGeographicMap: RaceTrackGeographicMap = this.geographicMapInterface as RaceTrackGeographicMap;
        
        


    var CellPositionArray: CellPosition[] = raceTrackGeographicMap!.getRaceTrackData()!.getOverPassGeographicMapCellPositionArray()!;
        
        





                        for (
    var index: number = CellPositionArray.length -1;
        
        
index >= 0; index--)
        {

    var overPassGeographicMapCellPosition: CellPosition = CellPositionArray[index]!;
        
        

put("Fixing Over Pass: " +overPassGeographicMapCellPosition!.getColumn() +", " +overPassGeographicMapCellPosition!.getRow(), this, "fixOverPassEdges")

    var underPassGeographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionFactory!.getInstance(overPassGeographicMapCellPosition!.getColumn(), overPassGeographicMapCellPosition!.getRow())!;
        
        


    var rightUnderPassGeographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionFactory!.getInstance(overPassGeographicMapCellPosition!.getColumn() +1, overPassGeographicMapCellPosition!.getRow())!;
        
        


    var leftUnderPassGeographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionFactory!.getInstance(overPassGeographicMapCellPosition!.getColumn() -1, overPassGeographicMapCellPosition!.getRow())!;
        
        

removeEdge(underPassGeographicMapCellPosition, rightUnderPassGeographicMapCellPosition)
removeEdge(underPassGeographicMapCellPosition, leftUnderPassGeographicMapCellPosition)
addVertex(overPassGeographicMapCellPosition)
addEdge(overPassGeographicMapCellPosition, rightUnderPassGeographicMapCellPosition)
addEdge(overPassGeographicMapCellPosition, leftUnderPassGeographicMapCellPosition)
}

}


                @Throws(Exception::class)
            
    public fixPath(startPathFindingNodeList: BasicArrayList, endPathFindingNodeList: BasicArrayList, pathList: BasicArrayList){
var startPathFindingNodeList = startPathFindingNodeList
var endPathFindingNodeList = endPathFindingNodeList
var pathList = pathList




                        for (
    var index: number = startPathFindingNodeList!.size() -1;
        
        
index >= 0; index--)
        {

    var endPathFindingNode: PathFindingNode = endPathFindingNodeList!.get(index) as PathFindingNode;
        
        


    var startPathFindingNode: PathFindingNode = startPathFindingNodeList!.get(index) as PathFindingNode;
        
        


    
                        if(BasicGeographicMapUtil.getInstance()!.isSameCellPosition(startPathFindingNode!.geographicMapCellPosition, endPathFindingNode!.geographicMapCellPosition))
                        
                                    {
                                    
    
                        if(pathList!.remove(endPathFindingNode!.geographicMapCellPosition))
                        
                                    {
                                    remove(startPathFindingNode!.geographicMapCellPosition)
add(0, startPathFindingNode!.geographicMapCellPosition)

                                    }
                                

                                    }
                                
}

this.removeOverPassEdges(pathList)
}


                @Throws(Exception::class)
            
    removeOverPassEdges(pathList: BasicArrayList){
var pathList = pathList

    var geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = this.geographicMapInterface!.getGeographicMapCellPositionFactory()!;
        
        


    var raceTrackGeographicMap: RaceTrackGeographicMap = this.geographicMapInterface as RaceTrackGeographicMap;
        
        


    var CellPositionArray: CellPosition[] = raceTrackGeographicMap!.getRaceTrackData()!.getOverPassGeographicMapCellPositionArray()!;
        
        





                        for (
    var index: number = CellPositionArray.length -1;
        
        
index >= 0; index--)
        {

    var overPassGeographicMapCellPosition: CellPosition = CellPositionArray[index]!;
        
        


    var underPassGeographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionFactory!.getInstance(overPassGeographicMapCellPosition!.getColumn(), overPassGeographicMapCellPosition!.getRow())!;
        
        


    var indexOf: number = pathList!.indexOf(overPassGeographicMapCellPosition)!;
        
        


    
                        if(indexOf !=  -1)
                        
                                    {
                                    set(indexOf, underPassGeographicMapCellPosition)

                                    }
                                
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


}
                
            

