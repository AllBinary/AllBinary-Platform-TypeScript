
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
        



import { AllBinaryTiledLayer } from "../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { TileLayerPositionIntoViewPosition } from "../../../../../org/allbinary/game/view/TileLayerPositionIntoViewPosition.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { ViewPositionEventHandler } from "../../../../../org/allbinary/view/event/ViewPositionEventHandler.js";

    

export class RaceTrackPickupLayer extends PickupLayer {
        

    private static readonly NAME: string = "RaceTrackPickupLayer";
        
        
public constructor ()                        

                            : super(NAME, TileLayerPositionIntoViewPosition()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}


    private readonly viewPositionEventHandler: ViewPositionEventHandler = ViewPositionEventHandler.getInstance()!;
        
        

    public setTiledLayer(tiledLayer: AllBinaryTiledLayer){
var tiledLayer = tiledLayer

    var viewPosition: TileLayerPositionIntoViewPosition = this.getViewPosition() as TileLayerPositionIntoViewPosition;
        
        

viewPosition!.setTiledLayer(tiledLayer)
viewPositionEventHandler!.addListener(this as AllBinaryLayer)
}


    public setDestroyed(destroyed: boolean){
var destroyed = destroyed
super.setDestroyed(destroyed)

                        if(this.isDestroyed())
                        
                                    {
                                    viewPositionEventHandler!.removeListener(this)

                                    }
                                
}


}
                
            

