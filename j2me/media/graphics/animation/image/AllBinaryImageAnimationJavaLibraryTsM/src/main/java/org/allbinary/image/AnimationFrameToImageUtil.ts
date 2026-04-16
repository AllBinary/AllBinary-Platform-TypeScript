
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
        



import { Graphics } from "../../../javax/microedition/lcdui/Graphics.js";

    
import { Image } from "../../../javax/microedition/lcdui/Image.js";

    
import { Animation } from "../../../org/allbinary/animation/Animation.js";

    

import { GameFeatureImageCacheFactory } from "./GameFeatureImageCacheFactory.js";

import { GameFeatureImageCacheFactory } from "./GameFeatureImageCacheFactory.js";

export class AnimationFrameToImageUtil
            extends Object
         {
        

    private static readonly instance: AnimationFrameToImageUtil = new AnimationFrameToImageUtil();
        
        

    public static getInstance(): AnimationFrameToImageUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                //@Throws(Error::class)
            
    public getInstanceTranslate(width: number, height: number, animationInterface: Animation): Image{
var width = width
var height = height
var animationInterface = animationInterface

    var image: Image = GameFeatureImageCacheFactory.getInstance()!.get(instance.constructor.name.toString()!, ((width *3) shr 1), ((height *3) shr 1))!;
        
        
;
    

    var graphics: Graphics = image.getGraphics()!;
        
        
;
    

    var tranlateX: number = (width shr 2);
        
        
;
    

    var tranlateY: number = (height shr 2);
        
        
;
    
graphics.translate(tranlateX, tranlateY);
    
animationInterface!.paint(graphics, 0, 0);
    
graphics.translate( -tranlateX,  -tranlateY);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


                //@Throws(Error::class)
            
    public getInstance(width: number, height: number, animationInterface: Animation): Image{
var width = width
var height = height
var animationInterface = animationInterface

    var image: Image = GameFeatureImageCacheFactory.getInstance()!.get(instance.constructor.name.toString()!, width, height)!;
        
        
;
    

    var graphics: Graphics = image.getGraphics()!;
        
        
;
    
animationInterface!.paint(graphics, 0, 0);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


}
                
            

