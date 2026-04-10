
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
        



import { AllBinaryTiledLayer } from "../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { MyRandomFactory } from "../../../../../../org/allbinary/game/rand/MyRandomFactory.js";

    
import { BasicGeographicMap } from "../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCellPosition } from "../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCellPositionFactoryInterface } from "../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionFactoryInterface.js";

    

export class GeologicalGeographicMapCellPositionFactory
            extends Object
        
                , GeographicMapCellPositionFactoryInterface {
        

    private readonly resourcePerMapCellType: IntArray
public constructor (resourcePerMapCellType: IntArray){

            super();
            var resourcePerMapCellType = resourcePerMapCellType
this.resourcePerMapCellType= resourcePerMapCellType
}


                @Throws(Exception::class)
            
    public getInstance(geographicMapInterface: BasicGeographicMap, i_column: number, i_row: number, columns: number, rows: number, width: number, height: number): GeographicMapCellPosition{
    //var geographicMapInterface = geographicMapInterface
var i_column = i_column
var i_row = i_row
var columns = columns
var rows = rows
var width = width
var height = height

    var tiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        


    var resources: number = this.resourcePerMapCellType[tiledLayer!.getCell(i_column, i_row)] +MyRandomFactory.getInstance()!.getAbsoluteNextInt(1000);
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GeologicalGeographicMapCellPosition(i_column, i_row, columns, rows, width, height, GeologicalResource(resources));
    
}


}
                
            

