
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { Anchor } from "../../../../org/allbinary/graphics/Anchor.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { PlaynImage } from "../../../../org/microemu/device/playn/PlaynImage.js";

    
import { ResourceCallbackStrings } from "../../../../org/microemu/device/ResourceCallbackStrings.js";

    
import { Canvas } from "../../../../playn/core/Canvas.js";

    
import { CanvasImage } from "../../../../playn/core/CanvasImage.js";

    
import { ResourceCallback } from "../../../../playn/core/ResourceCallback.js";

    

export class ImageModifierUtil
            extends Object
         {
        

    public static getInstanceOrCreate(): ImageModifierUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageModifierUtil();
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly resourceCallbackStrings: ResourceCallbackStrings = ResourceCallbackStrings.getInstance()!;
        
        

    private alphaArray: BooleanArray

    public setColor(unusedOriginalImage: Image, image: Image, imageIndex: number, basicColor: BasicColor){
    //var unusedOriginalImage = unusedOriginalImage
    //var image = image
    //var imageIndex = imageIndex
    //var basicColor = basicColor
}


    public changeColor(unusedOriginalImage: Image, image: Image, imageIndex: number, basicColor: BasicColor){
    //var unusedOriginalImage = unusedOriginalImage
    //var image = image
    //var imageIndex = imageIndex
    //var basicColor = basicColor
}


    public setAlpha(originalImage: Image, image: Image, imageIndex: number, alpha: number){
    //var originalImage = originalImage
    //var image = image
    //var imageIndex = imageIndex
    //var alpha = alpha

    var alphaF: number = alpha;
        
        


    var alphaFloat: number = alphaF /255;
        
        

this.this.setAlpha(originalImage, image, imageIndex, alphaFloat)
}


    public setAlpha(originalImage: Image, image: Image, imageIndex: number, alpha: number){
    //var originalImage = originalImage
    //var image = image
    //var imageIndex = imageIndex
    //var alpha = alpha

                        if(this.alphaArray[imageIndex])
                        
                                    {
                                    this.alphaArray[imageIndex]= false
this.this.setAlpha2(originalImage, image, imageIndex, alpha)

                                    }
                                
}


    public setAlpha2(originalImage: Image, image: Image, imageIndex: number, alpha: number){
    //var originalImage = originalImage
    //var image = image
    //var imageIndex = imageIndex
    //var alpha = alpha

    var htmlImage: PlaynImage = image as PlaynImage;
        
        


    var canvasImage: CanvasImage = htmlImage!.getImage() as CanvasImage;
        
        


    var originalPlaynImage: playn.core.Image = 
                                    (originalImage as PlaynImage).getImage() as playn.core.Image;
        
        


    var canvas: Canvas = canvasImage!.canvas()!;
        
        

canvas.clear()
canvas.setAlpha(alpha)
canvas.drawImage(originalPlaynImage, 0, 0)
}


    public setAlpha3(image: Image, alpha: number){
    //var image = image
    //var alpha = alpha

    var alphaF: number = alpha;
        
        


    var alphaFloat: number = alphaF /255;
        
        


    var htmlImage: PlaynImage = image as PlaynImage;
        
        


    var canvasImage: CanvasImage = htmlImage!.getImage() as CanvasImage;
        
        


    var canvas: Canvas = canvasImage!.canvas()!;
        
        

canvas.setAlpha(alphaFloat)
}


    public getImageArray(originalImageArray: Image[]): Image[]{
    //var originalImageArray = originalImageArray

    var size: number = originalImageArray!.length
                ;
        
        

this.alphaArray= BooleanArray(size)

    var imageArray: Image[] = new Array(size);
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
imageArray[index]= originalImageArray[index]!
this.this.handleImage(imageArray, index, originalImageArray[index]!)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageArray;
    
}


    public handleImage(imageArray: Image[], index: number, image: Image){
    //var imageArray = imageArray
    //var index = index
    //var image = image

    var image3: playn.core.Image = 
                                    (image as PlaynImage).getImage() as playn.core.Image;
        
        


                        if(image3 != 
                                    null
                                )
                        
                                    {
                                    
                        if(image3.isReady() || image3.width() +image3.height() <= 0 || image.getName() == resourceCallbackStrings!.FROM_DATA)
                        
                                    {
                                    copy(imageArray, index, image, image3)

                                    }
                                
                        else {
                            
    var callback: ResourceCallback = new object: ResourceCallback()
                                {
                                
    public done(resource: any = {}){
var resource = resource
logUtil!.put(resourceCallbackStrings!.DONE +image.getName(), this, resourceCallbackStrings!.HANDLE_IMAGE)
copy(imageArray, index, image, image3)
}

    public error(e: Error){
var e = e
logUtil!.put(StringMaker().
                            append(commonStrings!.EXCEPTION_LABEL)!.append(resourceCallbackStrings!.ERROR)!.append(image.getName())!.toString(), this, resourceCallbackStrings!.HANDLE_IMAGE)
}

                                }
                            ;
        
        

image3.addCallback(callback)

                        }
                            

                                    }
                                
                        else {
                            logUtil!.put(resourceCallbackStrings!.NULL +image.isMutable(), this, resourceCallbackStrings!.HANDLE_IMAGE)

                        }
                            
}


    public copy(imageArray: Image[], index: number, image: Image, image3: playn.core.Image){
    //var imageArray = imageArray
    //var index = index
    //var image = image
    //var image3 = image3

        try {
            
    var image2: Image = Image.createImage(image3.width(), image3.height())!;
        
        


    var graphics: Graphics = image2.getGraphics()!;
        
        

graphics.drawImage(image, 0, 0, Anchor.TOP_LEFT)
imageArray[index]= image2
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION_LABEL +resourceCallbackStrings!.DONE, this, resourceCallbackStrings!.HANDLE_IMAGE)
}

}


    public reset(){

    var size: number = this.alphaArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
this.alphaArray[index]= true
}

}


}
                
            

