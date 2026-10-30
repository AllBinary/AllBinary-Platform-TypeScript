
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
import { awt } from '../../../../../java/awt.js';
//not GWT import const awt

import { BufferedImage } from '../../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage

import { ColorCacheFactory } from '../../../../../org/allbinary/graphics/color/ColorCacheFactory.js';
//not GWT import const ColorCacheFactory

import { ColorCacheable } from '../../../../../org/allbinary/graphics/color/ColorCacheable.js';
//not GWT import const ColorCacheable

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageAnalysisResults } from './ImageAnalysisResults.js';
//not GWT import - same folder const ImageAnalysisResults
import { ColorRangeInterface } from './ColorRangeInterface.js';
//not GWT import - same folder const ColorRangeInterface
import { Color } from './Color.js';
//not GWT import - same folder const Color
import { ColorAverage } from './ColorAverage.js';
//not GWT import - same folder const ColorAverage
import { ImageColorResults } from './ImageColorResults.js';
//not GWT import - same folder const ImageColorResults

export class ImageAnalysis
            extends Object
         {
        

    private static readonly instance: ImageAnalysis = new ImageAnalysis();

    public static getInstance(): ImageAnalysis{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageAnalysis.instance;
    
}


                //@Throws(Exception.constructor)
            
    public static process$overload2(bufferedImage: BufferedImage, colorRangeInterface: ColorRangeInterface): ImageAnalysisResults{

    let imageAnalysisResults: ImageAnalysisResults = new ImageAnalysisResults();;
    

    let redTotal: number = 0;;
    

    let greenTotal: number = 0;;
    

    let blueTotal: number = 0;;
    




                        for (
    let indexY: number = 0;indexY < bufferedImage!.getHeight(); indexY++)
        {




                        for (
    let indexX: number = 0;indexX < bufferedImage!.getWidth(); indexX++)
        {

    let keyInteger: Integer = Integer.valueOf(bufferedImage!.getRGB(indexX, indexY))!;;
    

    let colorCacheable: ColorCacheable = ColorCacheFactory.getInstance()!.get(keyInteger) as ColorCacheable;;
    

    let color: Color = colorCacheable!.getColor()!;;
    
ImageAnalysis.processColorRangeResults(imageAnalysisResults, colorRangeInterface, color);
    
ImageAnalysis.processImageColorResults(imageAnalysisResults!.getImageColorResults(), colorRangeInterface, color);
    
redTotal += color.getRed();
    
greenTotal += color.getGreen();
    
blueTotal += color.getBlue();
    
}

}


    let totalPixels: number = imageAnalysisResults!.getImageColorRangeResults()!.getTotalPixelsChecked()!;;
    

    let colorAverage: ColorAverage = imageAnalysisResults!.getImageColorResults()!.getColorAverage()!;;
    
colorAverage!.setAvgRed(redTotal /totalPixels);
    
colorAverage!.setAvgGreen(greenTotal /totalPixels);
    
colorAverage!.setAvgBlue(blueTotal /totalPixels);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageAnalysisResults;
    
}


    static processColorRangeResults(imageAnalysisResults: ImageAnalysisResults, colorRangeInterface: ColorRangeInterface, color: Color){

                        if(colorRangeInterface!.isInRange(color))
                        
                                    {
                                    imageAnalysisResults!.getImageColorRangeResults()!.addMatchingPixelsChecked();
    

                                    }
                                
                        else {
                            
                        }
                            
imageAnalysisResults!.getImageColorRangeResults()!.addTotalPixelsChecked();
    
}


    static processImageColorResults(imageColorResults: ImageColorResults, colorRangeInterface: ColorRangeInterface, color: Color){

                        if(color.getRed() < imageColorResults!.getColorRange()!.getMinRed())
                        
                                    {
                                    imageColorResults!.getColorRange()!.setMinRed(color.getRed());
    

                                    }
                                

                        if(color.getGreen() < imageColorResults!.getColorRange()!.getMinGreen())
                        
                                    {
                                    imageColorResults!.getColorRange()!.setMinGreen(color.getGreen());
    

                                    }
                                

                        if(color.getBlue() < imageColorResults!.getColorRange()!.getMinBlue())
                        
                                    {
                                    imageColorResults!.getColorRange()!.setMinBlue(color.getBlue());
    

                                    }
                                

                        if(color.getRed() > imageColorResults!.getColorRange()!.getMaxRed())
                        
                                    {
                                    imageColorResults!.getColorRange()!.setMaxRed(color.getRed());
    

                                    }
                                

                        if(color.getGreen() > imageColorResults!.getColorRange()!.getMaxGreen())
                        
                                    {
                                    imageColorResults!.getColorRange()!.setMaxGreen(color.getGreen());
    

                                    }
                                

                        if(color.getBlue() > imageColorResults!.getColorRange()!.getMaxBlue())
                        
                                    {
                                    imageColorResults!.getColorRange()!.setMaxBlue(color.getBlue());
    

                                    }
                                
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }

process(...args: any[]): any {
   
    if (args.length === 2) return this.process$overload1(args[0], args[1]);
   
    if (args.length === 2) return this.process$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: process'); }
  
                //@Throws(Exception.constructor)
            
    public process$overload1(bufferedImageArray: BufferedImage[], colorRangeInterface: ColorRangeInterface): ImageAnalysisResults[]{

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(CommonLabels.getInstance()!.START +colorRangeInterface!.toString(), this, commonStrings!.PROCESS);
    

    let imageAnalysisResultsArray: ImageAnalysisResults[] = new Array(bufferedImageArray!.length);;
    




                        for (
    let index: number = 0;index < bufferedImageArray!.length; index++)
        {
imageAnalysisResultsArray[index]= ImageAnalysis.process(bufferedImageArray[index]!, colorRangeInterface);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageAnalysisResultsArray;
    
}


}

