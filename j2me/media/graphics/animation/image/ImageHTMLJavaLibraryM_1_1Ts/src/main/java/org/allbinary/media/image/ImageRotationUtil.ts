
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
        
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image

import { PlaynImmutableImage } from '../../../../org/microemu/device/playn/PlaynImmutableImage.js';
//not GWT import const PlaynImmutableImage

import { PlaynMutableImage } from '../../../../org/microemu/device/playn/PlaynMutableImage.js';
//not GWT import const PlaynMutableImage

//not plain js import { CanvasImage } 
const CanvasImage = globalThis.playn.core.CanvasImage;
type CanvasImage<T = any, U = any> = typeof CanvasImage extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CanvasImage;

//not plain js import { CanvasSurface } 
const CanvasSurface = globalThis.playn.core.CanvasSurface;
type CanvasSurface<T = any, U = any> = typeof CanvasSurface extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CanvasSurface;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageCreationUtil } from './ImageCreationUtil.js';
//not GWT import - same folder const ImageCreationUtil

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
                                    
    let htmlImage: PlaynMutableImage = image as PlaynMutableImage;;
    

    let canvasImage: CanvasImage = htmlImage!.getImage() as CanvasImage;;
    

    let canvasSurface: CanvasSurface = htmlImage!.getCanvasSurface(canvasImage)!;;
    
canvasSurface!.translate(originalImage!.getWidth() /2, originalImage!.getHeight() /2);
    

    let image2: Image = this.rotateImageCanvasSurface(originalImage, image, canvasSurface, totalAngle)!;;
    
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

    let originalPlayNImage: playn.core.Image = 
                null
            ;;
    

                        if(originalImage!.isMutable())
                        
                                    {
                                    
    let originalHTMLImage: PlaynMutableImage = originalImage as PlaynMutableImage;;
    
originalPlayNImage= originalHTMLImage!.getImage() as playn.core.Image;
    

                                    }
                                
                        else {
                            
    let originalHTMLImage: PlaynImmutableImage = originalImage as PlaynImmutableImage;;
    
originalPlayNImage= originalHTMLImage!.getImage() as playn.core.Image;
    

                        }
                            
canvasSurface!.drawImage(originalPlayNImage,  -originalImage!.getWidth() /2,  -originalImage!.getHeight() /2);
    
}


                //@Throws(Exception.constructor)
            
    public createRotatedImage(originalImage: Image, rotationInDegrees: number): Image{

    let image: Image = ImageCreationUtil.getInstance()!.createImageWH(originalImage!.getWidth(), originalImage!.getHeight())!;;
    

    let rotatedImage: Image = this.rotateImage(originalImage, image, rotationInDegrees)!;;
    

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

