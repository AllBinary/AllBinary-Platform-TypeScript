
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

        


import { AllBinaryTiledLayer } from '../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      //not GWT import const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { Layer } from '../../../../org/allbinary/layer/Layer.js';
      //not GWT import const Layer = globalThis.org.allbinary.layer.Layer;

      
import { NullLayer } from '../../../../org/allbinary/layer/NullLayer.js';
      //not GWT import const NullLayer = globalThis.org.allbinary.layer.NullLayer;

      
import { ViewPosition } from '../../../../org/allbinary/view/ViewPosition.js';
      //not GWT import const ViewPosition = globalThis.org.allbinary.view.ViewPosition;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class StaticTileLayerIntoPositionViewPosition extends ViewPosition {
        

    private static tiledLayer: Layer = NullLayer.getInstance()!;

    public static layer: AllBinaryLayer = AllBinaryLayer.NULL_ALLBINARY_LAYER;

    public static setTiledLayer(tiledLayer: AllBinaryTiledLayer){
StaticTileLayerIntoPositionViewPosition.tiledLayer= tiledLayer;
    
}


public constructor (){
            super(0, 0, 0);
                    

                            //For kotlin this is before the body of the constructor.
                    
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



