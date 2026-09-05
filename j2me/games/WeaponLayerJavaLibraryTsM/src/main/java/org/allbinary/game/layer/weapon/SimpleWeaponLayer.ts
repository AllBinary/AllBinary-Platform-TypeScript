
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

      
import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
//not GWT import const FeaturedAnimationInterfaceFactoryInterfaceFactory = globalThis.org.allbinary.animation.FeaturedAnimationInterfaceFactoryInterfaceFactory;

      
import { NullIndexedAnimationFactory } from '../../../../../org/allbinary/animation/NullIndexedAnimationFactory.js';
//not GWT import const NullIndexedAnimationFactory = globalThis.org.allbinary.animation.NullIndexedAnimationFactory;

      
import { ExplosionResources } from '../../../../../org/allbinary/game/combat/damage/ExplosionResources.js';
//not GWT import const ExplosionResources = globalThis.org.allbinary.game.combat.damage.ExplosionResources;

      
import { RemoteInfo } from '../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js';
//not GWT import const RemoteInfo = globalThis.org.allbinary.game.multiplayer.layer.RemoteInfo;

      
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
import { Movement } from '../../../../../org/allbinary/physics/movement/Movement.js';
//not GWT import const Movement = globalThis.org.allbinary.physics.movement.Movement;

      
import { ViewPositionBase } from '../../../../../org/allbinary/view/ViewPositionBase.js';
//not GWT import const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WeaponLayer } from './WeaponLayer.js';
//not GWT import - same folder const WeaponLayer = globalThis.org.allbinary.game.layer.weapon.WeaponLayer;

                import { CollidableWeaponBehavior } from './CollidableWeaponBehavior.js';
//not GWT import - same folder const CollidableWeaponBehavior = globalThis.org.allbinary.game.layer.weapon.CollidableWeaponBehavior;

                
export class SimpleWeaponLayer extends WeaponLayer {
        

                //@Throws(Exception.constructor)
            
    public static createDestroyed(): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.getProcedural(ExplosionResources.getInstance()!.THIRD_EXPLOSION_RESOURCE)!.getInstanceAnimation(NullIndexedAnimationFactory.getFactoryInstance()!.getInstance(0));;
    
}


public constructor (name: string, remoteInfo: RemoteInfo, multiPlayerType: number, movement: Movement, animationInterface: Animation, destroyedAnimationInterface: Animation, rectangle: Rectangle, viewPosition: ViewPositionBase){
            super(name, remoteInfo, multiPlayerType, movement, animationInterface, destroyedAnimationInterface, rectangle, viewPosition);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setCollidableInferface(new CollidableWeaponBehavior(true));
    
}


}



