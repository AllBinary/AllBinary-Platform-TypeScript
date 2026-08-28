
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
        
//not game specific package import { BufferedImage } from '../../../../java/awt/image/BufferedImage.js';
      const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
//not game specific package import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not game specific package import { J2SEImmutableImage } from '../../../../org/microemu/device/j2se/J2SEImmutableImage.js';
      const J2SEImmutableImage = globalThis.org.microemu.device.j2se.J2SEImmutableImage;

      
//not game specific package import { J2SEMutableImage } from '../../../../org/microemu/device/j2se/J2SEMutableImage.js';
      const J2SEMutableImage = globalThis.org.microemu.device.j2se.J2SEMutableImage;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageJ2SERotationUtil } from './ImageJ2SERotationUtil.js';
import { ImageCreationUtil } from './ImageCreationUtil.js';

export class ImageRotationUtil
            extends Object
         {
        

    private static readonly instance: ImageRotationUtil = new ImageRotationUtil();

    public static getInstance(): ImageRotationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageRotationUtil.instance;
    
}


    private readonly imageJ2SERotationUtil: ImageJ2SERotationUtil = ImageJ2SERotationUtil.getInstance()!;

private constructor (){

            super();
        }


    public rotateImage(originalImage: Image, image: Image, totalAngle: number){

                        if(image.isMutable())
                        
                                    {
                                    
    var j2seImage: J2SEMutableImage = image as J2SEMutableImage;;
    

    var newBufferedImage: BufferedImage = j2seImage!.getImage() as BufferedImage;;
    

    var originalAwtImage: java.awt.Image = 
                null
            ;;
    

                        if(originalImage!.isMutable())
                        
                                    {
                                    
    var originalJ2SEImage: J2SEMutableImage = originalImage as J2SEMutableImage;;
    
originalAwtImage= originalJ2SEImage!.getImage() as java.awt.Image;
    

                                    }
                                
                        else {
                            
    var originalJ2SEImage: J2SEImmutableImage = originalImage as J2SEImmutableImage;;
    
originalAwtImage= originalJ2SEImage!.getImage() as java.awt.Image;
    

                        }
                            
this.imageJ2SERotationUtil!.rotateImage(originalAwtImage, newBufferedImage, totalAngle);
    

                                    }
                                
                        else {
                            PreLogUtil.putOE("Not Mutable", this, "getRotatedImage", new Exception());
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public createRotatedImage(originalImage: Image, rotationInDegrees: number): Image{

    var image: Image = ImageCreationUtil.getInstance()!.createImageWH(originalImage!.getWidth(), originalImage!.getHeight())!;;
    

                        if(image.isMutable())
                        
                                    {
                                    
    var originalAwtImage: java.awt.Image = 
                null
            ;;
    

                        if(originalImage!.isMutable())
                        
                                    {
                                    
    var originalJ2SEImage: J2SEMutableImage = originalImage as J2SEMutableImage;;
    
originalAwtImage= originalJ2SEImage!.getImage() as java.awt.Image;
    

                                    }
                                
                        else {
                            
    var originalJ2SEImage: J2SEImmutableImage = originalImage as J2SEImmutableImage;;
    
originalAwtImage= originalJ2SEImage!.getImage() as java.awt.Image;
    

                        }
                            

    var j2seImage: J2SEMutableImage = image as J2SEMutableImage;;
    

    var newBufferedImage: BufferedImage = j2seImage!.getImage() as BufferedImage;;
    

    var bufferedImage: BufferedImage = this.imageJ2SERotationUtil!.createRotatedImage(originalAwtImage, newBufferedImage, rotationInDegrees)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    

                                    }
                                
                        else {
                            


                            throw new Exception("Not Mutable");
                    

                        }
                            
}


}



