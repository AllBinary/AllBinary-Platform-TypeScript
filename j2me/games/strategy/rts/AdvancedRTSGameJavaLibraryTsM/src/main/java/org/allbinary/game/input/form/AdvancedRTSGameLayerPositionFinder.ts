
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
        



import { LayerPositionFinderInterface } from "../../../../../org/allbinary/game/input/LayerPositionFinderInterface.js";

    
import { WaypointCellPositionHistory } from "../../../../../org/allbinary/game/layer/waypoint/WaypointCellPositionHistory.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { GeographicMapCellPosition } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { DropCellPositionHistory } from "../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AdvancedRTSGameLayerPositionFinder
            extends Object
         implements LayerPositionFinderInterface {
        

    private static readonly instance: AdvancedRTSGameLayerPositionFinder = new AdvancedRTSGameLayerPositionFinder();
        
        

    public static getInstance(): AdvancedRTSGameLayerPositionFinder{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public getLayerInterface(geographicMapCellPosition: GeographicMapCellPosition): AllBinaryLayer{
var geographicMapCellPosition = geographicMapCellPosition

    var layerInterface: AllBinaryLayer = DropCellPositionHistory.getInstance()!.getLayerInterface(geographicMapCellPosition)!;
        
        
;
    

                        if(layerInterface == AllBinaryLayer.NULL_ALLBINARY_LAYER)
                        
                                    {
                                    layerInterface= WaypointCellPositionHistory.getInstance()!.getLayerInterface(geographicMapCellPosition);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return layerInterface;
    
}


}
                
            

