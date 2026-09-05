
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

        


            import { Throwable } from '../../../../java/lang/Throwable.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;

      
//not plain js import { DisposalUtil } 
const DisposalUtil = globalThis.org.allbinary.DisposalUtil;

      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
//not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
import { RotationAnimation } from '../../../../org/allbinary/animation/RotationAnimation.js';
//not GWT import const RotationAnimation = globalThis.org.allbinary.animation.RotationAnimation;

      
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Anchor = globalThis.org.allbinary.graphics.Anchor;

      
//not plain js import { PrimitiveIntUtil } 
const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;

      
//not plain js import { AngleInfo } 
const AngleInfo = globalThis.org.allbinary.math.AngleInfo;

      
//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageBaseRotationAnimation extends RotationAnimation {
        

    private readonly image: Image;

public constructor (image: Image, angleInfo: AngleInfo, totalAngle: number, animationBehavior: AnimationBehavior){
            super(angleInfo, CircularIndexUtil.createInstance(totalAngle /angleInfo!.getAngleIncrementInfo()!.getAngleIncrement()), animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.image= image;
    
}


                //@Throws(Exception.constructor)
            
    public getAnimationSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getSize();;
    
}


    public setSequence(sequence: number[]){
}


    public getSequence(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();;
    
}


    anchor: number = Anchor.TOP_LEFT;

    public paintXY(graphics: Graphics, x: number, y: number){
graphics.drawImage(this.image, x, y, this.anchor);
    
}


    getImage(): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.image;
    
}


    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.image.getWidth();;
    
}


    public getHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.image.getHeight();;
    
}


    public close(){
DisposalUtil.getInstance()!.disposeImage(this.image);
    
}


                //@Throws(Throwable.constructor)
            
    finalize(){
DisposalUtil.getInstance()!.disposeImage(this.image);
    
}


}



