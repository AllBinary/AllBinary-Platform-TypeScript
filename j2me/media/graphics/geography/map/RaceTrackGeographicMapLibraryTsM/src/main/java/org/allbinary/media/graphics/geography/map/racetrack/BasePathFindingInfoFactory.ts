
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
        



import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AllBinaryTiledLayer } from "../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { NullUtil } from "../../../../../../../org/allbinary/logic/NullUtil.js";

    
import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { BasicGeographicMap } from "../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCellPosition } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCellTypeFactory } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js";

    
import { PathFindingInfo } from "../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js";

    
import { PathFindingNode } from "../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNode.js";

    
import { GeographicMapCellPositionFactoryInitVisitorInterface } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionFactoryInitVisitorInterface.js";

    
import { CommonSeps } from "../../../../../../../org/allbinary/string/CommonSeps.js";

    

export class BasePathFindingInfoFactory
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public init(geographicMapInterface: BasicGeographicMap, pathFindingInfo: PathFindingInfo, mapArray: IntArray[]){
    //var geographicMapInterface = geographicMapInterface
    //var pathFindingInfo = pathFindingInfo
    //var mapArray = mapArray

class RaceTrackGeographicMapCellPositionFactoryInitVisitor
            extends Object
        
                , GeographicMapCellPositionFactoryInitVisitorInterface {
        

    private startLineId: number

    private finishLineId: number
public constructor (){

            super();
            
    var raceTrackGeographicMapCellTypeFactory: GeographicMapCellTypeFactory = geographicMapInterface!.getGeographicMapCellTypeFactory()!;
        
        

this.startLineId= raceTrackGeographicMapCellTypeFactory!.getStartType()
this.finishLineId= raceTrackGeographicMapCellTypeFactory!.getEndType()
}


                //@Throws(Error::class)
            
    public visit(tiledLayer: AllBinaryTiledLayer, cellPosition: GeographicMapCellPosition){
    //var tiledLayer = tiledLayer
    //var cellPosition = cellPosition

    var row: number = cellPosition!.getRow()!;
        
        


    var column: number = cellPosition!.getColumn()!;
        
        


        try {
            
    var cellTypeId: number = mapArray[row]![column]!;
        
        


    var geographicCellType: number = geographicMapInterface!.getCellTypeFromMapCellTypeInt(cellTypeId)!;
        
        


                        if(geographicCellType == startLineId)
                        
                                    {
                                    this@BasePathFindingInfoFactory.addStartPathFindingNode(pathFindingInfo, cellPosition)

                                    }
                                

                        if(geographicCellType == finishLineId)
                        
                                    {
                                    
                        if(geographicCellType == startLineId)
                        
                                    {
                                    this@BasePathFindingInfoFactory.addEndPathFindingNode(pathFindingInfo, geographicMapInterface!.getGeographicMapCellPositionFactoryInterface()!.getInstance(geographicMapInterface, cellPosition!.getColumn(), cellPosition!.getRow(), tiledLayer!.getColumns(), tiledLayer!.getRows(), tiledLayer!.getCellWidth(), tiledLayer!.getCellHeight()))

                                    }
                                
                        else {
                            this@BasePathFindingInfoFactory.addEndPathFindingNode(pathFindingInfo, cellPosition)

                        }
                            

                                    }
                                

    var raceTrackGeographicMapCellTypeFactory: GeographicMapCellTypeFactory = geographicMapInterface!.getGeographicMapCellTypeFactory()!;
        
        


    var geographicMapCellTypeFactory: GeographicMapCellTypeFactory = GeographicMapCellTypeFactory.getInstance()!;
        
        


                        if(raceTrackGeographicMapCellTypeFactory!.isPath(geographicMapCellTypeFactory!.getInstance(geographicCellType)))
                        
                                    {
                                    RaceTrackRoadsGeographicMapCellHistoryFactory.getInstance()!.track(cellPosition)

                                    }
                                
                        else {
                            
                        }
                            
} catch(e: Exception)
            {

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

logUtil!.put(StringMaker().
                            append(commonSeps!.BRACKET_OPEN)!.appendint(row)!.append(commonSeps!.BRACKET_CLOSE)!.append(commonSeps!.BRACKET_OPEN)!.appendint(column)!.append("] in [")!.appendint(mapArray!.length)!.append(commonSeps!.BRACKET_CLOSE)!.append(commonSeps!.BRACKET_OPEN)!.appendint(mapArray[0]!.length)!.append(commonSeps!.BRACKET_CLOSE)!.toString(), this, "visit", e)



                            throw e
}

}


}
                
            
geographicMapInterface!.getGeographicMapCellPositionFactory()!.visit(RaceTrackGeographicMapCellPositionFactoryInitVisitor())
}


                //@Throws(Error::class)
            
    addStartPathFindingNode(pathFindingInfo: PathFindingInfo, startGeographicMapCellPosition: GeographicMapCellPosition){
    //var pathFindingInfo = pathFindingInfo
    //var startGeographicMapCellPosition = startGeographicMapCellPosition
pathFindingInfo!.addStartPathFindingNode(PathFindingNode(NullUtil.getInstance()!.NULL_OBJECT, startGeographicMapCellPosition))
}


                //@Throws(Error::class)
            
    addEndPathFindingNode(pathFindingInfo: PathFindingInfo, endGeographicMapCellPosition: GeographicMapCellPosition){
    //var pathFindingInfo = pathFindingInfo
    //var endGeographicMapCellPosition = endGeographicMapCellPosition
pathFindingInfo!.addEndPathFindingNode(PathFindingNode(NullUtil.getInstance()!.NULL_OBJECT, endGeographicMapCellPosition))
}


}
                
            

