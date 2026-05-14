
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { CollidableInterfaceCompositeInterface } from '../../../../../org/allbinary/game/collision/CollidableInterfaceCompositeInterface.js';
      
import { CollisionType } from '../../../../../org/allbinary/game/collision/CollisionType.js';
      
import { CollisionTypeFactory } from '../../../../../org/allbinary/game/collision/CollisionTypeFactory.js';
      
import { CollidableCompositeLayer } from '../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js';
      
import { PickedUpLayerInterface } from '../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterface.js';
      
import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CollidableDestroyableDamageableBehavior } from './CollidableDestroyableDamageableBehavior.js';
import { CollidableDestroyableDamageableLayer } from './CollidableDestroyableDamageableLayer.js';

export class CollidableCharacterBehavior extends CollidableDestroyableDamageableBehavior {
        
public constructor (collidable: boolean){
            super(collidable);
                    var collidable = collidable


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public collide(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableCompositeLayer){
    //var ownerLayer = ownerLayer
var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface

    var collisionTypeFactory: CollisionTypeFactory = CollisionTypeFactory.getInstance()!;
;
    

    var collisionType: CollisionType = collidableInterfaceCompositeInterface!.getCollidableInferface()!.getCollisionTypeWith(ownerLayer)!;
;
    

                        if(collisionType == collisionTypeFactory!.PICKUP)
                        
                                    {
                                    
    var collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = ownerLayer as CollidableDestroyableDamageableLayer;
;
    
collidableDestroyableDamageableLayer!.getPickupBehavior()!.doPickupLayer(collidableInterfaceCompositeInterface as PickedUpLayerInterface);
    

                                    }
                                
                        else {
                            super.collide(ownerLayer, collidableInterfaceCompositeInterface);
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public collideInterface(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface){
    //var ownerLayer = ownerLayer
var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface
ForcedLogUtil.log(this.commonStrings!.NOT_IMPLEMENTED, this);
    
}


}
                
            

