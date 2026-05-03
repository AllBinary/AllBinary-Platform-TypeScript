
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
        



            import { Object } from "../../../../java/lang/Object.js";


        
            import { Throwable } from "../../../../java/lang/Throwable.js";
        
            import { Exception } from "../../../../java/lang/Exception.js";
        
import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { NullCanvas } from "../../../../javax/microedition/lcdui/NullCanvas.js";

    
import { DisposalUtil } from "../../../../org/allbinary/DisposalUtil.js";

    
import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { RotationAnimation } from "../../../../org/allbinary/animation/RotationAnimation.js";

    
import { Anchor } from "../../../../org/allbinary/graphics/Anchor.js";

    
import { PrimitiveIntUtil } from "../../../../org/allbinary/logic/math/PrimitiveIntUtil.js";

    
import { AngleInfo } from "../../../../org/allbinary/math/AngleInfo.js";

    
import { ImageModifierUtil } from "../../../../org/allbinary/media/image/ImageModifierUtil.js";

    
import { CircularIndexUtil } from "../../../../org/allbinary/util/CircularIndexUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageArrayBaseRotationAnimation extends RotationAnimation {
        

    private readonly imageModifierUtil: ImageModifierUtil = ImageModifierUtil.getInstanceOrCreate()!;

    private readonly originalImageArray: Image[]

    private imageArray: Image[] = NullCanvas.NULL_IMAGE_ARRAY;

    private currentImage: Image

    private totalFrames: number= 0
public constructor (originalImageArray: Image[], angleInfo: AngleInfo, animationBehavior: AnimationBehavior){
            super(angleInfo, CircularIndexUtil.createInstance(360 /angleInfo!.getAngleIncrementInfo()!.getAngleIncrement()), animationBehavior);
                        //var originalImageArray = originalImageArray
    //var angleInfo = angleInfo
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.originalImageArray= originalImageArray;
    
this.setImageArray(this.imageModifierUtil!.getImageArray(originalImageArray));
    
this.currentImage= this.imageArray[this.circularIndexUtil!.getIndex()]!;
    
}


                //@Throws(Exception.constructor)
            
    public getAnimationSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getSize();;
    
}


    public setAlpha(alpha: number){
    //var alpha = alpha

                        if(this.alphaP != alpha)
                        
                                    {
                                    super.setAlpha(alpha);
    
this.imageModifierUtil!.reset();
    

    var index: number = this.circularIndexUtil!.getIndex()!;
;
    
this.imageModifierUtil!.setAlpha(this.originalImageArray[index]!, this.imageArray[index]!, index, this.alphaP);
    

                                    }
                                
}


    public nextRotation(){
super.nextRotation();
    

    var index: number = this.circularIndexUtil!.getIndex()!;
;
    
this.imageModifierUtil!.setAlpha(this.originalImageArray[index]!, this.imageArray[index]!, index, this.alphaP);
    
this.currentImage= this.imageArray[index]!;
    
}


    public previousRotation(){
super.previousRotation();
    

    var index: number = this.circularIndexUtil!.getIndex()!;
;
    
this.imageModifierUtil!.setAlpha(this.originalImageArray[index]!, this.imageArray[index]!, index, this.alphaP);
    
this.currentImage= this.imageArray[index]!;
    
}


    public setFrame(index2: number){
    //var index2 = index2
super.setFrame(index2);
    

    var index: number = this.circularIndexUtil!.getIndex()!;
;
    
this.imageModifierUtil!.setAlpha(this.originalImageArray[index]!, this.imageArray[index]!, index, this.alphaP);
    
this.currentImage= this.imageArray[index]!;
    
}


    public setSequence(sequence: number[]){
    //var sequence = sequence
}


    public getSequence(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();;
    
}


    setImageArray(imageArray: Image[]){
    //var imageArray = imageArray
this.imageArray= imageArray;
    
this.totalFrames= imageArray!.length;
    
this.circularIndexUtil= CircularIndexUtil.createInstance(this.totalFrames);
    
}


    private anchor: number = Anchor.TOP_LEFT;

    public paintXY(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y
graphics.drawImage(this.currentImage, x, y, anchor);
    
}


    public close(){

    var disposalUtil: DisposalUtil = DisposalUtil.getInstance()!;
;
    

    var size2: number = this.imageArray!.length
                ;
;
    




                        for (
    var index: number = 0;
index < size2; index++)
        {
disposalUtil!.disposeImage(this.imageArray[index]!);
    
}


    var size: number = this.originalImageArray!.length
                ;
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {
disposalUtil!.disposeImage(this.originalImageArray[index]!);
    
}

disposalUtil!.disposeImage(this.currentImage);
    
}


                //@Throws(Throwable.constructor)
            
    finalize(){

    var disposalUtil: DisposalUtil = DisposalUtil.getInstance()!;
;
    

    var size2: number = this.imageArray!.length
                ;
;
    




                        for (
    var index: number = 0;
index < size2; index++)
        {
disposalUtil!.disposeImage(this.imageArray[index]!);
    
}


    var size: number = this.originalImageArray!.length
                ;
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {
disposalUtil!.disposeImage(this.originalImageArray[index]!);
    
}

disposalUtil!.disposeImage(this.currentImage);
    
}


}
                
            

