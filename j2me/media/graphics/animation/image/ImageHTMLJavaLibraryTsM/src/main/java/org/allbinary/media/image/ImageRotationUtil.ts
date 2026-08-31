
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
        
            import { Math } from '../../../../java/lang/Math.js';
        
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not plain js import { PlaynImmutableImage } from '../../../../org/microemu/device/playn/PlaynImmutableImage.js';
      const PlaynImmutableImage = globalThis.org.microemu.device.playn.PlaynImmutableImage;

      
//not plain js import { PlaynMutableImage } from '../../../../org/microemu/device/playn/PlaynMutableImage.js';
      const PlaynMutableImage = globalThis.org.microemu.device.playn.PlaynMutableImage;

      
import { CanvasImage } from '../../../../playn/core/CanvasImage.js';
      //not GWT import const CanvasImage = globalThis.playn.core.CanvasImage;

      
import { CanvasSurface } from '../../../../playn/core/CanvasSurface.js';
      //not GWT import const CanvasSurface = globalThis.playn.core.CanvasSurface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //not plain js import { ImageCreationUtil } from './ImageCreationUtil.js';
const  = globalThis.org.allbinary.media.image.ImageCreationUtil;

                
export class ImageRotationUtil
            extends Object
         {
        

    private static readonly instance: ImageRotationUtil = new ImageRotationUtil();

    public static getInstance(): ImageRotationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageRotationUtil.instance;
    
}


private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public createRotatedImage(originalImage: Image, rotationInDegrees: number): Image{

    var image: Image = ImageCreationUtil.getInstance()!.getInstance(originalImage!.getWidth(), originalImage!.getHeight())!;;
    

                        if(image.isMutable())
                        
                                    {
                                    
    var originalPlayNImage: playn.core.Image = 
                null
            ;;
    

                        if(originalImage!.isMutable())
                        
                                    {
                                    
    var originalHTMLImage: PlaynMutableImage = originalImage as PlaynMutableImage;;
    
originalPlayNImage= originalHTMLImage!.getImage() as playn.core.Image;
    

                                    }
                                
                        else {
                            
    var originalHTMLImage: PlaynImmutableImage = originalImage as PlaynImmutableImage;;
    
originalPlayNImage= originalHTMLImage!.getImage() as playn.core.Image;
    

                        }
                            

    var htmlImage: PlaynMutableImage = image as PlaynMutableImage;;
    

    var canvasImage: CanvasImage = htmlImage!.getImage() as CanvasImage;;
    

    var canvasSurface: CanvasSurface = htmlImage!.getCanvasSurface(canvasImage)!;;
    
canvasSurface!.translate(originalPlayNImage!.width() /2, originalPlayNImage!.height() /2);
    
canvasSurface!.rotate(Math.toRadians(rotationInDegrees));
    
canvasSurface!.drawImage(originalPlayNImage,  -originalPlayNImage!.width() /2,  -originalPlayNImage!.height() /2);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    

                                    }
                                
                        else {
                            


                            throw new Exception("Not Mutable");
                    

                        }
                            
}


}



