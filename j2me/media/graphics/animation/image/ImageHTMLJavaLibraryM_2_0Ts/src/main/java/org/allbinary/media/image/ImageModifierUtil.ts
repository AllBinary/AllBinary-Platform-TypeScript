
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
        
            import { Throwable } from '../../../../java/lang/Throwable.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
      //not GWT import const Anchor = globalThis.org.allbinary.graphics.Anchor;

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { PlaynImage } from '../../../../org/microemu/device/playn/PlaynImage.js';
      const PlaynImage = globalThis.org.microemu.device.playn.PlaynImage;

      
//not plain js import { ResourceCallbackStrings } from '../../../../org/microemu/device/ResourceCallbackStrings.js';
      const ResourceCallbackStrings = globalThis.org.microemu.device.ResourceCallbackStrings;

      
import { Callback } from '../../../../playn/core/Callback.js';
      //not GWT import const Callback = globalThis.playn.core.Callback;

      
import { Canvas } from '../../../../playn/core/Canvas.js';
      //not GWT import const Canvas = globalThis.playn.core.Canvas;

      
import { ImageImpl } from '../../../../playn/core/ImageImpl.js';
      //not GWT import const ImageImpl = globalThis.playn.core.ImageImpl;

      
import { PlayN } from '../../../../playn/core/PlayN.js';
      //not GWT import const PlayN = globalThis.playn.core.PlayN;

      
import { HtmlGraphics } from '../../../../playn/html/HtmlGraphics.js';
      //not GWT import const HtmlGraphics = globalThis.playn.html.HtmlGraphics;

      
import { HtmlImage } from '../../../../playn/html/HtmlImage.js';
      //not GWT import const HtmlImage = globalThis.playn.html.HtmlImage;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageModifierUtil
            extends Object
         {
        

    public static getInstanceOrCreate(): ImageModifierUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ImageModifierUtil();
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly resourceCallbackStrings: ResourceCallbackStrings = ResourceCallbackStrings.getInstance()!;

    private alphaArray: boolean[];

    public setColor(unusedOriginalImage: Image, image: Image, imageIndex: number, basicColor: BasicColor){
}


    public changeColor(unusedOriginalImage: Image, image: Image, imageIndex: number, basicColor: BasicColor){
}


    public setAlpha(originalImage: Image, image: Image, imageIndex: number, alpha: number){

    var alphaF: number = alpha;;
    

    var alphaFloat: number = alphaF /255;;
    
this.setAlphaF(originalImage, image, imageIndex, alphaFloat);
    
}


    public setAlphaF(originalImage: Image, image: Image, imageIndex: number, alpha: number){

                        if(this.alphaArray[imageIndex])
                        
                                    {
                                    this.alphaArray[imageIndex]= false;
    
this.setAlpha2(originalImage, image, imageIndex, alpha);
    

                                    }
                                
}


    public setAlpha2(originalImage: Image, image: Image, imageIndex: number, alpha: number){

    var htmlImage: PlaynImage = image as PlaynImage;;
    

    var canvasImage: ImageImpl = htmlImage!.getImage() as ImageImpl;;
    

    var originalPlaynImage: playn.core.Image = (originalImage as PlaynImage).getImage() as playn.core.Image;;
    

    var playN: PlayN = PlayN.getInstance()!;;
    

    var canvas: Canvas = (graphics as HtmlGraphics).get(canvasImage as HtmlImage)!;;
    
canvas.clear();
    
canvas.setAlpha(alpha);
    
canvas.draw(originalPlaynImage, 0, 0);
    
}


    public setAlpha3(image: Image, alpha: number){

    var alphaF: number = alpha;;
    

    var alphaFloat: number = alphaF /255;;
    

    var htmlImage: PlaynImage = image as PlaynImage;;
    

    var canvasImage: ImageImpl = htmlImage!.getImage() as ImageImpl;;
    

    var playN: PlayN = PlayN.getInstance()!;;
    

    var canvas: Canvas = (graphics as HtmlGraphics).get(canvasImage as HtmlImage)!;;
    
canvas.setAlpha(alphaFloat);
    
}


    public getImageArray(originalImageArray: Image[]): Image[]{

    var size: number = originalImageArray!.length
                ;;
    
this.alphaArray= new Array(size);
    

    var imageArray: Image[] = new Array(size);;
    




                        for (
    var index: number = 0;index < size; index++)
        {
imageArray[index]= originalImageArray[index]!;
    
this.handleImage(imageArray, index, originalImageArray[index]!);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageArray;
    
}


    public handleImage(imageArray: Image[], index: number, image: Image){

    var image3: playn.core.Image = (image as PlaynImage).getImage() as playn.core.Image;;
    

                        if(image3 != 
                                    null
                                )
                        
                                    {
                                    
                        if(image3.isReady() || image3.width() +image3.height() <= 0 || image.getName() == this.resourceCallbackStrings!.FROM_DATA)
                        
                                    {
                                    this.copy(imageArray, index, image, image3);
    

                                    }
                                
                        else {
                            
    var callback: Callback = new class extends Callback
                                {
                                
    public onSuccess(resource: any = {}){

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    
logUtil!.putF(resourceCallbackStrings!.DONE +image.getName(), this, resourceCallbackStrings!.HANDLE_IMAGE);
    
copy(imageArray, index, image, image3);
    
}

    public onFailure(e: Throwable){

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    
logUtil!.put(new StringMaker().append(commonStrings!.EXCEPTION_LABEL)!.append(resourceCallbackStrings!.ERROR)!.append(image.getName())!.toString(), this, resourceCallbackStrings!.HANDLE_IMAGE, e);
    
}

                                }
                            ;;
    
image3.addCallback(callback);
    

                        }
                            

                                    }
                                
                        else {
                            this.logUtil!.putF(this.resourceCallbackStrings!.NULL +image.isMutable(), this, this.resourceCallbackStrings!.HANDLE_IMAGE);
    

                        }
                            
}


    public copy(imageArray: Image[], index: number, image: Image, image3: playn.core.Image){

        try {
            
    var image2: Image = Image.createImageWH(Math.round(image3.width()), Math.round(image3.height()))!;;
    

    var graphics: Graphics = image2.getGraphics()!;;
    
graphics.drawImage(image, 0, 0, Anchor.TOP_LEFT);
    
imageArray[index]= image2;
    

                //: 
} catch(e) 
            {
this.logUtil!.putF(this.commonStrings!.EXCEPTION_LABEL +resourceCallbackStrings!.DONE, this, resourceCallbackStrings!.HANDLE_IMAGE);
    
}

}


    public reset(){

    var size: number = this.alphaArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
this.alphaArray[index]= true;
    
}

}


}



