
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2006 AllBinary
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
        



import { BasicGeographicMap } from "../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCellPosition } from "../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCellType } from "../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js";

    
import { RaceTrackGeographicMapCellType } from "../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellType.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PathFindingNodeCostInfoFactoryBase } from "./PathFindingNodeCostInfoFactoryBase.js";

export class PathFindingNodeCostInfoFactory extends PathFindingNodeCostInfoFactoryBase {
        
public constructor (max: number){

            super();
        var max = max
}


                //@Throws(Error::class)
            
    public create(geographicMapInterface: BasicGeographicMap, goingToGeographicMapCellPosition: GeographicMapCellPosition, geographicMapCellPosition: GeographicMapCellPosition, costFromStart: number, costToEnd: number){
    //var geographicMapInterface = geographicMapInterface
    //var goingToGeographicMapCellPosition = goingToGeographicMapCellPosition
    //var geographicMapCellPosition = geographicMapCellPosition
    //var costFromStart = costFromStart
    //var costToEnd = costToEnd
}


                //@Throws(Error::class)
            
    public getTotalCost(geographicMapInterface: BasicGeographicMap, comingFromGeographicMapCellPosition: GeographicMapCellPosition, geographicMapCellPosition: GeographicMapCellPosition): number{
    //var geographicMapInterface = geographicMapInterface
    //var comingFromGeographicMapCellPosition = comingFromGeographicMapCellPosition
    //var geographicMapCellPosition = geographicMapCellPosition

    var geographicMapCellType: GeographicMapCellType = geographicMapInterface!.getCellTypeAt(comingFromGeographicMapCellPosition)!;
        
        
;
    

    var geographicMapCellType2: GeographicMapCellType = geographicMapInterface!.getCellTypeAt(geographicMapCellPosition)!;
        
        
;
    

    var raceTrackGeographicMapCellType: RaceTrackGeographicMapCellType = geographicMapCellType as RaceTrackGeographicMapCellType;
        
        
;
    

    var raceTrackGeographicMapCellType2: RaceTrackGeographicMapCellType = geographicMapCellType2 as RaceTrackGeographicMapCellType;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return raceTrackGeographicMapCellType!.getTravelCost();

                         +raceTrackGeographicMapCellType2!.getTravelCost();
    
}


}
                
            

