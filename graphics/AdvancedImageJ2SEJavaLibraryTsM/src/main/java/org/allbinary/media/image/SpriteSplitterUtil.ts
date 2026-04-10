
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
        



import { BufferedImage } from "../../../../java/awt/image/BufferedImage.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class SpriteSplitterUtil
            extends Object
         {
        

    private static readonly instance: SpriteSplitterUtil = new SpriteSplitterUtil();
        
        

    public static getInstance(): SpriteSplitterUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    public readonly ANIMATIONS_LABELS: string[] = 
                                                        [
                                                            "Row Total:","Column Total:","Column Total:","Row Total:","Column Total:","Row Total:"
                                                        ];
        
        

    public readonly DIRECTIONAL_ANIMATIONS: string = "Directional DLRU";
        
        

    public readonly HORIZONTAL_ANIMATIONS: string = "Horizontal Animations";
        
        

    public readonly HORIZONTAL_SPRITE: string = "Horizontal A=R=Y F=C=X";
        
        

    private readonly ROW_NAME: string[] = 
                                                        [
                                                            "idle","walk","attack","defeat"
                                                        ];
        
        

    private readonly _ROW: string = "_row";
        
        

                //@Throws(Error::class)
            
    public process(imageProcessorInput: ImageProcessorInput, totalFrames: number, totalAnimations: number, widthReduction: number, heightReduction: number, increaseWidth: number, increaseHeight: number, spriteType: string, visitor: ImageProcessedVisitor){
    //var imageProcessorInput = imageProcessorInput
    //var totalFrames = totalFrames
    //var totalAnimations = totalAnimations
    //var widthReduction = widthReduction
    //var heightReduction = heightReduction
    //var increaseWidth = increaseWidth
    //var increaseHeight = increaseHeight
    //var spriteType = spriteType
    //var visitor = visitor

    var bufferedImage: BufferedImage


    var generatedBufferedImageArray: BufferedImage[][]


    var bufferedImageArray: BufferedImage[] = imageProcessorInput!.getBufferedImageArray()!;
        
        





                        for (
    var index: number = 0;
        
        
index < bufferedImageArray!.length; index++)
        {
bufferedImage= bufferedImageArray[index]!
logUtil!.put(spriteType, this, commonStrings!.RUN)

                        if(spriteType == HORIZONTAL_SPRITE)
                        
                                    {
                                    
    var cellHeight: number = bufferedImage!.getHeight() /totalAnimations;
        
        


    var cellWidth: number = bufferedImage!.getWidth() /totalFrames;
        
        


    var columns: number = totalFrames;
        
        


    var rows: number = totalAnimations;
        
        

generatedBufferedImageArray= Array(rows) { arrayOfNulls<BufferedImage?>(columns) }
                                                            
logUtil!.put("Processing Individual Cells columns: " +columns +" rows: " +rows, this, commonStrings!.RUN)
logUtil!.put("Processing Individual Cells cellHeight: " +cellHeight +" cellWidth: " +cellWidth, this, commonStrings!.RUN)

    var imageUtil: ImageUtil = ImageUtil.getInstance()!;
        
        


    var nameEnding: string = 
                null
            ;
        
        


    var x: number = 0;
        
        


    var y: number = 0;
        
        





                        for (
    var index2: number = 0;
        
        
index2 < rows; index2++)
        {
y= cellHeight *index2




                        for (
    var index3: number = 0;
        
        
index3 < columns; index3++)
        {
x= cellWidth *index3
generatedBufferedImageArray[index2]![index3]= bufferedImage!.getSubimage(x +widthReduction, y +heightReduction, cellWidth -(widthReduction *2), cellHeight -(heightReduction *2))

                        if(increaseWidth != 0 || increaseHeight != 0)
                        
                                    {
                                    generatedBufferedImageArray[index2]![index3]= imageUtil!.createBufferedImage(generatedBufferedImageArray[index2]![index3]!, cellWidth +increaseWidth, cellHeight +increaseHeight, false, true)

                                    }
                                
nameEnding= StringMaker().
                            appendint(index2)!.append(commonSeps!.UNDERSCORE)!.appendint(index3)!.toString()
visitor.visit(generatedBufferedImageArray[index2]![index3]!, nameEnding, index)
}

}

logUtil!.put("Processing Rows from Cells", this, commonStrings!.RUN)

    var imageUnifierProperties: ImageUnifierProperties = new ImageUnifierProperties();
        
        

imageUnifierProperties!.setRows(.valueOf())
imageUnifierProperties!.setColumns(columns.valueOf())

    var imageUnifierCell: ImageUnifierCell = new ImageUnifierCell(Integer(Integer.valueOf(cellWidth -(2 *widthReduction)))Integer(Integer.valueOf(cellHeight -(2 *heightReduction))));
        
        

imageUnifierProperties!.setImageUnifierCell(imageUnifierCell)




                        for (
    var index2: number = 0;
        
        
index2 < rows; index2++)
        {
y= cellHeight *index2

    var tempBufferedImageArray: BufferedImage[] = new Array(columns);
        
        





                        for (
    var index3: number = 0;
        
        
index3 < columns; index3++)
        {
tempBufferedImageArray[index3]= generatedBufferedImageArray[index2]![index3]!
nameEnding= StringMaker().
                            appendint(index2)!.append(commonSeps!.UNDERSCORE)!.appendint(1)!.append(_ROW)!.toString()
}


    var generatedBufferedImage: BufferedImage = ImageUnifierUtil.getInstance()!.getImage(tempBufferedImageArray, imageUnifierProperties)!;
        
        

visitor.visit(generatedBufferedImage, nameEnding, index)
}


                                    }
                                
                             else 
                        if(spriteType == HORIZONTAL_ANIMATIONS)
                        
                                    {
                                    
                                    }
                                
                             else 
                        if(spriteType == this.DIRECTIONAL_ANIMATIONS)
                        
                                    {
                                    
    var totalFrames2: number = 4;
        
        


    var cellHeight: number = bufferedImage!.getHeight() /totalFrames2;
        
        


    var cellWidth: number = bufferedImage!.getWidth() /totalAnimations;
        
        


    var columns: number = totalAnimations;
        
        


    var rows: number = totalFrames2;
        
        

generatedBufferedImageArray= Array(rows) { arrayOfNulls<BufferedImage?>(columns) }
                                                            
logUtil!.put("Processing Individual Cells for each Direction", this, commonStrings!.RUN)

    var nameEnding: string = 
                null
            ;
        
        


    var x: number = 0;
        
        


    var y: number = 0;
        
        





                        for (
    var index2: number = 0;
        
        
index2 < rows; index2++)
        {
y= cellHeight *index2




                        for (
    var index3: number = 0;
        
        
index3 < columns; index3++)
        {
x= cellWidth *index3
generatedBufferedImageArray[index2]![index3]= bufferedImage!.getSubimage(x +widthReduction, y +heightReduction, cellWidth -(widthReduction *2), cellHeight -(heightReduction *2))

                        if(increaseWidth != 0 || increaseHeight != 0)
                        
                                    {
                                    generatedBufferedImageArray[index2]![index3]= ImageUtil.getInstance()!.createBufferedImage(generatedBufferedImageArray[index2]![index3]!, cellWidth +increaseWidth, cellHeight +increaseHeight, false, true)

                                    }
                                
nameEnding= StringMaker().
                            append(this.commonStrings!.DIRECTION_NAME[index2]!)!.append(commonSeps!.UNDERSCORE)!.appendint(index3)!.toString()
visitor.visit(generatedBufferedImageArray[index2]![index3]!, nameEnding, index)
}

}


    var imageUnifierProperties: ImageUnifierProperties = new ImageUnifierProperties();
        
        

imageUnifierProperties!.setRows(.valueOf())
imageUnifierProperties!.setColumns(columns.valueOf())

    var imageUnifierCell: ImageUnifierCell = new ImageUnifierCell(Integer(Integer.valueOf(cellWidth -(2 *widthReduction))) +increaseWidth, Integer(Integer.valueOf(cellHeight -(2 *heightReduction) +increaseHeight)));
        
        

imageUnifierProperties!.setImageUnifierCell(imageUnifierCell)
logUtil!.put("Processing Rows from Cells for each Direction", this, commonStrings!.RUN)




                        for (
    var index2: number = 0;
        
        
index2 < rows; index2++)
        {
y= cellHeight *index2

    var tempBufferedImageArray: BufferedImage[] = new Array(columns);
        
        





                        for (
    var index3: number = 0;
        
        
index3 < columns; index3++)
        {
tempBufferedImageArray[index3]= generatedBufferedImageArray[index2]![index3]!
nameEnding= StringMaker().
                            append(this.commonStrings!.DIRECTION_NAME[index2]!)!.append(commonSeps!.UNDERSCORE)!.appendint(1)!.append(_ROW)!.toString()
}


    var generatedBufferedImage: BufferedImage = ImageUnifierUtil.getInstance()!.getImage(tempBufferedImageArray, imageUnifierProperties)!;
        
        

visitor.visit(generatedBufferedImage, nameEnding, index)
}


                                    }
                                
}

}


}
                
            

