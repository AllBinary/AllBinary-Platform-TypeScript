
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2006 AllBinary 
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

    
import { GeographicMapCellPosition } from "../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCellPositionFactoryInitVisitorInterface } from "../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionFactoryInitVisitorInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GeologicalGeographicMapCellPositionFactoryInitVisitor
            extends Object
         implements GeographicMapCellPositionFactoryInitVisitorInterface {
        

                //@Throws(Error::class)
            
    public visit(tiledLayer: AllBinaryTiledLayer, cellPosition: GeographicMapCellPosition){
var tiledLayer = tiledLayer
var cellPosition = cellPosition

    var geologicalGeographicMapCellPosition: GeologicalGeographicMapCellPosition = (cellPosition as GeologicalGeographicMapCellPosition);
        
        
;
    
geologicalGeographicMapCellPosition!.getGeologicalResource()!.init();
    
}


}
                
            

