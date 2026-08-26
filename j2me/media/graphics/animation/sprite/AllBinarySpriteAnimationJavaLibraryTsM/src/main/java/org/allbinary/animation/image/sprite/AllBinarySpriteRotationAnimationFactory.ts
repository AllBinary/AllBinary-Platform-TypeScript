
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
        
//not game specific package import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { Sprite } from '../../../../../javax/microedition/lcdui/game/Sprite.js';
      const Sprite = globalThis.javax.microedition.lcdui.game.Sprite;

      
//not game specific package import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      const Animation = globalThis.org.allbinary.animation.Animation;

      
//not game specific package import { AnimationBehaviorFactory } from '../../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
      const AnimationBehaviorFactory = globalThis.org.allbinary.animation.AnimationBehaviorFactory;

      
//not game specific package import { ProceduralAnimationInterfaceFactoryInterface } from '../../../../../org/allbinary/animation/ProceduralAnimationInterfaceFactoryInterface.js';
      const ProceduralAnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.ProceduralAnimationInterfaceFactoryInterface;

      
//not game specific package import { BaseImageAnimationFactory } from '../../../../../org/allbinary/animation/image/BaseImageAnimationFactory.js';
      const BaseImageAnimationFactory = globalThis.org.allbinary.animation.image.BaseImageAnimationFactory;

      
//not game specific package import { AnimationFactorySpriteScaleUtil } from '../../../../../org/allbinary/image/sprite/AnimationFactorySpriteScaleUtil.js';
      const AnimationFactorySpriteScaleUtil = globalThis.org.allbinary.image.sprite.AnimationFactorySpriteScaleUtil;

      
//not game specific package import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { PrimitiveIntUtil } from '../../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
      const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinarySpriteRotationAnimation } from './AllBinarySpriteRotationAnimation.js';
import { AllBinaryAdjustedSpriteRotationAnimation } from './AllBinaryAdjustedSpriteRotationAnimation.js';

export class AllBinarySpriteRotationAnimationFactory extends BaseImageAnimationFactory implements ProceduralAnimationInterfaceFactoryInterface {
        

                //@Throws(Exception.constructor)
            
    public static createWHDY(image: Image, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory): AllBinarySpriteRotationAnimationFactory{

    var spriteRotationAnimationFactory: AllBinarySpriteRotationAnimationFactory = new AllBinarySpriteRotationAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), (image.getHeight()>>2), (image.getHeight()>>2), 0, 0, animationBehaviorFactory);;
    
spriteRotationAnimationFactory!.initWH(dx, dy);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return spriteRotationAnimationFactory;
    
}


                //@Throws(Exception.constructor)
            
    public static createWH(image: Image, animationBehaviorFactory: AnimationBehaviorFactory): AllBinarySpriteRotationAnimationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AllBinarySpriteRotationAnimationFactory.createWHDY(image, 0, 0, animationBehaviorFactory);;
    
}


                //@Throws(Exception.constructor)
            
    public static createDXY(image: Image, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory): AllBinarySpriteRotationAnimationFactory{

    var spriteRotationAnimationFactory: AllBinarySpriteRotationAnimationFactory = new AllBinarySpriteRotationAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), image.getHeight(), image.getHeight(), 0, 0, animationBehaviorFactory);;
    
spriteRotationAnimationFactory!.init(dx, dy);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return spriteRotationAnimationFactory;
    
}


                //@Throws(Exception.constructor)
            
    public static createDXYQ(image: Image, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory): AllBinarySpriteRotationAnimationFactory{

    var spriteRotationAnimationFactory: AllBinarySpriteRotationAnimationFactory = new AllBinarySpriteRotationAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), (image.getHeight()>>2), (image.getHeight()>>2), 0, 0, animationBehaviorFactory);;
    
spriteRotationAnimationFactory!.init(dx, dy);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return spriteRotationAnimationFactory;
    
}


                //@Throws(Exception.constructor)
            
    public static createQ(image: Image, animationBehaviorFactory: AnimationBehaviorFactory): AllBinarySpriteRotationAnimationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AllBinarySpriteRotationAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), (image.getHeight()>>2), (image.getHeight()>>2), 0, 0, animationBehaviorFactory);
    
}


                //@Throws(Exception.constructor)
            
    public static createWHF(image: Image, animationBehaviorFactory: AnimationBehaviorFactory): AllBinarySpriteRotationAnimationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AllBinarySpriteRotationAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), image.getHeight(), image.getHeight(), 0, 0, animationBehaviorFactory);
    
}


    private readonly animationFactorySpriteScaleUtil: AnimationFactorySpriteScaleUtil = AnimationFactorySpriteScaleUtil.getInstance()!;

public constructor (image: Image, sequenceArray: number[], width: number, height: number, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory){
            super(image, sequenceArray, width, height, dx, dy, animationBehaviorFactory);
                    

                            //For kotlin this is before the body of the constructor.
                    

                        if(animationBehaviorFactory == AnimationBehaviorFactory.getInstance())
                        
                                    {
                                    ForcedLogUtil.log("Using default AnimationBehaviorFactory with IndexedAnimationFactory", this);
    

                                    }
                                
}


    public init(dx: number, dy: number){
this.animationFactoryInitializationVisitor!.dx= dx;
    
this.animationFactoryInitializationVisitor!.dy= dy;
    
}


    initWH(dx: number, dy: number){
this.init(dx, dy);
    
this.animationFactoryInitializationVisitor!.dx +=  -this.animationFactoryInitializationVisitor!.width /5;
    
this.animationFactoryInitializationVisitor!.dy +=  -this.animationFactoryInitializationVisitor!.height /5;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{

    var sprite: Sprite = this.animationFactorySpriteScaleUtil!.createImage(this.getImage(), this.animationFactoryInitializationVisitor!.width, this.animationFactoryInitializationVisitor!.height, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight)!;;
    

                        if(this.animationFactoryInitializationVisitor!.dx != 0 || this.animationFactoryInitializationVisitor!.dy != 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AllBinaryAdjustedSpriteRotationAnimation(sprite, this.getImage(), this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AllBinarySpriteRotationAnimation(sprite, this.getImage(), this.animationBehaviorFactory!.getOrCreateInstance());
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public getInstanceAnimation(animationInterface: Animation): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(0);;
    
}


}
                
            

