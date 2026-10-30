
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
//not GWT import const Image

import { ImageCache } from '../../../../org/allbinary/image/ImageCache.js';
//not GWT import const ImageCache

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

export class ImageScaleUtil
            extends Object
         {
        

    private static readonly instance: ImageScaleUtil = new ImageScaleUtil();

    public static getInstance(): ImageScaleUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageScaleUtil.instance;
    
}


private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public createImage2(imageCache: ImageCache, originalImage: Image, scaleNominatorX: number, scaleDenominatorX: number, scaleNominatorY: number, scaleDenominatorY: number, cached: boolean): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createImage3(imageCache, originalImage, scaleNominatorX, scaleDenominatorX, scaleNominatorY, scaleDenominatorY, cached, true);;
    
}


                //@Throws(Exception.constructor)
            
    public createImage3(imageCache: ImageCache, originalImage: Image, scaleNominatorX: number, scaleDenominatorX: number, scaleNominatorY: number, scaleDenominatorY: number, cached: boolean, mutable: boolean): Image{

    let scaleX: number = scaleNominatorX /scaleDenominatorX;;
    

    let scaleY: number = scaleNominatorY /scaleDenominatorY;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createImage(imageCache, originalImage, scaleX, scaleY, cached);;
    
}


                //@Throws(Exception.constructor)
            
    public createImage(imageCache: ImageCache, originalImage: Image, scaleX: number, scaleY: number, cached: boolean): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createImageInternal(originalImage, scaleX, scaleY);;
    
}


                //@Throws(Exception.constructor)
            
    public createImageInternal(originalImage: Image, scaleX: number, scaleY: number): Image{

    let image: Image = ImageCreationUtil.getInstance()!.createImageWH(globalThis.Math.trunc((originalImage!.getWidth() *scaleX)), globalThis.Math.trunc((originalImage!.getHeight() *scaleY)))!;;
    

                        if(image.isMutable())
                        
                                    {
                                    
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
                            

    let htmlImage: PlaynMutableImage = image as PlaynMutableImage;;
    

    let canvasImage: CanvasImage = htmlImage!.getImage() as CanvasImage;;
    

    let canvasSurface: CanvasSurface = htmlImage!.getCanvasSurface(canvasImage)!;;
    
canvasSurface!.drawImage(originalPlayNImage, 0, 0, image.getWidth(), image.getHeight(), 0, 0, originalImage!.getWidth(), originalImage!.getHeight());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    

                                    }
                                
                        else {
                            


                            throw new Exception("Not Mutable");
                    

                        }
                            
}


}

