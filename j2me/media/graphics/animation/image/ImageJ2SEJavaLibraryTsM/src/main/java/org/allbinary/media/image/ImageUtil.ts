
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
      //not GWT import const Graphics2D = globalThis.java.awt.Graphics2D;

      
import { GraphicsConfiguration } from '../../../../java/awt/GraphicsConfiguration.js';
      //not GWT import const GraphicsConfiguration = globalThis.java.awt.GraphicsConfiguration;

      
import { GraphicsDevice } from '../../../../java/awt/GraphicsDevice.js';
      //not GWT import const GraphicsDevice = globalThis.java.awt.GraphicsDevice;

      
import { GraphicsEnvironment } from '../../../../java/awt/GraphicsEnvironment.js';
      //not GWT import const GraphicsEnvironment = globalThis.java.awt.GraphicsEnvironment;

      
import { Transparency } from '../../../../java/awt/Transparency.js';
      //not GWT import const Transparency = globalThis.java.awt.Transparency;

      
import { AffineTransform } from '../../../../java/awt/geom/AffineTransform.js';
      //not GWT import const AffineTransform = globalThis.java.awt.geom.AffineTransform;

      
import { BufferedImage } from '../../../../java/awt/image/BufferedImage.js';
      //not GWT import const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { J2SEImmutableImage } from '../../../../org/microemu/device/j2se/J2SEImmutableImage.js';
      //not GWT import const J2SEImmutableImage = globalThis.org.microemu.device.j2se.J2SEImmutableImage;

      
import { J2SEMutableImage } from '../../../../org/microemu/device/j2se/J2SEMutableImage.js';
      //not GWT import const J2SEMutableImage = globalThis.org.microemu.device.j2se.J2SEMutableImage;

      
















                                        
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

    var ge: GraphicsEnvironment = GraphicsEnvironment.getLocalGraphicsEnvironment()!;;
    

    var gd: GraphicsDevice = ge.getDefaultScreenDevice()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gd.getDefaultConfiguration();;
    
}


    public create(width: number, height: number): BufferedImage{

    var graphicsConfiguration: GraphicsConfiguration = this.getDefaultConfiguration()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return graphicsConfiguration!.createCompatibleImage(width, height, Transparency.TRANSLUCENT);;
    
}


                //@Throws(Exception.constructor)
            
    public createBufferedImageForResize(bufferedImageArray: BufferedImage[], percent: number, scale: boolean): BufferedImage[]{

    var size: number = bufferedImageArray!.length
                ;;
    

    var scaledBufferedImageArray: BufferedImage[] = new Array(size);;
    

    var bufferedImage: BufferedImage;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
bufferedImage= bufferedImageArray[index]!;
    

    var newWidth: number = Math.round((bufferedImage!.getWidth() *percent /100));;
    

    var newHeight: number = Math.round((bufferedImage!.getHeight() *percent /100));;
    
scaledBufferedImageArray[index]= this.createBufferedImage(bufferedImage, newWidth, newHeight, scale);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaledBufferedImageArray;
    
}


                //@Throws(Exception.constructor)
            
    public createBufferedImage2(bufferedImageArray: BufferedImage[], percent: number, scale: boolean): BufferedImage[]{

    var size: number = bufferedImageArray!.length
                ;;
    

    var scaledBufferedImageArray: BufferedImage[] = new Array(size);;
    

    var bufferedImage: BufferedImage;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
bufferedImage= bufferedImageArray[index]!;
    

    var newWidth: number = Math.round((bufferedImage!.getWidth() *percent));;
    

    var newHeight: number = Math.round((bufferedImage!.getHeight() *percent));;
    
scaledBufferedImageArray[index]= this.createBufferedImage(bufferedImage, newWidth, newHeight, scale);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaledBufferedImageArray;
    
}


                //@Throws(Exception.constructor)
            
    public createBufferedImage3(bufferedImageArray: BufferedImage[], width: number, height: number, scale: boolean): BufferedImage[]{

    var size: number = bufferedImageArray!.length
                ;;
    

    var scaledBufferedImageArray: BufferedImage[] = new Array(size);;
    




                        for (
    var index: number = 0;index < size; index++)
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

    var width: number = bufferedImage!.getWidth()!;;
    

    var height: number = bufferedImage!.getHeight()!;;
    

    var d_newWidth: number = newWidth;;
    

    var d_newHeight: number = newHeight;;
    

    var widthRatio: number = d_newWidth /width;;
    

    var heightRatio: number = d_newHeight /height;;
    

    var ratioX: number = 1.0;;
    

    var ratioY: number = 1.0;;
    

                        if(scale)
                        
                                    {
                                    ratioX= widthRatio;
    
ratioY= heightRatio;
    

                                    }
                                

    var affineTransform: AffineTransform = AffineTransform.getScaleInstance(ratioX, ratioY)!;;
    

                        if(!scale && allowTranslate)
                        
                                    {
                                    
    var dx: number = (newWidth -width) /2;;
    

    var dy: number = (newHeight -height) /2;;
    
affineTransform!.translate(dx, dy);
    

                                    }
                                

    var newBufferedImage: BufferedImage = new BufferedImage(newWidth, newHeight, BufferedImage.TYPE_INT_ARGB_PRE);;
    

    var graphics: Graphics2D = newBufferedImage!.createGraphics()!;;
    
graphics.drawRenderedImage(bufferedImage, affineTransform);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newBufferedImage;
    
}


                //@Throws(Exception.constructor)
            
    public createBufferedImageWithLargerCanvas(bufferedImage: BufferedImage, newWidth: number, newHeight: number): BufferedImage{

    var width: number = bufferedImage!.getWidth()!;;
    

    var height: number = bufferedImage!.getHeight()!;;
    

    var d_newWidth: number = newWidth;;
    

    var d_newHeight: number = newHeight;;
    

    var widthRatio: number = d_newWidth /width;;
    

    var heightRatio: number = d_newHeight /height;;
    

    var dx2: number = Math.round((newWidth -width));;
    

    var dy2: number = Math.round((newHeight -height));;
    

    var dx: number = Math.round(dx2) /2;;
    

    var dy: number = Math.round(dy2) /2;;
    

    var dx4: number = Math.round(dx2) /4;;
    

    var dy4: number = Math.round(dy2) /4;;
    

    var newBufferedImage: BufferedImage = new BufferedImage(newWidth, newHeight, BufferedImage.TYPE_INT_ARGB_PRE);;
    

    var graphics: Graphics2D = newBufferedImage!.createGraphics()!;;
    
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
                                

    var bufferedImage: BufferedImage = new BufferedImage(toolkitImage!.getWidth(
                            null), toolkitImage!.getHeight(
                            null), BufferedImage.TYPE_INT_ARGB);;
    

    var g2d: Graphics2D = bufferedImage!.createGraphics()!;;
    
g2d.drawImage(toolkitImage, 0, 0, 
                            null);
    
g2d.dispose();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImage;
    
}


    public getBufferedImage(image: Image): BufferedImage{

    var bufferedImage: BufferedImage;;
    

                        if(image.isMutable())
                        
                                    {
                                    
    var j2seImage: J2SEMutableImage = image as J2SEMutableImage;;
    
bufferedImage= j2seImage!.getImage() as BufferedImage;
    

                                    }
                                
                        else {
                            
    var j2seImage: J2SEImmutableImage = image as J2SEImmutableImage;;
    
bufferedImage= j2seImage!.getImage() as BufferedImage;
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImage;
    
}


    public toString(bufferedImage: BufferedImage): string{

    var commonLabels: CommonLabels = CommonLabels.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
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



