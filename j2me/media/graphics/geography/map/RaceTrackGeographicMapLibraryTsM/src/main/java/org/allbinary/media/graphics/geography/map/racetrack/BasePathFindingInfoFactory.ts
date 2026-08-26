
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
        



            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../../../../java/lang/RuntimeException.js';
        
//not game specific package import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AllBinaryTiledLayer } from '../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
//not game specific package import { NullUtil } from '../../../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { StringMaker } from '../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { BasicGeographicMap } from '../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
//not game specific package import { GeographicMapCellPosition } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
//not game specific package import { GeographicMapCellTypeFactory } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js';
      const GeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellTypeFactory;

      
//not game specific package import { PathFindingInfo } from '../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js';
      const PathFindingInfo = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingInfo;

      
//not game specific package import { PathFindingNode } from '../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNode.js';
      const PathFindingNode = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingNode;

      
//not game specific package import { GeographicMapCellPositionFactoryInitVisitorInterface } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionFactoryInitVisitorInterface.js';
      const GeographicMapCellPositionFactoryInitVisitorInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPositionFactoryInitVisitorInterface;

      
//not game specific package import { CommonSeps } from '../../../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RaceTrackRoadsGeographicMapCellHistoryFactory } from './RaceTrackRoadsGeographicMapCellHistoryFactory.js';

export class BasePathFindingInfoFactory
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

                //@Throws(Exception.constructor)
            
    public init(geographicMapInterface: BasicGeographicMap, pathFindingInfo: PathFindingInfo, mapArray: number[][]){

//inner=true member= isStatic=
class RaceTrackGeographicMapCellPositionFactoryInitVisitor
            extends Object
         implements GeographicMapCellPositionFactoryInitVisitorInterface {
        

    private startLineId: number;

    private finishLineId: number;

public constructor (){

            super();
        
    var raceTrackGeographicMapCellTypeFactory: GeographicMapCellTypeFactory = geographicMapInterface!.getGeographicMapCellTypeFactory()!;;
    
this.startLineId= raceTrackGeographicMapCellTypeFactory!.getStartType();
    
this.finishLineId= raceTrackGeographicMapCellTypeFactory!.getEndType();
    
}


                //@Throws(Exception.constructor)
            
    public visit(tiledLayer: AllBinaryTiledLayer, cellPosition: GeographicMapCellPosition){

    var row: number = cellPosition!.getRow()!;;
    

    var column: number = cellPosition!.getColumn()!;;
    

        try {
            
    var cellTypeId: number = mapArray[row]![column]!;;
    

    var geographicCellType: number = geographicMapInterface!.getCellTypeFromMapCellTypeInt(cellTypeId)!;;
    

                        if(geographicCellType == this.startLineId)
                        
                                    {
                                    BasePathFindingInfoFactory.prototype.addStartPathFindingNode(pathFindingInfo, cellPosition);
    

                                    }
                                

                        if(geographicCellType == this.finishLineId)
                        
                                    {
                                    
                        if(geographicCellType == this.startLineId)
                        
                                    {
                                    BasePathFindingInfoFactory.prototype.addEndPathFindingNode(pathFindingInfo, geographicMapInterface!.getGeographicMapCellPositionFactoryInterface()!.getInstance(geographicMapInterface, cellPosition!.getColumn(), cellPosition!.getRow(), tiledLayer!.getColumns(), tiledLayer!.getRows(), tiledLayer!.getCellWidth(), tiledLayer!.getCellHeight()));
    

                                    }
                                
                        else {
                            BasePathFindingInfoFactory.prototype.addEndPathFindingNode(pathFindingInfo, cellPosition);
    

                        }
                            

                                    }
                                

    var raceTrackGeographicMapCellTypeFactory: GeographicMapCellTypeFactory = geographicMapInterface!.getGeographicMapCellTypeFactory()!;;
    

    var geographicMapCellTypeFactory: GeographicMapCellTypeFactory = GeographicMapCellTypeFactory.getInstance()!;;
    

                        if(raceTrackGeographicMapCellTypeFactory!.isPath(geographicMapCellTypeFactory!.get(geographicCellType)))
                        
                                    {
                                    RaceTrackRoadsGeographicMapCellHistoryFactory.getInstance()!.track(cellPosition);
    

                                    }
                                
                        else {
                            
                        }
                            

                //: 
} catch(e) 
            {

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    
logUtil!.put(new StringMaker().append(commonSeps!.BRACKET_OPEN)!.appendint(row)!.append(commonSeps!.BRACKET_CLOSE)!.append(commonSeps!.BRACKET_OPEN)!.appendint(column)!.append("] in [")!.appendint(mapArray!.length)!.append(commonSeps!.BRACKET_CLOSE)!.append(commonSeps!.BRACKET_OPEN)!.appendint(mapArray[0]!.length)!.append(commonSeps!.BRACKET_CLOSE)!.toString(), this, "visit", e);
    



                            throw e;
                    
}

}


}
                
            
geographicMapInterface!.getGeographicMapCellPositionFactory()!.visit(new RaceTrackGeographicMapCellPositionFactoryInitVisitor());
    
}


                //@Throws(Exception.constructor)
            
    addStartPathFindingNode(pathFindingInfo: PathFindingInfo, startGeographicMapCellPosition: GeographicMapCellPosition){
pathFindingInfo!.addStartPathFindingNode(new PathFindingNode(NullUtil.getInstance()!.NULL_OBJECT, startGeographicMapCellPosition));
    
}


                //@Throws(Exception.constructor)
            
    addEndPathFindingNode(pathFindingInfo: PathFindingInfo, endGeographicMapCellPosition: GeographicMapCellPosition){
pathFindingInfo!.addEndPathFindingNode(new PathFindingNode(NullUtil.getInstance()!.NULL_OBJECT, endGeographicMapCellPosition));
    
}


                //@Throws(Exception.constructor)
            
    public getInstancePathFindingInfo(geographicMapInterface: BasicGeographicMap, graphArray: number[][]): PathFindingInfo{



                            throw new RuntimeException();
                    
}


}
                
            

