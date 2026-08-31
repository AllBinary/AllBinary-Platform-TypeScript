
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
        
//not plain js import { CommonStrings } from '../../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { PreLogUtil } from '../../../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
import { AllBinaryTiledLayer } from '../../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      //not GWT import const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
import { BasicGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      //not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
import { BasicGeographicMapCellPositionFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js';
      //not GWT import const BasicGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMapCellPositionFactory;

      
import { BasicGeographicMapUtil } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapUtil.js';
      //not GWT import const BasicGeographicMapUtil = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMapUtil;

      
import { GeographicMapCellPosition } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      //not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
import { GeographicMapCellType } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js';
      //not GWT import const GeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellType;

      
import { GeographicMapCellTypeFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js';
      //not GWT import const GeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellTypeFactory;

      
import { BasePathFindingInfoFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/BasePathFindingInfoFactory.js';
      //not GWT import const BasePathFindingInfoFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.BasePathFindingInfoFactory;

      
import { RaceTrackGeographicMapCellType } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellType.js';
      //not GWT import const RaceTrackGeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapCellType;

      
import { RaceTrackRoadsGeographicMapCellHistoryFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackRoadsGeographicMapCellHistoryFactory.js';
      //not GWT import const RaceTrackRoadsGeographicMapCellHistoryFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackRoadsGeographicMapCellHistoryFactory;

      
import { PathFindingNodeCostInfoFactoryBase } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNodeCostInfoFactoryBase.js';
      //not GWT import const PathFindingNodeCostInfoFactoryBase = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingNodeCostInfoFactoryBase;

      
import { BasicGeographicMapGraph } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/BasicGeographicMapGraph.js';
      //not GWT import const BasicGeographicMapGraph = globalThis.org.allbinary.media.graphics.geography.pathfinding.BasicGeographicMapGraph;

      
import { BasicGeographicMapPathFinder } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/BasicGeographicMapPathFinder.js';
      //not GWT import const BasicGeographicMapPathFinder = globalThis.org.allbinary.media.graphics.geography.pathfinding.BasicGeographicMapPathFinder;

      
import { PathFinderGraphVisitorFactoryBase } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFinderGraphVisitorFactoryBase.js';
      //not GWT import const PathFinderGraphVisitorFactoryBase = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFinderGraphVisitorFactoryBase;

      
import { PathFindingInfo } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js';
      //not GWT import const PathFindingInfo = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingInfo;

      
import { PathFindingNodeCostInfoFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNodeCostInfoFactory.js';
      //not GWT import const PathFindingNodeCostInfoFactory = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingNodeCostInfoFactory;

      
//not plain js import { BasicArrayListS } from '../../../../../../../../org/allbinary/util/BasicArrayListS.js';
      const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SimplePathFinderGraphVisitorFactory } from './SimplePathFinderGraphVisitorFactory.js';
//not GWT import const  = globalThis.org.allbinary.game.media.graphics.geography.map.racetrack.SimplePathFinderGraphVisitorFactory;

                
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



