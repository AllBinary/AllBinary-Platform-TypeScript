
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
        



import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { OpenGLFeatureFactory } from "../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js";

    
import { OpenGLESImage } from "../../../../org/allbinary/image/opengles/OpenGLESImage.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { GC } from "../../../../org/eclipse/swt/graphics/GC.js";

    
import { SwtImmutableImage } from "../../../../org/microemu/device/swt/SwtImmutableImage.js";

    
import { SwtMutableImage } from "../../../../org/microemu/device/swt/SwtMutableImage.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ImageSwtRotationUtil } from "./ImageSwtRotationUtil.js";

export class ImageRotationUtil
            extends Object
         {
        

    private static readonly instance: ImageRotationUtil = new ImageRotationUtil();
        
        

    public static getInstance(): ImageRotationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly imageSwtRotationUtil: ImageSwtRotationUtil = ImageSwtRotationUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


    private readonly features: Features = Features.getInstance()!;
        
        

    public rotateImage(originalImage: Image, image: Image, totalAngle: number){
    //var originalImage = originalImage
    //var image = image
    //var totalAngle = totalAngle

    var originalImage2: Image = originalImage;
        
        
;
    

                        if(features.isFeature(OpenGLFeatureFactory.getInstance()!.OPENGL))
                        
                                    {
                                    
                        if(originalImage!.getType() >= OpenGLESImage.TYPE)
                        
                                    {
                                    
    var openGLESImage: OpenGLESImage = (originalImage as OpenGLESImage);
        
        
;
    
openGLESImage!.openGLESImageProperties!.angle= totalAngle;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
                        else {
                            PreLogUtil.put("OpenGL but image is: " +originalImage +" type: " +originalImage!.getType(), this, "rotateImage");
    

                        }
                            

                                    }
                                

    var originalSwtImage: org.eclipse.swt.graphics.Image = (originalImage2!.getImage();

                         as org.eclipse.swt.graphics.Image);
        
        
;
    

    var gc: GC = 
                null
            ;
        
        
;
    

    var copySwtImage: org.eclipse.swt.graphics.Image = 
                null
            ;
        
        
;
    

                        if(image.isMutable())
                        
                                    {
                                    
    var swtImage: SwtMutableImage = image as SwtMutableImage;
        
        
;
    
copySwtImage= swtImage!.getImage();

                         as org.eclipse.swt.graphics.Image;
    
gc= swtImage!.getGc();
    
imageSwtRotationUtil!.rotateImage(originalSwtImage, copySwtImage, gc, totalAngle);
    

                                    }
                                
                        else {
                            PreLogUtil.put("No rotation for: " +image.toString(), this, "rotateImage");
    

                        }
                            
}


                //@Throws(Error::class)
            
    public createRotatedImage(originalImage: Image, rotationInDegrees: number): Image{
var originalImage = originalImage
var rotationInDegrees = rotationInDegrees



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return originalImage;
    
}


}
                
            

