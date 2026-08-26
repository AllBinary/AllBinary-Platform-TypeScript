
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
        
//not game specific package import { CollidableInterfaceCompositeInterface } from '../../../../../org/allbinary/game/collision/CollidableInterfaceCompositeInterface.js';
      const CollidableInterfaceCompositeInterface = globalThis.org.allbinary.game.collision.CollidableInterfaceCompositeInterface;

      
//not game specific package import { CollisionType } from '../../../../../org/allbinary/game/collision/CollisionType.js';
      const CollisionType = globalThis.org.allbinary.game.collision.CollisionType;

      
//not game specific package import { CollisionTypeFactory } from '../../../../../org/allbinary/game/collision/CollisionTypeFactory.js';
      const CollisionTypeFactory = globalThis.org.allbinary.game.collision.CollisionTypeFactory;

      
//not game specific package import { CollidableCompositeLayer } from '../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js';
      const CollidableCompositeLayer = globalThis.org.allbinary.game.layer.CollidableCompositeLayer;

      
//not game specific package import { PickedUpLayerInterface } from '../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterface.js';
      const PickedUpLayerInterface = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerInterface;

      
//not game specific package import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CollidableDestroyableDamageableBehavior } from './CollidableDestroyableDamageableBehavior.js';
import { CollidableDestroyableDamageableLayer } from './CollidableDestroyableDamageableLayer.js';

export class CollidableCharacterNoDamageBehavior extends CollidableDestroyableDamageableBehavior {
        

public constructor (collidable: boolean){
            super(collidable);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public collide(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableCompositeLayer){

    var collisionTypeFactory: CollisionTypeFactory = CollisionTypeFactory.getInstance()!;;
    

    var collisionType: CollisionType = collidableInterfaceCompositeInterface!.getCollidableInferface()!.getCollisionTypeWith(ownerLayer)!;;
    

                        if(collisionType == collisionTypeFactory!.PICKUP)
                        
                                    {
                                    
    var collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = ownerLayer as CollidableDestroyableDamageableLayer;;
    
collidableDestroyableDamageableLayer!.getPickupBehavior()!.doPickupLayer(collidableInterfaceCompositeInterface as PickedUpLayerInterface);
    

                                    }
                                
                        else {
                            
                        }
                            
}


                //@Throws(Exception.constructor)
            
    public collideInterface(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface){
ForcedLogUtil.log(this.commonStrings!.NOT_IMPLEMENTED, this);
    
}


}
                
            

