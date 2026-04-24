
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

    
import { DisposalUtil } from "../../../../org/allbinary/DisposalUtil.js";

    
import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { IndexedAnimation } from "../../../../org/allbinary/animation/IndexedAnimation.js";

    
import { Anchor } from "../../../../org/allbinary/graphics/Anchor.js";

    
import { PrimitiveIntUtil } from "../../../../org/allbinary/logic/math/PrimitiveIntUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageAnimation extends IndexedAnimation {
        

    private readonly image: Image
public constructor (image: Image, animationBehavior: AnimationBehavior){
            super(animationBehavior);
                        //var image = image
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.image= image;
    
}


                //@Throws(Error::class)
            
    public getAnimationSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getSize();;
    
}


    public nextFrame(){
}


    public previousFrame(){
}


    public setFrame(index: number){
var index = index
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 1;
    
}


    public setSequence(sequence: number[]){
var sequence = sequence
}


    public getSequence(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();;
    
}


    private anchor: number = Anchor.TOP_LEFT;
        
        

    public paint(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y
graphics.drawImage(this.image, x, y, anchor);
    
}


    getImage(): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


    public close(){
DisposalUtil.getInstance()!.dispose(this.image);
    
}


                //@Throws(Error::class)
            
    finalize(){
DisposalUtil.getInstance()!.dispose(this.image);
    
}


}
                
            

