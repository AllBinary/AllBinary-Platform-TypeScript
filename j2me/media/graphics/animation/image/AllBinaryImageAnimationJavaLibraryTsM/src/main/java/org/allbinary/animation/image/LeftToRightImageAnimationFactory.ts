
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
        



import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { Animation } from "../../../../org/allbinary/animation/Animation.js";

    
import { AnimationBehaviorFactory } from "../../../../org/allbinary/animation/AnimationBehaviorFactory.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BaseImageAnimationFactory } from "./BaseImageAnimationFactory.js";

export class LeftToRightImageAnimationFactory extends BaseImageAnimationFactory {
        
public constructor (image: Image, sequenceArray: number[], dx: number, dy: number){
            this(image, sequenceArray, dx, dy, AnimationBehaviorFactory.getInstance());
                        //var image = image
    //var sequenceArray = sequenceArray
    //var dx = dx
    //var dy = dy


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, sequenceArray: number[], dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory){
            super(image, sequenceArray, image.getWidth(), image.getHeight(), dx, dy, animationBehaviorFactory);
                        //var image = image
    //var sequenceArray = sequenceArray
    //var dx = dx
    //var dy = dy
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, sequenceArray: number[]){
            this(image, sequenceArray, AnimationBehaviorFactory.getInstance());
                        //var image = image
    //var sequenceArray = sequenceArray


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, sequenceArray: number[], animationBehaviorFactory: AnimationBehaviorFactory){
            super(image, sequenceArray, image.getWidth(), image.getHeight(), animationBehaviorFactory);
                        //var image = image
    //var sequenceArray = sequenceArray
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId

    var scaledImage: Image = animationFactoryImageScaleUtil!.createImage(this.getImage(), this.animationFactoryInitializationVisitor!.width, this.animationFactoryInitializationVisitor!.height, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight)!;
        
        
;
    

                        if(this.animationFactoryInitializationVisitor!.dx != 0 || this.animationFactoryInitializationVisitor!.dy != 0)
                        
                                    {
                                    animationFactoryImageScaleUtil!.processAdjust(this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AdjustedLeftToRightImageAnimation(scaledImage, this.getSequenceArray(), this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new LeftToRightImageAnimation(scaledImage, this.getSequenceArray(), this.animationBehaviorFactory!.getOrCreateInstance());
    

                        }
                            
}


}
                
            

