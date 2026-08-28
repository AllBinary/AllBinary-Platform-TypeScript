
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
        



//not game specific package import { AllBinaryTiledLayer } from '../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
//not game specific package import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { Layer } from '../../../../org/allbinary/layer/Layer.js';
      const Layer = globalThis.org.allbinary.layer.Layer;

      
//not game specific package import { NullLayer } from '../../../../org/allbinary/layer/NullLayer.js';
      const NullLayer = globalThis.org.allbinary.layer.NullLayer;

      
//not game specific package import { ViewPosition } from '../../../../org/allbinary/view/ViewPosition.js';
      const ViewPosition = globalThis.org.allbinary.view.ViewPosition;

      
















                                        
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



