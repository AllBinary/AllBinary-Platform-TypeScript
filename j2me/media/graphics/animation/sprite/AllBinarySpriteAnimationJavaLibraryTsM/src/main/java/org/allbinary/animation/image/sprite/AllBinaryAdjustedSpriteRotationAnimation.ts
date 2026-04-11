
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

    

export class AllBinaryAdjustedSpriteRotationAnimation extends AllBinarySpriteRotationAnimation {
        

    private dx: number

    private dy: number
public constructor (sprite: Sprite, image: Image, dx: number, dy: number, animationBehavior: AnimationBehavior)                        

                            : super(sprite, image, animationBehavior){

            super();
                //var sprite = sprite
    //var image = image
    //var dx = dx
    //var dy = dy
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.dx= dx;
    
this.dy= dy;
    
}


    public paint(g: Graphics, x: number, y: number){
    //var g = g
    //var x = x
    //var y = y
this.sprite.setPosition(x +this.dx, y +this.dy);
    
this.paint(g);
    
}


}
                
            

