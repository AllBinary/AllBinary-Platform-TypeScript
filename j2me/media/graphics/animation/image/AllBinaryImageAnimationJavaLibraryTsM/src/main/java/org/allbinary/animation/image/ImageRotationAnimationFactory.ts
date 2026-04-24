
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

    
import { PrimitiveIntUtil } from "../../../../org/allbinary/logic/math/PrimitiveIntUtil.js";

    
import { AngleFactory } from "../../../../org/allbinary/math/AngleFactory.js";

    
import { AngleInfo } from "../../../../org/allbinary/math/AngleInfo.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BaseImageAnimationFactory } from "./BaseImageAnimationFactory.js";

export class ImageRotationAnimationFactory extends BaseImageAnimationFactory {
        

    readonly angleIncrement: number
public constructor (image: Image, width: number, height: number, dx: number, dy: number, angleIncrement: number, animationBehaviorFactory: AnimationBehaviorFactory){
            super(image, PrimitiveIntUtil.getArrayInstance(), width, height, 0, 0, animationBehaviorFactory);
                        //var image = image
    //var width = width
    //var height = height
    //var dx = dx
    //var dy = dy
    //var angleIncrement = angleIncrement
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
this.angleIncrement= angleIncrement;
    
this.animationFactoryInitializationVisitor!.dx= dx;
    
this.animationFactoryInitializationVisitor!.dy= dy;
    
}


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId

                        if(this.animationFactoryInitializationVisitor!.dx != 0 || this.animationFactoryInitializationVisitor!.dy != 0)
                        
                                    {
                                    animationFactoryImageScaleUtil!.processAdjust(this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AdjustedImageBaseRotationAnimation(this.getImage(), AngleInfo.getInstance(this.angleIncrement), AngleFactory.getInstance()!.TOTAL_ANGLE, this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ImageBaseRotationAnimation(this.getImage(), AngleInfo.getInstance(this.angleIncrement), AngleFactory.getInstance()!.TOTAL_ANGLE, this.animationBehaviorFactory!.getOrCreateInstance());
    

                        }
                            
}


    getAngleIncrementP(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return angleIncrement;
    
}


}
                
            

