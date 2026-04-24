
        /* Generated Code Do Not Modify */
        



import { Image } from "../../../javax/microedition/lcdui/Image.js";

    
import { DisposalUtil } from "../../../org/allbinary/DisposalUtil.js";

    
import { PlatformBitmapBase } from "../../../org/allbinary/platform/graphics/PlatformBitmapBase.js";

    
import { SwtImmutableImage } from "../../../org/microemu/device/swt/SwtImmutableImage.js";

    
import { SwtMutableImage } from "../../../org/microemu/device/swt/SwtMutableImage.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OpenGLBitmap extends PlatformBitmapBase {
        

    public readonly image: Image
public constructor (bitmap: any = {}){

            super();
            //var bitmap = bitmap
this.image= bitmap as Image;
    
}


    public getImage(): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


    public getDepth(): number{

                        if(this.image.isMutable())
                        
                                    {
                                    
    var mutableImage: SwtMutableImage = this.image as SwtMutableImage;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return mutableImage!.getDepth();;
    

                                    }
                                
                        else {
                            
    var immutableImage: SwtImmutableImage = this.image as SwtImmutableImage;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return immutableImage!.getDepth();;
    

                        }
                            
}


    public getPixels(pixels: number[], offset: number, stride: number, x: number, y: number, width: number, height: number){
var pixels = pixels
var offset = offset
var stride = stride
var x = x
var y = y
var width = width
var height = height

                        if(this.image.isMutable())
                        
                                    {
                                    
    var mutableImage: SwtMutableImage = this.image as SwtMutableImage;
        
        
;
    
mutableImage!.getRGB(pixels, offset, stride, x, y, width, height);
    

                                    }
                                
                        else {
                            
    var immutableImage: SwtImmutableImage = this.image as SwtImmutableImage;
        
        
;
    
immutableImage!.getRGB(pixels, offset, stride, x, y, width, height);
    

                        }
                            
}


    public setPixels(pixels: number[], offset: number, stride: number, x: number, y: number, width: number, height: number){
var pixels = pixels
var offset = offset
var stride = stride
var x = x
var y = y
var width = width
var height = height
this.image.setRGB2(pixels, offset, height, x, y, width, height);
    
}


    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.image.getWidth();;
    
}


    public getHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.image.getHeight();;
    
}


    public recycle(){
DisposalUtil.getInstance()!.dispose(image);
    
}


}
                
            

