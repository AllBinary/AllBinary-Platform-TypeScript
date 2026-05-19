
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Throwable } from '../../../../java/lang/Throwable.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      
import { NullCanvas } from '../../../../javax/microedition/lcdui/NullCanvas.js';
      
import { DisposalUtil } from '../../../../org/allbinary/DisposalUtil.js';
      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
      
import { ImageCopyUtil } from '../../../../org/allbinary/media/image/ImageCopyUtil.js';
      
import { ImageModifierUtil } from '../../../../org/allbinary/media/image/ImageModifierUtil.js';
      
import { ImageRotationUtil } from '../../../../org/allbinary/media/image/ImageRotationUtil.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageBaseRotationAnimation } from './ImageBaseRotationAnimation.js';
import { ModifierBaseProcessor } from './ModifierBaseProcessor.js';
import { ScaleProcessor } from './ScaleProcessor.js';
import { ScaleBaseProcessor } from './ScaleBaseProcessor.js';
import { SetColorProcessor } from './SetColorProcessor.js';
import { ChangeColorProcessor } from './ChangeColorProcessor.js';
import { AlphaProcessor } from './AlphaProcessor.js';

export class AllBinaryJ2SEImageRotationAnimation extends ImageBaseRotationAnimation {
        

    private readonly imageRotationUtil: ImageRotationUtil = ImageRotationUtil.getInstance()!;

    private readonly imageModifierUtil: ImageModifierUtil = ImageModifierUtil.getInstanceOrCreate()!;

    private readonly realOriginalImage: Image

    private readonly originalImageArray: Image[] = new Array(1);

    private readonly twoImages: Image[] = new Array(2);

    private imageToShow: Image

    private bufferedImageIndex: number= 0

    private lastScaleX: number = 1.0;

    private lastScaleY: number = 1.0;

    private scaleX: number = 1.0;

    private scaleY: number = 1.0;

    private maxScaleX: number= 0.0

    private maxScaleY: number= 0.0

    private alphaProcessor: ModifierBaseProcessor = ModifierBaseProcessor.getInstance()!;

    private setColorProcessor: ModifierBaseProcessor = ModifierBaseProcessor.getInstance()!;

    private changeColorProcessor: ModifierBaseProcessor = ModifierBaseProcessor.getInstance()!;

