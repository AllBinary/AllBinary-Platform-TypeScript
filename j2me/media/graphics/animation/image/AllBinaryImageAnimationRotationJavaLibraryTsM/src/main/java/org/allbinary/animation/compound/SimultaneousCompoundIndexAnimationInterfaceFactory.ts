
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      const Animation = globalThis.org.allbinary.animation.Animation;

      
//not game specific package import { AnimationBehaviorFactory } from '../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
      const AnimationBehaviorFactory = globalThis.org.allbinary.animation.AnimationBehaviorFactory;

      
//not game specific package import { AnimationInterfaceFactoryInterface } from '../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js';
      const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;

      
//not game specific package import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
      const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;

      
//not game specific package import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { ScaleProperties } from '../../../../org/allbinary/media/ScaleProperties.js';
      const ScaleProperties = globalThis.org.allbinary.media.ScaleProperties;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SimultaneousCompoundIndexAnimation } from './SimultaneousCompoundIndexAnimation.js';

export class SimultaneousCompoundIndexAnimationInterfaceFactory
            extends Object
         implements AnimationInterfaceFactoryInterface {
        

    private readonly basicAnimationInterfaceFactoryInterfaceArray: AnimationInterfaceFactoryInterface[];

    private readonly animationBehaviorFactory: AnimationBehaviorFactory;

public constructor (basicAnimationInterfaceFactoryInterfaceArray: AnimationInterfaceFactoryInterface[], animationBehaviorFactory: AnimationBehaviorFactory){

            super();
        this.basicAnimationInterfaceFactoryInterfaceArray= basicAnimationInterfaceFactoryInterfaceArray;
    
this.animationBehaviorFactory= animationBehaviorFactory;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{

    var size: number = this.basicAnimationInterfaceFactoryInterfaceArray!.length
                ;;
    

    var animationInterfaceArray: IndexedAnimation[] = new Array(size);;
    




                        for (
    var index: number = 0;index < size; index++)
        {
animationInterfaceArray[index]= this.basicAnimationInterfaceFactoryInterfaceArray[index]!.getInstance(instanceId) as IndexedAnimation;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getOrCreate(animationInterfaceArray);;
    
}


    getOrCreate(animationInterfaceArray: IndexedAnimation[]): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new SimultaneousCompoundIndexAnimation(animationInterfaceArray, this.animationBehaviorFactory!.getOrCreateInstance());
    
}


    public getBasicAnimationInterfaceFactoryInterfaceArray(): AnimationInterfaceFactoryInterface[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicAnimationInterfaceFactoryInterfaceArray;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
}


}
                
            

