
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

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { J2SEImmutableImage } from "../../../../org/microemu/device/j2se/J2SEImmutableImage.js";

    
import { J2SEMutableImage } from "../../../../org/microemu/device/j2se/J2SEMutableImage.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ImageJ2SERotationUtil } from "./ImageJ2SERotationUtil.js";

import { ImageCreationUtil } from "./ImageCreationUtil.js";

export class ImageRotationUtil
            extends Object
         {
        

    private static readonly instance: ImageRotationUtil = new ImageRotationUtil();

    public static getInstance(): ImageRotationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly imageJ2SERotationUtil: ImageJ2SERotationUtil = ImageJ2SERotationUtil.getInstance()!;
private constructor (){

            super();
        }


    public rotateImage(originalImage: Image, image: Image, totalAngle: number){
    //var originalImage = originalImage
    //var image = image
    //var totalAngle = totalAngle

                        if(image.isMutable())
                        
                                    {
                                    
    var j2seImage: J2SEMutableImage =  as J2SEMutableImageimage;
;
    

    var newBufferedImage: BufferedImage =  as BufferedImagej2seImage!.getImage();;
;
    

    var originalAwtImage: java.awt.Image = 
                null
            ;
;
    

                        if(originalImage!.isMutable())
                        
                                    {
                                    
    var originalJ2SEImage: J2SEMutableImage =  as J2SEMutableImageoriginalImage;
;
    
originalAwtImage=  as java.awt.ImageoriginalJ2SEImage!.getImage();;
    

                                    }
                                
                        else {
                            
    var originalJ2SEImage: J2SEImmutableImage =  as J2SEImmutableImageoriginalImage;
;
    
originalAwtImage=  as java.awt.ImageoriginalJ2SEImage!.getImage();;
    

                        }
                            
this.imageJ2SERotationUtil!.rotateImage(originalAwtImage, newBufferedImage, totalAngle);
    

                                    }
                                
                        else {
                            PreLogUtil.putOE("Not Mutable", this, "getRotatedImage", new Error());
    

                        }
                            
}


                //@Throws(Error::class)
            
    public createRotatedImage(originalImage: Image, rotationInDegrees: number): Image{
var originalImage = originalImage
var rotationInDegrees = rotationInDegrees

    var image: Image = ImageCreationUtil.getInstance()!.createImageWH(originalImage!.getWidth(), originalImage!.getHeight())!;
;
    

                        if(image.isMutable())
                        
                                    {
                                    
    var originalAwtImage: java.awt.Image = 
                null
            ;
;
    

                        if(originalImage!.isMutable())
                        
                                    {
                                    
    var originalJ2SEImage: J2SEMutableImage =  as J2SEMutableImageoriginalImage;
;
    
originalAwtImage=  as java.awt.ImageoriginalJ2SEImage!.getImage();;
    

                                    }
                                
                        else {
                            
    var originalJ2SEImage: J2SEImmutableImage =  as J2SEImmutableImageoriginalImage;
;
    
originalAwtImage=  as java.awt.ImageoriginalJ2SEImage!.getImage();;
    

                        }
                            

    var j2seImage: J2SEMutableImage =  as J2SEMutableImageimage;
;
    

    var newBufferedImage: BufferedImage =  as BufferedImagej2seImage!.getImage();;
;
    

    var bufferedImage: BufferedImage = this.imageJ2SERotationUtil!.createRotatedImage(originalAwtImage, newBufferedImage, rotationInDegrees)!;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    

                                    }
                                
                        else {
                            


                            throw new Error("Not Mutable");
                    

                        }
                            
}


}
                
            

