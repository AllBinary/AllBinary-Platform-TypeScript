
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

    
import { AnimationInterfaceFactoryInterface } from "../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js";

    
import { GameConfigurationCentral } from "../../../../org/allbinary/game/configuration/GameConfigurationCentral.js";

    
import { NullUtil } from "../../../../org/allbinary/logic/NullUtil.js";

    
import { AngleFactory } from "../../../../org/allbinary/math/AngleFactory.js";

    
import { ScaleProperties } from "../../../../org/allbinary/media/ScaleProperties.js";

    
import { ImageToRotationImageArrayUtil } from "../../../../org/allbinary/media/image/ImageToRotationImageArrayUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AdjustedImageArrayRotationAnimation } from "./AdjustedImageArrayRotationAnimation.js";

export class PooledImageArrayRotationAnimationFactory
            extends Object
         implements AnimationInterfaceFactoryInterface {
        

                //@Throws(Error::class)
            
    public static create(image: Image, animationBehaviorFactory: AnimationBehaviorFactory): PooledImageArrayRotationAnimationFactory{
    //var image = image
    //var animationBehaviorFactory = animationBehaviorFactory

    var totalAngle: number = AngleFactory.getInstance()!.TOTAL_ANGLE;
        
        
;
    

    var angleIncrement: number = (totalAngle /GameConfigurationCentral.getInstance()!.getGameControlFidelity());
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new PooledImageArrayRotationAnimationFactory(image, image.getWidth(), image.getHeight(),  -(image.getWidth()>>2),  -(image.getHeight()>>2), angleIncrement, animationBehaviorFactory);
    
}


                //@Throws(Error::class)
            
    public static createDX(image: Image, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory): PooledImageArrayRotationAnimationFactory{
    //var image = image
    //var dx = dx
    //var dy = dy
    //var animationBehaviorFactory = animationBehaviorFactory

    var totalAngle: number = AngleFactory.getInstance()!.TOTAL_ANGLE;
        
        
;
    

    var angleIncrement: number = (totalAngle /GameConfigurationCentral.getInstance()!.getGameControlFidelity());
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new PooledImageArrayRotationAnimationFactory(image, image.getWidth(), image.getHeight(), dx, dy, angleIncrement, animationBehaviorFactory);
    
}


    private allBinaryImageRotationAnimationInfo: any = NullUtil.getInstance()!.NULL_OBJECT;
        
        

    private readonly animationBehaviorFactory: AnimationBehaviorFactory
public constructor (image: Image, width: number, height: number, dx: number, dy: number, angleIncrement: number, animationBehaviorFactory: AnimationBehaviorFactory){

            super();
            //var image = image
    //var width = width
    //var height = height
    //var dx = dx
    //var dy = dy
    //var angleIncrement = angleIncrement
    //var animationBehaviorFactory = animationBehaviorFactory
this.animationBehaviorFactory= animationBehaviorFactory;
    

    var totalAngle: number = AngleFactory.getInstance()!.TOTAL_ANGLE;
        
        
;
    

    var imageArray: Image[] = ImageToRotationImageArrayUtil.getInstance()!.generate(image, angleIncrement, totalAngle)!;
        
        
;
    
this.allBinaryImageRotationAnimationInfo= new ImageArrayRotationAnimationInfo(imageArray, angleIncrement, totalAngle, dx, dy);
    
}


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AdjustedImageArrayRotationAnimation.createAdjustedImageArrayRotationAnimationInfo(this.allBinaryImageRotationAnimationInfo, this.animationBehaviorFactory!.getOrCreateInstance());;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
    //var scaleProperties = scaleProperties
}


}
                
            

