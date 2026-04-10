
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
        



import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { Image } from "../../../../../javax/microedition/lcdui/Image.js";

    
import { Sprite } from "../../../../../javax/microedition/lcdui/game/Sprite.js";

    
import { AnimationBehavior } from "../../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { RotationAnimation } from "../../../../../org/allbinary/animation/RotationAnimation.js";

    
import { PrimitiveIntUtil } from "../../../../../org/allbinary/logic/math/PrimitiveIntUtil.js";

    
import { AngleInfo } from "../../../../../org/allbinary/math/AngleInfo.js";

    

export class HackRotationSpriteIndexedAnimation extends RotationAnimation {
        

    readonly sprite: Sprite

    private readonly image: Image
public constructor (sprite: Sprite, image: Image, angleInfo: AngleInfo, animationBehavior: AnimationBehavior)                        

                            : super(angleInfo, animationBehavior){

            super();
                //var sprite = sprite
    //var image = image
    //var angleInfo = angleInfo
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.sprite= sprite
this.image= image
}


                @Throws(Exception::class)
            
    public getAnimationSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getSize();
    
}


    public paint(g: Graphics, frame: number, x: number, y: number){
    //var g = g
    //var frame = frame
    //var x = x
    //var y = y
this.setFrame(frame)
this.paint(g, x, y)
}


    public paint(g: Graphics, x: number, y: number){
    //var g = g
    //var x = x
    //var y = y
setPosition(x, y)
this.paint(g)
}


    paint(g: Graphics){
    //var g = g
paint(g)
}


    public nextRotation(){
nextFrame()
}


    public previousRotation(){
prevFrame()
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.sprite.getRawFrameCount();
    
}


    public setFrame(frame: number){
    //var frame = frame
setFrame(frame)
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.sprite.getFrame();
    
}


    public setSequence(sequence: IntArray){
    //var sequence = sequence
}


    public getSequence(): IntArray{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();
    
}


}
                
            

