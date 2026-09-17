
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
        
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image
import { Sprite } from '../../../../javax/microedition/lcdui/game/Sprite.js';
//not GWT import const Sprite
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
//not GWT import const AnimationBehavior
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Anchor
import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
//not GWT import const PrimitiveIntUtil
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageSegmentAnimation } from './ImageSegmentAnimation.js';
//not GWT import - same folder const ImageSegmentAnimation
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



