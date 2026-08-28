
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
        
            import { Integer } from '../../../../../../../../java/lang/Integer.js';
        
//not game specific package import { CommonStrings } from '../../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { PreLogUtil } from '../../../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not game specific package import { AllBinaryTiledLayer } from '../../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
//not game specific package import { BasicGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
//not game specific package import { BasicGeographicMapCellPositionFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js';
      const BasicGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMapCellPositionFactory;

      
//not game specific package import { BasicGeographicMapUtil } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapUtil.js';
      const BasicGeographicMapUtil = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMapUtil;

      
//not game specific package import { GeographicMapCellPosition } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
//not game specific package import { GeographicMapCellType } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js';
      const GeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellType;

      
//not game specific package import { GeographicMapCellTypeFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js';
      const GeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellTypeFactory;

      
//not game specific package import { BasePathFindingInfoFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/BasePathFindingInfoFactory.js';
      const BasePathFindingInfoFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.BasePathFindingInfoFactory;

      
//not game specific package import { RaceTrackGeographicMapCellType } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellType.js';
      const RaceTrackGeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapCellType;

      
//not game specific package import { RaceTrackRoadsGeographicMapCellHistoryFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackRoadsGeographicMapCellHistoryFactory.js';
      const RaceTrackRoadsGeographicMapCellHistoryFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackRoadsGeographicMapCellHistoryFactory;

      
//not game specific package import { PathFindingNodeCostInfoFactoryBase } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNodeCostInfoFactoryBase.js';
      const PathFindingNodeCostInfoFactoryBase = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingNodeCostInfoFactoryBase;

      
//not game specific package import { BasicGeographicMapGraph } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/BasicGeographicMapGraph.js';
      const BasicGeographicMapGraph = globalThis.org.allbinary.media.graphics.geography.pathfinding.BasicGeographicMapGraph;

      
//not game specific package import { BasicGeographicMapPathFinder } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/BasicGeographicMapPathFinder.js';
      const BasicGeographicMapPathFinder = globalThis.org.allbinary.media.graphics.geography.pathfinding.BasicGeographicMapPathFinder;

      
//not game specific package import { PathFinderGraphVisitorFactoryBase } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFinderGraphVisitorFactoryBase.js';
      const PathFinderGraphVisitorFactoryBase = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFinderGraphVisitorFactoryBase;

      
//not game specific package import { PathFindingInfo } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js';
      const PathFindingInfo = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingInfo;

      
//not game specific package import { PathFindingNodeCostInfoFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNodeCostInfoFactory.js';
      const PathFindingNodeCostInfoFactory = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingNodeCostInfoFactory;

      
//not game specific package import { BasicArrayListS } from '../../../../../../../../org/allbinary/util/BasicArrayListS.js';
      const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SimplePathFinderGraphVisitorFactory } from './SimplePathFinderGraphVisitorFactory.js';

export class PathFindingInfoFactory extends BasePathFindingInfoFactory {
        

    private static instance: PathFindingInfoFactory;

    public static getInstance(): PathFindingInfoFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PathFindingInfoFactory.instance;
    
}


    public static initMax(max: number){
PathFindingInfoFactory.instance= new PathFindingInfoFactory(new SimplePathFinderGraphVisitorFactory(1, 1, Integer.MAX_VALUE), max);
    
}


    private readonly MAX_DIRECTIONS: number = 4;

    private readonly pathFindingInfo: PathFindingInfo;

    private readonly basicGeographicMapGraph: BasicGeographicMapGraph;

    private readonly basicGeographicMapPathFinder: BasicGeographicMapPathFinder;

    private readonly pathFinderGraphVisitorFactoryInterface: PathFinderGraphVisitorFactoryBase;

