
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
        



import { BasicColorFactory } from "../../../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { SmallIntegerSingletonFactory } from "../../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { BasicGeographicMap } from "../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCellPositionBaseFactory } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionBaseFactory.js";

    
import { GeographicMapCellPositionFactoryInterface } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionFactoryInterface.js";

    
import { GeographicMapCellTypeFactory } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js";

    

export class BasicGeographicMapFactory
            extends Object
         {
        

                //@Throws(Error::class)
            
    public getInstance(raceTrackInfo: RaceTrackInfo, raceTrackData: RaceTrackData, tiledLayerFactoryInterface: AllBinaryTiledLayerFactoryInterface, geographicMapCellPositionFactoryInterface: GeographicMapCellPositionFactoryInterface, geographicMapCellTypeFactory: GeographicMapCellTypeFactory): BasicGeographicMap{
    //var raceTrackInfo = raceTrackInfo
    //var raceTrackData = raceTrackData
    //var tiledLayerFactoryInterface = tiledLayerFactoryInterface
    //var geographicMapCellPositionFactoryInterface = geographicMapCellPositionFactoryInterface
    //var geographicMapCellTypeFactory = geographicMapCellTypeFactory



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicGeographicMap(SmallIntegerSingletonFactory.getInstance()!.getInstance(raceTrackInfo!.getId()!.toInt() +100 +1), raceTrackInfo!.getName(), raceTrackData!.getCellTypeIdToGeographicMapCellTypeArray(), tiledLayerFactoryInterface!.getMiniInstance(raceTrackData), BasicColorFactory.getInstance()!.CLEAR_COLOR, BasicColorFactory.getInstance()!.CLEAR_COLOR, geographicMapCellPositionFactoryInterface, GeographicMapCellPositionBaseFactory(), geographicMapCellTypeFactory);
    
}


}
                
            

