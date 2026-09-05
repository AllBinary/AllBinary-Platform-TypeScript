
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CustomMapGeneratorBaseFactory } from './CustomMapGeneratorBaseFactory.js';
//not GWT import - same folder const CustomMapGeneratorBaseFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.CustomMapGeneratorBaseFactory;

                import { CustomMapGenerator } from './CustomMapGenerator.js';
//not GWT import - same folder const CustomMapGenerator = globalThis.org.allbinary.media.graphics.geography.map.racetrack.CustomMapGenerator;

                import { CustomMapGeneratorBase } from './CustomMapGeneratorBase.js';
//not GWT import - same folder const CustomMapGeneratorBase = globalThis.org.allbinary.media.graphics.geography.map.racetrack.CustomMapGeneratorBase;

                import { RaceTrackGeographicMap } from './RaceTrackGeographicMap.js';
//not GWT import - same folder const RaceTrackGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMap;

                
export class CustomMapGeneratorFactory extends CustomMapGeneratorBaseFactory {
        

                //@Throws(Exception.constructor)
            
    public create(raceTrackGeographicMap: RaceTrackGeographicMap): CustomMapGeneratorBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new CustomMapGenerator(raceTrackGeographicMap);
    
}


}



