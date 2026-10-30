
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
        
import { GraphPath } from '../../../../../../../../org/jgrapht/GraphPath.js';
//not GWT import const GraphPath

import { DefaultWeightedEdge } from '../../../../../../../../org/jgrapht/graph/DefaultWeightedEdge.js';
//not GWT import const DefaultWeightedEdge

import { SimpleWeightedGraph } from '../../../../../../../../org/jgrapht/graph/SimpleWeightedGraph.js';
//not GWT import const SimpleWeightedGraph

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AllBinaryTiledLayer } from '../../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
//not GWT import const AllBinaryTiledLayer

import { CellPosition } from '../../../../../../../../org/allbinary/graphics/CellPosition.js';
//not GWT import const CellPosition

import { BasicGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
//not GWT import const BasicGeographicMap

import { BasicGeographicMapCellPositionFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js';
//not GWT import const BasicGeographicMapCellPositionFactory

import { BasicGeographicMapUtil } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapUtil.js';
//not GWT import const BasicGeographicMapUtil

import { GeographicMapCellPosition } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
//not GWT import const GeographicMapCellPosition

import { RaceTrackGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMap.js';
//not GWT import const RaceTrackGeographicMap

import { PathFindingNode } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNode.js';
//not GWT import const PathFindingNode

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasePathFinderGraphVisitor } from './BasePathFinderGraphVisitor.js';
//sameFolderImports - not GWT import - same folder const BasePathFinderGraphVisitor

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

    let geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = this.geographicMapInterface!.getGeographicMapCellPositionFactory()!;;
    

    let tiledLayer: AllBinaryTiledLayer = this.geographicMapInterface!.getAllBinaryTiledLayer()!;;
    




                        for (
    let index: number = startPathFindingNodeList!.size() -1;index >= 0; index--)
        {

    let startPathFindingNode: PathFindingNode = startPathFindingNodeList!.get(index) as PathFindingNode;;
    

    let geographicMapCellPosition: GeographicMapCellPosition = startPathFindingNode!.geographicMapCellPosition;;
    

    let column: number = geographicMapCellPosition!.getColumn()!;;
    

    let row: number = geographicMapCellPosition!.getRow()!;;
    

    let nextRow: number = row +1;;
    

                        if(tiledLayer!.isOnTileLayer(column, nextRow))
                        
                                    {
                                    
    let geographicMapCellPositionNeighbor: GeographicMapCellPosition = geographicMapCellPositionFactory!.getAt(column, nextRow)!;;
    
graph.removeEdge(geographicMapCellPosition, geographicMapCellPositionNeighbor);
    

                                    }
                                
}

}


                //@Throws(Exception.constructor)
            
    fixEnd(graph: SimpleWeightedGraph<CellPosition, DefaultWeightedEdge>, endPathFindingNodeList: BasicArrayList){

    let geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = this.geographicMapInterface!.getGeographicMapCellPositionFactory()!;;
    

    let tiledLayer: AllBinaryTiledLayer = this.geographicMapInterface!.getAllBinaryTiledLayer()!;;
    




                        for (
    let index: number = endPathFindingNodeList!.size() -1;index >= 0; index--)
        {

    let endPathFindingNode: PathFindingNode = endPathFindingNodeList!.get(index) as PathFindingNode;;
    

    let geographicMapCellPosition: GeographicMapCellPosition = endPathFindingNode!.geographicMapCellPosition;;
    
graph.addVertex(geographicMapCellPosition);
    

    let column: number = geographicMapCellPosition!.getColumn()!;;
    

    let row: number = geographicMapCellPosition!.getRow()!;;
    

    let nextRow: number = row +1;;
    

                        if(tiledLayer!.isOnTileLayer(column, nextRow))
                        
                                    {
                                    
    let geographicMapCellPositionNeighbor: GeographicMapCellPosition = geographicMapCellPositionFactory!.getAt(column, nextRow)!;;
    
graph.addEdge(geographicMapCellPosition, geographicMapCellPositionNeighbor);
    

                                    }
                                
}

}


                //@Throws(Exception.constructor)
            
    fixOverPassEdges(graph: SimpleWeightedGraph<CellPosition, DefaultWeightedEdge>){

    let geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = this.geographicMapInterface!.getGeographicMapCellPositionFactory()!;;
    

    let raceTrackGeographicMap: RaceTrackGeographicMap = this.geographicMapInterface as RaceTrackGeographicMap;;
    

    let CellPositionArray: CellPosition[] = raceTrackGeographicMap!.getRaceTrackData()!.getOverPassGeographicMapCellPositionArray()!;;
    




                        for (
    let index: number = CellPositionArray.length -1;index >= 0; index--)
        {

    let overPassGeographicMapCellPosition: CellPosition = CellPositionArray[index]!;;
    
this.logUtil!.putF("Fixing Over Pass: " +overPassGeographicMapCellPosition!.getColumn() +", " +overPassGeographicMapCellPosition!.getRow(), this, "fixOverPassEdges");
    

    let underPassGeographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionFactory!.getAt(overPassGeographicMapCellPosition!.getColumn(), overPassGeographicMapCellPosition!.getRow())!;;
    

    let rightUnderPassGeographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionFactory!.getAt(overPassGeographicMapCellPosition!.getColumn() +1, overPassGeographicMapCellPosition!.getRow())!;;
    

    let leftUnderPassGeographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionFactory!.getAt(overPassGeographicMapCellPosition!.getColumn() -1, overPassGeographicMapCellPosition!.getRow())!;;
    
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
    let index: number = startPathFindingNodeList!.size() -1;index >= 0; index--)
        {

    let endPathFindingNode: PathFindingNode = endPathFindingNodeList!.get(index) as PathFindingNode;;
    

    let startPathFindingNode: PathFindingNode = startPathFindingNodeList!.get(index) as PathFindingNode;;
    

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

    let geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = this.geographicMapInterface!.getGeographicMapCellPositionFactory()!;;
    

    let raceTrackGeographicMap: RaceTrackGeographicMap = this.geographicMapInterface as RaceTrackGeographicMap;;
    

    let CellPositionArray: CellPosition[] = raceTrackGeographicMap!.getRaceTrackData()!.getOverPassGeographicMapCellPositionArray()!;;
    




                        for (
    let index: number = CellPositionArray.length -1;index >= 0; index--)
        {

    let overPassGeographicMapCellPosition: CellPosition = CellPositionArray[index]!;;
    

    let underPassGeographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionFactory!.getAt(overPassGeographicMapCellPosition!.getColumn(), overPassGeographicMapCellPosition!.getRow())!;;
    

    let indexOf: number = pathList!.indexOf(overPassGeographicMapCellPosition)!;;
    

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

