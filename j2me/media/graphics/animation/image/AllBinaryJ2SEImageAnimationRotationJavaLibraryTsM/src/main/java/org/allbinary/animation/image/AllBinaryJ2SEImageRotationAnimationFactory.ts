
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
        



import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { Animation } from "../../../../org/allbinary/animation/Animation.js";

    
import { AnimationBehaviorFactory } from "../../../../org/allbinary/animation/AnimationBehaviorFactory.js";

    
import { GameConfigurationCentral } from "../../../../org/allbinary/game/configuration/GameConfigurationCentral.js";

    
import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { OpenGLFeatureFactory } from "../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js";

    
import { OpenGLUtil } from "../../../../org/allbinary/graphics/opengles/OpenGLUtil.js";

    
import { AngleFactory } from "../../../../org/allbinary/math/AngleFactory.js";

    
import { AngleInfo } from "../../../../org/allbinary/math/AngleInfo.js";

    
import { ImageCopyUtil } from "../../../../org/allbinary/media/image/ImageCopyUtil.js";

    

export class AllBinaryJ2SEImageRotationAnimationFactory extends BaseImageAnimationFactory {
        

    readonly angleIncrementP: number

    private readonly resizeCanvasForRotation: boolean
public constructor (image: Image, dx: number, dy: number)                        

                            : this(image, image.getWidth(), image.getHeight(), dx, dy, AnimationBehaviorFactory.getInstance()){

            super();
                //var image = image
    //var dx = dx
    //var dy = dy


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, dx: number, dy: number, unused: any = {}, animationBehaviorFactory: AnimationBehaviorFactory)                        

                            : this(image, image.getWidth(), image.getHeight(), dx, dy, animationBehaviorFactory){

            super();
                //var image = image
    //var dx = dx
    //var dy = dy
    //var unused = unused
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, dx: number, dy: number, angleIncrement: number, unused: any = {})                        

                            : this(image, image.getWidth(), image.getHeight(), dx, dy, angleIncrement, AnimationBehaviorFactory.getInstance()){

            super();
                //var image = image
    //var dx = dx
    //var dy = dy
    //var angleIncrement = angleIncrement
    //var unused = unused


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, dx: number, dy: number, angleIncrement: number, unused: any = {}, animationBehaviorFactory: AnimationBehaviorFactory)                        

                            : this(image, image.getWidth(), image.getHeight(), dx, dy, angleIncrement, animationBehaviorFactory){

            super();
                //var image = image
    //var dx = dx
    //var dy = dy
    //var angleIncrement = angleIncrement
    //var unused = unused
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, width: number, height: number, dx: number, dy: number, angleIncrement: number)                        

                            : this(image, width, height, dx, dy, angleIncrement, AnimationBehaviorFactory.getInstance()){

            super();
                //var image = image
    //var width = width
    //var height = height
    //var dx = dx
    //var dy = dy
    //var angleIncrement = angleIncrement


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, width: number, height: number, dx: number, dy: number, angleIncrement: number, animationBehaviorFactory: AnimationBehaviorFactory)                        

                            : this(image, width, height, angleIncrement, animationBehaviorFactory){

            super();
                //var image = image
    //var width = width
    //var height = height
    //var dx = dx
    //var dy = dy
    //var angleIncrement = angleIncrement
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
this.animationFactoryInitializationVisitor!.dx= dx;
    
this.animationFactoryInitializationVisitor!.dy= dy;
    
this.animationFactoryInitializationVisitor!.originalDx= dx;
    
this.animationFactoryInitializationVisitor!.originalDy= dy;
    
}

public constructor (image: Image, width: number, height: number, dx: number, dy: number, angleIncrement: number, animationBehaviorFactory: AnimationBehaviorFactory, resizeCanvasForRotation: boolean)                        

                            : this(image, width, height, angleIncrement, animationBehaviorFactory, resizeCanvasForRotation){

            super();
                //var image = image
    //var width = width
    //var height = height
    //var dx = dx
    //var dy = dy
    //var angleIncrement = angleIncrement
    //var animationBehaviorFactory = animationBehaviorFactory
    //var resizeCanvasForRotation = resizeCanvasForRotation


                            //For kotlin this is before the body of the constructor.
                    
this.animationFactoryInitializationVisitor!.dx= dx;
    
this.animationFactoryInitializationVisitor!.dy= dy;
    
this.animationFactoryInitializationVisitor!.originalDx= dx;
    
this.animationFactoryInitializationVisitor!.originalDy= dy;
    
}

public constructor (image: Image, width: number, height: number, dx: number, dy: number)                        

