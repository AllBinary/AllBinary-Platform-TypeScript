
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image
import { Sprite } from '../../../../../javax/microedition/lcdui/game/Sprite.js';
//not GWT import const Sprite
import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
//not GWT import const Animation
import { AnimationBehaviorFactory } from '../../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
//not GWT import const AnimationBehaviorFactory
import { ProceduralAnimationInterfaceFactoryInterface } from '../../../../../org/allbinary/animation/ProceduralAnimationInterfaceFactoryInterface.js';
//not GWT import const ProceduralAnimationInterfaceFactoryInterface
import { BaseImageAnimationFactory } from '../../../../../org/allbinary/animation/image/BaseImageAnimationFactory.js';
//not GWT import const BaseImageAnimationFactory
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor
import { AnimationFactorySpriteScaleUtil } from '../../../../../org/allbinary/image/sprite/AnimationFactorySpriteScaleUtil.js';
//not GWT import const AnimationFactorySpriteScaleUtil
import { PrimitiveIntUtil } from '../../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
//not GWT import const PrimitiveIntUtil
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SpriteIndexedAnimation } from './SpriteIndexedAnimation.js';
//not GWT import - same folder const SpriteIndexedAnimation
export class ColorCompositeSpriteIndexedAnimationFactory extends BaseImageAnimationFactory implements ProceduralAnimationInterfaceFactoryInterface {
        

    private readonly animationFactorySpriteScaleUtil: AnimationFactorySpriteScaleUtil = AnimationFactorySpriteScaleUtil.getInstance()!;

    private readonly basicColorArray: BasicColor[];

public constructor (image: Image, basicColorArray: BasicColor[], width: number, height: number, animationBehaviorFactory: AnimationBehaviorFactory){
            super(image, PrimitiveIntUtil.getArrayInstance(), width, height, 0, 0, animationBehaviorFactory);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.basicColorArray= basicColorArray;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{

    var sprite: Sprite = this.animationFactorySpriteScaleUtil!.createImage(this.getImage(), this.animationFactoryInitializationVisitor!.width, this.animationFactoryInitializationVisitor!.height, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new SpriteIndexedAnimation(sprite, this.getImage(), this.basicColorArray, this.animationBehaviorFactory!.getOrCreateInstance());
    
}


                //@Throws(Exception.constructor)
            
    public getInstanceAnimation(animationInterface: Animation): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(0);;
    
}


}



