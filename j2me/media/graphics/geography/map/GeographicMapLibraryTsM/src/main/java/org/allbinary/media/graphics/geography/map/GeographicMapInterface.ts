
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../../java/lang/Integer.js';
        
import { AllBinaryTiledLayer } from '../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      //not GWT import const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
import { BasicColor } from '../../../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { Layer } from '../../../../../../org/allbinary/layer/Layer.js';
      //not GWT import const Layer = globalThis.org.allbinary.layer.Layer;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GeographicMapCellPosition } from './GeographicMapCellPosition.js';
//not GWT import const  = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

                import { GeographicMapCellType } from './GeographicMapCellType.js';
//not GWT import const  = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellType;

                import { BasicGeographicMapCellPositionFactory } from './BasicGeographicMapCellPositionFactory.js';
//not GWT import const  = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMapCellPositionFactory;

                import { GeographicMapCellPositionFactoryInterface } from './GeographicMapCellPositionFactoryInterface.js';
//not GWT import const  = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPositionFactoryInterface;

                
export interface GeographicMapInterface {
        

    getId(): Integer

    getName(): string

    reset()

    getAllBinaryTiledLayer(): AllBinaryTiledLayer

                //@Throws(Exception.constructor)
            
    getCellPositionsAt(layer: Layer, currentCellPositionArray: GeographicMapCellPosition[][], cellPositionArray: GeographicMapCellPosition[][]): boolean

                //@Throws(Exception.constructor)
            
    getCellPositionAtXY(x: number, y: number): GeographicMapCellPosition

                //@Throws(Exception.constructor)
            
    getCellPositionAtXYNoThrow(x: number, y: number): GeographicMapCellPosition

    getCellTypeFromMapCellTypeInt(cellTypeId: number): number

                //@Throws(Exception.constructor)
            
    getCellTypeAtXY(x: number, y: number): GeographicMapCellType

                //@Throws(Exception.constructor)
            
    getCellTypeAt(geographicMapCellPosition: GeographicMapCellPosition): GeographicMapCellType

    getGeographicMapCellPositionFactory(): BasicGeographicMapCellPositionFactory

    getGeographicMapCellPositionFactoryInterface(): GeographicMapCellPositionFactoryInterface

    getForegroundBasicColor(): BasicColor

    getBackgroundBasicColor(): BasicColor

}



