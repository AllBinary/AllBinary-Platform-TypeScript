
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
        
import { Matrix } from '../../../../android/graphics/Matrix.js';
      //not GWT import const Matrix = globalThis.android.graphics.Matrix;

      
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not plain js import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
      const AngleInfo = globalThis.org.allbinary.math.AngleInfo;

      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      //not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { AndroidImageUtil } from '../../../../org/allbinary/media/image/AndroidImageUtil.js';
      //not GWT import const AndroidImageUtil = globalThis.org.allbinary.media.image.AndroidImageUtil;

      
//not plain js import { ImageCopyUtil } from '../../../../org/allbinary/media/image/ImageCopyUtil.js';
      const ImageCopyUtil = globalThis.org.allbinary.media.image.ImageCopyUtil;

      
//not plain js import { ImageModifierUtil } from '../../../../org/allbinary/media/image/ImageModifierUtil.js';
      const ImageModifierUtil = globalThis.org.allbinary.media.image.ImageModifierUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageBaseRotationAnimation } from './ImageBaseRotationAnimation.js';
//not GWT import const ImageBaseRotationAnimation = globalThis.org.allbinary.animation.image.ImageBaseRotationAnimation;

                
export class AllBinaryNoFlickerAndroidImageRotationAnimation extends ImageBaseRotationAnimation {
        

    private readonly imageModifierUtil: ImageModifierUtil = ImageModifierUtil.getInstanceOrCreate()!;

    private readonly androidImageUtil: AndroidImageUtil = AndroidImageUtil.getInstance()!;

    private readonly matrix: Matrix = new Matrix();

    private readonly halfWidth: number;

    private readonly halfHeight: number;

    private readonly increment: number;

    private readonly originalImage: Image;

    private readonly twoImages: Image[] = new Array(2);

    private imageToShow: Image;

    private bufferedImageIndex: number= 0;

protected constructor (originalImage: Image, image: Image, angleInfo: AngleInfo, totalAngle: number, animationBehavior: AnimationBehavior){
            super(image, angleInfo, totalAngle, animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.originalImage= originalImage;
    
this.halfWidth= (image.getWidth()>>1);
    
this.halfHeight= (image.getHeight()>>1);
    
this.increment= (this.angleInfo!.getAngleIncrementInfo()!.getAngleIncrement());
    
this.imageToShow= image;
    
this.twoImages[0]= image;
    
this.twoImages[1]= ImageCopyUtil.getInstance()!.createImage(image);
    
}


    public setBasicColorP(basicColor: BasicColor){

    var changed: boolean = false;;
    

                        if(this.getBasicColorP() == 
                                    null
                                 || this.getBasicColorP()!.intValue() != basicColor!.intValue())
                        
                                    {
                                    this.imageModifierUtil!.setColor(this.originalImage, this.imageToShow, 0, basicColor);
    
changed= true;
    

                                    }
                                
super.setBasicColorP(basicColor);
    

                        if(changed)
                        
                                    {
                                    this.matrix.setRotate(0.0, this.halfWidth, this.halfHeight);
    
this.updateImage();
    

                                    }
                                
}


    public changeBasicColor(basicColor: BasicColor){
this.setBasicColorP(basicColor);
    
}


    public setAlpha(alpha: number){

    var changed: boolean = false;;
    

                        if(this.alphaP != alpha)
                        
                                    {
                                    changed= true;
    

                                    }
                                
super.setAlpha(alpha);
    
this.imageModifierUtil!.setAlpha(this.originalImage, this.imageToShow, 0, this.alphaP);
    

                        if(changed)
                        
                                    {
                                    this.matrix.setRotate(0.0, this.halfWidth, this.halfHeight);
    
this.updateImage();
    

                                    }
                                
}


    public nextRotation(){
super.nextRotation();
    
this.matrix.setRotate(this.increment, this.halfWidth, this.halfHeight);
    
this.updateImage();
    
}


    public previousRotation(){
super.previousRotation();
    
this.matrix.setRotate( -this.increment, this.halfWidth, this.halfHeight);
    
this.updateImage();
    
}


    updateImage(){
this.androidImageUtil!.rotate(this.twoImages[this.bufferedImageIndex]!, originalImage, matrix, imageModifierUtil!.paint);
    
this.swap();
    
}


    public setFrame(index: number){

    var currentFrame: number = this.circularIndexUtil!.getIndex()!;;
    
this.circularIndexUtil!.setIndex(index);
    

    var newFrame: number = this.circularIndexUtil!.getIndex()!;;
    
this.angleInfo!.adjustAngle(newFrame);
    
this.matrix.setRotate((newFrame -currentFrame) *this.increment, this.halfWidth, this.halfHeight);
    
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


}



