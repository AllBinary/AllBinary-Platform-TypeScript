
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { Sprite } from '../../../../../javax/microedition/lcdui/game/Sprite.js';
      const Sprite = globalThis.javax.microedition.lcdui.game.Sprite;

      
//not game specific package import { AnimationBehavior } from '../../../../../org/allbinary/animation/AnimationBehavior.js';
      const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
//not game specific package import { RotationAnimation } from '../../../../../org/allbinary/animation/RotationAnimation.js';
      const RotationAnimation = globalThis.org.allbinary.animation.RotationAnimation;

      
//not game specific package import { PrimitiveIntUtil } from '../../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
      const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;

      
//not game specific package import { AngleInfo } from '../../../../../org/allbinary/math/AngleInfo.js';
      const AngleInfo = globalThis.org.allbinary.math.AngleInfo;

      
//not game specific package import { CircularIndexUtil } from '../../../../../org/allbinary/util/CircularIndexUtil.js';
      const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HackRotationSpriteIndexedAnimation extends RotationAnimation {
        

    readonly sprite: Sprite;

    private readonly image: Image;

public constructor (sprite: Sprite, image: Image, angleInfo: AngleInfo, animationBehavior: AnimationBehavior){
            super(angleInfo, CircularIndexUtil.createInstance(360 /angleInfo!.getAngleIncrementInfo()!.getAngleIncrement()), animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.sprite= sprite;
    
this.image= image;
    
}


                //@Throws(Exception.constructor)
            
    public getAnimationSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getSize();;
    
}


    public paintFrame(g: Graphics, frame: number, x: number, y: number){
this.setFrame(frame);
    
this.paintXY(g, x, y);
    
}


    public paintXY(g: Graphics, x: number, y: number){
this.sprite.setPosition(x, y);
    
this.paint(g);
    
}


    paint(g: Graphics){
this.sprite.paint(g);
    
}


    public nextRotation(){
this.sprite.nextFrame();
    
}


    public previousRotation(){
this.sprite.prevFrame();
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.sprite.getRawFrameCount();;
    
}


    public setFrame(frame: number){
this.sprite.setFrame(frame);
    
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.sprite.getFrame();;
    
}


    public setSequence(sequence: number[]){
}


    public getSequence(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();;
    
}


}
                
            