                            : this(image, width, height, dx, dy, AnimationBehaviorFactory.getInstance()){

            super();
                //var image = image
    //var width = width
    //var height = height
    //var dx = dx
    //var dy = dy


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, width: number, height: number, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory)                        

                            : this(image, width, height, animationBehaviorFactory){

            super();
                //var image = image
    //var width = width
    //var height = height
    //var dx = dx
    //var dy = dy
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
this.animationFactoryInitializationVisitor!.dx= dx;
    
this.animationFactoryInitializationVisitor!.dy= dy;
    
this.animationFactoryInitializationVisitor!.originalDx= dx;
    
this.animationFactoryInitializationVisitor!.originalDy= dy;
    
}

public constructor (image: Image)                        

                            : this(image, image.getWidth(), image.getHeight(), AnimationBehaviorFactory.getInstance()){

            super();
                //var image = image


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, animationBehaviorFactory: AnimationBehaviorFactory)                        

                            : this(image, image.getWidth(), image.getHeight(), animationBehaviorFactory){

            super();
                //var image = image
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, width: number, height: number, animationBehaviorFactory: AnimationBehaviorFactory)                        

                            : super(image, width, height, animationBehaviorFactory){

            super();
                //var image = image
    //var width = width
    //var height = height
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
this.angleIncrementP= (AngleFactory.getInstance()!.TOTAL_ANGLE /GameConfigurationCentral.getInstance()!.getGameControlFidelity()).toShort();
    
this.resizeCanvasForRotation= false;
    
}

public constructor (image: Image, width: number, height: number, angleIncrement: number, animationBehaviorFactory: AnimationBehaviorFactory)                        

                            : super(image, width, height, animationBehaviorFactory){

            super();
                //var image = image
    //var width = width
    //var height = height
    //var angleIncrement = angleIncrement
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
this.angleIncrementP= angleIncrement;
    
this.resizeCanvasForRotation= false;
    
}

public constructor (image: Image, width: number, height: number, angleIncrement: number, animationBehaviorFactory: AnimationBehaviorFactory, resizeCanvasForRotation: boolean)                        

                            : super(image, width, height, animationBehaviorFactory){

            super();
                //var image = image
    //var width = width
    //var height = height
    //var angleIncrement = angleIncrement
    //var animationBehaviorFactory = animationBehaviorFactory
    //var resizeCanvasForRotation = resizeCanvasForRotation


                            //For kotlin this is before the body of the constructor.
                    
this.angleIncrementP= angleIncrement;
    
this.resizeCanvasForRotation= resizeCanvasForRotation;
    
}


                //@Throws(Error::class)
            
    getCanvasImage(): Image{

    var features: Features = Features.getInstance()!;
        
        
;
    

                        if(this.resizeCanvasForRotation && !features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL);

                        )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageCopyUtil.getInstance()!.createImage(this.getImage(), 1.44f, false);

                        ;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getImage();

                        ;
    

                        }
                            
}


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId

    var imageCopyUtil: ImageCopyUtil = ImageCopyUtil.getInstance()!;
        
        
;
    

    var canvasImage: Image = this.getCanvasImage()!;
        
        
;
    

    var scaledImage: Image = animationFactoryImageScaleUtil!.createImage(canvasImage, this.animationFactoryInitializationVisitor!.width, this.animationFactoryInitializationVisitor!.height, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight)!;
        
        
;
    

    var openGLUtil: OpenGLUtil = OpenGLUtil.getInstance()!;
        
        
;
    
scaledImage= openGLUtil!.add(scaledImage);
    

    var copyOfScaledImage: Image = imageCopyUtil!.createImageForRotation(scaledImage)!;
        
        
;
    

                        if(this.animationFactoryInitializationVisitor!.dx != 0 || this.animationFactoryInitializationVisitor!.dy != 0)
                        
                                    {
                                    animationFactoryImageScaleUtil!.processAdjust(this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AllBinaryAdjustedJ2SEImageRotationAnimation(scaledImage, copyOfScaledImage, AngleInfo.getInstance(this.angleIncrementP), AngleFactory.getInstance()!.TOTAL_ANGLE, this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AllBinaryJ2SEImageRotationAnimation(scaledImage, copyOfScaledImage, AngleInfo.getInstance(this.angleIncrementP), AngleFactory.getInstance()!.TOTAL_ANGLE, this.animationBehaviorFactory!.getOrCreateInstance());
    

                        }
                            
}


    getAngleIncrement(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return angleIncrementP;
    
}


}
                
            

