
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2023 AllBinary
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
        
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { PlaynImmutableImage } from '../../../../org/microemu/device/playn/PlaynImmutableImage.js';
//not GWT import const PlaynImmutableImage

import { PlaynMutableImage } from '../../../../org/microemu/device/playn/PlaynMutableImage.js';
//not GWT import const PlaynMutableImage

//not plain js import { Canvas } 
const Canvas = globalThis.playn.core.Canvas;
type Canvas<T = any, U = any> = typeof Canvas extends abstract new (...args: any[]) => infer Instance ? Instance : typeof Canvas;

//not plain js import { CoreImage } 
const CoreImage = globalThis.playn.core.CoreImage;
type CoreImage<T = any, U = any> = typeof CoreImage extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CoreImage;

//not plain js import { ImageImpl } 
const ImageImpl = globalThis.playn.core.ImageImpl;
type ImageImpl<T = any, U = any> = typeof ImageImpl extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ImageImpl;

//not plain js import { PlayN } 
const PlayN = globalThis.playn.core.PlayN;
type PlayN<T = any, U = any> = typeof PlayN extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PlayN;

//not plain js import { HtmlGraphics } 
const HtmlGraphics = globalThis.playn.html.HtmlGraphics;
type HtmlGraphics<T = any, U = any> = typeof HtmlGraphics extends abstract new (...args: any[]) => infer Instance ? Instance : typeof HtmlGraphics;

//not plain js import { HtmlImage } 
const HtmlImage = globalThis.playn.html.HtmlImage;
type HtmlImage<T = any, U = any> = typeof HtmlImage extends abstract new (...args: any[]) => infer Instance ? Instance : typeof HtmlImage;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageJ2MEScaleUtil
            extends Object
         {
        

    private static readonly instance: ImageJ2MEScaleUtil = new ImageJ2MEScaleUtil();

    public static getInstance(): ImageJ2MEScaleUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageJ2MEScaleUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public scaleArray(images: Image[], width: number, height: number): Image[]{

    let scaledImages: Image[] = new Array(images.length);;
    




                        for (
    let index: number = images.length
                ;--index >= 0; )
        {
scaledImages[index]= this.scale(images[index]!, width, height);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaledImages;
    
}


                //@Throws(Exception.constructor)
            
    public scale(image: Image, width: number, height: number): Image{

    let originalPlayNImage: CoreImage = 
                null
            ;;
    

                        if(image.isMutable())
                        
                                    {
                                    
    let originalHTMLImage: PlaynMutableImage = image as PlaynMutableImage;;
    
originalPlayNImage= originalHTMLImage!.getImage() as CoreImage;
    

                                    }
                                
                        else {
                            
    let originalHTMLImage: PlaynImmutableImage = image as PlaynImmutableImage;;
    
originalPlayNImage= originalHTMLImage!.getImage() as CoreImage;
    

                        }
                            

    let scaledImage: Image = Image.createImageWH(width, height)!;;
    

    let htmlImage: PlaynMutableImage = scaledImage as PlaynMutableImage;;
    

    let scaledPlayNImage: ImageImpl = htmlImage!.getImage() as ImageImpl;;
    

    let canvas: Canvas = (graphics as HtmlGraphics).get(scaledPlayNImage as HtmlImage)!;;
    
originalPlayNImage = originalPlayNImageoriginalPlayNImage as ImageImpl
originalPlayNImage.
                    draw(canvas.gc(), 0, 0, scaledImage!.getWidth(), scaledImage!.getHeight(), 0, 0, image.getWidth(), image.getHeight());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaledImage;
    
}


}

