
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { Sprite } from '../../../../../javax/microedition/lcdui/game/Sprite.js';
      const Sprite = globalThis.javax.microedition.lcdui.game.Sprite;

      
//not game specific package import { Player, PlayerI } from '../../../../../javax/microedition/media/Player.js';
      const Player = globalThis.javax.microedition.media.Player;

      
//not game specific package import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      const Animation = globalThis.org.allbinary.animation.Animation;

      
//not game specific package import { AnimationBehaviorFactory } from '../../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
      const AnimationBehaviorFactory = globalThis.org.allbinary.animation.AnimationBehaviorFactory;

      
//not game specific package import { AnimationInterfaceFactoryInterface } from '../../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js';
      const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;

      
//not game specific package import { IndexedAnimation } from '../../../../../org/allbinary/animation/IndexedAnimation.js';
      const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;

      
//not game specific package import { CaptionIndexedAnimation } from '../../../../../org/allbinary/animation/caption/CaptionIndexedAnimation.js';
      const CaptionIndexedAnimation = globalThis.org.allbinary.animation.caption.CaptionIndexedAnimation;

      
//not game specific package import { ImageAnimation } from '../../../../../org/allbinary/animation/image/ImageAnimation.js';
      const ImageAnimation = globalThis.org.allbinary.animation.image.ImageAnimation;

      
//not game specific package import { BasicColorUtil } from '../../../../../org/allbinary/graphics/color/BasicColorUtil.js';
      const BasicColorUtil = globalThis.org.allbinary.graphics.color.BasicColorUtil;

      
//not game specific package import { AnimationFactoryImageScaleUtil } from '../../../../../org/allbinary/image/AnimationFactoryImageScaleUtil.js';
      const AnimationFactoryImageScaleUtil = globalThis.org.allbinary.image.AnimationFactoryImageScaleUtil;

      
//not game specific package import { AnimationFactorySpriteScaleUtil } from '../../../../../org/allbinary/image/sprite/AnimationFactorySpriteScaleUtil.js';
      const AnimationFactorySpriteScaleUtil = globalThis.org.allbinary.image.sprite.AnimationFactorySpriteScaleUtil;

      
//not game specific package import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { ScaleProperties } from '../../../../../org/allbinary/media/ScaleProperties.js';
      const ScaleProperties = globalThis.org.allbinary.media.ScaleProperties;

      
//not game specific package import { Sound } from '../../../../../org/allbinary/media/audio/Sound.js';
      const Sound = globalThis.org.allbinary.media.audio.Sound;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SpriteIndexedAnimation } from './SpriteIndexedAnimation.js';

export class ImageCaptionIndexedAnimationFactory
            extends Object
         implements AnimationInterfaceFactoryInterface {
        

    readonly animationFactoryImageScaleUtil: AnimationFactoryImageScaleUtil = AnimationFactoryImageScaleUtil.getInstance()!;

    private readonly animationFactorySpriteScaleUtil: AnimationFactorySpriteScaleUtil = AnimationFactorySpriteScaleUtil.getInstance()!;

    private captionImage: Image;

    private spriteMovieImage: Image;

    private frameWidth: number;

    private frameHeight: number;

    private captionDx: number;

    private captionDy: number;

    private dx: number;

    private dy: number;

    private time: number;

    private soundInterface: Sound;

    public scaleProperties: ScaleProperties = ScaleProperties.instance;

    private readonly animationBehaviorFactory: AnimationBehaviorFactory;

public constructor (captionImage: Image, spriteMovieImage: Image, soundInterface: Sound, frameWidth: number, frameHeight: number, captionDx: number, captionDy: number, dx: number, dy: number, time: number, animationBehaviorFactory: AnimationBehaviorFactory){

            super();
        
                        if(animationBehaviorFactory == AnimationBehaviorFactory.getInstance())
                        
                                    {
                                    ForcedLogUtil.log("Using default AnimationBehaviorFactory with IndexedAnimationFactory", this);
    

                                    }
                                
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


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{

    var scaledImage: Image = this.animationFactoryImageScaleUtil!.createImage(this.captionImage, this.captionImage!.getWidth(), this.captionImage!.getHeight(), this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight)!;;
    

    var animationInterface: Animation = new ImageAnimation(scaledImage, this.animationBehaviorFactory!.getOrCreateInstance());;
    

    var sprite: Sprite = this.animationFactorySpriteScaleUtil!.createImage(this.spriteMovieImage, this.frameWidth, this.frameHeight, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight)!;;
    

    var movieIndexedAnimationInterface: IndexedAnimation = new SpriteIndexedAnimation(sprite, this.spriteMovieImage, BasicColorUtil.getInstance()!.ZERO_ARRAY, this.animationBehaviorFactory!.getOrCreateInstance());;
    

    var player: Player = this.soundInterface!.getPlayerP()!;;
    

                        if(player == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("Sound Was not Initialized");
                    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new CaptionIndexedAnimation(animationInterface, movieIndexedAnimationInterface, player, this.captionDx, this.captionDy, this.dx, this.dy, this.time, this.animationBehaviorFactory!.getOrCreateInstance());
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
this.scaleProperties= scaleProperties;
    
}


}



