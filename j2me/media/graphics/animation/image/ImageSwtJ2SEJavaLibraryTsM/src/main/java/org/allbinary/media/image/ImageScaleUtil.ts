
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

    
import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { GameFeatureFactory } from "../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js";

    
import { ImageCache } from "../../../../org/allbinary/image/ImageCache.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class ImageScaleUtil
            extends Object
         {
        

    private static readonly instance: ImageScaleUtil = new ImageScaleUtil();
        
        

    public static getInstance(): ImageScaleUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly imageCopyUtil: ImageCopyUtil = ImageCopyUtil.getInstance()!;
        
        

    private readonly gameFeatureFactory: GameFeatureFactory = GameFeatureFactory.getInstance()!;
        
        

    private readonly features: Features = Features.getInstance()!;
        
        

    private readonly NO_COPY: string = "SWT should not copy images after initial loading as the alpha is not honored";
        
        
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

    
                        if(!features.isFeature(gameFeatureFactory!.POST_IMAGE_LOADING_MODIFICATION))
                        
                                    {
                                    put(NO_COPY, this, commonStrings!.CONSTRUCTOR)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return originalImage;
    

                                    }
                                

    var width: number = originalImage!.getWidth()!;
        
        


    var height: number = originalImage!.getHeight()!;
        
        


    var scaleX: number = scaleNominatorX /scaleDenominatorX;
        
        


    var scaleY: number = scaleNominatorY /scaleDenominatorY;
        
        


    var scaledImage: Image = this.imageCopyUtil!.createImage(originalImage, (scaleX *width).toInt(), (scaleY *height).toInt(), mutable)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaledImage;
    
}


                @Throws(Exception::class)
            
    public scale(originalImage: Image, originalImageArray: Image[], ximageToShowArray: Image[], unused: number, scaleX: number, scaleY: number, maxScaleX: number, maxScaleY: number){
    //var originalImage = originalImage
    //var originalImageArray = originalImageArray
    //var ximageToShowArray = ximageToShowArray
    //var unused = unused
    //var scaleX = scaleX
    //var scaleY = scaleY
    //var maxScaleX = maxScaleX
    //var maxScaleY = maxScaleY
this.scale(originalImage, originalImageArray, ximageToShowArray, unused, scaleX, scaleY, maxScaleX, maxScaleY, true)
}


                @Throws(Exception::class)
            
    public scale(originalImage: Image, originalImageArray: Image[], ximageToShowArray: Image[], unused: number, scaleX: number, scaleY: number, maxScaleX: number, maxScaleY: number, mutable: boolean){
    //var originalImage = originalImage
    //var originalImageArray = originalImageArray
    //var ximageToShowArray = ximageToShowArray
    //var unused = unused
    //var scaleX = scaleX
    //var scaleY = scaleY
    //var maxScaleX = maxScaleX
    //var maxScaleY = maxScaleY
    //var mutable = mutable

    var width: number = originalImage!.getWidth()!;
        
        


    var height: number = originalImage!.getHeight()!;
        
        


    var scaledImage: Image = this.imageCopyUtil!.createImage(originalImage, scaleX.toInt(), scaleY.toInt(), mutable)!;
        
        

originalImageArray[0]= scaledImage
}


}
                
            

