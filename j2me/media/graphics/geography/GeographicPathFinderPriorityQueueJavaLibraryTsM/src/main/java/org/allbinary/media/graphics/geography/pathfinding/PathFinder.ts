
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
        



import { HashSet } from "../../../../../../java/util/HashSet.js";

    
import { PriorityQueue } from "../../../../../../java/util/PriorityQueue.js";

    
import { AllBinaryTiledLayer } from "../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { NullUtil } from "../../../../../../org/allbinary/logic/NullUtil.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { MathUtil } from "../../../../../../org/allbinary/logic/math/MathUtil.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicGeographicMap } from "../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { BasicGeographicMapCellPositionFactory } from "../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js";

    
import { GeographicMapCellPosition } from "../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCellType } from "../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js";

    
import { RaceTrackGeographicMapCellType } from "../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellType.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../../../org/allbinary/util/BasicArrayListUtil.js";

    

import { PathFindingNodeCost } from "./PathFindingNodeCost.js";

import {  } from "./.js";

import {  } from "./.js";

import {  } from "./.js";

export class PathFinder extends GeographicPathFinderBase {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;
        
        

    private readonly mathUtil: MathUtil = MathUtil.getInstance()!;
        
        

    private readonly openPriorityQueue: PriorityQueue<PathFindingNodeCost> = new PriorityQueue<PathFindingNodeCost>();
        
        

    private readonly closedSet: HashSet<PathFindingNodeCost> = new HashSet<PathFindingNodeCost>();
        
        

    private geographicMapInterface: any = NullUtil.getInstance()!.NULL_OBJECT;
        
        

    private costArray: PathFindingNodeCost[][] = PathFindingNodeCost.NULL_PATH_FINDING_NODE_COST_ARRAY_ARRAY;
        
        

                //@Throws(Error::class)
            
    public init(geographicMapInterface: BasicGeographicMap){
    //var geographicMapInterface = geographicMapInterface
this.geographicMapInterface= geographicMapInterface;
    

    var tiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        
;
    
this.costArray= Array(tiledLayer!.getColumns()) { arrayOfNulls<PathFindingNodeCost?>(tiledLayer!.getRows()) }
                                                            ;
    

    var basicGeographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = geographicMapInterface!.getGeographicMapCellPositionFactory()!;
        
        
;
    

    var node: PathFindingNodeCost
;
    

    var sizeX: number = costArray!.length
                ;
        
        
;
    

    var sizeY: number = costArray[0]!.length
                ;
        
        
;
    




                        for (
    var column: number = 0;
        
        
column < sizeX; column++)
        {




                        for (
    var row: number = 0;
        
        
row < sizeY; row++)
        {

    var geographicMapCellType: GeographicMapCellType = geographicMapInterface!.getCellTypeAt(basicGeographicMapCellPositionFactory!.getInstance(column, row))!;
        
        
;
    

    var raceTrackGeographicMapCellType: RaceTrackGeographicMapCellType = geographicMapCellType as RaceTrackGeographicMapCellType;
        
        
;
    
node= new PathFindingNodeCost(NullUtil.getInstance()!.NULL_OBJECT, basicGeographicMapCellPositionFactory!.getInstance(column, row), new PathFindingNodeCostInfo(raceTrackGeographicMapCellType!.getTravelCost();

                        .toLong(),  -1.toLong()));
    
costArray[column]![row]= node;
    
}

}

}


