
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
        



import { SWT } from "../../../../org/eclipse/swt/SWT.js";

    
import { Canvas } from "../../../../org/eclipse/swt/widgets/Canvas.js";

    
import { Composite } from "../../../../org/eclipse/swt/widgets/Composite.js";

    
import { GC } from "../../../../org/eclipse/swt/graphics/GC.js";

    
import { ImageData } from "../../../../org/eclipse/swt/graphics/ImageData.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonLabels } from "../../../../org/allbinary/string/CommonLabels.js";

    
import { PaintEvent } from "../../../../org/eclipse/swt/events/PaintEvent.js";

    
import { PaintListener } from "../../../../org/eclipse/swt/events/PaintListener.js";

    
import { Transform } from "../../../../org/eclipse/swt/graphics/Transform.js";

    
import { Display } from "../../../../org/eclipse/swt/widgets/Display.js";

    
import { BareMain } from "../../../../org/microemu/app/BareMain.js";

    

export class ImageUtil
            extends Object
         {
        

    private static readonly instance: ImageUtil = new ImageUtil();
        
        

    public static getInstance(): ImageUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

    private IIOIMAGE_POOL_NAME: string = "IIOIMAGE_POOL_NAME";
        
        

    private readonly CREATE_BUFFERED_IMAGE: string = "createBufferedImage";
        
        
private constructor (){

            super();
            
        try {
            logUtil!.put(commonStrings!.START, this, commonStrings!.CONSTRUCTOR);
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    
}

}


    public create(width: number, height: number): org.eclipse.swt.graphics.Image{
    //var width = width
    //var height = height

    var display: Display = BareMain.shell.getDisplay()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new org.eclipse.swt.graphics.Image(display, width, height);
    
}


                //@Throws(Error::class)
            
    public createBufferedImage(bufferedImageArray: org.eclipse.swt.graphics.Image[], percent: number, scale: boolean): org.eclipse.swt.graphics.Image[]{
    //var bufferedImageArray = bufferedImageArray
    //var percent = percent
    //var scale = scale

    var size: number = bufferedImageArray!.length
                ;
        
        
;
    

    var scaledBufferedImageArray: org.eclipse.swt.graphics.Image[] = new Array(size);
        
        
;
    

    var bufferedImage: org.eclipse.swt.graphics.Image
;
    

    var imageData: ImageData
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
bufferedImage= bufferedImageArray[index]!;
    
imageData= bufferedImage!.getImageData();
    

    var newWidth: number = (imageData!.width *percent /100).toInt();
        
        
;
    

    var newHeight: number = (imageData!.height *percent /100).toInt();
        
        
;
    
scaledBufferedImageArray[index]= this.createBufferedImage(bufferedImage, newWidth, newHeight, scale);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaledBufferedImageArray;
    
}


                //@Throws(Error::class)
            
    public createBufferedImage(bufferedImageArray: org.eclipse.swt.graphics.Image[], percent: number, scale: boolean): org.eclipse.swt.graphics.Image[]{
    //var bufferedImageArray = bufferedImageArray
    //var percent = percent
    //var scale = scale

    var size: number = bufferedImageArray!.length
                ;
        
        
;
    

    var scaledBufferedImageArray: org.eclipse.swt.graphics.Image[] = new Array(size);
        
        
;
    

    var bufferedImage: org.eclipse.swt.graphics.Image
;
    

    var imageData: ImageData
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
bufferedImage= bufferedImageArray[index]!;
    
imageData= bufferedImage!.getImageData();
    

    var newWidth: number = (imageData!.width *percent).toInt();
        
        
;
    

    var newHeight: number = (imageData!.height *percent).toInt();
        
        
;
    
scaledBufferedImageArray[index]= this.createBufferedImage(bufferedImage, newWidth, newHeight, scale);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaledBufferedImageArray;
    
}


                //@Throws(Error::class)
            
    public createBufferedImage(bufferedImageArray: org.eclipse.swt.graphics.Image[], width: number, height: number, scale: boolean): org.eclipse.swt.graphics.Image[]{
    //var bufferedImageArray = bufferedImageArray
    //var width = width
    //var height = height
    //var scale = scale

    var size: number = bufferedImageArray!.length
                ;
        
        
;
    

    var scaledBufferedImageArray: org.eclipse.swt.graphics.Image[] = new Array(size);
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
scaledBufferedImageArray[index]= this.createBufferedImage(bufferedImageArray[index]!, width, height, scale);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaledBufferedImageArray;
    
}


                //@Throws(Error::class)
            
    public createBufferedImage(bufferedImage: org.eclipse.swt.graphics.Image, newWidth: number, newHeight: number): org.eclipse.swt.graphics.Image{
    //var bufferedImage = bufferedImage
    //var newWidth = newWidth
var newHeight = newHeight



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createBufferedImage(bufferedImage, newWidth, newHeight, true);

                        ;
    
}


                //@Throws(Error::class)
            
    public createBufferedImage(bufferedImage: org.eclipse.swt.graphics.Image, newWidth: number, newHeight: number, scale: boolean): org.eclipse.swt.graphics.Image{
    //var bufferedImage = bufferedImage
    //var newWidth = newWidth
var newHeight = newHeight
    //var scale = scale



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createBufferedImage(bufferedImage, newWidth, newHeight, scale, false);

                        ;
    
}


                //@Throws(Error::class)
            
    public createBufferedImage(bufferedImage: org.eclipse.swt.graphics.Image, newWidth: number, newHeight: number, scale: boolean, allowTranslate: boolean): org.eclipse.swt.graphics.Image{
    //var bufferedImage = bufferedImage
    //var newWidth = newWidth
var newHeight = newHeight
    //var scale = scale
    //var allowTranslate = allowTranslate

    var imageData: ImageData = bufferedImage!.getImageData()!;
        
        
;
    

    var width: number = imageData!.width;
        
        
;
    

    var height: number = imageData!.height;
        
        
;
    

    var d_newWidth: number = newWidth;
        
        
;
    

    var d_newHeight: number = newHeight;
        
        
;
    

    var widthRatio: number = d_newWidth /width;
        
        
;
    

    var heightRatio: number = d_newHeight /height;
        
        
;
    

    var ratioX: number = 1.0f;
        
        
;
    

    var ratioY: number = 1.0f;
        
        
;
    

                        if(scale)
                        
                                    {
                                    ratioX= widthRatio;
    
ratioY= heightRatio;
    

                                    }
                                
logUtil!.put(new StringMaker().
                            appendfloat(width)!.append(this.commonSeps!.FORWARD_SLASH)!.appendfloat(height)!.append(this.commonSeps!.COLON)!.appendint(newWidth)!.append(this.commonSeps!.FORWARD_SLASH)!.appendint(newHeight)!.append(this.commonSeps!.COLON)!.appendfloat(widthRatio)!.append(this.commonSeps!.FORWARD_SLASH)!.appendfloat(heightRatio)!.toString(), this, CREATE_BUFFERED_IMAGE);
    

    var dx: number = 0;
        
        
;
    

    var dy: number = 0;
        
        
;
    

                        if(!scale && allowTranslate)
                        
                                    {
                                    dx= (newWidth -width) /2;
    
dy= (newHeight -height) /2;
    
logUtil!.put(new StringMaker().
                            append("Translate dx: ")!.appendfloat(dx)!.append(" dy: ")!.appendfloat(dy)!.toString(), this, CREATE_BUFFERED_IMAGE);
    

                                    }
                                

    var newBufferedImage: org.eclipse.swt.graphics.Image = new org.eclipse.swt.graphics.Image(BareMain.shell.getDisplay(), newWidth, newHeight);
        
        
;
    

    var gc: GC = new GC(newBufferedImage);
        
        
;
    

    var affineTransform: Transform = new Transform(gc.getDevice());
        
        
;
    
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
    //var image = image
    //var parent = parent
    //var dx = dx
    //var dy = dy
    //var width = width
    //var height = height

    var imageCanvas: Canvas = new Canvas(parent, SWT.NONE);
        
        
;
    
imageCanvas!.addPaintListener(new object: PaintListener()
                                {
                                
    public paintControl(event: PaintEvent){
var event = event

    var gc: GC = event.gc;
        
        
;
    

    var affineTransform: Transform = new Transform(gc.getDevice());
        
        
;
    
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
var bufferedImage = bufferedImage

    var commonLabels: CommonLabels = CommonLabels.getInstance()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var imageData: ImageData = bufferedImage!.getImageData()!;
        
        
;
    
stringBuffer!.append(" org.eclipse.swt.graphics.Image: ");
    
stringBuffer!.append(commonLabels!.WIDTH_LABEL);
    
stringBuffer!.appendint(imageData!.width);
    
stringBuffer!.append(commonLabels!.HEIGHT_LABEL);
    
stringBuffer!.appendint(imageData!.height);
    
stringBuffer!.append(" Type: ");
    
stringBuffer!.appendint(imageData!.type);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

