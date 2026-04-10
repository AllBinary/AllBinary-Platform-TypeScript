
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

    
import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { SingletonAnimationInterfaceFactory } from "../../../../org/allbinary/animation/SingletonAnimationInterfaceFactory.js";

    
import { AnimationFrameToImageUtil } from "../../../../org/allbinary/image/AnimationFrameToImageUtil.js";

    

export class ImageAnimationSingletonInterfaceFactory extends SingletonAnimationInterfaceFactory {
        
private constructor (animationInterface: Animation)                        

                            : super(animationInterface){

            super();
            var animationInterface = animationInterface


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image)                        

                            : super(ImageAnimation(image, AnimationBehavior.getInstance())){

            super();
            var image = image


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (animationInterface: Animation, width: number, height: number)                        

                            : this(ImageAnimation(AnimationFrameToImageUtil.getInstance()!.getInstance(width, height, animationInterface), AnimationBehavior.getInstance())){

            super();
            var animationInterface = animationInterface
var width = width
var height = height


                            //For kotlin this is before the body of the constructor.
                    
}


}
                
            

