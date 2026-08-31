
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
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
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

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageSegmentAnimation } from './ImageSegmentAnimation.js';

export class RightToLeftImageAnimation extends ImageSegmentAnimation {
        

    private startWidth: number= 0;

    private currentWidth: number= 0;

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
this.startWidth= this.getDrawWidth() *this.getFrame() /this.getSize();
    
this.currentWidth= this.getDrawWidth() -this.startWidth;
    
}


    private anchor: number = Anchor.TOP_LEFT;

    public paintXY(graphics: Graphics, x: number, y: number){
graphics.drawRegion(this.getImage(), this.startWidth, this.getStartY(), this.currentWidth, this.getDrawHeight(), Sprite.TRANS_NONE, x +this.startWidth, y, this.anchor);
    
}


}



