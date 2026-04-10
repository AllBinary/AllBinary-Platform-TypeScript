
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
        



import { AllBinaryTiledLayer } from "../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { BasicColor } from "../../../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { Layer } from "../../../../../../../org/allbinary/layer/Layer.js";

    
import { BasicGeographicMapCellPositionFactory } from "../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js";

    
import { GeographicMapCellPosition } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCellPositionFactoryInterface } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionFactoryInterface.js";

    
import { GeographicMapCellType } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js";

    

export class NullRaceTrackGeographicMap
            extends Object
        
                , RaceTrackGeographicMapInterface {
        

    public static readonly NULL_RACE_TRACK_GEOGRAPHIC_MAP: NullRaceTrackGeographicMap = new NullRaceTrackGeographicMap();
        
        

    public getId(): Integer{



                            throw RuntimeException()
}


    public getName(): string{



                            throw RuntimeException()
}


    public reset(){



                            throw RuntimeException()
}


    public getAllBinaryTiledLayer(): AllBinaryTiledLayer{



                            throw RuntimeException()
}


                @Throws(Exception::class)
            
    public getCellPositionsAt(layer: Layer, currentCellPositionArray: GeographicMapCellPosition[][], cellPositionArray: GeographicMapCellPosition[][]): boolean{
var layer = layer
var currentCellPositionArray = currentCellPositionArray
var cellPositionArray = cellPositionArray



                            throw RuntimeException()
}


                @Throws(Exception::class)
            
    public getCellPositionAt(x: number, y: number): GeographicMapCellPosition{
var x = x
var y = y



                            throw RuntimeException()
}


                @Throws(Exception::class)
            
    public getCellPositionAtNoThrow(x: number, y: number): GeographicMapCellPosition{
var x = x
var y = y



                            throw RuntimeException()
}


    public getCellTypeFromMapCellTypeInt(cellTypeId: number): number{
var cellTypeId = cellTypeId



                            throw RuntimeException()
}


                @Throws(Exception::class)
            
    public getCellTypeAt(x: number, y: number): GeographicMapCellType{
var x = x
var y = y



                            throw RuntimeException()
}


                @Throws(Exception::class)
            
    public getCellTypeAt(geographicMapCellPosition: GeographicMapCellPosition): GeographicMapCellType{
var geographicMapCellPosition = geographicMapCellPosition



                            throw RuntimeException()
}


    public getGeographicMapCellPositionFactory(): BasicGeographicMapCellPositionFactory{



                            throw RuntimeException()
}


    public getGeographicMapCellPositionFactoryInterface(): GeographicMapCellPositionFactoryInterface{



                            throw RuntimeException()
}


    public getForegroundBasicColor(): BasicColor{



                            throw RuntimeException()
}


    public getBackgroundBasicColor(): BasicColor{



                            throw RuntimeException()
}


    public getRaceTrackInfo(): RaceTrackInfo{



                            throw RuntimeException()
}


    public setRaceTrackInfo(aRaceTrackInfo: RaceTrackInfo){
var aRaceTrackInfo = aRaceTrackInfo



                            throw RuntimeException()
}


    public getRaceTrackData(): RaceTrackData{



                            throw RuntimeException()
}


    public setRaceTrackData(raceTrackData: RaceTrackData){
var raceTrackData = raceTrackData



                            throw RuntimeException()
}


}
                
            

