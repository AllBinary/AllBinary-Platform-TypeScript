
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

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

import { J2SEImmutableImage } from '../../../../org/microemu/device/j2se/J2SEImmutableImage.js';
//not GWT import const J2SEImmutableImage

import { J2SEMutableImage } from '../../../../org/microemu/device/j2se/J2SEMutableImage.js';
//not GWT import const J2SEMutableImage

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageJ2SERotationUtil } from './ImageJ2SERotationUtil.js';
//sameFolderImports - not GWT import - same folder const ImageJ2SERotationUtil
import { ImageCreationUtil } from './ImageCreationUtil.js';
//sameFolderImports - not GWT import - same folder const ImageCreationUtil

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
                                    
    let j2seImage: J2SEMutableImage = image as J2SEMutableImage;;
    

    let newBufferedImage: BufferedImage = j2seImage!.getImage() as BufferedImage;;
    

    let originalAwtImage: java.awt.Image = 
                null
            ;;
    

                        if(originalImage!.isMutable())
                        
                                    {
                                    
    let originalJ2SEImage: J2SEMutableImage = originalImage as J2SEMutableImage;;
    
originalAwtImage= originalJ2SEImage!.getImage() as java.awt.Image;
    

                                    }
                                
                        else {
                            
    let originalJ2SEImage: J2SEImmutableImage = originalImage as J2SEImmutableImage;;
    
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

    let image: Image = ImageCreationUtil.getInstance()!.createImageWH(originalImage!.getWidth(), originalImage!.getHeight())!;;
    

                        if(image.isMutable())
                        
                                    {
                                    
    let originalAwtImage: java.awt.Image = 
                null
            ;;
    

                        if(originalImage!.isMutable())
                        
                                    {
                                    
    let originalJ2SEImage: J2SEMutableImage = originalImage as J2SEMutableImage;;
    
originalAwtImage= originalJ2SEImage!.getImage() as java.awt.Image;
    

                                    }
                                
                        else {
                            
    let originalJ2SEImage: J2SEImmutableImage = originalImage as J2SEImmutableImage;;
    
originalAwtImage= originalJ2SEImage!.getImage() as java.awt.Image;
    

                        }
                            

    let j2seImage: J2SEMutableImage = image as J2SEMutableImage;;
    

    let newBufferedImage: BufferedImage = j2seImage!.getImage() as BufferedImage;;
    

    let bufferedImage: BufferedImage = this.imageJ2SERotationUtil!.createRotatedImage(originalAwtImage, newBufferedImage, rotationInDegrees)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    

                                    }
                                
                        else {
                            


                            throw new Exception("Not Mutable");
                    

                        }
                            
}


}

