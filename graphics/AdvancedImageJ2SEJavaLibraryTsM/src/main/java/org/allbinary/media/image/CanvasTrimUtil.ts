
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

    
import { IOException } from "../../../../java/io/IOException.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    

export class CanvasTrimUtil
            extends Object
         {
        

    private static readonly instance: CanvasTrimUtil = new CanvasTrimUtil();
        
        

    public static getInstance(): CanvasTrimUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

                //@Throws(IOException::class)
            
    public process(imageProcessorInput: ImageProcessorInput, cutCanvasFromLeftReduction: number, cutCanvasFromTopReduction: number, cutCanvasFromRightReduction: number, cutCanvasFromBottomReduction: number, visitor: ImageProcessedVisitor){
    //var imageProcessorInput = imageProcessorInput
    //var cutCanvasFromLeftReduction = cutCanvasFromLeftReduction
    //var cutCanvasFromTopReduction = cutCanvasFromTopReduction
    //var cutCanvasFromRightReduction = cutCanvasFromRightReduction
    //var cutCanvasFromBottomReduction = cutCanvasFromBottomReduction
    //var visitor = visitor

    var bufferedImageArray: BufferedImage[] = imageProcessorInput!.getBufferedImageArray()!;
        
        


    var subBufferedImageArray: BufferedImage[] = new Array(bufferedImageArray!.length);
        
        


    var size: number = bufferedImageArray!.length
                ;
        
        


    var bufferedImage: BufferedImage





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
bufferedImage= bufferedImageArray[index]!
subBufferedImageArray[index]= bufferedImage!.getSubimage(cutCanvasFromLeftReduction, cutCanvasFromTopReduction, bufferedImage!.getWidth() -cutCanvasFromLeftReduction -cutCanvasFromRightReduction, bufferedImage!.getHeight() -cutCanvasFromTopReduction -cutCanvasFromBottomReduction)
visitor.visit(subBufferedImageArray[index]!, stringUtil!.EMPTY_STRING, index)
}

}


}
                
            

