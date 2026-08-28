
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
        



            import { Object } from '../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
//not game specific package import { AllBinaryTiledLayer } from '../../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
//not game specific package import { RaceTrackData } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackData.js';
      const RaceTrackData = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackData;

      
//not game specific package import { RaceTrackInfo } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackInfo.js';
      const RaceTrackInfo = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackInfo;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AllBinaryThreedTiledLayerFactory
            extends Object
         {
        

    private static readonly instance: AllBinaryThreedTiledLayerFactory = new AllBinaryThreedTiledLayerFactory();

    public static getInstance(): AllBinaryThreedTiledLayerFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AllBinaryThreedTiledLayerFactory.instance;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(raceTrackInfo: RaceTrackInfo, raceTrackData: RaceTrackData): AllBinaryTiledLayer{



                            throw new Exception("No Threed");
                    
}


}



