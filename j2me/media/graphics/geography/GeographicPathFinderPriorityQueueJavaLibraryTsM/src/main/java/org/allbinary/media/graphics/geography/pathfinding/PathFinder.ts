
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../../../java/lang/RuntimeException.js';
        
import { AllBinaryTiledLayer } from '../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
//not GWT import const AllBinaryTiledLayer

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { MathUtil } 
const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;
type MathUtil<T = any, U = any> = typeof MathUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof MathUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { BasicGeographicMap } from '../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
//not GWT import const BasicGeographicMap

import { BasicGeographicMapCellPositionFactory } from '../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js';
//not GWT import const BasicGeographicMapCellPositionFactory

import { GeographicMapCellPosition } from '../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
//not GWT import const GeographicMapCellPosition

import { GeographicMapCellType } from '../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js';
//not GWT import const GeographicMapCellType

import { RaceTrackGeographicMapCellType } from '../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellType.js';
//not GWT import const RaceTrackGeographicMapCellType

//not plain js import { ABHashSet } 
const ABHashSet = globalThis.org.allbinary.util.ABHashSet;
type ABHashSet<T = any, U = any> = typeof ABHashSet extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashSet;

//not plain js import { ABPriorityQueue } 
const ABPriorityQueue = globalThis.org.allbinary.util.ABPriorityQueue;
type ABPriorityQueue<T = any, U = any> = typeof ABPriorityQueue extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABPriorityQueue;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
type BasicArrayListUtil<T = any, U = any> = typeof BasicArrayListUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GeographicPathFinderBase } from './GeographicPathFinderBase.js';
//sameFolderImports - not GWT import - same folder const GeographicPathFinderBase
import { PathFindingNodeCost } from './PathFindingNodeCost.js';
//sameFolderImports - not GWT import - same folder const PathFindingNodeCost
import { PathFindingNodeCostInfo } from './PathFindingNodeCostInfo.js';
//sameFolderImports - not GWT import - same folder const PathFindingNodeCostInfo
import { PathFindingNode } from './PathFindingNode.js';
//sameFolderImports - not GWT import - same folder const PathFindingNode
import { MultipassState } from './MultipassState.js';
//sameFolderImports - not GWT import - same folder const MultipassState

export class PathFinder extends GeographicPathFinderBase {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;

    private readonly mathUtil: MathUtil = MathUtil.getInstance()!;

    private readonly openPriorityQueue: ABPriorityQueue<PathFindingNodeCost> = new ABPriorityQueue<PathFindingNodeCost>();

    private readonly closedSet: ABHashSet<PathFindingNodeCost> = new ABHashSet<PathFindingNodeCost>();

    private geographicMapInterface: any = NullUtil.getInstance()!.NULL_OBJECT;

    private costArray: PathFindingNodeCost[][] = PathFindingNodeCost.NULL_PATH_FINDING_NODE_COST_ARRAY_ARRAY;

                //@Throws(Exception.constructor)
            
    public init(geographicMapInterface: BasicGeographicMap){
this.geographicMapInterface= geographicMapInterface;
    

    let tiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;;
    
this.costArray= new Array(tiledLayer!.getColumns()).fill(null).map(() => new Array(tiledLayer!.getRows()).fill(null))
                                                            ;
    

    let basicGeographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = geographicMapInterface!.getGeographicMapCellPositionFactory()!;;
    

    let node: PathFindingNodeCost;;
    

    let sizeX: number = this.costArray!.length
                ;;
    

    let sizeY: number = this.costArray[0]!.length
                ;;
    




                        for (
    let column: number = 0;column < sizeX; column++)
        {




                        for (
    let row: number = 0;row < sizeY; row++)
        {

    let geographicMapCellType: GeographicMapCellType = geographicMapInterface!.getCellTypeAt(basicGeographicMapCellPositionFactory!.getAt(column, row))!;;
    

    let raceTrackGeographicMapCellType: RaceTrackGeographicMapCellType = geographicMapCellType as RaceTrackGeographicMapCellType;;
    
node= new PathFindingNodeCost(NullUtil.getInstance()!.NULL_OBJECT, basicGeographicMapCellPositionFactory!.getAt(column, row), new PathFindingNodeCostInfo(raceTrackGeographicMapCellType!.getTravelCost(),  -1));
    
this.costArray[column]![row]= node;
    
}

}

}


