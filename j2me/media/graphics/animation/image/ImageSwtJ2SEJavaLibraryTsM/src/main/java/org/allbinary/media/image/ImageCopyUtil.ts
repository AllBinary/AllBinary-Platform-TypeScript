
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
        
//not game specific package import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
      const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
//not game specific package import { GameFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js';
      const GameFeatureFactory = globalThis.org.allbinary.game.configuration.feature.GameFeatureFactory;

      
//not game specific package import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
//not game specific package import { OpenGLFeatureFactory } from '../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
      const OpenGLFeatureFactory = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureFactory;

      
//not game specific package import { OpenGLUtil } from '../../../../org/allbinary/graphics/opengles/OpenGLUtil.js';
      const OpenGLUtil = globalThis.org.allbinary.graphics.opengles.OpenGLUtil;

      
//not game specific package import { OpenGLESDeviceImageTranslate } from '../../../../org/allbinary/image/opengles/OpenGLESDeviceImageTranslate.js';
      const OpenGLESDeviceImageTranslate = globalThis.org.allbinary.image.opengles.OpenGLESDeviceImageTranslate;

      
//not game specific package import { OpenGLESImage } from '../../../../org/allbinary/image/opengles/OpenGLESImage.js';
      const OpenGLESImage = globalThis.org.allbinary.image.opengles.OpenGLESImage;

      
//not game specific package import { OpenGLESImageExclusionUtil } from '../../../../org/allbinary/image/opengles/OpenGLESImageExclusionUtil.js';
      const OpenGLESImageExclusionUtil = globalThis.org.allbinary.image.opengles.OpenGLESImageExclusionUtil;

      
//not game specific package import { OpenGLESImageProperties } from '../../../../org/allbinary/image/opengles/OpenGLESImageProperties.js';
      const OpenGLESImageProperties = globalThis.org.allbinary.image.opengles.OpenGLESImageProperties;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { ImageData } from '../../../../org/eclipse/swt/graphics/ImageData.js';
      const ImageData = globalThis.org.eclipse.swt.graphics.ImageData;

      
//not game specific package import { SwtDeviceComponent } from '../../../../org/microemu/app/ui/swt/SwtDeviceComponent.js';
      const SwtDeviceComponent = globalThis.org.microemu.app.ui.swt.SwtDeviceComponent;

      
//not game specific package import { PostLoadSwtImmutableImageProcessor } from '../../../../org/microemu/device/swt/PostLoadSwtImmutableImageProcessor.js';
      const PostLoadSwtImmutableImageProcessor = globalThis.org.microemu.device.swt.PostLoadSwtImmutableImageProcessor;

      
//not game specific package import { PostLoadSwtMutableImageProcessor } from '../../../../org/microemu/device/swt/PostLoadSwtMutableImageProcessor.js';
      const PostLoadSwtMutableImageProcessor = globalThis.org.microemu.device.swt.PostLoadSwtMutableImageProcessor;

      
//not game specific package import { SwtImmutableImage } from '../../../../org/microemu/device/swt/SwtImmutableImage.js';
      const SwtImmutableImage = globalThis.org.microemu.device.swt.SwtImmutableImage;

      
//not game specific package import { SwtMutableImage } from '../../../../org/microemu/device/swt/SwtMutableImage.js';
      const SwtMutableImage = globalThis.org.microemu.device.swt.SwtMutableImage;

      
















                                        
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
                                    
    var image: Image = originalImage;;
    
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
                                

    var originalImage2: Image = originalImage;;
    

                        if(this.features.isFeature(this.openGLFeatureFactory!.OPENGL))
                        
                                    {
                                    
                        if(originalImage!.getType() >= OpenGLESImage.TYPE)
                        
                                    {
                                    
    var openGLESImage: OpenGLESImage = (originalImage as OpenGLESImage);;
    
originalImage2= openGLESImage!.openGLBitmap!.getImage();
    

                                    }
                                

                                    }
                                

    var image: Image = 
                null
            ;;
    

                        if(originalImage2!.isMutable())
                        
                                    {
                                    
    var originalMutableImage: SwtMutableImage = originalImage2 as SwtMutableImage;;
    
image= new SwtMutableImage(SwtDeviceComponent.createImage(originalMutableImage!.image.getImageData()));
    

                                    }
                                
                        else {
                            
    var originalImmutableImage: SwtImmutableImage = originalImage2 as SwtImmutableImage;;
    
image= new SwtMutableImage(SwtDeviceComponent.createImage(originalImmutableImage!.image.getImageData()));
    

                        }
                            
