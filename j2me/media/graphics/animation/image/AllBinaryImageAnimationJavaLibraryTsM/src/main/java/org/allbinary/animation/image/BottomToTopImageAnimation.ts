
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not plain js import { Sprite } from '../../../../javax/microedition/lcdui/game/Sprite.js';
      const Sprite = globalThis.javax.microedition.lcdui.game.Sprite;

      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      //not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
      //not GWT import const Anchor = globalThis.org.allbinary.graphics.Anchor;

      
//not plain js import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
      const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageSegmentAnimation } from './ImageSegmentAnimation.js';
//not GWT import const  = globalThis.org.allbinary.animation.image.ImageSegmentAnimation;

                
export class BottomToTopImageAnimation extends ImageSegmentAnimation {
        

    private startHeight: number= 0;

    private currentHeight: number= 0;

public constructor (image: Image, animationBehavior: AnimationBehavior){
            super(image, PrimitiveIntUtil.getArrayInstance(), animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setFrame(this.getSize() -1);
    
}


    public nextFrame(){
super.previousFrame();
    
this.update();
    
}


    public previousFrame(){
super.nextFrame();
    
this.update();
    
}


    public setFrame(index: number){
super.setFrame(index);
    
this.update();
    
}


    update(){
this.startHeight= this.getDrawHeight() *this.getFrame() /this.getSize();
    
this.currentHeight= this.getDrawHeight() -this.startHeight;
    
}


    private anchor: number = Anchor.TOP_LEFT;

    public paintXY(graphics: Graphics, x: number, y: number){
graphics.drawRegion(this.getImage(), this.getStartX(), this.startHeight, this.getDrawWidth(), this.currentHeight, Sprite.TRANS_NONE, x, y +this.startHeight, this.anchor);
    
}


}



