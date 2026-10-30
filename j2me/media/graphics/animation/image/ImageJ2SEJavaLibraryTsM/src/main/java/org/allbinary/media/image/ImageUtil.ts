
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
        
import { Graphics2D } from '../../../../java/awt/Graphics2D.js';
//not GWT import const Graphics2D

import { GraphicsConfiguration } from '../../../../java/awt/GraphicsConfiguration.js';
//not GWT import const GraphicsConfiguration

import { GraphicsDevice } from '../../../../java/awt/GraphicsDevice.js';
//not GWT import const GraphicsDevice

import { GraphicsEnvironment } from '../../../../java/awt/GraphicsEnvironment.js';
//not GWT import const GraphicsEnvironment

import { Transparency } from '../../../../java/awt/Transparency.js';
//not GWT import const Transparency

import { AffineTransform } from '../../../../java/awt/geom/AffineTransform.js';
//not GWT import const AffineTransform

import { BufferedImage } from '../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage

import { Image } from '../../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { J2SEImmutableImage } from '../../../../org/microemu/device/j2se/J2SEImmutableImage.js';
//not GWT import const J2SEImmutableImage

import { J2SEMutableImage } from '../../../../org/microemu/device/j2se/J2SEMutableImage.js';
//not GWT import const J2SEMutableImage

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageUtil
            extends Object
         {
        

    private static readonly instance: ImageUtil = new ImageUtil();

    public static getInstance(): ImageUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageUtil.instance;
    
}


    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;

    private IIOIMAGE_POOL_NAME: string = "IIOIMAGE_POOL_NAME";

    private readonly CREATE_BUFFERED_IMAGE: string = "createBufferedImage";

