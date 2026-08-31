
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

        


import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not plain js import { Sprite } from '../../../../../javax/microedition/lcdui/game/Sprite.js';
      const Sprite = globalThis.javax.microedition.lcdui.game.Sprite;

      
import { AnimationBehavior } from '../../../../../org/allbinary/animation/AnimationBehavior.js';
      //not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
import { Direction } from '../../../../../org/allbinary/direction/Direction.js';
      //not GWT import const Direction = globalThis.org.allbinary.direction.Direction;

      
//not plain js import { Angle } from '../../../../../org/allbinary/math/Angle.js';
      const Angle = globalThis.org.allbinary.math.Angle;

      
//not plain js import { AngleFactory } from '../../../../../org/allbinary/math/AngleFactory.js';
      const AngleFactory = globalThis.org.allbinary.math.AngleFactory;

      
//not plain js import { AngleInfo } from '../../../../../org/allbinary/math/AngleInfo.js';
      const AngleInfo = globalThis.org.allbinary.math.AngleInfo;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HackRotationSpriteIndexedAnimation } from './HackRotationSpriteIndexedAnimation.js';
//not GWT import const  = globalThis.org.allbinary.animation.image.sprite.HackRotationSpriteIndexedAnimation;

                
export class AllBinarySpriteRotationAnimation extends HackRotationSpriteIndexedAnimation {
        

public constructor (sprite: Sprite, image: Image, animationBehavior: AnimationBehavior){
            super(sprite, image, AngleInfo.getInstance((AngleFactory.getInstance()!.TOTAL_ANGLE /sprite.getRawFrameCount())), animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.angleInfo!.adjustAngle(this.sprite.getFrame());
    
}


    public nextRotation(){
this.sprite.nextFrame();
    
this.angleInfo!.adjustAngle(this.sprite.getFrame());
    
}


    public previousRotation(){
this.sprite.prevFrame();
    
this.angleInfo!.adjustAngle(this.sprite.getFrame());
    
}


    public setFrameByDirection(direction: Direction){

    var angle: Angle = this.directionUtil!.getFrameAngle(direction)!;;
    
this.adjustFrameToAngle(angle);
    
}


    public setFrameToAngle(angle: Angle){
this.adjustFrameToAngle(angle);
    
}


    public setFrame(index: number){
this.sprite.setFrame(index);
    
this.angleInfo!.adjustAngle(this.getFrame());
    
}


    public adjustFrameToAngle(angle: Angle){
this.adjustFrame(angle.getValue());
    
}


    public adjustFrame(angle: number){
this.setFrame(this.frameUtil!.getFrameForAngle(angle, Math.round(this.angleInfo!.getAngleIncrementInfo()!.getAngleIncrement())));
    
}


}



