
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

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ImageUtil } from "./ImageUtil.js";

import { ImageProcessorInput } from "./ImageProcessorInput.js";

import { ImageProcessedVisitor } from "./ImageProcessedVisitor.js";

export class CanvasExpandUtil
            extends Object
         {
        

    private static readonly instance: CanvasExpandUtil = new CanvasExpandUtil();
        
        

    public static getInstance(): CanvasExpandUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public process(imageProcessorInput: ImageProcessorInput, increaseX: number, increaseY: number, visitor: ImageProcessedVisitor){
    //var imageProcessorInput = imageProcessorInput
    //var increaseX = increaseX
    //var increaseY = increaseY
    //var visitor = visitor

    var imageUtil: ImageUtil = ImageUtil.getInstance()!;
        
        
;
    

    var bufferedImageArray: BufferedImage[] = imageProcessorInput!.getBufferedImageArray()!;
        
        
;
    

    var subBufferedImageArray: BufferedImage[] = new Array(bufferedImageArray!.length);
        
        
;
    

    var size: number = bufferedImageArray!.length
                ;
        
        
;
    

    var bufferedImage: BufferedImage
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
bufferedImage= bufferedImageArray[index]!;
    
subBufferedImageArray[index]= imageUtil!.createBufferedImage(bufferedImage, bufferedImage!.getWidth() +increaseX, bufferedImage!.getHeight() +increaseY, false);
    
visitor.visit(subBufferedImageArray[index]!, stringUtil!.EMPTY_STRING, index);
    
}

}


}
                
            

