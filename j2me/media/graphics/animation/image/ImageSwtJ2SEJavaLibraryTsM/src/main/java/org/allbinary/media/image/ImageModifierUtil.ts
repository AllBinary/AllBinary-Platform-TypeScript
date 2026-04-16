
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { OpenGLFeatureFactory } from "../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js";

    
import { ModifierOpenGLESImageProcessor } from "../../../../org/allbinary/image/opengles/ModifierOpenGLESImageProcessor.js";

    
import { OpenGLESImage } from "../../../../org/allbinary/image/opengles/OpenGLESImage.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { ImageData } from "../../../../org/eclipse/swt/graphics/ImageData.js";

    
import { SwtImmutableImage } from "../../../../org/microemu/device/swt/SwtImmutableImage.js";

    
import { SwtMutableImage } from "../../../../org/microemu/device/swt/SwtMutableImage.js";

    

import { ImageCopyUtil } from "./ImageCopyUtil.js";

export class ImageModifierUtil
            extends Object
         {
        

    private static readonly instance: ImageModifierUtil = new ImageModifierUtil();
        
        

    public static getInstanceOrCreate(): ImageModifierUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly imageCopyUtil: ImageCopyUtil = ImageCopyUtil.getInstance()!;
        
        

    private readonly features: Features = Features.getInstance()!;
        
        

    public setBasicColorP(basicColor: BasicColor){
    //var basicColor = basicColor
}


    public setColor(unusedOriginalImage: Image, image: Image, imageIndex: number, basicColor: BasicColor){
    //var unusedOriginalImage = unusedOriginalImage
    //var image = image
    //var imageIndex = imageIndex
    //var basicColor = basicColor

    var newBufferedImage: org.eclipse.swt.graphics.Image
;
    

                        if(image.isMutable())
                        
                                    {
                                    
    var swtImage: SwtMutableImage = image as SwtMutableImage;
        
        
;
    
newBufferedImage= swtImage!.getImage();

                         as org.eclipse.swt.graphics.Image;
    

                                    }
                                
                        else {
                            
    var swtImage: SwtImmutableImage = image as SwtImmutableImage;
        
        
;
    
newBufferedImage= swtImage!.getImage();

                         as org.eclipse.swt.graphics.Image;
    

                        }
                            

    var r: number = basicColor!.red;
        
        
;
    

    var g: number = basicColor!.green;
        
        
;
    

    var b: number = basicColor!.blue;
        
        
;
    

    var width: number = image.getWidth()!;
        
        
;
    

    var height: number = image.getHeight()!;
        
        
;
    

    var imageData: ImageData = newBufferedImage!.getImageData()!;
        
        
;
    

                        if(imageData!.depth == 24)
                        
                                    {
                                    
    var rx: number= 0
;
    

    var gx: number= 0
;
    

    var bx: number= 0
;
    

    var index3: number= 0
;
    




                        for (
    var index: number = 0;
        
        
index < width; index++)
        {




                        for (
    var index2: number = 0;
        
        
index2 < height; index2++)
        {
index3= (index2 *imageData!.bytesPerLine) +(index *4);
    
rx= (imageData!.data[index3] and 0xFF) shl 16;
    
gx= (imageData!.data[index3 +1] and 0xFF) shl 8;
    
bx= (imageData!.data[index3 +2] and 0xFF);
    

                        if(rx != 0 || gx != 0 || bx != 0)
                        
                                    {
                                    imageData!.data[index3]= r.toByte();
    
imageData!.data[index3 +1]= g.toByte();
    
imageData!.data[index3 +2]= b.toByte();
    

                                    }
                                
}

}


                                    }
                                
}


    public changeColor(unusedOriginalImage: Image, image: Image, imageIndex: number, basicColor: BasicColor){
    //var unusedOriginalImage = unusedOriginalImage
    //var image = image
    //var imageIndex = imageIndex
    //var basicColor = basicColor

                        if(features.isFeature(OpenGLFeatureFactory.getInstance()!.OPENGL))
                        
                                    {
                                    
                        if(image.getType() >= OpenGLESImage.TYPE)
                        
                                    {
                                    
    var openGLESImage: OpenGLESImage = (image as OpenGLESImage);
        
        
;
    
openGLESImage!.imageProcessor= ModifierOpenGLESImageProcessor.getInstance();
    
openGLESImage!.openGLESImageProperties!.redf= basicColor!.getRedComponent();
    
openGLESImage!.openGLESImageProperties!.greenf= basicColor!.getGreenComponent();
    
openGLESImage!.openGLESImageProperties!.bluef= basicColor!.getBlueComponent();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                                    }
                                

    var newBufferedImage: org.eclipse.swt.graphics.Image
;
    

                        if(image.isMutable())
                        
                                    {
                                    
    var swtImage: SwtMutableImage = image as SwtMutableImage;
        
        
;
    
newBufferedImage= swtImage!.getImage();

                         as org.eclipse.swt.graphics.Image;
    

                                    }
                                
                        else {
                            
    var swtImage: SwtImmutableImage = image as SwtImmutableImage;
        
        
;
    
newBufferedImage= swtImage!.getImage();

                         as org.eclipse.swt.graphics.Image;
    

                        }
                            

    var MAX: number = 255;
        
        
;
    

    var r: number = (basicColor!.red.toFloat()) /MAX;
        
        
;
    

    var g: number = (basicColor!.green.toFloat()) /MAX;
        
        
;
    

    var b: number = (basicColor!.blue.toFloat()) /MAX;
        
        
;
    

    var rx: number= 0
;
    

    var gx: number= 0
;
    

    var bx: number= 0
;
    

    var imageData: ImageData = newBufferedImage!.getImageData()!;
        
        
;
    

                        if(imageData!.depth == 24)
                        
                                    {
                                    
    var size: number = imageData!.data.length;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; )
        {
rx= (imageData!.data[index] and 0xFF) shl 16;
    
gx= (imageData!.data[index +1] and 0xFF) shl 8;
    
bx= (imageData!.data[index +2] and 0xFF);
    
rx *= r;
    
gx *= g;
    
bx *= b;
    
imageData!.data[index]= rx.toByte();
    
imageData!.data[index +1]= gx.toByte();
    
imageData!.data[index +2]= bx.toByte();
    
}


                                    }
                                
}


    public setAlpha(unusedOriginalImage: Image, image: Image, imageIndex: number, alphaInt: number){
    //var unusedOriginalImage = unusedOriginalImage
    //var image = image
    //var imageIndex = imageIndex
    //var alphaInt = alphaInt

                        if(features.isFeature(OpenGLFeatureFactory.getInstance()!.OPENGL))
                        
                                    {
                                    
                        if(image.getType() >= OpenGLESImage.TYPE)
                        
                                    {
                                    
    var openGLESImage: OpenGLESImage = (image as OpenGLESImage);
        
        
;
    
openGLESImage!.imageProcessor= ModifierOpenGLESImageProcessor.getInstance();
    
openGLESImage!.openGLESImageProperties!.alphaf= (alphaInt.toFloat()) /255f;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                                    }
                                
this.setAlpha(image, alphaInt);
    
}


    public setAlpha(image: Image, alphaInt: number){
    //var image = image
    //var alphaInt = alphaInt

    var alpha: number = alphaInt.toByte();
        
        
;
    

    var newBufferedImage: org.eclipse.swt.graphics.Image
;
    

                        if(image.isMutable())
                        
                                    {
                                    
    var swtImage: SwtMutableImage = image as SwtMutableImage;
        
        
;
    
newBufferedImage= swtImage!.getImage();

                         as org.eclipse.swt.graphics.Image;
    

                                    }
                                
                        else {
                            
    var swtImage: SwtImmutableImage = image as SwtImmutableImage;
        
        
;
    
newBufferedImage= swtImage!.getImage();

                         as org.eclipse.swt.graphics.Image;
    

                        }
                            
newBufferedImage!.getImageData()!.alpha= alpha;
    
}


    public getImageArray(originalImageArray: Image[]): Image[]{
    //var originalImageArray = originalImageArray

        try {
            
    var newImageArray: Image[] = new Array(originalImageArray!.length);
        
        
;
    

    var size: number = newImageArray!.length
                ;
        
        
;
    

    var originalImage: Image
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
originalImage= originalImageArray[index]!;
    

    var image: Image = this.imageCopyUtil!.createImage(originalImage)!;
        
        
;
    
newImageArray[index]= image;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newImageArray;
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
PreLogUtil.putOE(commonStrings!.EXCEPTION, this, "getImageArray", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return originalImageArray;
    
}

}


    public handleImage(imageArray: Image[], index: number, image: Image){
    //var imageArray = imageArray
    //var index = index
    //var image = image
}


    public reset(){
}


}
                
            

