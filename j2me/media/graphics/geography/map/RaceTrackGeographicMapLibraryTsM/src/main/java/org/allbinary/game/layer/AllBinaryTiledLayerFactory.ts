
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { TiledLayer } from '../../../../javax/microedition/lcdui/game/TiledLayer.js';
      const TiledLayer = globalThis.javax.microedition.lcdui.game.TiledLayer;

      
//not game specific package import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not game specific package import { AllBinaryTiledLayerFactoryInterface } from '../../../../org/allbinary/media/graphics/geography/map/racetrack/AllBinaryTiledLayerFactoryInterface.js';
      const AllBinaryTiledLayerFactoryInterface = globalThis.org.allbinary.media.graphics.geography.map.racetrack.AllBinaryTiledLayerFactoryInterface;

      
//not game specific package import { RaceTrackData } from '../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackData.js';
      const RaceTrackData = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackData;

      
//not game specific package import { RaceTrackInfo } from '../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackInfo.js';
      const RaceTrackInfo = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackInfo;

      
//not game specific package import { TiledLayerFactory } from '../../../../org/allbinary/media/graphics/geography/map/racetrack/TiledLayerFactory.js';
      const TiledLayerFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.TiledLayerFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryTiledLayer } from './AllBinaryTiledLayer.js';
import { AllBinaryJ2METiledLayer } from './AllBinaryJ2METiledLayer.js';

export class AllBinaryTiledLayerFactory
            extends Object
         implements AllBinaryTiledLayerFactoryInterface {
        

                //@Throws(Exception.constructor)
            
    public getInstance(raceTrackInfo: RaceTrackInfo, raceTrackData: RaceTrackData): AllBinaryTiledLayer{

    var allbinaryTiledLayer: AllBinaryTiledLayer;;
    

    var tiledLayer: TiledLayer = new TiledLayerFactory().getInstance(raceTrackData)!;;
    
allbinaryTiledLayer= new AllBinaryJ2METiledLayer(raceTrackData!.getId(), tiledLayer, raceTrackData!.getMapArray(), BasicColorFactory.getInstance()!.RED.intValue());
    
allbinaryTiledLayer!.setCells(raceTrackData!.getMapArray());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return allbinaryTiledLayer;
    
}


                //@Throws(Exception.constructor)
            
    public getMiniInstance(raceTrackData: RaceTrackData): AllBinaryTiledLayer{

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;;
    

    var tiledLayer: TiledLayer = new TiledLayerFactory().getMiniInstance(raceTrackData)!;;
    

    var allbinaryTiledLayer: AllBinaryTiledLayer = new AllBinaryJ2METiledLayer(smallIntegerSingletonFactory!.getAt(raceTrackData!.getId()!.intValue() +100 +1), tiledLayer, raceTrackData!.getMapArray(), BasicColorFactory.getInstance()!.RED.intValue());;
    
allbinaryTiledLayer!.setCells(raceTrackData!.getMapArray());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return allbinaryTiledLayer;
    
}


}
                
            

