
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
        
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;

      
//not plain js import { Sprite } 
const Sprite = globalThis.javax.microedition.lcdui.game.Sprite;

      
import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { AnimationBehaviorFactory } from '../../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
//not GWT import const AnimationBehaviorFactory = globalThis.org.allbinary.animation.AnimationBehaviorFactory;

      
import { BaseImageAnimationFactory } from '../../../../../org/allbinary/animation/image/BaseImageAnimationFactory.js';
//not GWT import const BaseImageAnimationFactory = globalThis.org.allbinary.animation.image.BaseImageAnimationFactory;

      
import { BasicColorUtil } from '../../../../../org/allbinary/graphics/color/BasicColorUtil.js';
//not GWT import const BasicColorUtil = globalThis.org.allbinary.graphics.color.BasicColorUtil;

      
import { AnimationFactorySpriteScaleUtil } from '../../../../../org/allbinary/image/sprite/AnimationFactorySpriteScaleUtil.js';
//not GWT import const AnimationFactorySpriteScaleUtil = globalThis.org.allbinary.image.sprite.AnimationFactorySpriteScaleUtil;

      
//not plain js import { PrimitiveIntUtil } 
const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SpriteIndexedAnimation } from './SpriteIndexedAnimation.js';
//not GWT import - same folder const SpriteIndexedAnimation = globalThis.org.allbinary.animation.image.sprite.SpriteIndexedAnimation;

                import { AdjustedSpriteIndexedAnimation } from './AdjustedSpriteIndexedAnimation.js';
//not GWT import - same folder const AdjustedSpriteIndexedAnimation = globalThis.org.allbinary.animation.image.sprite.AdjustedSpriteIndexedAnimation;

                
export class OneRowSpriteIndexedAnimationFactory extends BaseImageAnimationFactory {
        

                //@Throws(Exception.constructor)
            
    public static createFactoryDX(image: Image, dx: number, animationBehaviorFactory: AnimationBehaviorFactory): OneRowSpriteIndexedAnimationFactory{

    var oneRowSpriteIndexedAnimationFactory: OneRowSpriteIndexedAnimationFactory = new OneRowSpriteIndexedAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), image.getHeight(), image.getHeight(), 0, 0, animationBehaviorFactory);;
    
oneRowSpriteIndexedAnimationFactory!.initW(dx);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oneRowSpriteIndexedAnimationFactory;
    
}


                //@Throws(Exception.constructor)
            
    public static createFactoryDXY(image: Image, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory): OneRowSpriteIndexedAnimationFactory{

    var oneRowSpriteIndexedAnimationFactory: OneRowSpriteIndexedAnimationFactory = new OneRowSpriteIndexedAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), image.getHeight(), image.getHeight(), 0, 0, animationBehaviorFactory);;
    
oneRowSpriteIndexedAnimationFactory!.init(dx, dy);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oneRowSpriteIndexedAnimationFactory;
    
}


                //@Throws(Exception.constructor)
            
    public static createFactoryWH(image: Image, width: number, height: number, animationBehaviorFactory: AnimationBehaviorFactory): OneRowSpriteIndexedAnimationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new OneRowSpriteIndexedAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), width, height, 0, 0, animationBehaviorFactory);
    
}


                //@Throws(Exception.constructor)
            
    public static createFactory(image: Image, animationBehaviorFactory: AnimationBehaviorFactory): OneRowSpriteIndexedAnimationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new OneRowSpriteIndexedAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), image.getHeight(), image.getHeight(), 0, 0, animationBehaviorFactory);
    
}


    private readonly animationFactorySpriteScaleUtil: AnimationFactorySpriteScaleUtil = AnimationFactorySpriteScaleUtil.getInstance()!;

public constructor (image: Image, sequenceArray: number[], width: number, height: number, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory){
            super(image, sequenceArray, width, height, dx, dy, animationBehaviorFactory);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public init(dx: number, dy: number){
this.animationFactoryInitializationVisitor!.dx= dx;
    
this.animationFactoryInitializationVisitor!.dy= dy;
    
}


    public initW(dx: number){
this.init(dx, 0);
    
this.animationFactoryInitializationVisitor!.dx +=  -(this.animationFactoryInitializationVisitor!.width>>2);
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{

    var sprite: Sprite = this.animationFactorySpriteScaleUtil!.createImage(this.getImage(), this.animationFactoryInitializationVisitor!.width, this.animationFactoryInitializationVisitor!.height, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight)!;;
    

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



