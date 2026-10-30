
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
//not GWT import const Bitmap

import { Canvas } from '../../../../android/graphics/Canvas.js';
//not GWT import const Canvas

import { Matrix } from '../../../../android/graphics/Matrix.js';
//not GWT import const Matrix

import { Image } from '../../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image

import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const NullImage

import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Anchor

import { ImageCache } from '../../../../org/allbinary/image/ImageCache.js';
//not GWT import const ImageCache

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { AndroidImageInterface } from '../../../../org/microemu/android/device/AndroidImageInterface.js';
//not GWT import const AndroidImageInterface

















                                        
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

    let scaleX: number = scaleNominatorX /scaleDenominatorX;;
    

    let scaleY: number = scaleNominatorY /scaleDenominatorY;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createImage(imageCache, originalImage, scaleX, scaleY, cached);;
    
}


                //@Throws(Exception.constructor)
            
    public createImage(imageCache: ImageCache, originalImage: Image, scaleX: number, scaleY: number, cached: boolean): Image{

    let originalAndroidImage: AndroidImageInterface = originalImage as AndroidImageInterface;;
    

    let originalBitmap: Bitmap = originalAndroidImage!.getBitmap()!;;
    

    let width: number = globalThis.Math.trunc((originalBitmap!.getWidth() *scaleX));;
    

    let height: number = globalThis.Math.trunc((originalBitmap!.getHeight() *scaleY));;
    

    let index: number = this.imageBasicArrayList!.indexOf(originalImage)!;;
    

    let alreadyAvailable: boolean = false;;
    

                        if(index >= 0)
                        
                                    {
                                    
    let scaleX2Float: number = this.scaleXBasicArrayList!.get(index);;
    

    let scaleX2: number = scaleX2Float!!;;
    

    let scaleY2Float: number = this.scaleYBasicArrayList!.get(index);;
    

    let scaleY2: number = scaleY2Float!!;;
    

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
                            
    let scaledImage: Image = this.getScaledImage(imageCache, originalImage, scaleX, scaleY, width, height, cached)!;;
    
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

    let image: Image = NullImage.NULL_IMAGE;;
    

                        if(cached)
                        
                                    {
                                    image= imageCache!.get(this.constructor.name.toString()!, width, height);
    

                                    }
                                
                        else {
                            image= imageCache!.get(this.commonStrings!.CREATE_IMAGE, width, height);
    

                        }
                            

                        if(image.isMutable())
                        
                                    {
                                    
    let matrix: Matrix = new Matrix();;
    
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
    

    let canvas: Canvas = (image as AndroidImageInterface).getCanvas()!;;
    
canvas.concat(matrix);
    
}


}

