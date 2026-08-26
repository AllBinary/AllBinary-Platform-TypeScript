
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
        



//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { Sprite } from '../../../../../javax/microedition/lcdui/game/Sprite.js';
      const Sprite = globalThis.javax.microedition.lcdui.game.Sprite;

      
//not game specific package import { AnimationBehavior } from '../../../../../org/allbinary/animation/AnimationBehavior.js';
      const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
//not game specific package import { Direction } from '../../../../../org/allbinary/direction/Direction.js';
      const Direction = globalThis.org.allbinary.direction.Direction;

      
//not game specific package import { Angle } from '../../../../../org/allbinary/math/Angle.js';
      const Angle = globalThis.org.allbinary.math.Angle;

      
//not game specific package import { AngleFactory } from '../../../../../org/allbinary/math/AngleFactory.js';
      const AngleFactory = globalThis.org.allbinary.math.AngleFactory;

      
//not game specific package import { AngleInfo } from '../../../../../org/allbinary/math/AngleInfo.js';
      const AngleInfo = globalThis.org.allbinary.math.AngleInfo;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HackRotationSpriteIndexedAnimation } from './HackRotationSpriteIndexedAnimation.js';

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
                
            

