
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
        
import { BufferedImage } from '../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageUtil } from './ImageUtil.js';
//not GWT import - same folder const ImageUtil
import { ImageProcessorInput } from './ImageProcessorInput.js';
//not GWT import - same folder const ImageProcessorInput
import { ImageProcessedVisitor } from './ImageProcessedVisitor.js';
//not GWT import - same folder const ImageProcessedVisitor

export class CanvasExpandUtil
            extends Object
         {
        

    private static readonly instance: CanvasExpandUtil = new CanvasExpandUtil();

    public static getInstance(): CanvasExpandUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CanvasExpandUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly stringUtil: StringUtil = StringUtil.getInstance()!;

                //@Throws(Exception.constructor)
            
    public process(imageProcessorInput: ImageProcessorInput, increaseX: number, increaseY: number, visitor: ImageProcessedVisitor){

    let imageUtil: ImageUtil = ImageUtil.getInstance()!;;
    

    let bufferedImageArray: BufferedImage[] = imageProcessorInput!.getBufferedImageArray()!;;
    

    let subBufferedImageArray: BufferedImage[] = new Array(bufferedImageArray!.length);;
    

    let size: number = bufferedImageArray!.length
                ;;
    

    let bufferedImage: BufferedImage;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
bufferedImage= bufferedImageArray[index]!;
    
subBufferedImageArray[index]= imageUtil!.createBufferedImage(bufferedImage, bufferedImage!.getWidth() +increaseX, bufferedImage!.getHeight() +increaseY, false);
    
visitor.visit(subBufferedImageArray[index]!, this.stringUtil!.EMPTY_STRING, index);
    
}

}


}

