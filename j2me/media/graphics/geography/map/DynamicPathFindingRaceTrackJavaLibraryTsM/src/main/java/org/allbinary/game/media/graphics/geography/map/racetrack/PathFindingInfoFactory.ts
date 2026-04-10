
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
        



import { CommonStrings } from "../../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { PreLogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { AllBinaryTiledLayer } from "../../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { BasicGeographicMap } from "../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { BasicGeographicMapCellPositionFactory } from "../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js";

    
import { BasicGeographicMapUtil } from "../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapUtil.js";

    
import { GeographicMapCellPosition } from "../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCellType } from "../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js";

    
import { GeographicMapCellTypeFactory } from "../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js";

    
import { BasePathFindingInfoFactory } from "../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/BasePathFindingInfoFactory.js";

    
import { RaceTrackGeographicMapCellType } from "../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellType.js";

    
import { RaceTrackRoadsGeographicMapCellHistoryFactory } from "../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackRoadsGeographicMapCellHistoryFactory.js";

    
import { PathFindingNodeCostInfoFactoryBase } from "../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNodeCostInfoFactoryBase.js";

    
import { BasicGeographicMapGraph } from "../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/BasicGeographicMapGraph.js";

    
import { BasicGeographicMapPathFinder } from "../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/BasicGeographicMapPathFinder.js";

    
import { PathFinderGraphVisitorFactoryBase } from "../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFinderGraphVisitorFactoryBase.js";

    
import { PathFindingInfo } from "../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js";

    
import { PathFindingNodeCostInfoFactory } from "../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNodeCostInfoFactory.js";

    

export class PathFindingInfoFactory extends BasePathFindingInfoFactory {
        

    private instance: PathFindingInfoFactory

    public static getInstance(): PathFindingInfoFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public static init(max: number){
var max = max
instance= PathFindingInfoFactory(SimplePathFinderGraphVisitorFactory(1, 1, Integer.MAX_VALUE), max)
}


    private readonly MAX_DIRECTIONS: number = 4;
        
        

    private readonly pathFindingInfo: PathFindingInfo

    private readonly basicGeographicMapGraph: BasicGeographicMapGraph

    private readonly basicGeographicMapPathFinder: BasicGeographicMapPathFinder

    private readonly pathFinderGraphVisitorFactoryInterface: PathFinderGraphVisitorFactoryBase
private constructor (pathFinderGraphVisitorFactoryInterface: PathFinderGraphVisitorFactoryBase, max: number){

            super();
                //var pathFinderGraphVisitorFactoryInterface = pathFinderGraphVisitorFactoryInterface
    //var max = max

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

PreLogUtil.put("Using Dynamic Path Finding", this, commonStrings!.GET_INSTANCE)
this.basicGeographicMapPathFinder= BasicGeographicMapPathFinder(max)
this.pathFindingInfo= PathFindingInfo(PathFindingNodeCostInfoFactory(max))
this.basicGeographicMapGraph= BasicGeographicMapGraph(pathFindingInfo!.getPathFindingNodeCostInfoFactoryInterface() as PathFindingNodeCostInfoFactory)
this.pathFinderGraphVisitorFactoryInterface= pathFinderGraphVisitorFactoryInterface
}


                //@Throws(Error::class)
            
    public getInstance(geographicMapInterface: BasicGeographicMap, mapArray: IntArray[]): PathFindingInfo{
    //var geographicMapInterface = geographicMapInterface
    //var mapArray = mapArray

    var pathFindingInfo: PathFindingInfo = new PathFindingInfo(this.pathFindingInfo!.getPathFindingNodeCostInfoFactoryInterface());
        
        

RaceTrackRoadsGeographicMapCellHistoryFactory.getInstance()!.init()
this.init(geographicMapInterface, pathFindingInfo, mapArray)
this.basicGeographicMapPathFinder!.init(geographicMapInterface, basicGeographicMapGraph, pathFinderGraphVisitorFactoryInterface!.getInstance(geographicMapInterface))
pathFindingInfo!.setPathFinder(basicGeographicMapPathFinder)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pathFindingInfo;
    
}


