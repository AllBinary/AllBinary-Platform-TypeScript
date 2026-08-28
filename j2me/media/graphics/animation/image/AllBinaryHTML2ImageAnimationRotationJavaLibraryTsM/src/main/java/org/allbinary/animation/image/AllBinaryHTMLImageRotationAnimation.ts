
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
        
//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
//not game specific package import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
      const AngleInfo = globalThis.org.allbinary.math.AngleInfo;

      
//not game specific package import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { ImageCopyUtil } from '../../../../org/allbinary/media/image/ImageCopyUtil.js';
      const ImageCopyUtil = globalThis.org.allbinary.media.image.ImageCopyUtil;

      
//not game specific package import { ImageModifierUtil } from '../../../../org/allbinary/media/image/ImageModifierUtil.js';
      const ImageModifierUtil = globalThis.org.allbinary.media.image.ImageModifierUtil;

      
//not game specific package import { ImageRotationUtil } from '../../../../org/allbinary/media/image/ImageRotationUtil.js';
      const ImageRotationUtil = globalThis.org.allbinary.media.image.ImageRotationUtil;

      
//not game specific package import { PlaynMutableImage } from '../../../../org/microemu/device/playn/PlaynMutableImage.js';
      const PlaynMutableImage = globalThis.org.microemu.device.playn.PlaynMutableImage;

      
//not game specific package import { Canvas } from '../../../../playn/core/Canvas.js';
      const Canvas = globalThis.playn.core.Canvas;

      
//not game specific package import { ImageImpl } from '../../../../playn/core/ImageImpl.js';
      const ImageImpl = globalThis.playn.core.ImageImpl;

      
//not game specific package import { PlayN } from '../../../../playn/core/PlayN.js';
      const PlayN = globalThis.playn.core.PlayN;

      
//not game specific package import { HtmlGraphics } from '../../../../playn/html/HtmlGraphics.js';
      const HtmlGraphics = globalThis.playn.html.HtmlGraphics;

      
//not game specific package import { HtmlImage } from '../../../../playn/html/HtmlImage.js';
      const HtmlImage = globalThis.playn.html.HtmlImage;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageBaseRotationAnimation } from './ImageBaseRotationAnimation.js';
import { AlphaBaseProcessor } from './AlphaBaseProcessor.js';
import { AlphaProcessor } from './AlphaProcessor.js';

export class AllBinaryHTMLImageRotationAnimation extends ImageBaseRotationAnimation {
        

    private readonly imageRotationUtil: ImageRotationUtil = ImageRotationUtil.getInstance()!;

    private readonly imageModifierUtil: ImageModifierUtil = ImageModifierUtil.getInstanceOrCreate()!;

    private readonly originalImage: Image;

    private readonly twoImages: Image[] = new Array(2);

    private readonly canvasSurfaceArray: Canvas[] = new Array(2);

    private imageToShow: Image;

    private bufferedImageIndex: number= 0;

    private alphaProcessor: AlphaBaseProcessor = AlphaBaseProcessor.getInstance()!;

protected constructor (originalImage: Image, image: Image, angleInfo: AngleInfo, totalAngle: number, animationBehavior: AnimationBehavior){
            super(image, angleInfo, totalAngle, animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.originalImage= originalImage;
    
this.imageToShow= image;
    
this.twoImages[0]= image;
    
this.twoImages[1]= ImageCopyUtil.getInstance()!.createImage(image);
    
this.canvasSurfaceArray[0]= this.getCanvasSurface(this.twoImages[0]!);
    
this.canvasSurfaceArray[1]= this.getCanvasSurface(this.twoImages[1]!);
    
}


    public getCanvasSurface(image: Image): Canvas{

    var htmlImage: PlaynMutableImage = image as PlaynMutableImage;;
    

    var canvasImage: ImageImpl = htmlImage!.getImage() as ImageImpl;;
    

    var playN: PlayN = PlayN.getInstance()!;;
    

    var canvas: Canvas = (graphics as HtmlGraphics).get(canvasImage as HtmlImage)!;;
    
canvas.translate(this.originalImage!.getWidth() /2, this.originalImage!.getHeight() /2);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return canvas;
    
}


    public setBasicColorP(basicColor: BasicColor){

    var changed: boolean = false;;
    

                        if(this.getBasicColorP() == 
                                    null
                                 || this.getBasicColorP()!.intValue() != basicColor!.intValue())
                        
                                    {
                                    changed= true;
    

                                    }
                                
super.setBasicColorP(basicColor);
    

                        if(changed)
                        
                                    {
                                    this.updateImage();
    

                                    }
                                
}


    public setAlpha(alpha: number){

    var changed: boolean = false;;
    

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


    public nextRotation(){
super.nextRotation();
    
this.updateImage();
    
}


    public previousRotation(){
super.previousRotation();
    
this.updateImage();
    
}


    updateImage(){

    var canvasSurface: Canvas = this.canvasSurfaceArray[this.bufferedImageIndex]!;;
    
canvasSurface!.save();
    
this.imageRotationUtil!.rotateImageCanvasSurfaceClear(this.originalImage, this.twoImages[this.bufferedImageIndex]!, canvasSurface, this.angleInfo!.getAngle() +90);
    
this.alphaProcessor!.setAlpha(this.imageModifierUtil, this.originalImage, this.twoImages[this.bufferedImageIndex]!, this.alphaP);
    
this.imageRotationUtil!.drawImage(this.originalImage, imageToShow, canvasSurface);
    
canvasSurface!.restore();
    
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


}



