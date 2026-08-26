
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

      
//not game specific package import { DefaultWeightedEdge } from '../../../../../../../../org/jgrapht/graph/DefaultWeightedEdge.js';
      const DefaultWeightedEdge = globalThis.org.jgrapht.graph.DefaultWeightedEdge;

      
//not game specific package import { SimpleWeightedGraph } from '../../../../../../../../org/jgrapht/graph/SimpleWeightedGraph.js';
      const SimpleWeightedGraph = globalThis.org.jgrapht.graph.SimpleWeightedGraph;

      
//not game specific package import { BasicArrayList } from '../../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { LogUtil } from '../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AllBinaryTiledLayer } from '../../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
//not game specific package import { CellPosition } from '../../../../../../../../org/allbinary/graphics/CellPosition.js';
      const CellPosition = globalThis.org.allbinary.graphics.CellPosition;

      
//not game specific package import { BasicGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
//not game specific package import { BasicGeographicMapCellPositionFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js';
      const BasicGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMapCellPositionFactory;

      
//not game specific package import { BasicGeographicMapUtil } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapUtil.js';
      const BasicGeographicMapUtil = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMapUtil;

      
//not game specific package import { GeographicMapCellPosition } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
//not game specific package import { RaceTrackGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMap.js';
      const RaceTrackGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMap;

      
//not game specific package import { PathFindingNode } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNode.js';
      const PathFindingNode = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingNode;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasePathFinderGraphVisitor } from './BasePathFinderGraphVisitor.js';
import { CellPositionArray } from './CellPositionArray.js';

export class PathFinderGraphHackVisitor extends BasePathFinderGraphVisitor<V, E> {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (geographicMapInterface: BasicGeographicMap, edgeMinimum: number, minPathWeight: number, maxPathWeight: number){
            super(geographicMapInterface, edgeMinimum, minPathWeight, maxPathWeight);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public visit(graph: SimpleWeightedGraph, startPathFindingNodeList: BasicArrayList, endPathFindingNodeList: BasicArrayList){
this.fixStart(graph, startPathFindingNodeList);
    
this.fixEnd(graph, endPathFindingNodeList);
    
this.fixOverPassEdges(graph);
    
}


                //@Throws(Exception.constructor)
            
    fixStart(graph: SimpleWeightedGraph<CellPosition, DefaultWeightedEdge>, startPathFindingNodeList: BasicArrayList){

    var geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = this.geographicMapInterface!.getGeographicMapCellPositionFactory()!;;
    

    var tiledLayer: AllBinaryTiledLayer = this.geographicMapInterface!.getAllBinaryTiledLayer()!;;
    




                        for (
    var index: number = startPathFindingNodeList!.size() -1;index >= 0; index--)
        {

    var startPathFindingNode: PathFindingNode = startPathFindingNodeList!.get(index) as PathFindingNode;;
    

    var geographicMapCellPosition: GeographicMapCellPosition = startPathFindingNode!.geographicMapCellPosition;;
    

    var column: number = geographicMapCellPosition!.getColumn()!;;
    

    var row: number = geographicMapCellPosition!.getRow()!;;
    

    var nextRow: number = row +1;;
    

                        if(tiledLayer!.isOnTileLayer(column, nextRow))
                        
                                    {
                                    
    var geographicMapCellPositionNeighbor: GeographicMapCellPosition = geographicMapCellPositionFactory!.getAt(column, nextRow)!;;
    
graph.removeEdge(geographicMapCellPosition, geographicMapCellPositionNeighbor);
    

                                    }
                                
}

}


                //@Throws(Exception.constructor)
            
    fixEnd(graph: SimpleWeightedGraph<CellPosition, DefaultWeightedEdge>, endPathFindingNodeList: BasicArrayList){

    var geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = this.geographicMapInterface!.getGeographicMapCellPositionFactory()!;;
    

    var tiledLayer: AllBinaryTiledLayer = this.geographicMapInterface!.getAllBinaryTiledLayer()!;;
    




                        for (
    var index: number = endPathFindingNodeList!.size() -1;index >= 0; index--)
        {

    var endPathFindingNode: PathFindingNode = endPathFindingNodeList!.get(index) as PathFindingNode;;
    

    var geographicMapCellPosition: GeographicMapCellPosition = endPathFindingNode!.geographicMapCellPosition;;
    
graph.addVertex(geographicMapCellPosition);
    

    var column: number = geographicMapCellPosition!.getColumn()!;;
    

    var row: number = geographicMapCellPosition!.getRow()!;;
    

    var nextRow: number = row +1;;
    

                        if(tiledLayer!.isOnTileLayer(column, nextRow))
                        
                                    {
                                    
    var geographicMapCellPositionNeighbor: GeographicMapCellPosition = geographicMapCellPositionFactory!.getAt(column, nextRow)!;;
    
graph.addEdge(geographicMapCellPosition, geographicMapCellPositionNeighbor);
    

                                    }
                                
}

}


