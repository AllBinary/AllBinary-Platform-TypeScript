
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

    
import { AnimationInterfaceFactoryInterface } from "../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js";

    
import { GameConfigurationCentral } from "../../../../org/allbinary/game/configuration/GameConfigurationCentral.js";

    
import { ImageCopyUtil } from "../../../../org/allbinary/media/image/ImageCopyUtil.js";

    
import { AngleFactory } from "../../../../org/allbinary/math/AngleFactory.js";

    
import { AngleInfo } from "../../../../org/allbinary/math/AngleInfo.js";

    
import { ScaleProperties } from "../../../../org/allbinary/media/ScaleProperties.js";

    

export class AllBinaryFlickerAndroidImageRotationAnimationFactory
            extends Object
        
                , AnimationInterfaceFactoryInterface {
        

    private image: Image = NullCanvas.NULL_IMAGE;
        
        

    private readonly angleIncrement: number

    readonly animationBehaviorFactory: AnimationBehaviorFactory
public constructor (image: Image, width: number, height: number)                        

                            : this(image, width, height, (AngleFactory.getInstance()!.TOTAL_ANGLE /GameConfigurationCentral.getInstance()!.getGameControlFidelity()).toShort(), AnimationBehaviorFactory.getInstance()){

            super();
                //var image = image
    //var width = width
    //var height = height


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, width: number, height: number, animationBehaviorFactory: AnimationBehaviorFactory)                        

                            : this(image, width, height, (AngleFactory.getInstance()!.TOTAL_ANGLE /GameConfigurationCentral.getInstance()!.getGameControlFidelity()).toShort(), animationBehaviorFactory){

            super();
                //var image = image
    //var width = width
    //var height = height
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, width: number, height: number, angleIncrement: number)                        

                            : this(image, width, height, angleIncrement, AnimationBehaviorFactory.getInstance()){

            super();
                //var image = image
    //var width = width
    //var height = height
    //var angleIncrement = angleIncrement


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, width: number, height: number, angleIncrement: number, animationBehaviorFactory: AnimationBehaviorFactory){

            super();
                //var image = image
    //var width = width
    //var height = height
    //var angleIncrement = angleIncrement
    //var animationBehaviorFactory = animationBehaviorFactory
this.setImage(image)
this.angleIncrement= angleIncrement
this.animationBehaviorFactory= animationBehaviorFactory
}


                @Throws(Exception::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId

    var image: Image = ImageCopyUtil.getInstance()!.createImage(this.getImage())!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AllBinaryFlickerAndroidImageRotationAnimation(this.getImage(), image, AngleInfo.getInstance(this.angleIncrement), AngleFactory.getInstance()!.TOTAL_ANGLE, this.animationBehaviorFactory!.getOrCreateInstance());
    
}


    getAngleIncrement(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return angleIncrement;
    
}


    setImage(image: Image){
var image = image
this.image= image
}


    getImage(): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
    //var scaleProperties = scaleProperties
}


}
                
            

