
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image

import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features

import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor

import { OpenGLFeatureFactory } from '../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
//not GWT import const OpenGLFeatureFactory

import { ModifierOpenGLESImageProcessor } from '../../../../org/allbinary/image/opengles/ModifierOpenGLESImageProcessor.js';
//not GWT import const ModifierOpenGLESImageProcessor

import { OpenGLESImage } from '../../../../org/allbinary/image/opengles/OpenGLESImage.js';
//not GWT import const OpenGLESImage

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

import { ImageData } from '../../../../org/eclipse/swt/graphics/ImageData.js';
//not GWT import const ImageData

import { SwtImmutableImage } from '../../../../org/microemu/device/swt/SwtImmutableImage.js';
//not GWT import const SwtImmutableImage

import { SwtMutableImage } from '../../../../org/microemu/device/swt/SwtMutableImage.js';
//not GWT import const SwtMutableImage

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageCopyUtil } from './ImageCopyUtil.js';
//sameFolderImports - not GWT import - same folder const ImageCopyUtil

export class ImageModifierUtil
            extends Object
         {
        

    private static readonly instance: ImageModifierUtil = new ImageModifierUtil();

    public static getInstanceOrCreate(): ImageModifierUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageModifierUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly imageCopyUtil: ImageCopyUtil = ImageCopyUtil.getInstance()!;

    private readonly features: Features = Features.getInstance()!;

    public setBasicColorP(basicColor: BasicColor){
}


    public setColor(unusedOriginalImage: Image, image: Image, imageIndex: number, basicColor: BasicColor){

    let newBufferedImage: org.eclipse.swt.graphics.Image;;
    

                        if(image.isMutable())
                        
                                    {
                                    
    let swtImage: SwtMutableImage = image as SwtMutableImage;;
    
newBufferedImage= swtImage!.getImage() as org.eclipse.swt.graphics.Image;
    

                                    }
                                
                        else {
                            
    let swtImage: SwtImmutableImage = image as SwtImmutableImage;;
    
newBufferedImage= swtImage!.getImage() as org.eclipse.swt.graphics.Image;
    

                        }
                            

    let r: number = basicColor!.red;;
    

    let g: number = basicColor!.green;;
    

    let b: number = basicColor!.blue;;
    

    let width: number = image.getWidth()!;;
    

    let height: number = image.getHeight()!;;
    

    let imageData: ImageData = newBufferedImage!.getImageData()!;;
    

                        if(imageData!.depth == 24)
                        
                                    {
                                    
    let rx: number= 0;;
    

    let gx: number= 0;;
    

    let bx: number= 0;;
    

    let index3: number= 0;;
    




                        for (
    let index: number = 0;index < width; index++)
        {




                        for (
    let index2: number = 0;index2 < height; index2++)
        {
index3= (index2 *imageData!.bytesPerLine) +(index *4);
    
rx= (imageData!.data[index3]&0xFF)<<16;
    
gx= (imageData!.data[index3 +1]&0xFF)<<8;
    
bx= (imageData!.data[index3 +2]&0xFF);
    

                        if(rx != 0 || gx != 0 || bx != 0)
                        
                                    {
                                    imageData!.data[index3]= ((r) << 24 >> 24);
    
imageData!.data[index3 +1]= ((g) << 24 >> 24);
    
imageData!.data[index3 +2]= ((b) << 24 >> 24);
    

                                    }
                                
}

}


                                    }
                                
}


    public changeColor(unusedOriginalImage: Image, image: Image, imageIndex: number, basicColor: BasicColor){

                        if(this.features.isFeature(OpenGLFeatureFactory.getInstance()!.OPENGL))
                        
                                    {
                                    
                        if(image.getType() >= OpenGLESImage.TYPE)
                        
                                    {
                                    
    let openGLESImage: OpenGLESImage = (image as OpenGLESImage);;
    
openGLESImage!.imageProcessor= ModifierOpenGLESImageProcessor.getInstance();
    
openGLESImage!.openGLESImageProperties!.redf= basicColor!.getRedComponent();
    
openGLESImage!.openGLESImageProperties!.greenf= basicColor!.getGreenComponent();
    
openGLESImage!.openGLESImageProperties!.bluef= basicColor!.getBlueComponent();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                                    }
                                

    let newBufferedImage: org.eclipse.swt.graphics.Image;;
    

                        if(image.isMutable())
                        
                                    {
                                    
    let swtImage: SwtMutableImage = image as SwtMutableImage;;
    
newBufferedImage= swtImage!.getImage() as org.eclipse.swt.graphics.Image;
    

                                    }
                                
                        else {
                            
    let swtImage: SwtImmutableImage = image as SwtImmutableImage;;
    
newBufferedImage= swtImage!.getImage() as org.eclipse.swt.graphics.Image;
    

                        }
                            

    let MAX: number = 255;;
    

    let r: number = (basicColor!.red) /MAX;;
    

    let g: number = (basicColor!.green) /MAX;;
    

    let b: number = (basicColor!.blue) /MAX;;
    

    let rx: number= 0;;
    

    let gx: number= 0;;
    

    let bx: number= 0;;
    

    let imageData: ImageData = newBufferedImage!.getImageData()!;;
    

                        if(imageData!.depth == 24)
                        
                                    {
                                    
    let size: number = imageData!.data.length;;
    




                        for (
    let index: number = 0;index < size; )
        {
rx= (imageData!.data[index]&0xFF)<<16;
    
gx= (imageData!.data[index +1]&0xFF)<<8;
    
bx= (imageData!.data[index +2]&0xFF);
    
rx *= r;
    
gx *= g;
    
bx *= b;
    
imageData!.data[index]= ((rx) << 24 >> 24);
    
imageData!.data[index +1]= ((gx) << 24 >> 24);
    
imageData!.data[index +2]= ((bx) << 24 >> 24);
    
}


                                    }
                                
}


    public setAlpha(unusedOriginalImage: Image, image: Image, imageIndex: number, alphaInt: number){

                        if(this.features.isFeature(OpenGLFeatureFactory.getInstance()!.OPENGL))
                        
                                    {
                                    
                        if(image.getType() >= OpenGLESImage.TYPE)
                        
                                    {
                                    
    let openGLESImage: OpenGLESImage = (image as OpenGLESImage);;
    
openGLESImage!.imageProcessor= ModifierOpenGLESImageProcessor.getInstance();
    
openGLESImage!.openGLESImageProperties!.alphaf= (alphaInt) /255;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                                    }
                                
this.setAlphaSWT(image, alphaInt);
    
}


    public setAlphaSWT(image: Image, alphaInt: number){

    let alpha: number = ((alphaInt) << 24 >> 24);;
    

    let newBufferedImage: org.eclipse.swt.graphics.Image;;
    

                        if(image.isMutable())
                        
                                    {
                                    
    let swtImage: SwtMutableImage = image as SwtMutableImage;;
    
newBufferedImage= swtImage!.getImage() as org.eclipse.swt.graphics.Image;
    

                                    }
                                
                        else {
                            
    let swtImage: SwtImmutableImage = image as SwtImmutableImage;;
    
newBufferedImage= swtImage!.getImage() as org.eclipse.swt.graphics.Image;
    

                        }
                            
newBufferedImage!.getImageData()!.alpha= alpha;
    
}


    public getImageArray(originalImageArray: Image[]): Image[]{

 try { 
    let newImageArray: Image[] = new Array(originalImageArray!.length);;
    

    let size: number = newImageArray!.length
                ;;
    

    let originalImage: Image;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
originalImage= originalImageArray[index]!;
    

    let image: Image = this.imageCopyUtil!.createImage(originalImage)!;;
    
newImageArray[index]= image;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newImageArray;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
PreLogUtil.putOE(commonStrings!.EXCEPTION, this, "getImageArray", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return originalImageArray;
    

 }
   }
 
}


    public handleImage(imageArray: Image[], index: number, image: Image){
}


    public reset(){
}


}

