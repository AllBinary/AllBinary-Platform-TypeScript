
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Float } from '../../../../java/lang/Float.js';
        
import { Bitmap } from '../../../../android/graphics/Bitmap.js';
      
import { Canvas } from '../../../../android/graphics/Canvas.js';
      
import { Matrix } from '../../../../android/graphics/Matrix.js';
      
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
      
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
      
import { ImageCache } from '../../../../org/allbinary/image/ImageCache.js';
      
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      
import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      
import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      
import { AndroidImageInterface } from '../../../../org/microemu/android/device/AndroidImageInterface.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageScaleUtil
            extends Object
         {
        

    private static readonly instance: ImageScaleUtil = new ImageScaleUtil();

    public static getInstance(): ImageScaleUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageScaleUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
private constructor (){

            super();
        }


    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private anchor: number = Anchor.TOP_LEFT;

    private readonly imageBasicArrayList: BasicArrayList = new BasicArrayListD();

    private readonly scaledImageBasicArrayList: BasicArrayList = new BasicArrayListD();

    private readonly scaleXBasicArrayList: BasicArrayList = new BasicArrayListD();

    private readonly scaleYBasicArrayList: BasicArrayList = new BasicArrayListD();

                //@Throws(Exception.constructor)
            
    public createImage2(imageCache: ImageCache, originalImage: Image, scaleNominatorX: number, scaleDenominatorX: number, scaleNominatorY: number, scaleDenominatorY: number, cached: boolean): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createImage3(imageCache, originalImage, scaleNominatorX, scaleDenominatorX, scaleNominatorY, scaleDenominatorY, cached, true);;
    
}


                //@Throws(Exception.constructor)
            
    public createImage3(imageCache: ImageCache, originalImage: Image, scaleNominatorX: number, scaleDenominatorX: number, scaleNominatorY: number, scaleDenominatorY: number, cached: boolean, mutable: boolean): Image{

    var scaleX: number = scaleNominatorX /scaleDenominatorX;
;
    

    var scaleY: number = scaleNominatorY /scaleDenominatorY;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createImage(imageCache, originalImage, scaleX, scaleY, cached);;
    
}


                //@Throws(Exception.constructor)
            
    public createImage(imageCache: ImageCache, originalImage: Image, scaleX: number, scaleY: number, cached: boolean): Image{

    var originalAndroidImage: AndroidImageInterface = originalImage as AndroidImageInterface;
;
    

    var originalBitmap: Bitmap = originalAndroidImage!.getBitmap()!;
;
    

    var width: number = Math.round((originalBitmap!.getWidth() *scaleX));
;
    

    var height: number = Math.round((originalBitmap!.getHeight() *scaleY));
;
    

    var index: number = this.imageBasicArrayList!.indexOf(originalImage)!;
;
    

    var alreadyAvailable: boolean = false;
;
    

                        if(index >= 0)
                        
                                    {
                                    
    var scaleX2Float: number = this.scaleXBasicArrayList!.get(index);
;
    

    var scaleX2: number = scaleX2Float!!;
;
    

    var scaleY2Float: number = this.scaleYBasicArrayList!.get(index);
;
    

    var scaleY2: number = scaleY2Float!!;
;
    

                        if(scaleX2 == scaleX && scaleY2 == scaleY)
                        
                                    {
                                    alreadyAvailable= true;
    

                                    }
                                

                                    }
                                

                        if(alreadyAvailable)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.scaledImageBasicArrayList!.get(index) as Image;
    

                                    }
                                
                        else {
                            
    var scaledImage: Image = this.getScaledImage(imageCache, originalImage, scaleX, scaleY, width, height, cached)!;
;
    
this.imageBasicArrayList!.add(originalImage);
    
this.scaledImageBasicArrayList!.add(scaledImage);
    
this.scaleXBasicArrayList!.add(scaleX);
    
this.scaleYBasicArrayList!.add(scaleY);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaledImage;
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    getScaledImage(imageCache: ImageCache, originalImage: Image, scaleX: number, scaleY: number, width: number, height: number, cached: boolean): Image{

    var image: Image = NullImage.NULL_IMAGE;
;
    

                        if(cached)
                        
                                    {
                                    image= imageCache!.get(this.constructor.name.toString()!, width, height);
    

                                    }
                                
                        else {
                            image= imageCache!.get(this.commonStrings!.CREATE_IMAGE, width, height);
    

                        }
                            

                        if(image.isMutable())
                        
                                    {
                                    
    var matrix: Matrix = new Matrix();
;
    
this.scale(image, matrix, scaleX, scaleY);
    
image.getGraphics()!.drawImage(originalImage, 0, 0, this.anchor);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    

                                    }
                                
                        else {
                            


                            throw new Exception("Not Mutable");
                    

                        }
                            
}


    scale(image: Image, matrix: Matrix, scaleX: number, scaleY: number){
matrix.setScale(scaleX, scaleY);
    

    var canvas: Canvas = (image as AndroidImageInterface).getCanvas()!;
;
    
canvas.concat(matrix);
    
}


}
                
            

