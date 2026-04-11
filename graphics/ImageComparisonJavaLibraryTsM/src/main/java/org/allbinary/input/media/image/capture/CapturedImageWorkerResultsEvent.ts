
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
        



import { BufferedImage } from "../../../../../../java/awt/image/BufferedImage.js";

    
import { AllBinaryEventObject } from "../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    

export class CapturedImageWorkerResultsEvent extends AllBinaryEventObject {
        

    private readonly frame: Long

    private bufferedImage: BufferedImage
public constructor (anyType: any = {}, frame: Long, bufferedImage: BufferedImage)                        

                            : super(anyType){

            super();
            var anyType = anyType
var frame = frame
var bufferedImage = bufferedImage


                            //For kotlin this is before the body of the constructor.
                    
this.frame= frame;
    
setBufferedImage(bufferedImage);
    
}


    public getBufferedImage(): BufferedImage{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImage;
    
}


    setBufferedImage(bufferedImage: BufferedImage){
var bufferedImage = bufferedImage
this.bufferedImage= bufferedImage;
    
}


    public getFrame(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return frame;
    
}


}
                
            

