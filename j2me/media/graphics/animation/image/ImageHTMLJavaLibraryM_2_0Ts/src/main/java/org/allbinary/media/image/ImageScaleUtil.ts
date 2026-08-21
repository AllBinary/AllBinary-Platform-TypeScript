
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
      
import { ImageCache } from '../../../../org/allbinary/image/ImageCache.js';
      
import { PlaynImmutableImage } from '../../../../org/microemu/device/playn/PlaynImmutableImage.js';
      
import { PlaynMutableImage } from '../../../../org/microemu/device/playn/PlaynMutableImage.js';
      
import { Canvas } from '../../../../playn/core/Canvas.js';
      
import { ImageImpl } from '../../../../playn/core/ImageImpl.js';
      
import { PlayN } from '../../../../playn/core/PlayN.js';
      
import { HtmlGraphics } from '../../../../playn/html/HtmlGraphics.js';
      
import { HtmlImage } from '../../../../playn/html/HtmlImage.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageCreationUtil } from './ImageCreationUtil.js';

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

    var scaleX: number = scaleNominatorX /scaleDenominatorX;;
    

    var scaleY: number = scaleNominatorY /scaleDenominatorY;;
    



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

    var image: Image = ImageCreationUtil.getInstance()!.createImageWH(Math.round((originalImage!.getWidth() *scaleX)), Math.round((originalImage!.getHeight() *scaleY)))!;;
    

                        if(image.isMutable())
                        
                                    {
                                    
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
                            

    var htmlImage: PlaynMutableImage = image as PlaynMutableImage;;
    

    var canvasImage: ImageImpl = htmlImage!.getImage() as ImageImpl;;
    

    var playN: PlayN = PlayN.getInstance()!;;
    

    var canvas: Canvas = (graphics as HtmlGraphics).get(canvasImage as HtmlImage)!;;
    
canvas.draw(originalPlayNImage, 0, 0, image.getWidth(), image.getHeight(), 0, 0, originalImage!.getWidth(), originalImage!.getHeight());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    

                                    }
                                
                        else {
                            


                            throw new Exception("Not Mutable");
                    

                        }
                            
}


}
                
            

