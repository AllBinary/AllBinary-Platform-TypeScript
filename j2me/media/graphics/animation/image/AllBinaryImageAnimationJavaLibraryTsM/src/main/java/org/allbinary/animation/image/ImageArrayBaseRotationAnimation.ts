
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
        
//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
      const NullImage = globalThis.javax.microedition.lcdui.NullImage;

      
//not game specific package import { DisposalUtil } from '../../../../org/allbinary/DisposalUtil.js';
      const DisposalUtil = globalThis.org.allbinary.DisposalUtil;

      
//not game specific package import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
//not game specific package import { RotationAnimation } from '../../../../org/allbinary/animation/RotationAnimation.js';
      const RotationAnimation = globalThis.org.allbinary.animation.RotationAnimation;

      
//not game specific package import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
      const Anchor = globalThis.org.allbinary.graphics.Anchor;

      
//not game specific package import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
      const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;

      
//not game specific package import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
      const AngleInfo = globalThis.org.allbinary.math.AngleInfo;

      
//not game specific package import { ImageModifierUtil } from '../../../../org/allbinary/media/image/ImageModifierUtil.js';
      const ImageModifierUtil = globalThis.org.allbinary.media.image.ImageModifierUtil;

      
//not game specific package import { CircularIndexUtil } from '../../../../org/allbinary/util/CircularIndexUtil.js';
      const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageArrayBaseRotationAnimation extends RotationAnimation {
        

    private readonly imageModifierUtil: ImageModifierUtil = ImageModifierUtil.getInstanceOrCreate()!;

    private readonly originalImageArray: Image[];

    private imageArray: Image[] = NullImage.NULL_IMAGE_ARRAY;

    private currentImage: Image;

    private totalFrames: number= 0;

public constructor (originalImageArray: Image[], angleInfo: AngleInfo, animationBehavior: AnimationBehavior){
            super(angleInfo, CircularIndexUtil.createInstance(360 /angleInfo!.getAngleIncrementInfo()!.getAngleIncrement()), animationBehavior);
                    

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

                        if(this.alphaP != alpha)
                        
                                    {
                                    super.setAlpha(alpha);
    
this.imageModifierUtil!.reset();
    

    var index: number = this.circularIndexUtil!.getIndex()!;;
    
this.imageModifierUtil!.setAlpha(this.originalImageArray[index]!, this.imageArray[index]!, index, this.alphaP);
    

                                    }
                                
}


    public nextRotation(){
super.nextRotation();
    

    var index: number = this.circularIndexUtil!.getIndex()!;;
    
this.imageModifierUtil!.setAlpha(this.originalImageArray[index]!, this.imageArray[index]!, index, this.alphaP);
    
this.currentImage= this.imageArray[index]!;
    
}


    public previousRotation(){
super.previousRotation();
    

    var index: number = this.circularIndexUtil!.getIndex()!;;
    
this.imageModifierUtil!.setAlpha(this.originalImageArray[index]!, this.imageArray[index]!, index, this.alphaP);
    
this.currentImage= this.imageArray[index]!;
    
}


    public setFrame(index2: number){
super.setFrame(index2);
    

    var index: number = this.circularIndexUtil!.getIndex()!;;
    
this.imageModifierUtil!.setAlpha(this.originalImageArray[index]!, this.imageArray[index]!, index, this.alphaP);
    
this.currentImage= this.imageArray[index]!;
    
}


    public setSequence(sequence: number[]){
}


    public getSequence(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();;
    
}


    setImageArray(imageArray: Image[]){
this.imageArray= imageArray;
    
this.totalFrames= imageArray!.length;
    
this.circularIndexUtil= CircularIndexUtil.createInstance(this.totalFrames);
    
}


    private anchor: number = Anchor.TOP_LEFT;

    public paintXY(graphics: Graphics, x: number, y: number){
graphics.drawImage(this.currentImage, x, y, this.anchor);
    
}


    public close(){

    var disposalUtil: DisposalUtil = DisposalUtil.getInstance()!;;
    

    var size2: number = this.imageArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size2; index++)
        {
disposalUtil!.disposeImage(this.imageArray[index]!);
    
}


    var size: number = this.originalImageArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
disposalUtil!.disposeImage(this.originalImageArray[index]!);
    
}

disposalUtil!.disposeImage(this.currentImage);
    
}


                //@Throws(Throwable.constructor)
            
    finalize(){

    var disposalUtil: DisposalUtil = DisposalUtil.getInstance()!;;
    

    var size2: number = this.imageArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size2; index++)
        {
disposalUtil!.disposeImage(this.imageArray[index]!);
    
}


    var size: number = this.originalImageArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
disposalUtil!.disposeImage(this.originalImageArray[index]!);
    
}

disposalUtil!.disposeImage(this.currentImage);
    
}


}



