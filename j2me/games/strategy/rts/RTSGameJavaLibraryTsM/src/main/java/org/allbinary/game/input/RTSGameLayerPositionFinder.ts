
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2003 AllBinary 
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
        



import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { GeographicMapCellPosition } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { DropCellPositionHistory } from "../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js";

    

export class RTSGameLayerPositionFinder
            extends Object
        
                , LayerPositionFinderInterface {
        

    private static readonly instance: RTSGameLayerPositionFinder = new RTSGameLayerPositionFinder();
        
        

    public static getInstance(): RTSGameLayerPositionFinder{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public getLayerInterface(geographicMapCellPosition: GeographicMapCellPosition): AllBinaryLayer{
var geographicMapCellPosition = geographicMapCellPosition



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DropCellPositionHistory.getInstance()!.getLayerInterface(geographicMapCellPosition);
    
}


}
                
            