    public search(startPathFindingNodeList: BasicArrayList, endPathFindingNodeList: BasicArrayList, totalPaths: number): BasicArrayList{
var startPathFindingNodeList = startPathFindingNodeList
var endPathFindingNodeList = endPathFindingNodeList
var totalPaths = totalPaths

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.search(startPathFindingNodeList!.get(0);

                         as PathFindingNode, endPathFindingNodeList!.get(0);

                         as PathFindingNode);

                        ;
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "search", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicArrayListUtil!.getImmutableInstance();

                        ;
    
}

}


                //@Throws(Error::class)
            
    public searchN(startPathFindingNodeList: BasicArrayList, endPathFindingNodeList: BasicArrayList, totalPaths: number, multipassState: MultipassState): BasicArrayList{
var startPathFindingNodeList = startPathFindingNodeList
var endPathFindingNodeList = endPathFindingNodeList
var totalPaths = totalPaths
    //var multipassState = multipassState

                        if(multipassState!.step == 0)
                        
                                    {
                                    multipassState!.step++;
    

                                    }
                                
                             else 
                        if(multipassState!.step == 1)
                        
                                    {
                                    this.searchStart(startPathFindingNodeList!.get(0);

                         as PathFindingNode, endPathFindingNodeList!.get(0);

                         as PathFindingNode, multipassState);
    

                                    }
                                
                             else 
                        if(multipassState!.step == 2)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.searchN(startPathFindingNodeList!.get(0);

                         as PathFindingNode, endPathFindingNodeList!.get(0);

                         as PathFindingNode, multipassState);

                        ;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicArrayListUtil!.getImmutableInstance();

                        ;
    
}


                //@Throws(Error::class)
            
    public search(startPathFindingNode: PathFindingNode, endPathFindingNode: PathFindingNode): BasicArrayList{
    //var startPathFindingNode = startPathFindingNode
    //var endPathFindingNode = endPathFindingNode

    var list: BasicArrayList = this.findPath(startPathFindingNode!.geographicMapCellPosition, endPathFindingNode!.geographicMapCellPosition)!;
        
        
;
    

    var pathList: BasicArrayList = new BasicArrayList();
        
        
;
    
pathList!.add(list);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pathList;
    
}


                //@Throws(Error::class)
            
    public searchStart(startPathFindingNode: PathFindingNode, endPathFindingNode: PathFindingNode, multipassState: MultipassState){
    //var startPathFindingNode = startPathFindingNode
    //var endPathFindingNode = endPathFindingNode
    //var multipassState = multipassState
this.findPathStart(startPathFindingNode!.geographicMapCellPosition, endPathFindingNode!.geographicMapCellPosition, multipassState);
    
}


                //@Throws(Error::class)
            
    public searchN(startPathFindingNode: PathFindingNode, endPathFindingNode: PathFindingNode, multipassState: MultipassState): BasicArrayList{
    //var startPathFindingNode = startPathFindingNode
    //var endPathFindingNode = endPathFindingNode
    //var multipassState = multipassState

    var list: BasicArrayList = this.findPathEnd(startPathFindingNode!.geographicMapCellPosition, endPathFindingNode!.geographicMapCellPosition, multipassState)!;
        
        
;
    

                        if(list == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicArrayListUtil!.getImmutableInstance();

                        ;
    

                                    }
                                

    var pathList: BasicArrayList = new BasicArrayList();
        
        
;
    
pathList!.add(list);
    
multipassState!.iteration= 0;
    
multipassState!.step= 0;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pathList;
    
}


                //@Throws(Error::class)
            
    public findPath(start: GeographicMapCellPosition, target: GeographicMapCellPosition): BasicArrayList{
    //var start = start
    //var target = target
this.openPriorityQueue!.clear();
    
this.closedSet!.clear();
    

    var discoveryCalculation: number= 0
;
    

    var node: PathFindingNodeCost
;
    

    var targetColumn: number = target.getColumn()!;
        
        
;
    

    var targetRow: number = target.getRow()!;
        
        
;
    

    var sizeX: number = costArray!.length
                ;
        
        
;
    

    var sizeY: number = costArray[0]!.length
                ;
        
        
;
    




                        for (
    var column: number = 0;
        
        
column < sizeX; column++)
        {




                        for (
    var row: number = 0;
        
        
row < sizeY; row++)
        {
discoveryCalculation= mathUtil!.abs(column -targetColumn);

                        .toLong() +mathUtil!.abs(row -targetRow);
    
node= costArray[column]![row]!;
    
node.pathFindingNodeCostInfoP!.totalCostP= 0;
    
node.pathFindingNodeCostInfoP!.costToEndP= discoveryCalculation;
    
}

}


    var startNode: PathFindingNodeCost = costArray[start.getColumn()]![start.getRow()]!;
        
        
;
    
openPriorityQueue!.add(startNode);
    

    var geographicMapInterface: BasicGeographicMap = this.geographicMapInterface as BasicGeographicMap;
        
        
;
    

    var basicGeographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = geographicMapInterface!.getGeographicMapCellPositionFactory()!;
        
        
;
    

    var allBinaryTiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        
;
    

    var targetNode: PathFindingNodeCost = costArray[target.getColumn()]![target.getRow()]!;
        
        
;
    

    var current: PathFindingNodeCost
;
    

        do
        {
current= openPriorityQueue!.poll();
    
closedSet!.add(current);
    

                        if(current.equals(targetNode))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.extractPath(start, current);

                        ;
    

                                    }
                                

    var neighbor: PathFindingNodeCost
;
    

    var neighborInfo: PathFindingNodeCostInfo
;
    

    var calculatedCost: number= 0
;
    




                        for (
    var column: number = current.geographicMapCellPosition!.getColumn() -1;
        
        
column < current.geographicMapCellPosition!.getColumn() +2; column++)
        {




                        for (
    var row: number = current.geographicMapCellPosition!.getRow() -1;
        
        
row < current.geographicMapCellPosition!.getRow() +2; row++)
        {

                        if(column > 0 && row > 0 && column < allBinaryTiledLayer!.getColumns() && row < allBinaryTiledLayer!.getRows() && geographicMapInterface!.isOnMap(basicGeographicMapCellPositionFactory!.getInstance(column, row)))
                        
                                    {
                                    neighbor= costArray[column]![row]!;
    

                        if(closedSet!.contains(neighbor))
                        
                                    {
                                    

                        continue
                    

                                    }
                                
neighborInfo= neighbor.pathFindingNodeCostInfoP;
    
calculatedCost= neighborInfo!.costToEndP +neighborInfo!.costFromStartP +current.pathFindingNodeCostInfoP!.totalCostP;
    

                        if(calculatedCost < neighborInfo!.totalCostP || !openPriorityQueue!.contains(neighbor);

                        )
                        
                                    {
                                    neighborInfo!.totalCostP= calculatedCost;
    
neighbor.parent= current;
    

                        if(!openPriorityQueue!.contains(neighbor);

                        )
                        
                                    {
                                    
                        if(geographicMapInterface!.isOfFourDirections(current.geographicMapCellPosition, neighbor.geographicMapCellPosition))
                        
                                    {
                                    openPriorityQueue!.add(neighbor);
    

                                    }
                                

                                    }
                                

                                    }
                                

                                    }
                                
}

}

}

        while(!openPriorityQueue!.isEmpty();

                        )
    



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public findPathStart(start: GeographicMapCellPosition, target: GeographicMapCellPosition, multipassState: MultipassState){
    //var start = start
    //var target = target
    //var multipassState = multipassState
this.openPriorityQueue!.clear();
    
this.closedSet!.clear();
    

    var discoveryCalculation: number= 0
;
    

    var node: PathFindingNodeCost
;
    

    var targetColumn: number = target.getColumn()!;
        
        
;
    

    var targetRow: number = target.getRow()!;
        
        
;
    

    var sizeX: number = costArray!.length
                ;
        
        
;
    

    var sizeY: number = costArray[0]!.length
                ;
        
        
;
    




                        for (
    var column: number = 0;
        
        
column < sizeX; column++)
        {




                        for (
    var row: number = 0;
        
        
row < sizeY; row++)
        {
discoveryCalculation= mathUtil!.abs(column -targetColumn);

                        .toLong() +mathUtil!.abs(row -targetRow);
    
node= costArray[column]![row]!;
    
node.pathFindingNodeCostInfoP!.totalCostP= 0;
    
node.pathFindingNodeCostInfoP!.costToEndP= discoveryCalculation;
    
}

}


    var startNode: PathFindingNodeCost = costArray[start.getColumn()]![start.getRow()]!;
        
        
;
    
openPriorityQueue!.add(startNode);
    
multipassState!.step++;
    
}


                //@Throws(Error::class)
            
    public findPathEnd(start: GeographicMapCellPosition, target: GeographicMapCellPosition, multipassState: MultipassState): BasicArrayList{
    //var start = start
    //var target = target
    //var multipassState = multipassState

    var geographicMapInterface: BasicGeographicMap = this.geographicMapInterface as BasicGeographicMap;
        
        
;
    

    var basicGeographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = geographicMapInterface!.getGeographicMapCellPositionFactory()!;
        
        
;
    

    var allBinaryTiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        
;
    

    var targetNode: PathFindingNodeCost = costArray[target.getColumn()]![target.getRow()]!;
        
        
;
    

    var current: PathFindingNodeCost
;
    

    var total: number = 0;
        
        
;
    

        do
        {
current= openPriorityQueue!.poll();
    
closedSet!.add(current);
    

                        if(current.equals(targetNode))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.extractPath(start, current);

                        ;
    

                                    }
                                

    var neighbor: PathFindingNodeCost
;
    

    var neighborInfo: PathFindingNodeCostInfo
;
    

    var calculatedCost: number= 0
;
    




                        for (
    var column: number = current.geographicMapCellPosition!.getColumn() -1;
        
        
column < current.geographicMapCellPosition!.getColumn() +2; column++)
        {




                        for (
    var row: number = current.geographicMapCellPosition!.getRow() -1;
        
        
row < current.geographicMapCellPosition!.getRow() +2; row++)
        {

                        if(column > 0 && row > 0 && column < allBinaryTiledLayer!.getColumns() && row < allBinaryTiledLayer!.getRows() && geographicMapInterface!.isOnMap(basicGeographicMapCellPositionFactory!.getInstance(column, row)))
                        
                                    {
                                    neighbor= costArray[column]![row]!;
    

                        if(closedSet!.contains(neighbor))
                        
                                    {
                                    

                        continue
                    

                                    }
                                
neighborInfo= neighbor.pathFindingNodeCostInfoP;
    
calculatedCost= neighborInfo!.costToEndP +neighborInfo!.costFromStartP +current.pathFindingNodeCostInfoP!.totalCostP;
    

                        if(calculatedCost < neighborInfo!.totalCostP || !openPriorityQueue!.contains(neighbor);

                        )
                        
                                    {
                                    neighborInfo!.totalCostP= calculatedCost;
    
neighbor.parent= current;
    

                        if(!openPriorityQueue!.contains(neighbor);

                        )
                        
                                    {
                                    
                        if(geographicMapInterface!.isOfFourDirections(current.geographicMapCellPosition, neighbor.geographicMapCellPosition))
                        
                                    {
                                    openPriorityQueue!.add(neighbor);
    

                                    }
                                

                                    }
                                

                                    }
                                

                                    }
                                
}

}

total++;
    

                        if(total > 10)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicArrayListUtil!.getImmutableInstance();

                        ;
    

                                    }
                                
}

        while(!openPriorityQueue!.isEmpty();

                        )
    



                            throw new RuntimeException()
}


    extractPath(start: GeographicMapCellPosition, current: PathFindingNodeCost): BasicArrayList{
    //var start = start
var current = current

    var path: BasicArrayList = new BasicArrayList();
        
        
;
    

        while(current.parent != NullUtil.getInstance()!.NULL_OBJECT)
        {
path.add(current.geographicMapCellPosition);
    
current= current.parent as PathFindingNodeCost;
    
}

path.add(start);
    
basicArrayListUtil!.reverse(path);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return path;
    
}


}
                
            

