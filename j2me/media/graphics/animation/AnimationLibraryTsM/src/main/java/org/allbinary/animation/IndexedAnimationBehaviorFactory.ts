
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        













        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AnimationBehaviorFactory } from "./AnimationBehaviorFactory.js";

import { AnimationBehavior } from "./AnimationBehavior.js";

export class IndexedAnimationBehaviorFactory extends AnimationBehaviorFactory {
        

    public frameDelayTime: number

    public loopTotal: number
public constructor (loopTotal: number, frameDelayTime: number){

            super();
                //var loopTotal = loopTotal
    //var frameDelayTime = frameDelayTime
this.loopTotal= loopTotal;
    
this.frameDelayTime= frameDelayTime;
    
}


    public getOrCreateInstance(): AnimationBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new IndexedAnimationBehavior(this.loopTotal, this.frameDelayTime);
    
}


}
                
            

