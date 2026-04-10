
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
        



import { TileLayerPositionIntoViewPosition } from "../../../../org/allbinary/game/view/TileLayerPositionIntoViewPosition.js";

    
import { AllBinaryGameCanvas } from "../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js";

    
import { AllBinaryTiledLayer } from "../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { BasicGeographicMap } from "../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCompositeInterface } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js";

    

export class TileLayerPositionIntoViewPositionUtil
            extends Object
         {
        

    public static init(gameCanvasInterface: AllBinaryGameCanvas, viewPosition: TileLayerPositionIntoViewPosition){
    //var gameCanvasInterface = gameCanvasInterface
    //var viewPosition = viewPosition

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = gameCanvasInterface!.getLayerManager() as GeographicMapCompositeInterface;
        
        


    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        


    var tiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        

viewPosition!.setTiledLayer(tiledLayer)
}


}
                
            

