
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      //not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { AnimationBehaviorFactory } from '../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
      //not GWT import const AnimationBehaviorFactory = globalThis.org.allbinary.animation.AnimationBehaviorFactory;

      
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
      //not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
import { OpenGLFeatureFactory } from '../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
      //not GWT import const OpenGLFeatureFactory = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureFactory;

      
import { OpenGLUtil } from '../../../../org/allbinary/graphics/opengles/OpenGLUtil.js';
      //not GWT import const OpenGLUtil = globalThis.org.allbinary.graphics.opengles.OpenGLUtil;

      
//not plain js import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
      const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;

      
//not plain js import { AngleFactory } from '../../../../org/allbinary/math/AngleFactory.js';
      const AngleFactory = globalThis.org.allbinary.math.AngleFactory;

      
//not plain js import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
      const AngleInfo = globalThis.org.allbinary.math.AngleInfo;

      
//not plain js import { ImageCopyUtil } from '../../../../org/allbinary/media/image/ImageCopyUtil.js';
      const ImageCopyUtil = globalThis.org.allbinary.media.image.ImageCopyUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseImageAnimationFactory } from './BaseImageAnimationFactory.js';
//not GWT import const  = globalThis.org.allbinary.animation.image.BaseImageAnimationFactory;

                import { AllBinaryJ2SEImageRotationAnimation } from './AllBinaryJ2SEImageRotationAnimation.js';
//not GWT import const  = globalThis.org.allbinary.animation.image.AllBinaryJ2SEImageRotationAnimation;

                import { AllBinaryAdjustedJ2SEImageRotationAnimation } from './AllBinaryAdjustedJ2SEImageRotationAnimation.js';
//not GWT import const  = globalThis.org.allbinary.animation.image.AllBinaryAdjustedJ2SEImageRotationAnimation;

                
export class AllBinaryJ2SEImageRotationAnimationFactory extends BaseImageAnimationFactory {
        

                //@Throws(Exception.constructor)
            
    public static createDXY(image: Image, width: number, height: number, dx: number, dy: number, angleIncrement: number, animationBehaviorFactory: AnimationBehaviorFactory, resizeCanvasForRotation: boolean): AllBinaryJ2SEImageRotationAnimationFactory{

    var imageRotationAnimationFactory: AllBinaryJ2SEImageRotationAnimationFactory = new AllBinaryJ2SEImageRotationAnimationFactory(image, width, height, angleIncrement, animationBehaviorFactory, resizeCanvasForRotation);;
    
imageRotationAnimationFactory!.animationFactoryInitializationVisitor!.dx= dx;
    
imageRotationAnimationFactory!.animationFactoryInitializationVisitor!.dy= dy;
    
imageRotationAnimationFactory!.animationFactoryInitializationVisitor!.originalDx= dx;
    
imageRotationAnimationFactory!.animationFactoryInitializationVisitor!.originalDy= dy;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageRotationAnimationFactory;
    
}


    readonly angleIncrementP: number;

    private readonly resizeCanvasForRotation: boolean;

public constructor (image: Image, width: number, height: number, angleIncrement: number, animationBehaviorFactory: AnimationBehaviorFactory, resizeCanvasForRotation: boolean){
            super(image, PrimitiveIntUtil.getArrayInstance(), width, height, 0, 0, animationBehaviorFactory);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.angleIncrementP= angleIncrement;
    
this.resizeCanvasForRotation= resizeCanvasForRotation;
    
}


                //@Throws(Exception.constructor)
            
    getCanvasImage(): Image{

    var features: Features = Features.getInstance()!;;
    

                        if(this.resizeCanvasForRotation && !features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageCopyUtil.getInstance()!.createImageScale(this.getImage(), 1.44, false);;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getImage();;
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{

    var imageCopyUtil: ImageCopyUtil = ImageCopyUtil.getInstance()!;;
    

    var canvasImage: Image = this.getCanvasImage()!;;
    

    var scaledImage: Image = this.animationFactoryImageScaleUtil!.createImage(canvasImage, this.animationFactoryInitializationVisitor!.width, this.animationFactoryInitializationVisitor!.height, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight)!;;
    

    var openGLUtil: OpenGLUtil = OpenGLUtil.getInstance()!;;
    
scaledImage= openGLUtil!.addImage(scaledImage);
    

    var copyOfScaledImage: Image = imageCopyUtil!.createImageForRotation(scaledImage)!;;
    

                        if(this.animationFactoryInitializationVisitor!.dx != 0 || this.animationFactoryInitializationVisitor!.dy != 0)
                        
                                    {
                                    this.animationFactoryImageScaleUtil!.processAdjust(this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AllBinaryAdjustedJ2SEImageRotationAnimation(scaledImage, copyOfScaledImage, AngleInfo.getInstance(this.angleIncrementP), AngleFactory.getInstance()!.TOTAL_ANGLE, this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AllBinaryJ2SEImageRotationAnimation(scaledImage, copyOfScaledImage, AngleInfo.getInstance(this.angleIncrementP), AngleFactory.getInstance()!.TOTAL_ANGLE, this.animationBehaviorFactory!.getOrCreateInstance());
    

                        }
                            
}


    getAngleIncrement(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.angleIncrementP;
    
}


}