                //@Throws(Exception.constructor)
            
    fixOverPassEdges(graph: SimpleWeightedGraph<CellPosition, DefaultWeightedEdge>){

    var geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = this.geographicMapInterface!.getGeographicMapCellPositionFactory()!;;
    

    var raceTrackGeographicMap: RaceTrackGeographicMap = this.geographicMapInterface as RaceTrackGeographicMap;;
    

    var CellPositionArray: CellPosition[] = raceTrackGeographicMap!.getRaceTrackData()!.getOverPassGeographicMapCellPositionArray()!;;
    




                        for (
    var index: number = CellPositionArray.length -1;index >= 0; index--)
        {

    var overPassGeographicMapCellPosition: CellPosition = CellPositionArray[index]!;;
    
this.logUtil!.putF("Fixing Over Pass: " +overPassGeographicMapCellPosition!.getColumn() +", " +overPassGeographicMapCellPosition!.getRow(), this, "fixOverPassEdges");
    

    var underPassGeographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionFactory!.getAt(overPassGeographicMapCellPosition!.getColumn(), overPassGeographicMapCellPosition!.getRow())!;;
    

    var rightUnderPassGeographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionFactory!.getAt(overPassGeographicMapCellPosition!.getColumn() +1, overPassGeographicMapCellPosition!.getRow())!;;
    

    var leftUnderPassGeographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionFactory!.getAt(overPassGeographicMapCellPosition!.getColumn() -1, overPassGeographicMapCellPosition!.getRow())!;;
    
graph.removeEdge(underPassGeographicMapCellPosition, rightUnderPassGeographicMapCellPosition);
    
graph.removeEdge(underPassGeographicMapCellPosition, leftUnderPassGeographicMapCellPosition);
    
graph.addVertex(overPassGeographicMapCellPosition);
    
graph.addEdge(overPassGeographicMapCellPosition, rightUnderPassGeographicMapCellPosition);
    
graph.addEdge(overPassGeographicMapCellPosition, leftUnderPassGeographicMapCellPosition);
    
}

}


                //@Throws(Exception.constructor)
            
    public fixPath(startPathFindingNodeList: BasicArrayList, endPathFindingNodeList: BasicArrayList, pathList: BasicArrayList){




                        for (
    var index: number = startPathFindingNodeList!.size() -1;index >= 0; index--)
        {

    var endPathFindingNode: PathFindingNode = endPathFindingNodeList!.get(index) as PathFindingNode;;
    

    var startPathFindingNode: PathFindingNode = startPathFindingNodeList!.get(index) as PathFindingNode;;
    

                        if(BasicGeographicMapUtil.getInstance()!.isSameCellPosition(startPathFindingNode!.geographicMapCellPosition, endPathFindingNode!.geographicMapCellPosition))
                        
                                    {
                                    
                        if(pathList!.remove(endPathFindingNode!.geographicMapCellPosition))
                        
                                    {
                                    pathList!.remove(startPathFindingNode!.geographicMapCellPosition);
    
pathList!.addAt(0, startPathFindingNode!.geographicMapCellPosition);
    

                                    }
                                

                                    }
                                
}

this.removeOverPassEdges(pathList);
    
}


                //@Throws(Exception.constructor)
            
    removeOverPassEdges(pathList: BasicArrayList){

    var geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = this.geographicMapInterface!.getGeographicMapCellPositionFactory()!;;
    

    var raceTrackGeographicMap: RaceTrackGeographicMap = this.geographicMapInterface as RaceTrackGeographicMap;;
    

    var CellPositionArray: CellPosition[] = raceTrackGeographicMap!.getRaceTrackData()!.getOverPassGeographicMapCellPositionArray()!;;
    




                        for (
    var index: number = CellPositionArray.length -1;index >= 0; index--)
        {

    var overPassGeographicMapCellPosition: CellPosition = CellPositionArray[index]!;;
    

    var underPassGeographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionFactory!.getAt(overPassGeographicMapCellPosition!.getColumn(), overPassGeographicMapCellPosition!.getRow())!;;
    

    var indexOf: number = pathList!.indexOf(overPassGeographicMapCellPosition)!;;
    

                        if(indexOf !=  -1)
                        
                                    {
                                    pathList!.set(indexOf, underPassGeographicMapCellPosition);
    

                                    }
                                
}

}


    public isValid(graphPath: GraphPath): boolean{

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
                
            

