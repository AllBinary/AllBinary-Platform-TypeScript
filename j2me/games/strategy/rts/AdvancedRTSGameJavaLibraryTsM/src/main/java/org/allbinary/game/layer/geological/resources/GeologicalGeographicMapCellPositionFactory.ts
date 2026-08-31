
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2002 AllBinary 
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
        



            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { AllBinaryTiledLayer } from '../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      //not GWT import const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
//not plain js import { MyRandomFactory } from '../../../../../../org/allbinary/game/rand/MyRandomFactory.js';
      const MyRandomFactory = globalThis.org.allbinary.game.rand.MyRandomFactory;

      
import { BasicGeographicMap } from '../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      //not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
import { GeographicMapCellPosition } from '../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      //not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
import { GeographicMapCellPositionFactoryInterface } from '../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionFactoryInterface.js';
      //not GWT import const GeographicMapCellPositionFactoryInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPositionFactoryInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GeologicalGeographicMapCellPosition } from './GeologicalGeographicMapCellPosition.js';
import { GeologicalResource } from './GeologicalResource.js';

export class GeologicalGeographicMapCellPositionFactory
            extends Object
         implements GeographicMapCellPositionFactoryInterface {
        

    private readonly resourcePerMapCellType: number[];

public constructor (resourcePerMapCellType: number[]){

            super();
        this.resourcePerMapCellType= resourcePerMapCellType;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(geographicMapInterface: BasicGeographicMap, i_column: number, i_row: number, columns: number, rows: number, width: number, height: number): GeographicMapCellPosition{

    var tiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;;
    

    var resources: number = this.resourcePerMapCellType[tiledLayer!.getCell(i_column, i_row)] +MyRandomFactory.getInstance()!.getAbsoluteNextInt(1000);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new GeologicalGeographicMapCellPosition(i_column, i_row, columns, rows, width, height, new GeologicalResource(resources));
    
}


}



