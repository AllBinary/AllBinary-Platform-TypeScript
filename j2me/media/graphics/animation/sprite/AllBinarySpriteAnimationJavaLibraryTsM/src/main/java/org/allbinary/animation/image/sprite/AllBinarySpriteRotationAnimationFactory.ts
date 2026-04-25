
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

    
import { AnimationFactorySpriteScaleUtil } from "../../../../../org/allbinary/image/sprite/AnimationFactorySpriteScaleUtil.js";

    
import { NullUtil } from "../../../../../org/allbinary/logic/NullUtil.js";

    
import { PrimitiveIntUtil } from "../../../../../org/allbinary/logic/math/PrimitiveIntUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AllBinarySpriteRotationAnimationFactory extends BaseImageAnimationFactory implements ProceduralAnimationInterfaceFactoryInterface {
        

                //@Throws(Error::class)
            
    public static createWHDY(image: Image, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory): AllBinarySpriteRotationAnimationFactory{
    //var image = image
    //var dx = dx
    //var dy = dy
    //var animationBehaviorFactory = animationBehaviorFactory

    var spriteRotationAnimationFactory: AllBinarySpriteRotationAnimationFactory = new AllBinarySpriteRotationAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), (image.getHeight()>>2), (image.getHeight()>>2), 0, 0, animationBehaviorFactory);
        
        
;
    
spriteRotationAnimationFactory!.initWH(dx, dy);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return spriteRotationAnimationFactory;
    
}


                //@Throws(Error::class)
            
    public static createWH(image: Image, animationBehaviorFactory: AnimationBehaviorFactory): AllBinarySpriteRotationAnimationFactory{
    //var image = image
    //var animationBehaviorFactory = animationBehaviorFactory



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AllBinarySpriteRotationAnimationFactory.createWHDY(image, 0, 0, animationBehaviorFactory);;
    
}


                //@Throws(Error::class)
            
    public static createDXY(image: Image, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory): AllBinarySpriteRotationAnimationFactory{
    //var image = image
    //var dx = dx
    //var dy = dy
    //var animationBehaviorFactory = animationBehaviorFactory

    var spriteRotationAnimationFactory: AllBinarySpriteRotationAnimationFactory = new AllBinarySpriteRotationAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), image.getHeight(), image.getHeight(), 0, 0, animationBehaviorFactory);
        
        
;
    
spriteRotationAnimationFactory!.init(dx, dy);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return spriteRotationAnimationFactory;
    
}


                //@Throws(Error::class)
            
    public static createDXYQ(image: Image, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory): AllBinarySpriteRotationAnimationFactory{
    //var image = image
    //var dx = dx
    //var dy = dy
    //var animationBehaviorFactory = animationBehaviorFactory

    var spriteRotationAnimationFactory: AllBinarySpriteRotationAnimationFactory = new AllBinarySpriteRotationAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), (image.getHeight()>>2), (image.getHeight()>>2), 0, 0, animationBehaviorFactory);
        
        
;
    
spriteRotationAnimationFactory!.init(dx, dy);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return spriteRotationAnimationFactory;
    
}


                //@Throws(Error::class)
            
    public static createQ(image: Image, animationBehaviorFactory: AnimationBehaviorFactory): AllBinarySpriteRotationAnimationFactory{
    //var image = image
    //var animationBehaviorFactory = animationBehaviorFactory



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AllBinarySpriteRotationAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), (image.getHeight()>>2), (image.getHeight()>>2), 0, 0, animationBehaviorFactory);
    
}


                //@Throws(Error::class)
            
    public static createWHF(image: Image, animationBehaviorFactory: AnimationBehaviorFactory): AllBinarySpriteRotationAnimationFactory{
    //var image = image
    //var animationBehaviorFactory = animationBehaviorFactory



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AllBinarySpriteRotationAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), image.getHeight(), image.getHeight(), 0, 0, animationBehaviorFactory);
    
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


    initWH(dx: number, dy: number){
    //var dx = dx
    //var dy = dy
this.init(dx, dy);
    
this.animationFactoryInitializationVisitor!.dx +=  -this.animationFactoryInitializationVisitor!.width /5;
    
this.animationFactoryInitializationVisitor!.dy +=  -this.animationFactoryInitializationVisitor!.height /5;
    
}


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId

    var sprite: Sprite = animationFactorySpriteScaleUtil!.createImage(this.getImage(), this.animationFactoryInitializationVisitor!.width, this.animationFactoryInitializationVisitor!.height, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight)!;
        
        
;
    

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


                //@Throws(Error::class)
            
    public getInstance(animationInterface: Animation): Animation{
    //var animationInterface = animationInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(0);;
    
}


}
                
            

