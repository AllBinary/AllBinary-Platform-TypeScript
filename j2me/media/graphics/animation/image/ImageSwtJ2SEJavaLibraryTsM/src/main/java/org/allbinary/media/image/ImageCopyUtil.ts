
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

import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features

import { GameFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js';
//not GWT import const GameFeatureFactory

import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton

import { OpenGLFeatureFactory } from '../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
//not GWT import const OpenGLFeatureFactory

import { OpenGLUtil } from '../../../../org/allbinary/graphics/opengles/OpenGLUtil.js';
//not GWT import const OpenGLUtil

import { OpenGLESDeviceImageTranslate } from '../../../../org/allbinary/image/opengles/OpenGLESDeviceImageTranslate.js';
//not GWT import const OpenGLESDeviceImageTranslate

import { OpenGLESImage } from '../../../../org/allbinary/image/opengles/OpenGLESImage.js';
//not GWT import const OpenGLESImage

import { OpenGLESImageExclusionUtil } from '../../../../org/allbinary/image/opengles/OpenGLESImageExclusionUtil.js';
//not GWT import const OpenGLESImageExclusionUtil

import { OpenGLESImageProperties } from '../../../../org/allbinary/image/opengles/OpenGLESImageProperties.js';
//not GWT import const OpenGLESImageProperties

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { ImageData } from '../../../../org/eclipse/swt/graphics/ImageData.js';
//not GWT import const ImageData

import { SwtDeviceComponent } from '../../../../org/microemu/app/ui/swt/SwtDeviceComponent.js';
//not GWT import const SwtDeviceComponent

import { PostLoadSwtImmutableImageProcessor } from '../../../../org/microemu/device/swt/PostLoadSwtImmutableImageProcessor.js';
//not GWT import const PostLoadSwtImmutableImageProcessor

import { PostLoadSwtMutableImageProcessor } from '../../../../org/microemu/device/swt/PostLoadSwtMutableImageProcessor.js';
//not GWT import const PostLoadSwtMutableImageProcessor

import { SwtImmutableImage } from '../../../../org/microemu/device/swt/SwtImmutableImage.js';
//not GWT import const SwtImmutableImage

import { SwtMutableImage } from '../../../../org/microemu/device/swt/SwtMutableImage.js';
//not GWT import const SwtMutableImage

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageCopyUtil
            extends Object
         {
        

    private static readonly instance: ImageCopyUtil = new ImageCopyUtil();

    public static getInstance(): ImageCopyUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageCopyUtil.instance;
    
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

    private readonly UNABLE: string = "Unable to scale image without dimensions";

                //@Throws(Exception.constructor)
            
    public createImageForRotation(originalImage: Image): Image{

                        if(this.features.isFeature(this.openGLFeatureFactory!.OPENGL))
                        
                                    {
                                    
    let image: Image = originalImage;;
    
image= this.openGLUtil!.addImage(image);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createImage(originalImage);;
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public createImage(originalImage: Image): Image{

                        if(!this.features.isFeature(this.gameFeatureFactory!.POST_IMAGE_LOADING_MODIFICATION))
                        
                                    {
                                    this.logUtil!.putF(this.NO_COPY, this, this.commonStrings!.CONSTRUCTOR);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return originalImage;
    

                                    }
                                

    let originalImage2: Image = originalImage;;
    

                        if(this.features.isFeature(this.openGLFeatureFactory!.OPENGL))
                        
                                    {
                                    
                        if(originalImage!.getType() >= OpenGLESImage.TYPE)
                        
                                    {
                                    
    let openGLESImage: OpenGLESImage = (originalImage as OpenGLESImage);;
    
originalImage2= openGLESImage!.openGLBitmap!.getImage();
    

                                    }
                                

                                    }
                                

    let image: Image = 
                null
            ;;
    

                        if(originalImage2!.isMutable())
                        
                                    {
                                    
    let originalMutableImage: SwtMutableImage = originalImage2 as SwtMutableImage;;
    
image= new SwtMutableImage(SwtDeviceComponent.createImage(originalMutableImage!.image.getImageData()));
    

                                    }
                                
                        else {
                            
    let originalImmutableImage: SwtImmutableImage = originalImage2 as SwtImmutableImage;;
    
image= new SwtMutableImage(SwtDeviceComponent.createImage(originalImmutableImage!.image.getImageData()));
    

                        }
                            
image= this.openGLUtil!.addImage(image);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


                //@Throws(Exception.constructor)
            
    public createImageWH(originalImage: Image, width: number, height: number, mutable: boolean): Image{

    let originalImage2: Image = originalImage;;
    

                        if(!this.features.isFeature(this.gameFeatureFactory!.POST_IMAGE_LOADING_MODIFICATION))
                        
                                    {
                                    this.logUtil!.putF(this.NO_COPY, this, this.commonStrings!.CONSTRUCTOR);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return originalImage;
    

                                    }
                                

                        if(this.features.isFeature(this.openGLFeatureFactory!.OPENGL))
                        
                                    {
                                    
                        if(this.openGLESImageExclusionUtil!.isCustomScaling(originalImage))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createImage2(originalImage, width, height, mutable);;
    

                                    }
                                

                        if(originalImage!.getType() >= OpenGLESImage.TYPE)
                        
                                    {
                                    
    let openGLESImage: OpenGLESImage = (originalImage as OpenGLESImage);;
    
originalImage2= openGLESImage!.openGLBitmap!.getImage();
    

                                    }
                                

                                    }
                                

    let image: Image = 
                null
            ;;
    

                        if(originalImage2!.isMutable() && mutable)
                        
                                    {
                                    
    let originalMutableImage: SwtMutableImage = originalImage2 as SwtMutableImage;;
    

                        if(originalMutableImage!.getImage() != 
                                    null
                                )
                        
                                    {
                                    
    let imageData2: ImageData = originalMutableImage!.image.getImageData()!;;
    

    let imageData: ImageData = imageData2!.scaledTo(width, height)!;;
    
image= new SwtMutableImage(SwtDeviceComponent.createImage(imageData));
    

                                    }
                                
                        else {
                            image= new SwtMutableImage(originalMutableImage!.getName(), new PostLoadSwtMutableImageProcessor(originalMutableImage));
    

                        }
                            

                                    }
                                
                        else {
                            
    let originalImmutableImage: SwtImmutableImage = originalImage2 as SwtImmutableImage;;
    

                        if(originalImmutableImage!.getImage() != 
                                    null
                                )
                        
                                    {
                                    
    let imageData2: ImageData = originalImmutableImage!.image.getImageData()!;;
    

                        if(width > 0 && height > 0)
                        
                                    {
                                    
    let imageData: ImageData = imageData2!.scaledTo(width, height)!;;
    
image= new SwtImmutableImage(originalImage!.getName(), SwtDeviceComponent.createImage(imageData));
    

                                    }
                                
                        else {
                            this.logUtil!.putF(UNABLE, this, this.commonStrings!.CONSTRUCTOR);
    
image= new SwtImmutableImage(originalImmutableImage!.getName(), new PostLoadSwtImmutableImageProcessor(originalImmutableImage));
    

                        }
                            

                                    }
                                
                        else {
                            image= new SwtImmutableImage(originalImmutableImage!.getName(), new PostLoadSwtImmutableImageProcessor(originalImmutableImage));
    

                        }
                            

                        }
                            
image= this.openGLUtil!.addImage(image);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


    private readonly INFORMATION: string = "about_";

    private readonly LEADERBOARD: string = "leaderboard";

                //@Throws(Exception.constructor)
            
    public createImage2(originalImage: Image, width: number, height: number, mutable: boolean): Image{

    let originalImage2: Image = originalImage;;
    

                        if(!this.features.isFeature(this.gameFeatureFactory!.POST_IMAGE_LOADING_MODIFICATION))
                        
                                    {
                                    this.logUtil!.putF(this.NO_COPY, this, this.commonStrings!.CONSTRUCTOR);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return originalImage;
    

                                    }
                                

    let image: Image = 
                null
            ;;
    

                        if(this.features.isFeature(this.openGLFeatureFactory!.OPENGL))
                        
                                    {
                                    
    let displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    

                        if(originalImage!.getType() >= OpenGLESImage.TYPE)
                        
                                    {
                                    
    let openGLESImage: OpenGLESImage = (originalImage as OpenGLESImage);;
    

    let openGLESImageProperties: OpenGLESImageProperties = openGLESImage!.openGLESImageProperties;;
    

    let openGLWidth: number = openGLESImage!.openGLBitmap!.getWidth()!;;
    

    let openGLHeight: number = openGLESImage!.openGLBitmap!.getHeight()!;;
    
openGLESImageProperties!.scaleX= openGLESImageProperties!.scaleX2= ((width) /openGLWidth);
    
openGLESImageProperties!.scaleY= openGLESImageProperties!.scaleY2= ((height) /openGLHeight);
    
openGLESImageProperties!.scaleX= openGLESImageProperties!.scaleX *0.75;
    
openGLESImageProperties!.scaleY= openGLESImageProperties!.scaleY *0.75;
    

                        if(originalImage!.getHeight() % 2 != 0)
                        
                                    {
                                    openGLESImageProperties!.scaleX2 += 1.0 /openGLWidth;
    
openGLESImageProperties!.scaleY2 += 1.0 /openGLHeight;
    

                                    }
                                
image= openGLESImage;
    

                                    }
                                
                        else {
                            image= originalImage;
    

    let openGLESImage: OpenGLESImage = this.openGLUtil!.addImage(image) as OpenGLESImage;;
    

    let openGLESImageProperties: OpenGLESImageProperties = openGLESImage!.openGLESImageProperties;;
    
openGLESImageProperties!.scaleX= openGLESImageProperties!.scaleX2= ((width) /openGLESImage!.getWidth());
    
openGLESImageProperties!.scaleY= openGLESImageProperties!.scaleY2= ((height) /openGLESImage!.getHeight());
    

                        if(image.getName()!.startsWith(this.INFORMATION))
                        
                                    {
                                    openGLESImage!.openGLESImageTranslate= new OpenGLESDeviceImageTranslate();
    

    let openGLESDeviceImageTranslate: OpenGLESDeviceImageTranslate = openGLESImage!.openGLESImageTranslate as OpenGLESDeviceImageTranslate;;
    
openGLESDeviceImageTranslate!.translateX= displayInfoSingleton!.getLastWidth() /1.4 /openGLESImageProperties!.scaleX;
    
openGLESDeviceImageTranslate!.translateY= displayInfoSingleton!.getLastHeight() /4 /openGLESImageProperties!.scaleY;
    
openGLESImageProperties!.scaleX= openGLESImageProperties!.scaleX *0.25;
    
openGLESImageProperties!.scaleY= openGLESImageProperties!.scaleY *0.25;
    

                                    }
                                
                        else {
                            openGLESImageProperties!.scaleX= openGLESImageProperties!.scaleX *0.75;
    
openGLESImageProperties!.scaleY= openGLESImageProperties!.scaleY *0.75;
    

                        if(image.getName()!.startsWith(this.LEADERBOARD))
                        
                                    {
                                    openGLESImage!.openGLESImageTranslate= new OpenGLESDeviceImageTranslate();
    

    let openGLESDeviceImageTranslate: OpenGLESDeviceImageTranslate = openGLESImage!.openGLESImageTranslate as OpenGLESDeviceImageTranslate;;
    
openGLESDeviceImageTranslate!.translateX=  -displayInfoSingleton!.getLastWidth() /40 /openGLESImageProperties!.scaleX;
    

                                    }
                                

                        if(image.getName()!.startsWith(this.LEADERBOARD))
                        
                                    {
                                    
                                    }
                                
                        else {
                            openGLESImageProperties!.scaleX= 1.0;
    
openGLESImageProperties!.scaleY= 1.0;
    

                        }
                            

                        }
                            
image= openGLESImage;
    

                        }
                            

                                    }
                                
                        else {
                            
                        if(originalImage2!.isMutable() && mutable)
                        
                                    {
                                    
    let originalMutableImage: SwtMutableImage = originalImage2 as SwtMutableImage;;
    

                        if(originalMutableImage!.getImage() != 
                                    null
                                )
                        
                                    {
                                    
    let imageData2: ImageData = originalMutableImage!.image.getImageData()!;;
    

    let imageData: ImageData = imageData2!.scaledTo(width, height)!;;
    
image= new SwtMutableImage(SwtDeviceComponent.createImage(imageData));
    

                                    }
                                
                        else {
                            image= new SwtMutableImage(originalMutableImage!.getName(), new PostLoadSwtMutableImageProcessor(originalMutableImage));
    

                        }
                            

                                    }
                                
                        else {
                            
    let originalImmutableImage: SwtImmutableImage = originalImage2 as SwtImmutableImage;;
    

                        if(originalImmutableImage!.getImage() != 
                                    null
                                )
                        
                                    {
                                    
    let imageData2: ImageData = originalImmutableImage!.image.getImageData()!;;
    

    let imageData: ImageData = imageData2!.scaledTo(width, height)!;;
    
image= new SwtImmutableImage(originalImage!.getName(), SwtDeviceComponent.createImage(imageData));
    

                                    }
                                
                        else {
                            image= new SwtImmutableImage(originalImmutableImage!.getName(), new PostLoadSwtImmutableImageProcessor(originalImmutableImage));
    

                        }
                            

                        }
                            
image= this.openGLUtil!.addImage(image);
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


                //@Throws(Exception.constructor)
            
    public createImageScale(originalImage: Image, canvasScale: number, resize: boolean): Image{

                        if(!this.features.isFeature(this.gameFeatureFactory!.POST_IMAGE_LOADING_MODIFICATION))
                        
                                    {
                                    this.logUtil!.putF(this.NO_COPY, this, this.commonStrings!.CONSTRUCTOR);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return originalImage;
    

                                    }
                                

    let newWidth: number = globalThis.Math.trunc((originalImage!.getWidth() *canvasScale));;
    

    let newHeight: number = globalThis.Math.trunc((originalImage!.getHeight() *canvasScale));;
    

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
                                

    let image: Image = this.createImageWH(originalImage, newWidth, newHeight, true)!;;
    

                        if(image.isMutable())
                        
                                    {
                                    
    let originalImageData: ImageData = (getImage as org.eclipse.swt.graphics.Image).getImageData()!;;
    

    let mutableImage2: SwtMutableImage = image as SwtMutableImage;;
    

    let halfWidthDelta: number = (newWidth -originalImage!.getWidth()) /2;;
    

    let halfHeightDelta: number = (newHeight -originalImage!.getHeight()) /2;;
    

    let originalPixelArray: number[] = new Array(originalImage!.getWidth() *originalImage!.getHeight());;
    

    let newPixelArray: number[] = new Array(image.getWidth() *image.getHeight());;
    

    let width: number = originalImage!.getWidth()!;;
    

    let height: number = originalImage!.getHeight()!;;
    




                        for (
    let i: number = 0;i < height; i++)
        {
originalImageData!.getPixels(0, i, width, originalPixelArray, (i *width));
    
}





                        for (
    let index: number = halfWidthDelta;index < width; index++)
        {




                        for (
    let index2: number = halfHeightDelta;index2 < height; index2++)
        {
newPixelArray[index +(index2 *width)]= originalPixelArray[(index -halfWidthDelta) +((index2 -halfHeightDelta) *width)]!;
    
}

}

getImage = mutableImage2!.getImage()getImage as org.eclipse.swt.graphics.Image
getImage.
                    getImageData()!.setPixels(0, 0, image.getWidth(), newPixelArray, 0);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    

                                    }
                                
                        else {
                            
    let originalImmutableImage: SwtImmutableImage = image as SwtImmutableImage;;
    

    let originalImageData: ImageData = (getImage as org.eclipse.swt.graphics.Image).getImageData()!;;
    

    let halfWidthDelta: number = (newWidth -originalImage!.getWidth()) /2;;
    

    let halfHeightDelta: number = (newHeight -originalImage!.getHeight()) /2;;
    

    let originalPixelArray: number[] = new Array(originalImage!.getWidth() *originalImage!.getHeight());;
    

    let newPixelArray: number[] = new Array(image.getWidth() *image.getHeight());;
    

    let width: number = originalImage!.getWidth()!;;
    

    let height: number = originalImage!.getHeight()!;;
    




                        for (
    let i: number = 0;i < height; i++)
        {
originalImageData!.getPixels(0, i, width, originalPixelArray, (i *width));
    
}





                        for (
    let index: number = halfWidthDelta;index < width; index++)
        {




                        for (
    let index2: number = halfHeightDelta;index2 < height; index2++)
        {
newPixelArray[index +(index2 *width)]= originalPixelArray[(index -halfWidthDelta) +((index2 -halfHeightDelta) *width)]!;
    
}

}

getImage = originalImmutableImage!.getImage()getImage as org.eclipse.swt.graphics.Image
getImage.
                    getImageData()!.setPixels(0, 0, image.getWidth(), newPixelArray, 0);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    

                        }
                            
}


}

