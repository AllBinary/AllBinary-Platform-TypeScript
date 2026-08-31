
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { AllBinaryTiledLayer } from '../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      //not GWT import const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
import { GeographicMapCellPosition } from '../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      //not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
import { GeographicMapCellPositionFactoryInitVisitorInterface } from '../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionFactoryInitVisitorInterface.js';
      //not GWT import const GeographicMapCellPositionFactoryInitVisitorInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPositionFactoryInitVisitorInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GeologicalGeographicMapCellPosition } from './GeologicalGeographicMapCellPosition.js';
//not GWT import const  = globalThis.org.allbinary.game.layer.geological.resources.GeologicalGeographicMapCellPosition;

                
export class GeologicalGeographicMapCellPositionFactoryInitVisitor
            extends Object
         implements GeographicMapCellPositionFactoryInitVisitorInterface {
        

                //@Throws(Exception.constructor)
            
    public visit(tiledLayer: AllBinaryTiledLayer, cellPosition: GeographicMapCellPosition){

    var geologicalGeographicMapCellPosition: GeologicalGeographicMapCellPosition = (cellPosition as GeologicalGeographicMapCellPosition);;
    
geologicalGeographicMapCellPosition!.getGeologicalResource()!.init();
    
}


}



