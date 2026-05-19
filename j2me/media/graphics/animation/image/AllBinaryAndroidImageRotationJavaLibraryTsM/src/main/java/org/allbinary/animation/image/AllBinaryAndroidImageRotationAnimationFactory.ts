
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      
import { AnimationBehaviorFactory } from '../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
      
import { GameConfigurationCentral } from '../../../../org/allbinary/game/configuration/GameConfigurationCentral.js';
      
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
      
import { OpenGLFeatureFactory } from '../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
      
import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
      
import { ImageCopyUtil } from '../../../../org/allbinary/media/image/ImageCopyUtil.js';
      
import { AngleFactory } from '../../../../org/allbinary/math/AngleFactory.js';
      
import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseImageAnimationFactory } from './BaseImageAnimationFactory.js';
import { AllBinaryFlickerAndroidImageRotationAnimation } from './AllBinaryFlickerAndroidImageRotationAnimation.js';
import { AllBinaryAdjustedAndroidImageRotationAnimation } from './AllBinaryAdjustedAndroidImageRotationAnimation.js';

export class AllBinaryAndroidImageRotationAnimationFactory extends BaseImageAnimationFactory {
        

                //@Throws(Exception.constructor)
            
    public static createFactory(image: Image, width: number, height: number, animationBehaviorFactory: AnimationBehaviorFactory): AllBinaryAndroidImageRotationAnimationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AllBinaryAndroidImageRotationAnimationFactory(image, width, height, (AngleFactory.getInstance()!.TOTAL_ANGLE /GameConfigurationCentral.getInstance()!.getGameControlFidelity()), animationBehaviorFactory, false);
    
}


                //@Throws(Exception.constructor)
            
    public static createFactoryA(image: Image, width: number, height: number, angleIncrement: number, animationBehaviorFactory: AnimationBehaviorFactory): AllBinaryAndroidImageRotationAnimationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AllBinaryAndroidImageRotationAnimationFactory(image, width, height, angleIncrement, animationBehaviorFactory, false);
    
}


                //@Throws(Exception.constructor)
            
    public static createFactoryU(image: Image, animationBehaviorFactory: AnimationBehaviorFactory): AllBinaryAndroidImageRotationAnimationFactory{

    var androidImageRotationAnimationFactory: AllBinaryAndroidImageRotationAnimationFactory = new AllBinaryAndroidImageRotationAnimationFactory(image, image.getWidth(), image.getHeight(), (AngleFactory.getInstance()!.TOTAL_ANGLE /GameConfigurationCentral.getInstance()!.getGameControlFidelity()), animationBehaviorFactory, false);
;
    
androidImageRotationAnimationFactory!.init( -(image.getWidth()>>2),  -(image.getHeight()>>2));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return androidImageRotationAnimationFactory;
    
}


                //@Throws(Exception.constructor)
            
    public static createFactoryDXYU(image: Image, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory): AllBinaryAndroidImageRotationAnimationFactory{

    var androidImageRotationAnimationFactory: AllBinaryAndroidImageRotationAnimationFactory = new AllBinaryAndroidImageRotationAnimationFactory(image, image.getWidth(), image.getHeight(), (AngleFactory.getInstance()!.TOTAL_ANGLE /GameConfigurationCentral.getInstance()!.getGameControlFidelity()), animationBehaviorFactory, false);
;
    
androidImageRotationAnimationFactory!.init(dx, dy);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return androidImageRotationAnimationFactory;
    
}


    public init(dx: number, dy: number){
this.animationFactoryInitializationVisitor!.dx= dx;
    
this.animationFactoryInitializationVisitor!.dy= dy;
    
this.animationFactoryInitializationVisitor!.originalDx= dx;
    
this.animationFactoryInitializationVisitor!.originalDy= dy;
    
}


    private readonly angleIncrement: number

    private readonly resizeCanvasForRotation: boolean
public constructor (image: Image, width: number, height: number, angleIncrement: number, animationBehaviorFactory: AnimationBehaviorFactory, resizeCanvasForRotation: boolean){
            super(image, PrimitiveIntUtil.getArrayInstance(), width, height, 0, 0, animationBehaviorFactory);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.angleIncrement= angleIncrement;
    
this.resizeCanvasForRotation= resizeCanvasForRotation;
    
}


                //@Throws(Exception.constructor)
            
    getCanvasImage(): Image{

    var features: Features = Features.getInstance()!;
;
    

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

    var canvasImage: Image = this.getCanvasImage()!;
;
    

    var scaledImage: Image = this.animationFactoryImageScaleUtil!.createImage(canvasImage, this.animationFactoryInitializationVisitor!.width, this.animationFactoryInitializationVisitor!.height, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight)!;
;
    

    var copyOfScaledImage: Image = ImageCopyUtil.getInstance()!.createImage(scaledImage)!;
;
    

                        if(this.animationFactoryInitializationVisitor!.dx != 0 || this.animationFactoryInitializationVisitor!.dy != 0)
                        
                                    {
                                    this.animationFactoryImageScaleUtil!.processAdjust(this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AllBinaryAdjustedAndroidImageRotationAnimation(scaledImage, copyOfScaledImage, AngleInfo.getInstance(this.angleIncrement), AngleFactory.getInstance()!.TOTAL_ANGLE, this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, animationBehaviorFactory!.getOrCreateInstance());
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AllBinaryFlickerAndroidImageRotationAnimation(scaledImage, copyOfScaledImage, AngleInfo.getInstance(this.angleIncrement), AngleFactory.getInstance()!.TOTAL_ANGLE, this.animationBehaviorFactory!.getOrCreateInstance());
    

                        }
                            
}


}
                
            

