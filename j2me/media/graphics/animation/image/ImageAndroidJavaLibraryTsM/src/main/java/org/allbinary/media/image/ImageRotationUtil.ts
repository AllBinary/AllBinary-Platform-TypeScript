
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

    
import { Anchor } from "../../../../org/allbinary/graphics/Anchor.js";

    
import { Bitmap } from "../../../../android/graphics/Bitmap.js";

    
import { Canvas } from "../../../../android/graphics/Canvas.js";

    
import { Matrix } from "../../../../android/graphics/Matrix.js";

    
import { AndroidImageInterface } from "../../../../org/microemu/android/device/AndroidImageInterface.js";

    

export class ImageRotationUtil
            extends Object
         {
        

    private static readonly instance: ImageRotationUtil = new ImageRotationUtil();
        
        

    public static getInstance(): ImageRotationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly matrix: Matrix = new Matrix();
        
        
private constructor (){

            super();
            }


    private anchor: number = Anchor.TOP_LEFT;
        
        

                //@Throws(Error::class)
            
    public createRotatedImage(originalImage: Image, rotationInDegrees: number): Image{
var originalImage = originalImage
var rotationInDegrees = rotationInDegrees

    var image: Image = ImageCreationUtil.getInstance()!.getInstance(originalImage!.getWidth(), originalImage!.getHeight())!;
        
        
;
    

                        if(image.isMutable())
                        
                                    {
                                    
    var bitmap: Bitmap = 
                                    (image as AndroidImageInterface).getBitmap()!;
        
        
;
    

    var width: number = bitmap.getWidth()!;
        
        
;
    

    var height: number = bitmap.getHeight()!;
        
        
;
    
matrix.setRotate(rotationInDegrees.toFloat(), (width shr 1).toFloat(), (height shr 1).toFloat());
    

    var canvas: Canvas = 
                                    (image as AndroidImageInterface).getCanvas()!;
        
        
;
    
canvas.concat(matrix);
    
image.getGraphics()!.drawImage(originalImage, 0, 0, anchor);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    

                                    }
                                
                        else {
                            


                            throw new Error("Not Mutable")

                        }
                            
}


}
                
            

