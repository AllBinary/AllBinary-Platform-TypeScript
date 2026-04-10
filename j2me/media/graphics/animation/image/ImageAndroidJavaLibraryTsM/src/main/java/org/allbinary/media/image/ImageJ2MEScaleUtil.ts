
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
        



import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { GameFeatureImageCacheFactory } from "../../../../org/allbinary/image/GameFeatureImageCacheFactory.js";

    

export class ImageJ2MEScaleUtil
            extends Object
         {
        

    private static readonly instance: ImageJ2MEScaleUtil = new ImageJ2MEScaleUtil();
        
        

    public static getInstance(): ImageJ2MEScaleUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


                @Throws(Exception::class)
            
    public scale(images: Image[], width: number, height: number): Image[]{
var images = images
var width = width
var height = height




                        for (
    var index: number = 0;
        
        
index < images.length; index++)
        {

    var image: Image = images[index]!;
        
        

images[index]= ImageScaleUtil.getInstance()!.createImage(GameFeatureImageCacheFactory.getInstance(), image, width.toFloat() /2, image.getWidth().toFloat(), height.toFloat(), image.getHeight().toFloat(), false)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return images;
    
}


                @Throws(Exception::class)
            
    public scale(image: Image, width: number, height: number): Image{
var image = image
var width = width
var height = height



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageScaleUtil.getInstance()!.createImage(GameFeatureImageCacheFactory.getInstance(), image, width.toFloat(), image.getWidth().toFloat(), height.toFloat(), image.getHeight().toFloat(), false);
    
}


}
                
            

