
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
      
import { ScaleProperties } from '../../../org/allbinary/media/ScaleProperties.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AnimationInterfaceFactoryInterface } from './AnimationInterfaceFactoryInterface.js';
import { ProceduralAnimationInterfaceFactoryInterface } from './ProceduralAnimationInterfaceFactoryInterface.js';
import { Animation } from './Animation.js';

export class NullAnimationFactory
            extends Object
         implements AnimationInterfaceFactoryInterface, ProceduralAnimationInterfaceFactoryInterface {
        

    public static NULL_NOT_FOR_USE_ANIMATION_FACTORY: NullAnimationFactory = new NullAnimationFactory();

    private static NULL_ANIMATION_FACTORY: NullAnimationFactory = new NullAnimationFactory();

    public static getFactoryInstance(): NullAnimationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullAnimationFactory.NULL_ANIMATION_FACTORY;
    
}


    private readonly NULL_ANIMATION: Animation = new class extends Animation
                                {
                                
    public paintXY(graphics: Graphics, x: number, y: number){
}

                                }
                            ;

    public readonly EMPTY_ARRAY: Animation[] = [];
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
                
            

