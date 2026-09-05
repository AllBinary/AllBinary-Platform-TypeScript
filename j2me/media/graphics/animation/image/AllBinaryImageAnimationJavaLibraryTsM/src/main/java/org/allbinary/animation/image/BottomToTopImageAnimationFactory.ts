
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
        
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;

      
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { AnimationBehaviorFactory } from '../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
//not GWT import const AnimationBehaviorFactory = globalThis.org.allbinary.animation.AnimationBehaviorFactory;

      
//not plain js import { PrimitiveIntUtil } 
const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseImageAnimationFactory } from './BaseImageAnimationFactory.js';
//not GWT import - same folder const BaseImageAnimationFactory = globalThis.org.allbinary.animation.image.BaseImageAnimationFactory;

                import { BottomToTopImageAnimation } from './BottomToTopImageAnimation.js';
//not GWT import - same folder const BottomToTopImageAnimation = globalThis.org.allbinary.animation.image.BottomToTopImageAnimation;

                
export class BottomToTopImageAnimationFactory extends BaseImageAnimationFactory {
        

public constructor (image: Image, animationBehaviorFactory: AnimationBehaviorFactory){
            super(image, PrimitiveIntUtil.getArrayInstance(), image.getWidth(), image.getHeight(), 0, 0, animationBehaviorFactory);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{

    var scaledImage: Image = this.animationFactoryImageScaleUtil!.createImage(this.getImage(), this.animationFactoryInitializationVisitor!.width, this.animationFactoryInitializationVisitor!.height, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BottomToTopImageAnimation(scaledImage, this.animationBehaviorFactory!.getOrCreateInstance());
    
}


}



