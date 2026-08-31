
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
      //not GWT import const awt = globalThis.java.awt;

      
import { BufferedImage } from '../../../../../java/awt/image/BufferedImage.js';
      //not GWT import const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
import { ColorCacheFactory } from '../../../../../org/allbinary/graphics/color/ColorCacheFactory.js';
      //not GWT import const ColorCacheFactory = globalThis.org.allbinary.graphics.color.ColorCacheFactory;

      
import { ColorCacheable } from '../../../../../org/allbinary/graphics/color/ColorCacheable.js';
      //not GWT import const ColorCacheable = globalThis.org.allbinary.graphics.color.ColorCacheable;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageAnalysisResults } from './ImageAnalysisResults.js';
//not GWT import const  = globalThis.org.allbinary.media.image.analysis.ImageAnalysisResults;

                import { ColorRangeInterface } from './ColorRangeInterface.js';
//not GWT import const  = globalThis.org.allbinary.media.image.analysis.ColorRangeInterface;

                import { Color } from './Color.js';
//not GWT import const  = globalThis.org.allbinary.media.image.analysis.Color;

                import { ColorAverage } from './ColorAverage.js';
//not GWT import const  = globalThis.org.allbinary.media.image.analysis.ColorAverage;

                import { ImageColorResults } from './ImageColorResults.js';
//not GWT import const  = globalThis.org.allbinary.media.image.analysis.ImageColorResults;

                
export class ImageAnalysis
            extends Object
         {
        

    private static readonly instance: ImageAnalysis = new ImageAnalysis();

    public static getInstance(): ImageAnalysis{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageAnalysis.instance;
    
}


                //@Throws(Exception.constructor)
            
    public static process(bufferedImage: BufferedImage, colorRangeInterface: ColorRangeInterface): ImageAnalysisResults{

    var imageAnalysisResults: ImageAnalysisResults = new ImageAnalysisResults();;
    

    var redTotal: number = 0;;
    

    var greenTotal: number = 0;;
    

    var blueTotal: number = 0;;
    




                        for (
    var indexY: number = 0;indexY < bufferedImage!.getHeight(); indexY++)
        {




                        for (
    var indexX: number = 0;indexX < bufferedImage!.getWidth(); indexX++)
        {

    var keyInteger: Integer = Integer.valueOf(bufferedImage!.getRGB(indexX, indexY))!;;
    

    var colorCacheable: ColorCacheable = ColorCacheFactory.getInstance()!.get(keyInteger) as ColorCacheable;;
    

    var color: Color = colorCacheable!.getColor()!;;
    
ImageAnalysis.processColorRangeResults(imageAnalysisResults, colorRangeInterface, color);
    
ImageAnalysis.processImageColorResults(imageAnalysisResults!.getImageColorResults(), colorRangeInterface, color);
    
redTotal += color.getRed();
    
greenTotal += color.getGreen();
    
blueTotal += color.getBlue();
    
}

}


    var totalPixels: number = imageAnalysisResults!.getImageColorRangeResults()!.getTotalPixelsChecked()!;;
    

    var colorAverage: ColorAverage = imageAnalysisResults!.getImageColorResults()!.getColorAverage()!;;
    
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


                //@Throws(Exception.constructor)
            
    public process(bufferedImageArray: BufferedImage[], colorRangeInterface: ColorRangeInterface): ImageAnalysisResults[]{

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(CommonLabels.getInstance()!.START +colorRangeInterface!.toString(), this, commonStrings!.PROCESS);
    

    var imageAnalysisResultsArray: ImageAnalysisResults[] = new Array(bufferedImageArray!.length);;
    




                        for (
    var index: number = 0;index < bufferedImageArray!.length; index++)
        {
imageAnalysisResultsArray[index]= ImageAnalysis.process(bufferedImageArray[index]!, colorRangeInterface);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageAnalysisResultsArray;
    
}


}