private constructor (){

            super();
        }


    getDefaultConfiguration(): GraphicsConfiguration{

    let ge: GraphicsEnvironment = GraphicsEnvironment.getLocalGraphicsEnvironment()!;;
    

    let gd: GraphicsDevice = ge.getDefaultScreenDevice()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gd.getDefaultConfiguration();;
    
}


    public create(width: number, height: number): BufferedImage{

    let graphicsConfiguration: GraphicsConfiguration = this.getDefaultConfiguration()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return graphicsConfiguration!.createCompatibleImage(width, height, Transparency.TRANSLUCENT);;
    
}


                //@Throws(Exception.constructor)
            
    public createBufferedImageForResize(bufferedImageArray: BufferedImage[], percent: number, scale: boolean): BufferedImage[]{

    let size: number = bufferedImageArray!.length
                ;;
    

    let scaledBufferedImageArray: BufferedImage[] = new Array(size);;
    

    let bufferedImage: BufferedImage;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
bufferedImage= bufferedImageArray[index]!;
    

    let newWidth: number = globalThis.Math.trunc((bufferedImage!.getWidth() *percent /100));;
    

    let newHeight: number = globalThis.Math.trunc((bufferedImage!.getHeight() *percent /100));;
    
scaledBufferedImageArray[index]= this.createBufferedImage(bufferedImage, newWidth, newHeight, scale);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaledBufferedImageArray;
    
}


                //@Throws(Exception.constructor)
            
    public createBufferedImage2(bufferedImageArray: BufferedImage[], percent: number, scale: boolean): BufferedImage[]{

    let size: number = bufferedImageArray!.length
                ;;
    

    let scaledBufferedImageArray: BufferedImage[] = new Array(size);;
    

    let bufferedImage: BufferedImage;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
bufferedImage= bufferedImageArray[index]!;
    

    let newWidth: number = globalThis.Math.trunc((bufferedImage!.getWidth() *percent));;
    

    let newHeight: number = globalThis.Math.trunc((bufferedImage!.getHeight() *percent));;
    
scaledBufferedImageArray[index]= this.createBufferedImage(bufferedImage, newWidth, newHeight, scale);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaledBufferedImageArray;
    
}


                //@Throws(Exception.constructor)
            
    public createBufferedImage3(bufferedImageArray: BufferedImage[], width: number, height: number, scale: boolean): BufferedImage[]{

    let size: number = bufferedImageArray!.length
                ;;
    

    let scaledBufferedImageArray: BufferedImage[] = new Array(size);;
    




                        for (
    let index: number = 0;index < size; index++)
        {
scaledBufferedImageArray[index]= this.createBufferedImage(bufferedImageArray[index]!, width, height, scale);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaledBufferedImageArray;
    
}


                //@Throws(Exception.constructor)
            
    public createBufferedImageForSave(bufferedImage: BufferedImage, newWidth: number, newHeight: number): BufferedImage{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createBufferedImage(bufferedImage, newWidth, newHeight, true);;
    
}


                //@Throws(Exception.constructor)
            
    public createBufferedImage(bufferedImage: BufferedImage, newWidth: number, newHeight: number, scale: boolean): BufferedImage{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createBufferedImageAllowTranslate(bufferedImage, newWidth, newHeight, scale, false);;
    
}


                //@Throws(Exception.constructor)
            
    public createBufferedImageAllowTranslate(bufferedImage: BufferedImage, newWidth: number, newHeight: number, scale: boolean, allowTranslate: boolean): BufferedImage{

    let width: number = bufferedImage!.getWidth()!;;
    

    let height: number = bufferedImage!.getHeight()!;;
    

    let d_newWidth: number = newWidth;;
    

    let d_newHeight: number = newHeight;;
    

    let widthRatio: number = d_newWidth /width;;
    

    let heightRatio: number = d_newHeight /height;;
    

    let ratioX: number = 1.0;;
    

    let ratioY: number = 1.0;;
    

                        if(scale)
                        
                                    {
                                    ratioX= widthRatio;
    
ratioY= heightRatio;
    

                                    }
                                

    let affineTransform: AffineTransform = AffineTransform.getScaleInstance(ratioX, ratioY)!;;
    

                        if(!scale && allowTranslate)
                        
                                    {
                                    
    let dx: number = (newWidth -width) /2;;
    

    let dy: number = (newHeight -height) /2;;
    
affineTransform!.translate(dx, dy);
    

                                    }
                                

    let newBufferedImage: BufferedImage = new BufferedImage(newWidth, newHeight, BufferedImage.TYPE_INT_ARGB_PRE);;
    

    let graphics: Graphics2D = newBufferedImage!.createGraphics()!;;
    
graphics.drawRenderedImage(bufferedImage, affineTransform);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newBufferedImage;
    
}


                //@Throws(Exception.constructor)
            
    public createBufferedImageWithLargerCanvas(bufferedImage: BufferedImage, newWidth: number, newHeight: number): BufferedImage{

    let width: number = bufferedImage!.getWidth()!;;
    

    let height: number = bufferedImage!.getHeight()!;;
    

    let d_newWidth: number = newWidth;;
    

    let d_newHeight: number = newHeight;;
    

    let widthRatio: number = d_newWidth /width;;
    

    let heightRatio: number = d_newHeight /height;;
    

    let dx2: number = globalThis.Math.trunc((newWidth -width));;
    

    let dy2: number = globalThis.Math.trunc((newHeight -height));;
    

    let dx: number = globalThis.Math.trunc(globalThis.Math.trunc(dx2) /2);;
    

    let dy: number = globalThis.Math.trunc(globalThis.Math.trunc(dy2) /2);;
    

    let dx4: number = globalThis.Math.trunc(globalThis.Math.trunc(dx2) /4);;
    

    let dy4: number = globalThis.Math.trunc(globalThis.Math.trunc(dy2) /4);;
    

    let newBufferedImage: BufferedImage = new BufferedImage(newWidth, newHeight, BufferedImage.TYPE_INT_ARGB_PRE);;
    

    let graphics: Graphics2D = newBufferedImage!.createGraphics()!;;
    
graphics.drawImage(bufferedImage, dx4, dy4, 
                            null);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newBufferedImage;
    
}


    public convertToBufferedImage(toolkitImage: java.awt.Image): BufferedImage{

                        if(toolkitImage == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                                    }
                                

    let bufferedImage: BufferedImage = new BufferedImage(toolkitImage!.getWidth(
                            null), toolkitImage!.getHeight(
                            null), BufferedImage.TYPE_INT_ARGB);;
    

    let g2d: Graphics2D = bufferedImage!.createGraphics()!;;
    
g2d.drawImage(toolkitImage, 0, 0, 
                            null);
    
g2d.dispose();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImage;
    
}


    public getBufferedImage(image: Image): BufferedImage{

    let bufferedImage: BufferedImage;;
    

                        if(image.isMutable())
                        
                                    {
                                    
    let j2seImage: J2SEMutableImage = image as J2SEMutableImage;;
    
bufferedImage= j2seImage!.getImage() as BufferedImage;
    

                                    }
                                
                        else {
                            
    let j2seImage: J2SEImmutableImage = image as J2SEImmutableImage;;
    
bufferedImage= j2seImage!.getImage() as BufferedImage;
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImage;
    
}


    public toString(bufferedImage: BufferedImage): string{

    let commonLabels: CommonLabels = CommonLabels.getInstance()!;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(" BufferedImage -");
    
stringBuffer!.append(commonLabels!.WIDTH_LABEL);
    
stringBuffer!.appendint(bufferedImage!.getWidth());
    
stringBuffer!.append(commonLabels!.HEIGHT_LABEL);
    
stringBuffer!.appendint(bufferedImage!.getHeight());
    
stringBuffer!.append(" Type: ");
    
stringBuffer!.appendint(bufferedImage!.getType());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}

