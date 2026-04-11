
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

    
import { Layer } from "../../../../org/allbinary/layer/Layer.js";

    
import { NullLayer } from "../../../../org/allbinary/layer/NullLayer.js";

    
import { ViewPosition } from "../../../../org/allbinary/view/ViewPosition.js";

    

export class TileLayerPositionIntoViewPosition extends ViewPosition {
        

    private tiledLayer: Layer = NullLayer.getInstance()!;
        
        
public constructor (){

            super();
            }


    public getX(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getX() -this.tiledLayer!.getXP();
    
}


    public getY(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getY() -this.tiledLayer!.getYP();
    
}


    public getZ(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getZ() -this.tiledLayer!.getZP();
    
}


    public setTiledLayer(tiledLayer: AllBinaryTiledLayer){
var tiledLayer = tiledLayer
this.tiledLayer= tiledLayer;
    
}


}
                
            

