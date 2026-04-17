
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

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ImageSegmentAnimation } from "./ImageSegmentAnimation.js";

export class BottomToTopImageAnimation extends ImageSegmentAnimation {
        

    private startHeight: number= 0

    private currentHeight: number= 0
public constructor (image: Image, animationBehavior: AnimationBehavior)                        

                            : super(image, animationBehavior){

            super();
                //var image = image
    //var animationBehavior = animationBehavior


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
var index = index
super.setFrame(index);
    
this.update();
    
}


    update(){
this.startHeight= this.getDrawHeight() *this.getFrame() /this.getSize();
    
this.currentHeight= this.getDrawHeight() -this.startHeight;
    
}


    private anchor: number = Anchor.TOP_LEFT;
        
        

    public paint(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y
graphics.drawRegion(this.getImage(), this.getStartX(), this.startHeight, this.getDrawWidth(), this.currentHeight, Sprite.TRANS_NONE, x, y +this.startHeight, anchor);
    
}


}
                
            

