
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
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { CollidableBaseBehavior } from '../../../../../org/allbinary/game/collision/CollidableBaseBehavior.js';
//not GWT import const CollidableBaseBehavior = globalThis.org.allbinary.game.collision.CollidableBaseBehavior;

      
import { CollidableInterfaceCompositeInterface } from '../../../../../org/allbinary/game/collision/CollidableInterfaceCompositeInterface.js';
//not GWT import const CollidableInterfaceCompositeInterface = globalThis.org.allbinary.game.collision.CollidableInterfaceCompositeInterface;

      
import { DamageUtil } from '../../../../../org/allbinary/game/combat/damage/DamageUtil.js';
//not GWT import const DamageUtil = globalThis.org.allbinary.game.combat.damage.DamageUtil;

      
import { CollidableCompositeLayer } from '../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js';
//not GWT import const CollidableCompositeLayer = globalThis.org.allbinary.game.layer.CollidableCompositeLayer;

      
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CollidableDestroyableDamageableLayer } from './CollidableDestroyableDamageableLayer.js';
//not GWT import - same folder const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;

                
export class CollidableDestroyableDamageableBehavior extends CollidableBaseBehavior {
        

    readonly damageUtil: DamageUtil = DamageUtil.getInstance()!;

public constructor (collidable: boolean){
            super(collidable);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public isCollision(ownerLayer: CollidableCompositeLayer, collisionLayer: CollidableCompositeLayer): boolean{

                        if(ownerLayer!.getGroupInterface()[0] != collisionLayer!.getGroupInterface()[0])
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.isCollision(ownerLayer, collisionLayer);;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Exception.constructor)
            
    public collide(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableCompositeLayer){

    var ownerCollidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = ownerLayer as CollidableDestroyableDamageableLayer;;
    

    var collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = collidableInterfaceCompositeInterface as CollidableDestroyableDamageableLayer;;
    
ownerCollidableDestroyableDamageableLayer!.damage(collidableDestroyableDamageableLayer!.getDamage(0), 0);
    
}


    public isCollisionInterface(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface): boolean{
ForcedLogUtil.log("No Longer Used", this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Exception.constructor)
            
    public collideInterface(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface){
ForcedLogUtil.log("No Longer Used", this);
    
}


}



