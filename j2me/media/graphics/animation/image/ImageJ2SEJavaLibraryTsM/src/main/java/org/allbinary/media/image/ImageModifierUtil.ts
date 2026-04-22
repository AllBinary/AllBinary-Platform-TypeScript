
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
        



import { BufferedImage } from "../../../../java/awt/image/BufferedImage.js";

    
import { ColorModel } from "../../../../java/awt/image/ColorModel.js";

    
import { WritableRaster } from "../../../../java/awt/image/WritableRaster.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { Anchor } from "../../../../org/allbinary/graphics/Anchor.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { J2SEImmutableImage } from "../../../../org/microemu/device/j2se/J2SEImmutableImage.js";

    
import { J2SEMutableImage } from "../../../../org/microemu/device/j2se/J2SEMutableImage.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ImageUtil } from "./ImageUtil.js";

import { ImageCreationUtil } from "./ImageCreationUtil.js";

export class ImageModifierUtil
            extends Object
         {
        

    private static readonly instance: ImageModifierUtil = new ImageModifierUtil();
        
        

    public static getInstanceOrCreate(): ImageModifierUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly imageUtil: ImageUtil = ImageUtil.getInstance()!;
        
        

    public setBasicColorP(basicColor: BasicColor){
    //var basicColor = basicColor
}


    private readonly colorArray: number[] = new Array(1);
        
        

    public setColor(unusedOriginalImage: Image, image: Image, imageIndex: number, basicColor: BasicColor){
    //var unusedOriginalImage = unusedOriginalImage
    //var image = image
    //var imageIndex = imageIndex
    //var basicColor = basicColor

    var newBufferedImage: BufferedImage = this.imageUtil!.getBufferedImage(image)!;
        
        
;
    

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
    

    var colorModel: ColorModel
;
    

    var dataElements: any
;
    

    var ax: number= 0
;
    

    var rx: number= 0
;
    

    var gx: number= 0
;
    

    var bx: number= 0
;
    




                        for (
    var index: number = 0;
        
        
index < width; index++)
        {




                        for (
    var index2: number = 0;
        
        
index2 < height; index2++)
        {
colorModel= newBufferedImage!.getColorModel();
    
dataElements= newBufferedImage!.getRaster()!.getDataElements(index, index2, 
                            null);
    
ax= colorModel!.getAlpha(dataElements);
    
rx= colorModel!.getRed(dataElements);
    
gx= colorModel!.getGreen(dataElements);
    
bx= colorModel!.getBlue(dataElements);
    

                        if(rx != 0 || gx != 0 || bx != 0)
                        
                                    {
                                    newBufferedImage!.setRGB(index, index2, (ax<<24) | (r<<16) | (g<<8) | (b));
    

                                    }
                                
}

}

}


    public changeColor(unusedOriginalImage: Image, image: Image, imageIndex: number, basicColor: BasicColor){
    //var unusedOriginalImage = unusedOriginalImage
    //var image = image
    //var imageIndex = imageIndex
    //var basicColor = basicColor

    var newBufferedImage: BufferedImage = this.imageUtil!.getBufferedImage(image)!;
        
        
;
    

    var MAX: number = 255;
        
        
;
    

    var r: number = (basicColor!.red) /MAX;
        
        
;
    

    var g: number = (basicColor!.green) /MAX;
        
        
;
    

    var b: number = (basicColor!.blue) /MAX;
        
        
;
    

    var width: number = image.getWidth()!;
        
        
;
    

    var height: number = image.getHeight()!;
        
        
;
    

    var colorModel: ColorModel
;
    

    var dataElements: any
;
    

    var ax: number= 0
;
    

    var rx: number= 0
;
    

    var gx: number= 0
;
    

    var bx: number= 0
;
    




                        for (
    var index: number = 0;
        
        
index < width; index++)
        {




                        for (
    var index2: number = 0;
        
        
index2 < height; index2++)
        {
colorModel= newBufferedImage!.getColorModel();
    
dataElements= newBufferedImage!.getRaster()!.getDataElements(index, index2, 
                            null);
    
ax= colorModel!.getAlpha(dataElements);
    
rx= colorModel!.getRed(dataElements);
    
gx= colorModel!.getGreen(dataElements);
    
bx= colorModel!.getBlue(dataElements);
    
rx *= r;
    
gx *= g;
    
bx *= b;
    
newBufferedImage!.setRGB(index, index2, (ax<<24) | (rx<<16) | (gx<<8) | (bx));
    
}

}

}


    public setAlpha(unusedOriginalImage: Image, image: Image, imageIndex: number, alphaInt: number){
    //var unusedOriginalImage = unusedOriginalImage
    //var image = image
    //var imageIndex = imageIndex
    //var alphaInt = alphaInt

    var alpha: number = alphaInt.toByte();
        
        
;
    

    var newBufferedImage: BufferedImage = this.imageUtil!.getBufferedImage(image)!;
        
        
;
    

    var width: number = image.getWidth()!;
        
        
;
    

    var height: number = image.getHeight()!;
        
        
;
    

    var raster: WritableRaster = newBufferedImage!.getAlphaRaster()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < width; index++)
        {




                        for (
    var index2: number = 0;
        
        
index2 < height; index2++)
        {
raster.getPixel(index, index2, colorArray);
    
colorArray[0]= alpha&colorArray[0];
    
raster.setPixel(index, index2, colorArray);
    
}

}

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
    

    var image: Image = ImageCreationUtil.getInstance()!.getInstance(originalImage!.getWidth(), originalImage!.getHeight())!;
        
        
;
    
image.getGraphics()!.drawImage(originalImage, 0, 0, Anchor.TOP_LEFT);
    
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
                
            

