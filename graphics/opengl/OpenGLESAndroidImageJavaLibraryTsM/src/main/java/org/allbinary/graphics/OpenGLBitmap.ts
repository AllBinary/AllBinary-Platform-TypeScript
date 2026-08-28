
        /* Generated Code Do Not Modify */
        



//not game specific package import { Bitmap } from '../../../android/graphics/Bitmap.js';
      const Bitmap = globalThis.android.graphics.Bitmap;

      
//not game specific package import { PlatformBitmapBase } from '../../../org/allbinary/platform/graphics/PlatformBitmapBase.js';
      const PlatformBitmapBase = globalThis.org.allbinary.platform.graphics.PlatformBitmapBase;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OpenGLBitmap extends PlatformBitmapBase {
        

    public readonly bitmap: Bitmap;

public constructor (bitmap: any = {}){

            super();
        this.bitmap= bitmap as Bitmap;
    
}


    public getPixels(pixels: number[], offset: number, stride: number, x: number, y: number, width: number, height: number){
this.bitmap.getPixels(pixels, offset, stride, x, y, width, height);
    
}


    public setPixels(pixels: number[], offset: number, stride: number, x: number, y: number, width: number, height: number){
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



