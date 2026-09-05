
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
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;

      
//not plain js import { Sprite } 
const Sprite = globalThis.javax.microedition.lcdui.game.Sprite;

      
import { AnimationBehavior } from '../../../../../org/allbinary/animation/AnimationBehavior.js';
//not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
import { RotationAnimation } from '../../../../../org/allbinary/animation/RotationAnimation.js';
//not GWT import const RotationAnimation = globalThis.org.allbinary.animation.RotationAnimation;

      
//not plain js import { PrimitiveIntUtil } 
const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;

      
//not plain js import { AngleInfo } 
const AngleInfo = globalThis.org.allbinary.math.AngleInfo;

      
//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
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



