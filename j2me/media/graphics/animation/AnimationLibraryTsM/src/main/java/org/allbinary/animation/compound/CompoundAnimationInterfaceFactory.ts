
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

    
import { NullAnimationFactory } from "../../../../org/allbinary/animation/NullAnimationFactory.js";

    
import { ScaleProperties } from "../../../../org/allbinary/media/ScaleProperties.js";

    

export class CompoundAnimationInterfaceFactory
            extends Object
        
                , AnimationInterfaceFactoryInterface {
        

    readonly basicAnimationInterfaceFactoryInterfaceArrayP: AnimationInterfaceFactoryInterface[]

    readonly animationBehaviorFactory: AnimationBehaviorFactory
public constructor (basicAnimationInterfaceFactoryInterfaceArray: AnimationInterfaceFactoryInterface[], animationBehaviorFactory: AnimationBehaviorFactory){

            super();
                //var basicAnimationInterfaceFactoryInterfaceArray = basicAnimationInterfaceFactoryInterfaceArray
    //var animationBehaviorFactory = animationBehaviorFactory
this.basicAnimationInterfaceFactoryInterfaceArrayP= basicAnimationInterfaceFactoryInterfaceArray
this.animationBehaviorFactory= animationBehaviorFactory
}


                @Throws(Exception::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId

    var size: number = this.basicAnimationInterfaceFactoryInterfaceArrayP!.length
                ;
        
        


    var animationInterfaceArray: Animation[] = this.createArray(size)!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
animationInterfaceArray[index]= this.basicAnimationInterfaceFactoryInterfaceArrayP[index]!.getInstance(instanceId)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(animationInterfaceArray);
    
}


    createArray(size: number): Animation[]{
    //var size = size



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullAnimationFactory.getFactoryInstance()!.EMPTY_ARRAY;
    
}


    getInstance(animationInterfaceArray: Animation[]): Animation{
    //var animationInterfaceArray = animationInterfaceArray



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullAnimationFactory.getFactoryInstance()!.getInstance(0);
    
}


    public getBasicAnimationInterfaceFactoryInterfaceArray(): AnimationInterfaceFactoryInterface[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicAnimationInterfaceFactoryInterfaceArrayP;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
    //var scaleProperties = scaleProperties

    var size: number = this.basicAnimationInterfaceFactoryInterfaceArrayP!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
setInitialScale(scaleProperties)
}

}


}
                
            

