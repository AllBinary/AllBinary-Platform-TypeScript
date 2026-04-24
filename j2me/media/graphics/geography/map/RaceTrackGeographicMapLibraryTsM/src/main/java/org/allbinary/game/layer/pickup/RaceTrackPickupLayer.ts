
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
        



import { NullAnimationFactory } from "../../../../../org/allbinary/animation/NullAnimationFactory.js";

    
import { BasicGroupFactory } from "../../../../../org/allbinary/game/identification/BasicGroupFactory.js";

    
import { AllBinaryTiledLayer } from "../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { RemoteInfo } from "../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js";

    
import { TileLayerPositionIntoViewPosition } from "../../../../../org/allbinary/game/view/TileLayerPositionIntoViewPosition.js";

    
import { PointFactory } from "../../../../../org/allbinary/graphics/PointFactory.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { ViewPosition } from "../../../../../org/allbinary/view/ViewPosition.js";

    
import { ViewPositionEventHandler } from "../../../../../org/allbinary/view/event/ViewPositionEventHandler.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PickupLayer } from "./PickupLayer.js";

import { CountedPickedUpLayerInterfaceFactory } from "./CountedPickedUpLayerInterfaceFactory.js";

export class RaceTrackPickupLayer extends PickupLayer {
        

    private static readonly NAME: string = "RaceTrackPickupLayer";
        
        
public constructor (){
            super(NAME, RemoteInfo.REMOTE_INFO, 0, CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY, NullAnimationFactory.getFactoryInstance()!.getInstance(0), new Rectangle(PointFactory.getInstance()!.ZERO_ZERO, 0, 0), new TileLayerPositionIntoViewPosition());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    private readonly viewPositionEventHandler: ViewPositionEventHandler = ViewPositionEventHandler.getInstance()!;
        
        

    public setTiledLayer(tiledLayer: AllBinaryTiledLayer){
var tiledLayer = tiledLayer

    var viewPosition: TileLayerPositionIntoViewPosition = this.getViewPosition(); as TileLayerPositionIntoViewPosition;
        
        
;
    
viewPosition!.setTiledLayer(tiledLayer);
    
viewPositionEventHandler!.addListener(this as AllBinaryLayer);
    
}


    public setDestroyed(destroyed: boolean){
var destroyed = destroyed
super.setDestroyed(destroyed);
    

                        if(this.isDestroyed())
                        
                                    {
                                    viewPositionEventHandler!.removeListener(this);
    

                                    }
                                
}


}
                
            

