
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { BufferedImage } from '../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage

import { ColorModel } from '../../../../java/awt/image/ColorModel.js';
//not GWT import const ColorModel

import { WritableRaster } from '../../../../java/awt/image/WritableRaster.js';
//not GWT import const WritableRaster

import { Image } from '../../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image

import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Anchor

import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageUtil } from './ImageUtil.js';
//sameFolderImports - not GWT import - same folder const ImageUtil
import { ImageCreationUtil } from './ImageCreationUtil.js';
//sameFolderImports - not GWT import - same folder const ImageCreationUtil

export class ImageModifierUtil
            extends Object
         {
        

    private static readonly instance: ImageModifierUtil = new ImageModifierUtil();

    public static getInstanceOrCreate(): ImageModifierUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageModifierUtil.instance;
    
}


    private readonly imageUtil: ImageUtil = ImageUtil.getInstance()!;

    public setBasicColorP(basicColor: BasicColor){
}


    private readonly colorArray: number[] = new Array(1);

    public setColor(unusedOriginalImage: Image, image: Image, imageIndex: number, basicColor: BasicColor){

    let newBufferedImage: BufferedImage = this.imageUtil!.getBufferedImage(image)!;;
    

    let r: number = basicColor!.red;;
    

    let g: number = basicColor!.green;;
    

    let b: number = basicColor!.blue;;
    

    let width: number = image.getWidth()!;;
    

    let height: number = image.getHeight()!;;
    

    let colorModel: ColorModel;;
    

    let dataElements: any;;
    

    let ax: number= 0;;
    

    let rx: number= 0;;
    

    let gx: number= 0;;
    

    let bx: number= 0;;
    




                        for (
    let index: number = 0;index < width; index++)
        {




                        for (
    let index2: number = 0;index2 < height; index2++)
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

    let newBufferedImage: BufferedImage = this.imageUtil!.getBufferedImage(image)!;;
    

    let MAX: number = 255;;
    

    let r: number = (basicColor!.red) /MAX;;
    

    let g: number = (basicColor!.green) /MAX;;
    

    let b: number = (basicColor!.blue) /MAX;;
    

    let width: number = image.getWidth()!;;
    

    let height: number = image.getHeight()!;;
    

    let colorModel: ColorModel;;
    

    let dataElements: any;;
    

    let ax: number= 0;;
    

    let rx: number= 0;;
    

    let gx: number= 0;;
    

    let bx: number= 0;;
    




                        for (
    let index: number = 0;index < width; index++)
        {




                        for (
    let index2: number = 0;index2 < height; index2++)
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

    let alpha: number = ((alphaInt) << 24 >> 24);;
    

    let newBufferedImage: BufferedImage = this.imageUtil!.getBufferedImage(image)!;;
    

    let width: number = image.getWidth()!;;
    

    let height: number = image.getHeight()!;;
    

    let raster: WritableRaster = newBufferedImage!.getAlphaRaster()!;;
    




                        for (
    let index: number = 0;index < width; index++)
        {




                        for (
    let index2: number = 0;index2 < height; index2++)
        {
raster.getPixel(index, index2, this.colorArray);
    
this.colorArray[0]= alpha&this.colorArray[0];
    
raster.setPixel(index, index2, this.colorArray);
    
}

}

}


    public getImageArray(originalImageArray: Image[]): Image[]{

 try { 
    let newImageArray: Image[] = new Array(originalImageArray!.length);;
    

    let size: number = newImageArray!.length
                ;;
    

    let originalImage: Image;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
originalImage= originalImageArray[index]!;
    

    let image: Image = ImageCreationUtil.getInstance()!.createImageWH(originalImage!.getWidth(), originalImage!.getHeight())!;;
    
image.getGraphics()!.drawImage(originalImage, 0, 0, Anchor.TOP_LEFT);
    
newImageArray[index]= image;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newImageArray;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
PreLogUtil.putOE(commonStrings!.EXCEPTION, this, "getImageArray", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return originalImageArray;
    

 }
   }
 
}


    public handleImage(imageArray: Image[], index: number, image: Image){
}


    public reset(){
}


}

