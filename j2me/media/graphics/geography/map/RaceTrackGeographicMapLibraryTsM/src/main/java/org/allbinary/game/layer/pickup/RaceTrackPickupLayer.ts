
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { NullAnimationFactory } from '../../../../../org/allbinary/animation/NullAnimationFactory.js';
      const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;

      
//not game specific package import { BasicGroupFactory } from '../../../../../org/allbinary/game/identification/BasicGroupFactory.js';
      const BasicGroupFactory = globalThis.org.allbinary.game.identification.BasicGroupFactory;

      
//not game specific package import { AllBinaryTiledLayer } from '../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
//not game specific package import { RemoteInfo } from '../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js';
      const RemoteInfo = globalThis.org.allbinary.game.multiplayer.layer.RemoteInfo;

      
//not game specific package import { TileLayerPositionIntoViewPosition } from '../../../../../org/allbinary/game/view/TileLayerPositionIntoViewPosition.js';
      const TileLayerPositionIntoViewPosition = globalThis.org.allbinary.game.view.TileLayerPositionIntoViewPosition;

      
//not game specific package import { PointFactory } from '../../../../../org/allbinary/graphics/PointFactory.js';
      const PointFactory = globalThis.org.allbinary.graphics.PointFactory;

      
//not game specific package import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { ViewPosition } from '../../../../../org/allbinary/view/ViewPosition.js';
      const ViewPosition = globalThis.org.allbinary.view.ViewPosition;

      
//not game specific package import { ViewPositionEventHandler } from '../../../../../org/allbinary/view/event/ViewPositionEventHandler.js';
      const ViewPositionEventHandler = globalThis.org.allbinary.view.event.ViewPositionEventHandler;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PickupLayer } from './PickupLayer.js';
import { CountedPickedUpLayerInterfaceFactory } from './CountedPickedUpLayerInterfaceFactory.js';

export class RaceTrackPickupLayer extends PickupLayer {
        

    private static readonly NAME: string = "RaceTrackPickupLayer";

public constructor (){
            super(NAME, RemoteInfo.REMOTE_INFO, 0, CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY, NullAnimationFactory.getFactoryInstance()!.getInstance(0), new Rectangle(PointFactory.getInstance()!.ZERO_ZERO, 0, 0), new TileLayerPositionIntoViewPosition());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    private readonly viewPositionEventHandler: ViewPositionEventHandler = ViewPositionEventHandler.getInstance()!;

    public setTiledLayer(tiledLayer: AllBinaryTiledLayer){

    var viewPosition: TileLayerPositionIntoViewPosition = this.getViewPosition() as TileLayerPositionIntoViewPosition;;
    
viewPosition!.setTiledLayer(tiledLayer);
    
this.viewPositionEventHandler!.addListener(this as AllBinaryLayer);
    
}


    public setDestroyed(destroyed: boolean){
super.setDestroyed(destroyed);
    

                        if(this.isDestroyed())
                        
                                    {
                                    this.viewPositionEventHandler!.removeListener(this);
    

                                    }
                                
}


}
                
            

