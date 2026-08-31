
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
        
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      //not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { AnimationBehaviorFactory } from '../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
      //not GWT import const AnimationBehaviorFactory = globalThis.org.allbinary.animation.AnimationBehaviorFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseImageAnimationFactory } from './BaseImageAnimationFactory.js';
//not GWT import const  = globalThis.org.allbinary.animation.image.BaseImageAnimationFactory;

                import { LeftToRightImageAnimation } from './LeftToRightImageAnimation.js';
//not GWT import const  = globalThis.org.allbinary.animation.image.LeftToRightImageAnimation;

                import { AdjustedLeftToRightImageAnimation } from './AdjustedLeftToRightImageAnimation.js';
//not GWT import const  = globalThis.org.allbinary.animation.image.AdjustedLeftToRightImageAnimation;

                
export class LeftToRightImageAnimationFactory extends BaseImageAnimationFactory {
        

public constructor (image: Image, sequenceArray: number[], dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory){
            super(image, sequenceArray, image.getWidth(), image.getHeight(), dx, dy, animationBehaviorFactory);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{

    var scaledImage: Image = this.animationFactoryImageScaleUtil!.createImage(this.getImage(), this.animationFactoryInitializationVisitor!.width, this.animationFactoryInitializationVisitor!.height, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight)!;;
    

                        if(this.animationFactoryInitializationVisitor!.dx != 0 || this.animationFactoryInitializationVisitor!.dy != 0)
                        
                                    {
                                    this.animationFactoryImageScaleUtil!.processAdjust(this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AdjustedLeftToRightImageAnimation(scaledImage, this.getSequenceArray(), this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new LeftToRightImageAnimation(scaledImage, this.getSequenceArray(), this.animationBehaviorFactory!.getOrCreateInstance());
    

                        }
                            
}


}



