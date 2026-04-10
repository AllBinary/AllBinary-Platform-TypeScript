
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
        



import { AllBinaryTiledLayer } from "../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { BasicColor } from "../../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { Layer } from "../../../../../../org/allbinary/layer/Layer.js";

    

interface GeographicMapInterface {
        

    public getId(): Integer

    public getName(): string

    reset()

    getAllBinaryTiledLayer(): AllBinaryTiledLayer

                @Throws(Exception::class)
            
    getCellPositionsAt(layer: Layer, currentCellPositionArray: GeographicMapCellPosition[][], cellPositionArray: GeographicMapCellPosition[][]): boolean

                @Throws(Exception::class)
            
    getCellPositionAt(x: number, y: number): GeographicMapCellPosition

                @Throws(Exception::class)
            
    getCellPositionAtNoThrow(x: number, y: number): GeographicMapCellPosition

    getCellTypeFromMapCellTypeInt(cellTypeId: number): number

                @Throws(Exception::class)
            
    getCellTypeAt(x: number, y: number): GeographicMapCellType

                @Throws(Exception::class)
            
    getCellTypeAt(geographicMapCellPosition: GeographicMapCellPosition): GeographicMapCellType

    getGeographicMapCellPositionFactory(): BasicGeographicMapCellPositionFactory

    getGeographicMapCellPositionFactoryInterface(): GeographicMapCellPositionFactoryInterface

    public getForegroundBasicColor(): BasicColor

    public getBackgroundBasicColor(): BasicColor

}
                
            

