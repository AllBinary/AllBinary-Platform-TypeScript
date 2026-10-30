
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
        
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features

import { GameFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js';
//not GWT import const GameFeatureFactory

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { SWT } from '../../../../org/eclipse/swt/SWT.js';
//not GWT import const SWT

import { GC } from '../../../../org/eclipse/swt/graphics/GC.js';
//not GWT import const GC

import { ImageData } from '../../../../org/eclipse/swt/graphics/ImageData.js';
//not GWT import const ImageData

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageUtil } from './ImageUtil.js';
//not GWT import - same folder const ImageUtil
import { Image } from './Image.js';
//not GWT import - same folder const Image

export class ImageSwtRotationUtil
            extends Object
         {
        

    private static readonly instance: ImageSwtRotationUtil = new ImageSwtRotationUtil();

    public static getInstance(): ImageSwtRotationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageSwtRotationUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly imageUtil: ImageUtil = ImageUtil.getInstance()!;

    private readonly gameFeatureFactory: GameFeatureFactory = GameFeatureFactory.getInstance()!;

    private readonly features: Features = Features.getInstance()!;

    private readonly NO_COPY: string = "SWT should not copy images after initial loading as the alpha is not honored";

private constructor (){

            super();
        }


    public getRotatedImage(bufferedImage: org.eclipse.swt.graphics.Image, totalAngle: number): org.eclipse.swt.graphics.Image{

                        if(!this.features.isFeature(this.gameFeatureFactory!.POST_IMAGE_LOADING_MODIFICATION))
                        
                                    {
                                    this.logUtil!.putF(this.NO_COPY, this, this.commonStrings!.CONSTRUCTOR);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImage;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImage;
    
}


    getRotatedImage2(bufferedImage: org.eclipse.swt.graphics.Image, newBufferedImage: org.eclipse.swt.graphics.Image, gc: GC, angle: number): org.eclipse.swt.graphics.Image{

                        if(!this.features.isFeature(this.gameFeatureFactory!.POST_IMAGE_LOADING_MODIFICATION))
                        
                                    {
                                    this.logUtil!.putF(this.NO_COPY, this, this.commonStrings!.CONSTRUCTOR);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImage;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImage;
    
}


    public rotateImage(originalSwtImage: org.eclipse.swt.graphics.Image, newSwtImage: org.eclipse.swt.graphics.Image, gc: GC, totalAngle: number): org.eclipse.swt.graphics.Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getRotatedImage2(originalSwtImage, newSwtImage, gc, totalAngle);;
    
}


    public getRotatedImageSWT(bufferedImage: org.eclipse.swt.graphics.Image, newSwtImage: org.eclipse.swt.graphics.Image, gc: GC, totalAngle: number): org.eclipse.swt.graphics.Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getRotatedImage2(bufferedImage, newSwtImage, gc, totalAngle);;
    
}


    public getRotatedImages(bufferedImage: org.eclipse.swt.graphics.Image, numberOfFrames: number, totalAngle: number): org.eclipse.swt.graphics.Image[]{

    let bufferedImageArray: org.eclipse.swt.graphics.Image[] = new Array(numberOfFrames);;
    

    let angle: number= 0;;
    

    let size: number = bufferedImageArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
angle= (globalThis.Math.trunc(totalAngle /size)) *index;
    
bufferedImageArray[index]= this.getRotatedImage(bufferedImage, angle);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImageArray;
    
}


    public createSpriteImage(bufferedImageArray: org.eclipse.swt.graphics.Image[]): org.eclipse.swt.graphics.Image{

    let columns: number = 9;;
    

    let rows: number = 0;;
    

    let size: number = bufferedImageArray!.length
                ;;
    

                        if(size < columns)
                        
                                    {
                                    columns= size;
    

                                    }
                                
rows= (globalThis.Math.trunc(size /columns));
    

                        if(size % columns != 0)
                        
                                    {
                                    rows++;
    

                                    }
                                

    let firstBufferedImage: org.eclipse.swt.graphics.Image = bufferedImageArray[0]!;;
    

    let imageData: ImageData = firstBufferedImage!.getImageData()!;;
    

    let bufferedImage: org.eclipse.swt.graphics.Image = this.imageUtil!.create(imageData!.width *columns, imageData!.height *rows)!;;
    

    let gc: GC = new GC(bufferedImage);;
    
gc.setAntialias(SWT.ON);
    
gc.setInterpolation(SWT.HIGH);
    

    let columnIndex: number = 0;;
    

    let rowIndex: number = 0;;
    

    let nextBufferedImage: org.eclipse.swt.graphics.Image;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

                        if(globalThis.Math.trunc(index /9) != 0 && index % 9 == 0)
                        
                                    {
                                    rowIndex++;
    
columnIndex= 0;
    

                                    }
                                
nextBufferedImage= bufferedImageArray[index]!;
    
imageData= nextBufferedImage!.getImageData();
    
gc.drawImage(bufferedImage, 0, 0, bufferedImage!.getBounds()!.width, bufferedImage!.getBounds()!.height, imageData!.width *columnIndex, imageData!.height *rowIndex, imageData!.width, imageData!.height);
    
columnIndex++;
    
}

gc.dispose();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImage;
    
}


}

