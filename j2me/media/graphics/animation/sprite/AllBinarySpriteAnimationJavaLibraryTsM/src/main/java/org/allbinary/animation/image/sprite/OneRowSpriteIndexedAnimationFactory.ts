
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

    
import { BaseImageAnimationFactory } from "../../../../../org/allbinary/animation/image/BaseImageAnimationFactory.js";

    
import { BasicColorUtil } from "../../../../../org/allbinary/graphics/color/BasicColorUtil.js";

    
import { AnimationFactorySpriteScaleUtil } from "../../../../../org/allbinary/image/sprite/AnimationFactorySpriteScaleUtil.js";

    
import { PrimitiveIntUtil } from "../../../../../org/allbinary/logic/math/PrimitiveIntUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OneRowSpriteIndexedAnimationFactory extends BaseImageAnimationFactory {
        

                //@Throws(Error::class)
            
    public static createDX(image: Image, dx: number, animationBehaviorFactory: AnimationBehaviorFactory): OneRowSpriteIndexedAnimationFactory{
    //var image = image
    //var dx = dx
    //var animationBehaviorFactory = animationBehaviorFactory

    var oneRowSpriteIndexedAnimationFactory: OneRowSpriteIndexedAnimationFactory = new OneRowSpriteIndexedAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), image.getHeight(), image.getHeight(), 0, 0, animationBehaviorFactory);
        
        
;
    
oneRowSpriteIndexedAnimationFactory!.initW(dx);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oneRowSpriteIndexedAnimationFactory;
    
}


                //@Throws(Error::class)
            
    public static createDXY(image: Image, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory): OneRowSpriteIndexedAnimationFactory{
    //var image = image
    //var dx = dx
    //var dy = dy
    //var animationBehaviorFactory = animationBehaviorFactory

    var oneRowSpriteIndexedAnimationFactory: OneRowSpriteIndexedAnimationFactory = new OneRowSpriteIndexedAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), image.getHeight(), image.getHeight(), 0, 0, animationBehaviorFactory);
        
        
;
    
oneRowSpriteIndexedAnimationFactory!.init(dx, dy);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oneRowSpriteIndexedAnimationFactory;
    
}


                //@Throws(Error::class)
            
    public static createWH(image: Image, width: number, height: number, animationBehaviorFactory: AnimationBehaviorFactory): OneRowSpriteIndexedAnimationFactory{
    //var image = image
    //var width = width
    //var height = height
    //var animationBehaviorFactory = animationBehaviorFactory



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new OneRowSpriteIndexedAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), width, height, 0, 0, animationBehaviorFactory);
    
}


                //@Throws(Error::class)
            
    public static create(image: Image, animationBehaviorFactory: AnimationBehaviorFactory): OneRowSpriteIndexedAnimationFactory{
    //var image = image
    //var animationBehaviorFactory = animationBehaviorFactory



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new OneRowSpriteIndexedAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), image.getHeight(), image.getHeight(), 0, 0, animationBehaviorFactory);
    
}


    private readonly animationFactorySpriteScaleUtil: AnimationFactorySpriteScaleUtil = AnimationFactorySpriteScaleUtil.getInstance()!;
        
        
public constructor (image: Image, sequenceArray: number[], width: number, height: number, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory){
            super(image, sequenceArray, width, height, dx, dy, animationBehaviorFactory);
                        //var image = image
    //var sequenceArray = sequenceArray
    //var width = width
    //var height = height
    //var dx = dx
    //var dy = dy
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
}


    public init(dx: number, dy: number){
    //var dx = dx
    //var dy = dy
this.animationFactoryInitializationVisitor!.dx= dx;
    
this.animationFactoryInitializationVisitor!.dy= dy;
    
}


    public initW(dx: number){
    //var dx = dx
this.init(dx, 0);
    
this.animationFactoryInitializationVisitor!.dx +=  -(this.animationFactoryInitializationVisitor!.width>>2);
    
}


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId

    var sprite: Sprite = animationFactorySpriteScaleUtil!.createImage(this.getImage(), this.animationFactoryInitializationVisitor!.width, this.animationFactoryInitializationVisitor!.height, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight)!;
        
        
;
    

                        if(this.animationFactoryInitializationVisitor!.dx != 0 || this.animationFactoryInitializationVisitor!.dy != 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AdjustedSpriteIndexedAnimation(sprite, this.getImage(), BasicColorUtil.getInstance()!.ZERO_ARRAY, this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new SpriteIndexedAnimation(sprite, this.getImage(), BasicColorUtil.getInstance()!.ZERO_ARRAY, this.animationBehaviorFactory!.getOrCreateInstance());
    

                        }
                            
}


}
                
            

