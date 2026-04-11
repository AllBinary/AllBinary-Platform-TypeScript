
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

    
import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { AngleInfo } from "../../../../org/allbinary/math/AngleInfo.js";

    
import { AndroidImageUtil } from "../../../../org/allbinary/media/image/AndroidImageUtil.js";

    
import { ImageModifierUtil } from "../../../../org/allbinary/media/image/ImageModifierUtil.js";

    

export class AllBinaryFlickerAndroidImageRotationAnimation extends ImageBaseRotationAnimation {
        

    private readonly imageModifierUtil: ImageModifierUtil = ImageModifierUtil.getInstanceOrCreate()!;
        
        

    private readonly androidImageUtil: AndroidImageUtil = AndroidImageUtil.getInstance()!;
        
        

    private readonly matrix: Matrix = new Matrix();
        
        

    private readonly halfWidth: number

    private readonly halfHeight: number

    private readonly increment: number

    private readonly originalImage: Image
public constructor (originalImage: Image, image: Image, angleInfo: AngleInfo, totalAngle: number, animationBehavior: AnimationBehavior)                        

                            : super(image, angleInfo, totalAngle, animationBehavior){

            super();
                //var originalImage = originalImage
    //var image = image
    //var angleInfo = angleInfo
    //var totalAngle = totalAngle
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.originalImage= originalImage;
    
this.halfWidth= (image.getWidth() shr 1);
    
this.halfHeight= (image.getHeight() shr 1);
    
this.increment= (this.angleInfo!.getAngleIncrementInfo()!.getAngleIncrement()).toShort();
    
}


    public setBasicColorP(basicColor: BasicColor){
    //var basicColor = basicColor

    var changed: boolean = false;
        
        
;
    

                        if(this.getBasicColorP() == 
                                    null
                                 || this.getBasicColorP()!.toInt() != basicColor!.toInt())
                        
                                    {
                                    imageModifierUtil!.setColor(this.originalImage, this.getImage(), 0, basicColor);
    
changed= true;
    

                                    }
                                
super.setBasicColorP(basicColor);
    

                        if(changed)
                        
                                    {
                                    matrix.setRotate(0.0f, this.halfWidth.toFloat(), this.halfHeight.toFloat());
    
this.updateImage();
    

                                    }
                                
}


    public changeBasicColor(basicColor: BasicColor){
    //var basicColor = basicColor
this.setBasicColorP(basicColor);
    
}


    public setAlpha(alpha: number){
    //var alpha = alpha

    var changed: boolean = false;
        
        
;
    

                        if(this.alphaP != alpha)
                        
                                    {
                                    changed= true;
    

                                    }
                                
super.setAlpha(alpha);
    
imageModifierUtil!.setAlpha(this.originalImage, this.getImage(), 0, this.alphaP);
    

                        if(changed)
                        
                                    {
                                    matrix.setRotate(0.0f, this.halfWidth.toFloat(), this.halfHeight.toFloat());
    
this.updateImage();
    

                                    }
                                
}


    public nextRotation(){
super.nextRotation();
    
matrix.setRotate(this.increment.toFloat(), this.halfWidth.toFloat(), this.halfHeight.toFloat());
    
this.updateImage();
    
}


    public previousRotation(){
super.previousRotation();
    
matrix.setRotate( -this.increment.toFloat(), this.halfWidth.toFloat(), this.halfHeight.toFloat());
    
this.updateImage();
    
}


    updateImage(){
androidImageUtil!.rotate(this.getImage(), originalImage, matrix, imageModifierUtil!.paint);
    
}


    public setFrame(index: number){
    //var index = index

    var currentFrame: number = this.circularIndexUtil!.getIndex()!;
        
        
;
    
this.circularIndexUtil!.setIndex(index);
    

    var newFrame: number = this.circularIndexUtil!.getIndex()!;
        
        
;
    
this.angleInfo!.adjustAngle(newFrame);
    
matrix.setRotate((newFrame -currentFrame).toFloat() *increment, this.halfWidth.toFloat(), this.halfHeight.toFloat());
    
this.updateImage();
    
}


}
                
            

