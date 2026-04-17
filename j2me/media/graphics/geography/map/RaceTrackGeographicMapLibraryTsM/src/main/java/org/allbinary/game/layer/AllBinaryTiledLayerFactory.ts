
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
        



import { TiledLayer } from "../../../../javax/microedition/lcdui/game/TiledLayer.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { AllBinaryTiledLayerFactoryInterface } from "../../../../org/allbinary/media/graphics/geography/map/racetrack/AllBinaryTiledLayerFactoryInterface.js";

    
import { RaceTrackData } from "../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackData.js";

    
import { RaceTrackInfo } from "../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackInfo.js";

    
import { TiledLayerFactory } from "../../../../org/allbinary/media/graphics/geography/map/racetrack/TiledLayerFactory.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AllBinaryTiledLayer } from "./AllBinaryTiledLayer.js";

export class AllBinaryTiledLayerFactory
            extends Object
         implements AllBinaryTiledLayerFactoryInterface {
        

                //@Throws(Error::class)
            
    public getInstance(raceTrackInfo: RaceTrackInfo, raceTrackData: RaceTrackData): AllBinaryTiledLayer{
    //var raceTrackInfo = raceTrackInfo
    //var raceTrackData = raceTrackData

    var allbinaryTiledLayer: AllBinaryTiledLayer
;
    

    var tiledLayer: TiledLayer = new TiledLayerFactory().
                            getInstance(raceTrackData)!;
        
        
;
    
allbinaryTiledLayer= new AllBinaryJ2METiledLayer(raceTrackData!.getId(), tiledLayer, raceTrackData!.getMapArray(), BasicColorFactory.getInstance()!.RED.toInt());
    
allbinaryTiledLayer!.setCells(raceTrackData!.getMapArray());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return allbinaryTiledLayer;
    
}


                //@Throws(Error::class)
            
    public getMiniInstance(raceTrackData: RaceTrackData): AllBinaryTiledLayer{
var raceTrackData = raceTrackData

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;
        
        
;
    

    var tiledLayer: TiledLayer = new TiledLayerFactory().
                            getMiniInstance(raceTrackData)!;
        
        
;
    

    var allbinaryTiledLayer: AllBinaryTiledLayer = new AllBinaryJ2METiledLayer(smallIntegerSingletonFactory!.getInstance(raceTrackData!.getId()!.toInt() +100 +1), tiledLayer, raceTrackData!.getMapArray(), BasicColorFactory.getInstance()!.RED.toInt());
        
        
;
    
allbinaryTiledLayer!.setCells(raceTrackData!.getMapArray());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return allbinaryTiledLayer;
    
}


}
                
            

