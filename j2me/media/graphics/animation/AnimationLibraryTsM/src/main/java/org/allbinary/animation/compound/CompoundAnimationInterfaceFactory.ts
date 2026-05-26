
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
        
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      
import { AnimationBehaviorFactory } from '../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
      
import { AnimationInterfaceFactoryInterface } from '../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js';
      
import { NullAnimationFactory } from '../../../../org/allbinary/animation/NullAnimationFactory.js';
      
import { ScaleProperties } from '../../../../org/allbinary/media/ScaleProperties.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CompoundAnimationInterfaceFactory
            extends Object
         implements AnimationInterfaceFactoryInterface {
        

    readonly basicAnimationInterfaceFactoryInterfaceArrayP: AnimationInterfaceFactoryInterface[];

    readonly animationBehaviorFactory: AnimationBehaviorFactory;

public constructor (basicAnimationInterfaceFactoryInterfaceArray: AnimationInterfaceFactoryInterface[], animationBehaviorFactory: AnimationBehaviorFactory){

            super();
        this.basicAnimationInterfaceFactoryInterfaceArrayP= basicAnimationInterfaceFactoryInterfaceArray;
    
this.animationBehaviorFactory= animationBehaviorFactory;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{

    var size: number = this.basicAnimationInterfaceFactoryInterfaceArrayP!.length
                ;;
    

    var animationInterfaceArray: Animation[] = this.createArray(size)!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
animationInterfaceArray[index]= this.basicAnimationInterfaceFactoryInterfaceArrayP[index]!.getInstance(instanceId);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createAnimation(animationInterfaceArray);;
    
}


    createArray(size: number): Animation[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullAnimationFactory.getFactoryInstance()!.EMPTY_ARRAY;
    
}


    createAnimation(animationInterfaceArray: Animation[]): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullAnimationFactory.getFactoryInstance()!.getInstance(0);;
    
}


    public getBasicAnimationInterfaceFactoryInterfaceArray(): AnimationInterfaceFactoryInterface[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicAnimationInterfaceFactoryInterfaceArrayP;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){

    var size: number = this.basicAnimationInterfaceFactoryInterfaceArrayP!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
this.basicAnimationInterfaceFactoryInterfaceArrayP[index]!.setInitialScale(scaleProperties);
    
}

}


}
                
            

