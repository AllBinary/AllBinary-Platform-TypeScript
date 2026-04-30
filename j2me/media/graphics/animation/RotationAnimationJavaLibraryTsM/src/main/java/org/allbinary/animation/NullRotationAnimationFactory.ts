
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
        



import { Graphics } from "../../../javax/microedition/lcdui/Graphics.js";

    
import { AngleFactory } from "../../../org/allbinary/math/AngleFactory.js";

    
import { AngleInfo } from "../../../org/allbinary/math/AngleInfo.js";

    
import { ScaleProperties } from "../../../org/allbinary/media/ScaleProperties.js";

    
import { CircularIndexUtil } from "../../../org/allbinary/util/CircularIndexUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AnimationInterfaceFactoryInterface } from "./AnimationInterfaceFactoryInterface.js";

import { ProceduralAnimationInterfaceFactoryInterface } from "./ProceduralAnimationInterfaceFactoryInterface.js";

import { RotationAnimation } from "./RotationAnimation.js";

import { NullRotationAnimation } from "./NullRotationAnimation.js";

import { AnimationBehavior } from "./AnimationBehavior.js";

import { Animation } from "./Animation.js";

export class NullRotationAnimationFactory
            extends Object
         implements AnimationInterfaceFactoryInterface, ProceduralAnimationInterfaceFactoryInterface {
        

    private NULL_ROTATION_ANIMATION_FACTORY: NullRotationAnimationFactory = new NullRotationAnimationFactory();

    public static getFactoryInstance(): NullRotationAnimationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullRotationAnimationFactory.NULL_ROTATION_ANIMATION_FACTORY;
    
}


    public readonly NULL_ROTATION_ANIMATION_ARRAY: RotationAnimation[] = [];

    private readonly NULL_ANIMATION: Animation = new NullRotationAnimation(AngleInfo.getInstance(AngleFactory.getInstance()!.QUARTER_TOTAL_ANGLE), CircularIndexUtil.createInstance(4), AnimationBehavior.getInstance())
                                {
                                
    public paintXY(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y
}

                                }
                            ;
private constructor (){

            super();
        }


    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NULL_ANIMATION;
    
}


                //@Throws(Error::class)
            
    public getInstanceAnimation(animationInterface: Animation): Animation{
var animationInterface = animationInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NULL_ANIMATION;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
    //var scaleProperties = scaleProperties
}


}
                
            

