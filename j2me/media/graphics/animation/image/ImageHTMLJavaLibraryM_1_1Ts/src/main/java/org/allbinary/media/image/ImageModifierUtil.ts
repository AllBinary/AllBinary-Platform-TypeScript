
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
        
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics

import { Image } from '../../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image

import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Anchor

import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { PlaynImage } from '../../../../org/microemu/device/playn/PlaynImage.js';
//not GWT import const PlaynImage

import { ResourceCallbackStrings } from '../../../../org/microemu/device/ResourceCallbackStrings.js';
//not GWT import const ResourceCallbackStrings

//not plain js import { Canvas } 
const Canvas = globalThis.playn.core.Canvas;
type Canvas<T = any, U = any> = typeof Canvas extends abstract new (...args: any[]) => infer Instance ? Instance : typeof Canvas;

//not plain js import { CanvasImage } 
const CanvasImage = globalThis.playn.core.CanvasImage;
type CanvasImage<T = any, U = any> = typeof CanvasImage extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CanvasImage;

//not plain js import { Callback } 
const Callback = globalThis.playn.core.util.Callback;
type Callback<T = any, U = any> = typeof Callback extends abstract new (...args: any[]) => infer Instance ? Instance : typeof Callback;

















                                        
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

    let alphaF: number = alpha;;
    

    let alphaFloat: number = alphaF /255;;
    
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

    let htmlImage: PlaynImage = image as PlaynImage;;
    

    let canvasImage: CanvasImage = htmlImage!.getImage() as CanvasImage;;
    

    let originalPlaynImage: playn.core.Image = (originalImage as PlaynImage).getImage() as playn.core.Image;;
    

    let canvas: Canvas = canvasImage!.canvas()!;;
    
canvas.clear();
    
canvas.setAlpha(alpha);
    
canvas.drawImage(originalPlaynImage, 0, 0);
    
}


    public setAlpha3(image: Image, alpha: number){

    let alphaF: number = alpha;;
    

    let alphaFloat: number = alphaF /255;;
    

    let htmlImage: PlaynImage = image as PlaynImage;;
    

    let canvasImage: CanvasImage = htmlImage!.getImage() as CanvasImage;;
    

    let canvas: Canvas = canvasImage!.canvas()!;;
    
canvas.setAlpha(alphaFloat);
    
}


    public getImageArray(originalImageArray: Image[]): Image[]{

    let size: number = originalImageArray!.length
                ;;
    
this.alphaArray= new Array(size);
    

    let imageArray: Image[] = new Array(size);;
    




                        for (
    let index: number = 0;index < size; index++)
        {
imageArray[index]= originalImageArray[index]!;
    
this.handleImage(imageArray, index, originalImageArray[index]!);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageArray;
    
}


    public handleImage(imageArray: Image[], index: number, image: Image){

    let image3: playn.core.Image = (image as PlaynImage).getImage() as playn.core.Image;;
    

                        if(image3 != 
                                    null
                                )
                        
                                    {
                                    
                        if(image3.isReady() || image3.width() +image3.height() <= 0 || image.getName() == this.resourceCallbackStrings!.FROM_DATA)
                        
                                    {
                                    this.copy(imageArray, index, image, image3);
    

                                    }
                                
                        else {
                            
    let callback: Callback = new class extends Callback
                                {
                                
    public onSuccess(resource: any){

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    
logUtil!.putF(this.resourceCallbackStrings!.DONE +image.getName(), this, this.resourceCallbackStrings!.HANDLE_IMAGE);
    
copy(imageArray, index, image, image3);
    
}

    public onFailure(e: Throwable){

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    
logUtil!.putF(new StringMaker().append(this.commonStrings!.EXCEPTION_LABEL)!.append(this.resourceCallbackStrings!.ERROR)!.append(image.getName())!.toString(), this, this.resourceCallbackStrings!.HANDLE_IMAGE);
    
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
    let image2: Image = Image.createImage(image3.width(), image3.height())!;;
    

    let graphics: Graphics = image2.getGraphics()!;;
    
graphics.drawImage(image, 0, 0, Anchor.TOP_LEFT);
    
imageArray[index]= image2;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.putF(this.commonStrings!.EXCEPTION_LABEL +this.resourceCallbackStrings!.DONE, this, this.resourceCallbackStrings!.HANDLE_IMAGE);
    

 }
   }
 
}


    public reset(){

    let size: number = this.alphaArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
this.alphaArray[index]= true;
    
}

}


}

