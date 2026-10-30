
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
        
import { BufferedImage } from '../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage

import { Image } from '../../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image

import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Anchor

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { J2SEImmutableImage } from '../../../../org/microemu/device/j2se/J2SEImmutableImage.js';
//not GWT import const J2SEImmutableImage

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageUtil } from './ImageUtil.js';
//sameFolderImports - not GWT import - same folder const ImageUtil
import { ImageCreationUtil } from './ImageCreationUtil.js';
//sameFolderImports - not GWT import - same folder const ImageCreationUtil

export class ImageCopyUtil
            extends Object
         {
        

    private static readonly instance: ImageCopyUtil = new ImageCopyUtil();

    public static getInstance(): ImageCopyUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageCopyUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly imageUtil: ImageUtil = ImageUtil.getInstance()!;

    private readonly imageCreationUtil: ImageCreationUtil = ImageCreationUtil.getInstance()!;

private constructor (){

            super();
        }


    private anchor: number = Anchor.TOP_LEFT;

                //@Throws(Exception.constructor)
            
    public createImageForRotation(originalImage: Image): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createImage(originalImage);;
    
}


                //@Throws(Exception.constructor)
            
    public createImage(originalImage: Image): Image{

    let image: Image = this.imageCreationUtil!.createImageWH(originalImage!.getWidth(), originalImage!.getHeight())!;;
    

                        if(image.isMutable())
                        
                                    {
                                    image.getGraphics()!.drawImage(originalImage, 0, 0, this.anchor);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    

                                    }
                                
                        else {
                            


                            throw new Exception("Not Mutable");
                    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public createImageScale(originalImage: Image, canvasScale: number, resize: boolean): Image{

    let newWidth: number = globalThis.Math.trunc((originalImage!.getWidth() *canvasScale));;
    

    let newHeight: number = globalThis.Math.trunc((originalImage!.getHeight() *canvasScale));;
    

                        if(resize)
                        
                                    {
                                    
                        if(newWidth < newHeight)
                        
                                    {
                                    newWidth= newHeight;
    

                                    }
                                

                        if(newHeight < newWidth)
                        
                                    {
                                    newHeight= newWidth;
    

                                    }
                                

                                    }
                                

    let originalBufferedImage: BufferedImage = this.imageUtil!.getBufferedImage(originalImage)!;;
    

    let bufferedImage: BufferedImage = this.imageUtil!.createBufferedImageWithLargerCanvas(originalBufferedImage, newWidth, newHeight)!;;
    

    let image: J2SEImmutableImage = new J2SEImmutableImage(bufferedImage);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


}

