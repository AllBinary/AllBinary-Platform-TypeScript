
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
        
import { CollidableInterfaceCompositeInterface } from '../../../../../org/allbinary/game/collision/CollidableInterfaceCompositeInterface.js';
//not GWT import const CollidableInterfaceCompositeInterface = globalThis.org.allbinary.game.collision.CollidableInterfaceCompositeInterface;

      
import { CollisionType } from '../../../../../org/allbinary/game/collision/CollisionType.js';
//not GWT import const CollisionType = globalThis.org.allbinary.game.collision.CollisionType;

      
import { CollisionTypeFactory } from '../../../../../org/allbinary/game/collision/CollisionTypeFactory.js';
//not GWT import const CollisionTypeFactory = globalThis.org.allbinary.game.collision.CollisionTypeFactory;

      
import { CollidableCompositeLayer } from '../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js';
//not GWT import const CollidableCompositeLayer = globalThis.org.allbinary.game.layer.CollidableCompositeLayer;

      
import { PickedUpLayerInterface } from '../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterface.js';
//not GWT import const PickedUpLayerInterface = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerInterface;

      
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CollidableDestroyableDamageableBehavior } from './CollidableDestroyableDamageableBehavior.js';
//not GWT import - same folder const CollidableDestroyableDamageableBehavior = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableBehavior;

                import { CollidableDestroyableDamageableLayer } from './CollidableDestroyableDamageableLayer.js';
//not GWT import - same folder const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;

                
export class CollidableCharacterBehavior extends CollidableDestroyableDamageableBehavior {
        

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
                            super.collide(ownerLayer, collidableInterfaceCompositeInterface);
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public collideInterface(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface){
ForcedLogUtil.log(this.commonStrings!.NOT_IMPLEMENTED, this);
    
}


}



