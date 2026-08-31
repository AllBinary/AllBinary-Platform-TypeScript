
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

        


import { GeographicMapInterface } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapInterface.js';
      //not GWT import const GeographicMapInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RaceTrackInfo } from './RaceTrackInfo.js';
//not GWT import const  = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackInfo;

                import { RaceTrackData } from './RaceTrackData.js';
//not GWT import const  = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackData;

                
export interface RaceTrackGeographicMapInterface extends GeographicMapInterface {
        

    getRaceTrackInfo(): RaceTrackInfo

    setRaceTrackInfo(aRaceTrackInfo: RaceTrackInfo)

    getRaceTrackData(): RaceTrackData

    setRaceTrackData(raceTrackData: RaceTrackData)

}



