
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
//not game specific package import { LayerPositionFinderInterface } from '../../../../../org/allbinary/game/input/LayerPositionFinderInterface.js';
      const LayerPositionFinderInterface = globalThis.org.allbinary.game.input.LayerPositionFinderInterface;

      
//not game specific package import { WaypointCellPositionHistory } from '../../../../../org/allbinary/game/layer/waypoint/WaypointCellPositionHistory.js';
      const WaypointCellPositionHistory = globalThis.org.allbinary.game.layer.waypoint.WaypointCellPositionHistory;

      
//not game specific package import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { GeographicMapCellPosition } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
//not game specific package import { DropCellPositionHistory } from '../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js';
      const DropCellPositionHistory = globalThis.org.allbinary.media.graphics.geography.map.drop.DropCellPositionHistory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AdvancedRTSGameLayerPositionFinder
            extends Object
         implements LayerPositionFinderInterface {
        

    private static readonly instance: AdvancedRTSGameLayerPositionFinder = new AdvancedRTSGameLayerPositionFinder();

    public static getInstance(): AdvancedRTSGameLayerPositionFinder{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AdvancedRTSGameLayerPositionFinder.instance;
    
}


private constructor (){

            super();
        }


    public getLayerInterface(geographicMapCellPosition: GeographicMapCellPosition): AllBinaryLayer{

    var layerInterface: AllBinaryLayer = DropCellPositionHistory.getInstance()!.getLayerInterface(geographicMapCellPosition)!;;
    

                        if(layerInterface == AllBinaryLayer.NULL_ALLBINARY_LAYER)
                        
                                    {
                                    layerInterface= WaypointCellPositionHistory.getInstance()!.getLayerInterface(geographicMapCellPosition);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return layerInterface;
    
}


}