private constructor (pathFinderGraphVisitorFactoryInterface: PathFinderGraphVisitorFactoryBase, max: number){

            super();
        
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
PreLogUtil.put("Using Dynamic Path Finding", this, commonStrings!.GET_INSTANCE);
    
this.basicGeographicMapPathFinder= new BasicGeographicMapPathFinder(max);
    
this.pathFindingInfo= new PathFindingInfo(new PathFindingNodeCostInfoFactory(max), new BasicArrayListS(1), new BasicArrayListS(1));
    
this.basicGeographicMapGraph= new BasicGeographicMapGraph(this.pathFindingInfo!.getPathFindingNodeCostInfoFactoryInterface() as PathFindingNodeCostInfoFactory);
    
this.pathFinderGraphVisitorFactoryInterface= pathFinderGraphVisitorFactoryInterface;
    
}


                //@Throws(Exception.constructor)
            
    public getInstancePathFindingInfo(geographicMapInterface: BasicGeographicMap, mapArray: number[][]): PathFindingInfo{

    var pathFindingInfo: PathFindingInfo = new PathFindingInfo(this.pathFindingInfo!.getPathFindingNodeCostInfoFactoryInterface(), new BasicArrayListS(1), new BasicArrayListS(1));;
    
RaceTrackRoadsGeographicMapCellHistoryFactory.getInstance()!.init();
    
this.init(geographicMapInterface, pathFindingInfo, mapArray);
    
this.basicGeographicMapPathFinder!.init(geographicMapInterface, this.basicGeographicMapGraph, this.pathFinderGraphVisitorFactoryInterface!.getInstance(geographicMapInterface));
    
pathFindingInfo!.setPathFinder(this.basicGeographicMapPathFinder);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pathFindingInfo;
    
}


                //@Throws(Exception.constructor)
            
    public init(geographicMapInterface: BasicGeographicMap, pathFindingInfo: PathFindingInfo, mapArray: number[][]){
super.init(geographicMapInterface, pathFindingInfo, mapArray);
    
this.buildPathFindingNodes(geographicMapInterface, pathFindingInfo, mapArray);
    
}


                //@Throws(Exception.constructor)
            
    buildPathFindingNodesForCellPosition(geographicMapInterface: BasicGeographicMap, pathFindingInfo: PathFindingInfo, mapArray: number[][], cellPosition: GeographicMapCellPosition){

    var geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = geographicMapInterface!.getGeographicMapCellPositionFactory()!;;
    

    var cellTypeId: number = mapArray[cellPosition!.getRow()]![cellPosition!.getColumn()]!;;
    

    var geographicMapCellType: GeographicMapCellType = GeographicMapCellTypeFactory.getInstance()!.get(geographicMapInterface!.getCellTypeFromMapCellTypeInt(cellTypeId))!;;
    

    var raceTrackGeographicMapCellType: RaceTrackGeographicMapCellType = geographicMapCellType as RaceTrackGeographicMapCellType;;
    

    var allBinaryTiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;;
    

    var pathFindingNodeCostInfoFactoryInterface: PathFindingNodeCostInfoFactoryBase = pathFindingInfo!.getPathFindingNodeCostInfoFactoryInterface()!;;
    

    var basicGeographicMapUtil: BasicGeographicMapUtil = BasicGeographicMapUtil.getInstance()!;;
    

    var row: number= 0;;
    

    var column: number= 0;;
    

    var goingToGeographicMapCellPosition: GeographicMapCellPosition;;
    

    var costFromStart: number= 0;;
    

    var costToEnd: number= 0;;
    




                        for (
    var index: number = 0;index < this.MAX_DIRECTIONS; index++)
        {
row= basicGeographicMapUtil!.getBorderingRow(index, cellPosition);
    
column= basicGeographicMapUtil!.getBorderingColumn(index, cellPosition);
    

                        if(row < allBinaryTiledLayer!.getRows() && column < allBinaryTiledLayer!.getColumns() && row >= 0 && column >= 0)
                        
                                    {
                                    goingToGeographicMapCellPosition= geographicMapCellPositionFactory!.getAt(column, row);
    
costFromStart= raceTrackGeographicMapCellType!.getTravelCost();
    
costToEnd= costFromStart;
    
pathFindingNodeCostInfoFactoryInterface!.create(geographicMapInterface, goingToGeographicMapCellPosition, cellPosition, costFromStart, costToEnd);
    

                                    }
                                
}

}


                //@Throws(Exception.constructor)
            
    buildPathFindingNodes(geographicMapInterface: BasicGeographicMap, pathFindingInfo: PathFindingInfo, mapArray: number[][]){

    var geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = geographicMapInterface!.getGeographicMapCellPositionFactory()!;;
    

    var allBinaryTiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;;
    

    var totalColumns: number = allBinaryTiledLayer!.getColumns()!;;
    

    var totalRows: number = allBinaryTiledLayer!.getRows()!;;
    




                        for (
    var column: number = 0;column < totalColumns; column++)
        {




                        for (
    var row: number = 0;row < totalRows; row++)
        {
this.buildPathFindingNodesForCellPosition(geographicMapInterface, pathFindingInfo, mapArray, geographicMapCellPositionFactory!.getAt(column, row));
    
}

}

}


}



