
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
        



import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { Anchor } from "../../../../org/allbinary/graphics/Anchor.js";

    
import { ImageCache } from "../../../../org/allbinary/image/ImageCache.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { PlaynImmutableImage } from "../../../../org/microemu/device/playn/PlaynImmutableImage.js";

    
import { PlaynMutableImage } from "../../../../org/microemu/device/playn/PlaynMutableImage.js";

    
import { CanvasImage } from "../../../../playn/core/CanvasImage.js";

    
import { CanvasSurface } from "../../../../playn/core/CanvasSurface.js";

    

export class ImageScaleUtil
            extends Object
         {
        

    private static readonly instance: ImageScaleUtil = new ImageScaleUtil();
        
        

    public static getInstance(): ImageScaleUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


                @Throws(Exception::class)
            
    public createImage(imageCache: ImageCache, originalImage: Image, scaleNominatorX: number, scaleDenominatorX: number, scaleNominatorY: number, scaleDenominatorY: number, cached: boolean): Image{
    //var imageCache = imageCache
    //var originalImage = originalImage
    //var scaleNominatorX = scaleNominatorX
    //var scaleDenominatorX = scaleDenominatorX
    //var scaleNominatorY = scaleNominatorY
    //var scaleDenominatorY = scaleDenominatorY
    //var cached = cached



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createImage(imageCache, originalImage, scaleNominatorX, scaleDenominatorX, scaleNominatorY, scaleDenominatorY, cached, true);
    
}


                @Throws(Exception::class)
            
    public createImage(imageCache: ImageCache, originalImage: Image, scaleNominatorX: number, scaleDenominatorX: number, scaleNominatorY: number, scaleDenominatorY: number, cached: boolean, mutable: boolean): Image{
    //var imageCache = imageCache
    //var originalImage = originalImage
    //var scaleNominatorX = scaleNominatorX
    //var scaleDenominatorX = scaleDenominatorX
    //var scaleNominatorY = scaleNominatorY
    //var scaleDenominatorY = scaleDenominatorY
    //var cached = cached
    //var mutable = mutable

    var scaleX: number = scaleNominatorX /scaleDenominatorX;
        
        


    var scaleY: number = scaleNominatorY /scaleDenominatorY;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createImage(imageCache, originalImage, scaleX, scaleY, cached);
    
}


                @Throws(Exception::class)
            
    public createImage(imageCache: ImageCache, originalImage: Image, scaleX: number, scaleY: number, cached: boolean): Image{
var imageCache = imageCache
var originalImage = originalImage
var scaleX = scaleX
var scaleY = scaleY
var cached = cached



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createImage(originalImage, scaleX, scaleY);
    
}


                @Throws(Exception::class)
            
    public createImage(originalImage: Image, scaleX: number, scaleY: number): Image{
var originalImage = originalImage
var scaleX = scaleX
var scaleY = scaleY

    var image: Image = ImageCreationUtil.getInstance()!.getInstance((originalImage!.getWidth() *scaleX).toInt(), (originalImage!.getHeight() *scaleY).toInt())!;
        
        


    
                        if(image.isMutable())
                        
                                    {
                                    
    var originalPlayNImage: playn.core.Image = 
                null
            ;
        
        


    
                        if(originalImage!.isMutable())
                        
                                    {
                                    
    var originalHTMLImage: PlaynMutableImage = originalImage as PlaynMutableImage;
        
        

originalPlayNImage= originalHTMLImage!.getImage() as playn.core.Image

                                    }
                                
                        else {
                            
    var originalHTMLImage: PlaynImmutableImage = originalImage as PlaynImmutableImage;
        
        

originalPlayNImage= originalHTMLImage!.getImage() as playn.core.Image

                        }
                            

    var htmlImage: PlaynMutableImage = image as PlaynMutableImage;
        
        


    var canvasImage: CanvasImage = htmlImage!.getImage() as CanvasImage;
        
        


    var canvasSurface: CanvasSurface = htmlImage!.getCanvasSurface(canvasImage)!;
        
        

drawImage(originalPlayNImage, 0, 0, image.getWidth(), image.getHeight(), 0, 0, originalPlayNImage!.width(), originalPlayNImage!.height())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    

                                    }
                                
                        else {
                            


                            throw Exception("Not Mutable")

                        }
                            
}


}
                
            

