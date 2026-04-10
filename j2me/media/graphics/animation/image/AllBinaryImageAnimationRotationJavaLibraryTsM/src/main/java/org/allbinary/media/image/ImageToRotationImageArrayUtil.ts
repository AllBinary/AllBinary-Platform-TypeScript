
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

    

export class ImageToRotationImageArrayUtil
            extends Object
         {
        

    private static readonly instance: ImageToRotationImageArrayUtil = new ImageToRotationImageArrayUtil();
        
        

    public static getInstance(): ImageToRotationImageArrayUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


                @Throws(Exception::class)
            
    public generate(image: Image, angleIncrement: number, totalAngle: number): Image[]{
var image = image
var angleIncrement = angleIncrement
var totalAngle = totalAngle

    var imageRotationUtil: ImageRotationUtil = ImageRotationUtil.getInstance()!;
        
        


    var totalFrames: number = totalAngle /angleIncrement;
        
        


    var imageArray: Image[] = new Array(totalFrames);
        
        

imageArray[0]= image




                        for (
    var index: number = 1;
        
        
index < totalFrames; index++)
        {
imageArray[index]= imageRotationUtil!.createRotatedImage(image, index *angleIncrement)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageArray;
    
}


}
                
            

