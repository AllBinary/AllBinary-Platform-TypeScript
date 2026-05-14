
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
        
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      
import { PlaynImmutableImage } from '../../../../org/microemu/device/playn/PlaynImmutableImage.js';
      
import { PlaynMutableImage } from '../../../../org/microemu/device/playn/PlaynMutableImage.js';
      
import { CanvasImage } from '../../../../playn/core/CanvasImage.js';
      
import { CanvasSurface } from '../../../../playn/core/CanvasSurface.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Math } from './Math.js';
import { ImageCreationUtil } from './ImageCreationUtil.js';

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
    //var originalImage = originalImage
    //var image = image
    //var totalAngle = totalAngle

                        if(image.isMutable())
                        
                                    {
                                    
    var htmlImage: PlaynMutableImage = image as PlaynMutableImage;
;
    

    var canvasImage: CanvasImage = htmlImage!.getImage() as CanvasImage;
;
    

    var canvasSurface: CanvasSurface = htmlImage!.getCanvasSurface(canvasImage)!;
;
    
canvasSurface!.translate(originalImage!.getWidth() /2, originalImage!.getHeight() /2);
    

    var image2: Image = this.rotateImageCanvasSurface(originalImage, image, canvasSurface, totalAngle)!;
;
    
this.drawImage(originalImage, image, canvasSurface);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image2;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


    public rotateImageCanvasSurfaceClear(originalImage: Image, image: Image, canvasSurface: CanvasSurface, totalAngle: number): Image{
    //var originalImage = originalImage
    //var image = image
    //var canvasSurface = canvasSurface
    //var totalAngle = totalAngle

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


    public rotateImageCanvasSurface(originalImage: Image, image: Image, canvasSurface: CanvasSurface, totalAngle: number): Image{
    //var originalImage = originalImage
    //var image = image
    //var canvasSurface = canvasSurface
    //var totalAngle = totalAngle

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


    public drawImage(originalImage: Image, image: Image, canvasSurface: CanvasSurface){
    //var originalImage = originalImage
    //var image = image
    //var canvasSurface = canvasSurface

    var originalPlayNImage: playn.core.Image = 
                null
            ;
;
    

                        if(originalImage!.isMutable())
                        
                                    {
                                    
    var originalHTMLImage: PlaynMutableImage = originalImage as PlaynMutableImage;
;
    
originalPlayNImage= originalHTMLImage!.getImage() as playn.core.Image;
    

                                    }
                                
                        else {
                            
    var originalHTMLImage: PlaynImmutableImage = originalImage as PlaynImmutableImage;
;
    
originalPlayNImage= originalHTMLImage!.getImage() as playn.core.Image;
    

                        }
                            
canvasSurface!.drawImage(originalPlayNImage,  -originalImage!.getWidth() /2,  -originalImage!.getHeight() /2);
    
}


                //@Throws(Exception.constructor)
            
    public createRotatedImage(originalImage: Image, rotationInDegrees: number): Image{
    //var originalImage = originalImage
    //var rotationInDegrees = rotationInDegrees

    var image: Image = ImageCreationUtil.getInstance()!.createImageWH(originalImage!.getWidth(), originalImage!.getHeight())!;
;
    

    var rotatedImage: Image = this.rotateImage(originalImage, image, rotationInDegrees)!;
;
    

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
                
            

