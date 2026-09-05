
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

      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
//not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
//not plain js import { AngleInfo } 
const AngleInfo = globalThis.org.allbinary.math.AngleInfo;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageArrayBaseRotationAnimation } from './ImageArrayBaseRotationAnimation.js';
//not GWT import - same folder const ImageArrayBaseRotationAnimation = globalThis.org.allbinary.animation.image.ImageArrayBaseRotationAnimation;

                import { ImageArrayRotationAnimationInfo } from './ImageArrayRotationAnimationInfo.js';
//not GWT import - same folder const ImageArrayRotationAnimationInfo = globalThis.org.allbinary.animation.image.ImageArrayRotationAnimationInfo;

                
export class ImageArrayRotationAnimation extends ImageArrayBaseRotationAnimation {
        

                //@Throws(Exception.constructor)
            
    static createAnimation(anyType: any = {}, animationBehavior: AnimationBehavior): ImageArrayRotationAnimation{

    var imageRotationAnimationInfo: ImageArrayRotationAnimationInfo = anyType as ImageArrayRotationAnimationInfo;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ImageArrayRotationAnimation(imageRotationAnimationInfo!.getImageArray(), imageRotationAnimationInfo!.getAngleInfoP(), imageRotationAnimationInfo!.getTotalAngle(), animationBehavior);
    
}


    private expectedTotalFrames: number= 0;

public constructor (imageArray: Image[], angleInfo: AngleInfo, totalAngle: number, animationBehavior: AnimationBehavior){
            super(imageArray, angleInfo, animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.init(imageArray, angleInfo, totalAngle);
    
}


                //@Throws(Exception.constructor)
            
    init(imageArray: Image[], angleInfo: AngleInfo, totalAngle: number){
this.expectedTotalFrames= totalAngle /this.angleInfo!.getAngleIncrementInfo()!.getAngleIncrement();
    
this.angleInfo!.adjustAngle(0);
    

                        if(this.expectedTotalFrames != this.getSize())
                        
                                    {
                                    


                            throw new Exception("Wrong Number of Frames");
                    

                                    }
                                
}


    public setImageArray(imageArray: Image[]){
super.setImageArray(imageArray);
    
this.angleInfo!.adjustAngle(0);
    
}


}



