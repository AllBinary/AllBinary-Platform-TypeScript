
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { BasicGeographicMap } from '../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      
import { GeographicMapCellPosition } from '../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      
import { GeographicMapCellType } from '../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js';
      
import { RaceTrackGeographicMapCellType } from '../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellType.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PathFindingNodeCostInfoFactoryBase } from './PathFindingNodeCostInfoFactoryBase.js';

export class PathFindingNodeCostInfoFactory extends PathFindingNodeCostInfoFactoryBase {
        

public constructor (max: number){

            super();
        }


                //@Throws(Exception.constructor)
            
    public create(geographicMapInterface: BasicGeographicMap, goingToGeographicMapCellPosition: GeographicMapCellPosition, geographicMapCellPosition: GeographicMapCellPosition, costFromStart: number, costToEnd: number){
}


                //@Throws(Exception.constructor)
            
    public getTotalCost(geographicMapInterface: BasicGeographicMap, comingFromGeographicMapCellPosition: GeographicMapCellPosition, geographicMapCellPosition: GeographicMapCellPosition): number{

    var geographicMapCellType: GeographicMapCellType = geographicMapInterface!.getCellTypeAt(comingFromGeographicMapCellPosition)!;;
    

    var geographicMapCellType2: GeographicMapCellType = geographicMapInterface!.getCellTypeAt(geographicMapCellPosition)!;;
    

    var raceTrackGeographicMapCellType: RaceTrackGeographicMapCellType = geographicMapCellType as RaceTrackGeographicMapCellType;;
    

    var raceTrackGeographicMapCellType2: RaceTrackGeographicMapCellType = geographicMapCellType2 as RaceTrackGeographicMapCellType;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return raceTrackGeographicMapCellType!.getTravelCost() +raceTrackGeographicMapCellType2!.getTravelCost();
    
}


}
                
            

