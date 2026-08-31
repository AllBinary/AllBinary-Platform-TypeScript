
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
        
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //not plain js import { ImageRotationUtil } from './ImageRotationUtil.js';
const ImageRotationUtil = globalThis.org.allbinary.media.image.ImageRotationUtil;

                
export class ImageToRotationImageArrayUtil
            extends Object
         {
        

    private static readonly instance: ImageToRotationImageArrayUtil = new ImageToRotationImageArrayUtil();

    public static getInstance(): ImageToRotationImageArrayUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageToRotationImageArrayUtil.instance;
    
}


private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public generate(image: Image, angleIncrement: number, totalAngle: number): Image[]{

    var imageRotationUtil: ImageRotationUtil = ImageRotationUtil.getInstance()!;;
    

    var totalFrames: number = totalAngle /angleIncrement;;
    

    var imageArray: Image[] = new Array(totalFrames);;
    
imageArray[0]= image;
    




                        for (
    var index: number = 1;index < totalFrames; index++)
        {
imageArray[index]= imageRotationUtil!.createRotatedImage(image, index *angleIncrement);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageArray;
    
}


}



