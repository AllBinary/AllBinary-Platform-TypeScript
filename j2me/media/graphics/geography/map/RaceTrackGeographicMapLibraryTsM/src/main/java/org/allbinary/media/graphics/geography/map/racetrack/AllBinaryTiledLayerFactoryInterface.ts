
        /* Generated Code Do Not Modify */

        


            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
import { AllBinaryTiledLayer } from '../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      //not GWT import const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RaceTrackInfo } from './RaceTrackInfo.js';
//not GWT import const RaceTrackInfo = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackInfo;

                import { RaceTrackData } from './RaceTrackData.js';
//not GWT import const RaceTrackData = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackData;

                
export interface AllBinaryTiledLayerFactoryInterface {
        

                //@Throws(Exception.constructor)
            
    getInstance(raceTrackInfo: RaceTrackInfo, raceTrackData: RaceTrackData): AllBinaryTiledLayer

                //@Throws(Exception.constructor)
            
    getMiniInstance(raceTrackData: RaceTrackData): AllBinaryTiledLayer

}



