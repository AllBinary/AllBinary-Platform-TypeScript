
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

        


            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../../../java/lang/Integer.js';
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RaceTrackGeographicMap } from './RaceTrackGeographicMap.js';
//not GWT import const RaceTrackGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMap;

                
export interface RaceTrackGeographicMapInterfaceFactoryInterface {
        

                //@Throws(Exception.constructor)
            
    getLevelInstance(id: Integer): RaceTrackGeographicMap

                //@Throws(Exception.constructor)
            
    getTrackInstance(id: Integer): RaceTrackGeographicMap

}



