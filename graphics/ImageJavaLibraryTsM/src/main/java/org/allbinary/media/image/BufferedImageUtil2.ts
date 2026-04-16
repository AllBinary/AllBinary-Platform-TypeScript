
        /* Generated Code Do Not Modify */
        



import { awt } from "../../../../java/awt.js";

    
import { BufferedImage } from "../../../../java/awt/image/BufferedImage.js";

    

import { ImageUtil } from "./ImageUtil.js";

import {  } from "./.js";

import {  } from "./.js";

import {  } from "./.js";

import {  } from "./.js";

import {  } from "./.js";

import {  } from "./.js";

export class BufferedImageUtil2
            extends Object
         {
        

    private static readonly instance: BufferedImageUtil2 = new BufferedImageUtil2();
        
        

    public static getInstance(): BufferedImageUtil2{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly imageUtil: ImageUtil = ImageUtil.getInstance()!;
        
        

    public createSpriteImage(bufferedImageArray: BufferedImage[]): BufferedImage{
    //var bufferedImageArray = bufferedImageArray

    var columns: number = bufferedImageArray!.length
                ;
        
        
;
    

    var max: number = columns;
        
        
;
    

    var rows: number = 0;
        
        
;
    

                        if(bufferedImageArray!.length < columns)
                        
                                    {
                                    columns= bufferedImageArray!.length;
    

                                    }
                                
rows= (bufferedImageArray!.length /columns);
    

                        if(bufferedImageArray!.length % columns != 0)
                        
                                    {
                                    rows++;
    

                                    }
                                

    var bufferedImage: BufferedImage = this.imageUtil!.create(bufferedImageArray[0]!.getWidth(
                            null) *columns, bufferedImageArray[0]!.getHeight(
                            null) *rows)!;
        
        
;
    

    var g: Graphics2D = bufferedImage!.createGraphics()!;
        
        
;
    

    var columnIndex: number = 0;
        
        
;
    

    var rowIndex: number = 0;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < bufferedImageArray!.length; index++)
        {

                        if(index /max != 0 && index % max == 0)
                        
                                    {
                                    rowIndex++;
    
columnIndex= 0;
    

                                    }
                                
g.drawImage(bufferedImageArray[index]!, bufferedImageArray[index]!.getWidth(
                            null) *columnIndex, bufferedImageArray[index]!.getHeight(
                            null) *rowIndex, bufferedImageArray[index]!.getWidth(
                            null), bufferedImageArray[index]!.getHeight(
                            null), 
                            null);
    
columnIndex++;
    
}

g.dispose();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImage;
    
}


}
                
            

