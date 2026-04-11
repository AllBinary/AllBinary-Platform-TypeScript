
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

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorUtil } from "../../../../../org/allbinary/graphics/color/BasicColorUtil.js";

    

export class AdjustedSpriteIndexedAnimation extends SpriteIndexedAnimation {
        

    private dx: number

    private dy: number
public constructor (sprite: Sprite, image: Image, dx: number, dy: number, animationBehavior: AnimationBehavior)                        

                            : this(sprite, image, BasicColorUtil.getInstance()!.ZERO_ARRAY, dx, dy, animationBehavior){

            super();
                //var sprite = sprite
    //var image = image
    //var dx = dx
    //var dy = dy
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (sprite: Sprite, image: Image, basicColorArray: BasicColor[], dx: number, dy: number, animationBehavior: AnimationBehavior)                        

                            : super(sprite, image, basicColorArray, animationBehavior){

            super();
                //var sprite = sprite
    //var image = image
    //var basicColorArray = basicColorArray
    //var dx = dx
    //var dy = dy
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.dx= dx;
    
this.dy= dy;
    
}


    public paint(graphics: Graphics, frame: number, x: number, y: number){
    //var graphics = graphics
    //var frame = frame
    //var x = x
    //var y = y
this.setFrame(frame);
    
this.sprite.setPosition(x +this.dx, y +this.dy);
    
super.paint(graphics);
    
}


    public paint(g: Graphics, x: number, y: number){
    //var g = g
    //var x = x
    //var y = y
this.sprite.setPosition(x +this.dx, y +this.dy);
    
super.paint(g);
    
}


    public paint(g: Graphics){
    //var g = g
this.sprite.setPosition(this.dx, this.dy);
    
super.paint(g);
    
}


}
                
            

