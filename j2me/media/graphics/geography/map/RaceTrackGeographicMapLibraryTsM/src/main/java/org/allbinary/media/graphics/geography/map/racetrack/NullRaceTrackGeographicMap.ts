
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
        



            import { Integer } from "../../../../../../../java/lang/Integer.js";
        
import { AllBinaryTiledLayer } from "../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { BasicColor } from "../../../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { Layer } from "../../../../../../../org/allbinary/layer/Layer.js";

    
import { BasicGeographicMapCellPositionFactory } from "../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js";

    
import { GeographicMapCellPosition } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCellPositionFactoryInterface } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionFactoryInterface.js";

    
import { GeographicMapCellType } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { RaceTrackInfo } from "./RaceTrackInfo.js";

import { RaceTrackData } from "./RaceTrackData.js";

export class NullRaceTrackGeographicMap
            extends Object
         implements RaceTrackGeographicMapInterface {
        

    public static readonly NULL_RACE_TRACK_GEOGRAPHIC_MAP: NullRaceTrackGeographicMap = new NullRaceTrackGeographicMap();
        
        

    public getId(): Integer{



                            throw new RuntimeException()
}


    public getName(): string{



                            throw new RuntimeException()
}


    public reset(){



                            throw new RuntimeException()
}


    public getAllBinaryTiledLayer(): AllBinaryTiledLayer{



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public getCellPositionsAt(layer: Layer, currentCellPositionArray: GeographicMapCellPosition[][], cellPositionArray: GeographicMapCellPosition[][]): boolean{
var layer = layer
var currentCellPositionArray = currentCellPositionArray
var cellPositionArray = cellPositionArray



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public getCellPositionAt(x: number, y: number): GeographicMapCellPosition{
var x = x
var y = y



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public getCellPositionAtNoThrow(x: number, y: number): GeographicMapCellPosition{
var x = x
var y = y



                            throw new RuntimeException()
}


    public getCellTypeFromMapCellTypeInt(cellTypeId: number): number{
var cellTypeId = cellTypeId



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public getCellTypeAt(x: number, y: number): GeographicMapCellType{
var x = x
var y = y



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public getCellTypeAt(geographicMapCellPosition: GeographicMapCellPosition): GeographicMapCellType{
var geographicMapCellPosition = geographicMapCellPosition



                            throw new RuntimeException()
}


    public getGeographicMapCellPositionFactory(): BasicGeographicMapCellPositionFactory{



                            throw new RuntimeException()
}


    public getGeographicMapCellPositionFactoryInterface(): GeographicMapCellPositionFactoryInterface{



                            throw new RuntimeException()
}


    public getForegroundBasicColor(): BasicColor{



                            throw new RuntimeException()
}


    public getBackgroundBasicColor(): BasicColor{



                            throw new RuntimeException()
}


    public getRaceTrackInfo(): RaceTrackInfo{



                            throw new RuntimeException()
}


    public setRaceTrackInfo(aRaceTrackInfo: RaceTrackInfo){
var aRaceTrackInfo = aRaceTrackInfo



                            throw new RuntimeException()
}


    public getRaceTrackData(): RaceTrackData{



                            throw new RuntimeException()
}


    public setRaceTrackData(raceTrackData: RaceTrackData){
var raceTrackData = raceTrackData



                            throw new RuntimeException()
}


}
                
            

