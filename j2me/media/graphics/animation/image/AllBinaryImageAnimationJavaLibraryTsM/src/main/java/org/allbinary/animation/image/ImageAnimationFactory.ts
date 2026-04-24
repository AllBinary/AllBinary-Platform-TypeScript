
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
        



import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { Animation } from "../../../../org/allbinary/animation/Animation.js";

    
import { AnimationBehaviorFactory } from "../../../../org/allbinary/animation/AnimationBehaviorFactory.js";

    
import { OpenGLUtil } from "../../../../org/allbinary/graphics/opengles/OpenGLUtil.js";

    
import { PrimitiveIntUtil } from "../../../../org/allbinary/logic/math/PrimitiveIntUtil.js";

    
import { ImageCopyUtil } from "../../../../org/allbinary/media/image/ImageCopyUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BaseImageAnimationFactory } from "./BaseImageAnimationFactory.js";

export class ImageAnimationFactory extends BaseImageAnimationFactory {
        

                //@Throws(Error::class)
            
    public static create(image: Image): ImageAnimationFactory{
    //var image = image



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ImageAnimationFactory(image, image.getWidth(), image.getHeight(), 0, 0, AnimationBehaviorFactory.getInstance());
    
}

public constructor (image: Image, width: number, height: number, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory){
            super(image, PrimitiveIntUtil.getArrayInstance(), width, height, dx, dy, animationBehaviorFactory);
                        //var image = image
    //var width = width
    //var height = height
    //var dx = dx
    //var dy = dy
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId

    var scaledImage: Image = animationFactoryImageScaleUtil!.createImage(this.getImage(), this.animationFactoryInitializationVisitor!.width, this.animationFactoryInitializationVisitor!.height, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight)!;
        
        
;
    

    var openGLUtil: OpenGLUtil = OpenGLUtil.getInstance()!;
        
        
;
    
scaledImage= openGLUtil!.add(scaledImage);
    

                        if(this.animationFactoryInitializationVisitor!.dx != 0 || this.animationFactoryInitializationVisitor!.dy != 0)
                        
                                    {
                                    animationFactoryImageScaleUtil!.processAdjust(this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AdjustedImageAnimation(scaledImage, this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ImageAnimation(scaledImage, this.animationBehaviorFactory!.getOrCreateInstance());
    

                        }
                            
}


}
                
            

