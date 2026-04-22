
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

    
import { CircularIndexUtil } from "../../../../org/allbinary/util/CircularIndexUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TweenedImageAnimation extends IndexedAnimation {
        

    private readonly image: Image

    private readonly dx: number

    private readonly dy: number

    private totalFrames: number

    circularIndexUtil: CircularIndexUtil
public constructor (image: Image, dx: number, dy: number, totalFrames: number, animationBehavior: AnimationBehavior){
            super(animationBehavior);
                        //var image = image
    //var dx = dx
    //var dy = dy
    //var totalFrames = totalFrames
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.image= image;
    
this.dx= dx;
    
this.dy= dy;
    
this.totalFrames= totalFrames;
    
this.circularIndexUtil= CircularIndexUtil.getInstance(this.totalFrames);
    
}


                //@Throws(Error::class)
            
    public getAnimationSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getSize();

                        ;
    
}


    public nextFrame(){
this.circularIndexUtil!.next();
    
}


    public previousFrame(){
this.circularIndexUtil!.previous();
    
}


    public setFrame(index: number){
var index = index
this.circularIndexUtil!.setIndex(index);
    
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.circularIndexUtil!.getIndex();

                        ;
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.totalFrames;
    
}


    public setSequence(sequence: number[]){
var sequence = sequence
}


    public getSequence(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();

                        ;
    
}


    private anchor: number = Anchor.TOP_LEFT;
        
        

    public paint(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y

    var frame: number = this.getFrame()!;
        
        
;
    

    var currentX: number = this.dx *frame;
        
        
;
    

    var currentY: number = this.dy *frame;
        
        
;
    
graphics.drawImage(this.image, x +currentX, y +currentY, anchor);
    
}


    public close(){
DisposalUtil.getInstance()!.dispose(this.image);
    
}


                //@Throws(Error::class)
            
    finalize(){
DisposalUtil.getInstance()!.dispose(this.image);
    
}


}
                
            

