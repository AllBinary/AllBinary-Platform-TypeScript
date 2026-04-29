
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

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ImageCreationUtil } from "./ImageCreationUtil.js";

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


                //@Throws(Error::class)
            
    public createImage2(imageCache: ImageCache, originalImage: Image, scaleNominatorX: number, scaleDenominatorX: number, scaleNominatorY: number, scaleDenominatorY: number, cached: boolean): Image{
    //var imageCache = imageCache
    //var originalImage = originalImage
    //var scaleNominatorX = scaleNominatorX
    //var scaleDenominatorX = scaleDenominatorX
    //var scaleNominatorY = scaleNominatorY
    //var scaleDenominatorY = scaleDenominatorY
    //var cached = cached



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createImage3(imageCache, originalImage, scaleNominatorX, scaleDenominatorX, scaleNominatorY, scaleDenominatorY, cached, true);;
    
}


                //@Throws(Error::class)
            
    public createImage3(imageCache: ImageCache, originalImage: Image, scaleNominatorX: number, scaleDenominatorX: number, scaleNominatorY: number, scaleDenominatorY: number, cached: boolean, mutable: boolean): Image{
    //var imageCache = imageCache
    //var originalImage = originalImage
    //var scaleNominatorX = scaleNominatorX
    //var scaleDenominatorX = scaleDenominatorX
    //var scaleNominatorY = scaleNominatorY
    //var scaleDenominatorY = scaleDenominatorY
    //var cached = cached
    //var mutable = mutable

    var scaleX: number = scaleNominatorX /scaleDenominatorX;
;
    

    var scaleY: number = scaleNominatorY /scaleDenominatorY;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createImage(imageCache, originalImage, scaleX, scaleY, cached);;
    
}


                //@Throws(Error::class)
            
    public createImage(imageCache: ImageCache, originalImage: Image, scaleX: number, scaleY: number, cached: boolean): Image{
var imageCache = imageCache
var originalImage = originalImage
var scaleX = scaleX
var scaleY = scaleY
var cached = cached



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createImageInternal(originalImage, scaleX, scaleY);;
    
}


                //@Throws(Error::class)
            
    public createImageInternal(originalImage: Image, scaleX: number, scaleY: number): Image{
var originalImage = originalImage
var scaleX = scaleX
var scaleY = scaleY

    var image: Image = ImageCreationUtil.getInstance()!.getInstance(Math.round(originalImage!.getWidth() *scaleX), Math.round(originalImage!.getHeight() *scaleY))!;
;
    

                        if(image.isMutable())
                        
                                    {
                                    
    var originalPlayNImage: playn.core.Image = 
                null
            ;
;
    

                        if(originalImage!.isMutable())
                        
                                    {
                                    
    var originalHTMLImage: PlaynMutableImage =  as PlaynMutableImageoriginalImage;
;
    
originalPlayNImage=  as playn.core.ImageoriginalHTMLImage!.getImage();;
    

                                    }
                                
                        else {
                            
    var originalHTMLImage: PlaynImmutableImage =  as PlaynImmutableImageoriginalImage;
;
    
originalPlayNImage=  as playn.core.ImageoriginalHTMLImage!.getImage();;
    

                        }
                            

    var htmlImage: PlaynMutableImage =  as PlaynMutableImageimage;
;
    

    var canvasImage: CanvasImage =  as CanvasImagehtmlImage!.getImage();;
;
    

    var canvasSurface: CanvasSurface = htmlImage!.getCanvasSurface(canvasImage)!;
;
    
canvasSurface!.drawImage(originalPlayNImage, 0, 0, image.getWidth(), image.getHeight(), 0, 0, originalPlayNImage!.width(), originalPlayNImage!.height());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    

                                    }
                                
                        else {
                            


                            throw new Error("Not Mutable");
                    

                        }
                            
}


}
                
            

