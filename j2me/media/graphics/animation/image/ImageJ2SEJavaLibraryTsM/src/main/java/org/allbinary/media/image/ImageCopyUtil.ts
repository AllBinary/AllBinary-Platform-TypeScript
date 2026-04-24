
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
        



import { BufferedImage } from "../../../../java/awt/image/BufferedImage.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { Anchor } from "../../../../org/allbinary/graphics/Anchor.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { J2SEImmutableImage } from "../../../../org/microemu/device/j2se/J2SEImmutableImage.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ImageUtil } from "./ImageUtil.js";

import { ImageCreationUtil } from "./ImageCreationUtil.js";

export class ImageCopyUtil
            extends Object
         {
        

    private static readonly instance: ImageCopyUtil = new ImageCopyUtil();
        
        

    public static getInstance(): ImageCopyUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly imageUtil: ImageUtil = ImageUtil.getInstance()!;
        
        

    private readonly imageCreationUtil: ImageCreationUtil = ImageCreationUtil.getInstance()!;
        
        
private constructor (){

            super();
        }


    private anchor: number = Anchor.TOP_LEFT;
        
        

                //@Throws(Error::class)
            
    public createImageForRotation(originalImage: Image): Image{
    //var originalImage = originalImage



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createImage(originalImage);;
    
}


                //@Throws(Error::class)
            
    public createImage(originalImage: Image): Image{
    //var originalImage = originalImage

    var image: Image = this.imageCreationUtil!.getInstance(originalImage!.getWidth(), originalImage!.getHeight())!;
        
        
;
    

                        if(image.isMutable())
                        
                                    {
                                    image.getGraphics()!.drawImage(originalImage, 0, 0, anchor);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    

                                    }
                                
                        else {
                            


                            throw new Error("Not Mutable")

                        }
                            
}


                //@Throws(Error::class)
            
    public createImage(originalImage: Image, canvasScale: number, resize: boolean): Image{
    //var originalImage = originalImage
    //var canvasScale = canvasScale
    //var resize = resize

    var newWidth: number = (originalImage!.getWidth() *canvasScale);
        
        
;
    

    var newHeight: number = (originalImage!.getHeight() *canvasScale);
        
        
;
    

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
                                

    var originalBufferedImage: BufferedImage = this.imageUtil!.getBufferedImage(originalImage)!;
        
        
;
    

    var bufferedImage: BufferedImage = this.imageUtil!.createBufferedImageWithLargerCanvas(originalBufferedImage, newWidth, newHeight)!;
        
        
;
    

    var image: J2SEImmutableImage = new J2SEImmutableImage(bufferedImage);
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


}
                
            

