
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

    
import { NullCanvas } from "../../../../javax/microedition/lcdui/NullCanvas.js";

    
import { GameFeatureImageCacheFactory } from "../../../../org/allbinary/image/GameFeatureImageCacheFactory.js";

    
import { Animation } from "../../../../org/allbinary/animation/Animation.js";

    
import { AnimationBehaviorFactory } from "../../../../org/allbinary/animation/AnimationBehaviorFactory.js";

    
import { ScreenRelationalUtil } from "../../../../org/allbinary/graphics/displayable/ScreenRelationalUtil.js";

    
import { ImageScaleUtil } from "../../../../org/allbinary/media/image/ImageScaleUtil.js";

    
import { AndroidImageInterface } from "../../../../org/microemu/android/device/AndroidImageInterface.js";

    

export class AllBinaryScreenRelationalImageAnimationInterfaceFactory extends BaseImageAnimationFactory {
        

    private lastImage: Image = NullCanvas.NULL_IMAGE;
        
        
public constructor (image: Image)                        

                            : this(image, AnimationBehaviorFactory.getInstance()){

            super();
                //var image = image


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, animationBehaviorFactory: AnimationBehaviorFactory)                        

                            : super(image, 0, 0, animationBehaviorFactory){

            super();
                //var image = image
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    

                        if(lastImage != NullCanvas.NULL_IMAGE)
                        
                                    {
                                    
    var androidImageInterface: AndroidImageInterface = lastImage as AndroidImageInterface;
        
        
;
    
androidImageInterface!.getBitmap()!.recycle();
    

                                    }
                                

    var scale: number = ScreenRelationalUtil.getInstance()!.getScale(image)!;
        
        
;
    
lastImage= ImageScaleUtil.getInstance()!.createImage(GameFeatureImageCacheFactory.getInstance(), this.getImage(), scale, scale, false);
    
}


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageAnimation(lastImage, this.animationBehaviorFactory!.getOrCreateInstance());
    
}


}
                
            

