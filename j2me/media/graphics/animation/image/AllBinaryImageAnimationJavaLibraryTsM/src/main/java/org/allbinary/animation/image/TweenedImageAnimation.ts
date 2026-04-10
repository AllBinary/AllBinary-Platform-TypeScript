
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

    

export class TweenedImageAnimation extends IndexedAnimation {
        

    private readonly image: Image

    private readonly dx: number

    private readonly dy: number

    private totalFrames: number

    circularIndexUtil: CircularIndexUtil
public constructor (image: Image, dx: number, dy: number, totalFrames: number, animationBehavior: AnimationBehavior)                        

                            : super(animationBehavior){

            super();
                //var image = image
    //var dx = dx
    //var dy = dy
    //var totalFrames = totalFrames
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.image= image
this.dx= dx
this.dy= dy
this.totalFrames= totalFrames
this.circularIndexUtil= CircularIndexUtil.getInstance(this.totalFrames)
}


                @Throws(Exception::class)
            
    public getAnimationSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getSize();
    
}


    public nextFrame(){
next()
}


    public previousFrame(){
previous()
}


    public setFrame(index: number){
var index = index
setIndex(index)
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.circularIndexUtil!.getIndex();
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.totalFrames;
    
}


    public setSequence(sequence: IntArray){
var sequence = sequence
}


    public getSequence(): IntArray{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();
    
}


    private anchor: number = Anchor.TOP_LEFT;
        
        

    public paint(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y

    var frame: number = this.getFrame()!;
        
        


    var currentX: number = dx *frame;
        
        


    var currentY: number = dy *frame;
        
        

drawImage(this.image, x +currentX, y +currentY, anchor)
}


    public close(){
dispose(this.image)
}


                @Throws(Throwable::class)
            
    finalize(){
dispose(this.image)
}


}
                
            

