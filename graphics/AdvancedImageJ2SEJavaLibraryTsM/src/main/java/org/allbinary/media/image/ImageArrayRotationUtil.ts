
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
        



            import { Integer } from "../../../../../java/lang/Integer.js";
        
import { BufferedImage } from "../../../../java/awt/image/BufferedImage.js";

    
import { IOException } from "../../../../java/io/IOException.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class ImageArrayRotationUtil
            extends Object
         {
        

    private static readonly instance: ImageArrayRotationUtil = new ImageArrayRotationUtil();
        
        

    public static getInstance(): ImageArrayRotationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly TOTAL_ANGLE: string = "totalAngle: ";
        
        

                //@Throws(IOException::class)
            
    public process(imageProcessorInput: ImageProcessorInput, input: string, visitor: ImageProcessedVisitor){
    //var imageProcessorInput = imageProcessorInput
    //var input = input
    //var visitor = visitor

    var totalAngle: Integer
;
    

                        if(input == this.commonStrings!.UP)
                        
                                    {
                                    totalAngle= Integer(Integer.valueOf( -90));
    

                                    }
                                
                             else 
                        if(input == this.commonStrings!.DOWN)
                        
                                    {
                                    totalAngle= Integer(Integer.valueOf(90));
    

                                    }
                                
                        else {
                            totalAngle= Integer(Integer.valueOf(input));
    

                        }
                            

    var generatedBufferedImage: BufferedImage
;
    

    var bufferedImageArray: BufferedImage[] = imageProcessorInput!.getBufferedImageArray()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < bufferedImageArray!.length; index++)
        {
this.logUtil!.putF(TOTAL_ANGLE +totalAngle, this, commonStrings!.RUN);
    
generatedBufferedImage= ImageJ2SERotationUtil.getInstance()!.getRotatedImage(bufferedImageArray[index]!, totalAngle!.toInt());
    
visitor.visit(generatedBufferedImage, input, index);
    
}

}


}
                
            

