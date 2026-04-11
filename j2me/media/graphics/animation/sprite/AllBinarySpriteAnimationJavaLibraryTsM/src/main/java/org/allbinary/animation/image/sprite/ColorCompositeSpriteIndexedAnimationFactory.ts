
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
        



import { Image } from "../../../../../javax/microedition/lcdui/Image.js";

    
import { Sprite } from "../../../../../javax/microedition/lcdui/game/Sprite.js";

    
import { Animation } from "../../../../../org/allbinary/animation/Animation.js";

    
import { AnimationBehaviorFactory } from "../../../../../org/allbinary/animation/AnimationBehaviorFactory.js";

    
import { ProceduralAnimationInterfaceFactoryInterface } from "../../../../../org/allbinary/animation/ProceduralAnimationInterfaceFactoryInterface.js";

    
import { BaseImageAnimationFactory } from "../../../../../org/allbinary/animation/image/BaseImageAnimationFactory.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { AnimationFactorySpriteScaleUtil } from "../../../../../org/allbinary/image/sprite/AnimationFactorySpriteScaleUtil.js";

    

export class ColorCompositeSpriteIndexedAnimationFactory extends BaseImageAnimationFactory
                , ProceduralAnimationInterfaceFactoryInterface {
        

    private readonly animationFactorySpriteScaleUtil: AnimationFactorySpriteScaleUtil = AnimationFactorySpriteScaleUtil.getInstance()!;
        
        

    private readonly basicColorArray: BasicColor[]
public constructor (image: Image, basicColorArray: BasicColor[], width: number, height: number)                        

                            : this(image, basicColorArray, width, height, AnimationBehaviorFactory.getInstance()){

            super();
                //var image = image
    //var basicColorArray = basicColorArray
    //var width = width
    //var height = height


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, basicColorArray: BasicColor[], width: number, height: number, animationBehaviorFactory: AnimationBehaviorFactory)                        

                            : super(image, width, height, animationBehaviorFactory){

            super();
                //var image = image
    //var basicColorArray = basicColorArray
    //var width = width
    //var height = height
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
this.basicColorArray= basicColorArray;
    
}


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId

    var sprite: Sprite = animationFactorySpriteScaleUtil!.createImage(this.getImage(), this.animationFactoryInitializationVisitor!.width, this.animationFactoryInitializationVisitor!.height, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SpriteIndexedAnimation(sprite, this.getImage(), this.basicColorArray, this.animationBehaviorFactory!.getOrCreateInstance());
    
}


                //@Throws(Error::class)
            
    public getInstance(animationInterface: Animation): Animation{
    //var animationInterface = animationInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(0);

                        ;
    
}


}
                
            

