
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
        
import { SWT } from '../../../../org/eclipse/swt/SWT.js';
//not GWT import const SWT

import { Canvas } from '../../../../org/eclipse/swt/widgets/Canvas.js';
//not GWT import const Canvas

import { Composite } from '../../../../org/eclipse/swt/widgets/Composite.js';
//not GWT import const Composite

import { GC } from '../../../../org/eclipse/swt/graphics/GC.js';
//not GWT import const GC

import { ImageData } from '../../../../org/eclipse/swt/graphics/ImageData.js';
//not GWT import const ImageData

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

import { PaintEvent } from '../../../../org/eclipse/swt/events/PaintEvent.js';
//not GWT import const PaintEvent

import { PaintListener } from '../../../../org/eclipse/swt/events/PaintListener.js';
//not GWT import const PaintListener

import { Transform } from '../../../../org/eclipse/swt/graphics/Transform.js';
//not GWT import const Transform

import { Display } from '../../../../org/eclipse/swt/widgets/Display.js';
//not GWT import const Display

import { BareMain } from '../../../../org/microemu/app/BareMain.js';
//not GWT import const BareMain

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Image } from './Image.js';
//sameFolderImports - not GWT import - same folder const Image

export class ImageUtil
            extends Object
         {
        

    private static readonly instance: ImageUtil = new ImageUtil();

    public static getInstance(): ImageUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;

    private IIOIMAGE_POOL_NAME: string = "IIOIMAGE_POOL_NAME";

    private readonly CREATE_BUFFERED_IMAGE: string = "createBufferedImage";

private constructor (){

            super();
        
 try { this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    

 }
   }
 
}


    public create(width: number, height: number): org.eclipse.swt.graphics.Image{

    let display: Display = BareMain.shell.getDisplay()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new org.eclipse.swt.graphics.Image(display, width, height);
    
}


                //@Throws(Exception.constructor)
            
    public createBufferedImage(bufferedImageArray: org.eclipse.swt.graphics.Image[], percent: number, scale: boolean): org.eclipse.swt.graphics.Image[]{

    let size: number = bufferedImageArray!.length
                ;;
    

    let scaledBufferedImageArray: org.eclipse.swt.graphics.Image[] = new Array(size);;
    

    let bufferedImage: org.eclipse.swt.graphics.Image;;
    

    let imageData: ImageData;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
bufferedImage= bufferedImageArray[index]!;
    
imageData= bufferedImage!.getImageData();
    

    let newWidth: number = globalThis.Math.trunc((imageData!.width *percent /100));;
    

    let newHeight: number = globalThis.Math.trunc((imageData!.height *percent /100));;
    
scaledBufferedImageArray[index]= this.createBufferedImage5(bufferedImage, newWidth, newHeight, scale);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaledBufferedImageArray;
    
}


                //@Throws(Exception.constructor)
            
    public createBufferedImage2(bufferedImageArray: org.eclipse.swt.graphics.Image[], percent: number, scale: boolean): org.eclipse.swt.graphics.Image[]{

    let size: number = bufferedImageArray!.length
                ;;
    

    let scaledBufferedImageArray: org.eclipse.swt.graphics.Image[] = new Array(size);;
    

    let bufferedImage: org.eclipse.swt.graphics.Image;;
    

    let imageData: ImageData;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
bufferedImage= bufferedImageArray[index]!;
    
imageData= bufferedImage!.getImageData();
    

    let newWidth: number = globalThis.Math.trunc((imageData!.width *percent));;
    

    let newHeight: number = globalThis.Math.trunc((imageData!.height *percent));;
    
scaledBufferedImageArray[index]= this.createBufferedImage5(bufferedImage, newWidth, newHeight, scale);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaledBufferedImageArray;
    
}


                //@Throws(Exception.constructor)
            
    public createBufferedImage3(bufferedImageArray: org.eclipse.swt.graphics.Image[], width: number, height: number, scale: boolean): org.eclipse.swt.graphics.Image[]{

    let size: number = bufferedImageArray!.length
                ;;
    

    let scaledBufferedImageArray: org.eclipse.swt.graphics.Image[] = new Array(size);;
    




                        for (
    let index: number = 0;index < size; index++)
        {
scaledBufferedImageArray[index]= this.createBufferedImage5(bufferedImageArray[index]!, width, height, scale);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaledBufferedImageArray;
    
}


                //@Throws(Exception.constructor)
            
    public createBufferedImage4(bufferedImage: org.eclipse.swt.graphics.Image, newWidth: number, newHeight: number): org.eclipse.swt.graphics.Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createBufferedImage5(bufferedImage, newWidth, newHeight, true);;
    
}


                //@Throws(Exception.constructor)
            
    public createBufferedImage5(bufferedImage: org.eclipse.swt.graphics.Image, newWidth: number, newHeight: number, scale: boolean): org.eclipse.swt.graphics.Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createBufferedImage6(bufferedImage, newWidth, newHeight, scale, false);;
    
}


                //@Throws(Exception.constructor)
            
    public createBufferedImage6(bufferedImage: org.eclipse.swt.graphics.Image, newWidth: number, newHeight: number, scale: boolean, allowTranslate: boolean): org.eclipse.swt.graphics.Image{

    let imageData: ImageData = bufferedImage!.getImageData()!;;
    

    let width: number = imageData!.width;;
    

    let height: number = imageData!.height;;
    

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
                                
this.logUtil!.putF(new StringMaker().appendfloat(width)!.append(this.commonSeps!.FORWARD_SLASH)!.appendfloat(height)!.append(this.commonSeps!.COLON)!.appendint(newWidth)!.append(this.commonSeps!.FORWARD_SLASH)!.appendint(newHeight)!.append(this.commonSeps!.COLON)!.appendfloat(widthRatio)!.append(this.commonSeps!.FORWARD_SLASH)!.appendfloat(heightRatio)!.toString(), this, this.CREATE_BUFFERED_IMAGE);
    

    let dx: number = 0;;
    

    let dy: number = 0;;
    

                        if(!scale && allowTranslate)
                        
                                    {
                                    dx= (newWidth -width) /2;
    
dy= (newHeight -height) /2;
    
this.logUtil!.putF(new StringMaker().append("Translate dx: ")!.appendfloat(dx)!.append(" dy: ")!.appendfloat(dy)!.toString(), this, this.CREATE_BUFFERED_IMAGE);
    

                                    }
                                

    let newBufferedImage: org.eclipse.swt.graphics.Image = new org.eclipse.swt.graphics.Image(BareMain.shell.getDisplay(), newWidth, newHeight);;
    

    let gc: GC = new GC(newBufferedImage);;
    

    let affineTransform: Transform = new Transform(gc.getDevice());;
    
affineTransform!.scale(ratioX, ratioY);
    
affineTransform!.translate(dx, dy);
    
gc.setTransform(affineTransform);
    
gc.setAntialias(SWT.ON);
    
gc.setInterpolation(SWT.HIGH);
    
gc.drawImage(bufferedImage, 0, 0, bufferedImage!.getBounds()!.width, bufferedImage!.getBounds()!.height, 0, 0, newWidth, newHeight);
    
gc.dispose();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newBufferedImage;
    
}


    public drawTransformedImage(image: org.eclipse.swt.graphics.Image, parent: Composite, dx: number, dy: number, width: number, height: number): Canvas{

    let imageCanvas: Canvas = new Canvas(parent, SWT.NONE);;
    
imageCanvas!.addPaintListener(new class extends PaintListener
                                {
                                
    public paintControl(event: PaintEvent){

    let gc: GC = event.gc;;
    

    let affineTransform: Transform = new Transform(gc.getDevice());;
    
affineTransform!.translate(dx, dy);
    
gc.setAntialias(SWT.ON);
    
gc.setInterpolation(SWT.HIGH);
    
gc.drawImage(image, 0, 0, image.getBounds()!.width, image.getBounds()!.height, 0, 0, width, height);
    
}

                                }
                            );
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageCanvas;
    
}


    public toString(bufferedImage: org.eclipse.swt.graphics.Image): string{

    let commonLabels: CommonLabels = CommonLabels.getInstance()!;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    

    let imageData: ImageData = bufferedImage!.getImageData()!;;
    
stringBuffer!.append(" org.eclipse.swt.graphics.Image: ");
    
stringBuffer!.append(commonLabels!.WIDTH_LABEL);
    
stringBuffer!.appendint(imageData!.width);
    
stringBuffer!.append(commonLabels!.HEIGHT_LABEL);
    
stringBuffer!.appendint(imageData!.height);
    
stringBuffer!.append(" Type: ");
    
stringBuffer!.appendint(imageData!.type);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}

