
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
        
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;

      
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { AnimationBehaviorFactory } from '../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
//not GWT import const AnimationBehaviorFactory = globalThis.org.allbinary.animation.AnimationBehaviorFactory;

      
import { AnimationInterfaceFactoryInterface } from '../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js';
//not GWT import const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;

      
import { GameConfigurationCentral } from '../../../../org/allbinary/game/configuration/GameConfigurationCentral.js';
//not GWT import const GameConfigurationCentral = globalThis.org.allbinary.game.configuration.GameConfigurationCentral;

      
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not plain js import { AngleFactory } 
const AngleFactory = globalThis.org.allbinary.math.AngleFactory;

      
import { ScaleProperties } from '../../../../org/allbinary/media/ScaleProperties.js';
//not GWT import const ScaleProperties = globalThis.org.allbinary.media.ScaleProperties;

      
import { ImageToRotationImageArrayUtil } from '../../../../org/allbinary/media/image/ImageToRotationImageArrayUtil.js';
//not GWT import const ImageToRotationImageArrayUtil = globalThis.org.allbinary.media.image.ImageToRotationImageArrayUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageArrayRotationAnimationInfo } from './ImageArrayRotationAnimationInfo.js';
//not GWT import - same folder const ImageArrayRotationAnimationInfo = globalThis.org.allbinary.animation.image.ImageArrayRotationAnimationInfo;

                import { AdjustedImageArrayRotationAnimation } from './AdjustedImageArrayRotationAnimation.js';
//not GWT import - same folder const AdjustedImageArrayRotationAnimation = globalThis.org.allbinary.animation.image.AdjustedImageArrayRotationAnimation;

                //TWB - Adjustments should be done in the resource creation and not at the animation level
export class PooledImageArrayRotationAnimationFactory
            extends Object
         implements AnimationInterfaceFactoryInterface {
        

                //@Throws(Exception.constructor)
            
    public static createFactory(image: Image, animationBehaviorFactory: AnimationBehaviorFactory): PooledImageArrayRotationAnimationFactory{

    var totalAngle: number = Math.round(AngleFactory.getInstance()!.TOTAL_ANGLE);;
    

    var angleIncrement: number = (totalAngle /GameConfigurationCentral.getInstance()!.getGameControlFidelity());;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new PooledImageArrayRotationAnimationFactory(image, image.getWidth(), image.getHeight(),  -(image.getWidth()>>2),  -(image.getHeight()>>2), angleIncrement, animationBehaviorFactory);
    
}


                //@Throws(Exception.constructor)
            
    public static createDXY(image: Image, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory): PooledImageArrayRotationAnimationFactory{

    var totalAngle: number = Math.round(AngleFactory.getInstance()!.TOTAL_ANGLE);;
    

    var angleIncrement: number = (totalAngle /GameConfigurationCentral.getInstance()!.getGameControlFidelity());;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new PooledImageArrayRotationAnimationFactory(image, image.getWidth(), image.getHeight(), dx, dy, angleIncrement, animationBehaviorFactory);
    
}


    private allBinaryImageRotationAnimationInfo: any = NullUtil.getInstance()!.NULL_OBJECT;

    private readonly animationBehaviorFactory: AnimationBehaviorFactory;

public constructor (image: Image, width: number, height: number, dx: number, dy: number, angleIncrement: number, animationBehaviorFactory: AnimationBehaviorFactory){

            super();
        this.animationBehaviorFactory= animationBehaviorFactory;
    

    var totalAngle: number = Math.round(AngleFactory.getInstance()!.TOTAL_ANGLE);;
    

    var imageArray: Image[] = ImageToRotationImageArrayUtil.getInstance()!.generate(image, angleIncrement, totalAngle)!;;
    
this.allBinaryImageRotationAnimationInfo= new ImageArrayRotationAnimationInfo(imageArray, angleIncrement, totalAngle, dx, dy);
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AdjustedImageArrayRotationAnimation.createAdjustedImageArrayRotationAnimationInfo(this.allBinaryImageRotationAnimationInfo, this.animationBehaviorFactory!.getOrCreateInstance());;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
}


}



