
        /* Generated Code Do Not Modify */
        



//not game specific package import { Image } from '../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { DisposalUtil } from '../../../org/allbinary/DisposalUtil.js';
      const DisposalUtil = globalThis.org.allbinary.DisposalUtil;

      
//not game specific package import { PlatformBitmapBase } from '../../../org/allbinary/platform/graphics/PlatformBitmapBase.js';
      const PlatformBitmapBase = globalThis.org.allbinary.platform.graphics.PlatformBitmapBase;

      
//not game specific package import { SwtImmutableImage } from '../../../org/microemu/device/swt/SwtImmutableImage.js';
      const SwtImmutableImage = globalThis.org.microemu.device.swt.SwtImmutableImage;

      
//not game specific package import { SwtMutableImage } from '../../../org/microemu/device/swt/SwtMutableImage.js';
      const SwtMutableImage = globalThis.org.microemu.device.swt.SwtMutableImage;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OpenGLBitmap extends PlatformBitmapBase {
        

    public readonly image: Image;

public constructor (bitmap: any = {}){

            super();
        this.image= bitmap as Image;
    
}


    public getImage(): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.image;
    
}


    public getDepth(): number{

                        if(this.image.isMutable())
                        
                                    {
                                    
    var mutableImage: SwtMutableImage = this.image as SwtMutableImage;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return mutableImage!.getDepth();;
    

                                    }
                                
                        else {
                            
    var immutableImage: SwtImmutableImage = this.image as SwtImmutableImage;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return immutableImage!.getDepth();;
    

                        }
                            
}


    public getPixels(pixels: number[], offset: number, stride: number, x: number, y: number, width: number, height: number){

                        if(this.image.isMutable())
                        
                                    {
                                    
    var mutableImage: SwtMutableImage = this.image as SwtMutableImage;;
    
mutableImage!.getRGB(pixels, offset, stride, x, y, width, height);
    

                                    }
                                
                        else {
                            
    var immutableImage: SwtImmutableImage = this.image as SwtImmutableImage;;
    
immutableImage!.getRGB(pixels, offset, stride, x, y, width, height);
    

                        }
                            
}


    public setPixels(pixels: number[], offset: number, stride: number, x: number, y: number, width: number, height: number){
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
DisposalUtil.getInstance()!.disposeImage(this.image);
    
}


}



