
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

    
import { ImageCopyUtil } from "../../../../org/allbinary/media/image/ImageCopyUtil.js";

    
import { AngleFactory } from "../../../../org/allbinary/math/AngleFactory.js";

    
import { AngleInfo } from "../../../../org/allbinary/math/AngleInfo.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BaseImageAnimationFactory } from "./BaseImageAnimationFactory.js";

export class AllBinaryHTMLImageRotationAnimationFactory extends BaseImageAnimationFactory {
        

    readonly angleIncrement: number
public constructor (image: Image, dx: number, dy: number, unused: any = {}){
            this(image, image.getWidth(), image.getHeight(), dx, dy, AnimationBehaviorFactory.getInstance());
                        //var image = image
    //var dx = dx
    //var dy = dy
    //var unused = unused


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, dx: number, dy: number, unused: any = {}, animationBehaviorFactory: AnimationBehaviorFactory){
            this(image, image.getWidth(), image.getHeight(), dx, dy, animationBehaviorFactory);
                        //var image = image
    //var dx = dx
    //var dy = dy
    //var unused = unused
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, dx: number, dy: number, unused: any = {}, angleIncrement: number){
            this(image, image.getWidth(), image.getHeight(), dx, dy, angleIncrement, AnimationBehaviorFactory.getInstance());
                        //var image = image
    //var dx = dx
    //var dy = dy
    //var unused = unused
    //var angleIncrement = angleIncrement


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, dx: number, dy: number, angleIncrement: number, unused: any = {}, animationBehaviorFactory: AnimationBehaviorFactory){
            this(image, image.getWidth(), image.getHeight(), dx, dy, angleIncrement, animationBehaviorFactory);
                        //var image = image
    //var dx = dx
    //var dy = dy
    //var angleIncrement = angleIncrement
    //var unused = unused
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, width: number, height: number, dx: number, dy: number, angleIncrement: number){
            this(image, width, height, angleIncrement, AnimationBehaviorFactory.getInstance());
                        //var image = image
    //var width = width
    //var height = height
    //var dx = dx
    //var dy = dy
    //var angleIncrement = angleIncrement


                            //For kotlin this is before the body of the constructor.
                    
this.animationFactoryInitializationVisitor!.dx= dx;
    
this.animationFactoryInitializationVisitor!.dy= dy;
    
this.animationFactoryInitializationVisitor!.originalDx= dx;
    
this.animationFactoryInitializationVisitor!.originalDy= dy;
    
}

public constructor (image: Image, width: number, height: number, dx: number, dy: number, angleIncrement: number, animationBehaviorFactory: AnimationBehaviorFactory){
            this(image, width, height, angleIncrement, animationBehaviorFactory);
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

public constructor (image: Image, width: number, height: number, dx: number, dy: number){
            this(image, width, height, AnimationBehaviorFactory.getInstance());
                        //var image = image
    //var width = width
    //var height = height
    //var dx = dx
    //var dy = dy


                            //For kotlin this is before the body of the constructor.
                    
this.animationFactoryInitializationVisitor!.dx= dx;
    
this.animationFactoryInitializationVisitor!.dy= dy;
    
this.animationFactoryInitializationVisitor!.originalDx= dx;
    
this.animationFactoryInitializationVisitor!.originalDy= dy;
    
}

public constructor (image: Image, width: number, height: number, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory){
            this(image, width, height, animationBehaviorFactory);
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

public constructor (image: Image){
            this(image, image.getWidth(), image.getHeight(), AnimationBehaviorFactory.getInstance());
                        //var image = image


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, animationBehaviorFactory: AnimationBehaviorFactory){
            this(image, image.getWidth(), image.getHeight(), animationBehaviorFactory);
                        //var image = image
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, width: number, height: number){
            this(image, width, height, AnimationBehaviorFactory.getInstance());
                        //var image = image
    //var width = width
    //var height = height


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, width: number, height: number, animationBehaviorFactory: AnimationBehaviorFactory){
            this(image, width, height, (AngleFactory.getInstance()!.TOTAL_ANGLE /GameConfigurationCentral.getInstance()!.getGameControlFidelity()), animationBehaviorFactory);
                        //var image = image
    //var width = width
    //var height = height
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, width: number, height: number, angleIncrement: number){
            this(image, width, height, angleIncrement, AnimationBehaviorFactory.getInstance());
                        //var image = image
    //var width = width
    //var height = height
    //var angleIncrement = angleIncrement


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, width: number, height: number, angleIncrement: number, animationBehaviorFactory: AnimationBehaviorFactory){
            super(image, width, height, animationBehaviorFactory);
                        //var image = image
    //var width = width
    //var height = height
    //var angleIncrement = angleIncrement
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
this.angleIncrement= angleIncrement;
    
}


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId

    var scaledImage: Image = animationFactoryImageScaleUtil!.createImage(this.getImage(), this.animationFactoryInitializationVisitor!.width, this.animationFactoryInitializationVisitor!.height, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight)!;
        
        
;
    

    var copyOfScaledImage: Image = ImageCopyUtil.getInstance()!.createImage(scaledImage)!;
        
        
;
    

                        if(this.animationFactoryInitializationVisitor!.dx != 0 || this.animationFactoryInitializationVisitor!.dy != 0)
                        
                                    {
                                    animationFactoryImageScaleUtil!.processAdjust(this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AllBinaryAdjustedHTMLImageRotationAnimation(scaledImage, copyOfScaledImage, AngleInfo.getInstance(this.getAngleIncrement()), AngleFactory.getInstance()!.TOTAL_ANGLE, this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AllBinaryHTMLImageRotationAnimation(scaledImage, copyOfScaledImage, AngleInfo.getInstance(this.angleIncrement), AngleFactory.getInstance()!.TOTAL_ANGLE, this.animationBehaviorFactory!.getOrCreateInstance());
    

                        }
                            
}


    getAngleIncrement(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return angleIncrement;
    
}


}
                
            

