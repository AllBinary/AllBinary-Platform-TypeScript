
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

    
import { GameFeatureImageCacheFactory } from "../../../../org/allbinary/image/GameFeatureImageCacheFactory.js";

    

export class ImageCreationUtil
            extends Object
         {
        

    private static readonly instance: ImageCreationUtil = new ImageCreationUtil();
        
        

    public static getInstance(): ImageCreationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


                @Throws(Exception::class)
            
    public getInstance(width: number, height: number): Image{
    //var width = width
    //var height = height

    var image: Image = GameFeatureImageCacheFactory.getInstance()!.get(this::class.toString()!, width, height)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


                @Throws(Exception::class)
            
    public createImage(width: number, height: number, maxScaleX: number, maxScaleY: number): Image{
    //var width = width
    //var height = height
    //var maxScaleX = maxScaleX
    //var maxScaleY = maxScaleY

    var image: Image = GameFeatureImageCacheFactory.getInstance()!.get(this::class.toString()!, (width *maxScaleX).toInt() +1, (height *maxScaleY).toInt() +1)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


}
                
            

