
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
        
import { BufferedImage } from '../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage

import { IOException } from '../../../../java/io/IOException.js';
//not GWT import const IOException

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageProcessorInput } from './ImageProcessorInput.js';
//not GWT import - same folder const ImageProcessorInput
import { ImageProcessedVisitor } from './ImageProcessedVisitor.js';
//not GWT import - same folder const ImageProcessedVisitor

export class CanvasTrimUtil
            extends Object
         {
        

    private static readonly instance: CanvasTrimUtil = new CanvasTrimUtil();

    public static getInstance(): CanvasTrimUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CanvasTrimUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly stringUtil: StringUtil = StringUtil.getInstance()!;

                //@Throws(IOException.constructor)
            
    public process(imageProcessorInput: ImageProcessorInput, cutCanvasFromLeftReduction: number, cutCanvasFromTopReduction: number, cutCanvasFromRightReduction: number, cutCanvasFromBottomReduction: number, visitor: ImageProcessedVisitor){

    let bufferedImageArray: BufferedImage[] = imageProcessorInput!.getBufferedImageArray()!;;
    

    let subBufferedImageArray: BufferedImage[] = new Array(bufferedImageArray!.length);;
    

    let size: number = bufferedImageArray!.length
                ;;
    

    let bufferedImage: BufferedImage;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
bufferedImage= bufferedImageArray[index]!;
    
subBufferedImageArray[index]= bufferedImage!.getSubimage(cutCanvasFromLeftReduction, cutCanvasFromTopReduction, bufferedImage!.getWidth() -cutCanvasFromLeftReduction -cutCanvasFromRightReduction, bufferedImage!.getHeight() -cutCanvasFromTopReduction -cutCanvasFromBottomReduction);
    
visitor.visit(subBufferedImageArray[index]!, this.stringUtil!.EMPTY_STRING, index);
    
}

}


}

