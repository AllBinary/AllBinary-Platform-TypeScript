
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
        
import { SpecialAnimation } from '../../../org/allbinary/animation/special/SpecialAnimation.js';
      //not GWT import const SpecialAnimation = globalThis.org.allbinary.animation.special.SpecialAnimation;

      
import { ScaleProperties } from '../../../org/allbinary/media/ScaleProperties.js';
      //not GWT import const ScaleProperties = globalThis.org.allbinary.media.ScaleProperties;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AnimationInterfaceFactoryInterface } from './AnimationInterfaceFactoryInterface.js';
//not GWT import const  = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;

                import { ProceduralAnimationInterfaceFactoryInterface } from './ProceduralAnimationInterfaceFactoryInterface.js';
//not GWT import const  = globalThis.org.allbinary.animation.ProceduralAnimationInterfaceFactoryInterface;

                import { Animation } from './Animation.js';
//not GWT import const  = globalThis.org.allbinary.animation.Animation;

                
export class NullSpecialAnimationFactory
            extends Object
         implements AnimationInterfaceFactoryInterface, ProceduralAnimationInterfaceFactoryInterface {
        

    private static NULL_SPECIAL_ANIMATION_FACTORY: NullSpecialAnimationFactory = new NullSpecialAnimationFactory();

    public static getFactoryInstance(): NullSpecialAnimationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullSpecialAnimationFactory.NULL_SPECIAL_ANIMATION_FACTORY;
    
}


private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SpecialAnimation.getInstance();;
    
}


                //@Throws(Exception.constructor)
            
    public getInstanceAnimation(animationInterface: Animation): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SpecialAnimation.getInstance();;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
}


}



