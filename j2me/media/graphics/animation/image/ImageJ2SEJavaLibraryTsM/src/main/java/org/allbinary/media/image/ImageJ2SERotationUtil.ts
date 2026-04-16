
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
        



import { Graphics2D } from "../../../../java/awt/Graphics2D.js";

    
import { Image } from "../../../../java/awt/Image.js";

    
import { BufferedImage } from "../../../../java/awt/image/BufferedImage.js";

    

import { ImageUtil } from "./ImageUtil.js";

import { ImageJ2SEUtil } from "./ImageJ2SEUtil.js";

import { Math } from "./Math.js";

export class ImageJ2SERotationUtil
            extends Object
         {
        

    private static readonly instance: ImageJ2SERotationUtil = new ImageJ2SERotationUtil();
        
        

    public static getInstance(): ImageJ2SERotationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly imageUtil: ImageUtil = ImageUtil.getInstance()!;
        
        

    private readonly imageJ2SEUtil: ImageJ2SEUtil = ImageJ2SEUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


    public getRotatedImage(bufferedImage: Image, totalAngle: number): BufferedImage{
    //var bufferedImage = bufferedImage
    //var totalAngle = totalAngle



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getRotatedImage(bufferedImage, TWO_PIE *totalAngle /360);

                        ;
    
}


    public getRotatedImage(bufferedImage: Image, radians: number): BufferedImage{
    //var bufferedImage = bufferedImage
    //var radians = radians

    var newBufferedImage: BufferedImage = this.imageUtil!.create(bufferedImage!.getWidth(
                            null), bufferedImage!.getHeight(
                            null))!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getRotatedImage(bufferedImage, newBufferedImage, newBufferedImage!.createGraphics(), radians);

                        ;
    
}


    getRotatedImage(bufferedImage: Image, newBufferedImage: BufferedImage, g: Graphics2D, radians: number): BufferedImage{
    //var bufferedImage = bufferedImage
    //var newBufferedImage = newBufferedImage
    //var g = g
    //var radians = radians
g.rotate(radians, newBufferedImage!.getWidth(
                            null) /2, newBufferedImage!.getHeight(
                            null) /2);
    
g.drawImage(bufferedImage, 0, 0, bufferedImage!.getWidth(
                            null), bufferedImage!.getHeight(
                            null), 
                            null);
    
g.dispose();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newBufferedImage;
    
}


    private readonly TWO_PIE: number = 2 *Math.PI;
        
        

    public rotateImage(bufferedImage: Image, newBufferedImage: BufferedImage, totalAngle: number): BufferedImage{
    //var bufferedImage = bufferedImage
    //var newBufferedImage = newBufferedImage
    //var totalAngle = totalAngle

    var g: Graphics2D = newBufferedImage!.createGraphics()!;
        
        
;
    
g.setBackground(imageJ2SEUtil!.TRANSPARENT_COLOR);
    
g.clearRect(0, 0, newBufferedImage!.getWidth(), newBufferedImage!.getHeight());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getRotatedImage(bufferedImage, newBufferedImage, g, TWO_PIE *totalAngle /360);

                        ;
    
}


    public getRotatedImage(bufferedImage: Image, newBufferedImage: BufferedImage, totalAngle: number): BufferedImage{
    //var bufferedImage = bufferedImage
    //var newBufferedImage = newBufferedImage
    //var totalAngle = totalAngle

    var g: Graphics2D = newBufferedImage!.createGraphics()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getRotatedImage(bufferedImage, newBufferedImage, g, TWO_PIE *totalAngle /360);

                        ;
    
}


    public getRotatedImages(bufferedImage: Image, numberOfFrames: number, totalAngle: number): BufferedImage[]{
    //var bufferedImage = bufferedImage
    //var numberOfFrames = numberOfFrames
    //var totalAngle = totalAngle

    var bufferedImageArray: BufferedImage[] = new Array(numberOfFrames);
        
        
;
    

    var arc: number = (TWO_PIE) *totalAngle /360;
        
        
;
    

    var size: number = bufferedImageArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var radians: number = (arc /size) *index;
        
        
;
    
bufferedImageArray[index]= this.getRotatedImage(bufferedImage, radians);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImageArray;
    
}


    public createSpriteImage(bufferedImageArray: BufferedImage[]): BufferedImage{
    //var bufferedImageArray = bufferedImageArray

    var columns: number = 9;
        
        
;
    

    var rows: number = 0;
        
        
;
    

    var size: number = bufferedImageArray!.length
                ;
        
        
;
    

                        if(size < columns)
                        
                                    {
                                    columns= size;
    

                                    }
                                
rows= (size /columns);
    

                        if(size % columns != 0)
                        
                                    {
                                    rows++;
    

                                    }
                                

    var firstBufferedImage: BufferedImage = bufferedImageArray[0]!;
        
        
;
    

    var bufferedImage: BufferedImage = this.imageUtil!.create(firstBufferedImage!.getWidth(
                            null) *columns, firstBufferedImage!.getHeight(
                            null) *rows)!;
        
        
;
    

    var g: Graphics2D = bufferedImage!.createGraphics()!;
        
        
;
    

    var columnIndex: number = 0;
        
        
;
    

    var rowIndex: number = 0;
        
        
;
    

    var nextBufferedImage: BufferedImage
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

                        if(index /9 != 0 && index % 9 == 0)
                        
                                    {
                                    rowIndex++;
    
columnIndex= 0;
    

                                    }
                                
nextBufferedImage= bufferedImageArray[index]!;
    
g.drawImage(nextBufferedImage, nextBufferedImage!.getWidth(
                            null) *columnIndex, nextBufferedImage!.getHeight(
                            null) *rowIndex, nextBufferedImage!.getWidth(
                            null), nextBufferedImage!.getHeight(
                            null), 
                            null);
    
columnIndex++;
    
}

g.dispose();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImage;
    
}


}
                
            

