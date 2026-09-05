
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

        


            import { Object } from '../../../../../../../java/lang/Object.js';
        
//not plain js import { TiledLayer } 
const TiledLayer = globalThis.javax.microedition.lcdui.game.TiledLayer;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RaceTrackData } from './RaceTrackData.js';
//not GWT import - same folder const RaceTrackData = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackData;

                
export class TiledLayerFactory
            extends Object
         {
        

    public getInstance(raceTrackData: RaceTrackData): TiledLayer{

    var mapArray: number[][] = raceTrackData!.getMapArray()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TiledLayer(mapArray[0]!.length, mapArray!.length, raceTrackData!.getTileSetImage(), raceTrackData!.getCellWidth(), raceTrackData!.getCellHeight());
    
}


    public getMiniInstance(raceTrackData: RaceTrackData): TiledLayer{

    var mapArray: number[][] = raceTrackData!.getMapArray()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TiledLayer(mapArray[0]!.length, mapArray!.length, raceTrackData!.getMiniTileSetImage(), raceTrackData!.getMiniCellWidth(), raceTrackData!.getMiniCellHeight());
    
}


}



