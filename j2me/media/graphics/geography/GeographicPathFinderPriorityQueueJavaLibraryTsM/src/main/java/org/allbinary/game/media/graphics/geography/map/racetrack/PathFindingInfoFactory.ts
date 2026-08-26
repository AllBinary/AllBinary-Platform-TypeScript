
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
        
//not game specific package import { AllBinaryTiledLayer } from '../../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
//not game specific package import { BasicGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
//not game specific package import { BasicGeographicMapCellPositionFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js';
      const BasicGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMapCellPositionFactory;

      
//not game specific package import { GeographicMapCellPosition } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
//not game specific package import { BasePathFindingInfoFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/BasePathFindingInfoFactory.js';
      const BasePathFindingInfoFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.BasePathFindingInfoFactory;

      
//not game specific package import { RaceTrackRoadsGeographicMapCellHistoryFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackRoadsGeographicMapCellHistoryFactory.js';
      const RaceTrackRoadsGeographicMapCellHistoryFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackRoadsGeographicMapCellHistoryFactory;

      
//not game specific package import { PathFinder } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFinder.js';
      const PathFinder = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFinder;

      
//not game specific package import { PathFindingInfo } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js';
      const PathFindingInfo = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingInfo;

      
//not game specific package import { PathFindingNodeCostInfoFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNodeCostInfoFactory.js';
      const PathFindingNodeCostInfoFactory = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingNodeCostInfoFactory;

      
//not game specific package import { BasicArrayListS } from '../../../../../../../../org/allbinary/util/BasicArrayListS.js';
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
                
            

