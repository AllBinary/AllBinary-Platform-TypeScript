
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

        


            import { Throwable } from '../../../../java/lang/Throwable.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;

      
//not plain js import { DisposalUtil } 
const DisposalUtil = globalThis.org.allbinary.DisposalUtil;

      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
//not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
//not GWT import const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;

      
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Anchor = globalThis.org.allbinary.graphics.Anchor;

      
//not plain js import { PrimitiveIntUtil } 
const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;

      
//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TweenedImageAnimation extends IndexedAnimation {
        

    private readonly image: Image;

    private readonly dx: number;

    private readonly dy: number;

    private totalFrames: number;

    circularIndexUtil: CircularIndexUtil;

public constructor (image: Image, dx: number, dy: number, totalFrames: number, animationBehavior: AnimationBehavior){
            super(animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.image= image;
    
this.dx= dx;
    
this.dy= dy;
    
this.totalFrames= totalFrames;
    
this.circularIndexUtil= CircularIndexUtil.createInstance(this.totalFrames);
    
}


                //@Throws(Exception.constructor)
            
    public getAnimationSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getSize();;
    
}


    public nextFrame(){
this.circularIndexUtil!.next();
    
}


    public previousFrame(){
this.circularIndexUtil!.previous();
    
}


    public setFrame(index: number){
this.circularIndexUtil!.setIndex(index);
    
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.circularIndexUtil!.getIndex();;
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.totalFrames;
    
}


    public setSequence(sequence: number[]){
}


    public getSequence(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();;
    
}


    private anchor: number = Anchor.TOP_LEFT;

    public paintXY(graphics: Graphics, x: number, y: number){

    var frame: number = this.getFrame()!;;
    

    var currentX: number = this.dx *frame;;
    

    var currentY: number = this.dy *frame;;
    
graphics.drawImage(this.image, x +currentX, y +currentY, this.anchor);
    
}


    public close(){
DisposalUtil.getInstance()!.disposeImage(this.image);
    
}


                //@Throws(Throwable.constructor)
            
    finalize(){
DisposalUtil.getInstance()!.disposeImage(this.image);
    
}


}



