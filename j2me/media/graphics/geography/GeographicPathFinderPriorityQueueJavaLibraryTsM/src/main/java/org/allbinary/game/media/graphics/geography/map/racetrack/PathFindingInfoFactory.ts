
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
        
import { AllBinaryTiledLayer } from '../../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
//not GWT import const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
import { BasicGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
//not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
import { BasicGeographicMapCellPositionFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js';
//not GWT import const BasicGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMapCellPositionFactory;

      
import { GeographicMapCellPosition } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
import { BasePathFindingInfoFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/BasePathFindingInfoFactory.js';
//not GWT import const BasePathFindingInfoFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.BasePathFindingInfoFactory;

      
import { RaceTrackRoadsGeographicMapCellHistoryFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackRoadsGeographicMapCellHistoryFactory.js';
//not GWT import const RaceTrackRoadsGeographicMapCellHistoryFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackRoadsGeographicMapCellHistoryFactory;

      
import { PathFinder } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFinder.js';
//not GWT import const PathFinder = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFinder;

      
import { PathFindingInfo } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js';
//not GWT import const PathFindingInfo = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingInfo;

      
import { PathFindingNodeCostInfoFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNodeCostInfoFactory.js';
//not GWT import const PathFindingNodeCostInfoFactory = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingNodeCostInfoFactory;

      
//not plain js import { BasicArrayListS } 
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //1.4.2
export class PathFindingInfoFactory extends BasePathFindingInfoFactory {
        

    private static readonly instance: PathFindingInfoFactory = new PathFindingInfoFactory();

    public static getInstance(): PathFindingInfoFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PathFindingInfoFactory.instance;
    
}


    private static MAX: number = 32768;

    public static initMax(max: number){
PathFindingInfoFactory.MAX= max;
    
}


    private readonly pathFindingInfo: PathFindingInfo;

    private readonly pathFinder: PathFinder;

private constructor (){

            super();
        this.pathFindingInfo= new PathFindingInfo(new PathFindingNodeCostInfoFactory(PathFindingInfoFactory.MAX), new BasicArrayListS(1), new BasicArrayListS(1));
    
this.pathFinder= new PathFinder();
    
}


                //@Throws(Exception.constructor)
            
    public getInstancePathFindingInfo(geographicMapInterface: BasicGeographicMap, mapArray: number[][]): PathFindingInfo{

    var pathFindingInfo: PathFindingInfo = new PathFindingInfo(this.pathFindingInfo!.getPathFindingNodeCostInfoFactoryInterface(), new BasicArrayListS(1), new BasicArrayListS(1));;
    
RaceTrackRoadsGeographicMapCellHistoryFactory.getInstance()!.init();
    
this.init(geographicMapInterface, pathFindingInfo, mapArray);
    
this.pathFinder!.init(geographicMapInterface);
    
pathFindingInfo!.setPathFinder(this.pathFinder);
    



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



