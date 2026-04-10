
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

    
import { BasicGeographicMap } from "../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { BasePathFindingInfoFactory } from "../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/BasePathFindingInfoFactory.js";

    
import { RaceTrackRoadsGeographicMapCellHistoryFactory } from "../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackRoadsGeographicMapCellHistoryFactory.js";

    
import { PathFindingInfo } from "../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js";

    
import { PathFindingNodeCostInfoFactoryBase } from "../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNodeCostInfoFactoryBase.js";

    

export class PathFindingInfoFactory extends BasePathFindingInfoFactory {
        

    private static readonly instance: PathFindingInfoFactory = new PathFindingInfoFactory();
        
        

    public static getInstance(): PathFindingInfoFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public getInstance(geographicMapInterface: BasicGeographicMap, graphArray: IntArray[]): PathFindingInfo{
    //var geographicMapInterface = geographicMapInterface
    //var graphArray = graphArray

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

PreLogUtil.put(commonStrings!.START, this, commonStrings!.GET_INSTANCE)

    var pathFindingInfo: PathFindingInfo = new PathFindingInfo(PathFindingNodeCostInfoFactoryBase());
        
        

RaceTrackRoadsGeographicMapCellHistoryFactory.getInstance()!.init()
this.init(geographicMapInterface, pathFindingInfo, graphArray)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pathFindingInfo;
    
}


}
                
            

