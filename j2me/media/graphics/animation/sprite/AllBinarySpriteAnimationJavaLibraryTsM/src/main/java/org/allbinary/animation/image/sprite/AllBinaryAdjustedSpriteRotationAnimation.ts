
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
        



//not game specific package import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { Sprite } from '../../../../../javax/microedition/lcdui/game/Sprite.js';
      const Sprite = globalThis.javax.microedition.lcdui.game.Sprite;

      
//not game specific package import { AnimationBehavior } from '../../../../../org/allbinary/animation/AnimationBehavior.js';
      const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinarySpriteRotationAnimation } from './AllBinarySpriteRotationAnimation.js';

export class AllBinaryAdjustedSpriteRotationAnimation extends AllBinarySpriteRotationAnimation {
        

    private dx: number;

    private dy: number;

public constructor (sprite: Sprite, image: Image, dx: number, dy: number, animationBehavior: AnimationBehavior){
            super(sprite, image, animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.dx= dx;
    
this.dy= dy;
    
}


    public paintXY(g: Graphics, x: number, y: number){
this.sprite.setPosition(x +this.dx, y +this.dy);
    
this.paint(g);
    
}


}



