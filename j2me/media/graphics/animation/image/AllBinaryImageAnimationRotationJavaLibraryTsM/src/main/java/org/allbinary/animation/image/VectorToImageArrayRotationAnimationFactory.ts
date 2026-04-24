
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

    
import { VectorAnimation } from "../../../../org/allbinary/animation/VectorAnimation.js";

    
import { GameConfigurationCentral } from "../../../../org/allbinary/game/configuration/GameConfigurationCentral.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { AnimationFrameToImageUtil } from "../../../../org/allbinary/image/AnimationFrameToImageUtil.js";

    
import { PrimitiveIntUtil } from "../../../../org/allbinary/logic/math/PrimitiveIntUtil.js";

    
import { AngleFactory } from "../../../../org/allbinary/math/AngleFactory.js";

    
import { AngleInfo } from "../../../../org/allbinary/math/AngleInfo.js";

    
import { ScaleProperties } from "../../../../org/allbinary/media/ScaleProperties.js";

    
import { ImageToRotationImageArrayUtil } from "../../../../org/allbinary/media/image/ImageToRotationImageArrayUtil.js";

    
import { VectorInfo } from "../../../../org/allbinary/vector/VectorInfo.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BaseImageAnimationFactory } from "./BaseImageAnimationFactory.js";

import { AdjustedImageArrayRotationAnimation } from "./AdjustedImageArrayRotationAnimation.js";

export class VectorToImageArrayRotationAnimationFactory extends BaseImageAnimationFactory {
        

    private imageArray: Image[] = NullCanvas.NULL_IMAGE_ARRAY;
        
        

    private angleIncrement: number= 0
public constructor (vectorInfo: VectorInfo, basicColor: BasicColor, animationBehaviorFactory: AnimationBehaviorFactory){
            super(AnimationFrameToImageUtil.getInstance()!.getInstanceTranslate(vectorInfo!.getWidth(), vectorInfo!.getHeight(), new VectorAnimation(vectorInfo!.getPoints(), basicColor, animationBehaviorFactory!.getOrCreateInstance())), PrimitiveIntUtil.getArrayInstance(), 0, 0, 0, 0, animationBehaviorFactory);
                        //var vectorInfo = vectorInfo
    //var basicColor = basicColor
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
this.init();
    
}


                //@Throws(Error::class)
            
    init(){

    var angleFactory: AngleFactory = AngleFactory.getInstance()!;
        
        
;
    
this.angleIncrement= angleFactory!.TOTAL_ANGLE /GameConfigurationCentral.getInstance()!.getGameControlFidelity();
    
this.imageArray= ImageToRotationImageArrayUtil.getInstance()!.generate(this.getImage(), this.getAngleIncrement(), angleFactory!.TOTAL_ANGLE);
    
}


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId

                        if(this.animationFactoryInitializationVisitor!.dx != 0 || this.animationFactoryInitializationVisitor!.dy != 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AdjustedImageArrayRotationAnimation(this.imageArray, AngleInfo.getInstance(this.getAngleIncrement()), AngleFactory.getInstance()!.TOTAL_ANGLE, this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AdjustedImageArrayRotationAnimation.create(this.imageArray, AngleInfo.getInstance(this.angleIncrement), AngleFactory.getInstance()!.TOTAL_ANGLE, this.animationBehaviorFactory!.getOrCreateInstance());;
    

                        }
                            
}


    getAngleIncrement(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return angleIncrement;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
    //var scaleProperties = scaleProperties
}


}
                
            

