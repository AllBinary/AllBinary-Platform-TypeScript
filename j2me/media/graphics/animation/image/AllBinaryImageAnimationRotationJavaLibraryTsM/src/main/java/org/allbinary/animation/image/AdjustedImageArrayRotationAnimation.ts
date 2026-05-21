
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
        
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      
import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageArrayRotationAnimation } from './ImageArrayRotationAnimation.js';
import { ImageArrayRotationAnimationInfo } from './ImageArrayRotationAnimationInfo.js';
//TWB - Adjustments should be done in the resource creation and not at the animation level
export class AdjustedImageArrayRotationAnimation extends ImageArrayRotationAnimation {
        

                //@Throws(Exception.constructor)
            
    public static createAdjustedImageArrayRotationAnimationInfo(anyType: any = {}, animationBehavior: AnimationBehavior): AdjustedImageArrayRotationAnimation{

    var imageRotationAnimationInfo: ImageArrayRotationAnimationInfo = anyType as ImageArrayRotationAnimationInfo;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AdjustedImageArrayRotationAnimation(imageRotationAnimationInfo!.getImageArray(), imageRotationAnimationInfo!.getAngleInfoP(), imageRotationAnimationInfo!.getTotalAngle(), imageRotationAnimationInfo!.getDx(), imageRotationAnimationInfo!.getDy(), animationBehavior);
    
}


                //@Throws(Exception.constructor)
            
    public static createAnimation(imageArray: Image[], angleInfo: AngleInfo, totalAngle: number, animationBehavior: AnimationBehavior): AdjustedImageArrayRotationAnimation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AdjustedImageArrayRotationAnimation(imageArray, angleInfo, totalAngle,  -(imageArray[0]!.getWidth()>>2),  -(imageArray[0]!.getHeight()>>2), animationBehavior);
    
}


    private dx: number= 0

    private dy: number= 0
public constructor (imageArray: Image[], angleInfo: AngleInfo, totalAngle: number, dx: number, dy: number, animationBehavior: AnimationBehavior){
            super(imageArray, angleInfo, totalAngle, animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.init(dx, dy);
    
}


                //@Throws(Exception.constructor)
            
    public init(dx: number, dy: number){
this.setDx(dx);
    
this.setDy(dy);
    
}


    public paintXY(graphics: Graphics, x: number, y: number){
super.paintXY(graphics, x +this.dx, y +this.dy);
    
}


    public setDx(dx: number){
this.dx= dx;
    
}


    public getDx(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.dx;
    
}


    public setDy(dy: number){
this.dy= dy;
    
}


    public getDy(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.dy;
    
}


}
                
            

