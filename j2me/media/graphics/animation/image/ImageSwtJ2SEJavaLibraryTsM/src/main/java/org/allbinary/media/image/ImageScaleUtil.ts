
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
        
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
      //not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
import { GameFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js';
      //not GWT import const GameFeatureFactory = globalThis.org.allbinary.game.configuration.feature.GameFeatureFactory;

      
import { ImageCache } from '../../../../org/allbinary/image/ImageCache.js';
      //not GWT import const ImageCache = globalThis.org.allbinary.image.ImageCache;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //not plain js import { ImageCopyUtil } from './ImageCopyUtil.js';
const  = globalThis.org.allbinary.media.image.ImageCopyUtil;

                
export class ImageScaleUtil
            extends Object
         {
        

    private static readonly instance: ImageScaleUtil = new ImageScaleUtil();

    public static getInstance(): ImageScaleUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageScaleUtil.instance;
    
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


                //@Throws(Exception.constructor)
            
    public createImage2(imageCache: ImageCache, originalImage: Image, scaleNominatorX: number, scaleDenominatorX: number, scaleNominatorY: number, scaleDenominatorY: number, cached: boolean): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createImage3(imageCache, originalImage, scaleNominatorX, scaleDenominatorX, scaleNominatorY, scaleDenominatorY, cached, true);;
    
}


                //@Throws(Exception.constructor)
            
    public createImage3(imageCache: ImageCache, originalImage: Image, scaleNominatorX: number, scaleDenominatorX: number, scaleNominatorY: number, scaleDenominatorY: number, cached: boolean, mutable: boolean): Image{

                        if(!this.features.isFeature(this.gameFeatureFactory!.POST_IMAGE_LOADING_MODIFICATION))
                        
                                    {
                                    this.logUtil!.putF(this.NO_COPY, this, this.commonStrings!.CONSTRUCTOR);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return originalImage;
    

                                    }
                                

    var width: number = originalImage!.getWidth()!;;
    

    var height: number = originalImage!.getHeight()!;;
    

    var scaleX: number = scaleNominatorX /scaleDenominatorX;;
    

    var scaleY: number = scaleNominatorY /scaleDenominatorY;;
    

    var scaledImage: Image = this.imageCopyUtil!.createImageWH(originalImage, Math.round((scaleX *width)), Math.round((scaleY *height)), mutable)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaledImage;
    
}


                //@Throws(Exception.constructor)
            
    public scale2(originalImage: Image, originalImageArray: Image[], ximageToShowArray: Image[], unused: number, scaleX: number, scaleY: number, maxScaleX: number, maxScaleY: number){
this.scale(originalImage, originalImageArray, ximageToShowArray, unused, scaleX, scaleY, maxScaleX, maxScaleY, true);
    
}


                //@Throws(Exception.constructor)
            
    public scale(originalImage: Image, originalImageArray: Image[], ximageToShowArray: Image[], unused: number, scaleX: number, scaleY: number, maxScaleX: number, maxScaleY: number, mutable: boolean){

    var width: number = originalImage!.getWidth()!;;
    

    var height: number = originalImage!.getHeight()!;;
    

    var scaledImage: Image = this.imageCopyUtil!.createImageWH(originalImage, Math.round((scaleX *width)), Math.round((scaleY *height)), mutable)!;;
    
originalImageArray[0]= scaledImage;
    
}


}



