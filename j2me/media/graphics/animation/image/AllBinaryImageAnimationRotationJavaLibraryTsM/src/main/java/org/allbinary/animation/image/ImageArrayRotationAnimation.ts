
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      
import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageArrayBaseRotationAnimation } from './ImageArrayBaseRotationAnimation.js';
import { ImageArrayRotationAnimationInfo } from './ImageArrayRotationAnimationInfo.js';

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
                
            

