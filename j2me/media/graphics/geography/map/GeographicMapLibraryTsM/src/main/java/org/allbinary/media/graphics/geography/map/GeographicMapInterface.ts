
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
        



            import { Integer } from "../../../../../../java/lang/Integer.js";
        
import { AllBinaryTiledLayer } from "../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { BasicColor } from "../../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { Layer } from "../../../../../../org/allbinary/layer/Layer.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { GeographicMapCellPosition } from "./GeographicMapCellPosition.js";

import { GeographicMapCellType } from "./GeographicMapCellType.js";

import { BasicGeographicMapCellPositionFactory } from "./BasicGeographicMapCellPositionFactory.js";

import { GeographicMapCellPositionFactoryInterface } from "./GeographicMapCellPositionFactoryInterface.js";

export interface GeographicMapInterface {
        

    public getId(): Integer

    public getName(): string

    reset()

    getAllBinaryTiledLayer(): AllBinaryTiledLayer

                //@Throws(Error::class)
            
    getCellPositionsAt(layer: Layer, currentCellPositionArray: GeographicMapCellPosition[][], cellPositionArray: GeographicMapCellPosition[][]): boolean

                //@Throws(Error::class)
            
    getCellPositionAt(x: number, y: number): GeographicMapCellPosition

                //@Throws(Error::class)
            
    getCellPositionAtNoThrow(x: number, y: number): GeographicMapCellPosition

    getCellTypeFromMapCellTypeInt(cellTypeId: number): number

                //@Throws(Error::class)
            
    getCellTypeAt(x: number, y: number): GeographicMapCellType

                //@Throws(Error::class)
            
    getCellTypeAt(geographicMapCellPosition: GeographicMapCellPosition): GeographicMapCellType

    getGeographicMapCellPositionFactory(): BasicGeographicMapCellPositionFactory

    getGeographicMapCellPositionFactoryInterface(): GeographicMapCellPositionFactoryInterface

    public getForegroundBasicColor(): BasicColor

    public getBackgroundBasicColor(): BasicColor

}
                
            

