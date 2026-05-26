
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
        



            import { Object } from '../../../java/lang/Object.js';


        
            import { Exception } from '../../../java/lang/Exception.js';
        
import { Graphics } from '../../../javax/microedition/lcdui/Graphics.js';
      
import { AngleFactory } from '../../../org/allbinary/math/AngleFactory.js';
      
import { AngleInfo } from '../../../org/allbinary/math/AngleInfo.js';
      
import { ScaleProperties } from '../../../org/allbinary/media/ScaleProperties.js';
      
import { CircularIndexUtil } from '../../../org/allbinary/util/CircularIndexUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AnimationInterfaceFactoryInterface } from './AnimationInterfaceFactoryInterface.js';
import { ProceduralAnimationInterfaceFactoryInterface } from './ProceduralAnimationInterfaceFactoryInterface.js';
import { RotationAnimation } from './RotationAnimation.js';
import { NullRotationAnimation } from './NullRotationAnimation.js';
import { AnimationBehavior } from './AnimationBehavior.js';
import { Animation } from './Animation.js';

export class NullRotationAnimationFactory
            extends Object
         implements AnimationInterfaceFactoryInterface, ProceduralAnimationInterfaceFactoryInterface {
        

    private static NULL_ROTATION_ANIMATION_FACTORY: NullRotationAnimationFactory = new NullRotationAnimationFactory();

    public static getFactoryInstance(): NullRotationAnimationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullRotationAnimationFactory.NULL_ROTATION_ANIMATION_FACTORY;
    
}


    public readonly NULL_ROTATION_ANIMATION_ARRAY: RotationAnimation[] = [];

    private readonly NULL_ANIMATION: Animation = new class extends NullRotationAnimation
                                {
                                
    public paintXY(graphics: Graphics, x: number, y: number){
}

                                }
                            ;

private constructor (){

            super();
        }


    public getInstance(instanceId: number): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.NULL_ANIMATION;
    
}


                //@Throws(Exception.constructor)
            
    public getInstanceAnimation(animationInterface: Animation): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.NULL_ANIMATION;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
}


}
                
            

