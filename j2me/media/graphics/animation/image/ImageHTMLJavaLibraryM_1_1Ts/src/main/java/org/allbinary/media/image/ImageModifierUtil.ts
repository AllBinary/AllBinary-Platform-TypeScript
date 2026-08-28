
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
        
//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
      const Anchor = globalThis.org.allbinary.graphics.Anchor;

      
//not game specific package import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { PlaynImage } from '../../../../org/microemu/device/playn/PlaynImage.js';
      const PlaynImage = globalThis.org.microemu.device.playn.PlaynImage;

      
//not game specific package import { ResourceCallbackStrings } from '../../../../org/microemu/device/ResourceCallbackStrings.js';
      const ResourceCallbackStrings = globalThis.org.microemu.device.ResourceCallbackStrings;

      
//not game specific package import { Canvas } from '../../../../playn/core/Canvas.js';
      const Canvas = globalThis.playn.core.Canvas;

      
//not game specific package import { CanvasImage } from '../../../../playn/core/CanvasImage.js';
      const CanvasImage = globalThis.playn.core.CanvasImage;

      
//not game specific package import { Callback } from '../../../../playn/core/util/Callback.js';
      const Callback = globalThis.playn.core.util.Callback;

      
















                                        
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
    

    var canvasImage: CanvasImage = htmlImage!.getImage() as CanvasImage;;
    

    var originalPlaynImage: playn.core.Image = (originalImage as PlaynImage).getImage() as playn.core.Image;;
    

    var canvas: Canvas = canvasImage!.canvas()!;;
    
canvas.clear();
    
canvas.setAlpha(alpha);
    
canvas.drawImage(originalPlaynImage, 0, 0);
    
}


    public setAlpha3(image: Image, alpha: number){

    var alphaF: number = alpha;;
    

    var alphaFloat: number = alphaF /255;;
    

    var htmlImage: PlaynImage = image as PlaynImage;;
    

    var canvasImage: CanvasImage = htmlImage!.getImage() as CanvasImage;;
    

    var canvas: Canvas = canvasImage!.canvas()!;;
    
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
    
logUtil!.putF(new StringMaker().append(commonStrings!.EXCEPTION_LABEL)!.append(resourceCallbackStrings!.ERROR)!.append(image.getName())!.toString(), this, resourceCallbackStrings!.HANDLE_IMAGE);
    
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
            
    var image2: Image = Image.createImage(image3.width(), image3.height())!;;
    

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



