
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
        



            import { Object } from "../../../java/lang/Object.js";


        
            import { Exception } from "../../../java/lang/Exception.js";
        
import { Graphics } from "../../../javax/microedition/lcdui/Graphics.js";

    
import { ScaleProperties } from "../../../org/allbinary/media/ScaleProperties.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AnimationInterfaceFactoryInterface } from "./AnimationInterfaceFactoryInterface.js";
import { ProceduralAnimationInterfaceFactoryInterface } from "./ProceduralAnimationInterfaceFactoryInterface.js";
import { IndexedAnimationInterface } from "./IndexedAnimationInterface.js";
import { NullIndexedAnimation } from "./NullIndexedAnimation.js";
import { AnimationBehavior } from "./AnimationBehavior.js";
import { Animation } from "./Animation.js";

export class NullIndexedAnimationFactory
            extends Object
         implements AnimationInterfaceFactoryInterface, ProceduralAnimationInterfaceFactoryInterface {
        

    public static readonly NULL_INDEXED_ANIMATION_ARRAY: IndexedAnimationInterface[] = [];

    private NULL_INDEXED_ANIMATION_FACTORY: NullIndexedAnimationFactory = new NullIndexedAnimationFactory();

    public static getFactoryInstance(): NullIndexedAnimationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullIndexedAnimationFactory.NULL_INDEXED_ANIMATION_FACTORY;
    
}


    private readonly NULL_ANIMATION: Animation = new NullIndexedAnimation(AnimationBehavior.getInstance())
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


                //@Throws(Exception::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NULL_ANIMATION;
    
}


                //@Throws(Exception::class)
            
    public getInstanceAnimation(animationInterface: Animation): Animation{
    //var animationInterface = animationInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NULL_ANIMATION;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
    //var scaleProperties = scaleProperties
}


}
                
            

