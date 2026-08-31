
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      //not GWT import const Image = globalThis.javax.microedition.lcdui.Image;

      
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
      //not GWT import const NullImage = globalThis.javax.microedition.lcdui.NullImage;

      
import { GameFeatureImageCacheFactory } from '../../../../org/allbinary/image/GameFeatureImageCacheFactory.js';
      //not GWT import const GameFeatureImageCacheFactory = globalThis.org.allbinary.image.GameFeatureImageCacheFactory;

      
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      //not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { AnimationBehaviorFactory } from '../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
      //not GWT import const AnimationBehaviorFactory = globalThis.org.allbinary.animation.AnimationBehaviorFactory;

      
import { ScreenRelationalUtil } from '../../../../org/allbinary/graphics/displayable/ScreenRelationalUtil.js';
      //not GWT import const ScreenRelationalUtil = globalThis.org.allbinary.graphics.displayable.ScreenRelationalUtil;

      
//not plain js import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
      const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;

      
//not plain js import { ImageScaleUtil } from '../../../../org/allbinary/media/image/ImageScaleUtil.js';
      const ImageScaleUtil = globalThis.org.allbinary.media.image.ImageScaleUtil;

      
import { AndroidImageInterface } from '../../../../org/microemu/android/device/AndroidImageInterface.js';
      //not GWT import const AndroidImageInterface = globalThis.org.microemu.android.device.AndroidImageInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseImageAnimationFactory } from './BaseImageAnimationFactory.js';
import { ImageAnimation } from './ImageAnimation.js';

export class AllBinaryScreenRelationalImageAnimationInterfaceFactory extends BaseImageAnimationFactory {
        

    private lastImage: Image = NullImage.NULL_IMAGE;

public constructor (image: Image, animationBehaviorFactory: AnimationBehaviorFactory){
            super(image, PrimitiveIntUtil.getArrayInstance(), 0, 0, 0, 0, animationBehaviorFactory);
                    

                            //For kotlin this is before the body of the constructor.
                    

                        if(this.lastImage != NullImage.NULL_IMAGE)
                        
                                    {
                                    
    var androidImageInterface: AndroidImageInterface = this.lastImage as AndroidImageInterface;;
    
androidImageInterface!.getBitmap()!.recycle();
    

                                    }
                                

    var scale: number = ScreenRelationalUtil.getInstance()!.getScaleImage(image)!;;
    
this.lastImage= ImageScaleUtil.getInstance()!.createImage(GameFeatureImageCacheFactory.getInstance(), this.getImage(), scale, scale, false);
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ImageAnimation(this.lastImage, this.animationBehaviorFactory!.getOrCreateInstance());
    
}


}



