
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

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageSegmentAnimation } from './ImageSegmentAnimation.js';
//not GWT import const  = globalThis.org.allbinary.animation.image.ImageSegmentAnimation;

                
export class LeftToRightImageAnimation extends ImageSegmentAnimation {
        

    private currentWidth: number;

public constructor (image: Image, sequenceArray: number[], animationBehavior: AnimationBehavior){
            super(image, sequenceArray, animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.currentWidth= 0;
    

                        if(this.getSequence()[0] ==  -1)
                        
                                    {
                                    this.setFrame(this.getSize() -1);
    

                                    }
                                
}


    public nextFrame(){

                        if(this.getSequence()[0] ==  -1)
                        
                                    {
                                    super.previousFrame();
    

                                    }
                                
                        else {
                            super.nextFrame();
    

                        }
                            
this.update();
    
}


    public previousFrame(){

                        if(this.getSequence()[0] ==  -1)
                        
                                    {
                                    super.nextFrame();
    

                                    }
                                
                        else {
                            super.previousFrame();
    

                        }
                            
this.update();
    
}


    public setFrame(index: number){
super.setFrame(index);
    
this.update();
    
}


    update(){
this.currentWidth= this.getDrawWidth() *this.getFrame() /this.getSize();
    
}


    private anchor: number = Anchor.TOP_LEFT;

    public paintXY(graphics: Graphics, x: number, y: number){
graphics.drawRegion(this.getImage(), this.getStartX(), this.getStartY(), this.currentWidth, this.getDrawHeight(), Sprite.TRANS_NONE, x, y, this.anchor);
    
}


}



