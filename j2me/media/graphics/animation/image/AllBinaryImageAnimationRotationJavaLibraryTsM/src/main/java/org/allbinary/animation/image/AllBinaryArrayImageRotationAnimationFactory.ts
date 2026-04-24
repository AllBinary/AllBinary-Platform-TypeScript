
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

    
import { PrimitiveIntUtil } from "../../../../org/allbinary/logic/math/PrimitiveIntUtil.js";

    
import { AngleFactory } from "../../../../org/allbinary/math/AngleFactory.js";

    
import { AngleInfo } from "../../../../org/allbinary/math/AngleInfo.js";

    
import { ImageToRotationImageArrayUtil } from "../../../../org/allbinary/media/image/ImageToRotationImageArrayUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BaseImageAnimationFactory } from "./BaseImageAnimationFactory.js";

export class AllBinaryArrayImageRotationAnimationFactory extends BaseImageAnimationFactory {
        

                //@Throws(Error::class)
            
    public static create(image: Image, dx: number, dy: number): AllBinaryArrayImageRotationAnimationFactory{
    //var image = image
    //var dx = dx
    //var dy = dy

    var arrayImageRotationAnimationFactory: AllBinaryArrayImageRotationAnimationFactory = new AllBinaryArrayImageRotationAnimationFactory(image, image.getWidth(), image.getHeight(), AngleFactory.getInstance()!.TOTAL_ANGLE /GameConfigurationCentral.getInstance()!.getGameControlFidelity(), AnimationBehaviorFactory.getInstance());
        
        
;
    
arrayImageRotationAnimationFactory!.init(dx, dy);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return arrayImageRotationAnimationFactory;
    
}


                //@Throws(Error::class)
            
    public static createA(image: Image, dx: number, dy: number, angleIncrement: number): AllBinaryArrayImageRotationAnimationFactory{
    //var image = image
    //var dx = dx
    //var dy = dy
    //var angleIncrement = angleIncrement

    var arrayImageRotationAnimationFactory: AllBinaryArrayImageRotationAnimationFactory = new AllBinaryArrayImageRotationAnimationFactory(image, image.getWidth(), image.getHeight(), angleIncrement, AnimationBehaviorFactory.getInstance());
        
        
;
    
arrayImageRotationAnimationFactory!.init(dx, dy);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return arrayImageRotationAnimationFactory;
    
}


    private imageArray: Image[] = NullCanvas.NULL_IMAGE_ARRAY;
        
        

    private angleIncrement: number
public constructor (image: Image, width: number, height: number, angleIncrement: number, animationBehaviorFactory: AnimationBehaviorFactory){
            super(image, PrimitiveIntUtil.getArrayInstance(), width, height, 0, 0, animationBehaviorFactory);
                        //var image = image
    //var width = width
    //var height = height
    //var angleIncrement = angleIncrement
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
this.angleIncrement= angleIncrement;
    
this.init();
    
}


                //@Throws(Error::class)
            
    init(){
this.setImageArray(ImageToRotationImageArrayUtil.getInstance()!.generate(this.getImage(), this.getAngleIncrement(), AngleFactory.getInstance()!.TOTAL_ANGLE));
    
}


    init(dx: number, dy: number){
    //var dx = dx
    //var dy = dy
this.animationFactoryInitializationVisitor!.dx= dx;
    
this.animationFactoryInitializationVisitor!.dy= dy;
    
this.animationFactoryInitializationVisitor!.originalDx= dx;
    
this.animationFactoryInitializationVisitor!.originalDy= dy;
    
}


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId

    var scaledImageArray: Image[] = new Array(this.imageArray!.length);
        
        
;
    

    var size: number = scaledImageArray!.length
                ;
        
        
;
    

    var image: Image = this.getImage()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
scaledImageArray[index]= animationFactoryImageScaleUtil!.createImage(image, image.getWidth(), image.getHeight(), this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight);
    
}


                        if(this.animationFactoryInitializationVisitor!.dx != 0 || this.animationFactoryInitializationVisitor!.dy != 0)
                        
                                    {
                                    animationFactoryImageScaleUtil!.processAdjust(this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AdjustedImageArrayRotationAnimation(scaledImageArray, AngleInfo.getInstance(this.getAngleIncrement()), AngleFactory.getInstance()!.TOTAL_ANGLE, this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ImageArrayRotationAnimation(scaledImageArray, AngleInfo.getInstance(this.getAngleIncrement()), AngleFactory.getInstance()!.TOTAL_ANGLE, this.animationBehaviorFactory!.getOrCreateInstance());
    

                        }
                            
}


    setImageArray(imageArray: Image[]){
    //var imageArray = imageArray
this.imageArray= imageArray;
    
}


    getAngleIncrement(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return angleIncrement;
    
}


}
                
            

