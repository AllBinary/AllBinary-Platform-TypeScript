
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

    
import { Player } from "../../../../../javax/microedition/media/Player.js";

    
import { Animation } from "../../../../../org/allbinary/animation/Animation.js";

    
import { AnimationBehaviorFactory } from "../../../../../org/allbinary/animation/AnimationBehaviorFactory.js";

    
import { AnimationInterfaceFactoryInterface } from "../../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js";

    
import { IndexedAnimation } from "../../../../../org/allbinary/animation/IndexedAnimation.js";

    
import { CaptionIndexedAnimation } from "../../../../../org/allbinary/animation/caption/CaptionIndexedAnimation.js";

    
import { ImageAnimation } from "../../../../../org/allbinary/animation/image/ImageAnimation.js";

    
import { AnimationFactoryImageScaleUtil } from "../../../../../org/allbinary/image/AnimationFactoryImageScaleUtil.js";

    
import { AnimationFactorySpriteScaleUtil } from "../../../../../org/allbinary/image/sprite/AnimationFactorySpriteScaleUtil.js";

    
import { ScaleProperties } from "../../../../../org/allbinary/media/ScaleProperties.js";

    
import { Sound } from "../../../../../org/allbinary/media/audio/Sound.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageCaptionIndexedAnimationFactory
            extends Object
         implements AnimationInterfaceFactoryInterface {
        

    readonly animationFactoryImageScaleUtil: AnimationFactoryImageScaleUtil = AnimationFactoryImageScaleUtil.getInstance()!;
        
        

    private readonly animationFactorySpriteScaleUtil: AnimationFactorySpriteScaleUtil = AnimationFactorySpriteScaleUtil.getInstance()!;
        
        

    private captionImage: Image

    private spriteMovieImage: Image

    private frameWidth: number

    private frameHeight: number

    private captionDx: number

    private captionDy: number

    private dx: number

    private dy: number

    private time: number

    private soundInterface: Sound

    public scaleProperties: ScaleProperties = ScaleProperties.instance;
        
        

    private readonly animationBehaviorFactory: AnimationBehaviorFactory
public constructor (captionImage: Image, spriteMovieImage: Image, soundInterface: Sound, frameWidth: number, frameHeight: number, captionDx: number, captionDy: number, dx: number, dy: number, time: number)                        

                            : this(captionImage, spriteMovieImage, soundInterface, frameWidth, frameHeight, captionDx, captionDy, dx, dy, time, AnimationBehaviorFactory.getInstance()){

            super();
                //var captionImage = captionImage
    //var spriteMovieImage = spriteMovieImage
    //var soundInterface = soundInterface
    //var frameWidth = frameWidth
    //var frameHeight = frameHeight
    //var captionDx = captionDx
    //var captionDy = captionDy
    //var dx = dx
    //var dy = dy
    //var time = time


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (captionImage: Image, spriteMovieImage: Image, soundInterface: Sound, frameWidth: number, frameHeight: number, captionDx: number, captionDy: number, dx: number, dy: number, time: number, animationBehaviorFactory: AnimationBehaviorFactory){

            super();
                //var captionImage = captionImage
    //var spriteMovieImage = spriteMovieImage
    //var soundInterface = soundInterface
    //var frameWidth = frameWidth
    //var frameHeight = frameHeight
    //var captionDx = captionDx
    //var captionDy = captionDy
    //var dx = dx
    //var dy = dy
    //var time = time
    //var animationBehaviorFactory = animationBehaviorFactory
this.captionImage= captionImage;
    
this.spriteMovieImage= spriteMovieImage;
    
this.frameWidth= frameWidth;
    
this.frameHeight= frameHeight;
    
this.captionDx= captionDx;
    
this.captionDy= captionDy;
    
this.dx= dx;
    
this.dy= dy;
    
this.time= time;
    
this.soundInterface= soundInterface;
    
this.animationBehaviorFactory= animationBehaviorFactory;
    
}


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId

    var scaledImage: Image = animationFactoryImageScaleUtil!.createImage(this.captionImage, this.captionImage!.getWidth(), this.captionImage!.getHeight(), this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight)!;
        
        
;
    

    var animationInterface: Animation = new ImageAnimation(scaledImage, this.animationBehaviorFactory!.getOrCreateInstance());
        
        
;
    

    var sprite: Sprite = animationFactorySpriteScaleUtil!.createImage(this.spriteMovieImage, this.frameWidth, this.frameHeight, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight)!;
        
        
;
    

    var movieIndexedAnimationInterface: IndexedAnimation = new SpriteIndexedAnimation(sprite, this.spriteMovieImage, this.animationBehaviorFactory!.getOrCreateInstance());
        
        
;
    

    var player: Player = this.soundInterface!.getPlayerP()!;
        
        
;
    

                        if(player == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Error("Sound Was not Initialized")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new CaptionIndexedAnimation(animationInterface, movieIndexedAnimationInterface, player, this.captionDx, this.captionDy, dx, dy, time, this.animationBehaviorFactory!.getOrCreateInstance());
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
    //var scaleProperties = scaleProperties
this.scaleProperties= scaleProperties;
    
}


}
                
            

