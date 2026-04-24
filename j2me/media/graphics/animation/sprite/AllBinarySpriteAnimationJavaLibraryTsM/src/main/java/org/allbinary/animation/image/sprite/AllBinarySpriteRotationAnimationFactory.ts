
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
        

    private readonly animationFactorySpriteScaleUtil: AnimationFactorySpriteScaleUtil = AnimationFactorySpriteScaleUtil.getInstance()!;
        
        
public constructor (image: Image, dx: number, dy: number, unused: any = {}){
            this(image, dx, dy);
                        //var image = image
    //var dx = dx
    //var dy = dy
    //var unused = unused


                            //For kotlin this is before the body of the constructor.
                    
this.animationFactoryInitializationVisitor!.dx +=  -this.animationFactoryInitializationVisitor!.width /5;
    
this.animationFactoryInitializationVisitor!.dy +=  -this.animationFactoryInitializationVisitor!.height /5;
    
}

public constructor (image: Image, dx: number, dy: number, unused: number){
            this(image, NullUtil.getInstance()!.NULL_OBJECT, AnimationBehaviorFactory.getInstance());
                        //var image = image
    //var dx = dx
    //var dy = dy
    //var unused = unused


                            //For kotlin this is before the body of the constructor.
                    
this.animationFactoryInitializationVisitor!.dx= dx;
    
this.animationFactoryInitializationVisitor!.dy= dy;
    
}

public constructor (image: Image, unused: any = {}, unused2: any = {}){
            this(image, 0, 0, unused);
                        //var image = image
    //var unused = unused
    //var unused2 = unused2


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, dx: number, dy: number){
            this(image, dx, dy, AnimationBehaviorFactory.getInstance());
                        //var image = image
    //var dx = dx
    //var dy = dy


                            //For kotlin this is before the body of the constructor.
                    
}

private constructor (image: Image, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory){
            this(image, animationBehaviorFactory);
                        //var image = image
    //var dx = dx
    //var dy = dy
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
this.animationFactoryInitializationVisitor!.dx= dx;
    
this.animationFactoryInitializationVisitor!.dy= dy;
    
}

public constructor (image: Image){
            this(image, AnimationBehaviorFactory.getInstance());
                        //var image = image


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, animationBehaviorFactory: AnimationBehaviorFactory){
            super(image, PrimitiveIntUtil.getArrayInstance(), (image.getHeight()>>2), (image.getHeight()>>2), 0, 0, animationBehaviorFactory);
                        //var image = image
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, unused: any = {}){
            super(image, PrimitiveIntUtil.getArrayInstance(), (image.getHeight()>>2), (image.getHeight()>>2), 0, 0, AnimationBehaviorFactory.getInstance());
                        //var image = image
    //var unused = unused


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, unused: any = {}, animationBehaviorFactory: AnimationBehaviorFactory){
            super(image, PrimitiveIntUtil.getArrayInstance(), image.getHeight(), image.getHeight(), 0, 0, animationBehaviorFactory);
                        //var image = image
    //var unused = unused
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
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
                
            

