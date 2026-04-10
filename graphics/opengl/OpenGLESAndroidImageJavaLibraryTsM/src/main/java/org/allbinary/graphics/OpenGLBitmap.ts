
        /* Generated Code Do Not Modify */
        



import { Bitmap } from "../../../android/graphics/Bitmap.js";

    
import { PlatformBitmapBase } from "../../../org/allbinary/platform/graphics/PlatformBitmapBase.js";

    

export class OpenGLBitmap extends PlatformBitmapBase {
        

    public readonly bitmap: Bitmap
public constructor (bitmap: any = {}){

            super();
                //var bitmap = bitmap
this.bitmap= bitmap as Bitmap
}


    public getPixels(pixels: IntArray, offset: number, stride: number, x: number, y: number, width: number, height: number){
var pixels = pixels
var offset = offset
var stride = stride
var x = x
var y = y
var width = width
var height = height
getPixels(pixels, offset, stride, x, y, width, height)
}


    public setPixels(pixels: IntArray, offset: number, stride: number, x: number, y: number, width: number, height: number){
var pixels = pixels
var offset = offset
var stride = stride
var x = x
var y = y
var width = width
var height = height
setPixels(pixels, offset, stride, x, y, width, height)
}


    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.bitmap.getWidth();
    
}


    public getHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.bitmap.getHeight();
    
}


    public recycle(){
recycle()
}


}
                
            

