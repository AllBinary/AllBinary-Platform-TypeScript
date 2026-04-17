
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
        



import { BasicArrayList } from "../../../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { CommonStrings } from "../../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { LogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { SmallIntegerSingletonFactory } from "../../../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { BasicGeographicMap } from "../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { RaceTrackGeographicMapInterfaceFactoryInterface } from "../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapInterfaceFactoryInterface.js";

    
import { RaceTrackRoadsGeographicMapCellHistoryFactory } from "../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackRoadsGeographicMapCellHistoryFactory.js";

    
import { RaceTracksPathPrinter } from "../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTracksPathPrinter.js";

    
import { PathFindingInfo } from "../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js";

    
import { PathGenerator } from "../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathGenerator.js";

    

export class DynamicRaceTracksPathPrinter extends RaceTracksPathPrinter {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public printAllPaths(raceTrackGeographicMapInterfaceFactoryInterface: RaceTrackGeographicMapInterfaceFactoryInterface, pathFindingInfo: PathFindingInfo, size: number){
var raceTrackGeographicMapInterfaceFactoryInterface = raceTrackGeographicMapInterfaceFactoryInterface
var pathFindingInfo = pathFindingInfo
var size = size

        try {
            



                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var geographicMapInterface: BasicGeographicMap = raceTrackGeographicMapInterfaceFactoryInterface!.getTrackInstance(SmallIntegerSingletonFactory.getInstance()!.getInstance(index))!;
        
        
;
    

    var list: BasicArrayList = PathGenerator.getInstance()!.getInstance(geographicMapInterface, RaceTrackRoadsGeographicMapCellHistoryFactory.getInstance(), pathFindingInfo, 10)!;
        
        
;
    
console.log("Track " +index);
    
this.printPaths(list);
    
}


                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.PROCESS, e);
    
}

}


}
                
            

