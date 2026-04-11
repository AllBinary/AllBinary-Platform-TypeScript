
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

    
import { NullCanvas } from "../../../../javax/microedition/lcdui/NullCanvas.js";

    
import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { IndexedAnimation } from "../../../../org/allbinary/animation/IndexedAnimation.js";

    
import { Anchor } from "../../../../org/allbinary/graphics/Anchor.js";

    
import { PrimitiveIntUtil } from "../../../../org/allbinary/logic/math/PrimitiveIntUtil.js";

    
import { CircularIndexUtil } from "../../../../org/allbinary/util/CircularIndexUtil.js";

    

export class ImageArrayAnimation extends IndexedAnimation {
        

    private imageArray: Image[] = NullCanvas.NULL_IMAGE_ARRAY;
        
        

    private totalFrames: number= 0

    circularIndexUtil: CircularIndexUtil = CircularIndexUtil.NULL_CIRCULAR_INDEX_UTIL;
        
        
public constructor (imageArray: Image[], animationBehavior: AnimationBehavior)                        

                            : super(animationBehavior){

            super();
                //var imageArray = imageArray
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.setImageArray(imageArray);
    
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


    public getImage(index: number): Image{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageArray[index]!;
    
}


    public getImageArray(): Image[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageArray;
    
}


    setImageArray(imageArray: Image[]){
var imageArray = imageArray
this.imageArray= imageArray;
    
this.totalFrames= imageArray!.length;
    
this.circularIndexUtil= CircularIndexUtil.getInstance(this.totalFrames);
    
}


    private anchor: number = Anchor.TOP_LEFT;
        
        

    public paint(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y
graphics.drawImage(this.imageArray[this.circularIndexUtil!.getIndex()]!, x, y, anchor);
    
}


}
                
            

