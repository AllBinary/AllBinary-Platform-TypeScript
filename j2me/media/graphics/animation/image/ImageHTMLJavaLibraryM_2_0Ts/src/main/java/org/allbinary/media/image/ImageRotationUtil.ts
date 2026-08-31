
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
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Math } from '../../../../java/lang/Math.js';
        
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not plain js import { PlaynImmutableImage } from '../../../../org/microemu/device/playn/PlaynImmutableImage.js';
      const PlaynImmutableImage = globalThis.org.microemu.device.playn.PlaynImmutableImage;

      
//not plain js import { PlaynMutableImage } from '../../../../org/microemu/device/playn/PlaynMutableImage.js';
      const PlaynMutableImage = globalThis.org.microemu.device.playn.PlaynMutableImage;

      
import { Canvas } from '../../../../playn/core/Canvas.js';
      //not GWT import const Canvas = globalThis.playn.core.Canvas;

      
import { ImageImpl } from '../../../../playn/core/ImageImpl.js';
      //not GWT import const ImageImpl = globalThis.playn.core.ImageImpl;

      
import { PlayN } from '../../../../playn/core/PlayN.js';
      //not GWT import const PlayN = globalThis.playn.core.PlayN;

      
import { HtmlGraphics } from '../../../../playn/html/HtmlGraphics.js';
      //not GWT import const HtmlGraphics = globalThis.playn.html.HtmlGraphics;

      
import { HtmlImage } from '../../../../playn/html/HtmlImage.js';
      //not GWT import const HtmlImage = globalThis.playn.html.HtmlImage;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //not plain js import { ImageCreationUtil } from './ImageCreationUtil.js';
const  = globalThis.org.allbinary.media.image.ImageCreationUtil;

                
export class ImageRotationUtil
            extends Object
         {
        

    private static readonly instance: ImageRotationUtil = new ImageRotationUtil();

    public static getInstance(): ImageRotationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageRotationUtil.instance;
    
}


private constructor (){

            super();
        }


    public rotateImage(originalImage: Image, image: Image, totalAngle: number): Image{

                        if(image.isMutable())
                        
                                    {
                                    
    var htmlImage: PlaynMutableImage = image as PlaynMutableImage;;
    

    var canvasImage: ImageImpl = htmlImage!.getImage() as ImageImpl;;
    

    var playN: PlayN = PlayN.getInstance()!;;
    

    var canvas: Canvas = (graphics as HtmlGraphics).get(canvasImage as HtmlImage)!;;
    
canvas.save();
    
canvas.clear();
    
canvas.translate(originalImage!.getWidth() /2, originalImage!.getHeight() /2);
    

    var image2: Image = this.rotateImageCanvasSurface(originalImage, image, canvas, totalAngle)!;;
    
this.drawImage(originalImage, image, canvas);
    
canvas.restore();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image2;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


    public rotateImageCanvasSurfaceClear(originalImage: Image, image: Image, canvasSurface: Canvas, totalAngle: number): Image{

                        if(image.isMutable())
                        
                                    {
                                    canvasSurface!.translate( -originalImage!.getWidth() /2,  -originalImage!.getHeight() /2);
    
canvasSurface!.clear();
    
canvasSurface!.translate(originalImage!.getWidth() /2, originalImage!.getHeight() /2);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rotateImageCanvasSurface(originalImage, image, canvasSurface, totalAngle);;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


    public rotateImageCanvasSurface(originalImage: Image, image: Image, canvasSurface: Canvas, totalAngle: number): Image{

                        if(image.isMutable())
                        
                                    {
                                    canvasSurface!.rotate(Math.toRadians(totalAngle));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


    public drawImage(originalImage: Image, image: Image, canvasSurface: Canvas){

    var originalPlayNImage: playn.core.Image = 
                null
            ;;
    

                        if(originalImage!.isMutable())
                        
                                    {
                                    
    var originalHTMLImage: PlaynMutableImage = originalImage as PlaynMutableImage;;
    
originalPlayNImage= originalHTMLImage!.getImage() as playn.core.Image;
    

                                    }
                                
                        else {
                            
    var originalHTMLImage: PlaynImmutableImage = originalImage as PlaynImmutableImage;;
    
originalPlayNImage= originalHTMLImage!.getImage() as playn.core.Image;
    

                        }
                            
canvasSurface!.draw(originalPlayNImage,  -originalImage!.getWidth() /2,  -originalImage!.getHeight() /2);
    
}


                //@Throws(Exception.constructor)
            
    public createRotatedImage(originalImage: Image, rotationInDegrees: number): Image{

    var image: Image = ImageCreationUtil.getInstance()!.createImageWH(originalImage!.getWidth(), originalImage!.getHeight())!;;
    

    var rotatedImage: Image = this.rotateImage(originalImage, image, rotationInDegrees)!;;
    

                        if(rotatedImage == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("Not Mutable");
                    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rotatedImage;
    
}


}



