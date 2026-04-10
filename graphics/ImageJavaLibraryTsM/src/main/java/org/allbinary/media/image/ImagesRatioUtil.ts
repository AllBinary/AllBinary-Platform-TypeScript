
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
        



import { awt } from "../../../../java/awt.js";

    
import { BufferedImage } from "../../../../java/awt/image/BufferedImage.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonLabels } from "../../../../org/allbinary/string/CommonLabels.js";

    

export class ImagesRatioUtil
            extends Object
         {
        

    private static readonly instance: ImagesRatioUtil = new ImagesRatioUtil();
        
        

    public static getInstance(): ImagesRatioUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


    private readonly imageUtil: ImageUtil = ImageUtil.getInstance()!;
        
        

    public isEqual(bufferedImageArray: BufferedImage[], totalImages: number): boolean{
    //var bufferedImageArray = bufferedImageArray
    //var totalImages = totalImages

    var end: number = totalImages;
        
        


                        if(bufferedImageArray!.length < totalImages)
                        end= bufferedImageArray!.length

    var ratio: number = (bufferedImageArray[0]!.getWidth().toDouble() /bufferedImageArray[0]!.getHeight());
        
        





                        for (
    var index: number = 1;
        
        
index < end; index++)
        {

                        if(ratio != (bufferedImageArray[index]!.getWidth().toDouble() /bufferedImageArray[index]!.getHeight()))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public getAverage(bufferedImageArray: BufferedImage[], totalImages: number): number{
    //var bufferedImageArray = bufferedImageArray
    //var totalImages = totalImages

    var ratio: number = 0;
        
        


    var end: number = totalImages;
        
        


                        if(bufferedImageArray!.length < totalImages)
                        end= bufferedImageArray!.length




                        for (
    var index: number = 0;
        
        
index < end; index++)
        {
ratio += (bufferedImageArray[index]!.getWidth().toDouble() /bufferedImageArray[index]!.getHeight())
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (ratio.toDouble() /end);
    
}


                //@Throws(Error::class)
            
    public fudge(bufferedImage: BufferedImage, ratio: number): BufferedImage{
var bufferedImage = bufferedImage
var ratio = ratio

    var imageRatio: number = (bufferedImage!.getWidth().toDouble() /bufferedImage!.getHeight());
        
        


    var point: Point = new Point();
        
        


    var newHeight: number = bufferedImage!.getHeight()!;
        
        


    var newWidth: number = bufferedImage!.getWidth()!;
        
        


                        if(ratio > imageRatio)
                        
                                    {
                                    newWidth= (bufferedImage!.getHeight().toDouble() *ratio).toInt()
point.x= (newWidth -bufferedImage!.getWidth()) /2

                                    }
                                
                        else {
                            newHeight= (bufferedImage!.getWidth().toDouble() /ratio).toInt()
point.y= (newHeight -bufferedImage!.getHeight()) /2

                        }
                            

    var commonLabels: CommonLabels = CommonLabels.getInstance()!;
        
        

logUtil!.put(commonLabels!.WIDTH_LABEL +bufferedImage!.getWidth() +" newWidth: " +newWidth +commonLabels!.HEIGHT_LABEL +bufferedImage!.getHeight() +" newHeight: " +newHeight +" needed ratio: " +(newWidth.toDouble() /newHeight), this, "fudge")

    var newBufferedImage: BufferedImage = this.imageUtil!.create(newWidth, newHeight)!;
        
        


    var g: Graphics2D = newBufferedImage!.createGraphics()!;
        
        


                        if(point.x > 0)
                        
                                    {
                                    
    var firstColumnBufferedImage: BufferedImage = bufferedImage!.getSubimage(0, 0, 1, bufferedImage!.getHeight())!;
        
        


    var lastColumnBufferedImage: BufferedImage = bufferedImage!.getSubimage(bufferedImage!.getWidth() -1, 0, 1, bufferedImage!.getHeight())!;
        
        

logUtil!.put("Draw some columns to fill in gap", this, "fudge")




                        for (
    var index: number = 0;
        
        
index < point.x; index++)
        {
g.drawImage(firstColumnBufferedImage, index, 0, 
                            null)
g.drawImage(lastColumnBufferedImage, newWidth -index, 0, 
                            null)
}


                                    }
                                

                        if(point.y > 0)
                        
                                    {
                                    
    var firstRowBufferedImage: BufferedImage = bufferedImage!.getSubimage(0, 0, bufferedImage!.getWidth(), 1)!;
        
        


    var lastRowBufferedImage: BufferedImage = bufferedImage!.getSubimage(0, bufferedImage!.getHeight() -1, bufferedImage!.getWidth(), 1)!;
        
        

logUtil!.put("Draw some rows to fill in gap", this, "fudge")




                        for (
    var index: number = 0;
        
        
index < point.y; index++)
        {
g.drawImage(firstRowBufferedImage, 0, index, 
                            null)
g.drawImage(lastRowBufferedImage, 0, newHeight -index, 
                            null)
}


                                    }
                                
g.drawImage(bufferedImage, point.x, point.y, bufferedImage!.getWidth(), bufferedImage!.getHeight(), 
                            null)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newBufferedImage;
    
}


                //@Throws(Error::class)
            
    public fudge(bufferedImageArray: BufferedImage[], totalImages: number, ratio: number): BufferedImage[]{
    //var bufferedImageArray = bufferedImageArray
    //var totalImages = totalImages
    //var ratio = ratio

    var end: number = totalImages;
        
        


                        if(bufferedImageArray!.length < totalImages)
                        end= bufferedImageArray!.length

    var fudgedBufferedImageArray: BufferedImage[] = new Array(end);
        
        





                        for (
    var index: number = 0;
        
        
index < end; index++)
        {
fudgedBufferedImageArray[index]= fudge(bufferedImageArray[index]!, ratio)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fudgedBufferedImageArray;
    
}


}
                
            

