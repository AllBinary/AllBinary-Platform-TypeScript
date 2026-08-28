
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
        
            import { System } from '../../../../../../../../java/lang/System.js';
        
//not game specific package import { BasicArrayList } from '../../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { CommonStrings } from '../../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { LogUtil } from '../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { SmallIntegerSingletonFactory } from '../../../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not game specific package import { BasicGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
//not game specific package import { RaceTrackGeographicMapInterfaceFactoryInterface } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapInterfaceFactoryInterface.js';
      const RaceTrackGeographicMapInterfaceFactoryInterface = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapInterfaceFactoryInterface;

      
//not game specific package import { RaceTrackRoadsGeographicMapCellHistoryFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackRoadsGeographicMapCellHistoryFactory.js';
      const RaceTrackRoadsGeographicMapCellHistoryFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackRoadsGeographicMapCellHistoryFactory;

      
//not game specific package import { RaceTracksPathPrinter } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTracksPathPrinter.js';
      const RaceTracksPathPrinter = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTracksPathPrinter;

      
//not game specific package import { PathFindingInfo } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js';
      const PathFindingInfo = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingInfo;

      
//not game specific package import { PathGenerator } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathGenerator.js';
      const PathGenerator = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathGenerator;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DynamicRaceTracksPathPrinter extends RaceTracksPathPrinter {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    public printAllPaths(raceTrackGeographicMapInterfaceFactoryInterface: RaceTrackGeographicMapInterfaceFactoryInterface, pathFindingInfo: PathFindingInfo, size: number){

        try {
            



                        for (
    var index: number = 0;index < size; index++)
        {

    var geographicMapInterface: BasicGeographicMap = raceTrackGeographicMapInterfaceFactoryInterface!.getTrackInstance(SmallIntegerSingletonFactory.getInstance()!.getAt(index))!;;
    

    var list: BasicArrayList = PathGenerator.getInstance()!.createList(geographicMapInterface, RaceTrackRoadsGeographicMapCellHistoryFactory.getInstance(), pathFindingInfo, 10)!;;
    
console.log("Track " +index);
    
this.printPaths(list);
    
}


                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.PROCESS, e);
    
}

}


}



