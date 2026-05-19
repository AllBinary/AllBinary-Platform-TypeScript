
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
        
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      
import { AnimationBehaviorFactory } from '../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
      
import { OpenGLUtil } from '../../../../org/allbinary/graphics/opengles/OpenGLUtil.js';
      
import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseImageAnimationFactory } from './BaseImageAnimationFactory.js';
import { ImageAnimation } from './ImageAnimation.js';
import { AdjustedImageAnimation } from './AdjustedImageAnimation.js';

export class ImageAnimationFactory extends BaseImageAnimationFactory {
        

                //@Throws(Exception.constructor)
            
    public static createFactory(image: Image): ImageAnimationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ImageAnimationFactory(image, image.getWidth(), image.getHeight(), 0, 0, AnimationBehaviorFactory.getInstance());
    
}

public constructor (image: Image, width: number, height: number, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory){
            super(image, PrimitiveIntUtil.getArrayInstance(), width, height, dx, dy, animationBehaviorFactory);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{

    var scaledImage: Image = this.animationFactoryImageScaleUtil!.createImage(this.getImage(), this.animationFactoryInitializationVisitor!.width, this.animationFactoryInitializationVisitor!.height, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight)!;
;
    

    var openGLUtil: OpenGLUtil = OpenGLUtil.getInstance()!;
;
    
scaledImage= openGLUtil!.add(scaledImage);
    

                        if(this.animationFactoryInitializationVisitor!.dx != 0 || this.animationFactoryInitializationVisitor!.dy != 0)
                        
                                    {
                                    this.animationFactoryImageScaleUtil!.processAdjust(this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AdjustedImageAnimation(scaledImage, this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ImageAnimation(scaledImage, this.animationBehaviorFactory!.getOrCreateInstance());
    

                        }
                            
}


}
                
            

