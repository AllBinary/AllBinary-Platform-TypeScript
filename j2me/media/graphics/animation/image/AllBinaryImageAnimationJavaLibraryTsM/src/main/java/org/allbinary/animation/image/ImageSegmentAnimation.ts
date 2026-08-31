
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
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      //not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
//not plain js import { CircularIndexUtil } from '../../../../org/allbinary/util/CircularIndexUtil.js';
      const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageAnimation } from './ImageAnimation.js';
//not GWT import const ImageAnimation = globalThis.org.allbinary.animation.image.ImageAnimation;

                
export class ImageSegmentAnimation extends ImageAnimation {
        

    private startX: number;

    private startY: number;

    private drawWidth: number;

    private drawHeight: number;

    private circularIndexUtil: CircularIndexUtil;

    private sequenceArray: number[];

protected constructor (image: Image, sequenceArray: number[], animationBehavior: AnimationBehavior){
            super(image, animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.startX= 0;
    
this.startY= 0;
    
this.drawWidth= this.getImage()!.getWidth();
    
this.drawHeight= this.getImage()!.getHeight();
    
this.circularIndexUtil= CircularIndexUtil.createInstance(this.drawHeight);
    
this.sequenceArray= sequenceArray;
    
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
                        return this.circularIndexUtil!.getSize();;
    
}


    public setSequence(sequenceArray: number[]){
this.sequenceArray= sequenceArray;
    
}


    public getSequence(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.sequenceArray;
    
}


    public paintXY(graphics: Graphics, x: number, y: number){
}


    public getStartX(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.startX;
    
}


    public setStartX(startX: number){
this.startX= startX;
    
}


    public getStartY(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.startY;
    
}


    public setStartY(startY: number){
this.startY= startY;
    
}


    public getDrawWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.drawWidth;
    
}


    public setDrawWidth(drawWidth: number){
this.drawWidth= drawWidth;
    
}


    public getDrawHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.drawHeight;
    
}


    public setDrawHeight(drawHeight: number){
this.drawHeight= drawHeight;
    
}


}



