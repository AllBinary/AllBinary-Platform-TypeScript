
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
        
import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
//not GWT import const Animation
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
//not GWT import const FeaturedAnimationInterfaceFactoryInterfaceFactory
import { NullIndexedAnimationFactory } from '../../../../../org/allbinary/animation/NullIndexedAnimationFactory.js';
//not GWT import const NullIndexedAnimationFactory
import { ExplosionResources } from '../../../../../org/allbinary/game/combat/damage/ExplosionResources.js';
//not GWT import const ExplosionResources
import { RemoteInfo } from '../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js';
//not GWT import const RemoteInfo
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle
import { Movement } from '../../../../../org/allbinary/physics/movement/Movement.js';
//not GWT import const Movement
import { ViewPositionBase } from '../../../../../org/allbinary/view/ViewPositionBase.js';
//not GWT import const ViewPositionBase
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WeaponLayer } from './WeaponLayer.js';
//not GWT import - same folder const WeaponLayerimport { CollidableWeaponBehavior } from './CollidableWeaponBehavior.js';
//not GWT import - same folder const CollidableWeaponBehavior
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



