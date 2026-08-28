
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      const Animation = globalThis.org.allbinary.animation.Animation;

      
//not game specific package import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
//not game specific package import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
      const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;

      
//not game specific package import { SingletonAnimationInterfaceFactory } from '../../../../org/allbinary/animation/SingletonAnimationInterfaceFactory.js';
      const SingletonAnimationInterfaceFactory = globalThis.org.allbinary.animation.SingletonAnimationInterfaceFactory;

      
//not game specific package import { IndexedAnimationToImageArrayUtil } from '../../../../org/allbinary/image/IndexedAnimationToImageArrayUtil.js';
      const IndexedAnimationToImageArrayUtil = globalThis.org.allbinary.image.IndexedAnimationToImageArrayUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageArrayAnimation } from './ImageArrayAnimation.js';

export class ImageArraySingletonAnimationInterfaceFactory extends SingletonAnimationInterfaceFactory {
        

public constructor (imageArray: Image[]){
            super(new ImageArrayAnimation(imageArray, AnimationBehavior.getInstance()));
                    

                            //For kotlin this is before the body of the constructor.
                    
}


}



