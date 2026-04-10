
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2023 AllBinary
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

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { PlaynImmutableImage } from "../../../../org/microemu/device/playn/PlaynImmutableImage.js";

    
import { PlaynMutableImage } from "../../../../org/microemu/device/playn/PlaynMutableImage.js";

    
import { CanvasImage } from "../../../../playn/core/CanvasImage.js";

    
import { CanvasSurface } from "../../../../playn/core/CanvasSurface.js";

    

export class ImageJ2MEScaleUtil
            extends Object
         {
        

    private static readonly instance: ImageJ2MEScaleUtil = new ImageJ2MEScaleUtil();
        
        

    public static getInstance(): ImageJ2MEScaleUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public scale(images: Image[], width: number, height: number): Image[]{
var images = images
var width = width
var height = height

    var scaledImages: Image[] = new Array(images.length);
        
        





                        for (
    var index: number = images.length
                ;
        
        
--index >= 0; )
        {
scaledImages[index]= this.scale(images[index]!, width, height)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaledImages;
    
}


                //@Throws(Error::class)
            
    public scale(image: Image, width: number, height: number): Image{
    //var image = image
    //var width = width
    //var height = height

    var originalPlayNImage: playn.core.Image = 
                null
            ;
        
        


                        if(image.isMutable())
                        
                                    {
                                    
    var originalHTMLImage: PlaynMutableImage = image as PlaynMutableImage;
        
        

originalPlayNImage= originalHTMLImage!.getImage() as playn.core.Image

                                    }
                                
                        else {
                            
    var originalHTMLImage: PlaynImmutableImage = image as PlaynImmutableImage;
        
        

originalPlayNImage= originalHTMLImage!.getImage() as playn.core.Image

                        }
                            

    var scaledImage: Image = Image.createImage(width, height)!;
        
        


    var htmlImage: PlaynMutableImage = scaledImage as PlaynMutableImage;
        
        


    var canvasImage: CanvasImage = htmlImage!.getImage() as CanvasImage;
        
        


    var canvasSurface: CanvasSurface = htmlImage!.getCanvasSurface(canvasImage)!;
        
        

canvasSurface!.drawImage(originalPlayNImage, 0, 0, scaledImage!.getWidth(), scaledImage!.getHeight(), 0, 0, image.getWidth(), image.getHeight())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaledImage;
    
}


}
                
            

