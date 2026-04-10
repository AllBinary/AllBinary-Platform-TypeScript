
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
        



import { Matrix } from "../../../../android/graphics/Matrix.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { AngleInfo } from "../../../../org/allbinary/math/AngleInfo.js";

    
import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { AndroidImageUtil } from "../../../../org/allbinary/media/image/AndroidImageUtil.js";

    
import { ImageCopyUtil } from "../../../../org/allbinary/media/image/ImageCopyUtil.js";

    
import { ImageModifierUtil } from "../../../../org/allbinary/media/image/ImageModifierUtil.js";

    

export class AllBinaryNoFlickerAndroidImageRotationAnimation extends ImageBaseRotationAnimation {
        

    private readonly imageModifierUtil: ImageModifierUtil = ImageModifierUtil.getInstanceOrCreate()!;
        
        

    private readonly androidImageUtil: AndroidImageUtil = AndroidImageUtil.getInstance()!;
        
        

    private readonly matrix: Matrix = new Matrix();
        
        

    private readonly halfWidth: number

    private readonly halfHeight: number

    private readonly increment: number

    private readonly originalImage: Image

    private readonly twoImages: Image[] = new Array(2);
        
        

    private imageToShow: Image

    private bufferedImageIndex: number= 0
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
this.halfWidth= (image.getWidth() shr 1)
this.halfHeight= (image.getHeight() shr 1)
this.increment= (this.angleInfo!.getAngleIncrementInfo()!.getAngleIncrement()).toShort()
this.imageToShow= image
this.twoImages[0]= image
this.twoImages[1]= ImageCopyUtil.getInstance()!.createImage(image)
}


    public setBasicColorP(basicColor: BasicColor){
    //var basicColor = basicColor

    var changed: boolean = false;
        
        


    
                        if(this.getBasicColorP() == 
                                    null
                                 || this.getBasicColorP()!.toInt() != basicColor!.toInt())
                        
                                    {
                                    setColor(this.originalImage, this.imageToShow, 0, basicColor)
changed= true

                                    }
                                
setBasicColorP(basicColor)

    
                        if(changed)
                        
                                    {
                                    setRotate(0.0f, this.halfWidth.toFloat(), this.halfHeight.toFloat())
this.updateImage()

                                    }
                                
}


    public changeBasicColor(basicColor: BasicColor){
    //var basicColor = basicColor
this.setBasicColorP(basicColor)
}


    public setAlpha(alpha: number){
    //var alpha = alpha

    var changed: boolean = false;
        
        


    
                        if(this.alphaP != alpha)
                        
                                    {
                                    changed= true

                                    }
                                
setAlpha(alpha)
setAlpha(this.originalImage, this.imageToShow, 0, this.alphaP)

    
                        if(changed)
                        
                                    {
                                    setRotate(0.0f, this.halfWidth.toFloat(), this.halfHeight.toFloat())
this.updateImage()

                                    }
                                
}


    public nextRotation(){
nextRotation()
setRotate(this.increment.toFloat(), this.halfWidth.toFloat(), this.halfHeight.toFloat())
this.updateImage()
}


    public previousRotation(){
previousRotation()
setRotate( -this.increment.toFloat(), this.halfWidth.toFloat(), this.halfHeight.toFloat())
this.updateImage()
}


    updateImage(){
rotate(this.twoImages[this.bufferedImageIndex]!, originalImage, matrix, imageModifierUtil!.paint)
this.swap()
}


    public setFrame(index: number){
    //var index = index

    var currentFrame: number = this.circularIndexUtil!.getIndex()!;
        
        

setIndex(index)

    var newFrame: number = this.circularIndexUtil!.getIndex()!;
        
        

adjustAngle(newFrame)
setRotate((newFrame -currentFrame).toFloat() *increment, this.halfWidth.toFloat(), this.halfHeight.toFloat())
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
var graphics = graphics
var x = x
var y = y
drawImage(this.imageToShow, x, y, anchor)
}


}
                
            