                //@Throws(Error::class)
            
    public init(geographicMapInterface: BasicGeographicMap, pathFindingInfo: PathFindingInfo, mapArray: IntArray[]){
    //var geographicMapInterface = geographicMapInterface
    //var pathFindingInfo = pathFindingInfo
    //var mapArray = mapArray
super.init(geographicMapInterface, pathFindingInfo, mapArray)
this.buildPathFindingNodes(geographicMapInterface, pathFindingInfo, mapArray)
}


                //@Throws(Error::class)
            
    buildPathFindingNodes(geographicMapInterface: BasicGeographicMap, pathFindingInfo: PathFindingInfo, mapArray: IntArray[], cellPosition: GeographicMapCellPosition){
    //var geographicMapInterface = geographicMapInterface
    //var pathFindingInfo = pathFindingInfo
    //var mapArray = mapArray
    //var cellPosition = cellPosition

    var geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = geographicMapInterface!.getGeographicMapCellPositionFactory()!;
        
        


    var cellTypeId: number = mapArray[cellPosition!.getRow()]![cellPosition!.getColumn()]!;
        
        


    var geographicMapCellType: GeographicMapCellType = GeographicMapCellTypeFactory.getInstance()!.getInstance(geographicMapInterface!.getCellTypeFromMapCellTypeInt(cellTypeId))!;
        
        


    var raceTrackGeographicMapCellType: RaceTrackGeographicMapCellType = geographicMapCellType as RaceTrackGeographicMapCellType;
        
        


    var allBinaryTiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        


    var pathFindingNodeCostInfoFactoryInterface: PathFindingNodeCostInfoFactoryBase = pathFindingInfo!.getPathFindingNodeCostInfoFactoryInterface()!;
        
        


    var basicGeographicMapUtil: BasicGeographicMapUtil = BasicGeographicMapUtil.getInstance()!;
        
        


    var row: number= 0


    var column: number= 0


    var goingToGeographicMapCellPosition: GeographicMapCellPosition


    var costFromStart: number= 0


    var costToEnd: number= 0





                        for (
    var index: number = 0;
        
        
index < MAX_DIRECTIONS; index++)
        {
row= basicGeographicMapUtil!.getBorderingRow(index, cellPosition)
column= basicGeographicMapUtil!.getBorderingColumn(index, cellPosition)

                        if(row < allBinaryTiledLayer!.getRows() && column < allBinaryTiledLayer!.getColumns() && row >= 0 && column >= 0)
                        
                                    {
                                    goingToGeographicMapCellPosition= geographicMapCellPositionFactory!.getInstance(column, row)
costFromStart= raceTrackGeographicMapCellType!.getTravelCost()
costToEnd= costFromStart
pathFindingNodeCostInfoFactoryInterface!.create(geographicMapInterface, goingToGeographicMapCellPosition, cellPosition, costFromStart, costToEnd)

                                    }
                                
}

}


                //@Throws(Error::class)
            
    buildPathFindingNodes(geographicMapInterface: BasicGeographicMap, pathFindingInfo: PathFindingInfo, mapArray: IntArray[]){
    //var geographicMapInterface = geographicMapInterface
    //var pathFindingInfo = pathFindingInfo
    //var mapArray = mapArray

    var geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = geographicMapInterface!.getGeographicMapCellPositionFactory()!;
        
        


    var allBinaryTiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        


    var totalColumns: number = allBinaryTiledLayer!.getColumns()!;
        
        


    var totalRows: number = allBinaryTiledLayer!.getRows()!;
        
        





                        for (
    var column: number = 0;
        
        
column < totalColumns; column++)
        {




                        for (
    var row: number = 0;
        
        
row < totalRows; row++)
        {
this.buildPathFindingNodes(geographicMapInterface, pathFindingInfo, mapArray, geographicMapCellPositionFactory!.getInstance(column, row))
}

}

}


}
                
            

