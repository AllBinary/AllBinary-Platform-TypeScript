
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

    
import { AnimationFactorySpriteScaleUtil } from "../../../../../org/allbinary/image/sprite/AnimationFactorySpriteScaleUtil.js";

    

export class OneRowSpriteIndexedAnimationFactory extends BaseImageAnimationFactory {
        

    private readonly animationFactorySpriteScaleUtil: AnimationFactorySpriteScaleUtil = AnimationFactorySpriteScaleUtil.getInstance()!;
        
        
public constructor (image: Image, width: number, height: number, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory)                        

                            : super(image, width, height, animationBehaviorFactory){

            super();
                //var image = image
    //var width = width
    //var height = height
    //var dx = dx
    //var dy = dy
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
this.animationFactoryInitializationVisitor!.dx= dx;
    
this.animationFactoryInitializationVisitor!.dy= dy;
    
}

public constructor (image: Image, dx: number)                        

                            : this(image, dx, 0){

            super();
                //var image = image
    //var dx = dx


                            //For kotlin this is before the body of the constructor.
                    
this.animationFactoryInitializationVisitor!.dx +=  -(this.animationFactoryInitializationVisitor!.width shr 2);
    
}

public constructor (image: Image, dx: number, dy: number, unused: any = {})                        

                            : this(image, dx, dy){

            super();
                //var image = image
    //var dx = dx
    //var dy = dy
    //var unused = unused


                            //For kotlin this is before the body of the constructor.
                    
this.animationFactoryInitializationVisitor!.dx +=  -(this.animationFactoryInitializationVisitor!.width shr 2);
    
this.animationFactoryInitializationVisitor!.dy +=  -(this.animationFactoryInitializationVisitor!.height shr 2);
    
}

public constructor (image: Image, dx: number, dy: number)                        

                            : this(image, dx, dy, AnimationBehaviorFactory.getInstance()){

            super();
                //var image = image
    //var dx = dx
    //var dy = dy


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory)                        

                            : this(image, animationBehaviorFactory){

            super();
                //var image = image
    //var dx = dx
    //var dy = dy
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
this.animationFactoryInitializationVisitor!.dx= dx;
    
this.animationFactoryInitializationVisitor!.dy= dy;
    
}

public constructor (width: number, height: number, image: Image)                        

                            : this(width, height, image, AnimationBehaviorFactory.getInstance()){

            super();
                //var width = width
    //var height = height
    //var image = image


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (width: number, height: number, image: Image, animationBehaviorFactory: AnimationBehaviorFactory)                        

                            : super(image, width, height, animationBehaviorFactory){

            super();
                //var width = width
    //var height = height
    //var image = image
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image)                        

                            : this(image, AnimationBehaviorFactory.getInstance()){

            super();
                //var image = image


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, animationBehaviorFactory: AnimationBehaviorFactory)                        

                            : super(image, image.getHeight(), image.getHeight(), animationBehaviorFactory){

            super();
                //var image = image
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
                        return new AdjustedSpriteIndexedAnimation(sprite, this.getImage(), this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new SpriteIndexedAnimation(sprite, this.getImage(), this.animationBehaviorFactory!.getOrCreateInstance());
    

                        }
                            
}


}
                
            

