
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../../../../java/lang/RuntimeException.js';
        
            import { Integer } from '../../../../../../../java/lang/Integer.js';
        
import { AllBinaryTiledLayer } from '../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
//not GWT import const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
import { BasicColor } from '../../../../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { Layer } from '../../../../../../../org/allbinary/layer/Layer.js';
//not GWT import const Layer = globalThis.org.allbinary.layer.Layer;

      
import { BasicGeographicMapCellPositionFactory } from '../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js';
//not GWT import const BasicGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMapCellPositionFactory;

      
import { GeographicMapCellPosition } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
import { GeographicMapCellPositionFactoryInterface } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionFactoryInterface.js';
//not GWT import const GeographicMapCellPositionFactoryInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPositionFactoryInterface;

      
import { GeographicMapCellType } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js';
//not GWT import const GeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellType;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RaceTrackGeographicMapInterface } from './RaceTrackGeographicMapInterface.js';
//not GWT import - same folder const RaceTrackGeographicMapInterface = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapInterface;

                import { RaceTrackInfo } from './RaceTrackInfo.js';
//not GWT import - same folder const RaceTrackInfo = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackInfo;

                import { RaceTrackData } from './RaceTrackData.js';
//not GWT import - same folder const RaceTrackData = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackData;

                
export class NullRaceTrackGeographicMap
            extends Object
         implements RaceTrackGeographicMapInterface {
        

    public static readonly NULL_RACE_TRACK_GEOGRAPHIC_MAP: NullRaceTrackGeographicMap = new NullRaceTrackGeographicMap();

    public getId(): Integer{



                            throw new RuntimeException();
                    
}


    public getName(): string{



                            throw new RuntimeException();
                    
}


    public reset(){



                            throw new RuntimeException();
                    
}


    public getAllBinaryTiledLayer(): AllBinaryTiledLayer{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public getCellPositionsAt(layer: Layer, currentCellPositionArray: GeographicMapCellPosition[][], cellPositionArray: GeographicMapCellPosition[][]): boolean{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public getCellPositionAtXY(x: number, y: number): GeographicMapCellPosition{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public getCellPositionAtXYNoThrow(x: number, y: number): GeographicMapCellPosition{



                            throw new RuntimeException();
                    
}


    public getCellTypeFromMapCellTypeInt(cellTypeId: number): number{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public getCellTypeAtXY(x: number, y: number): GeographicMapCellType{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public getCellTypeAt(geographicMapCellPosition: GeographicMapCellPosition): GeographicMapCellType{



                            throw new RuntimeException();
                    
}


    public getGeographicMapCellPositionFactory(): BasicGeographicMapCellPositionFactory{



                            throw new RuntimeException();
                    
}


    public getGeographicMapCellPositionFactoryInterface(): GeographicMapCellPositionFactoryInterface{



                            throw new RuntimeException();
                    
}


    public getForegroundBasicColor(): BasicColor{



                            throw new RuntimeException();
                    
}


    public getBackgroundBasicColor(): BasicColor{



                            throw new RuntimeException();
                    
}


    public getRaceTrackInfo(): RaceTrackInfo{



                            throw new RuntimeException();
                    
}


    public setRaceTrackInfo(aRaceTrackInfo: RaceTrackInfo){



                            throw new RuntimeException();
                    
}


    public getRaceTrackData(): RaceTrackData{



                            throw new RuntimeException();
                    
}


    public setRaceTrackData(raceTrackData: RaceTrackData){



                            throw new RuntimeException();
                    
}


}



