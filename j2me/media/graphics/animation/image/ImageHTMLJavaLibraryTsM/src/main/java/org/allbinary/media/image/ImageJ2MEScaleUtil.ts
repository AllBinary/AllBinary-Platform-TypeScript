
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

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageJ2MEScaleUtil
            extends Object
         {
        

    private static readonly instance: ImageJ2MEScaleUtil = new ImageJ2MEScaleUtil();

    public static getInstance(): ImageJ2MEScaleUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageJ2MEScaleUtil.instance;
    
}

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public scaleArray(images: Image[], width: number, height: number): Image[]{
var images = images
var width = width
var height = height

    var scaledImages: Image[] = new Array(images.length);
;
    




                        for (
    var index: number = images.length
                ;
--index >= 0; )
        {
scaledImages[index]= this.scale(images[index]!, width, height);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaledImages;
    
}


                //@Throws(Exception.constructor)
            
    public scale(image: Image, width: number, height: number): Image{
var image = image
var width = width
var height = height



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


}
                
            

