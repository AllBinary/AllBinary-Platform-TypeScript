
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

        


import { AnimationInterface } from '../../../../org/allbinary/animation/AnimationInterface.js';
//not GWT import const AnimationInterface = globalThis.org.allbinary.animation.AnimationInterface;

      
import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
//not GWT import const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface CompoundAnimationInterface extends AnimationInterface {
        

    nextAnimation()

    previousAnimation()

    setAnimation(index: number)

    getCurrentAnimation(): IndexedAnimation

}



