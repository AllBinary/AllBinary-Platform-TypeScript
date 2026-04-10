
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

    

export class LeftToRightImageAnimation extends ImageSegmentAnimation {
        

    private currentWidth: number
public constructor (image: Image, sequenceArray: IntArray, animationBehavior: AnimationBehavior)                        

                            : super(image, sequenceArray, animationBehavior){

            super();
                //var image = image
    //var sequenceArray = sequenceArray
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.currentWidth= 0

    
                        if(this.getSequence()[0] ==  -1)
                        
                                    {
                                    this.setFrame(this.getSize() -1)

                                    }
                                
}


    public nextFrame(){

    
                        if(this.getSequence()[0] ==  -1)
                        
                                    {
                                    previousFrame()

                                    }
                                
                        else {
                            nextFrame()

                        }
                            
this.update()
}


    public previousFrame(){

    
                        if(this.getSequence()[0] ==  -1)
                        
                                    {
                                    nextFrame()

                                    }
                                
                        else {
                            previousFrame()

                        }
                            
this.update()
}


    public setFrame(index: number){
var index = index
setFrame(index)
this.update()
}


    update(){
this.currentWidth= this.getDrawWidth() *this.getFrame() /this.getSize()
}


    private anchor: number = Anchor.TOP_LEFT;
        
        

    public paint(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y
drawRegion(this.getImage(), this.getStartX(), this.getStartY(), this.currentWidth, this.getDrawHeight(), Sprite.TRANS_NONE, x, y, anchor)
}


}
                
            

