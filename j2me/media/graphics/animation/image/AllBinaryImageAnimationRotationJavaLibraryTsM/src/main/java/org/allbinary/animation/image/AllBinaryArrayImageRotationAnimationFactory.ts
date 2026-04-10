
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

    
import { NullCanvas } from "../../../../javax/microedition/lcdui/NullCanvas.js";

    
import { Animation } from "../../../../org/allbinary/animation/Animation.js";

    
import { AnimationBehaviorFactory } from "../../../../org/allbinary/animation/AnimationBehaviorFactory.js";

    
import { GameConfigurationCentral } from "../../../../org/allbinary/game/configuration/GameConfigurationCentral.js";

    
import { AngleFactory } from "../../../../org/allbinary/math/AngleFactory.js";

    
import { AngleInfo } from "../../../../org/allbinary/math/AngleInfo.js";

    
import { ImageToRotationImageArrayUtil } from "../../../../org/allbinary/media/image/ImageToRotationImageArrayUtil.js";

    

export class AllBinaryArrayImageRotationAnimationFactory extends BaseImageAnimationFactory {
        

    private imageArray: Image[] = NullCanvas.NULL_IMAGE_ARRAY;
        
        

    private angleIncrement: number
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

public constructor (image: Image, dx: number, dy: number, angleIncrement: number)                        

                            : this(image, image.getWidth(), image.getHeight(), dx, dy, angleIncrement, AnimationBehaviorFactory.getInstance()){

            super();
                //var image = image
    //var dx = dx
    //var dy = dy
    //var angleIncrement = angleIncrement


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
                    
this.animationFactoryInitializationVisitor!.dx= dx
this.animationFactoryInitializationVisitor!.dy= dy
this.animationFactoryInitializationVisitor!.originalDx= dx
this.animationFactoryInitializationVisitor!.originalDy= dy
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
                    
this.animationFactoryInitializationVisitor!.dx= dx
this.animationFactoryInitializationVisitor!.dy= dy
this.animationFactoryInitializationVisitor!.originalDx= dx
this.animationFactoryInitializationVisitor!.originalDy= dy
}

public constructor (image: Image, width: number, height: number, animationBehaviorFactory: AnimationBehaviorFactory)                        

                            : super(image, width, height, animationBehaviorFactory){

            super();
                //var image = image
    //var width = width
    //var height = height
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
this.angleIncrement= AngleFactory.getInstance()!.TOTAL_ANGLE /GameConfigurationCentral.getInstance()!.getGameControlFidelity()
this.init()
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
                    
this.angleIncrement= angleIncrement
this.init()
}


                //@Throws(Error::class)
            
    init(){
this.setImageArray(ImageToRotationImageArrayUtil.getInstance()!.generate(this.getImage(), this.getAngleIncrement(), AngleFactory.getInstance()!.TOTAL_ANGLE.toInt()))
}


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId

    var scaledImageArray: Image[] = new Array(this.imageArray!.length);
        
        


    var size: number = scaledImageArray!.length
                ;
        
        


    var image: Image = this.getImage()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
scaledImageArray[index]= animationFactoryImageScaleUtil!.createImage(image, image.getWidth(), image.getHeight(), this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight)
}


                        if(this.animationFactoryInitializationVisitor!.dx != 0 || this.animationFactoryInitializationVisitor!.dy != 0)
                        
                                    {
                                    animationFactoryImageScaleUtil!.processAdjust(this)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AdjustedImageArrayRotationAnimation(scaledImageArray, AngleInfo.getInstance(this.getAngleIncrement().toShort()), AngleFactory.getInstance()!.TOTAL_ANGLE.toInt(), this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageArrayRotationAnimation(scaledImageArray, AngleInfo.getInstance(this.angleIncrement.toShort()), AngleFactory.getInstance()!.TOTAL_ANGLE.toInt(), this.animationBehaviorFactory!.getOrCreateInstance());
    

                        }
                            
}


    setImageArray(imageArray: Image[]){
    //var imageArray = imageArray
this.imageArray= imageArray
}


    getAngleIncrement(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return angleIncrement;
    
}


}
                
            

