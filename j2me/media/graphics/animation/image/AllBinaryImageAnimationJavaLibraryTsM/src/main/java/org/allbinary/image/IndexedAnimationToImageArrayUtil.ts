
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
        



import { Image } from "../../../javax/microedition/lcdui/Image.js";

    
import { IndexedAnimation } from "../../../org/allbinary/animation/IndexedAnimation.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AnimationFrameToImageUtil } from "./AnimationFrameToImageUtil.js";

export class IndexedAnimationToImageArrayUtil
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static getInstance(width: number, height: number, sequentialAnimationInterface: IndexedAnimation): Image[]{
var width = width
var height = height
var sequentialAnimationInterface = sequentialAnimationInterface

    var size: number = sequentialAnimationInterface!.getAnimationSize()!;
        
        
;
    

    var imageArray: Image[] = new Array(size);
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
sequentialAnimationInterface!.setFrame(index);
    
imageArray[index]= AnimationFrameToImageUtil.getInstance()!.getInstance(width, height, sequentialAnimationInterface);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageArray;
    
}


}
                
            

