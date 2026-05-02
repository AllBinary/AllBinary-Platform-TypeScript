
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
        



            import { Object } from "../../../../../../../java/lang/Object.js";


        
            import { Exception } from "../../../../../../../java/lang/Exception.js";
        

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CustomMapGeneratorBaseFactory } from "./CustomMapGeneratorBaseFactory.js";
import { CustomMapGenerator } from "./CustomMapGenerator.js";
import { CustomMapGeneratorBase } from "./CustomMapGeneratorBase.js";
import { RaceTrackGeographicMap } from "./RaceTrackGeographicMap.js";

export class CustomMapGeneratorFactory extends CustomMapGeneratorBaseFactory {
        

                //@Throws(Exception::class)
            
    public create(raceTrackGeographicMap: RaceTrackGeographicMap): CustomMapGeneratorBase{
    //var raceTrackGeographicMap = raceTrackGeographicMap



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new CustomMapGenerator(raceTrackGeographicMap);
    
}


}
                
            

