
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

    
import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { PrimitiveIntUtil } from "../../../../org/allbinary/logic/math/PrimitiveIntUtil.js";

    
import { CircularIndexUtil } from "../../../../org/allbinary/util/CircularIndexUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ImageAnimation } from "./ImageAnimation.js";

export class ImageSegmentAnimation extends ImageAnimation {
        

    private startX: number

    private startY: number

    private drawWidth: number

    private drawHeight: number

    private circularIndexUtil: CircularIndexUtil

    private sequenceArray: number[]
protected constructor (image: Image, animationBehavior: AnimationBehavior){
            this(image, PrimitiveIntUtil.getArrayInstance(), animationBehavior);
                        //var image = image
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
}

protected constructor (image: Image, sequenceArray: number[], animationBehavior: AnimationBehavior){
            super(image, animationBehavior);
                        //var image = image
    //var sequenceArray = sequenceArray
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.startX= 0;
    
this.startY= 0;
    
this.drawWidth= this.getImage()!.getWidth();
    
this.drawHeight= this.getImage()!.getHeight();
    
this.circularIndexUtil= CircularIndexUtil.getInstance(this.drawHeight);
    
this.sequenceArray= sequenceArray;
    
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
                        return this.circularIndexUtil!.getSize();

                        ;
    
}


    public setSequence(sequenceArray: number[]){
var sequenceArray = sequenceArray
this.sequenceArray= sequenceArray;
    
}


    public getSequence(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.sequenceArray;
    
}


    public paint(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y
}


    public getStartX(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return startX;
    
}


    public setStartX(startX: number){
var startX = startX
this.startX= startX;
    
}


    public getStartY(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return startY;
    
}


    public setStartY(startY: number){
var startY = startY
this.startY= startY;
    
}


    public getDrawWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return drawWidth;
    
}


    public setDrawWidth(drawWidth: number){
var drawWidth = drawWidth
this.drawWidth= drawWidth;
    
}


    public getDrawHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return drawHeight;
    
}


    public setDrawHeight(drawHeight: number){
var drawHeight = drawHeight
this.drawHeight= drawHeight;
    
}


}
                
            

