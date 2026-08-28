
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
        
//not game specific package import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      const Animation = globalThis.org.allbinary.animation.Animation;

      
//not game specific package import { AnimationBehaviorFactory } from '../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
      const AnimationBehaviorFactory = globalThis.org.allbinary.animation.AnimationBehaviorFactory;

      
//not game specific package import { AnimationInterfaceFactoryInterface } from '../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js';
      const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;

      
//not game specific package import { GameConfigurationCentral } from '../../../../org/allbinary/game/configuration/GameConfigurationCentral.js';
      const GameConfigurationCentral = globalThis.org.allbinary.game.configuration.GameConfigurationCentral;

      
//not game specific package import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { AngleFactory } from '../../../../org/allbinary/math/AngleFactory.js';
      const AngleFactory = globalThis.org.allbinary.math.AngleFactory;

      
//not game specific package import { ScaleProperties } from '../../../../org/allbinary/media/ScaleProperties.js';
      const ScaleProperties = globalThis.org.allbinary.media.ScaleProperties;

      
//not game specific package import { ImageToRotationImageArrayUtil } from '../../../../org/allbinary/media/image/ImageToRotationImageArrayUtil.js';
      const ImageToRotationImageArrayUtil = globalThis.org.allbinary.media.image.ImageToRotationImageArrayUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageArrayRotationAnimationInfo } from './ImageArrayRotationAnimationInfo.js';
import { AdjustedImageArrayRotationAnimation } from './AdjustedImageArrayRotationAnimation.js';
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



