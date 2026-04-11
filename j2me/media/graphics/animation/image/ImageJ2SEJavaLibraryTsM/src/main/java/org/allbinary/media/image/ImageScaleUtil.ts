
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
        



import { Graphics2D } from "../../../../java/awt/Graphics2D.js";

    
import { AffineTransform } from "../../../../java/awt/geom/AffineTransform.js";

    
import { BufferedImage } from "../../../../java/awt/image/BufferedImage.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { ImageCache } from "../../../../org/allbinary/image/ImageCache.js";

    

export class ImageScaleUtil
            extends Object
         {
        

    private static readonly instance: ImageScaleUtil = new ImageScaleUtil();
        
        

    public static getInstance(): ImageScaleUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly imageUtil: ImageUtil = ImageUtil.getInstance()!;
        
        

    private readonly imageJ2SEUtil: ImageJ2SEUtil = ImageJ2SEUtil.getInstance()!;
        
        

    private readonly imageCreationUtil: ImageCreationUtil = ImageCreationUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            
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

                        ;
    
}


                //@Throws(Error::class)
            
    public createImage(imageCache: ImageCache, originalImage: Image, scaleNominatorX: number, scaleDenominatorX: number, scaleNominatorY: number, scaleDenominatorY: number, cached: boolean, mutable: boolean): Image{
    //var imageCache = imageCache
    //var originalImage = originalImage
    //var scaleNominatorX = scaleNominatorX
    //var scaleDenominatorX = scaleDenominatorX
    //var scaleNominatorY = scaleNominatorY
    //var scaleDenominatorY = scaleDenominatorY
    //var cached = cached
    //var mutable = mutable

    var width: number = originalImage!.getWidth()!;
        
        
;
    

    var height: number = originalImage!.getHeight()!;
        
        
;
    

    var scaleX: number = scaleNominatorX /scaleDenominatorX;
        
        
;
    

    var scaleY: number = scaleNominatorY /scaleDenominatorY;
        
        
;
    

    var image: Image
;
    

                        if(cached)
                        
                                    {
                                    image= imageCache!.get(this.constructor.name.toString()!, (width *scaleX).toInt(), (height *scaleY).toInt());
    

                                    }
                                
                        else {
                            image= imageCache!.get("createImage", (width *scaleX).toInt(), (height *scaleY).toInt());
    

                        }
                            
this.scale(originalImage, image, scaleX, scaleY, true);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


                //@Throws(Error::class)
            
    public scale(originalImage: Image, originalImageArray: Image[], ximageToShowArray: Image[], unused: number, scaleX: number, scaleY: number, maxScaleX: number, maxScaleY: number){
    //var originalImage = originalImage
    //var originalImageArray = originalImageArray
    //var ximageToShowArray = ximageToShowArray
    //var unused = unused
    //var scaleX = scaleX
    //var scaleY = scaleY
    //var maxScaleX = maxScaleX
    //var maxScaleY = maxScaleY

                        if(maxScaleX *originalImage!.getWidth() > originalImageArray[0]!.getWidth() || maxScaleY *originalImage!.getHeight() > originalImageArray[0]!.getHeight())
                        
                                    {
                                    originalImageArray[0]= this.imageCreationUtil!.createImage(originalImage!.getWidth(), originalImage!.getHeight(), maxScaleX, maxScaleY);
    

                                    }
                                
this.scale(originalImage, originalImageArray[0]!, scaleX, scaleY, false);
    
}


    public scale(originalImage: Image, newMaxSizeImage: Image, scaleX: number, scaleY: number, clear: boolean){
    //var originalImage = originalImage
    //var newMaxSizeImage = newMaxSizeImage
    //var scaleX = scaleX
    //var scaleY = scaleY
    //var clear = clear

    var bufferedImage: BufferedImage = this.imageUtil!.getBufferedImage(originalImage)!;
        
        
;
    

    var newBufferedImage: BufferedImage = this.imageUtil!.getBufferedImage(newMaxSizeImage)!;
        
        
;
    

    var at: AffineTransform = AffineTransform.getScaleInstance(scaleX, scaleY)!;
        
        
;
    

    var g: Graphics2D = newBufferedImage!.createGraphics()!;
        
        
;
    

                        if(clear)
                        
                                    {
                                    g.setBackground(imageJ2SEUtil!.TRANSPARENT_COLOR);
    
g.clearRect(0, 0, newBufferedImage!.getWidth(), newBufferedImage!.getHeight());
    

                                    }
                                
g.drawRenderedImage(bufferedImage, at);
    
g.dispose();
    
}


}
                
            

