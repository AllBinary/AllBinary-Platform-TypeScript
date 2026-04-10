
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

    
import { AngleInfo } from "../../../../org/allbinary/math/AngleInfo.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { ImageCopyUtil } from "../../../../org/allbinary/media/image/ImageCopyUtil.js";

    
import { ImageCreationUtil } from "../../../../org/allbinary/media/image/ImageCreationUtil.js";

    
import { ImageModifierUtil } from "../../../../org/allbinary/media/image/ImageModifierUtil.js";

    
import { ImageRotationUtil } from "../../../../org/allbinary/media/image/ImageRotationUtil.js";

    
import { PlaynMutableImage } from "../../../../org/microemu/device/playn/PlaynMutableImage.js";

    
import { CanvasImage } from "../../../../playn/core/CanvasImage.js";

    
import { CanvasSurface } from "../../../../playn/core/CanvasSurface.js";

    

export class AllBinaryHTMLImageRotationAnimation extends ImageBaseRotationAnimation {
        

    private readonly imageRotationUtil: ImageRotationUtil = ImageRotationUtil.getInstance()!;
        
        

    private readonly imageModifierUtil: ImageModifierUtil = ImageModifierUtil.getInstanceOrCreate()!;
        
        

    private readonly originalImage: Image

    private readonly twoImages: Image[] = new Array(2);
        
        

    private readonly canvasSurfaceArray: CanvasSurface[] = new Array(2);
        
        

    private imageToShow: Image

    private bufferedImageIndex: number= 0

    private alphaProcessor: AlphaBaseProcessor = AlphaBaseProcessor.getInstance()!;
        
        
protected constructor (originalImage: Image, image: Image, angleInfo: AngleInfo, totalAngle: number, animationBehavior: AnimationBehavior)                        

                            : super(image, angleInfo, totalAngle, animationBehavior){

            super();
                //var originalImage = originalImage
    //var image = image
    //var angleInfo = angleInfo
    //var totalAngle = totalAngle
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.originalImage= originalImage
this.imageToShow= image
this.twoImages[0]= image
this.twoImages[1]= ImageCopyUtil.getInstance()!.createImage(image)
this.canvasSurfaceArray[0]= this.getCanvasSurface(this.twoImages[0]!)
this.canvasSurfaceArray[1]= this.getCanvasSurface(this.twoImages[1]!)
}


    public getCanvasSurface(image: Image): CanvasSurface{
    //var image = image

    var htmlImage: PlaynMutableImage = image as PlaynMutableImage;
        
        


    var canvasImage: CanvasImage = htmlImage!.getImage() as CanvasImage;
        
        


    var canvasSurface: CanvasSurface = htmlImage!.getCanvasSurface(canvasImage)!;
        
        

canvasSurface!.translate(originalImage!.getWidth() /2, originalImage!.getHeight() /2)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return canvasSurface;
    
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
                                
super.setBasicColorP(basicColor)

                        if(changed)
                        
                                    {
                                    this.this.updateImage()

                                    }
                                
}


    public setAlpha(alpha: number){
    //var alpha = alpha

    var changed: boolean = false;
        
        


                        if(this.alphaP != alpha)
                        
                                    {
                                    changed= true

                                    }
                                
super.setAlpha(alpha)

                        if(changed)
                        
                                    {
                                    this.alphaProcessor= AlphaProcessor.getInstance()
this.this.updateImage()

                                    }
                                
}


    public nextRotation(){
super.nextRotation()
this.this.updateImage()
}


    public previousRotation(){
super.previousRotation()
this.this.updateImage()
}


    updateImage(){

    var canvasSurface: CanvasSurface = this.canvasSurfaceArray[this.bufferedImageIndex]!;
        
        

canvasSurface!.save()
this.imageRotationUtil!.rotateImageClear(originalImage, this.twoImages[this.bufferedImageIndex]!, canvasSurface, this.angleInfo!.getAngle() +90)
this.alphaProcessor!.setAlpha(imageModifierUtil, this.originalImage, this.twoImages[this.bufferedImageIndex]!, this.alphaP)
this.imageRotationUtil!.drawImage(originalImage, imageToShow, canvasSurface)
canvasSurface!.restore()
this.this.swap()
}


    public setFrame(index: number){
    //var index = index
super.setFrame(index)
this.this.updateImage()
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
var graphics = graphics
var x = x
var y = y
graphics.drawImage(this.imageToShow, x, y, anchor)
}


}
                
            

