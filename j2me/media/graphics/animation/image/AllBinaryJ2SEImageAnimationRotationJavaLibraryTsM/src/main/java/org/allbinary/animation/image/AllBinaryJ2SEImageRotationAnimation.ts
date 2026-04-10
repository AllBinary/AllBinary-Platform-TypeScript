
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

    
import { DisposalUtil } from "../../../../org/allbinary/DisposalUtil.js";

    
import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { AngleInfo } from "../../../../org/allbinary/math/AngleInfo.js";

    
import { ImageCopyUtil } from "../../../../org/allbinary/media/image/ImageCopyUtil.js";

    
import { ImageModifierUtil } from "../../../../org/allbinary/media/image/ImageModifierUtil.js";

    
import { ImageRotationUtil } from "../../../../org/allbinary/media/image/ImageRotationUtil.js";

    

export class AllBinaryJ2SEImageRotationAnimation extends ImageBaseRotationAnimation {
        

    private readonly imageRotationUtil: ImageRotationUtil = ImageRotationUtil.getInstance()!;
        
        

    private readonly imageModifierUtil: ImageModifierUtil = ImageModifierUtil.getInstanceOrCreate()!;
        
        

    private readonly realOriginalImage: Image

    private readonly originalImageArray: Image[] = new Array(1);
        
        

    private readonly twoImages: Image[] = new Array(2);
        
        

    private imageToShow: Image

    private bufferedImageIndex: number= 0

    private lastScaleX: number = 1.0f;
        
        

    private lastScaleY: number = 1.0f;
        
        

    private scaleX: number = 1.0f;
        
        

    private scaleY: number = 1.0f;
        
        

    private maxScaleX: number= 0.0f

    private maxScaleY: number= 0.0f

    private alphaProcessor: ModifierBaseProcessor = ModifierBaseProcessor.getInstance()!;
        
        

    private setColorProcessor: ModifierBaseProcessor = ModifierBaseProcessor.getInstance()!;
        
        

    private changeColorProcessor: ModifierBaseProcessor = ModifierBaseProcessor.getInstance()!;
        
        

    private scaleProcessor: ScaleBaseProcessor = ScaleProcessor.getInstance()!;
        
        
public constructor (originalImage: Image, image: Image, angleInfo: AngleInfo, totalAngle: number, animationBehavior: AnimationBehavior)                        

                            : super(image, angleInfo, totalAngle, animationBehavior){

            super();
                //var originalImage = originalImage
    //var image = image
    //var angleInfo = angleInfo
    //var totalAngle = totalAngle
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.realOriginalImage= originalImage
this.originalImageArray[0]= originalImage
this.imageToShow= image
this.twoImages[0]= image
this.twoImages[1]= ImageCopyUtil.getInstance()!.createImageForRotation(image)
}


    public setBasicColorP(basicColor: BasicColor){
    //var basicColor = basicColor

    var changed: boolean = false;
        
        


    
                        if(this.getBasicColorP() == 
                                    null
                                 || this.getBasicColorP()!.toInt() != basicColor!.toInt())
                        
                                    {
                                    changed= true

                                    }
                                
setBasicColorP(basicColor)

    
                        if(changed)
                        
                                    {
                                    this.setColorProcessor= SetColorProcessor.getInstance()
this.updateImage()

                                    }
                                
}


    public changeBasicColor(basicColor: BasicColor){
    //var basicColor = basicColor

    var changed: boolean = false;
        
        


    
                        if(this.getChangeBasicColor() == 
                                    null
                                 || this.getChangeBasicColor()!.toInt() != basicColor!.toInt())
                        
                                    {
                                    changed= true

                                    }
                                
changeBasicColor(basicColor)

    
                        if(changed)
                        
                                    {
                                    this.changeColorProcessor= ChangeColorProcessor.getInstance()
this.updateImage()

                                    }
                                
}


    public setAlpha(alpha: number){
    //var alpha = alpha

    var changed: boolean = false;
        
        


    
                        if(this.alphaP != alpha)
                        
                                    {
                                    changed= true

                                    }
                                
setAlpha(alpha)

    
                        if(changed)
                        
                                    {
                                    this.alphaProcessor= AlphaProcessor.getInstance()
this.updateImage()

                                    }
                                
}


    public setScale(scaleX: number, scaleY: number){
    //var scaleX = scaleX
    //var scaleY = scaleY
this.scaleX= scaleX
this.scaleY= scaleY

    
                        if(this.scaleX != this.lastScaleX || this.scaleY != this.lastScaleY)
                        
                                    {
                                    update(this.realOriginalImage, this.originalImageArray, this.twoImages, this.bufferedImageIndex, this.scaleX, this.scaleY, this.maxScaleX, this.maxScaleY)
this.updateImage()

                                    }
                                
this.lastScaleX= this.scaleX
this.lastScaleY= this.scaleY
}


    public setMaxScale(maxScaleX: number, maxScaleY: number){
    //var maxScaleX = maxScaleX
    //var maxScaleY = maxScaleY
this.maxScaleX= maxScaleX
this.maxScaleY= maxScaleY
update(this.realOriginalImage, this.originalImageArray, this.twoImages, this.bufferedImageIndex, this.scaleX, this.scaleY, this.maxScaleX, this.maxScaleY)
this.updateImage()
}


    public nextRotation(){
nextRotation()
this.updateImage()
}


    public previousRotation(){
previousRotation()
this.updateImage()
}


    updateImage(){
rotateImage(this.originalImageArray[0]!, this.twoImages[this.bufferedImageIndex]!, this.angleInfo!.getAngle() +90)
update(imageModifierUtil, NullCanvas.NULL_IMAGE, this.twoImages[this.bufferedImageIndex]!, 0, this.alphaP)
update(imageModifierUtil, NullCanvas.NULL_IMAGE, this.twoImages[this.bufferedImageIndex]!, 0, this.basicColor)
update(imageModifierUtil, NullCanvas.NULL_IMAGE, this.twoImages[this.bufferedImageIndex]!, 0, this.changeBasicColorP)
this.swap()
}


    public setFrame(index: number){
    //var index = index
setFrame(index)
this.updateImage()
}


    public swap(){
this.imageToShow= this.twoImages[this.bufferedImageIndex]!

    
                        if(this.bufferedImageIndex == 0)
                        
                                    {
                                    this.bufferedImageIndex= 1

                                    }
                                
                        else {
                            this.bufferedImageIndex= 0

                        }
                            
}


    public paint(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y
drawImage(this.imageToShow, x, y, anchor)
}


    public close(){
close()

    var disposalUtil: DisposalUtil = DisposalUtil.getInstance()!;
        
        


    var size2: number = this.twoImages!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size2; index++)
        {
dispose(this.twoImages[index]!)
}


    var size: number = this.originalImageArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
dispose(this.originalImageArray[index]!)
}

dispose(this.realOriginalImage)
dispose(this.imageToShow)
}


                @Throws(Throwable::class)
            
    finalize(){
finalize()

    var disposalUtil: DisposalUtil = DisposalUtil.getInstance()!;
        
        


    var size2: number = this.twoImages!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size2; index++)
        {
dispose(this.twoImages[index]!)
}


    var size: number = this.originalImageArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
dispose(this.originalImageArray[index]!)
}

dispose(this.realOriginalImage)
dispose(this.imageToShow)
}


}
                
            

