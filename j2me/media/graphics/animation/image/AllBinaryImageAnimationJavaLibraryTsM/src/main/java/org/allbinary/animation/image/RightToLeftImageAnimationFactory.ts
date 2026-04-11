
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

    

export class RightToLeftImageAnimationFactory extends BaseImageAnimationFactory {
        
public constructor (image: Image, dx: number, dy: number)                        

                            : this(image, dx, dy, AnimationBehaviorFactory.getInstance()){

            super();
                //var image = image
    //var dx = dx
    //var dy = dy


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory)                        

                            : super(image, image.getWidth(), image.getHeight(), dx, dy, animationBehaviorFactory){

            super();
                //var image = image
    //var dx = dx
    //var dy = dy
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

                            : super(image, image.getWidth(), image.getHeight(), animationBehaviorFactory){

            super();
                //var image = image
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
                        return AdjustedRightToLeftImageAnimation(scaledImage, this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RightToLeftImageAnimation(scaledImage, this.animationBehaviorFactory!.getOrCreateInstance());
    

                        }
                            
}


}
                
            

