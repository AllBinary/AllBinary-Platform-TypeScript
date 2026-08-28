
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
        
//not game specific package import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { Sprite } from '../../../../../javax/microedition/lcdui/game/Sprite.js';
      const Sprite = globalThis.javax.microedition.lcdui.game.Sprite;

      
//not game specific package import { AnimationBehavior } from '../../../../../org/allbinary/animation/AnimationBehavior.js';
      const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
//not game specific package import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { BasicColorUtil } from '../../../../../org/allbinary/graphics/color/BasicColorUtil.js';
      const BasicColorUtil = globalThis.org.allbinary.graphics.color.BasicColorUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SpriteIndexedAnimation } from './SpriteIndexedAnimation.js';

export class AdjustedSpriteIndexedAnimation extends SpriteIndexedAnimation {
        

    private dx: number;

    private dy: number;

public constructor (sprite: Sprite, image: Image, basicColorArray: BasicColor[], dx: number, dy: number, animationBehavior: AnimationBehavior){
            super(sprite, image, basicColorArray, animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.dx= dx;
    
this.dy= dy;
    
}


    public paintFrame(graphics: Graphics, frame: number, x: number, y: number){
this.setFrame(frame);
    
this.sprite.setPosition(x +this.dx, y +this.dy);
    
super.paint(graphics);
    
}


    public paintXY(g: Graphics, x: number, y: number){
this.sprite.setPosition(x +this.dx, y +this.dy);
    
super.paint(g);
    
}


    public paint(g: Graphics){
this.sprite.setPosition(this.dx, this.dy);
    
super.paint(g);
    
}


}



