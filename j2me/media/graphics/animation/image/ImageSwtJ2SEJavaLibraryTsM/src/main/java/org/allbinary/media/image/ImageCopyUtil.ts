
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

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { OpenGLFeatureFactory } from "../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js";

    
import { OpenGLUtil } from "../../../../org/allbinary/graphics/opengles/OpenGLUtil.js";

    
import { OpenGLESDeviceImageTranslate } from "../../../../org/allbinary/image/opengles/OpenGLESDeviceImageTranslate.js";

    
import { OpenGLESImage } from "../../../../org/allbinary/image/opengles/OpenGLESImage.js";

    
import { OpenGLESImageExclusionUtil } from "../../../../org/allbinary/image/opengles/OpenGLESImageExclusionUtil.js";

    
import { OpenGLESImageProperties } from "../../../../org/allbinary/image/opengles/OpenGLESImageProperties.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { ImageData } from "../../../../org/eclipse/swt/graphics/ImageData.js";

    
import { SwtDeviceComponent } from "../../../../org/microemu/app/ui/swt/SwtDeviceComponent.js";

    
import { PostLoadSwtImmutableImageProcessor } from "../../../../org/microemu/device/swt/PostLoadSwtImmutableImageProcessor.js";

    
import { PostLoadSwtMutableImageProcessor } from "../../../../org/microemu/device/swt/PostLoadSwtMutableImageProcessor.js";

    
import { SwtImmutableImage } from "../../../../org/microemu/device/swt/SwtImmutableImage.js";

    
import { SwtMutableImage } from "../../../../org/microemu/device/swt/SwtMutableImage.js";

    

