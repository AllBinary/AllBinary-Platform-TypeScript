
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

//not plain js import { CanvasImage } 
const CanvasImage = globalThis.playn.core.CanvasImage;
type CanvasImage<T = any, U = any> = typeof CanvasImage extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CanvasImage;

//not plain js import { CanvasSurface } 
const CanvasSurface = globalThis.playn.core.CanvasSurface;
type CanvasSurface<T = any, U = any> = typeof CanvasSurface extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CanvasSurface;

















                                        
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

    let originalPlayNImage: playn.core.Image = 
                null
            ;;
    

                        if(image.isMutable())
                        
                                    {
                                    
    let originalHTMLImage: PlaynMutableImage = image as PlaynMutableImage;;
    
originalPlayNImage= originalHTMLImage!.getImage() as playn.core.Image;
    

                                    }
                                
                        else {
                            
    let originalHTMLImage: PlaynImmutableImage = image as PlaynImmutableImage;;
    
originalPlayNImage= originalHTMLImage!.getImage() as playn.core.Image;
    

                        }
                            

    let scaledImage: Image = Image.createImage(width, height)!;;
    

    let htmlImage: PlaynMutableImage = scaledImage as PlaynMutableImage;;
    

    let canvasImage: CanvasImage = htmlImage!.getImage() as CanvasImage;;
    

    let canvasSurface: CanvasSurface = htmlImage!.getCanvasSurface(canvasImage)!;;
    
canvasSurface!.drawImage(originalPlayNImage, 0, 0, scaledImage!.getWidth(), scaledImage!.getHeight(), 0, 0, image.getWidth(), image.getHeight());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaledImage;
    
}


}

