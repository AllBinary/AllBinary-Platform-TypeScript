
        /* Generated Code Do Not Modify */
        



import { Bitmap } from "../../../android/graphics/Bitmap.js";

    
import { PlatformBitmapBase } from "../../../org/allbinary/platform/graphics/PlatformBitmapBase.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OpenGLBitmap extends PlatformBitmapBase {
        

    public readonly bitmap: Bitmap
public constructor (bitmap: any = {}){

            super();
            //var bitmap = bitmap
this.bitmap= bitmap as Bitmap;
    
}


    public getPixels(pixels: number[], offset: number, stride: number, x: number, y: number, width: number, height: number){
var pixels = pixels
var offset = offset
var stride = stride
var x = x
var y = y
var width = width
var height = height
this.bitmap.getPixels(pixels, offset, stride, x, y, width, height);
    
}


    public setPixels(pixels: number[], offset: number, stride: number, x: number, y: number, width: number, height: number){
var pixels = pixels
var offset = offset
var stride = stride
var x = x
var y = y
var width = width
var height = height
this.bitmap.setPixels(pixels, offset, stride, x, y, width, height);
    
}


    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.bitmap.getWidth();;
    
}


    public getHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.bitmap.getHeight();;
    
}


    public recycle(){
this.bitmap.recycle();
    
}


}
                
            