    public searchTotalPath(startPathFindingNodeList: BasicArrayList, endPathFindingNodeList: BasicArrayList, totalPaths: number): BasicArrayList{

 try { 


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.search(startPathFindingNodeList!.get(0) as PathFindingNode, endPathFindingNodeList!.get(0) as PathFindingNode);;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "search", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicArrayListUtil!.getImmutableInstance();;
    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public searchTotalPathN(startPathFindingNodeList: BasicArrayList, endPathFindingNodeList: BasicArrayList, totalPaths: number, multipassState: MultipassState): BasicArrayList{

                        if(multipassState!.step == 0)
                        
                                    {
                                    multipassState!.step++;
    

                                    }
                                
                             else 
                        if(multipassState!.step == 1)
                        
                                    {
                                    this.searchStart(startPathFindingNodeList!.get(0) as PathFindingNode, endPathFindingNodeList!.get(0) as PathFindingNode, multipassState);
    

                                    }
                                
                             else 
                        if(multipassState!.step == 2)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.searchN(startPathFindingNodeList!.get(0) as PathFindingNode, endPathFindingNodeList!.get(0) as PathFindingNode, multipassState);;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicArrayListUtil!.getImmutableInstance();;
    
}


                //@Throws(Exception.constructor)
            
    public search(startPathFindingNode: PathFindingNode, endPathFindingNode: PathFindingNode): BasicArrayList{

    let list: BasicArrayList = this.findPath(startPathFindingNode!.geographicMapCellPosition, endPathFindingNode!.geographicMapCellPosition)!;;
    

    let pathList: BasicArrayList = new BasicArrayListD();;
    
pathList!.add(list);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pathList;
    
}


                //@Throws(Exception.constructor)
            
    public searchStart(startPathFindingNode: PathFindingNode, endPathFindingNode: PathFindingNode, multipassState: MultipassState){
this.findPathStart(startPathFindingNode!.geographicMapCellPosition, endPathFindingNode!.geographicMapCellPosition, multipassState);
    
}


                //@Throws(Exception.constructor)
            
    public searchN(startPathFindingNode: PathFindingNode, endPathFindingNode: PathFindingNode, multipassState: MultipassState): BasicArrayList{

    let list: BasicArrayList = this.findPathEnd(startPathFindingNode!.geographicMapCellPosition, endPathFindingNode!.geographicMapCellPosition, multipassState)!;;
    

                        if(list == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicArrayListUtil!.getImmutableInstance();;
    

                                    }
                                

    let pathList: BasicArrayList = new BasicArrayListD();;
    
pathList!.add(list);
    
multipassState!.iteration= 0;
    
multipassState!.step= 0;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pathList;
    
}


                //@Throws(Exception.constructor)
            
    public findPath(start: GeographicMapCellPosition, target: GeographicMapCellPosition): BasicArrayList{
this.openPriorityQueue!.clear();
    
this.closedSet!.clear();
    

    let discoveryCalculation: number= 0;;
    

    let node: PathFindingNodeCost;;
    

    let targetColumn: number = target.getColumn()!;;
    

    let targetRow: number = target.getRow()!;;
    

    let sizeX: number = this.costArray!.length
                ;;
    

    let sizeY: number = this.costArray[0]!.length
                ;;
    




                        for (
    let column: number = 0;column < sizeX; column++)
        {




                        for (
    let row: number = 0;row < sizeY; row++)
        {
discoveryCalculation= this.mathUtil!.abs(column -targetColumn) +this.mathUtil!.abs(row -targetRow);
    
node= this.costArray[column]![row]!;
    
node.pathFindingNodeCostInfoP!.totalCostP= 0;
    
node.pathFindingNodeCostInfoP!.costToEndP= discoveryCalculation;
    
}

}


    let startNode: PathFindingNodeCost = this.costArray[start.getColumn()]![start.getRow()]!;;
    
this.openPriorityQueue!.add(startNode);
    

    let geographicMapInterface: BasicGeographicMap = this.geographicMapInterface as BasicGeographicMap;;
    

    let basicGeographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = geographicMapInterface!.getGeographicMapCellPositionFactory()!;;
    

    let allBinaryTiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;;
    

    let targetNode: PathFindingNodeCost = this.costArray[target.getColumn()]![target.getRow()]!;;
    

    let current: PathFindingNodeCost;;
    

        do
        {
current= this.openPriorityQueue!.poll();
    
this.closedSet!.add(current);
    

                        if((current === targetNode))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.extractPath(start, current);;
    

                                    }
                                

    let neighbor: PathFindingNodeCost;;
    

    let neighborInfo: PathFindingNodeCostInfo;;
    

    let calculatedCost: number= 0;;
    




                        for (
    let column: number = current.geographicMapCellPosition!.getColumn() -1;column < current.geographicMapCellPosition!.getColumn() +2; column++)
        {




                        for (
    let row: number = current.geographicMapCellPosition!.getRow() -1;row < current.geographicMapCellPosition!.getRow() +2; row++)
        {

                        if(column > 0 && row > 0 && column < allBinaryTiledLayer!.getColumns() && row < allBinaryTiledLayer!.getRows() && geographicMapInterface!.isOnMap(basicGeographicMapCellPositionFactory!.getAt(column, row)))
                        
                                    {
                                    neighbor= this.costArray[column]![row]!;
    

                        if(this.closedSet!.contains(neighbor))
                        
                                    {
                                    

                        continue
                    

                                    }
                                
neighborInfo= neighbor.pathFindingNodeCostInfoP;
    
calculatedCost= neighborInfo!.costToEndP +neighborInfo!.costFromStartP +current.pathFindingNodeCostInfoP!.totalCostP;
    

                        if(calculatedCost < neighborInfo!.totalCostP || !this.openPriorityQueue!.contains(neighbor))
                        
                                    {
                                    neighborInfo!.totalCostP= calculatedCost;
    
neighbor.parent= current;
    

                        if(!this.openPriorityQueue!.contains(neighbor))
                        
                                    {
                                    
                        if(geographicMapInterface!.isOfFourDirections(current.geographicMapCellPosition, neighbor.geographicMapCellPosition))
                        
                                    {
                                    this.openPriorityQueue!.add(neighbor);
    

                                    }
                                

                                    }
                                

                                    }
                                

                                    }
                                
}

}

}

        while(!this.openPriorityQueue!.isEmpty())
    



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public findPathStart(start: GeographicMapCellPosition, target: GeographicMapCellPosition, multipassState: MultipassState){
this.openPriorityQueue!.clear();
    
this.closedSet!.clear();
    

    let discoveryCalculation: number= 0;;
    

    let node: PathFindingNodeCost;;
    

    let targetColumn: number = target.getColumn()!;;
    

    let targetRow: number = target.getRow()!;;
    

    let sizeX: number = this.costArray!.length
                ;;
    

    let sizeY: number = this.costArray[0]!.length
                ;;
    




                        for (
    let column: number = 0;column < sizeX; column++)
        {




                        for (
    let row: number = 0;row < sizeY; row++)
        {
discoveryCalculation= this.mathUtil!.abs(column -targetColumn) +this.mathUtil!.abs(row -targetRow);
    
node= this.costArray[column]![row]!;
    
node.pathFindingNodeCostInfoP!.totalCostP= 0;
    
node.pathFindingNodeCostInfoP!.costToEndP= discoveryCalculation;
    
}

}


    let startNode: PathFindingNodeCost = this.costArray[start.getColumn()]![start.getRow()]!;;
    
this.openPriorityQueue!.add(startNode);
    
multipassState!.step++;
    
}


                //@Throws(Exception.constructor)
            
    public findPathEnd(start: GeographicMapCellPosition, target: GeographicMapCellPosition, multipassState: MultipassState): BasicArrayList{

    let geographicMapInterface: BasicGeographicMap = this.geographicMapInterface as BasicGeographicMap;;
    

    let basicGeographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = geographicMapInterface!.getGeographicMapCellPositionFactory()!;;
    

    let allBinaryTiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;;
    

    let targetNode: PathFindingNodeCost = this.costArray[target.getColumn()]![target.getRow()]!;;
    

    let current: PathFindingNodeCost;;
    

    let total: number = 0;;
    

        do
        {
current= this.openPriorityQueue!.poll();
    
this.closedSet!.add(current);
    

                        if((current === targetNode))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.extractPath(start, current);;
    

                                    }
                                

    let neighbor: PathFindingNodeCost;;
    

    let neighborInfo: PathFindingNodeCostInfo;;
    

    let calculatedCost: number= 0;;
    




                        for (
    let column: number = current.geographicMapCellPosition!.getColumn() -1;column < current.geographicMapCellPosition!.getColumn() +2; column++)
        {




                        for (
    let row: number = current.geographicMapCellPosition!.getRow() -1;row < current.geographicMapCellPosition!.getRow() +2; row++)
        {

                        if(column > 0 && row > 0 && column < allBinaryTiledLayer!.getColumns() && row < allBinaryTiledLayer!.getRows() && geographicMapInterface!.isOnMap(basicGeographicMapCellPositionFactory!.getAt(column, row)))
                        
                                    {
                                    neighbor= this.costArray[column]![row]!;
    

                        if(this.closedSet!.contains(neighbor))
                        
                                    {
                                    

                        continue
                    

                                    }
                                
neighborInfo= neighbor.pathFindingNodeCostInfoP;
    
calculatedCost= neighborInfo!.costToEndP +neighborInfo!.costFromStartP +current.pathFindingNodeCostInfoP!.totalCostP;
    

                        if(calculatedCost < neighborInfo!.totalCostP || !this.openPriorityQueue!.contains(neighbor))
                        
                                    {
                                    neighborInfo!.totalCostP= calculatedCost;
    
neighbor.parent= current;
    

                        if(!this.openPriorityQueue!.contains(neighbor))
                        
                                    {
                                    
                        if(geographicMapInterface!.isOfFourDirections(current.geographicMapCellPosition, neighbor.geographicMapCellPosition))
                        
                                    {
                                    this.openPriorityQueue!.add(neighbor);
    

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
                        return this.basicArrayListUtil!.getImmutableInstance();;
    

                                    }
                                
}

        while(!this.openPriorityQueue!.isEmpty())
    



                            throw new RuntimeException();
                    
}


    extractPath(start: GeographicMapCellPosition, current: PathFindingNodeCost): BasicArrayList{

    let path: BasicArrayList = new BasicArrayListD();;
    

        while(current.parent != NullUtil.getInstance()!.NULL_OBJECT)
        {
path.add(current.geographicMapCellPosition);
    
current= current.parent as PathFindingNodeCost;
    
}

path.add(start);
    
this.basicArrayListUtil!.reverse(path);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return path;
    
}


}

