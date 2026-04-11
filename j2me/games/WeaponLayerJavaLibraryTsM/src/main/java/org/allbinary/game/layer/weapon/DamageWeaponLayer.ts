
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
        



import { Animation } from "../../../../../org/allbinary/animation/Animation.js";

    
import { RemoteInfo } from "../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    
import { Movement } from "../../../../../org/allbinary/physics/movement/Movement.js";

    
import { ViewPosition } from "../../../../../org/allbinary/view/ViewPosition.js";

    

export class DamageWeaponLayer extends WeaponLayer {
        
public constructor (name: string, movement: Movement, animationInterface: Animation, rectangle: Rectangle, viewPosition: ViewPosition)                        

                            : super(name, movement, animationInterface, rectangle, viewPosition){

            super();
                //var name = name
    //var movement = movement
    //var animationInterface = animationInterface
    //var rectangle = rectangle
    //var viewPosition = viewPosition


                            //For kotlin this is before the body of the constructor.
                    
this.setCollidableInferface(CollidableDamageWeaponBehavior(this, true));
    
}

public constructor (name: string, movement: Movement, animationInterface: Animation, destroyedAnimationInterface: Animation, rectangle: Rectangle, viewPosition: ViewPosition)                        

                            : super(name, movement, animationInterface, destroyedAnimationInterface, rectangle, viewPosition){

            super();
                //var name = name
    //var movement = movement
    //var animationInterface = animationInterface
    //var destroyedAnimationInterface = destroyedAnimationInterface
    //var rectangle = rectangle
    //var viewPosition = viewPosition


                            //For kotlin this is before the body of the constructor.
                    
this.setCollidableInferface(CollidableDamageWeaponBehavior(this, true));
    
}

public constructor (name: string, remoteInfo: RemoteInfo, movement: Movement, animationInterface: Animation, destroyedAnimationInterface: Animation, rectangle: Rectangle, viewPosition: ViewPosition, username: string, actorSessionId: number, id: number, multiPlayerType: number)                        

                            : super(name, remoteInfo, multiPlayerType, movement, animationInterface, destroyedAnimationInterface, rectangle, viewPosition){

            super();
                //var name = name
    //var remoteInfo = remoteInfo
    //var movement = movement
    //var animationInterface = animationInterface
    //var destroyedAnimationInterface = destroyedAnimationInterface
    //var rectangle = rectangle
    //var viewPosition = viewPosition
    //var username = username
    //var actorSessionId = actorSessionId
    //var id = id
    //var multiPlayerType = multiPlayerType


                            //For kotlin this is before the body of the constructor.
                    
this.setCollidableInferface(CollidableDamageWeaponBehavior(this, true));
    
}


}
                
            

