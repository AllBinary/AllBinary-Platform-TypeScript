
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

        


            import hilog from '@ohos.hilog';
        
            import { Object } from '../../../../java/lang/Object.js';
        
import { Bitmap } from '../../../../android/graphics/Bitmap.js';
      //not GWT import const Bitmap = globalThis.android.graphics.Bitmap;

      
import { Canvas } from '../../../../android/graphics/Canvas.js';
      //not GWT import const Canvas = globalThis.android.graphics.Canvas;

      
import { Color } from '../../../../android/graphics/Color.js';
      //not GWT import const Color = globalThis.android.graphics.Color;

      
import { Matrix } from '../../../../android/graphics/Matrix.js';
      //not GWT import const Matrix = globalThis.android.graphics.Matrix;

      
import { Paint } from '../../../../android/graphics/Paint.js';
      //not GWT import const Paint = globalThis.android.graphics.Paint;

      
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
import { AndroidImageInterface } from '../../../../org/microemu/android/device/AndroidImageInterface.js';
      //not GWT import const AndroidImageInterface = globalThis.org.microemu.android.device.AndroidImageInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AndroidImageUtil
            extends Object
         {
        

    private static readonly instance: AndroidImageUtil = new AndroidImageUtil();

    public static getInstance(): AndroidImageUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AndroidImageUtil.instance;
    
}


    public paintBitmap(bitmap: Bitmap, originalBitmap: Bitmap, paint: Paint){
bitmap.eraseColor(Color.TRANSPARENT);
    

    var canvas: Canvas = new android.graphics.Canvas();;
    
canvas.setBitmap(bitmap);
    
canvas.drawBitmap(originalBitmap, 0.0, 0.0, paint);
    
}


    public paint(image: Image, originalImage: Image, paint: Paint){

    var androidImage: AndroidImageInterface = image as AndroidImageInterface;;
    
androidImage!.getBitmap()!.eraseColor(Color.TRANSPARENT);
    

    var canvas: Canvas = androidImage!.getCanvas()!;;
    

    var originalAndroidImage: AndroidImageInterface = originalImage as AndroidImageInterface;;
    
canvas.drawBitmap(originalAndroidImage!.getBitmap(), 0.0, 0.0, paint);
    
}


    public rotate(image: Image, originalImage: Image, matrix: Matrix, paint: Paint){

    var androidImage: AndroidImageInterface = image as AndroidImageInterface;;
    
androidImage!.getBitmap()!.eraseColor(Color.TRANSPARENT);
    

    var canvas: Canvas = androidImage!.getCanvas()!;;
    
canvas.concat(matrix);
    

    var originalAndroidImage: AndroidImageInterface = originalImage as AndroidImageInterface;;
    
canvas.drawBitmap(originalAndroidImage!.getBitmap(), 0.0, 0.0, paint);
    
}


}



