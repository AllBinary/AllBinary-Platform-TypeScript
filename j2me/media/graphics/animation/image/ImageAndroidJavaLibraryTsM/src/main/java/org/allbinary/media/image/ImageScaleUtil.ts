
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

    
import { Matrix } from "../../../../android/graphics/Matrix.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { NullCanvas } from "../../../../javax/microedition/lcdui/NullCanvas.js";

    
import { Anchor } from "../../../../org/allbinary/graphics/Anchor.js";

    
import { ImageCache } from "../../../../org/allbinary/image/ImageCache.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { AndroidImageInterface } from "../../../../org/microemu/android/device/AndroidImageInterface.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageScaleUtil
            extends Object
         {
        

    private static readonly instance: ImageScaleUtil = new ImageScaleUtil();
        
        

    public static getInstance(): ImageScaleUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private anchor: number = Anchor.TOP_LEFT;
        
        

    private readonly imageBasicArrayList: BasicArrayList = new BasicArrayList();
        
        

    private readonly scaledImageBasicArrayList: BasicArrayList = new BasicArrayList();
        
        

    private readonly scaleXBasicArrayList: BasicArrayList = new BasicArrayList();
        
        

    private readonly scaleYBasicArrayList: BasicArrayList = new BasicArrayList();
        
        

                //@Throws(Error::class)
            
    public createImage(imageCache: ImageCache, originalImage: Image, scaleNominatorX: number, scaleDenominatorX: number, scaleNominatorY: number, scaleDenominatorY: number, cached: boolean): Image{
    //var imageCache = imageCache
    //var originalImage = originalImage
    //var scaleNominatorX = scaleNominatorX
    //var scaleDenominatorX = scaleDenominatorX
    //var scaleNominatorY = scaleNominatorY
    //var scaleDenominatorY = scaleDenominatorY
    //var cached = cached



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createImage(imageCache, originalImage, scaleNominatorX, scaleDenominatorX, scaleNominatorY, scaleDenominatorY, cached, true);

                        ;
    
}


                //@Throws(Error::class)
            
    public createImage(imageCache: ImageCache, originalImage: Image, scaleNominatorX: number, scaleDenominatorX: number, scaleNominatorY: number, scaleDenominatorY: number, cached: boolean, mutable: boolean): Image{
    //var imageCache = imageCache
    //var originalImage = originalImage
    //var scaleNominatorX = scaleNominatorX
    //var scaleDenominatorX = scaleDenominatorX
    //var scaleNominatorY = scaleNominatorY
    //var scaleDenominatorY = scaleDenominatorY
    //var cached = cached
    //var mutable = mutable

    var scaleX: number = scaleNominatorX /scaleDenominatorX;
        
        
;
    

    var scaleY: number = scaleNominatorY /scaleDenominatorY;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createImage(imageCache, originalImage, scaleX, scaleY, cached);

                        ;
    
}


                //@Throws(Error::class)
            
    public createImage(imageCache: ImageCache, originalImage: Image, scaleX: number, scaleY: number, cached: boolean): Image{
    //var imageCache = imageCache
    //var originalImage = originalImage
    //var scaleX = scaleX
    //var scaleY = scaleY
    //var cached = cached

    var originalAndroidImage: AndroidImageInterface = originalImage as AndroidImageInterface;
        
        
;
    

    var originalBitmap: Bitmap = originalAndroidImage!.getBitmap()!;
        
        
;
    

    var width: number = (originalBitmap!.getWidth() *scaleX).toInt();
        
        
;
    

    var height: number = (originalBitmap!.getHeight() *scaleY).toInt();
        
        
;
    

    var index: number = imageBasicArrayList!.indexOf(originalImage)!;
        
        
;
    

    var alreadyAvailable: boolean = false;
        
        
;
    

                        if(index >= 0)
                        
                                    {
                                    
    var scaleX2Float: Float = this.scaleXBasicArrayList!.get(index);

                         as Float;
        
        
;
    

    var scaleX2: number = scaleX2Float!.toFloat()!;
        
        
;
    

    var scaleY2Float: Float = this.scaleYBasicArrayList!.get(index);

                         as Float;
        
        
;
    

    var scaleY2: number = scaleY2Float!.toFloat()!;
        
        
;
    

                        if(scaleX2 == scaleX && scaleY2 == scaleY)
                        
                                    {
                                    alreadyAvailable= true;
    

                                    }
                                

                                    }
                                

                        if(alreadyAvailable)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.scaledImageBasicArrayList!.get(index);

                         as Image;
    

                                    }
                                
                        else {
                            
    var scaledImage: Image = this.getScaledImage(imageCache, originalImage, scaleX, scaleY, width, height, cached)!;
        
        
;
    
imageBasicArrayList!.add(originalImage);
    
scaledImageBasicArrayList!.add(scaledImage);
    
this.scaleXBasicArrayList!.add(scaleX);
    
this.scaleYBasicArrayList!.add(scaleY);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaledImage;
    

                        }
                            
}


                //@Throws(Error::class)
            
    getScaledImage(imageCache: ImageCache, originalImage: Image, scaleX: number, scaleY: number, width: number, height: number, cached: boolean): Image{
    //var imageCache = imageCache
    //var originalImage = originalImage
    //var scaleX = scaleX
    //var scaleY = scaleY
    //var width = width
    //var height = height
    //var cached = cached

    var image: Image = NullCanvas.NULL_IMAGE;
        
        
;
    

                        if(cached)
                        
                                    {
                                    image= imageCache!.get(this.constructor.name.toString()!, width, height);
    

                                    }
                                
                        else {
                            image= imageCache!.get(commonStrings!.CREATE_IMAGE, width, height);
    

                        }
                            

                        if(image.isMutable())
                        
                                    {
                                    
    var matrix: Matrix = new Matrix();
        
        
;
    
this.scale(image, matrix, scaleX, scaleY);
    
image.getGraphics()!.drawImage(originalImage, 0, 0, anchor);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    

                                    }
                                
                        else {
                            


                            throw new Error("Not Mutable")

                        }
                            
}


    scale(image: Image, matrix: Matrix, scaleX: number, scaleY: number){
    //var image = image
    //var matrix = matrix
    //var scaleX = scaleX
    //var scaleY = scaleY
matrix.setScale(scaleX, scaleY);
    

    var canvas: Canvas = 
                                    (image as AndroidImageInterface).getCanvas()!;
        
        
;
    
canvas.concat(matrix);
    
}


}
                
            