export class ImageCopyUtil
            extends Object
         {
        

    private static readonly instance: ImageCopyUtil = new ImageCopyUtil();
        
        

    public static getInstance(): ImageCopyUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly gameFeatureFactory: GameFeatureFactory = GameFeatureFactory.getInstance()!;
        
        

    private readonly features: Features = Features.getInstance()!;
        
        

    private readonly openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;
        
        

    private readonly openGLUtil: OpenGLUtil = OpenGLUtil.getInstance()!;
        
        

    private readonly openGLESImageExclusionUtil: OpenGLESImageExclusionUtil = OpenGLESImageExclusionUtil.getInstance()!;
        
        

    private readonly NO_COPY: string = "SWT should not copy images after initial loading as the alpha is not honored";
        
        

                //@Throws(Error::class)
            
    public createImageForRotation(originalImage: Image): Image{
    //var originalImage = originalImage

                        if(features.isFeature(openGLFeatureFactory!.OPENGL))
                        
                                    {
                                    
    var image: Image = originalImage;
        
        
;
    
image= openGLUtil!.add(image);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createImage(originalImage);

                        ;
    

                        }
                            
}


                //@Throws(Error::class)
            
    public createImage(originalImage: Image): Image{
    //var originalImage = originalImage

                        if(!features.isFeature(gameFeatureFactory!.POST_IMAGE_LOADING_MODIFICATION);

                        )
                        
                                    {
                                    logUtil!.put(NO_COPY, this, commonStrings!.CONSTRUCTOR);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return originalImage;
    

                                    }
                                

    var originalImage2: Image = originalImage;
        
        
;
    

                        if(features.isFeature(openGLFeatureFactory!.OPENGL))
                        
                                    {
                                    
                        if(originalImage!.getType() >= OpenGLESImage.TYPE)
                        
                                    {
                                    
    var openGLESImage: OpenGLESImage = (originalImage as OpenGLESImage);
        
        
;
    
originalImage2= openGLESImage!.openGLBitmap!.getImage();
    

                                    }
                                

                                    }
                                

    var image: Image = 
                null
            ;
        
        
;
    

                        if(originalImage2!.isMutable())
                        
                                    {
                                    
    var originalMutableImage: SwtMutableImage = originalImage2 as SwtMutableImage;
        
        
;
    
image= SwtMutableImage(SwtDeviceComponent.createImage(originalMutableImage!.image.getImageData()));
    

                                    }
                                
                        else {
                            
    var originalImmutableImage: SwtImmutableImage = originalImage2 as SwtImmutableImage;
        
        
;
    
image= SwtMutableImage(SwtDeviceComponent.createImage(originalImmutableImage!.image.getImageData()));
    

                        }
                            
image= openGLUtil!.add(image);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


                //@Throws(Error::class)
            
    public createImage(originalImage: Image, width: number, height: number): Image{
    //var originalImage = originalImage
    //var width = width
    //var height = height



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createImage(originalImage, width, height, true);

                        ;
    
}


                //@Throws(Error::class)
            
    public createImage(originalImage: Image, width: number, height: number, mutable: boolean): Image{
    //var originalImage = originalImage
    //var width = width
    //var height = height
    //var mutable = mutable

    var originalImage2: Image = originalImage;
        
        
;
    

                        if(!features.isFeature(gameFeatureFactory!.POST_IMAGE_LOADING_MODIFICATION);

                        )
                        
                                    {
                                    logUtil!.put(NO_COPY, this, commonStrings!.CONSTRUCTOR);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return originalImage;
    

                                    }
                                

                        if(features.isFeature(openGLFeatureFactory!.OPENGL))
                        
                                    {
                                    
                        if(openGLESImageExclusionUtil!.isCustomScaling(originalImage))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createImage2(originalImage, width, height, mutable);

                        ;
    

                                    }
                                

                        if(originalImage!.getType() >= OpenGLESImage.TYPE)
                        
                                    {
                                    
    var openGLESImage: OpenGLESImage = (originalImage as OpenGLESImage);
        
        
;
    
originalImage2= openGLESImage!.openGLBitmap!.getImage();
    

                                    }
                                

                                    }
                                

    var image: Image = 
                null
            ;
        
        
;
    

                        if(originalImage2!.isMutable() && mutable)
                        
                                    {
                                    
    var originalMutableImage: SwtMutableImage = originalImage2 as SwtMutableImage;
        
        
;
    

                        if(originalMutableImage!.getImage() != 
                                    null
                                )
                        
                                    {
                                    
    var imageData2: ImageData = originalMutableImage!.image.getImageData()!;
        
        
;
    

    var imageData: ImageData = imageData2!.scaledTo(width, height)!;
        
        
;
    
image= SwtMutableImage(SwtDeviceComponent.createImage(imageData));
    

                                    }
                                
                        else {
                            image= SwtMutableImage(originalMutableImage!.getName(), PostLoadSwtMutableImageProcessor(originalMutableImage));
    

                        }
                            

                                    }
                                
                        else {
                            
    var originalImmutableImage: SwtImmutableImage = originalImage2 as SwtImmutableImage;
        
        
;
    

                        if(originalImmutableImage!.getImage() != 
                                    null
                                )
                        
                                    {
                                    
    var imageData2: ImageData = originalImmutableImage!.image.getImageData()!;
        
        
;
    

    var imageData: ImageData = imageData2!.scaledTo(width, height)!;
        
        
;
    
image= SwtImmutableImage(originalImage!.getName(), SwtDeviceComponent.createImage(imageData));
    

                                    }
                                
                        else {
                            image= SwtImmutableImage(originalImmutableImage!.getName(), PostLoadSwtImmutableImageProcessor(originalImmutableImage));
    

                        }
                            

                        }
                            
image= openGLUtil!.add(image);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


    private readonly INFORMATION: string = "about_";
        
        

    private readonly LEADERBOARD: string = "leaderboard";
        
        

                //@Throws(Error::class)
            
    public createImage2(originalImage: Image, width: number, height: number, mutable: boolean): Image{
    //var originalImage = originalImage
    //var width = width
    //var height = height
    //var mutable = mutable

    var originalImage2: Image = originalImage;
        
        
;
    

                        if(!features.isFeature(gameFeatureFactory!.POST_IMAGE_LOADING_MODIFICATION);

                        )
                        
                                    {
                                    logUtil!.put(NO_COPY, this, commonStrings!.CONSTRUCTOR);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return originalImage;
    

                                    }
                                

    var image: Image = 
                null
            ;
        
        
;
    

                        if(features.isFeature(openGLFeatureFactory!.OPENGL))
                        
                                    {
                                    
    var displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    

                        if(originalImage!.getType() >= OpenGLESImage.TYPE)
                        
                                    {
                                    
    var openGLESImage: OpenGLESImage = (originalImage as OpenGLESImage);
        
        
;
    

    var openGLESImageProperties: OpenGLESImageProperties = openGLESImage!.openGLESImageProperties;
        
        
;
    

    var openGLWidth: number = openGLESImage!.openGLBitmap!.getWidth()!;
        
        
;
    

    var openGLHeight: number = openGLESImage!.openGLBitmap!.getHeight()!;
        
        
;
    
openGLESImageProperties!.scaleX= openGLESImageProperties!.scaleX2= ((width.toFloat()) /openGLWidth);
    
openGLESImageProperties!.scaleY= openGLESImageProperties!.scaleY2= ((height.toFloat()) /openGLHeight);
    
openGLESImageProperties!.scaleX= openGLESImageProperties!.scaleX *0.75f;
    
openGLESImageProperties!.scaleY= openGLESImageProperties!.scaleY *0.75f;
    

                        if(originalImage!.getHeight() % 2 != 0)
                        
                                    {
                                    openGLESImageProperties!.scaleX2 += 1.0f /openGLWidth;
    
openGLESImageProperties!.scaleY2 += 1.0f /openGLHeight;
    

                                    }
                                
image= openGLESImage;
    

                                    }
                                
                        else {
                            image= originalImage;
    

    var openGLESImage: OpenGLESImage = openGLUtil!.add(image);

                         as OpenGLESImage;
        
        
;
    

    var openGLESImageProperties: OpenGLESImageProperties = openGLESImage!.openGLESImageProperties;
        
        
;
    
openGLESImageProperties!.scaleX= openGLESImageProperties!.scaleX2= ((width.toFloat()) /openGLESImage!.getWidth()).toFloat();
    
openGLESImageProperties!.scaleY= openGLESImageProperties!.scaleY2= ((height.toFloat()) /openGLESImage!.getHeight()).toFloat();
    

                        if(image.getName()!.startsWith(INFORMATION))
                        
                                    {
                                    openGLESImage!.openGLESImageTranslate= OpenGLESDeviceImageTranslate();
    

    var openGLESDeviceImageTranslate: OpenGLESDeviceImageTranslate = openGLESImage!.openGLESImageTranslate as OpenGLESDeviceImageTranslate;
        
        
;
    
openGLESDeviceImageTranslate!.translateX= displayInfoSingleton!.getLastWidth() /1.4f /openGLESImageProperties!.scaleX;
    
openGLESDeviceImageTranslate!.translateY= displayInfoSingleton!.getLastHeight() /4 /openGLESImageProperties!.scaleY;
    
openGLESImageProperties!.scaleX= openGLESImageProperties!.scaleX *0.25f;
    
openGLESImageProperties!.scaleY= openGLESImageProperties!.scaleY *0.25f;
    

                                    }
                                
                        else {
                            openGLESImageProperties!.scaleX= openGLESImageProperties!.scaleX *0.75f;
    
openGLESImageProperties!.scaleY= openGLESImageProperties!.scaleY *0.75f;
    

                        if(image.getName()!.startsWith(LEADERBOARD))
                        
                                    {
                                    openGLESImage!.openGLESImageTranslate= OpenGLESDeviceImageTranslate();
    

    var openGLESDeviceImageTranslate: OpenGLESDeviceImageTranslate = openGLESImage!.openGLESImageTranslate as OpenGLESDeviceImageTranslate;
        
        
;
    
openGLESDeviceImageTranslate!.translateX=  -displayInfoSingleton!.getLastWidth();

                         /40 /openGLESImageProperties!.scaleX;
    

                                    }
                                

                        if(image.getName()!.startsWith(LEADERBOARD))
                        
                                    {
                                    
                                    }
                                
                        else {
                            openGLESImageProperties!.scaleX= 1.0f;
    
openGLESImageProperties!.scaleY= 1.0f;
    

                        }
                            

                        }
                            
image= openGLESImage;
    

                        }
                            

                                    }
                                
                        else {
                            
                        if(originalImage2!.isMutable() && mutable)
                        
                                    {
                                    
    var originalMutableImage: SwtMutableImage = originalImage2 as SwtMutableImage;
        
        
;
    

                        if(originalMutableImage!.getImage() != 
                                    null
                                )
                        
                                    {
                                    
    var imageData2: ImageData = originalMutableImage!.image.getImageData()!;
        
        
;
    

    var imageData: ImageData = imageData2!.scaledTo(width, height)!;
        
        
;
    
image= SwtMutableImage(SwtDeviceComponent.createImage(imageData));
    

                                    }
                                
                        else {
                            image= SwtMutableImage(originalMutableImage!.getName(), PostLoadSwtMutableImageProcessor(originalMutableImage));
    

                        }
                            

                                    }
                                
                        else {
                            
    var originalImmutableImage: SwtImmutableImage = originalImage2 as SwtImmutableImage;
        
        
;
    

                        if(originalImmutableImage!.getImage() != 
                                    null
                                )
                        
                                    {
                                    
    var imageData2: ImageData = originalImmutableImage!.image.getImageData()!;
        
        
;
    

    var imageData: ImageData = imageData2!.scaledTo(width, height)!;
        
        
;
    
image= SwtImmutableImage(originalImage!.getName(), SwtDeviceComponent.createImage(imageData));
    

                                    }
                                
                        else {
                            image= SwtImmutableImage(originalImmutableImage!.getName(), PostLoadSwtImmutableImageProcessor(originalImmutableImage));
    

                        }
                            

                        }
                            
image= openGLUtil!.add(image);
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


                //@Throws(Error::class)
            
    public createImage(originalImage: Image, canvasScale: number, resize: boolean): Image{
    //var originalImage = originalImage
    //var canvasScale = canvasScale
    //var resize = resize

                        if(!features.isFeature(gameFeatureFactory!.POST_IMAGE_LOADING_MODIFICATION);

                        )
                        
                                    {
                                    logUtil!.put(NO_COPY, this, commonStrings!.CONSTRUCTOR);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return originalImage;
    

                                    }
                                

    var newWidth: number = (originalImage!.getWidth() *canvasScale).toInt();
        
        
;
    

    var newHeight: number = (originalImage!.getHeight() *canvasScale).toInt();
        
        
;
    

                        if(resize)
                        
                                    {
                                    
                        if(newWidth < newHeight)
                        
                                    {
                                    newWidth= newHeight;
    

                                    }
                                

                        if(newHeight < newWidth)
                        
                                    {
                                    newHeight= newWidth;
    

                                    }
                                

                                    }
                                

    var image: Image = this.createImage(originalImage, newWidth, newHeight)!;
        
        
;
    

                        if(image.isMutable())
                        
                                    {
                                    
    var originalImageData: ImageData = 
                                    (getImage as Image).getImageData()!;
        
        
;
    

    var mutableImage2: SwtMutableImage = image as SwtMutableImage;
        
        
;
    

    var halfWidthDelta: number = (newWidth -originalImage!.getWidth()) /2;
        
        
;
    

    var halfHeightDelta: number = (newHeight -originalImage!.getHeight()) /2;
        
        
;
    

    var originalPixelArray: number[] = new Array(originalImage!.getWidth() *originalImage!.getHeight());
        
        
;
    

    var newPixelArray: number[] = new Array(image.getWidth() *image.getHeight());
        
        
;
    

    var width: number = originalImage!.getWidth()!;
        
        
;
    

    var height: number = originalImage!.getHeight()!;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < height; i++)
        {
originalImageData!.getPixels(0, i, width, originalPixelArray, (i *width));
    
}





                        for (
    var index: number = halfWidthDelta;
        
        
index < width; index++)
        {




                        for (
    var index2: number = halfHeightDelta;
        
        
index2 < height; index2++)
        {
newPixelArray[index +(index2 *width)]= originalPixelArray[(index -halfWidthDelta) +((index2 -halfHeightDelta) *width)]!;
    
}

}

getImage = mutableImage2!.getImage();

                        getImage as org.eclipse.swt.graphics.Image
getImage.
                    getImageData()!.setPixels(0, 0, image.getWidth(), newPixelArray, 0);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    

                                    }
                                
                        else {
                            
    var originalImmutableImage: SwtImmutableImage = image as SwtImmutableImage;
        
        
;
    

    var originalImageData: ImageData = 
                                    (getImage as Image).getImageData()!;
        
        
;
    

    var halfWidthDelta: number = (newWidth -originalImage!.getWidth()) /2;
        
        
;
    

    var halfHeightDelta: number = (newHeight -originalImage!.getHeight()) /2;
        
        
;
    

    var originalPixelArray: number[] = new Array(originalImage!.getWidth() *originalImage!.getHeight());
        
        
;
    

    var newPixelArray: number[] = new Array(image.getWidth() *image.getHeight());
        
        
;
    

    var width: number = originalImage!.getWidth()!;
        
        
;
    

    var height: number = originalImage!.getHeight()!;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < height; i++)
        {
originalImageData!.getPixels(0, i, width, originalPixelArray, (i *width));
    
}





                        for (
    var index: number = halfWidthDelta;
        
        
index < width; index++)
        {




                        for (
    var index2: number = halfHeightDelta;
        
        
index2 < height; index2++)
        {
newPixelArray[index +(index2 *width)]= originalPixelArray[(index -halfWidthDelta) +((index2 -halfHeightDelta) *width)]!;
    
}

}

getImage = originalImmutableImage!.getImage();

                        getImage as org.eclipse.swt.graphics.Image
getImage.
                    getImageData()!.setPixels(0, 0, image.getWidth(), newPixelArray, 0);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    

                        }
                            
}


}
                
            

