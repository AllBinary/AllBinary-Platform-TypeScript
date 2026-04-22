
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
        



import { AllBinaryTiledLayer } from "../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { Layer } from "../../../../org/allbinary/layer/Layer.js";

    
import { NullLayer } from "../../../../org/allbinary/layer/NullLayer.js";

    
import { ViewPosition } from "../../../../org/allbinary/view/ViewPosition.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class StaticTileLayerIntoPositionViewPosition extends ViewPosition {
        

    private tiledLayer: Layer = NullLayer.getInstance()!;
        
        

    public layer: AllBinaryLayer = AllBinaryLayer.NULL_ALLBINARY_LAYER;
        
        

    public static setTiledLayer(tiledLayer: AllBinaryTiledLayer){
var tiledLayer = tiledLayer
StaticTileLayerIntoPositionViewPosition.tiledLayer= tiledLayer;
    
}

public constructor (){

            super();
        }


    public getX(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getX() -StaticTileLayerIntoPositionViewPosition.tiledLayer!.getXP();
    
}


    public getY(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getY() -StaticTileLayerIntoPositionViewPosition.tiledLayer!.getYP();
    
}


    public getZ(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getZ() -StaticTileLayerIntoPositionViewPosition.tiledLayer!.getZP();
    
}


}
                
            

