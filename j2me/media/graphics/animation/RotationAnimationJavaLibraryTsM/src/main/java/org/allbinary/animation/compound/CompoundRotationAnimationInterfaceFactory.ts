
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

        


import { Animation } from '../../../../org/allbinary/animation/Animation.js';
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { AnimationBehaviorFactory } from '../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
//not GWT import const AnimationBehaviorFactory = globalThis.org.allbinary.animation.AnimationBehaviorFactory;

      
import { AnimationInterfaceFactoryInterface } from '../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js';
//not GWT import const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;

      
import { RotationAnimation } from '../../../../org/allbinary/animation/RotationAnimation.js';
//not GWT import const RotationAnimation = globalThis.org.allbinary.animation.RotationAnimation;

      
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CompoundAnimationInterfaceFactory } from './CompoundAnimationInterfaceFactory.js';
//not GWT import - same folder const CompoundAnimationInterfaceFactory = globalThis.org.allbinary.animation.compound.CompoundAnimationInterfaceFactory;

                import { CompoundRotationAnimation } from './CompoundRotationAnimation.js';
//not GWT import - same folder const CompoundRotationAnimation = globalThis.org.allbinary.animation.compound.CompoundRotationAnimation;

                
export class CompoundRotationAnimationInterfaceFactory extends CompoundAnimationInterfaceFactory {
        

public constructor (basicAnimationInterfaceFactoryInterfaceArray: AnimationInterfaceFactoryInterface[], animationBehaviorFactory: AnimationBehaviorFactory){
            super(basicAnimationInterfaceFactoryInterfaceArray, animationBehaviorFactory);
                    

                            //For kotlin this is before the body of the constructor.
                    

                        if(animationBehaviorFactory == AnimationBehaviorFactory.getInstance())
                        
                                    {
                                    ForcedLogUtil.log("Using default AnimationBehaviorFactory with IndexedAnimationFactory", this);
    

                                    }
                                
}


    createArray(size: number): Animation[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Array(size);
    
}


    createAnimation(animationInterfaceArray: Animation[]): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new CompoundRotationAnimation(animationInterfaceArray as RotationAnimation[], this.animationBehaviorFactory!.getOrCreateInstance());
    
}


}



