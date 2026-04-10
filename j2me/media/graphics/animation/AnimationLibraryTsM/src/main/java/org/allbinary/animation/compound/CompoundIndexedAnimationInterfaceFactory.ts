
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

    

export class CompoundIndexedAnimationInterfaceFactory extends CompoundAnimationInterfaceFactory {
        
public constructor (basicAnimationInterfaceFactoryInterfaceArray: AnimationInterfaceFactoryInterface[])                        

                            : this(basicAnimationInterfaceFactoryInterfaceArray, AnimationBehaviorFactory.getInstance()){

            super();
                //var basicAnimationInterfaceFactoryInterfaceArray = basicAnimationInterfaceFactoryInterfaceArray


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (basicAnimationInterfaceFactoryInterfaceArray: AnimationInterfaceFactoryInterface[], animationBehaviorFactory: AnimationBehaviorFactory)                        

                            : super(basicAnimationInterfaceFactoryInterfaceArray, animationBehaviorFactory){

            super();
                //var basicAnimationInterfaceFactoryInterfaceArray = basicAnimationInterfaceFactoryInterfaceArray
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
}


    createArray(size: number): Animation[]{
    //var size = size



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Array(size);
    
}


    getInstance(animationArray: Animation[]): Animation{
    //var animationArray = animationArray



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CompoundIndexedAnimation(animationArray, this.animationBehaviorFactory!.getOrCreateInstance());
    
}


}
                
            

