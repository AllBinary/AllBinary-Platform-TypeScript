
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

    
import { IndexedAnimation } from "../../../../org/allbinary/animation/IndexedAnimation.js";

    
import { SingletonAnimationInterfaceFactory } from "../../../../org/allbinary/animation/SingletonAnimationInterfaceFactory.js";

    
import { IndexedAnimationToImageArrayUtil } from "../../../../org/allbinary/image/IndexedAnimationToImageArrayUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageArraySingletonAnimationInterfaceFactory extends SingletonAnimationInterfaceFactory {
        
public constructor (imageArray: Image[]){
            super(new ImageArrayAnimation(imageArray, AnimationBehavior.getInstance()));
                    var imageArray = imageArray


                            //For kotlin this is before the body of the constructor.
                    
}


}
                
            

