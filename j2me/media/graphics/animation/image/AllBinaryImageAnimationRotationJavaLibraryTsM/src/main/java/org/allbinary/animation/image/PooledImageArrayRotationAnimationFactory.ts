
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
//not GWT import const Image
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
//not GWT import const Animation
import { AnimationBehaviorFactory } from '../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
//not GWT import const AnimationBehaviorFactory
import { AnimationInterfaceFactoryInterface } from '../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js';
//not GWT import const AnimationInterfaceFactoryInterface
import { GameConfigurationCentral } from '../../../../org/allbinary/game/configuration/GameConfigurationCentral.js';
//not GWT import const GameConfigurationCentral
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
import { AngleFactory } from '../../../../org/allbinary/math/AngleFactory.js';
//not GWT import const AngleFactory
import { ScaleProperties } from '../../../../org/allbinary/media/ScaleProperties.js';
//not GWT import const ScaleProperties
import { ImageToRotationImageArrayUtil } from '../../../../org/allbinary/media/image/ImageToRotationImageArrayUtil.js';
//not GWT import const ImageToRotationImageArrayUtil
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageArrayRotationAnimationInfo } from './ImageArrayRotationAnimationInfo.js';
//not GWT import - same folder const ImageArrayRotationAnimationInfoimport { AdjustedImageArrayRotationAnimation } from './AdjustedImageArrayRotationAnimation.js';
//not GWT import - same folder const AdjustedImageArrayRotationAnimation//TWB - Adjustments should be done in the resource creation and not at the animation level
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