    private scaleProcessor: ScaleBaseProcessor = ScaleProcessor.getInstance()!;
public constructor (originalImage: Image, image: Image, angleInfo: AngleInfo, totalAngle: number, animationBehavior: AnimationBehavior){
            super(image, angleInfo, totalAngle, animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.realOriginalImage= originalImage;
    
this.originalImageArray[0]= originalImage;
    
this.imageToShow= image;
    
this.twoImages[0]= image;
    
this.twoImages[1]= ImageCopyUtil.getInstance()!.createImageForRotation(image);
    
}


    public setBasicColorP(basicColor: BasicColor){

    var changed: boolean = false;
;
    

                        if(this.getBasicColorP() == 
                                    null
                                 || this.getBasicColorP()!.intValue() != basicColor!.intValue())
                        
                                    {
                                    changed= true;
    

                                    }
                                
super.setBasicColorP(basicColor);
    

                        if(changed)
                        
                                    {
                                    this.setColorProcessor= SetColorProcessor.getInstance();
    
this.updateImage();
    

                                    }
                                
}


    public changeBasicColor(basicColor: BasicColor){

    var changed: boolean = false;
;
    

                        if(this.getChangeBasicColor() == 
                                    null
                                 || this.getChangeBasicColor()!.intValue() != basicColor!.intValue())
                        
                                    {
                                    changed= true;
    

                                    }
                                
super.changeBasicColor(basicColor);
    

                        if(changed)
                        
                                    {
                                    this.changeColorProcessor= ChangeColorProcessor.getInstance();
    
this.updateImage();
    

                                    }
                                
}


    public setAlpha(alpha: number){

    var changed: boolean = false;
;
    

                        if(this.alphaP != alpha)
                        
                                    {
                                    changed= true;
    

                                    }
                                
super.setAlpha(alpha);
    

                        if(changed)
                        
                                    {
                                    this.alphaProcessor= AlphaProcessor.getInstance();
    
this.updateImage();
    

                                    }
                                
}


    public setScale(scaleX: number, scaleY: number){
this.scaleX= scaleX;
    
this.scaleY= scaleY;
    

                        if(this.scaleX != this.lastScaleX || this.scaleY != this.lastScaleY)
                        
                                    {
                                    this.scaleProcessor!.update(this.realOriginalImage, this.originalImageArray, this.twoImages, this.bufferedImageIndex, this.scaleX, this.scaleY, this.maxScaleX, this.maxScaleY);
    
this.updateImage();
    

                                    }
                                
this.lastScaleX= this.scaleX;
    
this.lastScaleY= this.scaleY;
    
}


    public setMaxScale(maxScaleX: number, maxScaleY: number){
this.maxScaleX= maxScaleX;
    
this.maxScaleY= maxScaleY;
    
this.scaleProcessor!.update(this.realOriginalImage, this.originalImageArray, this.twoImages, this.bufferedImageIndex, this.scaleX, this.scaleY, this.maxScaleX, this.maxScaleY);
    
this.updateImage();
    
}


    public nextRotation(){
super.nextRotation();
    
this.updateImage();
    
}


    public previousRotation(){
super.previousRotation();
    
this.updateImage();
    
}


    updateImage(){
this.imageRotationUtil!.rotateImage(this.originalImageArray[0]!, this.twoImages[this.bufferedImageIndex]!, this.angleInfo!.getAngle() +90);
    
this.alphaProcessor!.updateAlpha(this.imageModifierUtil, NullCanvas.NULL_IMAGE, this.twoImages[this.bufferedImageIndex]!, 0, this.alphaP);
    
this.setColorProcessor!.updateColor(this.imageModifierUtil, NullCanvas.NULL_IMAGE, this.twoImages[this.bufferedImageIndex]!, 0, this.basicColor);
    
this.changeColorProcessor!.updateColor(this.imageModifierUtil, NullCanvas.NULL_IMAGE, this.twoImages[this.bufferedImageIndex]!, 0, this.changeBasicColorP);
    
this.swap();
    
}


    public setFrame(index: number){
super.setFrame(index);
    
this.updateImage();
    
}


    public swap(){
this.imageToShow= this.twoImages[this.bufferedImageIndex]!;
    

                        if(this.bufferedImageIndex == 0)
                        
                                    {
                                    this.bufferedImageIndex= 1;
    

                                    }
                                
                        else {
                            this.bufferedImageIndex= 0;
    

                        }
                            
}


    public paintXY(graphics: Graphics, x: number, y: number){
graphics.drawImage(this.imageToShow, x, y, this.anchor);
    
}


    public close(){
super.close();
    

    var disposalUtil: DisposalUtil = DisposalUtil.getInstance()!;
;
    

    var size2: number = this.twoImages!.length
                ;
;
    




                        for (
    var index: number = 0;
index < size2; index++)
        {
disposalUtil!.disposeImage(this.twoImages[index]!);
    
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

disposalUtil!.disposeImage(this.realOriginalImage);
    
disposalUtil!.disposeImage(this.imageToShow);
    
}


                //@Throws(Throwable.constructor)
            
    finalize(){
super.finalize();
    

    var disposalUtil: DisposalUtil = DisposalUtil.getInstance()!;
;
    

    var size2: number = this.twoImages!.length
                ;
;
    




                        for (
    var index: number = 0;
index < size2; index++)
        {
disposalUtil!.disposeImage(this.twoImages[index]!);
    
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

disposalUtil!.disposeImage(this.realOriginalImage);
    
disposalUtil!.disposeImage(this.imageToShow);
    
}


}
                
            