image= this.openGLUtil!.addImage(image);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


                //@Throws(Exception.constructor)
            
    public createImageWH(originalImage: Image, width: number, height: number, mutable: boolean): Image{

    var originalImage2: Image = originalImage;;
    

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
                                    
    var openGLESImage: OpenGLESImage = (originalImage as OpenGLESImage);;
    
originalImage2= openGLESImage!.openGLBitmap!.getImage();
    

                                    }
                                

                                    }
                                

    var image: Image = 
                null
            ;;
    

                        if(originalImage2!.isMutable() && mutable)
                        
                                    {
                                    
    var originalMutableImage: SwtMutableImage = originalImage2 as SwtMutableImage;;
    

                        if(originalMutableImage!.getImage() != 
                                    null
                                )
                        
                                    {
                                    
    var imageData2: ImageData = originalMutableImage!.image.getImageData()!;;
    

    var imageData: ImageData = imageData2!.scaledTo(width, height)!;;
    
image= new SwtMutableImage(SwtDeviceComponent.createImage(imageData));
    

                                    }
                                
                        else {
                            image= new SwtMutableImage(originalMutableImage!.getName(), new PostLoadSwtMutableImageProcessor(originalMutableImage));
    

                        }
                            

                                    }
                                
                        else {
                            
    var originalImmutableImage: SwtImmutableImage = originalImage2 as SwtImmutableImage;;
    

                        if(originalImmutableImage!.getImage() != 
                                    null
                                )
                        
                                    {
                                    
    var imageData2: ImageData = originalImmutableImage!.image.getImageData()!;;
    

                        if(width > 0 && height > 0)
                        
                                    {
                                    
    var imageData: ImageData = imageData2!.scaledTo(width, height)!;;
    
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

    var originalImage2: Image = originalImage;;
    

                        if(!this.features.isFeature(this.gameFeatureFactory!.POST_IMAGE_LOADING_MODIFICATION))
                        
                                    {
                                    this.logUtil!.putF(this.NO_COPY, this, this.commonStrings!.CONSTRUCTOR);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return originalImage;
    

                                    }
                                

    var image: Image = 
                null
            ;;
    

                        if(this.features.isFeature(this.openGLFeatureFactory!.OPENGL))
                        
                                    {
                                    
    var displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    

                        if(originalImage!.getType() >= OpenGLESImage.TYPE)
                        
                                    {
                                    
    var openGLESImage: OpenGLESImage = (originalImage as OpenGLESImage);;
    

    var openGLESImageProperties: OpenGLESImageProperties = openGLESImage!.openGLESImageProperties;;
    

    var openGLWidth: number = openGLESImage!.openGLBitmap!.getWidth()!;;
    

    var openGLHeight: number = openGLESImage!.openGLBitmap!.getHeight()!;;
    
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
    

    var openGLESImage: OpenGLESImage = this.openGLUtil!.addImage(image) as OpenGLESImage;;
    

    var openGLESImageProperties: OpenGLESImageProperties = openGLESImage!.openGLESImageProperties;;
    
openGLESImageProperties!.scaleX= openGLESImageProperties!.scaleX2= ((width) /openGLESImage!.getWidth());
    
openGLESImageProperties!.scaleY= openGLESImageProperties!.scaleY2= ((height) /openGLESImage!.getHeight());
    

                        if(image.getName()!.startsWith(this.INFORMATION))
                        
                                    {
                                    openGLESImage!.openGLESImageTranslate= new OpenGLESDeviceImageTranslate();
    

    var openGLESDeviceImageTranslate: OpenGLESDeviceImageTranslate = openGLESImage!.openGLESImageTranslate as OpenGLESDeviceImageTranslate;;
    
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
    

    var openGLESDeviceImageTranslate: OpenGLESDeviceImageTranslate = openGLESImage!.openGLESImageTranslate as OpenGLESDeviceImageTranslate;;
    
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
                                    
    var originalMutableImage: SwtMutableImage = originalImage2 as SwtMutableImage;;
    

                        if(originalMutableImage!.getImage() != 
                                    null
                                )
                        
                                    {
                                    
    var imageData2: ImageData = originalMutableImage!.image.getImageData()!;;
    

    var imageData: ImageData = imageData2!.scaledTo(width, height)!;;
    
image= new SwtMutableImage(SwtDeviceComponent.createImage(imageData));
    

                                    }
                                
                        else {
                            image= new SwtMutableImage(originalMutableImage!.getName(), new PostLoadSwtMutableImageProcessor(originalMutableImage));
    

                        }
                            

                                    }
                                
                        else {
                            
    var originalImmutableImage: SwtImmutableImage = originalImage2 as SwtImmutableImage;;
    

                        if(originalImmutableImage!.getImage() != 
                                    null
                                )
                        
                                    {
                                    
    var imageData2: ImageData = originalImmutableImage!.image.getImageData()!;;
    

    var imageData: ImageData = imageData2!.scaledTo(width, height)!;;
    
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
                                

    var newWidth: number = Math.round((originalImage!.getWidth() *canvasScale));;
    

    var newHeight: number = Math.round((originalImage!.getHeight() *canvasScale));;
    

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
                                

    var image: Image = this.createImageWH(originalImage, newWidth, newHeight, true)!;;
    

                        if(image.isMutable())
                        
                                    {
                                    
    var originalImageData: ImageData = (getImage as org.eclipse.swt.graphics.Image).getImageData()!;;
    

    var mutableImage2: SwtMutableImage = image as SwtMutableImage;;
    

    var halfWidthDelta: number = (newWidth -originalImage!.getWidth()) /2;;
    

    var halfHeightDelta: number = (newHeight -originalImage!.getHeight()) /2;;
    

    var originalPixelArray: number[] = new Array(originalImage!.getWidth() *originalImage!.getHeight());;
    

    var newPixelArray: number[] = new Array(image.getWidth() *image.getHeight());;
    

    var width: number = originalImage!.getWidth()!;;
    

    var height: number = originalImage!.getHeight()!;;
    




                        for (
    var i: number = 0;i < height; i++)
        {
originalImageData!.getPixels(0, i, width, originalPixelArray, (i *width));
    
}





                        for (
    var index: number = halfWidthDelta;index < width; index++)
        {




                        for (
    var index2: number = halfHeightDelta;index2 < height; index2++)
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
                            
    var originalImmutableImage: SwtImmutableImage = image as SwtImmutableImage;;
    

    var originalImageData: ImageData = (getImage as org.eclipse.swt.graphics.Image).getImageData()!;;
    

    var halfWidthDelta: number = (newWidth -originalImage!.getWidth()) /2;;
    

    var halfHeightDelta: number = (newHeight -originalImage!.getHeight()) /2;;
    

    var originalPixelArray: number[] = new Array(originalImage!.getWidth() *originalImage!.getHeight());;
    

    var newPixelArray: number[] = new Array(image.getWidth() *image.getHeight());;
    

    var width: number = originalImage!.getWidth()!;;
    

    var height: number = originalImage!.getHeight()!;;
    




                        for (
    var i: number = 0;i < height; i++)
        {
originalImageData!.getPixels(0, i, width, originalPixelArray, (i *width));
    
}





                        for (
    var index: number = halfWidthDelta;index < width; index++)
        {




                        for (
    var index2: number = halfHeightDelta;index2 < height; index2++)
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



