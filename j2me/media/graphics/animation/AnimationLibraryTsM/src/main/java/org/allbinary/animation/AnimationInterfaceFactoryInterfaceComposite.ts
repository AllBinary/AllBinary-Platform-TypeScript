
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
        
import { ScaleProperties } from '../../../org/allbinary/media/ScaleProperties.js';
//not GWT import const ScaleProperties = globalThis.org.allbinary.media.ScaleProperties;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AnimationInterfaceFactoryInterface } from './AnimationInterfaceFactoryInterface.js';
//not GWT import - same folder const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;

                import { NullAnimationFactory } from './NullAnimationFactory.js';
//not GWT import - same folder const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;

                import { Animation } from './Animation.js';
//not GWT import - same folder const Animation = globalThis.org.allbinary.animation.Animation;

                
export class AnimationInterfaceFactoryInterfaceComposite
            extends Object
         implements AnimationInterfaceFactoryInterface {
        

    private readonly animationInterfaceFactoryInterfaceArray: AnimationInterfaceFactoryInterface[];

public constructor (basicAnimationInterfaceFactoryInterfaceArray: AnimationInterfaceFactoryInterface[]){

            super();
        this.animationInterfaceFactoryInterfaceArray= basicAnimationInterfaceFactoryInterfaceArray;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullAnimationFactory.getFactoryInstance()!.getInstance(0);;
    
}


    public getAnimationInterfaceFactoryInterfaceArray(): AnimationInterfaceFactoryInterface[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceFactoryInterfaceArray;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
}


}



