
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
//not GWT import - same folder const WeaponLayerimport { CollidableDamageWeaponBehavior } from './CollidableDamageWeaponBehavior.js';
//not GWT import - same folder const CollidableDamageWeaponBehavior
export class DamageWeaponLayer extends WeaponLayer {
        

public constructor (name: string, remoteInfo: RemoteInfo, movement: Movement, animationInterface: Animation, destroyedAnimationInterface: Animation, rectangle: Rectangle, viewPosition: ViewPositionBase, username: string, actorSessionId: number, id: number, multiPlayerType: number){
            super(name, remoteInfo, multiPlayerType, movement, animationInterface, destroyedAnimationInterface, rectangle, viewPosition);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setCollidableInferface(new CollidableDamageWeaponBehavior(true));
    
}


}



