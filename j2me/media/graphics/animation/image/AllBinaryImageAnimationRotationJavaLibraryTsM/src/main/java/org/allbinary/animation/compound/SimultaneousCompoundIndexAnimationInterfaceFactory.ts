
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
        



import { Animation } from "../../../../org/allbinary/animation/Animation.js";

    
import { AnimationBehaviorFactory } from "../../../../org/allbinary/animation/AnimationBehaviorFactory.js";

    
import { AnimationInterfaceFactoryInterface } from "../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js";

    
import { IndexedAnimation } from "../../../../org/allbinary/animation/IndexedAnimation.js";

    
import { ScaleProperties } from "../../../../org/allbinary/media/ScaleProperties.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class SimultaneousCompoundIndexAnimationInterfaceFactory
            extends Object
         implements AnimationInterfaceFactoryInterface {
        

    private readonly basicAnimationInterfaceFactoryInterfaceArray: AnimationInterfaceFactoryInterface[]

    private readonly animationBehaviorFactory: AnimationBehaviorFactory
public constructor (basicAnimationInterfaceFactoryInterfaceArray: AnimationInterfaceFactoryInterface[], animationBehaviorFactory: AnimationBehaviorFactory){

            super();
            //var basicAnimationInterfaceFactoryInterfaceArray = basicAnimationInterfaceFactoryInterfaceArray
    //var animationBehaviorFactory = animationBehaviorFactory
this.basicAnimationInterfaceFactoryInterfaceArray= basicAnimationInterfaceFactoryInterfaceArray;
    
this.animationBehaviorFactory= animationBehaviorFactory;
    
}


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId

    var size: number = this.basicAnimationInterfaceFactoryInterfaceArray!.length
                ;
        
        
;
    

    var animationInterfaceArray: IndexedAnimation[] = new Array(size);
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
animationInterfaceArray[index]= this.basicAnimationInterfaceFactoryInterfaceArray[index]!.getInstance(instanceId); as IndexedAnimation;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(animationInterfaceArray);;
    
}


    getInstance(animationInterfaceArray: IndexedAnimation[]): Animation{
    //var animationInterfaceArray = animationInterfaceArray



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new SimultaneousCompoundIndexAnimation(animationInterfaceArray, this.animationBehaviorFactory!.getOrCreateInstance());
    
}


    public getBasicAnimationInterfaceFactoryInterfaceArray(): AnimationInterfaceFactoryInterface[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicAnimationInterfaceFactoryInterfaceArray;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
    //var scaleProperties = scaleProperties
}


}
                
            

