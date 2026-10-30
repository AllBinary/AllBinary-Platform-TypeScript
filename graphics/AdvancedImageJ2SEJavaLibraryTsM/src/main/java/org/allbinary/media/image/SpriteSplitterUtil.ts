
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
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { BufferedImage } from '../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageUtil } from './ImageUtil.js';
//not GWT import - same folder const ImageUtil
import { ImageUnifierProperties } from './ImageUnifierProperties.js';
//not GWT import - same folder const ImageUnifierProperties
import { ImageUnifierCell } from './ImageUnifierCell.js';
//not GWT import - same folder const ImageUnifierCell
import { ImageUnifierUtil } from './ImageUnifierUtil.js';
//not GWT import - same folder const ImageUnifierUtil
import { ImageProcessorInput } from './ImageProcessorInput.js';
//not GWT import - same folder const ImageProcessorInput
import { ImageProcessedVisitor } from './ImageProcessedVisitor.js';
//not GWT import - same folder const ImageProcessedVisitor

export class SpriteSplitterUtil
            extends Object
         {
        

    private static readonly instance: SpriteSplitterUtil = new SpriteSplitterUtil();

    public static getInstance(): SpriteSplitterUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SpriteSplitterUtil.instance;
    
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

                //@Throws(Exception.constructor)
            
    public process(imageProcessorInput: ImageProcessorInput, totalFrames: number, totalAnimations: number, widthReduction: number, heightReduction: number, increaseWidth: number, increaseHeight: number, spriteType: string, visitor: ImageProcessedVisitor){

    let bufferedImage: BufferedImage;;
    

    let generatedBufferedImageArray: BufferedImage[][];;
    

    let bufferedImageArray: BufferedImage[] = imageProcessorInput!.getBufferedImageArray()!;;
    




                        for (
    let index: number = 0;index < bufferedImageArray!.length; index++)
        {
bufferedImage= bufferedImageArray[index]!;
    
this.logUtil!.putF(spriteType, this, this.commonStrings!.RUN);
    

                        if(spriteType == this.HORIZONTAL_SPRITE)
                        
                                    {
                                    
    let cellHeight: number = bufferedImage!.getHeight() /totalAnimations;;
    

    let cellWidth: number = bufferedImage!.getWidth() /totalFrames;;
    

    let columns: number = totalFrames;;
    

    let rows: number = totalAnimations;;
    
generatedBufferedImageArray= new Array(rows).fill(null).map(() => new Array(columns).fill(null))
                                                            ;
    
this.logUtil!.putF("Processing Individual Cells columns: " +columns +" rows: " +rows, this, this.commonStrings!.RUN);
    
this.logUtil!.putF("Processing Individual Cells cellHeight: " +cellHeight +" cellWidth: " +cellWidth, this, this.commonStrings!.RUN);
    

    let imageUtil: ImageUtil = ImageUtil.getInstance()!;;
    

    let nameEnding: string = 
                null
            ;;
    

    let x: number = 0;;
    

    let y: number = 0;;
    




                        for (
    let index2: number = 0;index2 < rows; index2++)
        {
y= cellHeight *index2;
    




                        for (
    let index3: number = 0;index3 < columns; index3++)
        {
x= cellWidth *index3;
    
generatedBufferedImageArray[index2]![index3]= bufferedImage!.getSubimage(x +widthReduction, y +heightReduction, cellWidth -(widthReduction *2), cellHeight -(heightReduction *2));
    

                        if(increaseWidth != 0 || increaseHeight != 0)
                        
                                    {
                                    generatedBufferedImageArray[index2]![index3]= imageUtil!.createBufferedImageAllowTranslate(generatedBufferedImageArray[index2]![index3]!, cellWidth +increaseWidth, cellHeight +increaseHeight, false, true);
    

                                    }
                                
nameEnding= new StringMaker().appendint(index2)!.append(this.commonSeps!.UNDERSCORE)!.appendint(index3)!.toString();
    
visitor.visit(generatedBufferedImageArray[index2]![index3]!, nameEnding, index);
    
}

}

this.logUtil!.putF("Processing Rows from Cells", this, this.commonStrings!.RUN);
    

    let imageUnifierProperties: ImageUnifierProperties = new ImageUnifierProperties();;
    
imageUnifierProperties!.setRows(.valueOf());
    
imageUnifierProperties!.setColumns(columns.valueOf());
    

    let imageUnifierCell: ImageUnifierCell = new ImageUnifierCell(Integer.valueOf(cellWidth -(2 *widthReduction))Integer.valueOf(cellHeight -(2 *heightReduction)));;
    
imageUnifierProperties!.setImageUnifierCell(imageUnifierCell);
    




                        for (
    let index2: number = 0;index2 < rows; index2++)
        {
y= cellHeight *index2;
    

    let tempBufferedImageArray: BufferedImage[] = new Array(columns);;
    




                        for (
    let index3: number = 0;index3 < columns; index3++)
        {
tempBufferedImageArray[index3]= generatedBufferedImageArray[index2]![index3]!;
    
nameEnding= new StringMaker().appendint(index2)!.append(this.commonSeps!.UNDERSCORE)!.appendint(1)!.append(this._ROW)!.toString();
    
}


    let generatedBufferedImage: BufferedImage = ImageUnifierUtil.getInstance()!.getImage(tempBufferedImageArray, imageUnifierProperties)!;;
    
visitor.visit(generatedBufferedImage, nameEnding, index);
    
}


                                    }
                                
                             else 
                        if(spriteType == HORIZONTAL_ANIMATIONS)
                        
                                    {
                                    
                                    }
                                
                             else 
                        if(spriteType == this.DIRECTIONAL_ANIMATIONS)
                        
                                    {
                                    
    let totalFrames2: number = 4;;
    

    let cellHeight: number = bufferedImage!.getHeight() /totalFrames2;;
    

    let cellWidth: number = bufferedImage!.getWidth() /totalAnimations;;
    

    let columns: number = totalAnimations;;
    

    let rows: number = totalFrames2;;
    
generatedBufferedImageArray= new Array(rows).fill(null).map(() => new Array(columns).fill(null))
                                                            ;
    
this.logUtil!.putF("Processing Individual Cells for each Direction", this, this.commonStrings!.RUN);
    

    let nameEnding: string = 
                null
            ;;
    

    let x: number = 0;;
    

    let y: number = 0;;
    




                        for (
    let index2: number = 0;index2 < rows; index2++)
        {
y= cellHeight *index2;
    




                        for (
    let index3: number = 0;index3 < columns; index3++)
        {
x= cellWidth *index3;
    
generatedBufferedImageArray[index2]![index3]= bufferedImage!.getSubimage(x +widthReduction, y +heightReduction, cellWidth -(widthReduction *2), cellHeight -(heightReduction *2));
    

                        if(increaseWidth != 0 || increaseHeight != 0)
                        
                                    {
                                    generatedBufferedImageArray[index2]![index3]= ImageUtil.getInstance()!.createBufferedImageAllowTranslate(generatedBufferedImageArray[index2]![index3]!, cellWidth +increaseWidth, cellHeight +increaseHeight, false, true);
    

                                    }
                                
nameEnding= new StringMaker().append(this.commonStrings!.DIRECTION_NAME[index2]!)!.append(this.commonSeps!.UNDERSCORE)!.appendint(index3)!.toString();
    
visitor.visit(generatedBufferedImageArray[index2]![index3]!, nameEnding, index);
    
}

}


    let imageUnifierProperties: ImageUnifierProperties = new ImageUnifierProperties();;
    
imageUnifierProperties!.setRows(.valueOf());
    
imageUnifierProperties!.setColumns(columns.valueOf());
    

    let imageUnifierCell: ImageUnifierCell = new ImageUnifierCell(Integer.valueOf(cellWidth -(2 *widthReduction)) +increaseWidth, Integer.valueOf(cellHeight -(2 *heightReduction) +increaseHeight));;
    
imageUnifierProperties!.setImageUnifierCell(imageUnifierCell);
    
this.logUtil!.putF("Processing Rows from Cells for each Direction", this, this.commonStrings!.RUN);
    




                        for (
    let index2: number = 0;index2 < rows; index2++)
        {
y= cellHeight *index2;
    

    let tempBufferedImageArray: BufferedImage[] = new Array(columns);;
    




                        for (
    let index3: number = 0;index3 < columns; index3++)
        {
tempBufferedImageArray[index3]= generatedBufferedImageArray[index2]![index3]!;
    
nameEnding= new StringMaker().append(this.commonStrings!.DIRECTION_NAME[index2]!)!.append(this.commonSeps!.UNDERSCORE)!.appendint(1)!.append(this._ROW)!.toString();
    
}


    let generatedBufferedImage: BufferedImage = ImageUnifierUtil.getInstance()!.getImage(tempBufferedImageArray, imageUnifierProperties)!;;
    
visitor.visit(generatedBufferedImage, nameEnding, index);
    
}


                                    }
                                
}

}


}

