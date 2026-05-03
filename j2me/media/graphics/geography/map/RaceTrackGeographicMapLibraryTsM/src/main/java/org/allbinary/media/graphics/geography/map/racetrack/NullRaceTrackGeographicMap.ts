
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
        



            import { Object } from "../../../../../../../java/lang/Object.js";


        
            import { Exception } from "../../../../../../../java/lang/Exception.js";
        
            import { RuntimeException } from "../../../../../../../java/lang/RuntimeException.js";
        
            import { Integer } from "../../../../../../../java/lang/Integer.js";
        
import { AllBinaryTiledLayer } from "../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { BasicColor } from "../../../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { Layer } from "../../../../../../../org/allbinary/layer/Layer.js";

    
import { BasicGeographicMapCellPositionFactory } from "../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js";

    
import { GeographicMapCellPosition } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCellPositionFactoryInterface } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionFactoryInterface.js";

    
import { GeographicMapCellType } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RaceTrackGeographicMapInterface } from "./RaceTrackGeographicMapInterface.js";
import { RaceTrackInfo } from "./RaceTrackInfo.js";
import { RaceTrackData } from "./RaceTrackData.js";

export class NullRaceTrackGeographicMap
            extends Object
         implements RaceTrackGeographicMapInterface {
        

    public static readonly NULL_RACE_TRACK_GEOGRAPHIC_MAP: NullRaceTrackGeographicMap = new NullRaceTrackGeographicMap();

    public getId(): number{



                            throw Error();
                    
}


    public getName(): string{



                            throw Error();
                    
}


    public reset(){



                            throw Error();
                    
}


    public getAllBinaryTiledLayer(): AllBinaryTiledLayer{



                            throw Error();
                    
}


                //@Throws(Exception.constructor)
            
    public getCellPositionsAt(layer: Layer, currentCellPositionArray: GeographicMapCellPosition[][], cellPositionArray: GeographicMapCellPosition[][]): boolean{
var layer = layer
var currentCellPositionArray = currentCellPositionArray
var cellPositionArray = cellPositionArray



                            throw Error();
                    
}


                //@Throws(Exception.constructor)
            
    public getCellPositionAtXY(x: number, y: number): GeographicMapCellPosition{
var x = x
var y = y



                            throw Error();
                    
}


                //@Throws(Exception.constructor)
            
    public getCellPositionAtXYNoThrow(x: number, y: number): GeographicMapCellPosition{
var x = x
var y = y



                            throw Error();
                    
}


    public getCellTypeFromMapCellTypeInt(cellTypeId: number): number{
var cellTypeId = cellTypeId



                            throw Error();
                    
}


                //@Throws(Exception.constructor)
            
    public getCellTypeAtXY(x: number, y: number): GeographicMapCellType{
var x = x
var y = y



                            throw Error();
                    
}


                //@Throws(Exception.constructor)
            
    public getCellTypeAt(geographicMapCellPosition: GeographicMapCellPosition): GeographicMapCellType{
var geographicMapCellPosition = geographicMapCellPosition



                            throw Error();
                    
}


    public getGeographicMapCellPositionFactory(): BasicGeographicMapCellPositionFactory{



                            throw Error();
                    
}


    public getGeographicMapCellPositionFactoryInterface(): GeographicMapCellPositionFactoryInterface{



                            throw Error();
                    
}


    public getForegroundBasicColor(): BasicColor{



                            throw Error();
                    
}


    public getBackgroundBasicColor(): BasicColor{



                            throw Error();
                    
}


    public getRaceTrackInfo(): RaceTrackInfo{



                            throw Error();
                    
}


    public setRaceTrackInfo(aRaceTrackInfo: RaceTrackInfo){
var aRaceTrackInfo = aRaceTrackInfo



                            throw Error();
                    
}


    public getRaceTrackData(): RaceTrackData{



                            throw Error();
                    
}


    public setRaceTrackData(raceTrackData: RaceTrackData){
var raceTrackData = raceTrackData



                            throw Error();
                    
}


}
                
            

