
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
        



import { Bitmap } from "../../../../android/graphics/Bitmap.js";

    
import { Canvas } from "../../../../android/graphics/Canvas.js";

    
import { Color } from "../../../../android/graphics/Color.js";

    
import { Matrix } from "../../../../android/graphics/Matrix.js";

    
import { Paint } from "../../../../android/graphics/Paint.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { AndroidImageInterface } from "../../../../org/microemu/android/device/AndroidImageInterface.js";

    

export class AndroidImageUtil
            extends Object
         {
        

    private static readonly instance: AndroidImageUtil = new AndroidImageUtil();
        
        

    public static getInstance(): AndroidImageUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public paint(bitmap: Bitmap, originalBitmap: Bitmap, paint: Paint){
    //var bitmap = bitmap
    //var originalBitmap = originalBitmap
    //var paint = paint
bitmap.eraseColor(Color.TRANSPARENT)

    var canvas: Canvas = new android.graphics.Canvas();
        
        

canvas.setBitmap(bitmap)
canvas.drawBitmap(originalBitmap, 0.0f, 0.0f, paint)
}


    public paint(image: Image, originalImage: Image, paint: Paint){
    //var image = image
    //var originalImage = originalImage
    //var paint = paint

    var androidImage: AndroidImageInterface = image as AndroidImageInterface;
        
        

androidImage!.getBitmap()!.eraseColor(Color.TRANSPARENT)

    var canvas: Canvas = androidImage!.getCanvas()!;
        
        


    var originalAndroidImage: AndroidImageInterface = originalImage as AndroidImageInterface;
        
        

canvas.drawBitmap(originalAndroidImage!.getBitmap(), 0.0f, 0.0f, paint)
}


    public rotate(image: Image, originalImage: Image, matrix: Matrix, paint: Paint){
    //var image = image
    //var originalImage = originalImage
    //var matrix = matrix
    //var paint = paint

    var androidImage: AndroidImageInterface = image as AndroidImageInterface;
        
        

androidImage!.getBitmap()!.eraseColor(Color.TRANSPARENT)

    var canvas: Canvas = androidImage!.getCanvas()!;
        
        

canvas.concat(matrix)

    var originalAndroidImage: AndroidImageInterface = originalImage as AndroidImageInterface;
        
        

canvas.drawBitmap(originalAndroidImage!.getBitmap(), 0.0f, 0.0f, paint)
}


}
                
            

