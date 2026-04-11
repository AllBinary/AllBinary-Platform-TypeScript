
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
        



import { awt } from "../../../../../java/awt.js";

    
import { BufferedImage } from "../../../../../java/awt/image/BufferedImage.js";

    
import { ColorCacheFactory } from "../../../../../org/allbinary/graphics/color/ColorCacheFactory.js";

    
import { ColorCacheable } from "../../../../../org/allbinary/graphics/color/ColorCacheable.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonLabels } from "../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class ImageAnalysis
            extends Object
         {
        

    private static readonly instance: ImageAnalysis = new ImageAnalysis();
        
        

    public static getInstance(): ImageAnalysis{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                //@Throws(Error::class)
            
    public static process(bufferedImage: BufferedImage, colorRangeInterface: ColorRangeInterface): ImageAnalysisResults{
var bufferedImage = bufferedImage
var colorRangeInterface = colorRangeInterface

    var imageAnalysisResults: ImageAnalysisResults = new ImageAnalysisResults();
        
        
;
    

    var redTotal: number = 0;
        
        
;
    

    var greenTotal: number = 0;
        
        
;
    

    var blueTotal: number = 0;
        
        
;
    




                        for (
    var indexY: number = 0;
        
        
indexY < bufferedImage!.getHeight(); indexY++)
        {




                        for (
    var indexX: number = 0;
        
        
indexX < bufferedImage!.getWidth(); indexX++)
        {

    var keyInteger: Integer = Integer(Integer.valueOf(bufferedImage!.getRGB(indexX, indexY)))!;
        
        
;
    

    var colorCacheable: ColorCacheable = ColorCacheFactory.getInstance()!.get(keyInteger);

                         as ColorCacheable;
        
        
;
    

    var color: Color = colorCacheable!.getColor()!;
        
        
;
    
processColorRangeResults(imageAnalysisResults, colorRangeInterface, color);
    
processImageColorResults(imageAnalysisResults!.getImageColorResults(), colorRangeInterface, color);
    
redTotal += color.getRed();
    
greenTotal += color.getGreen();
    
blueTotal += color.getBlue();
    
}

}


    var totalPixels: number = imageAnalysisResults!.getImageColorRangeResults()!.getTotalPixelsChecked()!;
        
        
;
    

    var colorAverage: ColorAverage = imageAnalysisResults!.getImageColorResults()!.getColorAverage()!;
        
        
;
    
colorAverage!.setAvgRed(redTotal.toFloat() /totalPixels);
    
colorAverage!.setAvgGreen(greenTotal.toFloat() /totalPixels);
    
colorAverage!.setAvgBlue(blueTotal.toFloat() /totalPixels);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageAnalysisResults;
    
}


    static processColorRangeResults(imageAnalysisResults: ImageAnalysisResults, colorRangeInterface: ColorRangeInterface, color: Color){
var imageAnalysisResults = imageAnalysisResults
var colorRangeInterface = colorRangeInterface
var color = color

                        if(colorRangeInterface!.isInRange(color))
                        
                                    {
                                    imageAnalysisResults!.getImageColorRangeResults()!.addMatchingPixelsChecked();
    

                                    }
                                
                        else {
                            
                        }
                            
imageAnalysisResults!.getImageColorRangeResults()!.addTotalPixelsChecked();
    
}


    static processImageColorResults(imageColorResults: ImageColorResults, colorRangeInterface: ColorRangeInterface, color: Color){
var imageColorResults = imageColorResults
var colorRangeInterface = colorRangeInterface
var color = color

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


                //@Throws(Error::class)
            
    public process(bufferedImageArray: BufferedImage[], colorRangeInterface: ColorRangeInterface): ImageAnalysisResults[]{
var bufferedImageArray = bufferedImageArray
var colorRangeInterface = colorRangeInterface

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(CommonLabels.getInstance()!.START +colorRangeInterface!.toString(), this, commonStrings!.PROCESS);
    

    var imageAnalysisResultsArray: ImageAnalysisResults[] = new Array(bufferedImageArray!.length);
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < bufferedImageArray!.length; index++)
        {
imageAnalysisResultsArray[index]= ImageAnalysis.process(bufferedImageArray[index]!, colorRangeInterface);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageAnalysisResultsArray;
    
}


}
                
            

