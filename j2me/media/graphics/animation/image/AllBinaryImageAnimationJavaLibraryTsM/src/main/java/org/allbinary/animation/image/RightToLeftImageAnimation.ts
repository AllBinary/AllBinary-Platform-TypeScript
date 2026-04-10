
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { Sprite } from "../../../../javax/microedition/lcdui/game/Sprite.js";

    
import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { Anchor } from "../../../../org/allbinary/graphics/Anchor.js";

    

export class RightToLeftImageAnimation extends ImageSegmentAnimation {
        

    private startWidth: number= 0

    private currentWidth: number= 0
public constructor (image: Image, animationBehavior: AnimationBehavior)                        

                            : super(image, animationBehavior){

            super();
                //var image = image
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.setFrame(this.getSize() -1)
}


    public nextFrame(){
super.previousFrame()
this.update()
}


    public previousFrame(){
super.nextFrame()
this.update()
}


    public setFrame(index: number){
    //var index = index
super.setFrame(index)
this.update()
}


    update(){
this.startWidth= this.getDrawWidth() *this.getFrame() /this.getSize()
this.currentWidth= this.getDrawWidth() -this.startWidth
}


    private anchor: number = Anchor.TOP_LEFT;
        
        

    public paint(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y
graphics.drawRegion(this.getImage(), this.startWidth, this.getStartY(), this.currentWidth, this.getDrawHeight(), Sprite.TRANS_NONE, x +this.startWidth, y, anchor)
}


}
                
            

