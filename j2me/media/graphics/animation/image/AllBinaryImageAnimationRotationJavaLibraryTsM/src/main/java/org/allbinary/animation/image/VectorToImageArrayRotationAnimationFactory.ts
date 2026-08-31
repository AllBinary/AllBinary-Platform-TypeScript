
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
        
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      //not GWT import const Image = globalThis.javax.microedition.lcdui.Image;

      
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
      //not GWT import const NullImage = globalThis.javax.microedition.lcdui.NullImage;

      
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      //not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { AnimationBehaviorFactory } from '../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
      //not GWT import const AnimationBehaviorFactory = globalThis.org.allbinary.animation.AnimationBehaviorFactory;

      
import { VectorAnimation } from '../../../../org/allbinary/animation/VectorAnimation.js';
      //not GWT import const VectorAnimation = globalThis.org.allbinary.animation.VectorAnimation;

      
import { GameConfigurationCentral } from '../../../../org/allbinary/game/configuration/GameConfigurationCentral.js';
      //not GWT import const GameConfigurationCentral = globalThis.org.allbinary.game.configuration.GameConfigurationCentral;

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { AnimationFrameToImageUtil } from '../../../../org/allbinary/image/AnimationFrameToImageUtil.js';
      //not GWT import const AnimationFrameToImageUtil = globalThis.org.allbinary.image.AnimationFrameToImageUtil;

      
//not plain js import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
      const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;

      
//not plain js import { AngleFactory } from '../../../../org/allbinary/math/AngleFactory.js';
      const AngleFactory = globalThis.org.allbinary.math.AngleFactory;

      
//not plain js import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
      const AngleInfo = globalThis.org.allbinary.math.AngleInfo;

      
import { ScaleProperties } from '../../../../org/allbinary/media/ScaleProperties.js';
      //not GWT import const ScaleProperties = globalThis.org.allbinary.media.ScaleProperties;

      
import { ImageToRotationImageArrayUtil } from '../../../../org/allbinary/media/image/ImageToRotationImageArrayUtil.js';
      //not GWT import const ImageToRotationImageArrayUtil = globalThis.org.allbinary.media.image.ImageToRotationImageArrayUtil;

      
import { VectorInfo } from '../../../../org/allbinary/vector/VectorInfo.js';
      //not GWT import const VectorInfo = globalThis.org.allbinary.vector.VectorInfo;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseImageAnimationFactory } from './BaseImageAnimationFactory.js';
import { AdjustedImageArrayRotationAnimation } from './AdjustedImageArrayRotationAnimation.js';

export class VectorToImageArrayRotationAnimationFactory extends BaseImageAnimationFactory {
        

    private imageArray: Image[] = NullImage.NULL_IMAGE_ARRAY;

    private angleIncrement: number= 0;

public constructor (vectorInfo: VectorInfo, basicColor: BasicColor, animationBehaviorFactory: AnimationBehaviorFactory){
            super(AnimationFrameToImageUtil.getInstance()!.getInstanceTranslate(vectorInfo!.getWidth(), vectorInfo!.getHeight(), VectorAnimation.createVectorAnimation(vectorInfo!.getPoints(), basicColor, animationBehaviorFactory!.getOrCreateInstance())), PrimitiveIntUtil.getArrayInstance(), 0, 0, 0, 0, animationBehaviorFactory);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.init();
    
}


                //@Throws(Exception.constructor)
            
    init(){

    var angleFactory: AngleFactory = AngleFactory.getInstance()!;;
    
this.angleIncrement= angleFactory!.TOTAL_ANGLE /GameConfigurationCentral.getInstance()!.getGameControlFidelity();
    
this.imageArray= ImageToRotationImageArrayUtil.getInstance()!.generate(this.getImage(), this.getAngleIncrement(), Math.round(angleFactory!.TOTAL_ANGLE));
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{

                        if(this.animationFactoryInitializationVisitor!.dx != 0 || this.animationFactoryInitializationVisitor!.dy != 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AdjustedImageArrayRotationAnimation(this.imageArray, AngleInfo.getInstance(this.getAngleIncrement()), Math.round(AngleFactory.getInstance()!.TOTAL_ANGLE), this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AdjustedImageArrayRotationAnimation.createAnimation(this.imageArray, AngleInfo.getInstance(this.angleIncrement), Math.round(AngleFactory.getInstance()!.TOTAL_ANGLE), this.animationBehaviorFactory!.getOrCreateInstance());;
    

                        }
                            
}


    getAngleIncrement(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.angleIncrement;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
}


}



